"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";

const OFFICES = [
  {
    city: "Kampala",
    country: "Uganda",
    role: "Headquarters",
    image:
      "https://images.unsplash.com/photo-1611348586804-61bf6c080437?auto=format&fit=crop&w=1800&q=80",
    address: ["Eagen Mansions, Victoria Towers", "1–13 Jinja Road", "Kampala, Uganda"],
    phones: ["+256 742 445 504", "+256 775 553 164"],
    email: "info@tytangroupbqmagazineltd.com",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Victoria+Towers+Jinja+Road+Kampala",
  },
  {
    city: "Brussels",
    country: "Belgium",
    role: "European Office",
    image:
      "https://images.unsplash.com/photo-1559113202-c916b8e44373?auto=format&fit=crop&w=1800&q=80",
    address: [
      "243 Boulevard Général Jacques",
      "1050 Brussels (Ixelles)",
      "Belgium · TVA/BTW 0643.946.772",
    ],
    phones: ["+256 742 445 504"],
    email: "info@tytangroupbqmagazineltd.com",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=243+Boulevard+General+Jacques+1050+Brussels",
  },
];

export default function OfficesPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 font-bold">
      {/* Header */}
      <section className="px-6 pt-40 pb-24 md:px-16 lg:px-24">
        <div className="max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-[0.95]"
          >
            Offices
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-10 max-w-xl text-base md:text-lg leading-relaxed text-neutral-600"
          >
            Two offices. One Smari Creative. Whether it&apos;s strategy, naming, design,
            digital experience, activation, or brand governance — we know what it takes
            to build brands for success.
          </motion.p>
        </div>
      </section>

      {/* Office grid */}
      <section className="px-6 pb-24 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {OFFICES.map((office, i) => (
            <motion.article
              key={office.city}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group relative overflow-hidden"
            >
              <Link href={office.mapUrl} target="_blank" rel="noopener noreferrer">
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
                  <Image
                    src={office.image}
                    alt={`${office.city} office`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-5 left-5 inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-neutral-900">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#E50914]" />
                    {office.role}
                  </div>
                  <div className="absolute top-5 right-5 grid place-items-center h-10 w-10 rounded-full bg-white text-neutral-900 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>

              <div className="pt-6">
                <div className="flex items-baseline justify-between gap-4">
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                    {office.city}
                  </h2>
                  <span className="text-sm uppercase tracking-widest text-neutral-500">
                    {office.country}
                  </span>
                </div>

                <dl className="mt-6 space-y-3 text-sm text-neutral-700">
                  <div className="flex gap-3">
                    <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-neutral-400" />
                    <div>
                      {office.address.map((line) => (
                        <div key={line}>{line}</div>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Phone className="h-4 w-4 mt-0.5 shrink-0 text-neutral-400" />
                    <div className="space-y-0.5">
                      {office.phones.map((p) => (
                        <div key={p}>
                          <a href={`tel:${p.replace(/\s+/g, "")}`} className="hover:text-[#E50914]">
                            {p}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Mail className="h-4 w-4 mt-0.5 shrink-0 text-neutral-400" />
                    <a
                      href={`mailto:${office.email}`}
                      className="hover:text-[#E50914] break-all"
                    >
                      {office.email}
                    </a>
                  </div>
                </dl>

                <Link
                  href={office.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium border-b border-neutral-900 pb-1 hover:gap-3 transition-all"
                >
                  Get directions
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-neutral-200 px-6 py-20 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <p className="text-xs uppercase tracking-widest text-neutral-500">
              Work with us
            </p>
            <h3 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight max-w-2xl">
              Have a project in mind? Let&apos;s move your brand.
            </h3>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-neutral-900 text-white px-6 py-3 text-sm font-medium hover:bg-[#E50914] transition-colors"
          >
            Start a conversation
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
