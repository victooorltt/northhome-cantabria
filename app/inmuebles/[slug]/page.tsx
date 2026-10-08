import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllProperties, getPropertyBySlug } from '@/lib/properties';
import PropertyGallery from '@/components/PropertyGallery';
import CTASection from '@/components/CTASection';
import {
  MapPin,
  Ruler,
  Layers,
  Bed,
  Bath,
  Car,
  Calendar,
  CheckCircle2,
  ArrowLeft,
  Phone,
  Mail,
  Building2,
  ShieldCheck,
  Clock,
} from 'lucide-react';

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  const properties = getAllProperties();
  return properties.map((property) => ({
    slug: property.slug,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const property = getPropertyBySlug(params.slug);
  if (!property) {
    return {
      title: 'Inmueble no encontrado | Northome Cantabria',
    };
  }

  return {
    title: `${property.title} | Northome Cantabria`,
    description: property.summary,
  };
}

export default function PropertyDetailPage({ params }: PageProps) {
  const property = getPropertyBySlug(params.slug);

  if (!property) {
    notFound();
  }

  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-8 sm:py-12">
        {/* 2. PROPERTY HEADER */}
        <header className="mb-8">
          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full">
              {property.operation}
            </span>
            <span className="bg-zinc-200 text-zinc-800 text-xs font-semibold px-3 py-1 rounded-full">
              {property.type}
            </span>
          </div>

          {/* Title & Price stacked vertically */}
          <div>
            <div className="flex items-center gap-1.5 text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-2">
              <MapPin className="w-4 h-4 text-accent" />
              <span>{property.zone}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink leading-tight">
              {property.title}
            </h1>
            <div className="mt-3">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-accent tracking-tight">
                {property.priceDisplay}
              </span>
            </div>
          </div>
        </header>

        {/* 3. INTERACTIVE HIGH-RES PHOTO GALLERY */}
        <section aria-label="Galería de imágenes" className="mb-12">
          <PropertyGallery images={property.images} title={property.title} />
        </section>

        {/* 4. MAIN CONTENT & STICKY SIDEBAR */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* LEFT / MAIN COLUMN */}
          <div className="lg:col-span-8 space-y-10">
            {/* Technical Specifications Grid */}
            <section className="bg-white rounded-2xl border border-zinc-200/90 p-6 sm:p-8 shadow-xs">
              <h2 className="text-xl font-bold text-ink mb-6 pb-4 border-b border-zinc-100 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-accent" />
                <span>Características principales</span>
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
                {property.size && (
                  <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-100">
                    <div className="flex items-center gap-2 text-zinc-500 mb-1">
                      <Ruler className="w-4 h-4 text-accent" />
                      <span className="text-xs uppercase tracking-wider font-medium">Superficie</span>
                    </div>
                    <span className="text-base font-bold text-ink">{property.size}</span>
                  </div>
                )}

                {property.plotSize && (
                  <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-100">
                    <div className="flex items-center gap-2 text-zinc-500 mb-1">
                      <Layers className="w-4 h-4 text-accent" />
                      <span className="text-xs uppercase tracking-wider font-medium">Parcela</span>
                    </div>
                    <span className="text-base font-bold text-ink">{property.plotSize}</span>
                  </div>
                )}

                {typeof property.rooms === 'number' && (
                  <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-100">
                    <div className="flex items-center gap-2 text-zinc-500 mb-1">
                      <Bed className="w-4 h-4 text-accent" />
                      <span className="text-xs uppercase tracking-wider font-medium">Habitaciones</span>
                    </div>
                    <span className="text-base font-bold text-ink">
                      {property.rooms} {property.rooms === 1 ? 'dormitorio' : 'dormitorios'}
                    </span>
                  </div>
                )}

                {typeof property.baths === 'number' && (
                  <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-100">
                    <div className="flex items-center gap-2 text-zinc-500 mb-1">
                      <Bath className="w-4 h-4 text-accent" />
                      <span className="text-xs uppercase tracking-wider font-medium">Baños</span>
                    </div>
                    <span className="text-base font-bold text-ink">
                      {property.baths} {property.baths === 1 ? 'baño completo' : 'baños completos'}
                    </span>
                  </div>
                )}

                {property.garage && (
                  <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-100">
                    <div className="flex items-center gap-2 text-zinc-500 mb-1">
                      <Car className="w-4 h-4 text-accent" />
                      <span className="text-xs uppercase tracking-wider font-medium">Garaje</span>
                    </div>
                    <span className="text-base font-bold text-ink">{property.garage}</span>
                  </div>
                )}

                {property.year && (
                  <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-100">
                    <div className="flex items-center gap-2 text-zinc-500 mb-1">
                      <Calendar className="w-4 h-4 text-accent" />
                      <span className="text-xs uppercase tracking-wider font-medium">Año de constr.</span>
                    </div>
                    <span className="text-base font-bold text-ink">{property.year}</span>
                  </div>
                )}



                <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-100">
                  <div className="flex items-center gap-2 text-zinc-500 mb-1">
                    <Building2 className="w-4 h-4 text-accent" />
                    <span className="text-xs uppercase tracking-wider font-medium">Tipo</span>
                  </div>
                  <span className="text-base font-bold text-ink">{property.type}</span>
                </div>

                <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-100">
                  <div className="flex items-center gap-2 text-zinc-500 mb-1">
                    <MapPin className="w-4 h-4 text-accent" />
                    <span className="text-xs uppercase tracking-wider font-medium">Zona</span>
                  </div>
                  <span className="text-base font-bold text-ink">{property.zone}</span>
                </div>
              </div>
            </section>

            {/* Highlights Checklist */}
            <section className="bg-white rounded-2xl border border-zinc-200/90 p-6 sm:p-8 shadow-xs">
              <h2 className="text-xl font-bold text-ink mb-6 pb-4 border-b border-zinc-100 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent" />
                <span>Puntos destacados</span>
              </h2>

              <ul className="space-y-3.5">
                {property.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-zinc-700 text-sm sm:text-base leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Full Authentic Description */}
            <section className="bg-white rounded-2xl border border-zinc-200/90 p-6 sm:p-8 shadow-xs">
              <h2 className="text-xl font-bold text-ink mb-6 pb-4 border-b border-zinc-100">
                Descripción detallada
              </h2>

              <div className="space-y-4 text-zinc-700 text-base leading-relaxed">
                {property.fullDescription.map((paragraph, idx) => (
                  <p key={idx} className="font-normal">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>

            {/* Back link at bottom of left column */}
            <div className="pt-2">
              <Link
                href="/inmuebles"
                className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-hover transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Volver a ver todas las propiedades</span>
              </Link>
            </div>
          </div>

          {/* RIGHT / STICKY SIDEBAR */}
          <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
            <div className="bg-white rounded-2xl border border-zinc-200/90 p-6 sm:p-7 shadow-sm">
              <div className="mb-5 pb-5 border-b border-zinc-100">
                <p className="text-xs uppercase tracking-wider font-semibold text-zinc-400 mb-1">
                  Atención personalizada
                </p>
                <h3 className="text-2xl font-bold text-ink tracking-tight">
                  ¿Te interesa esta propiedad?
                </h3>
                <p className="text-sm text-zinc-600 mt-2 leading-relaxed">
                  Consúltanos cualquier duda sobre este inmueble o solicita una visita sin compromiso.
                </p>
              </div>

              {/* Price */}
              <div className="bg-zinc-50 rounded-xl p-4 border border-zinc-100 mb-6">
                <span className="block text-[11px] uppercase tracking-wider text-zinc-400 font-semibold mb-1">
                  Precio de venta
                </span>
                <span className="text-2xl font-extrabold text-accent">
                  {property.priceDisplay}
                </span>
              </div>

              {/* Primary Contact Action */}
              <div className="space-y-3">
                <Link
                  href={`/contacto?ref=${property.ref}&inmueble=${encodeURIComponent(property.title)}`}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-accent hover:bg-accent-hover text-white text-base font-semibold shadow-md transition-all hover:shadow-lg text-center"
                >
                  <Mail className="w-4 h-4" />
                  <span>Contactar por este inmueble</span>
                </Link>

                <a
                  href="tel:+34696324987"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-ink text-sm font-semibold transition-colors text-center"
                >
                  <Phone className="w-4 h-4 text-accent" />
                  <span>Llamar: 696 32 49 87</span>
                </a>

                <a
                  href="tel:+34942229042"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-zinc-200 hover:bg-zinc-50 text-zinc-700 text-sm font-medium transition-colors text-center"
                >
                  <Phone className="w-4 h-4 text-zinc-500" />
                  <span>Oficina: 942 229 042</span>
                </a>
              </div>

              {/* Trust Badges */}
              <div className="mt-6 pt-6 border-t border-zinc-100 space-y-3 text-xs text-zinc-600">
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-accent shrink-0" />
                  <span>Visitas guiadas y asesoramiento legal completo</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-accent shrink-0" />
                  <span>Respuesta rápida en el mismo día</span>
                </div>
              </div>
            </div>

            {/* Legal Note */}
            <p className="text-xs text-zinc-400 text-center px-4">
              Impuestos y gastos no incluidos en el precio. Sujeto a disponibilidad y confirmación previa.
            </p>
          </aside>
        </div>
      </div>

      {/* 5. FINAL CTA SECTION */}
      <CTASection
        title="¿Buscas una propiedad similar en Cantabria?"
        subtitle="Disponemos de propiedades seleccionadas y podemos asesorarte para encontrar la vivienda o inversión perfecta."
        buttonText="Contactar con un asesor"
        buttonHref="/contacto"
        phoneNumber="696 32 49 87"
        phoneHref="tel:+34696324987"
      />
    </div>
  );
}
