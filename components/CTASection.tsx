import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';

export interface CTASectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
  phoneNumber?: string;
  phoneHref?: string;
  className?: string;
}

export default function CTASection({
  title = '¿Hablamos de tu próxima propiedad en Cantabria?',
  subtitle = 'En Northome Cantabria te asesoramos de forma personalizada en la compra, venta o alquiler de tu inmueble. Valoraciones gratuitas y sin compromiso.',
  buttonText = 'Contactar con nuestro equipo',
  buttonHref = '/contacto',
  phoneNumber = '696 32 49 87',
  phoneHref = 'tel:+34696324987',
  className = '',
}: CTASectionProps) {
  return (
    <section className={`bg-zinc-50 border-t border-zinc-200/80 ${className}`.trim()}>
      <div className="max-w-4xl mx-auto px-6 py-20 lg:py-24 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-ink leading-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-4 text-lg sm:text-xl text-ink-muted leading-relaxed max-w-2xl mx-auto font-normal">
            {subtitle}
          </p>
        )}

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={buttonHref}
            className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold px-8 py-3.5 text-base rounded-xl shadow-md transition-all hover:shadow-lg w-full sm:w-auto"
          >
            <span>{buttonText}</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
          {phoneNumber && (
            <a
              href={phoneHref}
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-zinc-100 border border-zinc-200 hover:border-zinc-300 text-ink font-medium px-8 py-3.5 text-base rounded-xl shadow-xs transition-colors w-full sm:w-auto"
            >
              <Phone className="h-4 w-4 text-accent shrink-0" />
              <span>{phoneNumber}</span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
