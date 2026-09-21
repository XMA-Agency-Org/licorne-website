import { COMPANY_SETUP, RESOURCES, SERVICES, type NavLink } from "@/lib/navigation";

const stripIcons = (items: NavLink[]) =>
  items.map(({ label, href, description }) => ({ label, href, description: description ?? undefined }));

export const navigation = {
  _id: "navigation",
  _type: "navigation",
  companySetup: {
    href: COMPANY_SETUP.href,
    description: COMPANY_SETUP.description,
    items: stripIcons(COMPANY_SETUP.items),
  },
  serviceCategories: Object.entries(SERVICES).map(([title, category]) => ({
    _type: "serviceCategory",
    title,
    href: category.href,
    description: category.description,
    items: stripIcons(category.items),
  })),
  resourceLinks: RESOURCES,
  footer: {
    description:
      "Dubai's trusted business setup partner. We help entrepreneurs and companies establish and operate in the UAE with clarity, efficiency, and confidence.",
    companyLinks: [
      { label: "About Us", href: "/about" },
      { label: "Contact Us", href: "/contact" },
      { label: "FAQ", href: "/faq" },
      { label: "All Services", href: "/services" },
    ],
  },
};

export const testimonials = [
  {
    author: "Marcus Chen",
    position: "Founder, Technology Consultancy",
    text: "Licorne made what I thought would be a months-long ordeal into a two-week process. Clear communication, no surprises, and my company was up and running faster than I expected.",
    order: 1,
  },
  {
    author: "Sarah Mitchell",
    position: "Director, E-commerce Business",
    text: "I'd tried to set up on my own and hit wall after wall. Licorne untangled everything in days. Worth every dirham.",
    order: 2,
  },
  {
    author: "Ahmed Al-Rashid",
    position: "Managing Partner, Consulting Firm",
    text: "The free zone advice alone saved me from making an expensive mistake. They actually listened to my business model before recommending anything.",
    order: 3,
  },
  {
    author: "David Okonkwo",
    position: "CEO, Fintech Startup",
    text: "Bank account opening is where most people struggle. Licorne got me approved on the first attempt because they knew exactly what documentation the bank wanted.",
    order: 4,
  },
];

export const teamMembers = [
  { name: "Muhammad Usman Butt", image: "muhammad-usman-butt.jpeg", order: 1 },
  { name: "Umair Butt", image: "umair-butt.jpeg", order: 2 },
  { name: "Fahd Bouazer", image: "fahd-bouazer.jpeg", order: 3 },
  { name: "Gicelle Cinco", image: "gicelle-cinco.jpeg", order: 4 },
];

