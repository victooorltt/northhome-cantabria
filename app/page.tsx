import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Building2,
  Key,
  ShieldCheck,
  Home,
  Compass,
  Car,
  Trees,
  Bed,
  Bath,
  Maximize2,
} from 'lucide-react';
import PageHero from '@/components/PageHero';
import AccentSection from '@/components/AccentSection';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Northome Cantabria | Servicios Inmobiliarios en Cantabria',
  description:
    'Soluciones personalizadas en la venta, compra y alquiler de propiedades en Cantabria. Valoraciones gratuitas y sin compromiso.',
};

const HERO_BENEFITS = [
  { label: 'Venta de propiedades', icon: Home },
  { label: 'Alquiler de propiedades', icon: Key },
  { label: 'Asesoramiento inmobiliario', icon: Compass },
  { label: 'Gestión de propiedades', icon: ShieldCheck },
];

const SERVICES = [
  {
    title: 'Venta de propiedades',
    description:
      'Contamos con una extensa cartera de propiedades en venta en toda Cantabria. Nuestro equipo te asesorará en todo el proceso de compra, con valoración gratuita y sin compromiso.',
    icon: Home,
  },
  {
    title: 'Alquiler de propiedades',
    description:
      'Disponemos de una amplia selección de propiedades disponibles para alquiler, desde apartamentos acogedores hasta espacios comerciales.',
    icon: Key,
  },
  {
    title: 'Asesoramiento inmobiliario',
    description:
      'Nuestro equipo de expertos en el sector inmobiliario está listo para brindarte asesoramiento profesional sobre el mercado local, tasación de propiedades y optimización de tu inversión.',
    icon: Compass,
  },
  {
    title: 'Gestión de propiedades',
    description:
      'Desde la búsqueda de inquilinos confiables hasta el mantenimiento y la gestión de contratos, nos aseguramos de que tus propiedades estén en las mejores manos.',
    icon: Building2,
  },
];

const FEATURED_PROPERTIES = [
  {
    slug: 'chalet-liano',
    title: 'Chalet independiente en Liaño',
    type: 'Chalet',
    location: 'Liaño',
    price: '380.000 €',
    image: '/properties/chalet-liano/1.jpeg',
    features: [
      { label: '350 m²', icon: Maximize2 },
      { label: '2 hab.', icon: Bed },
      { label: '2 baños', icon: Bath },
    ],
  },
  {
    slug: 'piso-calle-burgos',
    title: 'Piso en calle Burgos',
    type: 'Piso',
    location: 'Santander',
    price: '265.000 €',
    image: '/properties/piso-calle-burgos/1.jpeg',
    features: [
      { label: '70 m²', icon: Maximize2 },
      { label: '2 hab.', icon: Bed },
      { label: '2 baños', icon: Bath },
    ],
  },
  {
    slug: 'terreno-hornedo',
    title: 'Terreno en Hornedo',
    type: 'Terreno',
    location: 'Hornedo',
    price: '50.000 €',
    image: '/properties/terreno-hornedo/1.jpeg',
    features: [
      { label: '6.058 m²', icon: Maximize2 },
      { label: 'Rústico', icon: Trees },
    ],
  },
  {
    slug: 'garaje-isaac-peral',
    title: 'Garaje en Calle Isaac Peral',
    type: 'Garaje',
    location: 'Santander',
    price: '50.000 €',
    image: '/properties/garaje-isaac-peral/1.jpeg',
    features: [
      { label: '23.5 m²', icon: Maximize2 },
      { label: '2 plazas', icon: Car },
    ],
  },
];

