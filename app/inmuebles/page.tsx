'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import { PROPERTIES, Property } from '@/lib/properties';
import {
  Bed,
  Bath,
  Ruler,
  Car,
  Calendar,
  MapPin,
  RotateCcw,
  Phone,
  Building2,
  Layers,
  ArrowRight,
  Camera,
} from 'lucide-react';

interface FilterState {
  type: string;
  operation: string;
  zone: string;
  maxPrice: number;
}

const INITIAL_FILTERS: FilterState = {
  type: 'Todos',
  operation: 'Todas',
  zone: 'Todas',
  maxPrice: 500000,
};

export default function InmueblesPage() {
  const [filters, setFilters] = useState<FilterState>(INITIAL_FILTERS);

  const filteredProperties = useMemo(() => {
    return PROPERTIES.filter((property) => {
      // Tipo
      if (filters.type !== 'Todos' && property.type !== filters.type) {
        return false;
      }

      // Operación
      if (filters.operation !== 'Todas' && property.operation !== filters.operation) {
        return false;
      }

      // Ubicación / Zona
      if (filters.zone !== 'Todas' && property.zone !== filters.zone) {
        return false;
      }

      // Precio máximo
      if (property.price > filters.maxPrice) {
        return false;
      }

      return true;
    });
  }, [filters]);

  const handleResetFilters = () => {
    setFilters(INITIAL_FILTERS);
  };

  const isFiltered =
    filters.type !== 'Todos' ||
    filters.operation !== 'Todas' ||
    filters.zone !== 'Todas' ||
    filters.maxPrice < 500000;

  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      {/* 1. HERO COMPONENT */}
      <PageHero
        variant="gradient"
        mobileOverlay={true}
        title="Inmuebles en Cantabria"
        subtitle="Encuentra chalets, pisos, terrenos y garajes seleccionados con el mejor asesoramiento profesional."
        imageSrc="/images/hero-inmuebles.webp"
        imageAlt="Propiedades e inmuebles en venta en Cantabria"
        ctaText="Ver catálogo"
        ctaHref="#catalogo"
        secondaryCtaText="Valorar mi inmueble"
        secondaryCtaHref="/contacto"
      />

      {/* 2. CATALOG & FILTER SECTION */}
      <section id="catalogo" className="py-12 lg:py-20 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section Header */}
          <div className="mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-widest font-semibold text-zinc-500 mb-2">
                Catálogo inmobiliario
              </p>
              <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-ink">
                Propiedades disponibles
              </h2>
            </div>
            <p className="text-sm text-zinc-500 font-normal">
              Mostrando{' '}
              <span className="font-semibold text-ink">
                {filteredProperties.length}
              </span>{' '}
              de {PROPERTIES.length} propiedades
            </p>
          </div>

          {/* Filter Bar (Inspired by Bostak Inmobiliaria) */}
          <div className="bg-white rounded-2xl border border-zinc-200/90 p-5 sm:p-7 shadow-xs mb-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-end">
              {/* Filter 1: Tipo */}
              <div>
                <label
                  htmlFor="filter-type"
                  className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 mb-2"
                >
                  Tipo de propiedad
                </label>
                <select
                  id="filter-type"
                  value={filters.type}
                  onChange={(e) => setFilters({ ...filters, type: e.target.value })}
                  className="w-full h-11 rounded-xl border border-zinc-200 bg-white px-3 text-sm text-ink font-medium focus:border-accent focus:outline-hidden focus:ring-1 focus:ring-accent cursor-pointer transition-colors"
                >
                  <option value="Todos">Todos los tipos</option>
                  <option value="Chalet">Chalet</option>
                  <option value="Piso">Piso</option>
                  <option value="Terreno">Terreno</option>
                  <option value="Garaje">Garaje</option>
                </select>
              </div>

              {/* Filter 2: Operación */}
              <div>
                <label
                  htmlFor="filter-operation"
                  className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 mb-2"
                >
                  Operación
                </label>
                <select
                  id="filter-operation"
                  value={filters.operation}
                  onChange={(e) => setFilters({ ...filters, operation: e.target.value })}
                  className="w-full h-11 rounded-xl border border-zinc-200 bg-white px-3 text-sm text-ink font-medium focus:border-accent focus:outline-hidden focus:ring-1 focus:ring-accent cursor-pointer transition-colors"
                >
                  <option value="Todas">Todas (Venta y Alquiler)</option>
                  <option value="Venta">Venta</option>
                  <option value="Alquiler">Alquiler</option>
                </select>
              </div>

              {/* Filter 3: Ubicación / Zona */}
              <div>
                <label
                  htmlFor="filter-zone"
                  className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 mb-2"
                >
                  Ubicación / Zona
                </label>
                <select
                  id="filter-zone"
                  value={filters.zone}
                  onChange={(e) => setFilters({ ...filters, zone: e.target.value })}
                  className="w-full h-11 rounded-xl border border-zinc-200 bg-white px-3 text-sm text-ink font-medium focus:border-accent focus:outline-hidden focus:ring-1 focus:ring-accent cursor-pointer transition-colors"
                >
                  <option value="Todas">Todas las zonas</option>
                  <option value="Liaño / Astillero">Liaño / Astillero</option>
                  <option value="Santander Centro">Santander Centro</option>
                  <option value="Hornedo / Entrambasaguas">Hornedo / Entrambasaguas</option>
                  <option value="Numancia / San Fernando">Numancia / San Fernando</option>
                </select>
              </div>

              {/* Filter 4: Precio Máximo Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label
                    htmlFor="filter-price"
                    className="block text-xs font-semibold uppercase tracking-wider text-zinc-700"
                  >
                    Precio máx.
                  </label>
                  <span className="text-xs font-bold text-accent">
                    {filters.maxPrice >= 500000
                      ? 'Sin límite (500.000€+)'
                      : `${filters.maxPrice.toLocaleString('es-ES')} €`}
                  </span>
                </div>
                <div className="h-11 flex items-center px-1">
                  <input
                    type="range"
                    id="filter-price"
                    min="50000"
                    max="500000"
                    step="10000"
                    value={filters.maxPrice}
                    onChange={(e) =>
                      setFilters({ ...filters, maxPrice: Number(e.target.value) })
                    }
                    className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-[#2A3142]"
                    aria-label="Filtro de precio máximo"
                  />
                </div>
              </div>
            </div>

            {/* Bottom row: Active filters & Reset button */}
            <div className="mt-5 pt-4 border-t border-zinc-100 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="text-zinc-500 font-medium">Filtros activos:</span>
                {filters.type !== 'Todos' && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-zinc-100 text-zinc-800 font-medium">
                    Tipo: {filters.type}
                    <button
                      type="button"
                      onClick={() => setFilters({ ...filters, type: 'Todos' })}
                      className="hover:text-zinc-950 ml-0.5 cursor-pointer"
                    >
                      ×
                    </button>
                  </span>
                )}
                {filters.operation !== 'Todas' && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-zinc-100 text-zinc-800 font-medium">
                    Operación: {filters.operation}
                    <button
                      type="button"
                      onClick={() => setFilters({ ...filters, operation: 'Todas' })}
                      className="hover:text-zinc-950 ml-0.5 cursor-pointer"
                    >
                      ×
                    </button>
                  </span>
                )}
                {filters.zone !== 'Todas' && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-zinc-100 text-zinc-800 font-medium">
                    Zona: {filters.zone}
                    <button
                      type="button"
                      onClick={() => setFilters({ ...filters, zone: 'Todas' })}
                      className="hover:text-zinc-950 ml-0.5 cursor-pointer"
                    >
                      ×
                    </button>
                  </span>
                )}
                {filters.maxPrice < 500000 && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-zinc-100 text-zinc-800 font-medium">
                    Hasta {filters.maxPrice.toLocaleString('es-ES')} €
                    <button
                      type="button"
                      onClick={() => setFilters({ ...filters, maxPrice: 500000 })}
                      className="hover:text-zinc-950 ml-0.5 cursor-pointer"
                    >
                      ×
                    </button>
                  </span>
                )}
                {!isFiltered && (
                  <span className="text-zinc-400 italic">Mostrando todos los inmuebles</span>
                )}
              </div>

              {isFiltered && (
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-zinc-600 hover:text-ink transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Restablecer filtros</span>
                </button>
              )}
            </div>
          </div>

          {/* Properties List */}
          {filteredProperties.length > 0 ? (
            <>
              <div className="space-y-8">
                {filteredProperties.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>

              {/* Legal footnote */}
              <p className="text-xs text-zinc-400 text-center mt-12 pt-6 border-t border-zinc-100 max-w-2xl mx-auto">
                Los precios indicados no incluyen impuestos ni gastos derivados de la compraventa (notaría, registro e ITP). Información sujeta a disponibilidad.
              </p>
            </>
          ) : (
            /* Clean Empty State */
            <div className="bg-white rounded-2xl border border-zinc-200 p-12 text-center max-w-2xl mx-auto shadow-xs my-8">
              <div className="w-14 h-14 rounded-full bg-zinc-100 flex items-center justify-center mx-auto mb-4 text-zinc-500">
                <Building2 className="w-7 h-7" />
              </div>
              {filters.operation === 'Alquiler' ? (
                <>
                  <h3 className="text-xl font-semibold text-ink mb-2">
                    Inmuebles en alquiler
                  </h3>
                  <p className="text-zinc-600 text-base leading-relaxed mb-6">
                    Actualmente no disponemos de inmuebles en alquiler. Consúltanos para próximas incorporaciones.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <Link
                      href="/contacto"
                      className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-accent hover:bg-accent-hover text-white text-sm font-medium shadow-xs transition-colors w-full sm:w-auto"
                    >
                      Consultar próximas incorporaciones
                    </Link>
                    <button
                      type="button"
                      onClick={() => setFilters({ ...filters, operation: 'Todas' })}
                      className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-zinc-300 text-zinc-700 hover:bg-zinc-50 text-sm font-medium transition-colors w-full sm:w-auto cursor-pointer"
                    >
                      Ver propiedades en venta
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <h3 className="text-xl font-semibold text-ink mb-2">
                    Sin resultados coincidentes
                  </h3>
                  <p className="text-zinc-600 text-base leading-relaxed mb-6">
                    No hemos encontrado propiedades que coincidan con los criterios seleccionados. Prueba a ampliar los filtros o restablecerlos.
                  </p>
                  <button
                    type="button"
                    onClick={handleResetFilters}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-accent hover:bg-accent-hover text-white text-sm font-medium shadow-xs transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Restablecer todos los filtros</span>
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </section>

      {/* 3. FINAL CTA SECTION */}
      <CTASection
        title="¿Buscas una propiedad a medida en Cantabria?"
        subtitle="Si no encuentras el inmueble que encaje con lo que necesitas, contáctanos y te avisaremos en cuanto tengamos nuevas propiedades."
        buttonText="Contactar con un asesor"
        buttonHref="/contacto"
        phoneNumber="696 32 49 87"
        phoneHref="tel:+34696324987"
      />
    </div>
  );
}

/**
 * Property Listing Card:
 * Clean, balanced card displaying main image, hover zoom, specs, summary, and direct link to full detail page.
 */
function PropertyCard({ property }: { property: Property }) {
  return (
    <article className="bg-white rounded-2xl border border-zinc-200/90 shadow-xs hover:shadow-md transition-shadow overflow-hidden group">
      <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
        {/* LEFT COLUMN: MAIN IMAGE */}
        <div className="lg:col-span-5 relative bg-zinc-100 overflow-hidden">
          <Link
            href={`/inmuebles/${property.slug}`}
            className="block relative w-full h-64 sm:h-72 lg:h-full min-h-[260px] overflow-hidden"
          >
            <img
              src={property.images[0]}
              alt={property.title}
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              loading="lazy"
            />

            {/* Badges */}
            <div className="absolute top-3.5 left-3.5 z-10 flex items-center gap-2 pointer-events-none">
              <span className="bg-accent/95 backdrop-blur-xs text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm">
                {property.operation}
              </span>
              <span className="bg-white/95 backdrop-blur-xs text-zinc-900 text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm">
                {property.type}
              </span>
            </div>

            {/* Photo count indicator */}
            <div className="absolute bottom-3.5 right-3.5 z-10 pointer-events-none">
              <span className="inline-flex items-center gap-1.5 bg-black/60 backdrop-blur-xs text-white text-xs font-medium px-2.5 py-1 rounded-full shadow-sm">
                <Camera className="w-3.5 h-3.5" />
                <span>{property.images.length} fotos</span>
              </span>
            </div>
          </Link>
        </div>

        {/* RIGHT COLUMN: PROPERTY DETAILS, SUMMARY & CTAS */}
        <div className="lg:col-span-7 p-6 sm:p-7 flex flex-col justify-between">
          <div>
            {/* Header: Zone */}
            <div className="flex items-center gap-1.5 font-semibold text-zinc-500 uppercase tracking-wider text-xs mb-2.5">
              <MapPin className="w-3.5 h-3.5 text-accent" />
              <span>{property.zone}</span>
            </div>

            {/* Title */}
            <h3 className="text-xl sm:text-2xl font-bold text-ink leading-snug tracking-tight">
              <Link
                href={`/inmuebles/${property.slug}`}
                className="hover:text-accent transition-colors"
              >
                {property.title}
              </Link>
            </h3>

            {/* Price */}
            <div className="mt-2.5 mb-4">
              <span className="text-2xl sm:text-3xl font-extrabold text-accent tracking-tight">
                {property.priceDisplay}
              </span>
            </div>

            {/* Key Specs Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 py-3.5 border-y border-zinc-100 my-3.5 text-xs">
              {property.size && (
                <div className="flex items-center gap-2 p-2 rounded-lg bg-zinc-50 border border-zinc-100">
                  <Ruler className="w-4 h-4 text-zinc-500 shrink-0" />
                  <div>
                    <span className="block text-[10px] uppercase text-zinc-400 font-semibold">
                      Superficie
                    </span>
                    <span className="font-semibold text-ink">{property.size}</span>
                  </div>
                </div>
              )}

              {property.plotSize && (
                <div className="flex items-center gap-2 p-2 rounded-lg bg-zinc-50 border border-zinc-100">
                  <Layers className="w-4 h-4 text-zinc-500 shrink-0" />
                  <div>
                    <span className="block text-[10px] uppercase text-zinc-400 font-semibold">
                      Parcela
                    </span>
                    <span className="font-semibold text-ink">{property.plotSize}</span>
                  </div>
                </div>
              )}

              {typeof property.rooms === 'number' && (
                <div className="flex items-center gap-2 p-2 rounded-lg bg-zinc-50 border border-zinc-100">
                  <Bed className="w-4 h-4 text-zinc-500 shrink-0" />
                  <div>
                    <span className="block text-[10px] uppercase text-zinc-400 font-semibold">
                      Habitaciones
                    </span>
                    <span className="font-semibold text-ink">
                      {property.rooms} {property.rooms === 1 ? 'hab.' : 'habs.'}
                    </span>
                  </div>
                </div>
              )}

              {typeof property.baths === 'number' && (
                <div className="flex items-center gap-2 p-2 rounded-lg bg-zinc-50 border border-zinc-100">
                  <Bath className="w-4 h-4 text-zinc-500 shrink-0" />
                  <div>
                    <span className="block text-[10px] uppercase text-zinc-400 font-semibold">
                      Baños
                    </span>
                    <span className="font-semibold text-ink">
                      {property.baths} {property.baths === 1 ? 'baño' : 'baños'}
                    </span>
                  </div>
                </div>
              )}

              {property.garage && (
                <div className="flex items-center gap-2 p-2 rounded-lg bg-zinc-50 border border-zinc-100">
                  <Car className="w-4 h-4 text-zinc-500 shrink-0" />
                  <div>
                    <span className="block text-[10px] uppercase text-zinc-400 font-semibold">
                      Garaje
                    </span>
                    <span className="font-semibold text-ink">{property.garage}</span>
                  </div>
                </div>
              )}

              {property.year && (
                <div className="flex items-center gap-2 p-2 rounded-lg bg-zinc-50 border border-zinc-100">
                  <Calendar className="w-4 h-4 text-zinc-500 shrink-0" />
                  <div>
                    <span className="block text-[10px] uppercase text-zinc-400 font-semibold">
                      Año constr.
                    </span>
                    <span className="font-semibold text-ink">{property.year}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Brief Description */}
            <p className="my-3 text-sm leading-relaxed text-zinc-600 line-clamp-3">
              {property.summary}
            </p>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 border-t border-zinc-100 mt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <Link
              href={`/inmuebles/${property.slug}`}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-accent hover:bg-accent-hover text-white text-sm font-semibold shadow-xs transition-all hover:shadow text-center flex-1"
            >
              <span>Ver detalles y fotos</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="tel:+34696324987"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-ink text-sm font-medium transition-colors text-center"
            >
              <Phone className="w-4 h-4 text-accent" />
              <span>Llamar: 696 32 49 87</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
