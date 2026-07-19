'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import MagneticButton from '@/components/ui/MagneticButton';
import { SITE } from '@/lib/site';

const TileWall = dynamic(() => import('@/components/three/TileWall'), { ssr: false });

const headlineWords = ['Tiles', 'That', 'Tell', 'Stories.'];

const wordVariants = {
  hidden: { y: '110%', opacity: 0 },
  visible: (i: number) => ({
    y: '0%',
    opacity: 1,
    transition: { duration: 1.1, delay: 2.5 + i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* 3D tile wall background */}
      <div className="absolute inset-0">
        <TileWall />
      </div>

      {/* Cinematic gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-pearl/80 via-transparent to-pearl" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(250,248,243,0.85)_100%)]" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0, letterSpacing: '0.2em' }}
          animate={{ opacity: 1, letterSpacing: '0.45em' }}
          transition={{ duration: 1.4, delay: 2.3, ease: 'easeOut' }}
          className="mb-6 text-[11px] uppercase text-bronze"
        >
          {SITE.name}
        </motion.p>

        <h1 className="font-heading text-5xl leading-[1.05] text-charcoal md:text-7xl lg:text-8xl">
          {headlineWords.map((word, i) => (
            <span key={word} className="inline-block overflow-hidden align-top">
              <motion.span
                custom={i}
                variants={wordVariants}
                initial="hidden"
                animate="visible"
                className={`inline-block pr-4 ${i >= 2 ? 'text-gradient-gold glow-gold' : ''}`}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-xl text-base font-light leading-relaxed text-smoke md:text-lg"
        >
          {SITE.subTagline} Serving timeless homes since {SITE.foundedYear}.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex flex-col items-center gap-4 sm:flex-row"
        >
          <MagneticButton variant="solid">Explore Collection</MagneticButton>
          <MagneticButton variant="outline">Book a Showroom Visit</MagneticButton>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 4 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-bronze/80"
        >
          <span className="text-[10px] uppercase tracking-luxe">Scroll</span>
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
