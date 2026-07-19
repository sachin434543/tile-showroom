import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import SmoothScroll from '@/components/providers/SmoothScroll';
import Cursor from '@/components/ui/Cursor';
import Preloader from '@/components/ui/Preloader';
import { SITE } from '@/lib/site';
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
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s — ${SITE.name}`,
  },
  description: `${SITE.subTagline} Explore a curated collection of luxury bathroom, kitchen, flooring and designer wall tiles at ${SITE.name}, ${SITE.address}.`,
  keywords: [
    'luxury tiles',
    'premium tiles',
    'tile showroom',
    'designer tiles',
    'flooring',
    'ceramics',
    'Puttur',
    SITE.name,
  ],
  openGraph: {
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.subTagline,
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#faf8f3',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-pearl font-body text-charcoal antialiased">
        <Preloader />
        <Cursor />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
