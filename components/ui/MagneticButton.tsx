'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { cn } from '@/lib/utils';

type MagneticButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'solid' | 'outline';
};

export default function MagneticButton({
  children,
  className,
  variant = 'solid',
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);

  const onMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    gsap.to(el, {
      x: (e.clientX - rect.left - rect.width / 2) * 0.3,
      y: (e.clientY - rect.top - rect.height / 2) * 0.3,
      duration: 0.4,
      ease: 'power3.out',
    });
  };

  const onMouseLeave = () => {
    gsap.to(ref.current, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)' });
  };

  return (
    <button
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={cn(
        'rounded-full px-8 py-3.5 text-sm uppercase tracking-[0.2em] transition-shadow duration-500',
        variant === 'solid' &&
          'bg-gradient-to-r from-bronze via-gold to-gold-soft text-charcoal hover:shadow-glow-gold',
        variant === 'outline' &&
          'glass text-ivory hover:border-gold/60 hover:shadow-glow-gold',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
