import Link from "next/link";
import { VideoHero } from "@/components/sections/VideoHero";
import { CTASection } from "@/components/sections/CTASection";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Download, Handshake } from "lucide-react";

type Section = {
  number: string;
  title: string;
  body?: string;
  bullets?: (string | { label: string; sub?: string[] })[];
};

const SECTIONS: Section[] = [
  {
    number: "01",
    title: "Parties to the Agreement",
    body:
      "This Joint Venture Agreement (the “Agreement”) is entered into between Party A: Tytan Group / BQ Magazine Limited (Kampala, Uganda & Brussels, Belgium) and Party B: [Partner Company Name], [Address / Country]. Collectively referred to as “the Partners.”",
  },
  {
    number: "02",
    title: "Purpose of the Partnership",
    body:
      "The purpose of this Joint Venture is to collaborate in:",
    bullets: [
      "Branding and corporate identity projects",
      "Creative marketing and media campaigns",
      "Printing and production services",
      "Corporate events and activations",
      "Any mutually agreed commercial opportunities",
    ],
  },
  {
    number: "03",
    title: "Objective",
    body:
      "To jointly source, execute, and deliver projects while sharing profits based on contribution, expertise, and resource input. The partnership is established for commercial profit-making purposes.",
  },
  {
    number: "04",
    title: "Scope of Collaboration",
    body: "The Partners agree to:",
    bullets: [
      "Identify and secure business opportunities",
      "Jointly or independently execute projects under this agreement",
      "Share resources including expertise, networks, and infrastructure",
      "Maintain professional and brand standards aligned with Tytan Group",
    ],
  },
  {
    number: "05",
    title: "Contributions of Partners",
    body: "Each Partner may contribute:",
    bullets: [
      { label: "A. Assets", sub: ["Equipment, tools, and infrastructure", "Office space or operational facilities"] },
      { label: "B. Expertise", sub: ["Design, marketing, production, or consulting services"] },
      { label: "C. Financial Investment (if applicable)", sub: ["Capital contribution toward specific projects"] },
    ],
  },
  {
    number: "06",
    title: "Profit & Loss Sharing",
    bullets: [
      { label: "Profits shall be shared based on:", sub: ["Level of contribution", "Scope of work executed", "Agreed percentage per project"] },
      "Losses, if any, shall be shared proportionately based on involvement unless otherwise agreed in writing.",
    ],
  },
  {
    number: "07",
    title: "Management & Operations",
    bullets: [
      "Each Partner may participate in project execution",
      "A lead partner may be assigned per project",
      "Major decisions shall be made jointly",
    ],
  },
  {
    number: "08",
    title: "Mutual Agency",
    bullets: [
      "Each Partner acts as both principal and agent within the scope of the joint venture",
      "No Partner shall bind the other to obligations outside agreed projects without written consent",
    ],
  },
  {
    number: "09",
    title: "Liability",
    bullets: [
      "Each Partner is responsible for their own actions and obligations",
      { label: "No Partner shall be liable for:", sub: ["Unauthorised commitments", "Independent actions outside the joint venture"] },
      "Liability toward third parties shall be limited to the scope of each Partner's role",
    ],
  },
  {
    number: "10",
    title: "Banking & Financial Management",
    bullets: [
      "A joint project account may be created where necessary",
      "Alternatively, funds may be managed by the lead executing partner",
      "Full financial transparency shall be maintained",
    ],
  },
  {
    number: "11",
    title: "Teams & Training",
    bullets: [
      "Each Partner may provide personnel for project execution",
      "Joint training and knowledge sharing is encouraged",
      "Teams shall operate under agreed project standards",
    ],
  },
  {
    number: "12",
    title: "Duration",
    bullets: [
      "This Agreement shall commence on: [Start Date]",
      "Duration: [Fixed Term or Ongoing until terminated]",
    ],
  },
  {
    number: "13",
    title: "Termination",
    body: "This Agreement may be terminated:",
    bullets: [
      "By mutual consent",
      "By written notice (e.g., 30 days)",
      "In case of breach of agreement",
      "Ongoing projects must be completed or fairly settled.",
    ],
  },
  {
    number: "14",
    title: "Confidentiality",
    body: "Both parties agree to:",
    bullets: [
      "Protect confidential information",
      "Not disclose client or business data without consent",
    ],
  },
  {
    number: "15",
    title: "Non-Compete & Ethics",
    bullets: [
      "Partners shall not unfairly compete on jointly sourced clients",
      "Professional conduct and brand integrity must be maintained",
    ],
  },
  {
    number: "16",
    title: "Dispute Resolution",
    bullets: [
      "Disputes shall first be resolved amicably",
      "If unresolved, mediation or arbitration shall apply",
      "Jurisdiction: [Uganda / Belgium / Agreed location]",
    ],
  },
  {
    number: "17",
    title: "General Provisions",
    bullets: [
      "This Agreement does not create a separate legal entity unless stated",
      "Amendments must be in writing and signed by both parties",
    ],
  },
];

