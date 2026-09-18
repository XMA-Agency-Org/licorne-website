# Homepage

Route: `app/(site)/page.tsx`, sections in `app/(site)/(home)/components/`.

| Section | Notes |
| --- | --- |
| `HeroSection` | Background is `public/images/heroes/home-skyline.jpg` (Dubai skyline at golden hour, AI-generated Sept 2026). Client asked that the hero not look "legal"/courthouse-like. |
| `AboutSection` | Copy and stats come from the client's content doc: "We Make Dubai Accessible", 50+ / 10+ / 98% / 72h. |
| `ServicesSection` | Six rows built from `lib/navigation.ts`: Company Setup, License Services, Visa & Immigration, Finance & Banking, PRO & Government Services, Notary Services. Each row lists its sub-services as pill links and ends with a "View All Services" button. |
| `WhyChooseUsSection` | Static. |
| `TestimonialsSliderSection` | **No photos** — name, position and quote only, single scrolling row. Client (Usman) is collecting real approved testimonials; the four current entries are placeholders to be replaced. |
| `TeamSection` | Client is supplying team photos via Drive. |
| `FAQSection` | Five questions confirmed by client. |
| `CTASection` | Static. |

## Pending from client

- Real testimonials (name, position, quote)
- Team member photos
- Review of the copy on the new service pages (License, Offshore, Residence/Dependent/Remote Work/Freelance visa, Corporate Tax Registration, Notary)
