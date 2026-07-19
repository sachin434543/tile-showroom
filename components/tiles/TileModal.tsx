'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MessageCircle, X, ZoomIn, ZoomOut } from 'lucide-react';
import type { Tile } from '@/lib/types';
import { categories } from '@/lib/data';
import { SITE } from '@/lib/site';

type TileModalProps = {
  tile: Tile | null;
  onClose: () => void;
};

export default function TileModal({ tile, onClose }: TileModalProps) {
  const [activeImage, setActiveImage] = useState(0);
  const [zoomed, setZoomed] = useState(false);

  const categoryName = tile
    ? (categories.find((c) => c.slug === tile.category)?.name ?? tile.category)
    : '';

  const inquiryUrl = tile
    ? `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
        `Hello ${SITE.shortName}! I am interested in ${tile.name} (${tile.designNumber}).`,
      )}`
    : '#';

  return (
    <AnimatePresence onExitComplete={() => { setActiveImage(0); setZoomed(false); }}>
      {tile && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-charcoal/60 p-4 backdrop-blur-md md:p-8"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.94, y: 24 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.96, y: 16 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="grid max-h-full w-full max-w-5xl grid-cols-1 overflow-y-auto rounded-3xl bg-pearl shadow-2xl md:grid-cols-2"
          >
            {/* Gallery */}
            <div className="relative">
              <div
                className={`relative h-72 overflow-hidden md:h-full md:min-h-[560px] ${zoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}
                onClick={() => setZoomed((z) => !z)}
              >
                <img
                  src={tile.images[activeImage]}
                  alt={tile.name}
                  className={`h-full w-full object-cover transition-transform duration-700 ${zoomed ? 'scale-150' : 'scale-100'}`}
                />
                <span className="glass absolute bottom-4 left-4 rounded-full p-2">
                  {zoomed ? <ZoomOut size={14} /> : <ZoomIn size={14} />}
                </span>
              </div>
              <div className="absolute bottom-4 right-4 flex gap-2">
                {tile.images.map((image, i) => (
                  <button
                    key={image}
                    aria-label={`View image ${i + 1}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveImage(i);
                      setZoomed(false);
                    }}
                    className={`h-12 w-12 overflow-hidden rounded-xl border-2 transition-colors ${
                      i === activeImage ? 'border-gold' : 'border-white/60'
                    }`}
                  >
                    <img src={image} alt="" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Details */}
            <div className="relative p-8 md:p-10">
              <button
                aria-label="Close"
                onClick={onClose}
                className="glass absolute right-5 top-5 rounded-full p-2 transition-colors hover:border-gold/60"
              >
                <X size={16} />
              </button>

              <p className="text-[11px] uppercase tracking-luxe text-bronze">{tile.brand}</p>
              <h3 className="mt-3 font-heading text-3xl text-charcoal md:text-4xl">{tile.name}</h3>
              <p className="mt-2 text-xs uppercase tracking-[0.25em] text-smoke">
                Design No. {tile.designNumber}
              </p>

              <p className="mt-6 font-heading text-3xl text-gradient-gold">
                ₹{tile.price}
                <span className="text-base text-smoke"> / sq.ft</span>
              </p>

              <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 text-sm">
                {[
                  ['Size', tile.size],
                  ['Finish', tile.finish],
                  ['Material', tile.material],
                  ['Category', categoryName],
                  ['Availability', tile.inStock ? 'In Stock' : 'Made to Order'],
                  ['Brand', tile.brand],
                ].map(([label, value]) => (
                  <div key={label}>
                    <dt className="text-[10px] uppercase tracking-[0.2em] text-smoke">{label}</dt>
                    <dd className="mt-1 text-charcoal">{value}</dd>
                  </div>
                ))}
              </dl>

              {SITE.whatsapp && (
                <a
                  href={inquiryUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-bronze via-gold to-gold-soft px-8 py-3.5 text-sm uppercase tracking-[0.2em] text-white transition-shadow duration-500 hover:shadow-glow-gold"
                >
                  <MessageCircle size={16} />
                  Enquire on WhatsApp
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