export default function PartnershipPage() {
  return (
    <>
      <VideoHero
        eyebrow="▍ Joint Venture"
        title="Partner with Tytan Group."
        subtitle="A framework for branding, print, marketing, and events partnerships in East Africa, Europe and beyond."
        posterSrc="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=2400"
      />

      <section className="container py-24 md:py-32">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
            <div>
              <p className="text-[11px] uppercase tracking-[0.4em] text-primary mb-4">
                ▍ Joint Venture Partnership Agreement
              </p>
              <h1 className="text-display-md font-bold uppercase leading-[0.92] max-w-3xl">
                Tytan Group / <span className="gradient-text-red">BQ Magazine Ltd</span>
              </h1>
              <p className="mt-6 max-w-2xl text-muted text-lg">
                A summary of the standard JV terms we extend to qualified partners. Final
                executed terms are signed under separate cover with both parties.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-5 py-3.5 bg-primary text-white text-xs uppercase tracking-[0.3em] font-semibold rounded-full hover:bg-white hover:text-background transition-colors"
              >
                <Handshake size={16} /> Become a partner
              </Link>
              <a
                href="mailto:info@tytangroupbqmagazineltd.com?subject=JV%20Agreement%20Request"
                className="inline-flex items-center gap-3 px-5 py-3.5 border border-border rounded-full text-xs uppercase tracking-[0.3em] hover:border-primary hover:text-primary transition-colors"
              >
                <Download size={14} /> Request copy
              </a>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-12 gap-px bg-border border border-border">
          {SECTIONS.map((s) => (
            <article
              key={s.number}
              className="lg:col-span-6 bg-background p-8 md:p-10"
            >
              <div className="flex items-baseline gap-4">
                <span className="text-display-sm font-bold gradient-text-red leading-none">
                  {s.number}
                </span>
                <span className="h-px flex-1 bg-border" />
              </div>
              <h2 className="mt-6 text-xl md:text-2xl font-bold uppercase tracking-tight leading-tight">
                {s.title}
              </h2>
              {s.body && (
                <p className="mt-4 text-sm md:text-base text-muted leading-relaxed">
                  {s.body}
                </p>
              )}
              {s.bullets && (
                <ul className="mt-5 space-y-3">
                  {s.bullets.map((b, i) =>
                    typeof b === "string" ? (
                      <li key={i} className="flex items-start gap-3 text-sm md:text-base">
                        <span className="mt-2 block w-1.5 h-1.5 bg-primary shrink-0" />
                        <span>{b}</span>
                      </li>
                    ) : (
                      <li key={i} className="text-sm md:text-base">
                        <p className="font-semibold">{b.label}</p>
                        {b.sub && (
                          <ul className="mt-2 ml-5 space-y-1.5">
                            {b.sub.map((sub) => (
                              <li key={sub} className="flex items-start gap-3 text-muted">
                                <span className="mt-2 block w-1 h-1 bg-muted shrink-0" />
                                <span>{sub}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    )
                  )}
                </ul>
              )}
            </article>
          ))}

          {/* Signatories */}
          <article className="lg:col-span-12 bg-background p-8 md:p-12">
            <div className="flex items-baseline gap-4">
              <span className="text-display-sm font-bold gradient-text-red leading-none">18</span>
              <span className="h-px flex-1 bg-border" />
            </div>
            <h2 className="mt-6 text-xl md:text-2xl font-bold uppercase tracking-tight">
              Signatories
            </h2>
            <div className="mt-8 grid md:grid-cols-2 gap-10">
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-primary mb-4">
                  For Tytan Group / BQ Magazine Limited
                </p>
                <dl className="space-y-3 text-sm">
                  <div className="flex gap-4 border-b border-border pb-2">
                    <dt className="w-24 text-muted uppercase tracking-widest text-[10px]">Name</dt>
                    <dd className="flex-1">_______________________</dd>
                  </div>
                  <div className="flex gap-4 border-b border-border pb-2">
                    <dt className="w-24 text-muted uppercase tracking-widest text-[10px]">Signature</dt>
                    <dd className="flex-1">_______________________</dd>
                  </div>
                  <div className="flex gap-4 border-b border-border pb-2">
                    <dt className="w-24 text-muted uppercase tracking-widest text-[10px]">Date</dt>
                    <dd className="flex-1">_______________________</dd>
                  </div>
                </dl>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-primary mb-4">
                  For [Partner Company Name]
                </p>
                <dl className="space-y-3 text-sm">
                  <div className="flex gap-4 border-b border-border pb-2">
                    <dt className="w-24 text-muted uppercase tracking-widest text-[10px]">Name</dt>
                    <dd className="flex-1">_______________________</dd>
                  </div>
                  <div className="flex gap-4 border-b border-border pb-2">
                    <dt className="w-24 text-muted uppercase tracking-widest text-[10px]">Signature</dt>
                    <dd className="flex-1">_______________________</dd>
                  </div>
                  <div className="flex gap-4 border-b border-border pb-2">
                    <dt className="w-24 text-muted uppercase tracking-widest text-[10px]">Date</dt>
                    <dd className="flex-1">_______________________</dd>
                  </div>
                </dl>
              </div>
            </div>
          </article>
        </div>
      </section>

      <CTASection />
    </>
  );
}
