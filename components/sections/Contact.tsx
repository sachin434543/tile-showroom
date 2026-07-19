'use client';

import { useState } from 'react';
import { Clock, Mail, MapPin, MessageCircle, Navigation, Phone } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import MagneticButton from '@/components/ui/MagneticButton';
import { SITE } from '@/lib/site';

export default function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetch('/api/inquiries', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, phone, message }),
    }).catch(() => undefined);

    const text = `Hello ${SITE.shortName}! I am ${name} (${phone}). ${message}`;
    if (SITE.whatsapp) {
      window.open(`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
    } else if (SITE.email) {
      window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent('Showroom Inquiry')}&body=${encodeURIComponent(text)}`;
    }
    setSent(true);
  };

  const inputClass =
    'glass w-full rounded-2xl px-5 py-3.5 text-sm text-charcoal placeholder:text-smoke/70 focus:border-gold/60 focus:outline-none';

  return (
    <section id="contact" className="px-6 py-28 md:py-36">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Visit Us"
          title="Experience the Showroom"
          description="See every tile in person, feel the finishes, and let us help you design your space."
        />

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Info */}
          <Reveal>
            <div className="glass flex h-full flex-col justify-between rounded-3xl p-8 md:p-10">
              <div className="space-y-7">
                <div className="flex items-start gap-4">
                  <MapPin size={18} className="mt-1 shrink-0 text-bronze" />
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-smoke">Address</p>
                    <p className="mt-1 text-sm text-charcoal">{SITE.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock size={18} className="mt-1 shrink-0 text-bronze" />
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-smoke">Working Hours</p>
                    <p className="mt-1 text-sm text-charcoal">{SITE.hours}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href={SITE.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs uppercase tracking-[0.15em] text-charcoal transition-colors hover:border-gold/60"
                  >
                    <Navigation size={13} className="text-bronze" /> Directions
                  </a>
                  {SITE.phone && (
                    <a
                      href={`tel:${SITE.phone}`}
                      className="glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs uppercase tracking-[0.15em] text-charcoal transition-colors hover:border-gold/60"
                    >
                      <Phone size={13} className="text-bronze" /> Call
                    </a>
                  )}
                  {SITE.whatsapp && (
                    <a
                      href={`https://wa.me/${SITE.whatsapp}`}
                      target="_blank"
                      rel="noreferrer"
                      className="glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs uppercase tracking-[0.15em] text-charcoal transition-colors hover:border-gold/60"
                    >
                      <MessageCircle size={13} className="text-bronze" /> WhatsApp
                    </a>
                  )}
                  {SITE.email && (
                    <a
                      href={`mailto:${SITE.email}`}
                      className="glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs uppercase tracking-[0.15em] text-charcoal transition-colors hover:border-gold/60"
                    >
                      <Mail size={13} className="text-bronze" /> Email
                    </a>
                  )}
                </div>
              </div>

              <div className="mt-8 h-64 overflow-hidden rounded-2xl">
                <iframe
                  title={`${SITE.name} location map`}
                  src={SITE.mapsEmbedUrl}
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </Reveal>

          {/* Inquiry form */}
          <Reveal delay={0.15}>
            <form onSubmit={onSubmit} className="glass flex h-full flex-col gap-5 rounded-3xl p-8 md:p-10">
              <h3 className="font-heading text-2xl text-charcoal">Send an Inquiry</h3>
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className={inputClass}
              />
              <input
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone number"
                type="tel"
                className={inputClass}
              />
              <textarea
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us about your project..."
                rows={5}
                className={`${inputClass} resize-none`}
              />
              <div className="mt-auto">
                <MagneticButton type="submit" variant="solid" className="w-full sm:w-auto">
                  Send Inquiry
                </MagneticButton>
                {sent && (
                  <p className="mt-4 text-sm text-bronze">
                    Thank you! We will get back to you shortly.
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
