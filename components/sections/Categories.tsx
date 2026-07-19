import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { categories } from '@/lib/data';

export default function Categories() {
  return (
    <section id="categories" className="px-6 py-28 md:py-36">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Curated Spaces"
          title="Explore by Category"
          description="From serene bathrooms to grand elevations, discover collections designed for every corner of your home."
        />
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, i) => (
            <Reveal key={category.slug} delay={(i % 3) * 0.1}>
              <a
                href="#collections"
                className="group relative block h-80 overflow-hidden rounded-3xl"
              >
                <img
                  src={category.image}
                  alt={`${category.name} tiles`}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/20 to-transparent" />
                <div className="absolute inset-0 bg-gold/0 transition-colors duration-500 group-hover:bg-gold/10" />
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <h3 className="font-heading text-2xl text-ivory">{category.name}</h3>
                  <p className="mt-2 max-w-xs text-sm font-light text-ivory/70">
                    {category.description}
                  </p>
                  <span className="mt-4 inline-block translate-y-2 text-xs uppercase tracking-[0.25em] text-gold-soft opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    View Collection →
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
