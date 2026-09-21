import { createClient } from "@sanity/client";
import { upgradeNavigation } from "./lib/navigationMigration";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2025-01-29",
  useCdn: false,
});

async function addMissingServiceListings() {
  const { services } = await import("../sanity/seed/services");
  for (const { service } of services) {
    if (!service.listing) continue;
    const id = await client.fetch<string | null>(
      `*[_type == "service" && slug.current == $slug && !(_id in path("drafts.**"))][0]._id`,
      { slug: service.slug },
    );
    if (!id) continue;
    await client.patch(id).setIfMissing({ listing: service.listing }).commit();
    console.log(`  listing card: ${service.slug}`);
  }
}

async function main() {
  console.log("Service listing cards");
  await addMissingServiceListings();
  console.log("Navigation");
  await upgradeNavigation(client);
  console.log("  links now reference service pages; new fields filled where empty");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
