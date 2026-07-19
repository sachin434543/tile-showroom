'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import { galleryImages } from '@/lib/data';

export default function Gallery() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id="inspiration" className="px-6 py-28 md:py-36">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Inspiration"
          title="Spaces We Love"
          description="Real interiors and finishes to spark ideas for your next project."
        />

        <div className="mt-16 columns-2 gap-5 md:columns-3 lg:columns-4 [&>*]:mb-5">
          {galleryImages.map((image, i) => (
            <Reveal key={image} delay={(i % 4) * 0.06}>
              <button
                onClick={() => setExpanded(image)}
                className="group block w-full overflow-hidden rounded-2xl"
                aria-label="Expand image"
              >
                <img
                  src={image}
                  alt="Tile inspiration"
                  loading="lazy"
                  decoding="async"
                  className="w-full transition-transform duration-[1.2s] group-hover:scale-108"
                />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-charcoal/70 p-6 backdrop-blur-md"
            onClick={() => setExpanded(null)}
          >
            <button
              aria-label="Close"
              className="glass absolute right-6 top-6 rounded-full p-2"
              onClick={() => setExpanded(null)}
            >
              <X size={18} className="text-ivory" />
            </button>
            <motion.img
              initial={{ scale: 0.92 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              src={expanded}
              alt="Tile inspiration expanded"
              className="max-h-full max-w-full rounded-2xl object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
