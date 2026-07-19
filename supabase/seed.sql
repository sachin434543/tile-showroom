-- Seed catalog for Jai Gurudev Ceramics & Hardware

insert into public.brands (name, sort_order) values
  ('Kajaria', 1), ('Somany', 2), ('Johnson', 3), ('Nitco', 4),
  ('Simpolo', 5), ('Varmora', 6), ('Orient Bell', 7), ('RAK Ceramics', 8)
on conflict (name) do nothing;

insert into public.categories (slug, name, description, image_url, sort_order) values
  ('bathroom', 'Bathroom', 'Serene, spa-like surfaces built for everyday luxury.', 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80', 1),
  ('kitchen', 'Kitchen', 'Stain-resistant elegance for the heart of your home.', 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=1200&q=80', 2),
  ('living-room', 'Living Room', 'Statement floors that anchor beautiful living.', 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80', 3),
  ('flooring', 'Flooring', 'Large-format vitrified tiles with seamless finishes.', 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80', 4),
  ('parking', 'Parking', 'Heavy-duty tiles engineered to endure and impress.', 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1200&q=80', 5),
  ('elevation', 'Elevation', 'Facade tiles that give your home a signature identity.', 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80', 6),
  ('pooja-room', 'Pooja Room', 'Sacred spaces finished with warmth and grace.', 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80', 7),
  ('outdoor', 'Outdoor', 'Weatherproof anti-skid surfaces for open skies.', 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=80', 8),
  ('commercial', 'Commercial', 'High-traffic performance with boardroom polish.', 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80', 9),
  ('wall-tiles', 'Wall Tiles', 'Textures and patterns that turn walls into art.', 'https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1200&q=80', 10)
on conflict (slug) do nothing;

insert into public.tiles (name, design_number, size, price, finish, material, in_stock, category_slug, brand, images) values
  ('Statuario Bianco', 'JG-1201', '600 x 1200 mm', 95, 'Glossy', 'Vitrified', true, 'flooring', 'Kajaria', array['https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1200&q=80','https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=1200&q=80']),
  ('Carrara Mist', 'JG-1202', '800 x 1600 mm', 165, 'Glossy', 'Porcelain', true, 'living-room', 'Somany', array['https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=80','https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80']),
  ('Desert Sandstone', 'JG-1203', '600 x 600 mm', 62, 'Matt', 'Vitrified', true, 'outdoor', 'Johnson', array['https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=80','https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1200&q=80']),
  ('Onyx Pearl', 'JG-1204', '600 x 1200 mm', 118, 'Glossy', 'Porcelain', true, 'bathroom', 'Kajaria', array['https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=1200&q=80','https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80']),
  ('Teak Plank', 'JG-1205', '200 x 1200 mm', 78, 'Matt', 'Ceramic', true, 'living-room', 'Nitco', array['https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80','https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80']),
  ('Nero Marquina', 'JG-1206', '600 x 1200 mm', 132, 'Satin', 'Vitrified', false, 'kitchen', 'Simpolo', array['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80','https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=1200&q=80']),
  ('Ivory Grace', 'JG-1207', '300 x 450 mm', 48, 'Glossy', 'Ceramic', true, 'wall-tiles', 'Varmora', array['https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80','https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80']),
  ('Granito Shield', 'JG-1208', '400 x 400 mm', 52, 'Anti-Skid', 'Vitrified', true, 'parking', 'Johnson', array['https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1200&q=80','https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80']),
  ('Royal Elevation Stone', 'JG-1209', '300 x 600 mm', 68, 'Carving', 'Ceramic', true, 'elevation', 'Orient Bell', array['https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80','https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80']),
  ('Divine Lotus', 'JG-1210', '300 x 450 mm', 58, 'Glossy', 'Ceramic', true, 'pooja-room', 'Varmora', array['https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80','https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80']),
  ('Executive Grey', 'JG-1211', '600 x 600 mm', 74, 'Matt', 'Vitrified', true, 'commercial', 'RAK Ceramics', array['https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80','https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80']),
  ('Aqua Serenity', 'JG-1212', '300 x 600 mm', 66, 'Satin', 'Ceramic', true, 'bathroom', 'Somany', array['https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80','https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=80'])
on conflict (design_number) do nothing;

insert into public.testimonials (name, location, quote, sort_order) values
  ('Ramesh Naidu', 'Puttur', 'Our entire villa was tiled from Jai Gurudev. The finish and the guidance we received were exceptional.', 1),
  ('Lakshmi Prasanna', 'Tirupati', 'The collection feels premium and the owner personally helped us pick the right tiles for every room.', 2),
  ('Suresh Reddy', 'Chittoor', 'Best tile showroom in the region. Honest pricing and beautiful large-format options.', 3),
  ('Anitha Kumari', 'Puttur', 'Loved the bathroom collection. Everything arrived on time and matched the showroom display perfectly.', 4),
  ('Mohan Krishna', 'Renigunta', 'They designed our elevation tiles beautifully. Neighbours still ask where we got them.', 5),
  ('Divya Sree', 'Tirupati', 'A truly luxury experience for a tile purchase. Highly recommended for new home builders.', 6);
