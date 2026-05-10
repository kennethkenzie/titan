"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { CLIENTS } from "@/lib/data";

export function TrustedClients({
  title,
  subtitle,
}: {
  title?: React.ReactNode;
  subtitle?: string;
}) {
  return (
    <section id="trusted-clients" className="relative py-24 md:py-32 border-y border-border bg-surface/30">
      <div className="container">
        <ScrollReveal>
          <p className="text-[11px] uppercase tracking-[0.4em] text-primary mb-4">▍ Trusted clients</p>
          <h2 className="text-display-md font-bold uppercase leading-[0.92] max-w-4xl">
            {title ?? (
              <>
                Trusted by ambitious <span className="gradient-text-red">teams.</span>
              </>
            )}
          </h2>
          <p className="mt-6 max-w-2xl text-muted text-lg">
            {subtitle ??
              "A selection of brands, organisations, and partners we have supported across identity, print, digital, events, and campaign execution."}
          </p>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-border border border-border">
          {CLIENTS.map((client, i) => (
            <motion.div
              key={client}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.6 }}
              className="bg-background px-5 py-8 md:px-8 md:py-10 flex items-center justify-center text-center min-h-[110px]"
            >
              <span className="text-base md:text-lg font-bold uppercase tracking-[0.28em] text-white/85 hover:text-primary transition-colors">
                {client}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
