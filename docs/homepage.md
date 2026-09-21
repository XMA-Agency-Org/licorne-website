# Homepage

Route: `app/(site)/page.tsx`, sections in `app/(site)/(home)/components/`.

| Section | Notes |
| --- | --- |
| `HeroSection` | Background is `public/images/heroes/home-skyline.jpg` (Dubai skyline at golden hour, AI-generated Sept 2026). Client asked that the hero not look "legal"/courthouse-like. |
| `AboutSection` | Copy and stats come from the client's content doc: "We Make Dubai Accessible", 50+ / 10+ / 98% / 72h. |
| `ServicesSection` | Six rows built from `lib/navigation.ts`: Company Setup, License Services, Visa & Immigration, Finance & Banking, PRO & Government Services, Notary Services. Each row lists its sub-services as pill links and ends with a "View All Services" button. |
| `WhyChooseUsSection` | Static. |
| `TestimonialsSliderSection` | **No photos**: name, position and quote only. Rows (1 or 2), speed, heading, button and visibility are set in Studio under Homepage › Testimonials section. The client adds real testimonials in Studio themselves; the four current entries are placeholders. |
| `TeamSection` | Four real members with photos (from the client's Drive `content/` folder, Sep 2026). Role is optional and the line is hidden when empty. Section can be hidden from Studio. |
| `FAQSection` | Five questions confirmed by client. Can be hidden from Studio. |
| `CTASection` | Static copy + shared `LeadForm` (see `docs/forms.md`). |

## Pending from client

- Real testimonials (name, position, quote). The client adds these in Studio
- Team member roles
- Resend domain verification for the licorne.ae subdomain, then set `RESEND_FROM_EMAIL`
- Review of the copy on the new service pages (License, Offshore, Residence/Dependent/Remote Work/Freelance visa, Corporate Tax Registration, Notary)
