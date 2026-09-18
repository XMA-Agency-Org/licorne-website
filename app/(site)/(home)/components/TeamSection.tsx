import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const teamMembers = [
  {
    name: "Artur Kopp",
    role: "Senior Partner",
    image: "/Licorne Logo.jpeg",
  },
  {
    name: "Christine Hohmann",
    role: "Senior Partner",
    image: "/Licorne Logo.jpeg",
  },
  {
    name: "Jutta Limbach",
    role: "Senior Partner",
    image: "/Licorne Logo.jpeg",
  },
  {
    name: "Susanne Baer",
    role: "Senior Partner",
    image: "/Licorne Logo.jpeg",
  },
  {
    name: "Andreas Voßkuhle",
    role: "Senior Partner",
    image: "/Licorne Logo.jpeg",
  },
  {
    name: "Christine Langenfeld",
    role: "Legal Advisor",
    image: "/Licorne Logo.jpeg",
  },
  {
    name: "Alecia Höpker",
    role: "Senior Partner",
    image: "/Licorne Logo.jpeg",
  },
  {
    name: "Astrid Wallrabenstein",
    role: "Senior Partner",
    image: "/Licorne Logo.jpeg",
  },
];

export function TeamSection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-secondary">
      {/* Grain texture overlay */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src="https://cdn.prod.website-files.com/67aec585824eadef2eebc54f/67b29f23c5b3038c9ea552cd_grain.png"
          alt=""
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
      </div>

      {/* Background overlay image */}
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
            Our Team
          </p>
          <h2 className="text-4xl lg:text-5xl text-white max-w-4xl mx-auto leading-tight">
            Introducing Our Experienced Team of Legal Professionals
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-full mb-5 bg-gradient-to-br from-gray-200 to-gray-300">
                <div className="aspect-square">
                  <Image
                    src={`https://cdn.prod.website-files.com/67b4265e6628451a28bef3a9/${
                      [
                        "67b6ecb278299a4b80ddff4d_Image-6.png",
                        "67b6ecc61dec1747972260c7_Image-7.png",
                        "67b6ece2d3351a073b0c61aa_Image-4.png",
                        "67b6ecf17b82a984110d9270_Image-3.png",
                        "67b6ed026f2257f52aec2e12_Image-5.png",
                        "67b6ed123be4645cb51cfbfd_Image-2.png",
                        "67b6ed26dd8190e4cf9dae1a_Image-1.png",
                        "67bec33a4ecbeb619d76c514_Image%20(11).png",
                      ][index]
                    }`}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    width={400}
                    height={533}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-accent-500/10 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              </div>
              <h3 className="text-3xl text-center text-white mb-1">
                {member.name}
              </h3>
              <p className="text-primary text-center font-medium">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
