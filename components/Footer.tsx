import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';

const NAV_LINKS = [
  { href: '/', label: 'Inicio' },
  { href: '/inmuebles', label: 'Inmuebles' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/contacto', label: 'Contacto' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2A3142] border-t border-white/10 text-white/80">
      <div className="max-w-6xl mx-auto px-6 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-5">
            <Link href="/" className="inline-block">
              <img
                src="/logo.png"
                alt="Northome Cantabria"
                className="h-9 md:h-10 w-auto"
              />
            </Link>
            <p className="text-sm text-white/70 leading-relaxed max-w-sm font-normal">
              En Northome Cantabria ofrecemos soluciones personalizadas en la venta, compra y alquiler de propiedades en Cantabria.
            </p>
          </div>

          {/* Navigation Column */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Navegación
            </h3>
            <ul className="space-y-2.5 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contacto
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-white/70 shrink-0 mt-0.5" />
                <span className="text-white/90">Calle Floranes, 10B, Santander</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-white/70 shrink-0" />
                <div className="flex flex-wrap items-center gap-x-2 text-white/90">
                  <a href="tel:696324987" className="hover:text-white transition-colors">
                    696 32 49 87
                  </a>
                  <span className="text-white/40">/</span>
                  <a href="tel:942229042" className="hover:text-white transition-colors">
                    942 229 042
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-white/70 shrink-0" />
                <a
                  href="mailto:info@northome.es"
                  className="text-white/90 hover:text-white transition-colors"
                >
                  info@northome.es
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {currentYear} Northome Cantabria. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <Link href="/contacto" className="text-white/60 hover:text-white transition-colors">
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
