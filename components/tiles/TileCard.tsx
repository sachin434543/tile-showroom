'use client';

import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Heart, Share2 } from 'lucide-react';
import type { Tile } from '@/lib/types';
import { categories } from '@/lib/data';

type TileCardProps = {
  tile: Tile;
  onSelect: (tile: Tile) => void;
};

export default function TileCard({ tile, onSelect }: TileCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [wishlisted, setWishlisted] = useState(false);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [7, -7]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-7, 7]), { stiffness: 200, damping: 20 });

  const onMouseMove = (e: React.MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const onMouseLeave = () => {
    mx.set(0);
    my.set(0);
  };

  const onShare = async (e: React.MouseEvent) => {
    e.stopPropagation();
    const shareData = {
      title: tile.name,
      text: `${tile.name} (${tile.designNumber}) — ₹${tile.price}/sq.ft`,
      url: window.location.href,
    };
    if (navigator.share) {
      await navigator.share(shareData).catch(() => undefined);
    } else {
      await navigator.clipboard.writeText(`${shareData.text} ${shareData.url}`);
    }
  };

  const categoryName = categories.find((c) => c.slug === tile.category)?.name ?? tile.category;

  return (
    <motion.div
      ref={cardRef}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onClick={() => onSelect(tile)}
      className="group cursor-pointer rounded-3xl bg-white/70 p-3 shadow-glass transition-shadow duration-500 hover:shadow-glow-gold"
    >
      <div className="relative h-64 overflow-hidden rounded-2xl">
        <img
          src={tile.images[0]}
          alt={tile.name}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-108"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="absolute right-3 top-3 flex gap-2">
          <button
            aria-label="Add to wishlist"
            onClick={(e) => {
              e.stopPropagation();
              setWishlisted((w) => !w);
            }}
            className="glass rounded-full p-2 transition-colors hover:border-gold/60"
          >
            <Heart
              size={15}
              className={wishlisted ? 'fill-gold text-gold' : 'text-charcoal/70'}
            />
          </button>
          <button
            aria-label="Share tile"
            onClick={onShare}
            className="glass rounded-full p-2 transition-colors hover:border-gold/60"
          >
            <Share2 size={15} className="text-charcoal/70" />
          </button>
        </div>
        <span
          className={`absolute left-3 top-3 rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.15em] ${
            tile.inStock ? 'bg-gold/90 text-white' : 'bg-charcoal/80 text-ivory'
          }`}
        >
          {tile.inStock ? 'In Stock' : 'Made to Order'}
        </span>
      </div>

      <div className="px-3 pb-3 pt-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-heading text-xl text-charcoal">{tile.name}</h3>
            <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-smoke">
              {tile.designNumber} · {tile.brand}
            </p>
          </div>
          <p className="whitespace-nowrap font-heading text-lg text-bronze">
            ₹{tile.price}
            <span className="text-xs text-smoke">/sq.ft</span>
          </p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.12em] text-smoke">
          <span className="rounded-full border border-charcoal/10 px-3 py-1">{tile.size}</span>
          <span className="rounded-full border border-charcoal/10 px-3 py-1">{tile.finish}</span>
          <span className="rounded-full border border-charcoal/10 px-3 py-1">{tile.material}</span>
          <span className="rounded-full border border-charcoal/10 px-3 py-1">{categoryName}</span>
        </div>
      </div>
    </motion.div>
  );
}
