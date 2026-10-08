import type { Metadata } from 'next';
import Link from 'next/link';
import { Home, KeyRound, TrendingUp, Building2, ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import AccentSection from '@/components/AccentSection';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Servicios Inmobiliarios | Northome Cantabria',
  description:
    'Compraventa y alquiler de propiedades en Cantabria. Soluciones personalizadas, valoración gratuita y gestión integral de propiedades en Santander y Cantabria.',
};

const SERVICES = [
  {
    title: 'Venta de propiedades',
    description:
      'Contamos con una extensa cartera de propiedades en venta en toda Cantabria. Nuestro equipo se encargará de ayudarte a encontrar la propiedad que mejor se adapte a tus necesidades y preferencias, asesorándote en todo el proceso de compra. Además, con Northome Cantabria la valoración de tu inmueble es gratuita y sin compromiso.',
    icon: Home,
    image: '/images/servicio-venta.webp',
    ctaText: 'Ver propiedades en venta',
    ctaHref: '/inmuebles',
  },
  {
    title: 'Alquiler de propiedades',
    description:
      'Si estás buscando alquilar una vivienda, también podemos ayudarte. Disponemos de una amplia selección de propiedades disponibles para alquiler, desde apartamentos acogedores hasta espacios comerciales. Te guiaremos en la búsqueda y te ayudaremos a encontrar la opción más adecuada.',
    icon: KeyRound,
    image: '/images/servicio-alquiler.webp',
    ctaText: 'Ver propiedades en alquiler',
    ctaHref: '/inmuebles',
  },
  {
    title: 'Asesoramiento inmobiliario',
    description:
      'Nuestro equipo de expertos en el sector inmobiliario está listo para brindarte asesoramiento profesional. Ya sea que necesites información sobre el mercado inmobiliario local, la tasación de propiedades o la optimización de tu inversión, estaremos encantados de ayudarte.',
    icon: TrendingUp,
    image: '/images/servicio-asesoramiento.webp',
    ctaText: 'Solicitar asesoramiento',
    ctaHref: '/contacto',
  },
  {
    title: 'Gestión de propiedades',
    description:
      'Si eres propietario y necesitas ayuda para gestionar tus propiedades, nosotros podemos ocuparnos de todo. Desde la búsqueda de inquilinos confiables hasta el mantenimiento y la gestión de contratos, nos aseguraremos de que tus propiedades estén en buenas manos.',
    icon: Building2,
    image: '/images/servicio-gestion.webp',
    ctaText: 'Gestionar propiedad',
    ctaHref: '/contacto',
  },
];

export default function ServiciosPage() {
  return (
    <div>
      {/* Block 1: Hero */}
      <PageHero
        variant="gradient"
        mobileOverlay={true}
        title="Servicios inmobiliarios"
        subtitle="Compraventa y alquiler de propiedades en Cantabria. Soluciones personalizadas y adaptadas a cada situación."
        imageSrc="/images/hero-servicios.webp"
        imageAlt="Servicios inmobiliarios profesionales en Santander y Cantabria"
        ctaText="Contactar con nuestro equipo"
        ctaHref="/contacto"
        secondaryCtaText="Ver inmuebles"
        secondaryCtaHref="/inmuebles"
      />

      {/* Block 2: Servicios prestados con fotografía en cada tarjeta */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink">
              Servicios prestados
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-zinc-600 font-normal">
              En Northome Cantabria ofrecemos una amplia gama de servicios inmobiliarios diseñados para cubrir todas las necesidades de nuestros clientes. Nuestro equipo de profesionales altamente calificados se encarga de brindar soluciones personalizadas y adaptadas a cada situación. A continuación, te presentamos algunos de los servicios que prestamos:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {SERVICES.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="flex flex-col bg-white border border-zinc-200/90 hover:border-zinc-300 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all group"
                >
                  <div className="relative aspect-[16/10] bg-zinc-100 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-white/95 backdrop-blur-xs text-accent flex items-center justify-center shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                    <div>
                      <h3 className="text-xl font-semibold text-ink group-hover:text-accent transition-colors">
                        {service.title}
                      </h3>
                      <p className="mt-3 text-zinc-600 leading-relaxed text-sm sm:text-base font-normal">
                        {service.description}
                      </p>
                    </div>
                    <div className="pt-6 mt-6 border-t border-zinc-100">
                      <Link
                        href={service.ctaHref}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-hover transition-colors"
                      >
                        <span>{service.ctaText}</span>
                        <ArrowRight className="w-4 h-4 ml-0.5 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Block 3: Accent Section */}
      <AccentSection
        title="En Northome Cantabria, las valoraciones inmobiliarias son gratuitas y sin compromiso."
        description="Nuestro equipo de profesionales te asesorará en todo momento. ¿Hablamos?"
        ctaText="Contactar"
        ctaHref="/contacto"
        imageSrc="/images/accent-servicios.webp"
        imageAlt="Asesoramiento inmobiliario en Santander"
      />

      {/* Block 4: Final CTA Section */}
      <CTASection
        title="¿Necesitas asesoramiento inmobiliario en Cantabria?"
        subtitle="Ya sea para vender, alquilar o gestionar tu patrimonio inmobiliario, estamos aquí para guiarte en cada decisión."
        buttonText="Contactar ahora"
        buttonHref="/contacto"
        phoneNumber="696 32 49 87"
        phoneHref="tel:+34696324987"
      />
    </div>
  );
}
