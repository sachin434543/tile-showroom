import Reveal from '@/components/ui/Reveal';

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      <p className="text-[11px] uppercase tracking-luxe text-bronze">{eyebrow}</p>
      <h2 className="mt-4 font-heading text-4xl text-charcoal md:text-5xl">{title}</h2>
      {description && (
        <p className="mt-5 font-light leading-relaxed text-smoke">{description}</p>
      )}
    </Reveal>
  );
}
