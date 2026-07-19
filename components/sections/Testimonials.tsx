import SectionHeading from '@/components/ui/SectionHeading';
import { testimonials as staticTestimonials } from '@/lib/data';
import type { Testimonial } from '@/lib/types';

type TestimonialsProps = {
  testimonials?: Testimonial[];
};

export default function Testimonials({ testimonials = staticTestimonials }: TestimonialsProps) {
  const doubled = [...testimonials, ...testimonials];

  return (
    <section className="overflow-hidden bg-sand/40 py-28 md:py-36">
      <div className="px-6">
        <SectionHeading
          eyebrow="Testimonials"
          title="Loved by Homeowners"
          description="Words from the families and businesses we have served since 2014."
        />
      </div>

      <div className="marquee-pause mt-16">
        <div className="animate-marquee flex w-max gap-6">
          {doubled.map((t, i) => (
            <figure
              key={`${t.name}-${i}`}
              className="glass w-80 shrink-0 rounded-3xl p-7 transition-shadow duration-500 hover:shadow-glow-gold"
            >
              <p className="font-heading text-3xl leading-none text-gold">“</p>
              <blockquote className="mt-2 text-sm font-light leading-relaxed text-charcoal/80">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-bronze to-gold font-heading text-sm text-white">
                  {t.name.charAt(0)}
                </span>
                <span>
                  <span className="block text-sm text-charcoal">{t.name}</span>
                  <span className="block text-[11px] uppercase tracking-[0.15em] text-smoke">
                    {t.location}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
