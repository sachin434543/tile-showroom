import { brands } from '@/lib/data';

export default function Brands() {
  const doubled = [...brands, ...brands];

  return (
    <section className="overflow-hidden border-y border-charcoal/5 py-14">
      <div className="marquee-pause">
        <div className="animate-marquee-slow flex w-max items-center gap-20 px-10">
          {doubled.map((brand, i) => (
            <span
              key={`${brand}-${i}`}
              className="whitespace-nowrap font-heading text-2xl uppercase tracking-[0.25em] text-charcoal/30 transition-colors duration-500 hover:text-bronze"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
