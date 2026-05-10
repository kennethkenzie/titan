import { VideoHero } from "@/components/sections/VideoHero";
import { AnimatedStats } from "@/components/sections/AnimatedStats";
import { MarqueeSection } from "@/components/sections/MarqueeSection";
import { CTASection } from "@/components/sections/CTASection";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { ParallaxComponent } from "@/components/ui/parallax-scrolling";
import { TrustedClients } from "@/components/sections/TrustedClients";
import {
  Compass,
  Sparkles,
  Heart,
  Megaphone,
  BrainCircuit,
  LayoutDashboard,
  Building2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Solution = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  bullets: string[];
};

const CORE_SOLUTIONS: Solution[] = [
  {
    id: "brand-strategy",
    title: "Brand Strategy",
    description:
      "Research, positioning, narrative, and architecture that turn ambition into a durable, market-defining brand.",
    icon: Compass,
    bullets: [
      "Brand audit & competitor analysis",
      "Positioning & value proposition",
      "Brand architecture",
      "Naming & verbal identity",
    ],
  },
  {
    id: "brand-creation",
    title: "Brand Creation",
    description:
      "The full visual and verbal expression — logo systems, type, color, voice and brand guidelines.",
    icon: Sparkles,
    bullets: [
      "Logo & identity systems",
      "Typography, color, iconography",
      "Brand guidelines & toolkits",
      "Brand voice & messaging",
    ],
  },
  {
    id: "brand-experience",
    title: "Brand Experience",
    description:
      "Every surface a customer touches — engineered. From digital products to retail and environmental design.",
    icon: Heart,
    bullets: [
      "Web & app UI/UX",
      "Packaging & retail design",
      "Environmental & wayfinding",
      "Service & employee experience",
    ],
  },
  {
    id: "brand-activation",
    title: "Brand Activation",
    description:
      "Coordinated launches across paid, earned, owned and shared media — with measurement built in.",
    icon: Megaphone,
    bullets: [
      "Campaign strategy & creative",
      "Social, radio, TV, online, PR",
      "Event activations",
      "Performance measurement",
    ],
  },
  {
    id: "branded-ai",
    title: "Branded AI",
    description:
      "AI-native products, agents, and content systems trained on your brand voice and visual language.",
    icon: BrainCircuit,
    bullets: [
      "AI brand voice models",
      "Generative content systems",
      "Custom GPTs & assistants",
      "AI-powered campaigns",
    ],
  },
];

const SPECIALTY_SOLUTIONS: Solution[] = [
  {
    id: "brand-management-software",
    title: "Brand Management Software",
    description:
      "Digital asset libraries, brand portals, and governance workflows that keep teams on-brand at scale.",
    icon: LayoutDashboard,
    bullets: [
      "Digital Asset Management (DAM)",
      "Brand portals & guideline sites",
      "Approval workflows & governance",
      "Template & toolkit systems",
    ],
  },
  {
    id: "spatial-design",
    title: "Spatial Design",
    description:
      "Physical brand experiences — interiors, retail, signage, exhibitions — engineered alongside the digital identity.",
    icon: Building2,
    bullets: [
      "Office & retail interior branding",
      "Signage & wayfinding systems",
      "Exhibitions & event spaces",
      "3D/spatial visualization",
    ],
  },
];

