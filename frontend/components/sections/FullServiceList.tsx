"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import {
  Shirt,
  Gift,
  Calendar,
  Ruler,
  FileText,
  Megaphone,
  Check,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type ServiceGroup = {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  items: string[];
  techniques?: string[];
};

const GROUPS: ServiceGroup[] = [
  {
    id: "textile",
    number: "01",
    title: "Textile Branding & Garment Printing",
    description:
      "High-quality garment branding for businesses, organisations, schools, and events.",
    icon: Shirt,
    items: [
      "T-shirt printing",
      "Hoodie printing",
      "Cap branding",
      "Sports jersey printing",
      "Corporate uniform branding",
      "Reflective jacket printing",
      "Tote bag printing",
    ],
    techniques: [
      "Screen printing",
      "Heat transfer printing",
      "Vinyl printing",
      "DTF (Direct to Film) printing",
      "Sublimation printing",
    ],
  },
  {
    id: "gifts",
    number: "02",
    title: "Branded Corporate Gifts & Promotional Items",
    description:
      "Customised promotional merchandise to help businesses increase brand visibility and customer engagement.",
    icon: Gift,
    items: [
      "Branded mugs",
      "Water bottles",
      "Key holders",
      "Pens and office stationery",
      "Notebooks and diaries",
      "Power banks",
      "USB flash drives",
      "Desk organisers",
      "Gift hampers",
    ],
  },
  {
    id: "events",
    number: "03",
    title: "Corporate & Event Branding",
    description:
      "Professional branding solutions for corporate events, conferences, and marketing campaigns.",
    icon: Calendar,
    items: [
      "Roll-up banners",
      "Backdrop banners",
      "Pull-up banners",
      "Event badges & lanyards",
      "Conference materials",
      "Event souvenirs",
    ],
  },
  {
    id: "large-format",
    number: "04",
    title: "Large Format Printing",
    description:
      "High-impact printing designed to maximise brand visibility outdoors and in retail.",
    icon: Ruler,
    items: [
      "Outdoor banners",
      "Billboards",
      "Mesh banners",
      "PVC banners",
      "Posters",
      "Window graphics",
    ],
  },
  {
    id: "business-printing",
    number: "05",
    title: "Business Printing Services",
    description: "Professional printing solutions for everyday business needs.",
    icon: FileText,
    items: [
      "Business cards",
      "Letterheads",
      "Envelopes",
      "Company profiles",
      "Flyers & brochures",
      "Receipt books",
      "Invoice books",
      "Catalogs",
    ],
  },
  {
    id: "promotional",
    number: "06",
    title: "Promotional & Marketing Materials",
    description:
      "Creative materials designed to help promote businesses and products.",
    icon: Megaphone,
    items: [
      "Stickers & labels",
      "Posters",
      "Promotional flyers",
      "Product packaging labels",
      "Marketing brochures",
    ],
  },
];

export function FullServiceList() {
  return (
    <section className="relative py-32 md:py-40 border-y border-border bg-surface/30">
      <div className="container">
        <ScrollReveal>
          <p className="text-[11px] uppercase tracking-[0.4em] text-primary mb-4">
            ▍ Full Service List
          </p>
          <h2 className="text-display-md font-bold uppercase leading-[0.92] max-w-4xl">
            Everything we <span className="gradient-text-red">produce</span>.
          </h2>
          <p className="mt-6 max-w-2xl text-muted text-lg">
            From textile branding to large-format outdoor displays — a full catalogue of
            production services delivered out of our Kampala and Brussels offices.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {GROUPS.map((g, i) => {
            const Icon = g.icon;
            return (
              <motion.div
                key={g.id}
                id={g.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ delay: (i % 2) * 0.08, duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
                className="relative bg-background border border-border p-8 md:p-10 scroll-mt-28 group hover:border-primary/40 transition-colors"
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="w-12 h-12 border border-border flex items-center justify-center text-primary group-hover:border-primary transition-colors rounded-md">
                    <Icon size={20} />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-muted">
                    {g.number} / 06
                  </span>
                </div>

                <h3 className="mt-8 text-2xl md:text-3xl font-bold uppercase tracking-tight leading-tight">
                  {g.title}
                </h3>
                <p className="mt-3 text-sm md:text-base text-muted leading-relaxed">
                  {g.description}
                </p>

                <div className="mt-8">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-primary mb-4">
                    Services include
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                    {g.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm">
                        <Check size={14} className="mt-1 text-primary shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {g.techniques && (
                  <div className="mt-8 pt-6 border-t border-border">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-primary mb-4">
                      Printing techniques
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {g.techniques.map((t) => (
                        <span
                          key={t}
                          className="text-[11px] uppercase tracking-widest border border-border px-3 py-1.5 text-muted hover:text-white hover:border-primary transition-colors rounded-full"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