export const homepage = {
  _id: "homepage",
  _type: "homepage",
  hero: {
    headline: "Your Business in Dubai,",
    headlineAccent: "Simplified",
    subheadline:
      "From company formation to visas and beyond — we handle the complexity so you can focus on growth.",
    primaryCtaLabel: "Start Your Setup",
    primaryCtaHref: "/contact",
    secondaryCtaLabel: "Explore Services",
    secondaryCtaHref: "#services",
    bgImage: "home-skyline.jpg",
  },
  about: {
    eyebrow: "About Licorne",
    title: "We Make Dubai",
    titleSpan: "Accessible",
    description:
      "Setting up a business in Dubai shouldn't feel like navigating a maze. Licorne streamlines every step — from choosing the right structure to securing your visas and opening your bank account. We've guided many entrepreneurs through the process, turning what seems complex into something remarkably simple.",
    buttonText: "Get Started",
    buttonHref: "/contact",
    image: "about.jpg",
    stats: [
      { value: "50+", label: "Companies Formed" },
      { value: "10+", label: "Free Zones Covered" },
      { value: "98%", label: "First-Time Approvals" },
      { value: "72h", label: "Average Setup Time" },
    ],
  },
  services: {
    eyebrow: "Our Services",
    title: "Everything You Need to Launch in Dubai",
    items: [
      {
        number: "One",
        title: "Company Setup",
        description:
          "Mainland, free zone or offshore. We recommend the right jurisdiction for your business model, then handle licensing, approvals and registration so you can start trading.",
        href: COMPANY_SETUP.href,
        subItems: stripIcons(COMPANY_SETUP.items),
      },
      {
        number: "Two",
        title: "License Services",
        description:
          "Renewal, modification, cancellation and freezing of your trade license. One team tracks your dates, processes amendments and keeps you compliant year after year.",
        href: SERVICES["License Services"].href,
        subItems: stripIcons(SERVICES["License Services"].items),
      },
      {
        number: "Three",
        title: "Visa & Immigration",
        description:
          "Residence, dependent, remote work, golden and freelance visas for you, your family and your team. From entry permit to Emirates ID, we manage every step.",
        href: SERVICES["Visa & Immigration"].href,
        subItems: stripIcons(SERVICES["Visa & Immigration"].items),
      },
      {
        number: "Four",
        title: "Finance & Banking",
        description:
          "Corporate bank account opening, corporate tax registration and ongoing bookkeeping and VAT. Your finances set up correctly from day one and kept compliant.",
        href: SERVICES["Finance & Banking"].href,
        subItems: stripIcons(SERVICES["Finance & Banking"].items),
      },
      {
        number: "Five",
        title: "PRO & Government Services",
        description:
          "Document attestation, Emirates ID, medical tests, office solutions and government liaison. The ongoing paperwork that keeps your business running, handled.",
        href: SERVICES["PRO & Government Services"].href,
        subItems: stripIcons(SERVICES["PRO & Government Services"].items),
      },
      {
        number: "Six",
        title: "Notary Services",
        description:
          "Power of attorney, will registration, MOA drafting and amendments, and share transfer agreements. Drafted, translated and notarised correctly the first time.",
        href: SERVICES["Notary Services"].href,
        subItems: stripIcons(SERVICES["Notary Services"].items),
      },
    ].map((item) => ({ ...item, _type: "serviceRow" })),
  },
  testimonialsSection: {
    hidden: false,
    eyebrow: "Testimonials",
    title: "Trusted by Entrepreneurs",
    titleAccent: "Worldwide",
    rows: 1,
    speed: 3,
    ctaLabel: "Start Your Journey",
    ctaHref: "/contact",
  },
  team: {
    eyebrow: "Our Team",
    title: "Introducing Our Experienced Team",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Frequently Asked Questions",
    items: [
      {
        question: "What's the difference between mainland and free zone?",
        answer:
          "Mainland companies can trade directly with the UAE market and require a local sponsor (we arrange this). Free zone companies offer 100% foreign ownership but are limited to operating within the zone or internationally. We'll help you choose based on your business model.",
      },
      {
        question: "How long does company setup take?",
        answer:
          "Most free zone setups take 3-5 business days. Mainland setups typically take 1-2 weeks depending on the activity type and approvals required. We'll give you a realistic timeline during your consultation.",
      },
      {
        question: "Do I need to be in Dubai to start the process?",
        answer:
          "No. We can begin remotely — most documentation can be handled digitally. You'll need to visit Dubai for your Emirates ID and to finalize certain steps, but we'll coordinate the timing to minimize your trips.",
      },
      {
        question: "What are the costs involved?",
        answer:
          "Costs vary based on company type, free zone selection, visa requirements, and office space needs. We provide a detailed quote after understanding your requirements — no hidden fees, everything itemized.",
      },
      {
        question: "Can you help with bank account opening?",
        answer:
          "Yes. Bank account opening is one of the trickiest parts of Dubai setup. We prepare your documentation, recommend banks suited to your business type, and accompany you to appointments when needed.",
      },
    ],
  },
  seo: {
    title: "Licorne Corporate Services | Company Formation & PRO Services Dubai",
    description:
      "Dubai's trusted business setup partner. Mainland, free zone and offshore company formation, license services, visas, banking, tax and notary services.",
  },
};

