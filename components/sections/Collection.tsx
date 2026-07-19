'use client';

import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import TileCard from '@/components/tiles/TileCard';
import TileModal from '@/components/tiles/TileModal';
import {
  brands as staticBrands,
  categories as staticCategories,
  finishes,
  tiles as staticTiles,
} from '@/lib/data';
import type { Category, Tile } from '@/lib/types';

type CollectionProps = {
  tiles?: Tile[];
  categories?: Category[];
  brands?: string[];
};

export default function Collection({
  tiles = [...staticTiles],
  categories = [...staticCategories],
  brands = [...staticBrands],
}: CollectionProps) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');
  const [finish, setFinish] = useState('all');
  const [brand, setBrand] = useState('all');
  const [selected, setSelected] = useState<Tile | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return tiles.filter((tile) => {
      if (category !== 'all' && tile.category !== category) return false;
      if (finish !== 'all' && tile.finish !== finish) return false;
      if (brand !== 'all' && tile.brand !== brand) return false;
      if (
        q &&
        ![tile.name, tile.designNumber, tile.brand, tile.material]
          .join(' ')
          .toLowerCase()
          .includes(q)
      )
        return false;
      return true;
    });
  }, [tiles, query, category, finish, brand]);

  const selectClass =
    'glass rounded-full px-5 py-2.5 text-xs uppercase tracking-[0.15em] text-charcoal outline-none transition-colors hover:border-gold/60';

  return (
    <section id="collections" className="bg-sand/40 px-6 py-28 md:py-36">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="The Collection"
          title="Signature Tiles"
          description="Search and filter our hand-picked designs. Every tile is available to view at the showroom."
        />

        {/* Filters */}
        <Reveal className="mt-14">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <label className="glass flex items-center gap-3 rounded-full px-5 py-2.5">
              <Search size={14} className="text-bronze" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search designs, brands..."
                className="w-44 bg-transparent text-sm text-charcoal placeholder:text-smoke/70 focus:outline-none md:w-56"
              />
            </label>
            <select value={category} onChange={(e) => setCategory(e.target.value)} className={selectClass}>
              <option value="all">All Categories</option>
              {categories.map((c) => (
                <option key={c.slug} value={c.slug}>{c.name}</option>
              ))}
            </select>
            <select value={finish} onChange={(e) => setFinish(e.target.value)} className={selectClass}>
              <option value="all">All Finishes</option>
              {finishes.map((f) => (
                <option key={f} value={f}>{f}</option>
              ))}
            </select>
            <select value={brand} onChange={(e) => setBrand(e.target.value)} className={selectClass}>
              <option value="all">All Brands</option>
              {brands.map((b) => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
          </div>
        </Reveal>

        {/* Grid */}
        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((tile, i) => (
            <Reveal key={tile.id} delay={(i % 3) * 0.08}>
              <TileCard tile={tile} onSelect={setSelected} />
            </Reveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-16 text-center font-light text-smoke">
            No tiles match your filters. Try a different combination.
          </p>
        )}
      </div>

      <TileModal tile={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
