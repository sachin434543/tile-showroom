'use client';

import { useState } from 'react';
import { Facebook, Instagram, Youtube } from 'lucide-react';
import { SITE } from '@/lib/site';

const quickLinks = [
  { label: 'Collections', href: '#collections' },
  { label: 'Categories', href: '#categories' },
  { label: 'Inspiration', href: '#inspiration' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer className="border-t border-charcoal/5 bg-sand/40 px-6 pb-10 pt-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div>
            <p className="font-heading text-3xl uppercase tracking-[0.2em] text-bronze">
              {SITE.shortName}
            </p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.35em] text-smoke">
              Ceramics &amp; Hardware
            </p>
            <p className="mt-6 max-w-xs text-sm font-light leading-relaxed text-smoke">
              {SITE.subTagline} Founded by {SITE.owner} in {SITE.foundedYear}.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <span
                  key={i}
                  className="glass flex h-10 w-10 items-center justify-center rounded-full text-charcoal/60 transition-colors hover:border-gold/60 hover:text-bronze"
                >
                  <Icon size={16} />
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-luxe text-bronze">Quick Links</p>
            <ul className="mt-6 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-smoke transition-colors hover:text-bronze"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-luxe text-bronze">Newsletter</p>
            <p className="mt-6 text-sm font-light text-smoke">
              New collections and offers, straight to your inbox.
            </p>
            {subscribed ? (
              <p className="mt-5 text-sm text-bronze">Thank you for subscribing!</p>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubscribed(true);
                }}
                className="mt-5 flex gap-2"
              >
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  className="glass w-full rounded-full px-5 py-3 text-sm text-charcoal placeholder:text-smoke/70 focus:border-gold/60 focus:outline-none"
                />
                <button
                  type="submit"
                  className="rounded-full bg-gradient-to-r from-bronze to-gold px-6 py-3 text-xs uppercase tracking-[0.15em] text-white transition-shadow hover:shadow-glow-gold"
                >
                  Join
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-charcoal/5 pt-8 text-xs text-smoke md:flex-row">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p>{SITE.address}</p>
        </div>
      </div>
    </footer>
  );
}