function SolutionCard({ s, i }: { s: Solution; i: number }) {
  const Icon = s.icon;
  return (
    <ScrollReveal delay={(i % 3) * 0.07}>
      <div
        id={s.id}
        className="scroll-mt-28 group h-full bg-background border border-border p-8 md:p-10 hover:border-primary/40 transition-colors rounded-lg"
      >
        <div className="flex items-start justify-between gap-6">
          <div className="w-12 h-12 border border-border flex items-center justify-center text-primary group-hover:border-primary transition-colors rounded-md">
            <Icon size={20} />
          </div>
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted">
            {String(i + 1).padStart(2, "0")}
          </span>
        </div>
        <h3 className="mt-8 text-2xl md:text-3xl font-bold uppercase tracking-tight leading-tight">
          {s.title}
        </h3>
        <p className="mt-3 text-sm md:text-base text-muted leading-relaxed">
          {s.description}
        </p>
        <ul className="mt-6 space-y-2.5">
          {s.bullets.map((b) => (
            <li key={b} className="flex items-start gap-3 text-sm">
              <span className="mt-2 block w-1.5 h-1.5 bg-primary shrink-0" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </ScrollReveal>
  );
}

export default function AboutPage() {
  return (
    <>
      <VideoHero
        eyebrow="▍ About"
        title="A studio for ambitious brands."
        subtitle="Smari Creative (c/o Tytan Group / BQ Magazine Limited) is a creative, marketing, branding, events management and promotional services agency operating out of Kampala and Brussels."
        posterSrc="https://images.unsplash.com/photo-1497366216548-37526070297c?w=2400"
      />

      {/* CORE SOLUTIONS */}
      <section
        id="core-solutions"
        className="container py-32 md:py-40 scroll-mt-24"
      >
        <ScrollReveal>
          <p className="text-[11px] uppercase tracking-[0.4em] text-primary mb-4">
            ▍ Our core solutions
          </p>
          <h2 className="text-display-md font-bold uppercase leading-[0.92] max-w-4xl">
            Five practices. One <span className="gradient-text-red">monolithic</span> brand engine.
          </h2>
          <p className="mt-6 max-w-2xl text-muted text-lg">
            Strategy, creation, experience, activation and AI — interlocking systems built to
            compound brand equity over time.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORE_SOLUTIONS.map((s, i) => (
            <SolutionCard key={s.id} s={s} i={i} />
          ))}
        </div>
      </section>

      {/* SPECIALTY SOLUTIONS */}
      <section
        id="speciality-solutions"
        className="bg-surface/30 border-y border-border py-32 md:py-40 scroll-mt-24"
      >
        <div className="container">
          <ScrollReveal>
            <p className="text-[11px] uppercase tracking-[0.4em] text-primary mb-4">
              ▍ Our speciality solutions
            </p>
            <h2 className="text-display-md font-bold uppercase leading-[0.92] max-w-4xl">
              Specialised <span className="gradient-text-red">capabilities</span> for ambitious teams.
            </h2>
          </ScrollReveal>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            {SPECIALTY_SOLUTIONS.map((s, i) => (
              <SolutionCard key={s.id} s={s} i={i} />
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section
        id="who-we-are"
        className="container py-32 md:py-40 scroll-mt-24"
      >
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <ScrollReveal className="lg:col-span-5">
            <p className="text-[11px] uppercase tracking-[0.4em] text-primary mb-4">
              ▍ Who we are
            </p>
            <h2 className="text-display-sm font-bold uppercase leading-[0.95]">
              We bring brands to <span className="gradient-text-red">life</span>.
            </h2>
          </ScrollReveal>

          <div className="lg:col-span-7 space-y-6 text-lg text-muted leading-relaxed">
            <ScrollReveal delay={0.05}>
              <p>
                We are dedicated to helping businesses, organisations and individuals bring their
                brands to life through high-quality, customised promotional products and services.
                We turn sketches and business ideas into beautiful business experiences.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p>
                Primarily we create business proposals for our clients, improve on existing ones,
                and work on their corporate identity sketches, logos, colour schemes, brand
                identity tools, look and feel, websites, web-based solutions, applications, video
                explainers, documentary, online content and infomercials for both radio and TV.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p>
                Our team includes photographers, videographers, graphic designers, architects,
                marketers, web authors, editors, animators and publicists — which explains the
                full range of our deliverables.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p>
                Our goal is to help our clients increase visibility, strengthen brand identity,
                and make a lasting impression — wherever in the world they're based.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <TrustedClients
        title={<>Trusted by ambitious <span className="gradient-text-red">teams.</span></>}
        subtitle="Businesses, organisations, and growth-focused partners trust Smari Creative for identity, campaigns, production, and delivery across Kampala, Brussels, and beyond."
      />

      <ParallaxComponent title="Smari Creative" />

      {/* OUR OFFICES */}
      <section
        id="offices"
        className="container py-32 md:py-40 scroll-mt-24"
      >
        <ScrollReveal>
          <p className="text-[11px] uppercase tracking-[0.4em] text-primary mb-4">
            ▍ Our offices
          </p>
          <h2 className="text-display-md font-bold uppercase leading-[0.92] max-w-4xl">
            Two studios. <span className="gradient-text-red">One team</span>.
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid md:grid-cols-2 gap-px bg-border border border-border">
          <div className="bg-background p-10">
            <p className="text-[10px] uppercase tracking-[0.3em] text-primary mb-4">
              Kampala (HQ)
            </p>
            <h4 className="text-2xl font-bold uppercase tracking-tight">
              Tytan Group / BQ Magazine
            </h4>
            <p className="mt-4 text-muted leading-relaxed">
              Eagen Mansions, Victoria Towers,
              <br />
              1–13 Jinja Road, Kampala, Uganda
            </p>
            <p className="mt-3 text-sm text-muted">
              <a href="tel:+256742445504" className="hover:text-primary">
                +256 742 445 504
              </a>
              {" · "}
              <a href="tel:+256775553164" className="hover:text-primary">
                +256 775 553 164
              </a>
            </p>
            <p className="mt-2 text-sm">
              <a
                href="mailto:info@tytangroupbqmagazineltd.com"
                className="hover:text-primary"
              >
                info@tytangroupbqmagazineltd.com
              </a>
            </p>
          </div>
          <div className="bg-background p-10">
            <p className="text-[10px] uppercase tracking-[0.3em] text-primary mb-4">
              Brussels (EU)
            </p>
            <h4 className="text-2xl font-bold uppercase tracking-tight">
              Tytan Group / BQ Magazine
            </h4>
            <p className="mt-4 text-muted leading-relaxed">
              243 Boulevard Général Jacques,
              <br />
              1050 Brussels Ixelles, Belgium
            </p>
            <p className="mt-3 text-sm text-muted">TVA/BTW 0643.946.772</p>
            <p className="mt-2 text-sm">
              <a
                href="https://www.tytangroupbqmagazineltd.com"
                target="_blank"
                rel="noopener"
                className="hover:text-primary"
              >
                www.tytangroupbqmagazineltd.com
              </a>
            </p>
          </div>
        </div>
      </section>

      <AnimatedStats />
      <MarqueeSection />
      <CTASection />
    </>
  );
}
