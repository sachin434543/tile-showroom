'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { SITE } from '@/lib/site';

export default function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-pearl"
          exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
        >
          <div className="text-center">
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading text-3xl uppercase tracking-luxe text-bronze md:text-5xl"
            >
              {SITE.shortName}
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-3 text-[10px] uppercase tracking-[0.45em] text-smoke"
            >
              Ceramics &amp; Hardware
            </motion.p>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.4, ease: 'easeInOut', delay: 0.3 }}
              className="mx-auto mt-6 h-px w-44 origin-left bg-gradient-to-r from-transparent via-gold to-transparent"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
