import Image from 'next/image';
import {
  CheckBadgeIcon,
  UserIcon,
  BoltIcon,
  BuildingOffice2Icon,
  ArrowsPointingOutIcon,
  CurrencyDollarIcon,
} from '@heroicons/react/24/outline';
import { Eyebrow } from '@/components/ui/Eyebrow';

const features = [
  {
    icon: CheckBadgeIcon,
    title: 'No Guesswork',
    description:
      'We tell you exactly what you need, what it costs, and how long it takes. No surprises, no hidden fees.',
  },
  {
    icon: UserIcon,
    title: 'One Point of Contact',
    description:
      'Your dedicated consultant manages everything. You won\'t be passed between departments or left waiting.',
  },
  {
    icon: BoltIcon,
    title: 'Speed That Matters',
    description:
      'Most setups completed in days, not weeks. We know the shortcuts because we\'ve done this hundreds of times.',
  },
  {
    icon: BuildingOffice2Icon,
    title: 'Every Free Zone',
    description:
      'We work with 40+ free zones. We\'ll match you to the one that fits your business, not push you toward our favorite.',
  },
  {
    icon: ArrowsPointingOutIcon,
    title: 'Beyond Setup',
    description:
      'Bank accounts, office space, accounting referrals — we connect you to trusted partners for everything that comes next.',
  },
  {
    icon: CurrencyDollarIcon,
    title: 'Transparent Pricing',
    description:
      'Full cost breakdown upfront. You\'ll know exactly what you\'re paying for before you commit.',
  },
];

export function WhyChooseUsSection() {
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
          <Eyebrow variant="light">Why Licorne</Eyebrow>
          <h2 className="text-4xl lg:text-5xl text-white mt-3 max-w-4xl mx-auto leading-tight">
            Business Setup Without the{' '}
            <span className="text-primary font-serif">Headaches</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-xs p-8 hover:bg-white/20 transition-all duration-300 cursor-pointer"
              >
                <Icon className="size-10 text-primary mb-4" />
                <h3 className="text-3xl text-white mb-2">{item.title}</h3>
                <p className="text-white/80 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}