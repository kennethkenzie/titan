"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type NavLink = {
  href: string;
  label: string;
  children?: { href: string; label: string; description?: string }[];
};

const ABOUT_CHILDREN = [
  { href: "/about#core-solutions", label: "Our core solutions", description: "Strategy, creation, experience, activation, AI" },
  { href: "/about#brand-strategy", label: "Brand strategy", description: "Positioning, narrative, architecture" },
  { href: "/about#brand-creation", label: "Brand creation", description: "Identity systems & guidelines" },
  { href: "/about#brand-experience", label: "Brand experience", description: "Digital, retail, environmental" },
  { href: "/about#brand-activation", label: "Brand activation", description: "Campaigns, media, events" },
  { href: "/about#branded-ai", label: "Branded AI", description: "AI-native brand systems" },
  { href: "/about#speciality-solutions", label: "Our speciality solutions", description: "Specialised capabilities" },
  { href: "/about#brand-management-software", label: "Brand management software", description: "DAM, portals, governance" },
  { href: "/about#spatial-design", label: "Spatial design", description: "Interiors, signage, exhibitions" },
  { href: "/about#who-we-are", label: "Who we are", description: "Our team & approach" },
  { href: "/about#offices", label: "Our offices", description: "Kampala & Brussels" },
];

const SERVICES_CHILDREN = [
  { href: "/services", label: "All Services", description: "Overview of all capabilities" },
  { href: "/services#textile", label: "Textile & Garment", description: "T-shirts, hoodies, uniforms, jerseys" },
  { href: "/services#gifts", label: "Corporate Gifts", description: "Mugs, bottles, USBs, hampers" },
  { href: "/services#events", label: "Event Branding", description: "Banners, badges, conference kits" },
  { href: "/services#large-format", label: "Large Format", description: "Outdoor banners, billboards, posters" },
  { href: "/services#business-printing", label: "Business Printing", description: "Cards, letterheads, brochures" },
  { href: "/services#promotional", label: "Promotional Materials", description: "Stickers, flyers, packaging" },
  { href: "/partnership", label: "Joint Venture", description: "Partnership agreement & terms" },
];

const LINKS: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About", children: ABOUT_CHILDREN },
  { href: "/services", label: "Services", children: SERVICES_CHILDREN },
  { href: "/portfolio", label: "Work" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function FloatingNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileMenu, setMobileMenu] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.2, 0.7, 0.2, 1] }}
        className={cn(
          "fixed top-3 sm:top-4 z-50 left-3 right-12 sm:left-6 sm:right-24 lg:left-8 lg:right-40",
          "transition-all duration-500"
        )}
      >
        <div
          className={cn(
            "flex items-center justify-between gap-3 px-3 py-2.5 sm:px-6 sm:py-4 transition-all duration-300",
            scrolled
              ? "bg-white border border-white shadow-elevated [&_a]:!text-background [&_button]:!text-background [&_.bg-primary]:!text-white"
              : "bg-transparent"
          )}
        >
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <span className="block w-1.5 h-5 sm:w-2 sm:h-6 bg-primary shadow-glow group-hover:animate-glow-pulse" />
            <span className="text-display font-bold text-base sm:text-xl tracking-[0.18em] sm:tracking-[0.2em]">SMARI</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {LINKS.map((l) =>
              l.children ? (
                <div
                  key={l.href}
                  className="relative"
                  onMouseEnter={() => setOpenMenu(l.href)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <button
                    className="flex items-center gap-1 px-4 py-2 text-sm uppercase tracking-widest text-muted hover:text-white transition-colors relative group"
                    onClick={() => setOpenMenu((v) => (v === l.href ? null : l.href))}
                    aria-expanded={openMenu === l.href}
                    aria-haspopup="true"
                  >
                    {l.label}
                    <ChevronDown size={14} className={cn("transition-transform", openMenu === l.href && "rotate-180")} />
                    <span className="absolute left-4 right-7 -bottom-0.5 h-px bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform" />
                  </button>
                  <AnimatePresence>
                    {openMenu === l.href && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.18 }}
                        className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[min(640px,90vw)]"
                      >
                        <div className="bg-background/95 border border-border backdrop-blur-xl shadow-elevated p-3 grid grid-cols-2 gap-1 rounded-lg">
                          {l.children.map((c) => (
                            <Link
                              key={c.href}
                              href={c.href}
                              onClick={() => setOpenMenu(null)}
                              className="group flex flex-col gap-1 px-4 py-3 hover:bg-surface/60 border border-transparent hover:border-border transition-colors rounded-md"
                            >
                              <span className="text-sm font-semibold uppercase tracking-widest text-white group-hover:text-primary transition-colors">
                                {c.label}
                              </span>
                              {c.description && (
                                <span className="text-[11px] text-muted leading-relaxed">{c.description}</span>
                              )}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={l.href}
                  href={l.href}
                  className="px-4 py-2 text-sm uppercase tracking-widest text-muted hover:text-white transition-colors relative group"
                >
                  {l.label}
                  <span className="absolute left-4 right-4 -bottom-0.5 h-px bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform" />
                </Link>
              )
            )}
          </nav>

          <Link
            href="/contact"
            className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-xs uppercase tracking-[0.25em] font-semibold hover:bg-white hover:text-background transition-colors"
          >
            Start a project
          </Link>

          <button
            aria-label="Toggle menu"
            className="lg:hidden p-2 border border-border"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-x-2 sm:inset-x-4 top-16 sm:top-20 z-40 lg:hidden bg-background/95 border border-border backdrop-blur-xl max-h-[calc(100vh-5rem)] overflow-y-auto"
          >
            <nav className="flex flex-col p-4">
              {LINKS.map((l) =>
                l.children ? (
                  <div key={l.href} className="border-b border-border last:border-0">
                    <button
                      onClick={() => setMobileMenu((v) => (v === l.href ? null : l.href))}
                      className="w-full flex items-center justify-between py-3 px-2 text-sm uppercase tracking-widest"
                      aria-expanded={mobileMenu === l.href}
                    >
                      <span>{l.label}</span>
                      <ChevronDown size={16} className={cn("transition-transform", mobileMenu === l.href && "rotate-180")} />
                    </button>
                    <AnimatePresence initial={false}>
                      {mobileMenu === l.href && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-4 pb-3 flex flex-col">
                            {l.children.map((c) => (
                              <Link
                                key={c.href}
                                href={c.href}
                                onClick={() => {
                                  setOpen(false);
                                  setMobileMenu(null);
                                }}
                                className="py-2.5 px-2 text-xs uppercase tracking-widest text-muted hover:text-white border-l border-border hover:border-primary transition-colors"
                              >
                                {c.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="py-3 px-2 text-sm uppercase tracking-widest border-b border-border last:border-0"
                  >
                    {l.label}
                  </Link>
                )
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
