'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/sobre-nosotros', label: 'Nosotros' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/proyectos', label: 'Proyectos' },
  { href: '/blog', label: 'Blog' },
  { href: '/contacto', label: 'Contacto' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass" style={{ borderRadius: 0 }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-display font-bold text-xl">
            <span className="text-primary-container">Kilowatt</span>
            <span className="text-on-surface"> PR</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-label text-label-lg text-on-surface-variant hover:text-primary-container transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+17874312275"
              className="flex items-center gap-1.5 font-label text-label-lg text-on-surface-variant hover:text-primary-container transition-colors duration-200"
            >
              <Phone size={14} />
              787-431-2275
            </a>
            <a
              href="https://wa.me/17874312275"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm py-2.5 px-6"
            >
              Cotización Gratis
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-on-surface"
            onClick={() => setOpen(!open)}
            aria-label="Abrir menú"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="md:hidden" style={{ background: 'rgba(27, 27, 28, 0.95)', backdropFilter: 'blur(24px)' }}>
          <nav className="flex flex-col px-4 py-6 gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-label text-label-lg text-on-surface-variant hover:text-primary-container transition-colors duration-200"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/17874312275"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm text-center mt-2"
              onClick={() => setOpen(false)}
            >
              Cotización Gratis por WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
