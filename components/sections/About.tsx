'use client';

import { useEffect, useRef, useState } from 'react';
import { animate, useInView } from 'framer-motion';
import Reveal from '@/components/ui/Reveal';
import { SITE, YEARS_OF_EXPERIENCE } from '@/lib/site';

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 2.2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className="font-heading text-5xl text-gradient-gold md:text-6xl">
      {display.toLocaleString('en-IN')}
      {suffix}
    </span>
  );
}

const stats = [
  { value: YEARS_OF_EXPERIENCE, suffix: '+', label: 'Years of Experience' },
  { value: 2000, suffix: '+', label: 'Projects Completed' },
  { value: 5000, suffix: '+', label: 'Happy Customers' },
  { value: 15, suffix: '+', label: 'Brands Available' },
];

export default function About() {
  return (
    <section id="about" className="relative px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-[11px] uppercase tracking-luxe text-bronze">Our Story</p>
          <h2 className="mt-6 max-w-3xl font-heading text-4xl leading-tight text-charcoal md:text-6xl">
            Crafting beautiful spaces in Puttur <span className="text-gradient-gold">since {SITE.foundedYear}.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-8 max-w-2xl text-lg font-light leading-relaxed text-smoke">
            Founded by {SITE.owner}, {SITE.name} has grown into the region&apos;s most trusted
            destination for premium tiles and hardware. Every collection is hand-picked for
            homes that deserve surfaces as timeless as the memories made on them.
          </p>
        </Reveal>

        <div className="mt-20 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.1}>
              <div className="glass rounded-3xl p-8 text-center transition-shadow duration-500 hover:shadow-glow-gold">
                <Counter value={stat.value} suffix={stat.suffix} />
                <p className="mt-3 text-xs uppercase tracking-[0.2em] text-smoke">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
