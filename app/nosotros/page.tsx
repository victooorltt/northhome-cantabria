import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import AccentSection from '@/components/AccentSection';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Nosotros | Northome Cantabria',
  description:
    'Conoce la experiencia y trayectoria de Northome Cantabria. Soluciones personalizadas en venta, compra y alquiler de propiedades en Santander y Cantabria.',
};

export default function NosotrosPage() {
  return (
    <div className="bg-white">
      {/* 1. Hero Section - Centered overlay style like Inicio without benefits */}
      <PageHero
        variant="centered"
        title="Northome Cantabria"
        subtitle="Servicios inmobiliarios"
        imageSrc="/images/hero-nosotros.webp"
        imageAlt="Northome Cantabria - Servicios inmobiliarios en Santander y Cantabria"
        ctaText="Contactar"
        ctaHref="/contacto"
        secondaryCtaText="Ver servicios"
        secondaryCtaHref="/servicios"
      />

      {/* 2. Sección Sobre Nosotros con foto a la misma altura que el texto */}
      <section className="py-16 lg:py-24 border-b border-zinc-200/80 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
            {/* Columna Izquierda: Fotografía con altura idéntica al texto */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="relative w-full h-full min-h-[340px] rounded-2xl overflow-hidden shadow-md border border-zinc-200/80 bg-zinc-100">
                <img
                  src="/images/nosotros-historia.webp"
                  alt="Santander y Cantabria - Entorno de Northome Cantabria"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Columna Derecha: Información sintetizada, limpia y equilibrada */}
            <div className="lg:col-span-7 flex flex-col justify-between py-1">
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-ink leading-tight">
                    Tu inmobiliaria de confianza en Cantabria
                  </h2>
                  <p className="mt-3 text-base sm:text-lg text-zinc-600 font-normal leading-relaxed">
                    Soluciones integrales y atención personalizada en la venta, compra y alquiler de propiedades.
                  </p>
                </div>

                <div className="space-y-4 text-zinc-700 leading-relaxed font-normal text-base sm:text-lg">
                  <p>
                    En Northome Cantabria nos enorgullece ofrecer una amplia experiencia en el sector inmobiliario regional. Brindamos un servicio integral, profesional y transparente, asesorando con rigor en cada paso para ayudar a cada persona a encontrar el hogar perfecto o realizar inversiones inmobiliarias exitosas.
                  </p>
                  <p>
                    Valoramos la confianza de nuestros clientes y nos esforzamos por superar sus expectativas con soluciones a medida en Santander y toda la comunidad cántabra.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-zinc-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <p className="text-sm font-medium text-ink">
                  ¿Buscas comprar, vender o alquilar en Cantabria?
                </p>
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-accent hover:bg-accent-hover text-white text-sm font-semibold transition-colors shadow-xs"
                >
                  <span>Contactar con nosotros</span>
                  <ArrowRight className="w-4 h-4 ml-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mandatory Accent Section */}
      <AccentSection
        title="Compromiso, transparencia y cercanía en Cantabria"
        description="Si estás buscando comprar, vender o alquilar una propiedad, ¡estamos aquí para ayudarte en cada paso del camino!"
        ctaText="¿Hablamos?"
        ctaHref="/contacto"
        imageSrc="/images/accent-nosotros.webp"
        imageAlt="Northome Cantabria profesionales inmobiliarios"
      />

      {/* 4. Final CTA Section */}
      <CTASection
        title="Tu propiedad en las mejores manos"
        subtitle="Un equipo con amplia experiencia y compromiso transparente en Santander y Cantabria listo para ayudarte."
        buttonText="Contactar con nosotros"
        buttonHref="/contacto"
        phoneNumber="696 32 49 87"
        phoneHref="tel:+34696324987"
      />
    </div>
  );
}
