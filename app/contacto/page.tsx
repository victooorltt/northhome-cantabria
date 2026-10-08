'use client';

import React, { useState } from 'react';
import PageHero from '@/components/PageHero';
import { MapPin, Phone, Mail, CheckCircle2, Send } from 'lucide-react';

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    email: '',
    telefono: '',
    mensaje: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate submission handling
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 450);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      nombre: '',
      apellidos: '',
      email: '',
      telefono: '',
      mensaje: '',
    });
  };

  return (
    <div className="bg-white">
      {/* 1. Hero Section */}
      <PageHero
        variant="gradient"
        mobileOverlay={true}
        title="Contacta con Northome Cantabria"
        subtitle="Servicios inmobiliarios a tu medida"
        imageSrc="/images/hero-contacto.webp"
        imageAlt="Contacto Northome Cantabria - Santander y Cantabria"
      />

      {/* 2. Contact Channels & Form Section */}
      <section className="py-16 lg:py-24 border-b border-zinc-200/80">
        <div className="max-w-6xl mx-auto px-6">
          {/* Intro Text */}
          <div className="max-w-3xl mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink mb-6">
              Estamos a tu disposición
            </h2>
            <p className="text-lg text-zinc-700 leading-relaxed font-normal">
              ¿Buscas un local o vivienda en Cantabria? ¿Quieres vender o alquilar tu propiedad? En Northome Cantabria tenemos soluciones para cada necesidad. Tú eliges cómo contactar con nosotros. Puedes visitarnos en nuestra oficina de Santander, llamarnos o completar el siguiente formulario:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Contact Channels Column */}
            <div className="lg:col-span-5 space-y-6">
              {/* Channel 1: Visítanos */}
              <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80 flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-accent shrink-0 shadow-xs">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-accent mb-1">
                    Visítanos
                  </h3>
                  <p className="text-base font-semibold text-ink">
                    Calle Floranes, 10B
                  </p>
                  <p className="text-sm text-zinc-600 mt-0.5">
                    39010 Santander, Cantabria
                  </p>
                  <a
                    href="https://maps.google.com/?q=Calle+Floranes+10B+Santander"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-xs font-semibold text-accent hover:underline"
                  >
                    Ver en Google Maps →
                  </a>
                </div>
              </div>

              {/* Channel 2: Hablemos */}
              <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80 flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-accent shrink-0 shadow-xs">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-accent mb-1">
                    Hablemos
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-2 text-base font-semibold text-ink">
                    <a
                      href="tel:696324987"
                      className="hover:text-accent transition-colors"
                    >
                      696 32 49 87
                    </a>
                    <span className="text-zinc-400 font-normal">/</span>
                    <a
                      href="tel:942229042"
                      className="hover:text-accent transition-colors"
                    >
                      942 229 042
                    </a>
                  </div>
                  <p className="text-xs text-zinc-500 mt-1">
                    Atención telefónica directa de lunes a viernes
                  </p>
                </div>
              </div>

              {/* Channel 3: Escríbenos */}
              <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80 flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-accent shrink-0 shadow-xs">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-accent mb-1">
                    Escríbenos
                  </h3>
                  <a
                    href="mailto:info@northome.es"
                    className="text-base font-semibold text-ink hover:text-accent transition-colors block"
                  >
                    info@northome.es
                  </a>
                  <p className="text-xs text-zinc-500 mt-1">
                    Respondemos en menos de 24 horas laborables
                  </p>
                </div>
              </div>

              {/* Mapa de ubicación */}
              <div className="rounded-2xl border border-zinc-200/80 overflow-hidden shadow-xs bg-white">
                <div className="px-5 py-3.5 bg-zinc-50 border-b border-zinc-200 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-semibold text-ink">
                    <MapPin className="w-4 h-4 text-accent shrink-0" />
                    <span>Calle Floranes, 10B · Santander</span>
                  </div>
                  <a
                    href="https://maps.google.com/?q=Calle+Floranes+10B+Santander"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium text-accent hover:underline shrink-0 ml-2"
                  >
                    Abrir mapa ↗
                  </a>
                </div>
                <div className="h-64 sm:h-72 w-full relative bg-zinc-100">
                  <iframe
                    title="Ubicación de Northome Cantabria en Santander"
                    src="https://maps.google.com/maps?q=Calle+Floranes+10B,+Santander,+Cantabria&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>

            {/* Interactive Form Column */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-zinc-200/80 bg-white p-7 sm:p-10 shadow-xs">
                {submitted ? (
                  <div className="py-8 text-center space-y-4">
                    <div className="w-14 h-14 mx-auto rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-semibold tracking-tight text-ink">
                      ¡Consulta enviada correctamente!
                    </h3>
                    <p className="text-zinc-600 text-base max-w-md mx-auto leading-relaxed">
                      Gracias por contactar con Northome Cantabria. Hemos recibido tu mensaje y nuestro equipo se pondrá en contacto contigo a la mayor brevedad posible.
                    </p>
                    <div className="pt-4">
                      <button
                        type="button"
                        onClick={handleReset}
                        className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-zinc-800 bg-zinc-100 hover:bg-zinc-200 rounded-xl transition-colors"
                      >
                        Enviar otra consulta
                      </button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="mb-8">
                      <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-ink">
                        Formulario de contacto
                      </h3>
                      <p className="mt-2 text-sm text-zinc-600">
                        Completa tus datos y cuéntanos en qué podemos ayudarte.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {/* Nombre */}
                        <div>
                          <label
                            htmlFor="nombre"
                            className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 mb-2"
                          >
                            Nombre <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            required
                            value={formData.nombre}
                            onChange={handleChange}
                            placeholder="Tu nombre"
                            className="w-full rounded-xl border border-zinc-300 px-4 py-3 text-sm text-ink placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors"
                          />
                        </div>

                        {/* Apellidos */}
                        <div>
                          <label
                            htmlFor="apellidos"
                            className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 mb-2"
                          >
                            Apellidos <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="apellidos"
                            name="apellidos"
                            required
                            value={formData.apellidos}
                            onChange={handleChange}
                            placeholder="Tus apellidos"
                            className="w-full rounded-xl border border-zinc-300 px-4 py-3 text-sm text-ink placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {/* E-mail */}
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 mb-2"
                          >
                            E-mail <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="correo@ejemplo.com"
                            className="w-full rounded-xl border border-zinc-300 px-4 py-3 text-sm text-ink placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors"
                          />
                        </div>

                        {/* Teléfono */}
                        <div>
                          <label
                            htmlFor="telefono"
                            className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 mb-2"
                          >
                            Teléfono
                          </label>
                          <input
                            type="tel"
                            id="telefono"
                            name="telefono"
                            value={formData.telefono}
                            onChange={handleChange}
                            placeholder="600 000 000"
                            className="w-full rounded-xl border border-zinc-300 px-4 py-3 text-sm text-ink placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors"
                          />
                        </div>
                      </div>

                      {/* ¿Cómo podemos ayudarte? */}
                      <div>
                        <label
                          htmlFor="mensaje"
                          className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 mb-2"
                        >
                          ¿Cómo podemos ayudarte? <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="mensaje"
                          name="mensaje"
                          required
                          rows={4}
                          value={formData.mensaje}
                          onChange={handleChange}
                          placeholder="Describe brevemente lo que buscas (comprar, vender, alquilar, valoración gratuita...)"
                          className="w-full rounded-xl border border-zinc-300 px-4 py-3 text-sm text-ink placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors resize-y"
                        />
                      </div>

                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={loading}
                          className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-semibold text-white bg-accent hover:bg-accent-hover rounded-xl shadow-md transition-all disabled:opacity-70 disabled:cursor-not-allowed hover:shadow-lg"
                        >
                          {loading ? (
                            <span>Enviando consulta...</span>
                          ) : (
                            <>
                              <Send className="w-4 h-4" />
                              <span>Enviar consulta</span>
                            </>
                          )}
                        </button>
                      </div>

                      <p className="text-xs text-zinc-500 text-center">
                        Tus datos se tratarán de forma confidencial únicamente para responder a tu solicitud.
                      </p>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
