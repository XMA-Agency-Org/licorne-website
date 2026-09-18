import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import type { HomepageTeam } from "../_types/homepage";

type Member = { name: string; role: string; imageUrl: string | null };

const initialsOf = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();

function MemberAvatar({ member }: { member: Member }) {
  return (
    <div className="relative overflow-hidden rounded-full mb-5 bg-gradient-to-br from-base-200 to-base-300">
      <div className="aspect-square relative">
        {member.imageUrl ? (
          <Image
            src={member.imageUrl}
            alt={member.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-5xl text-secondary font-primary">
            {initialsOf(member.name)}
          </div>
        )}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-accent-500/10 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
    </div>
  );
}

export function TeamSection({ team }: { team: HomepageTeam }) {
  const members: Member[] = (team?.members ?? [])
    .filter((member) => member.name)
    .map((member) => ({
      name: member.name as string,
      role: member.role ?? "",
      imageUrl: member.image?.asset ? urlFor(member.image).width(600).height(600).url() : null,
    }));

  if (!members.length) return null;

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-secondary">
      <div className="absolute inset-0 opacity-20">
        <Image
          src="https://cdn.prod.website-files.com/67aec585824eadef2eebc54f/67b29f23c5b3038c9ea552cd_grain.png"
          alt=""
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
      </div>

      <div className="absolute inset-0 opacity-30">
        <Image
          src="https://cdn.prod.website-files.com/67aec585824eadef2eebc54f/67aeed40622e86f203929989_image-overlay.png"
          alt=""
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary border-b w-fit mx-auto p-2 font-semibold text-sm uppercase tracking-wider mb-4">
            {team?.eyebrow ?? "Our Team"}
          </p>
          <h2 className="text-4xl lg:text-5xl text-white max-w-4xl mx-auto leading-tight">
            {team?.title ?? "Introducing Our Experienced Team"}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member) => (
            <div key={member.name} className="group cursor-pointer">
              <MemberAvatar member={member} />
              <h3 className="text-3xl text-center text-white mb-1">{member.name}</h3>
              <p className="text-primary text-center font-medium">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