export const aboutPage = {
  _id: "aboutPage",
  _type: "aboutPage",
  hero: {
    eyebrow: "About us",
    title: "Making Dubai business setup simple since day one",
    description:
      "We help entrepreneurs and companies establish their presence in Dubai without the complexity, confusion, and wasted time that typically comes with the process.",
    image: "about.jpg",
    imageAlt: "About Licorne",
  },
  story: {
    eyebrow: "Our story",
    title: "We believe starting a business should be exciting, not exhausting",
    paragraphs: [
      {
        text: "Dubai offers incredible opportunities for entrepreneurs — 0% personal income tax, strategic location, world-class infrastructure, and access to regional markets. But the setup process? That's where many get stuck.",
      },
      {
        text: "Multiple authorities, unfamiliar procedures, conflicting information, and service providers who seem more interested in fees than outcomes. We started Licorne because we knew there had to be a better way.",
      },
      {
        text: "Our approach is simple: understand what you're trying to build, recommend the right structure, handle the paperwork efficiently, and be there when you need support. No unnecessary complexity, no surprises.",
      },
    ],
  },
  whyClients: {
    title: "Why clients choose us",
    description:
      "It's not just about getting a license — it's about starting your Dubai journey with confidence and the right foundation.",
    items: [
      "Transparent pricing with no hidden fees",
      "Direct communication throughout the process",
      "Problems handled before they become your problems",
      "Ongoing support as your business grows",
    ],
  },
  stats: [
    { value: "50+", label: "Companies formed" },
    { value: "10+", label: "Free zones covered" },
    { value: "98%", label: "First-time approval rate" },
    { value: "72h", label: "Average license turnaround" },
  ],
  journey: {
    eyebrow: "Our journey",
    title: "Building something that matters",
    milestones: [
      {
        year: "Founded",
        title: "Started with a simple idea",
        description:
          "Help entrepreneurs navigate Dubai's business setup process without the confusion, delays, and overcharging that was common in the industry.",
      },
      {
        year: "Growth",
        title: "Built relationships that matter",
        description:
          "Developed direct relationships with free zone authorities, government departments, and banking partners that allow us to serve clients better.",
      },
      {
        year: "Today",
        title: "Trusted by a growing client base",
        description:
          "From solo founders to multinational expansions, we've helped businesses of all sizes establish and operate in Dubai successfully.",
      },
    ],
  },
  values: {
    eyebrow: "Our values",
    title: "What guides how we work",
    items: [
      {
        title: "Clarity",
        description:
          "We explain everything in plain language. No jargon, no surprises, no hidden fees. You always know what's happening and why.",
      },
      {
        title: "Efficiency",
        description:
          "Time matters when you're building a business. We move fast, track every application, and push for the quickest possible completion.",
      },
      {
        title: "Reliability",
        description:
          "When we say we'll handle something, it gets handled. Deadlines are met, documents are correct, and complications are resolved.",
      },
      {
        title: "Partnership",
        description:
          "We're not just a service provider — we're invested in your success. Many clients stay with us for years as their business grows.",
      },
    ],
  },
  commitment: {
    eyebrow: "Our commitment",
    title: "More than just company formation",
    paragraphs: [
      {
        text: "Yes, we help you get your trade license. But that's just the beginning. We help you choose the right structure for your goals, navigate the visa process for you and your team, open a bank account (the hardest part for many), and stay compliant as you operate.",
      },
      {
        text: "Most of our clients stay with us long after setup. When they need to add activities, hire employees, renew licenses, or handle government requirements — we're there. When they have questions at 9pm before a big meeting — we answer.",
      },
      {
        text: "This is what we mean by partnership. Your success is our success, and we're in it for the long term.",
      },
    ],
  },
  cta: {
    title: "Ready to start your Dubai journey?",
    description:
      "Book a free consultation. We'll learn about your business, answer your questions, and show you exactly how we can help.",
    primaryLabel: "Book Free Consultation",
    primaryHref: "/contact",
    secondaryLabel: "View Services",
    secondaryHref: "/services",
  },
  seo: {
    title: "About Us | Licorne Corporate Services Dubai",
    description:
      "Learn about Licorne — Dubai's trusted business setup partner. 50+ companies formed, 10+ free zones covered. We make starting a business in Dubai simple.",
  },
};
