import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Categories from '@/components/sections/Categories';
import Collection from '@/components/sections/Collection';
import Gallery from '@/components/sections/Gallery';
import Testimonials from '@/components/sections/Testimonials';
import Brands from '@/components/sections/Brands';
import Contact from '@/components/sections/Contact';
import { getCatalog } from '@/lib/catalog';

export const revalidate = 60;

export default async function Home() {
  const catalog = await getCatalog();

  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Categories categories={catalog.categories} />
      <Collection
        tiles={catalog.tiles}
        categories={catalog.categories}
        brands={catalog.brands}
      />
      <Gallery />
      <Testimonials testimonials={catalog.testimonials} />
      <Brands brands={catalog.brands} />
      <Contact />
      <Footer />
    </main>
  );
}
