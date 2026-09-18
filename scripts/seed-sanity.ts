import { createClient } from "@sanity/client";
import { existsSync, readFileSync } from "node:fs";
import { basename, join } from "node:path";
import { randomBytes } from "node:crypto";
import { services } from "../sanity/seed/services";
import { aboutPage, homepage, navigation, teamMembers, testimonials } from "../sanity/seed/site";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const token = process.env.SANITY_API_TOKEN;

if (!projectId || !dataset || !token || projectId.startsWith("YOUR")) {
  console.error("Set NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET and SANITY_API_TOKEN in .env.local");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2025-01-29",
  useCdn: false,
});

const heroesDir = join(process.cwd(), "public/images/heroes");
const uploadedImages = new Map<string, string>();

async function imageRef(fileName: string) {
  const cached = uploadedImages.get(fileName);
  if (cached) return { _type: "image", asset: { _type: "reference", _ref: cached } };

  const existing = await client.fetch<string | null>(
    `*[_type == "sanity.imageAsset" && originalFilename == $name][0]._id`,
    { name: fileName },
  );
  let assetId = existing;
  if (!assetId) {
    const filePath = join(heroesDir, fileName);
    if (!existsSync(filePath)) throw new Error(`Missing image ${filePath}`);
    const asset = await client.assets.upload("image", readFileSync(filePath), {
      filename: basename(filePath),
    });
    assetId = asset._id;
    console.log(`  uploaded ${fileName}`);
  }
  uploadedImages.set(fileName, assetId);
  return { _type: "image", asset: { _type: "reference", _ref: assetId } };
}

const newKey = () => randomBytes(6).toString("hex");

function withKeys<T>(value: T): T {
  if (Array.isArray(value)) {
    return value.map((item) =>
      item && typeof item === "object" && !Array.isArray(item)
        ? { _key: newKey(), ...withKeys(item) }
        : withKeys(item),
    ) as T;
  }
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value as Record<string, unknown>).map(([k, v]) => [k, withKeys(v)]),
    ) as T;
  }
  return value;
}

async function upsertByField(type: string, field: string, value: string, doc: Record<string, unknown>) {
  const existingId = await client.fetch<string | null>(
    `*[_type == $type && ${field} == $value][0]._id`,
    { type, value },
  );
  if (existingId) {
    await client.patch(existingId).set(doc).commit();
    return existingId;
  }
  const created = await client.create({ _type: type, ...doc });
  return created._id;
}

async function seedServices() {
  console.log("Services");
  for (const { service, seo } of services) {
    const { slug, hero, ...rest } = service;
    const doc = withKeys({
      title: hero.title,
      slug: { _type: "slug", current: slug },
      ...rest,
      hero: {
        title: hero.title,
        description: hero.description,
        imageAlt: hero.imageAlt,
        image: await imageRef(hero.image),
      },
      seo,
    });
    await upsertByField("service", "slug.current", slug, doc);
    console.log(`  ${slug}`);
  }
}

async function seedTestimonials() {
  console.log("Testimonials");
  const ids: string[] = [];
  for (const testimonial of testimonials) {
    ids.push(await upsertByField("testimonial", "author", testimonial.author, testimonial));
  }
  return ids;
}

async function seedTeam() {
  console.log("Team members");
  const ids: string[] = [];
  for (const member of teamMembers) {
    ids.push(await upsertByField("teamMember", "name", member.name, member));
  }
  return ids;
}

async function seedSingletons(testimonialIds: string[], teamIds: string[]) {
  console.log("Singletons");
  const toRefs = (ids: string[]) =>
    ids.map((id) => ({ _type: "reference", _ref: id, _key: newKey() }));

  const { hero, about, ...homepageRest } = homepage;
  await client.createOrReplace(
    withKeys({
      ...homepageRest,
      hero: { ...hero, bgImage: await imageRef(hero.bgImage) },
      about: { ...about, image: await imageRef(about.image) },
      testimonials: toRefs(testimonialIds),
      team: { ...homepage.team, members: toRefs(teamIds) },
    }),
  );
  console.log("  homepage");

  const { hero: aboutHero, ...aboutRest } = aboutPage;
  await client.createOrReplace(
    withKeys({
      ...aboutRest,
      hero: { ...aboutHero, image: await imageRef(aboutHero.image) },
    }),
  );
  console.log("  aboutPage");

  await client.createOrReplace(withKeys(navigation));
  console.log("  navigation");
}

async function main() {
  await seedServices();
  const testimonialIds = await seedTestimonials();
  const teamIds = await seedTeam();
  await seedSingletons(testimonialIds, teamIds);
  console.log("Done");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
