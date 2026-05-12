import Link from "next/link";
import { ArrowRight } from "lucide-react";

const TOP_LINKS = [
  ["About", "/about"],
  ["Work", "/portfolio"],
  ["Offices", "/offices"],
  ["Smari Talks", "/case-studies"],
];

const SOCIALS = [
  ["LinkedIn", "https://linkedin.com"],
  ["Instagram", "https://instagram.com"],
  ["Facebook", "https://facebook.com"],
];

const LEGAL = [
  ["Imprint", "/imprint"],
  ["Data Privacy", "/privacy"],
  ["Cookies Settings", "/cookies"],
];

export function TitanFooter() {
  return (
    <footer className="bg-[#f1f1f1] text-neutral-900">
      <div className="px-6 md:px-12 lg:px-16 pt-16 pb-8">
        {/* Top nav links */}
        <nav className="flex flex-wrap items-center gap-x-10 gap-y-3">
          {TOP_LINKS.map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className="text-base text-neutral-700 hover:text-[#E50914] transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Big CTAs */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8">
          <div>
            <p className="text-2xl md:text-3xl text-neutral-400 font-normal">Let&apos;s talk</p>
            <Link
              href="/contact"
              className="group mt-2 inline-flex items-center gap-3 text-4xl md:text-5xl lg:text-6xl font-bold text-[#E50914] tracking-tight"
            >
              Contact
              <ArrowRight className="h-8 w-8 md:h-10 md:w-10 transition-transform duration-300 group-hover:translate-x-2" />
            </Link>
          </div>

          <div>
            <p className="text-2xl md:text-3xl text-neutral-400 font-normal">Join our team</p>
            <Link
              href="/careers"
              className="group mt-2 inline-flex items-center gap-3 text-4xl md:text-5xl lg:text-6xl font-bold text-[#E50914] tracking-tight"
            >
              Careers
              <ArrowRight className="h-8 w-8 md:h-10 md:w-10 transition-transform duration-300 group-hover:translate-x-2" />
            </Link>
          </div>
        </div>

        {/* Spacer */}
        <div className="h-24 md:h-32" />

        {/* Bottom row */}
        <div className="pt-6 border-t border-neutral-300 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
            {SOCIALS.map(([label, href]) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-neutral-700 hover:text-[#E50914] transition-colors"
              >
                {label}
              </a>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
            {LEGAL.map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className="text-sm text-neutral-700 hover:text-[#E50914] transition-colors"
              >
                {label}
              </Link>
            ))}
            <span className="text-sm text-neutral-500">
              © Smari Creative, c/o Tytan Group / BQ Magazine Limited
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
