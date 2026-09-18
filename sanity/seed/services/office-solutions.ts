import type { ServiceSeed, ServiceSeoSeed } from "../types";

export const service: ServiceSeed = {
  slug: "office-solutions",
  category: "pro-government",
  order: 2,
  hero: {
    title: "Office Solutions Dubai",
    description:
      "Virtual offices, flexi desks, and physical office spaces. Get the business address and workspace you need for licensing, client meetings, and daily operations — without long-term commitments.",
    image: "office-solutions.jpg",
    imageAlt: "Office solutions Dubai",
  },
  overview: {
    eyebrow: "About Office Solutions",
    title: "The right workspace for every stage of your business",
    description:
      "Every Dubai business needs a registered address — but not every business needs a full office from day one. We provide flexible office solutions that match your actual needs, whether you're a solo consultant working remotely, a growing team needing hot desks, or an established business requiring dedicated space. Virtual offices provide a prestigious business address and mail handling without physical space — perfect for licensing requirements when you work from home or travel frequently. Flexi desks offer shared workspace access with business center amenities when you need professional meeting spaces occasionally. Serviced offices provide fully-furnished, ready-to-use private offices with reception, utilities, and IT included — ideal for teams that need dedicated space without fit-out hassles. We partner with business centers across Dubai's key locations: Downtown, DIFC, Business Bay, JLT, and free zones. Our relationships mean competitive rates and flexible terms that property managers don't offer to walk-in clients. More importantly, we ensure your office solution meets licensing requirements — because not every virtual office qualifies for every license type.",
    highlights: [
      "Virtual office addresses for licensing",
      "Flexi desk and coworking access",
      "Serviced office spaces",
      "Meeting rooms by the hour",
      "All major Dubai locations available",
      "License-compliant solutions",
    ],
    expectationTitle: "Start small, scale as you grow",
    expectationDescription:
      "Begin with a virtual address, upgrade to flexi desk, then transition to serviced office — we help you scale workspace with your business needs.",
  },
  stats: [
    { value: "50+", label: "Partner business centers" },
    { value: "15+", label: "Prime Dubai locations" },
    { value: "Flexi", label: "Contract terms available" },
    { value: "Same-week", label: "Setup for most solutions" },
  ],
  deliverables: {
    eyebrow: "Our Solutions",
    title: "Workspace options for every need",
    items: [
      {
        title: "Virtual Office",
        description:
          "Professional business address for license registration, mail handling and forwarding, telephone answering service, and use of meeting rooms on hourly basis. Ideal for remote workers and traveling entrepreneurs.",
      },
      {
        title: "Flexi Desk / Hot Desk",
        description:
          "Shared workspace access in professional business centers. Includes desk space, WiFi, printing facilities, and access to common areas. Flexible booking — daily, weekly, or monthly packages available.",
      },
      {
        title: "Dedicated Desk",
        description:
          "Your own permanent desk in a shared office environment. Lockable storage, 24/7 access, and all business center amenities. A step between hot desking and private office.",
      },
      {
        title: "Serviced Office",
        description:
          "Fully-furnished private office with reception services, utilities, cleaning, and IT infrastructure included. Available from 1-person offices to full floor setups. Move in ready.",
      },
      {
        title: "Meeting Rooms",
        description:
          "Professional meeting rooms bookable by the hour across Dubai. Equipped with presentation technology, video conferencing, and catering options. Impress clients without permanent overhead.",
      },
      {
        title: "Custom Solutions",
        description:
          "Combination packages for businesses with specific needs — virtual address plus occasional meeting room, flexi desk plus private office for management. We design solutions around your requirements.",
      },
    ],
  },
  process: {
    eyebrow: "How It Works",
    title: "From requirement to ready workspace",
    items: [
      {
        step: "01",
        title: "Needs Assessment",
        description:
          "We understand your workspace requirements: licensing needs, team size, location preferences, budget, and how you actually work day-to-day.",
      },
      {
        step: "02",
        title: "Options Presentation",
        description:
          "We present suitable options from our partner network — multiple locations and price points that meet your criteria, with pros and cons of each.",
      },
      {
        step: "03",
        title: "Site Visits",
        description:
          "For physical spaces, we arrange tours of shortlisted options. For virtual offices, we confirm all features and ensure license compatibility.",
      },
      {
        step: "04",
        title: "Contract & Setup",
        description:
          "We negotiate terms, process contracts, and coordinate setup. You receive your business address documentation and access credentials.",
      },
    ],
  },
  faqs: {
    eyebrow: "Common Questions",
    title: "Frequently asked questions about office solutions",
    items: [
      {
        question: "Can I use a virtual office address for my trade license?",
        answer:
          "Yes, but not all virtual offices are license-approved. We only recommend virtual office providers whose addresses are accepted by DED and free zone authorities for license registration. This is crucial — choosing the wrong provider means your license application gets rejected.",
      },
      {
        question: "What's the minimum commitment for serviced offices?",
        answer:
          "Most serviced offices require 6-12 month minimum commitments, though some offer 3-month terms at premium rates. Through our partnerships, we can sometimes negotiate shorter terms or break clauses. Virtual offices and flexi desks typically offer monthly renewals.",
      },
      {
        question: "Which locations are best for different business types?",
        answer:
          "DIFC and Downtown for finance and consulting, Dubai Media City for creative industries, JAFZA and DAFZA for trading companies, Business Bay for general commercial, JLT for cost-effective professional space. We advise based on your industry, client expectations, and budget.",
      },
      {
        question: "Do I need physical office space for visa processing?",
        answer:
          "For mainland licenses, you need at least an Ejari (tenancy contract) which virtual offices can provide. Free zones have specific office requirements per visa quota — some require physical space, others accept flexi desk arrangements. We ensure your office solution supports your visa needs.",
      },
      {
        question: "Can I upgrade from virtual office to physical space later?",
        answer:
          "Absolutely — this is a common progression. Start with virtual address for licensing, add flexi desk access when you need workspace, then transition to serviced office as your team grows. We manage the address changes with authorities to keep your license updated.",
      },
      {
        question: "What's included in serviced office pricing?",
        answer:
          "Typically includes: furnished space, reception and telephone answering, WiFi and IT infrastructure, utilities (electricity, AC, water), cleaning, maintenance, and access to meeting rooms (usually limited free hours, then hourly rates). Confirm specifics as inclusions vary by provider.",
      },
    ],
  },
  cta: {
    title: "Find your ideal workspace in Dubai",
    description:
      "From virtual addresses to full office setups — we match you with the right solution for your business stage and budget. Book a consultation to explore options.",
    primaryLabel: "Book Free Consultation",
    primaryHref: "/contact",
    secondaryLabel: "Explore Other Services",
    secondaryHref: "/services",
  },
};

export const seo: ServiceSeoSeed = {
  title: "Office Solutions Dubai | Virtual Office & Serviced Offices | Licorne",
  description:
    "Virtual offices, flexi desks, and serviced offices in Dubai. License-approved business addresses and flexible workspace solutions across 15+ prime locations.",
  keywords: [
    "virtual office dubai",
    "serviced office dubai",
    "flexi desk dubai",
    "business address dubai",
    "coworking dubai",
    "office space dubai",
  ],
};
