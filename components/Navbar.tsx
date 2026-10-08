'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';

const NAV_LINKS = [
  { href: '/', label: 'Inicio' },
  { href: '/inmuebles', label: 'Inmuebles' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/contacto', label: 'Contacto' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-[#2A3142] border-b border-white/10 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Logo - Seamlessly blends into the #2A3142 navbar */}
        <Link href="/" onClick={closeMenu} className="inline-flex items-center">
          <img
            src="/logo.png"
            alt="Northome Cantabria"
            className="h-9 md:h-10 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors py-1.5 px-2.5 rounded-lg ${
                  isActive
                    ? 'text-white font-semibold bg-white/15'
                    : 'text-white/80 hover:text-white hover:bg-white/5 font-medium'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-5">
          <a
            href="tel:696324987"
            className="hidden lg:inline-flex items-center gap-2 text-sm font-medium text-white/90 hover:text-white transition-colors"
          >
            <Phone className="w-4 h-4 text-white/70" />
            <span>696 32 49 87</span>
          </a>
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-[#2A3142] bg-white hover:bg-zinc-100 rounded-xl transition-all shadow-xs hover:shadow-md"
          >
            Contactar
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          className="md:hidden p-2 text-white hover:text-white/80 transition-colors focus:outline-none"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-b border-white/10 bg-[#2A3142] ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 border-b-0'
        }`}
      >
        <div className="px-6 py-5 space-y-4">
          <nav className="flex flex-col space-y-2">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={`text-base py-2 px-3 rounded-lg transition-colors ${
                    isActive
                      ? 'text-white font-semibold bg-white/15'
                      : 'text-white/80 hover:text-white hover:bg-white/5 font-medium'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <div className="flex flex-col text-sm text-white/80 gap-1.5">
              <a
                href="tel:696324987"
                className="flex items-center gap-2 hover:text-white transition-colors py-1"
              >
                <Phone className="w-4 h-4 text-white/70 shrink-0" />
                <span>696 32 49 87</span>
              </a>
              <a
                href="tel:942229042"
                className="flex items-center gap-2 hover:text-white transition-colors py-1"
              >
                <Phone className="w-4 h-4 text-white/70 shrink-0" />
                <span>942 229 042</span>
              </a>
            </div>
            <Link
              href="/contacto"
              onClick={closeMenu}
              className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-semibold text-[#2A3142] bg-white hover:bg-zinc-100 rounded-xl transition-all shadow-xs text-center"
            >
              Contactar
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
