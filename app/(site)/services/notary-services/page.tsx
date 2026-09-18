import HeroImage from "@/public/images/heroes/pro-government-services.jpg";
import { ServicePage } from "@/app/(site)/services/components/ServicePage";
import { Metadata } from "next";

const serviceData = {
  hero: {
    title: "Notary Services Dubai",
    description:
      "Power of attorney, will registration, memorandum of association, MOA amendments and share transfer agreements. Drafted correctly, translated where required and notarised with Dubai Courts or a private notary.",
    image: HeroImage,
    imageAlt: "Notary public services in Dubai",
  },
  overview: {
    eyebrow: "About Notary Services",
    title: "Legal documents drafted, translated and notarised",
    description:
      "Many of the most important documents in a UAE business need to be notarised to have legal effect: the memorandum of association that creates your company, the amendment that records a change of partners, the power of attorney that lets someone act for you, the agreement that transfers shares, and the will that protects your family's assets. Each must be drafted in the correct form, translated into Arabic by a legal translator where required, and executed before the Dubai Courts Notary Public or a licensed private notary. Errors in wording or missing attestations mean the document is rejected or, worse, accepted but unenforceable. We draft to the notary's requirements, arrange legal translation, book the appointment and, where you cannot attend in person, coordinate remote notarisation.",
    highlights: [
      "Drafting to Dubai Courts and private notary requirements",
      "Certified Arabic legal translation",
      "Appointment booking and accompaniment",
      "Remote and video notarisation where available",
      "DIFC Wills and Dubai Courts will registration",
      "Coordination with license amendments and share transfers",
    ],
    expectationTitle: "Documents that hold up",
    expectationDescription:
      "Correct wording, correct language, correct execution. Your document is accepted the first time and does what you need it to do.",
  },
  stats: [
    { value: "1-3", label: "Days for most notarisations" },
    { value: "2", label: "Languages, Arabic and English" },
    { value: "5", label: "Core document types" },
    { value: "100%", label: "Drafted to notary requirements" },
  ],
  deliverables: {
    eyebrow: "Our Notary Services",
    title: "Five documents we handle every week",
    items: [
      {
        id: "power-of-attorney",
        title: "Power of Attorney",
        description:
          "General and special powers of attorney for company management, property transactions, vehicle matters, bank dealings and court representation. Drafted in bilingual form, notarised at Dubai Courts or a private notary, and attested for use abroad where required.",
      },
      {
        id: "will-registration",
        title: "Will Registration",
        description:
          "Registration of wills for non-Muslim residents and property owners through the DIFC Wills Service Centre or Dubai Courts, so your UAE assets and guardianship of your children are dealt with according to your wishes rather than default inheritance rules.",
      },
      {
        id: "memorandum-of-association",
        title: "Memorandum of Association",
        description:
          "Drafting and notarisation of the MOA for new mainland LLCs and civil companies, covering shareholding, management authority, profit distribution and objects, in the form accepted by the Department of Economy and Tourism.",
      },
      {
        id: "amendment-to-moa",
        title: "Amendment to MOA",
        description:
          "Addendums recording changes to shareholders, share capital, managers, trade name or activities. Notarised and filed with the licensing authority so the amended license reflects the new position.",
      },
      {
        id: "share-transfer-agreement",
        title: "Share Transfer Agreement",
        description:
          "Sale and transfer of shares between existing and incoming partners, including the agreement, board and partner resolutions, notarisation and coordination with the MOA amendment and license update that follow.",
      },
    ],
  },
  process: {
    eyebrow: "How It Works",
    title: "From draft to notarised document",
    items: [
      {
        step: "01",
        title: "Requirement Review",
        description:
          "We confirm what the document needs to achieve, who the parties are and which notary or registry will accept it.",
      },
      {
        step: "02",
        title: "Drafting & Translation",
        description:
          "The document is drafted in English and Arabic, or translated by a certified legal translator, and shared with you for approval.",
      },
      {
        step: "03",
        title: "Notarisation",
        description:
          "Appointment booked at Dubai Courts or a private notary, signatories identified, and the document executed in person or remotely.",
      },
      {
        step: "04",
        title: "Filing & Attestation",
        description:
          "Where needed, the notarised document is filed with the licensing authority, the Land Department or attested for use outside the UAE.",
      },
    ],
  },
  faqs: {
    eyebrow: "Common Questions",
    title: "Frequently asked questions about notary services",
    items: [
      {
        question: "Do I need to attend the notary in person?",
        answer:
          "Signatories usually attend with their original passport and Emirates ID. Dubai Courts also offers remote notarisation by video for many document types, and a power of attorney can be executed at a UAE embassy abroad and attested for use here. We advise on the option that works for your situation.",
      },
      {
        question: "Do documents need to be in Arabic?",
        answer:
          "Documents notarised at Dubai Courts must be in Arabic or bilingual Arabic and English. Private notaries and the DIFC Wills Service Centre accept English. We arrange certified legal translation where required.",
      },
      {
        question: "Why should a non-Muslim register a will in the UAE?",
        answer:
          "Without a registered will, UAE assets of a deceased non-Muslim may be distributed under Sharia principles and guardianship of minor children may not pass to the surviving parent automatically. A DIFC or Dubai Courts will ensures your assets and children are dealt with as you intend.",
      },
      {
        question: "How long is a power of attorney valid?",
        answer:
          "A power of attorney remains valid until it is revoked or the principal passes away, unless the document itself sets an expiry. Some authorities and banks require a POA to be less than one or two years old, so we recommend renewing periodically if it is in regular use.",
      },
      {
        question: "Can you handle the license update after a share transfer?",
        answer:
          "Yes. A share transfer is not complete until the MOA is amended and the license reflects the new shareholders. Our license services team handles the amendment and license reissue as part of the same engagement.",
      },
    ],
  },
  cta: {
    title: "Need a document notarised?",
    description:
      "Tell us what you need and we will draft, translate and notarise it correctly the first time.",
    primaryLabel: "Book Free Consultation",
    primaryHref: "/contact",
    secondaryLabel: "License Services",
    secondaryHref: "/services/license-services",
  },
};

export const metadata: Metadata = {
  title: "Notary Services Dubai | POA, Wills, MOA & Share Transfer | Licorne",
  description:
    "Power of attorney, will registration, memorandum of association, MOA amendments and share transfer agreements drafted, translated and notarised in Dubai.",
  keywords: [
    "notary services dubai",
    "power of attorney dubai",
    "will registration dubai",
    "difc wills",
    "memorandum of association dubai",
    "share transfer agreement uae",
  ],
  openGraph: {
    title: "Notary Services Dubai | Licorne Corporate Services",
    description:
      "POA, wills, MOA, MOA amendments and share transfer agreements notarised correctly the first time.",
    type: "website",
  },
};

export default function NotaryServicesPage() {
  return <ServicePage {...serviceData} />;
}
