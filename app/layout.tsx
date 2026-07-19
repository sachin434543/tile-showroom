import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import SmoothScroll from '@/components/providers/SmoothScroll';
import Cursor from '@/components/ui/Cursor';
import Preloader from '@/components/ui/Preloader';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Atelier Tiles — Tiles That Tell Stories',
    template: '%s — Atelier Tiles',
  },
  description:
    'Premium tiles crafted for timeless homes. Explore a curated collection of luxury bathroom, kitchen, flooring and designer wall tiles.',
  keywords: ['luxury tiles', 'premium tiles', 'tile showroom', 'designer tiles', 'flooring'],
  openGraph: {
    title: 'Atelier Tiles — Tiles That Tell Stories',
    description: 'Premium tiles crafted for timeless homes.',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#0d0d0f',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-charcoal font-body text-ivory antialiased">
        <Preloader />
        <Cursor />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
