import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const NAV = [
  { title: "Studio", links: [["About", "/about"], ["Services", "/services"], ["Contact", "/contact"]] },
  { title: "Work", links: [["Portfolio", "/portfolio"], ["Case Studies", "/case-studies"], ["Journal", "/blog"]] },
  {
    title: "Contact",
    links: [
      ["info@tytangroupbqmagazineltd.com", "mailto:info@tytangroupbqmagazineltd.com"],
      ["+256 742 445 504", "tel:+256742445504"],
      ["+256 775 553 164", "tel:+256775553164"],
      ["Kampala · Brussels", "/contact"],
    ],
  },
];

export function TitanFooter() {
  return (
    <footer className="relative border-t border-border bg-background">
      <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      <div className="container py-24 md:py-32">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <span className="block w-2 h-12 bg-primary shadow-glow group-hover:animate-glow-pulse" />
              <span className="text-display-md font-bold uppercase tracking-[-0.03em] leading-none">SMARI CREATIVE</span>
            </Link>
            <p className="mt-6 text-[11px] uppercase tracking-[0.3em] text-muted">
              c/o Tytan Group / BQ Magazine Limited
            </p>
            <p className="mt-10 max-w-xl text-display-sm font-bold leading-[1.05] uppercase tracking-[-0.02em] gradient-text">
              Let&apos;s move your brand.
            </p>
            <p className="mt-6 max-w-xl text-sm text-muted leading-relaxed">
              A Creative, marketing, branding, events management, and promotional services agency
              specialising in corporate identity, creative marketing, pixel-perfect printing,
              online web solutions, events & support, and audio/visual & motion graphics.
            </p>

            {/* Offices */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-border p-5">
                <p className="text-[10px] uppercase tracking-[0.3em] text-primary mb-3">Kampala (HQ)</p>
                <p className="text-sm text-muted leading-relaxed">
                  Eagen Mansions, Victoria Towers,<br />
                  1–13 Jinja Road, Kampala, Uganda
                </p>
              </div>
              <div className="border border-border p-5">
                <p className="text-[10px] uppercase tracking-[0.3em] text-primary mb-3">Brussels (EU)</p>
                <p className="text-sm text-muted leading-relaxed">
                  243 Boulevard Général Jacques,<br />
                  1050 Brussels Ixelles, Belgium<br />
                  <span className="text-[11px]">TVA/BTW 0643.946.772</span>
                </p>
              </div>
            </div>

            <div className="mt-10 flex items-center gap-3">
              {[Twitter, Instagram, Linkedin, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-12 h-12 border border-border flex items-center justify-center hover:bg-primary hover:border-primary transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 md:grid-cols-3 gap-10">
            {NAV.map((col) => (
              <div key={col.title}>
                <p className="text-[10px] uppercase tracking-[0.3em] text-primary mb-5">{col.title}</p>
                <ul className="space-y-3">
                  {col.links.map(([label, href]) => (
                    <li key={label}>
                      <Link href={href} className="text-sm text-muted hover:text-white transition-colors break-words">
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-border flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-[11px] uppercase tracking-[0.3em] text-muted">
          <p>© {new Date().getFullYear()} Tytan Group / BQ Magazine Limited — All rights reserved.</p>
          <p>
            <a
              href="https://www.tytangroupbqmagazineltd.com"
              className="hover:text-primary transition-colors"
            >
              www.tytangroupbqmagazineltd.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
