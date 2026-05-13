"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { MenuToggleIcon } from "@/components/ui/menu-toggle-icon";
import { SterlingGateKineticNavigation } from "@/components/ui/sterling-gate-kinetic-navigation";
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
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Work" },
  { href: "/case-studies", label: "Smari Talks" },
  { href: "/offices", label: "Offices" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

const LIGHT_BG_ROUTES = ["/offices"];

export function FloatingNavbar() {
  const pathname = usePathname();
  const isLightPage = LIGHT_BG_ROUTES.some((r) => pathname === r || pathname?.startsWith(r + "/"));
  const isWorkPage = pathname === "/portfolio";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileMenu, setMobileMenu] = useState<string | null>(null);
  const dark = isLightPage || scrolled;

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
          "fixed top-3 sm:top-4 z-50 left-3 right-3 sm:left-4 sm:right-4 lg:left-0 lg:right-0",
          "transition-all duration-500"
        )}
      >
        <div className="lg:hidden">
          <div
            className={cn(
              "grid grid-cols-[1fr_auto] items-center gap-3 px-3 py-2.5 sm:px-6 sm:py-4 transition-all duration-300",
              scrolled
                ? "bg-white border border-white shadow-elevated [&_a]:!text-background [&_button]:!text-background"
                : isLightPage
                  ? "bg-transparent [&_a]:!text-background [&_button]:!text-background"
                  : "bg-transparent"
            )}
          >
            <Link href="/" className="flex items-center gap-2 group shrink-0">
              <span
                className={cn(
                  "block w-1.5 h-5 sm:w-2 sm:h-6 shadow-glow group-hover:animate-glow-pulse",
                  dark ? "bg-primary" : "bg-white"
                )}
              />
              <span
                className={cn(
                  "text-display font-bold text-base sm:text-xl tracking-[0.18em] sm:tracking-[0.2em]",
                  dark ? "text-background" : "text-white"
                )}
              >
                SMARI
              </span>
            </Link>

            <div className="flex items-center gap-2">
              <button
                type="button"
                className="flex items-center gap-1 px-2 py-1.5 text-sm font-semibold tracking-[0.1em] whitespace-nowrap"
              >
                En
                <ChevronDown size={12} />
              </button>
              <button
                aria-label="Toggle menu"
                aria-expanded={open}
                className="p-1.5 grid place-items-center"
                onClick={() => setOpen((v) => !v)}
              >
                <MenuToggleIcon open={open} className="size-8" duration={500} />
              </button>
            </div>
          </div>
        </div>

        <div className="hidden lg:grid lg:grid-cols-2 lg:items-center">
          {isWorkPage ? (
            <div />
          ) : (
            <div className="flex items-center justify-start pl-8 xl:pl-10">
              <Link href="/" className="flex items-center gap-2 group shrink-0">
                <span className={cn("block w-2 h-6 shadow-glow group-hover:animate-glow-pulse", dark ? "bg-primary" : "bg-white")} />
                <span className={cn("text-display font-bold text-xl tracking-[0.2em]", dark ? "text-background" : "text-white")}>SMARI</span>
              </Link>
            </div>
          )}

          <nav
            className={cn(
              "mr-8 xl:mr-10 flex items-center justify-end gap-1 px-6 py-4 transition-all duration-300",
              scrolled
                ? "bg-white border border-white shadow-elevated [&_a]:!text-background [&_button]:!text-background"
                : isLightPage
                  ? "bg-transparent [&_a]:!text-background [&_button]:!text-background"
                  : "bg-transparent"
            )}
          >
            {LINKS.map((l) =>
              l.children ? (
                <div
                  key={l.href}
                  className="relative"
                  onMouseEnter={() => setOpenMenu(l.href)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <button
                    className="flex items-center gap-1 px-4 py-2 text-base font-semibold tracking-[0.12em] text-white transition-colors relative group"
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
                              <span className="text-sm font-semibold tracking-[0.12em] text-white group-hover:text-primary transition-colors">
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
                  className="px-4 py-2 text-base font-semibold tracking-[0.12em] text-white transition-colors relative group whitespace-nowrap"
                >
                  {l.label}
                  <span className="absolute left-4 right-4 -bottom-0.5 h-px bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform" />
                </Link>
              )
            )}
            {/* Language toggle */}
            <button
              type="button"
              className="ml-3 flex items-center gap-1 px-3 py-2 text-base font-semibold tracking-[0.12em] text-white whitespace-nowrap"
            >
              En
              <ChevronDown size={14} />
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Kinetic full-screen menu (used for the hamburger toggle) */}
      <SterlingGateKineticNavigation
        isOpen={open}
        onClose={() => setOpen(false)}
        links={LINKS.map((l) => ({ href: l.href, label: l.label }))}
      />
    </>
  );
}
