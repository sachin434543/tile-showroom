import 'server-only';
import {
  brands as staticBrands,
  categories as staticCategories,
  testimonials as staticTestimonials,
  tiles as staticTiles,
} from '@/lib/data';
import type { Category, Testimonial, Tile } from '@/lib/types';
import { createClient, isSupabaseConfigured } from '@/lib/supabase/server';

export type Catalog = {
  categories: Category[];
  tiles: Tile[];
  testimonials: Testimonial[];
  brands: string[];
};

const fallback: Catalog = {
  categories: [...staticCategories],
  tiles: [...staticTiles],
  testimonials: [...staticTestimonials],
  brands: [...staticBrands],
};

type TileRow = {
  id: string;
  name: string;
  design_number: string;
  size: string;
  price: number;
  finish: string;
  material: string;
  in_stock: boolean;
  category_slug: string;
  brand: string;
  images: string[];
};

type CategoryRow = {
  slug: string;
  name: string;
  description: string;
  image_url: string;
};

type TestimonialRow = {
  name: string;
  location: string;
  quote: string;
};

export async function getCatalog(): Promise<Catalog> {
  if (!isSupabaseConfigured) return fallback;

  try {
    const supabase = await createClient();

    const [categoriesRes, tilesRes, testimonialsRes, brandsRes] = await Promise.all([
      supabase
        .from('categories')
        .select('slug, name, description, image_url')
        .eq('enabled', true)
        .order('sort_order'),
      supabase
        .from('tiles')
        .select(
          'id, name, design_number, size, price, finish, material, in_stock, category_slug, brand, images',
        )
        .order('created_at'),
      supabase
        .from('testimonials')
        .select('name, location, quote')
        .eq('enabled', true)
        .order('sort_order'),
      supabase.from('brands').select('name').order('sort_order'),
    ]);

    if (categoriesRes.error || tilesRes.error || testimonialsRes.error || brandsRes.error) {
      return fallback;
    }

    const categories: Category[] = (categoriesRes.data as CategoryRow[]).map((row) => ({
      slug: row.slug,
      name: row.name,
      description: row.description,
      image: row.image_url,
    }));

    const tiles: Tile[] = (tilesRes.data as TileRow[]).map((row) => ({
      id: row.id,
      name: row.name,
      designNumber: row.design_number,
      size: row.size,
      price: Number(row.price),
      finish: row.finish,
      material: row.material,
      inStock: row.in_stock,
      category: row.category_slug,
      brand: row.brand,
      images: row.images,
    }));

    const testimonials: Testimonial[] = testimonialsRes.data as TestimonialRow[];
    const brands = (brandsRes.data as { name: string }[]).map((row) => row.name);

    return {
      categories: categories.length ? categories : fallback.categories,
      tiles: tiles.length ? tiles : fallback.tiles,
      testimonials: testimonials.length ? testimonials : fallback.testimonials,
      brands: brands.length ? brands : fallback.brands,
    };
  } catch {
    return fallback;
  }
}
