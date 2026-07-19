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

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Categories />
      <Collection />
      <Gallery />
      <Testimonials />
      <Brands />
      <Contact />
      <Footer />
    </main>
  );
}
