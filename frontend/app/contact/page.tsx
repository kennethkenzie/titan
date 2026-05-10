import { VideoHero } from "@/components/sections/VideoHero";
import { ContactForm } from "@/components/sections/ContactForm";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export default function ContactPage() {
  return (
    <>
      <VideoHero
        eyebrow="▍ Contact"
        title="Tell us what you're building."
        subtitle="We partner with a handful of ambitious teams each year. If you're serious, we'd like to hear about it."
        posterSrc="https://images.unsplash.com/photo-1518770660439-4636190af475?w=2400"
      />
      <section className="container py-24 md:py-32 grid lg:grid-cols-12 gap-16">
        <ScrollReveal className="lg:col-span-5 space-y-10">
          <div>
            <p className="text-[11px] uppercase tracking-[0.4em] text-primary mb-4">Offices</p>
            <ul className="space-y-6 text-base leading-relaxed">
              <li>
                <span className="text-muted block text-[11px] uppercase tracking-[0.3em] mb-1">Kampala (HQ)</span>
                Eagen Mansions, Victoria Towers,<br />1–13 Jinja Road, Kampala, Uganda
              </li>
              <li>
                <span className="text-muted block text-[11px] uppercase tracking-[0.3em] mb-1">Brussels (EU)</span>
                243 Boulevard Général Jacques,<br />1050 Brussels Ixelles, Belgium
                <span className="block text-[11px] text-muted mt-1">TVA/BTW 0643.946.772</span>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.4em] text-primary mb-4">Direct</p>
            <ul className="space-y-3 text-base break-words">
              <li><a className="hover:text-primary transition-colors" href="mailto:info@tytangroupbqmagazineltd.com">info@tytangroupbqmagazineltd.com</a></li>
              <li><a className="hover:text-primary transition-colors" href="tel:+256742445504">+256 742 445 504</a></li>
              <li><a className="hover:text-primary transition-colors" href="tel:+256775553164">+256 775 553 164</a></li>
              <li><a className="hover:text-primary transition-colors" href="https://www.tytangroupbqmagazineltd.com" target="_blank" rel="noopener">www.tytangroupbqmagazineltd.com</a></li>
            </ul>
          </div>
        </ScrollReveal>
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