export default function HomePage() {
  return (
    <>
      {/* 1. PageHero */}
      <PageHero
        variant="centered"
        title="Servicios inmobiliarios en Cantabria"
        subtitle="En Northome Cantabria ofrecemos soluciones personalizadas en la venta, compra y alquiler de propiedades."
        imageSrc="/images/hero-inicio.webp"
        imageAlt="Servicios inmobiliarios en Cantabria - Northome Cantabria"
        ctaText="Ver inmuebles"
        ctaHref="/inmuebles"
        secondaryCtaText="Propiedades destacadas"
        secondaryCtaHref="#propiedades-destacadas"
        benefits={HERO_BENEFITS}
      />

      {/* 2. Propiedades destacadas (Moved up right below Hero) */}
      <section
        id="propiedades-destacadas"
        className="scroll-mt-20 bg-zinc-50 py-16 lg:py-24 border-b border-zinc-200/80"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-ink">
                Propiedades destacadas
              </h2>
              <p className="mt-3 text-lg text-ink-muted max-w-2xl font-normal">
                Selección de inmuebles en venta en Cantabria.
              </p>
            </div>
            <Link
              href="/inmuebles"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-hover transition-colors shrink-0"
            >
              <span>Ver todos los inmuebles</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURED_PROPERTIES.map((property) => (
              <Link
                key={property.title}
                href={`/inmuebles/${property.slug}`}
                className="group flex flex-col bg-white border border-zinc-200 rounded-2xl overflow-hidden hover:border-zinc-300 hover:shadow-md transition-all"
              >
                <div className="relative aspect-[4/3] bg-zinc-100 overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-xs font-semibold px-2.5 py-1 rounded-md text-ink shadow-xs">
                    {property.type}
                  </div>
                </div>

                <div className="p-5 flex flex-col justify-between flex-1">
                  <div>
                    <span className="text-xs text-ink-subtle uppercase tracking-wider font-medium">
                      {property.location}
                    </span>
                    <h3 className="mt-1 text-base font-semibold text-ink line-clamp-1 group-hover:text-accent transition-colors">
                      {property.title}
                    </h3>
                    <p className="mt-2 text-lg font-bold text-accent">
                      {property.price}
                    </p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-zinc-100 flex items-center justify-between text-xs text-ink-muted">
                    {property.features.map((feat) => {
                      const Icon = feat.icon;
                      return (
                        <span key={feat.label} className="inline-flex items-center gap-1">
                          <Icon className="h-3.5 w-3.5 text-ink-subtle" />
                          <span>{feat.label}</span>
                        </span>
                      );
                    })}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Nuestros servicios */}
      <section className="bg-white py-16 lg:py-24 border-b border-zinc-200/80">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-ink">
                Nuestros servicios
              </h2>
              <p className="mt-3 text-lg text-ink-muted max-w-2xl font-normal">
                Soluciones inmobiliarias personalizadas y adaptadas a cada situación en Cantabria.
              </p>
            </div>
            <Link
              href="/servicios"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-hover transition-colors shrink-0"
            >
              <span>Ver todos los servicios</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.title}
                  href="/servicios"
                  className="group flex flex-col justify-between p-6 bg-white border border-zinc-200 rounded-2xl hover:border-zinc-300 hover:shadow-md transition-all"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-zinc-100 flex items-center justify-center text-accent mb-5 group-hover:bg-accent group-hover:text-white transition-colors">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-ink group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-2.5 text-sm text-ink-muted leading-relaxed font-normal">
                      {service.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center text-sm font-medium text-accent group-hover:text-accent-hover">
                    <span>Más información</span>
                    <ArrowRight className="h-4 w-4 ml-1.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Soluciones para tu propiedad (Compra, Vende, Alquila) con imágenes dedicadas */}
      <section className="bg-white py-16 lg:py-24 border-b border-zinc-200/80">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-ink">
              Soluciones inmobiliarias a tu medida
            </h2>
            <p className="mt-3 text-lg text-ink-muted font-normal">
              Acompañamiento profesional en cada fase de tu operación inmobiliaria en Cantabria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Compra */}
            <div className="flex flex-col bg-zinc-50 border border-zinc-200 rounded-2xl overflow-hidden hover:border-zinc-300 hover:shadow-md transition-all">
              <div className="relative aspect-[16/10] bg-zinc-200 overflow-hidden">
                <img
                  src="/images/card-compra.webp"
                  alt="Compra de propiedades en Cantabria"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-2xl font-semibold text-ink">Compra</h3>
                  <p className="mt-3 text-base text-ink-muted leading-relaxed font-normal">
                    Los mejores pisos, casas, locales y terrenos en venta.
                  </p>
                </div>
                <div className="mt-6 pt-5 border-t border-zinc-200/80">
                  <Link
                    href="/inmuebles"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-hover transition-colors"
                  >
                    <span>Ver inmuebles en venta</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Vende */}
            <div className="flex flex-col bg-zinc-50 border border-zinc-200 rounded-2xl overflow-hidden hover:border-zinc-300 hover:shadow-md transition-all">
              <div className="relative aspect-[16/10] bg-zinc-200 overflow-hidden">
                <img
                  src="/images/card-vende.webp"
                  alt="Venta y valoración de propiedades en Cantabria"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-2xl font-semibold text-ink">Vende</h3>
                  <p className="mt-3 text-base text-ink-muted leading-relaxed font-normal">
                    Tu propiedad, en las mejores manos. La valoramos gratis y sin compromiso para optimizar tu beneficio.
                  </p>
                </div>
                <div className="mt-6 pt-5 border-t border-zinc-200/80">
                  <Link
                    href="/contacto"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-hover transition-colors"
                  >
                    <span>Solicitar valoración gratuita</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Alquila */}
            <div className="flex flex-col bg-zinc-50 border border-zinc-200 rounded-2xl overflow-hidden hover:border-zinc-300 hover:shadow-md transition-all">
              <div className="relative aspect-[16/10] bg-zinc-200 overflow-hidden">
                <img
                  src="/images/card-alquila.webp"
                  alt="Alquiler de viviendas en Santander y Cantabria"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-2xl font-semibold text-ink">Alquila</h3>
                  <p className="mt-3 text-base text-ink-muted leading-relaxed font-normal">
                    Encuentra tu vivienda de alquiler con nosotros, en las mejores condiciones.
                  </p>
                </div>
                <div className="mt-6 pt-5 border-t border-zinc-200/80">
                  <Link
                    href="/inmuebles"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-hover transition-colors"
                  >
                    <span>Consultar alquileres</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. AccentSection */}
      <AccentSection
        title="En Northome Cantabria, las valoraciones inmobiliarias son gratuitas y sin compromiso."
        description="Nuestro equipo de profesionales te asesorará en todo momento. ¿Hablamos?"
        ctaText="Contactar"
        ctaHref="/contacto"
        imageSrc="/images/accent-inicio.webp"
        imageAlt="Valoración inmobiliaria gratuita en Northome Cantabria"
      />

      {/* 6. CTASection final */}
      <CTASection
        title="¿Hablamos de tu próxima propiedad en Cantabria?"
        subtitle="En Northome Cantabria te asesoramos de forma personalizada en la compra, venta o alquiler de tu inmueble. Valoraciones gratuitas y sin compromiso."
        buttonText="Contactar con nuestro equipo"
        buttonHref="/contacto"
        phoneNumber="696 32 49 87"
        phoneHref="tel:+34696324987"
      />
    </>
  );
}
