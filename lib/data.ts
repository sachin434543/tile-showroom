import type { Category, Testimonial, Tile } from '@/lib/types';

const img = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const categories: Category[] = [
  { slug: 'bathroom', name: 'Bathroom', description: 'Serene, spa-like surfaces built for everyday luxury.', image: img('1552321554-5fefe8c9ef14') },
  { slug: 'kitchen', name: 'Kitchen', description: 'Stain-resistant elegance for the heart of your home.', image: img('1556909212-d5b604d0c90d') },
  { slug: 'living-room', name: 'Living Room', description: 'Statement floors that anchor beautiful living.', image: img('1522708323590-d24dbb6b0267') },
  { slug: 'flooring', name: 'Flooring', description: 'Large-format vitrified tiles with seamless finishes.', image: img('1600607687939-ce8a6c25118c') },
  { slug: 'parking', name: 'Parking', description: 'Heavy-duty tiles engineered to endure and impress.', image: img('1449824913935-59a10b8d2000') },
  { slug: 'elevation', name: 'Elevation', description: 'Facade tiles that give your home a signature identity.', image: img('1600596542815-ffad4c1539a9') },
  { slug: 'pooja-room', name: 'Pooja Room', description: 'Sacred spaces finished with warmth and grace.', image: img('1618221195710-dd6b41faaea6') },
  { slug: 'outdoor', name: 'Outdoor', description: 'Weatherproof anti-skid surfaces for open skies.', image: img('1600047509807-ba8f99d2cdde') },
  { slug: 'commercial', name: 'Commercial', description: 'High-traffic performance with boardroom polish.', image: img('1497366216548-37526070297c') },
  { slug: 'wall-tiles', name: 'Wall Tiles', description: 'Textures and patterns that turn walls into art.', image: img('1615873968403-89e068629265') },
];

export const brands = [
  'Kajaria',
  'Somany',
  'Johnson',
  'Nitco',
  'Simpolo',
  'Varmora',
  'Orient Bell',
  'RAK Ceramics',
] as const;

export const finishes = ['Glossy', 'Matt', 'Satin', 'Carving', 'Anti-Skid'] as const;

