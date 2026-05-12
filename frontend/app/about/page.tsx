"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, ArrowRight } from "lucide-react";

type RelatedCase = { name: string; tags: string; image: string };
type Item = {
  id: string;
  title: string;
  description: string;
  bullets: string[];
  cases?: RelatedCase[];
};

const CORE_SOLUTIONS: Item[] = [
  {
    id: "brand-strategy",
    title: "Brand strategy",
    description:
      "Crafting sustainable brand strategies with real-life applicability using robust proprietary tools allows us to translate original ideas into uniquely impactful brand strategies defining the future of brands across all dimensions. Our strategists craft sustainable brand experiences, create memorable product and company names and engage on brand architecture systems to help businesses go to market efficiently.",
    bullets: [
      "Positioning",
      "Purpose, mission, vision",
      "Naming",
      "Market and brand equity insights",
      "Brand portfolio and architecture",
      "Employer branding",
      "Messaging and claims",
    ],
    cases: [
      {
        name: "Cuisinart",
        tags: "Brand strategy, Positioning",
        image:
          "https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "INNIO",
        tags: "Web design, Brand communications",
        image:
          "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  {
    id: "brand-creation",
    title: "Brand creation",
    description:
      "Designing delightful user interactions, whether analog, digital, or spatial, is how we use the power of creativity to transform brands. Bold creative concepts bring strategies to life across multiple touchpoints. Our creative and sustainable solutions shape the smallest detail all the way through to complete user journeys.",
    bullets: [
      "Brand identity systems (CI/VI)",
      "Interaction and experience design (IX/UX)",
      "Motion design (A/V)",
      "Spatial design (retail, trade, signage)",
      "Packaging design",
      "Dynamic design guidelines",
      "POS design",
    ],
    cases: [
      {
        name: "AOK",
        tags: "Brand strategy, Brand identity",
        image:
          "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Cuisinart",
        tags: "Brand strategy, Positioning",
        image:
          "https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Heidelberg Materials",
        tags: "Brand strategy, Naming",
        image:
          "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  {
    id: "brand-experience",
    title: "Brand experience",
    description:
      "Creating immersive experiences allow the brands we work with to shine and speak to people clearly. Whether we’re designing universal experience principles or prototyping sustainable and exciting new digital products, our goal is to create memorable branded interactions that awaken all senses.",
    bullets: [
      "Web and app design",
      "Innovation and service design",
      "Product prototyping",
    ],
    cases: [
      {
        name: "Deutsche Telekom",
        tags: "Brand identity, Packaging design",
        image:
          "https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Porsche",
        tags: "Brand strategy, Brand identity",
        image:
          "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  {
    id: "brand-activation",
    title: "Brand activation",
    description:
      "Creatively activating customers, management, and employees for building long-term, sustainable brand engagement is the foundation of a successful transformation process. We support our clients with detailed transition planning, communications strategy, and change management. SmariBMS, our scalable brand platform, simplifies governance, powers brand activation, and ensures consistency worldwide. By combining smart technology with brand expertise, it enables organizations to implement, manage, and grow their brand with clarity and confidence.",
    bullets: [
      "Brand implementation",
      "Brand communications (internal and external)",
      "Brand governance (blueprint and monitoring)",
      "Leadership and employee engagement",
      "Brand help desk",
      "Change management",
    ],
    cases: [
      {
        name: "Henkel",
        tags: "Positioning, Dynamic design guidelines",
        image:
          "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Liebherr",
        tags: "Motion design (A/V), Brand implementation",
        image:
          "https://images.unsplash.com/photo-1530143584546-02191bc84eb5?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "AOK",
        tags: "Brand strategy, Brand identity",
        image:
          "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  {
    id: "branded-ai",
    title: "Branded AI",
    description:
      "Your brand’s next evolution is AI-powered. At Smari Creative, we don’t just explore AI — we build it around your brand’s DNA. Our Branded AI solution embeds your brand’s values, tone, and personality into every AI-driven interaction. The result: smarter, more consistent experiences that feel uniquely like your brand.",
    bullets: [
      "Branded AI Personality",
      "Brand Assistant",
      "Brand Writer",
      "Brand Check",
      "AI Brand Level Support",
      "AI-Guidelines",
    ],
    cases: [
      {
        name: "Branded AI",
        tags: "AI brand systems",
        image:
          "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
];

const SPECIALITY: Item[] = [
  {
    id: "brand-management-software",
    title: "Brand management software",
    description:
      "Digital asset management, brand portals, and governance workflows that keep teams aligned.",
    bullets: [
      "Digital asset management (DAM)",
      "Brand portals",
      "Approval & governance workflows",
      "Template libraries",
    ],
  },
  {
    id: "spatial-design",
    title: "Spatial design",
    description:
      "Interiors, signage, exhibitions, and wayfinding that translate the brand into physical space.",
    bullets: [
      "Retail & interior branding",
      "Signage & wayfinding",
      "Exhibitions & trade shows",
      "Environmental graphics",
    ],
  },
];

const TEAM = [
  {
    name: "Diana Brix",
    role: "Managing Director · Kampala",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Andreas Björk",
    role: "Creative Director · Brussels",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Lukas Eiselin",
    role: "Head of Production",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
  },
];

const OFFICES = [
  {
    city: "Kampala",
    image:
      "https://images.unsplash.com/photo-1611348586804-61bf6c080437?auto=format&fit=crop&w=1600&q=80",
  },
  {
    city: "Brussels",
    image:
      "https://images.unsplash.com/photo-1559113202-c916b8e44373?auto=format&fit=crop&w=1600&q=80",
  },
];

function Accordion({ items }: { items: Item[] }) {
  const [openId, setOpenId] = useState<string | null>(null);
  return (
    <div className="border-t border-neutral-200">
      {items.map((it) => {
        const isOpen = openId === it.id;
        return (
          <div key={it.id} id={it.id} className="border-b border-neutral-200 scroll-mt-28">
            <button
              type="button"
              onClick={() => setOpenId(isOpen ? null : it.id)}
              className="w-full flex items-center justify-between gap-6 py-6 md:py-8 text-left group"
              aria-expanded={isOpen}
            >
              <span className="text-xl md:text-2xl lg:text-3xl font-normal text-neutral-900 group-hover:text-[#8B0000] transition-colors">
                {it.title}
              </span>
              <Plus
                className={`h-6 w-6 md:h-7 md:w-7 shrink-0 text-neutral-700 transition-transform duration-300 ${
                  isOpen ? "rotate-45" : ""
                }`}
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pb-10 md:pb-14 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    <p className="text-[15.5px] font-semibold leading-[1.55] text-neutral-700">
                      {it.description}
                    </p>
                    <ul className="space-y-2 text-[15.5px] font-semibold leading-[1.55] text-neutral-700">
                      {it.bullets.map((b) => (
                        <li key={b} className="flex gap-3">
                          <span className="text-neutral-400">•</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {it.cases && it.cases.length > 0 && (
                    <div className="pb-10 md:pb-14">
                      <p className="text-sm font-medium text-neutral-900 mb-4">Related cases</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                        {it.cases.map((c) => (
                          <Link
                            href={`/portfolio`}
                            key={c.name}
                            className="group block"
                          >
                            <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
                              <Image
                                src={c.image}
                                alt={c.name}
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                              />
                            </div>
                            <p className="mt-3 text-sm font-semibold text-neutral-900">{c.name}</p>
                            <p className="text-xs text-neutral-600">{c.tags}</p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="relative bg-white text-neutral-900 lg:flex lg:items-stretch font-bold">
      {/* Main content */}
      <main className="flex-1 min-w-0">
      {/* Hero — dark red */}
      <section className="bg-[#8B0000] text-white">
        <div className="px-6 md:px-12 lg:px-20 pt-40 pb-24 md:pt-48 md:pb-32 max-w-6xl">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] max-w-4xl"
          >
            We make businesses the best they can be.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-10 max-w-xl text-base md:text-lg text-white/85 leading-relaxed"
          >
            We are a creative brand consultancy. We&apos;ve been collaborating with leading
            organisations to solve brand and business challenges since 2014. Our team
            across Kampala and Brussels uses the power of creativity to transform
            businesses for the better.
          </motion.p>
        </div>
      </section>

      {/* Our core solutions */}
      <section id="core-solutions" className="px-6 md:px-12 lg:px-20 pt-24 md:pt-32 pb-12 scroll-mt-24">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-10 md:mb-14">
          Our core solutions
        </h2>
        <Accordion items={CORE_SOLUTIONS} />
      </section>

      {/* Our speciality solutions */}
      <section id="speciality-solutions" className="px-6 md:px-12 lg:px-20 pt-12 md:pt-16 pb-24 md:pb-32 scroll-mt-24">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-10 md:mb-14">
          Our speciality solutions
        </h2>
        <Accordion items={SPECIALITY} />
      </section>

      {/* Who we are — full-bleed video */}
      <section id="who-we-are" className="pt-16 md:pt-24 pb-24 md:pb-32 scroll-mt-24">
        <h2 className="px-6 md:px-12 lg:px-20 text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-10 md:mb-16">
          Who we are
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative w-screen aspect-video overflow-hidden bg-neutral-900"
        >
          <video
            src="https://ik.imagekit.io/bithub/210929_Meta_Reel_Update_01-1%20(1).mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>
      </section>

      {/* Our global leadership team */}
      <section className="px-6 md:px-12 lg:px-20 pb-24 md:pb-32">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-10 md:mb-14">
          Our global leadership team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TEAM.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-neutral-200">
                <Image
                  src={m.image}
                  alt={m.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <p className="mt-4 text-lg md:text-xl font-bold text-neutral-900">{m.name}</p>
              <p className="text-sm text-neutral-600">{m.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our offices */}
      <section id="offices" className="px-6 md:px-12 lg:px-20 pb-24 md:pb-32 scroll-mt-24">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-10 md:mb-14">
          Our offices
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {OFFICES.map((o, i) => (
            <motion.div
              key={o.city}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <Link href="/offices" className="group block">
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-200">
                  <Image
                    src={o.image}
                    alt={o.city}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="mt-4 text-xl md:text-2xl font-bold text-neutral-900">{o.city}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Driven & visionary red card */}
      <section className="px-6 md:px-12 lg:px-20 pb-24 md:pb-32">
        <div className="flex justify-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="w-full md:w-3/4 lg:w-2/3 bg-[#8B0000] text-white p-10 md:p-16 lg:p-20"
          >
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              We are driven and visionary.
              <br />
              Are you the same?
            </h3>
            <Link
              href="/careers"
              className="group mt-10 md:mt-14 inline-flex items-center gap-3 text-base md:text-lg text-white"
            >
              <span className="border-b border-white/60 pb-1">Join our team</span>
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
            </Link>
          </motion.div>
        </div>
      </section>
      </main>

      {/* Sticky right sidebar — video background with black overlay, stops before the footer */}
      <aside
        aria-hidden="true"
        className="hidden lg:flex sticky top-0 self-start h-screen w-28 xl:w-36 z-40 flex-col items-center shrink-0 overflow-hidden text-white"
      >
        {/* Background video */}
        <video
          src="https://ik.imagekit.io/bithub/210929_Meta_Reel_Update_01-1%20(1).mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Black transparent overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Rotated label */}
        <div className="relative flex-1 flex items-center justify-center">
          <Link
            href="/portfolio"
            className="text-white text-sm tracking-[0.3em] uppercase font-medium hover:opacity-80 transition-opacity"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            Work
          </Link>
        </div>
      </aside>
    </div>
  );
}
