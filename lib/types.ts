export type Category = {
  slug: string;
  name: string;
  description: string;
  image: string;
};

export type Tile = {
  id: string;
  name: string;
  designNumber: string;
  size: string;
  price: number;
  finish: string;
  material: string;
  inStock: boolean;
  category: string;
  brand: string;
  images: string[];
};

export type Testimonial = {
  name: string;
  location: string;
  quote: string;
};
