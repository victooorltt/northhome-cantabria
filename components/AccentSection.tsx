import React from 'react';
import Link from 'next/link';

export interface AccentSectionProps {
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  children?: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
  ctaText?: string;
  ctaHref?: string;
  className?: string;
}

export default function AccentSection({
  title,
  description,
  children,
  imageSrc,
  imageAlt,
  reverse = false,
  ctaText,
  ctaHref,
  className = '',
}: AccentSectionProps) {
  return (
    <section className={`bg-accent text-white ${className}`.trim()}>
      <div className="max-w-6xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Content Column */}
          <div className={`space-y-6 ${reverse ? 'lg:order-2' : 'lg:order-1'}`}>
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-white leading-tight">
              {title}
            </h2>
            {description && (
              <div className="text-white/90 text-lg leading-relaxed space-y-4 font-normal">
                {typeof description === 'string' ? <p>{description}</p> : description}
              </div>
            )}
            {children}
            {ctaText && ctaHref && (
              <div className="pt-2">
                <Link
                  href={ctaHref}
                  className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-ink bg-white hover:bg-zinc-100 rounded-xl shadow-md transition-all hover:shadow-lg w-full sm:w-auto"
                >
                  {ctaText}
                </Link>
              </div>
            )}
          </div>

          {/* Image Column */}
          <div className={`w-full ${reverse ? 'lg:order-1' : 'lg:order-2'}`}>
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-[360px] lg:h-[440px] object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
