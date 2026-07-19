'use client';

import { motion } from 'framer-motion';
import { SITE } from '@/lib/site';

const links = [
  { label: 'Collections', href: '#collections' },
  { label: 'Categories', href: '#categories' },
  { label: 'Inspiration', href: '#inspiration' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 2.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <nav className="mx-auto mt-5 flex max-w-6xl items-center justify-between rounded-full px-6 py-3 glass md:px-10">
        <a href="#" className="flex flex-col leading-none">
          <span className="font-heading text-base uppercase tracking-[0.25em] text-bronze md:text-lg">
            {SITE.shortName}
          </span>
          <span className="mt-1 text-[8px] uppercase tracking-[0.35em] text-smoke">
            Ceramics &amp; Hardware
          </span>
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-xs uppercase tracking-[0.2em] text-smoke transition-colors duration-300 hover:text-bronze"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="rounded-full border border-gold/50 px-5 py-2 text-xs uppercase tracking-[0.2em] text-bronze transition-all duration-300 hover:bg-gold hover:text-white hover:shadow-glow-gold"
        >
          Book a Visit
        </a>
      </nav>
    </motion.header>
  );
}