export const tiles: Tile[] = [
  { id: 'jg-1201', name: 'Statuario Bianco', designNumber: 'JG-1201', size: '600 x 1200 mm', price: 95, finish: 'Glossy', material: 'Vitrified', inStock: true, category: 'flooring', brand: 'Kajaria', images: [img('1615873968403-89e068629265'), img('1615529182904-14819c35db37')] },
  { id: 'jg-1202', name: 'Carrara Mist', designNumber: 'JG-1202', size: '800 x 1600 mm', price: 165, finish: 'Glossy', material: 'Porcelain', inStock: true, category: 'living-room', brand: 'Somany', images: [img('1620626011761-996317b8d101'), img('1600210492486-724fe5c67fb0')] },
  { id: 'jg-1203', name: 'Desert Sandstone', designNumber: 'JG-1203', size: '600 x 600 mm', price: 62, finish: 'Matt', material: 'Vitrified', inStock: true, category: 'outdoor', brand: 'Johnson', images: [img('1600047509807-ba8f99d2cdde'), img('1449824913935-59a10b8d2000')] },
  { id: 'jg-1204', name: 'Onyx Pearl', designNumber: 'JG-1204', size: '600 x 1200 mm', price: 118, finish: 'Glossy', material: 'Porcelain', inStock: true, category: 'bathroom', brand: 'Kajaria', images: [img('1631679706909-1844bbd07221'), img('1552321554-5fefe8c9ef14')] },
  { id: 'jg-1205', name: 'Teak Plank', designNumber: 'JG-1205', size: '200 x 1200 mm', price: 78, finish: 'Matt', material: 'Ceramic', inStock: true, category: 'living-room', brand: 'Nitco', images: [img('1586023492125-27b2c045efd7'), img('1522708323590-d24dbb6b0267')] },
  { id: 'jg-1206', name: 'Nero Marquina', designNumber: 'JG-1206', size: '600 x 1200 mm', price: 132, finish: 'Satin', material: 'Vitrified', inStock: false, category: 'kitchen', brand: 'Simpolo', images: [img('1600585154340-be6161a56a0c'), img('1556909212-d5b604d0c90d')] },
  { id: 'jg-1207', name: 'Ivory Grace', designNumber: 'JG-1207', size: '300 x 450 mm', price: 48, finish: 'Glossy', material: 'Ceramic', inStock: true, category: 'wall-tiles', brand: 'Varmora', images: [img('1600566753190-17f0baa2a6c3'), img('1584622650111-993a426fbf0a')] },
  { id: 'jg-1208', name: 'Granito Shield', designNumber: 'JG-1208', size: '400 x 400 mm', price: 52, finish: 'Anti-Skid', material: 'Vitrified', inStock: true, category: 'parking', brand: 'Johnson', images: [img('1449824913935-59a10b8d2000'), img('1600607687939-ce8a6c25118c')] },
  { id: 'jg-1209', name: 'Royal Elevation Stone', designNumber: 'JG-1209', size: '300 x 600 mm', price: 68, finish: 'Carving', material: 'Ceramic', inStock: true, category: 'elevation', brand: 'Orient Bell', images: [img('1600596542815-ffad4c1539a9'), img('1613490493576-7fde63acd811')] },
  { id: 'jg-1210', name: 'Divine Lotus', designNumber: 'JG-1210', size: '300 x 450 mm', price: 58, finish: 'Glossy', material: 'Ceramic', inStock: true, category: 'pooja-room', brand: 'Varmora', images: [img('1618221195710-dd6b41faaea6'), img('1600607687920-4e2a09cf159d')] },
  { id: 'jg-1211', name: 'Executive Grey', designNumber: 'JG-1211', size: '600 x 600 mm', price: 74, finish: 'Matt', material: 'Vitrified', inStock: true, category: 'commercial', brand: 'RAK Ceramics', images: [img('1497366216548-37526070297c'), img('1600607687939-ce8a6c25118c')] },
  { id: 'jg-1212', name: 'Aqua Serenity', designNumber: 'JG-1212', size: '300 x 600 mm', price: 66, finish: 'Satin', material: 'Ceramic', inStock: true, category: 'bathroom', brand: 'Somany', images: [img('1600566752355-35792bedcfea'), img('1595428774223-ef52624120d2')] },
];

export const testimonials: Testimonial[] = [
  { name: 'Ramesh Naidu', location: 'Puttur', quote: 'Our entire villa was tiled from Jai Gurudev. The finish and the guidance we received were exceptional.' },
  { name: 'Lakshmi Prasanna', location: 'Tirupati', quote: 'The collection feels premium and the owner personally helped us pick the right tiles for every room.' },
  { name: 'Suresh Reddy', location: 'Chittoor', quote: 'Best tile showroom in the region. Honest pricing and beautiful large-format options.' },
  { name: 'Anitha Kumari', location: 'Puttur', quote: 'Loved the bathroom collection. Everything arrived on time and matched the showroom display perfectly.' },
  { name: 'Mohan Krishna', location: 'Renigunta', quote: 'They designed our elevation tiles beautifully. Neighbours still ask where we got them.' },
  { name: 'Divya Sree', location: 'Tirupati', quote: 'A truly luxury experience for a tile purchase. Highly recommended for new home builders.' },
];

export const galleryImages = [
  img('1615873968403-89e068629265', 900),
  img('1552321554-5fefe8c9ef14', 900),
  img('1522708323590-d24dbb6b0267', 900),
  img('1620626011761-996317b8d101', 900),
  img('1600585154340-be6161a56a0c', 900),
  img('1631679706909-1844bbd07221', 900),
  img('1618221195710-dd6b41faaea6', 900),
  img('1600596542815-ffad4c1539a9', 900),
  img('1586023492125-27b2c045efd7', 900),
  img('1600566753190-17f0baa2a6c3', 900),
];
