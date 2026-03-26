'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Menu, X, Phone } from 'lucide-react'

const navLinksES = [
  { href: '/', label: 'Inicio' },
  { href: '/sobre-nosotros', label: 'Nosotros' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/proyectos', label: 'Proyectos' },
  { href: '/blog', label: 'Blog' },
  { href: '/contacto', label: 'Contacto' },
]

const navLinksEN = [
  { href: '/en', label: 'Home' },
  { href: '/sobre-nosotros', label: 'About' },
  { href: '/servicios', label: 'Services' },
  { href: '/proyectos', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/contacto', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const isEnglish = pathname.startsWith('/en')
  const navLinks = isEnglish ? navLinksEN : navLinksES
  const ctaLabel = isEnglish ? 'Free Quote' : 'Cotización Gratis'
  const ctaMobileLabel = isEnglish ? 'Free Quote via WhatsApp' : 'Cotización Gratis por WhatsApp'

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass" style={{ borderRadius: 0 }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={isEnglish ? '/en' : '/'} className="flex items-center gap-2">
            <span className="font-display font-bold text-xl tracking-tight">
              <span className="text-primary-container">KILOWATT</span>
              <span className="text-on-surface"> PR</span>
              <span className="text-on-surface-variant text-sm font-normal ml-1">LLC</span>
            </span>
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

          {/* CTA + Language */}
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
              {ctaLabel}
            </a>
            <div className="flex items-center gap-2 text-xs font-label text-on-surface-variant border-l border-outline-variant/30 pl-4 ml-1">
              {isEnglish ? (
                <>
                  <Link href="/" className="hover:text-primary-container transition-colors">ES</Link>
                  <span className="text-outline-variant">|</span>
                  <span className="text-primary-container font-semibold">EN</span>
                </>
              ) : (
                <>
                  <span className="text-primary-container font-semibold">ES</span>
                  <span className="text-outline-variant">|</span>
                  <Link href="/en" className="hover:text-primary-container transition-colors">EN</Link>
                </>
              )}
            </div>
          </div>

          {/* Mobile: language switcher + hamburger */}
          <div className="md:hidden flex items-center gap-4">
            <div className="flex items-center gap-2 text-xs font-label text-on-surface-variant">
              {isEnglish ? (
                <>
                  <Link href="/" className="hover:text-primary-container transition-colors">ES</Link>
                  <span className="text-outline-variant">|</span>
                  <span className="text-primary-container font-semibold">EN</span>
                </>
              ) : (
                <>
                  <span className="text-primary-container font-semibold">ES</span>
                  <span className="text-outline-variant">|</span>
                  <Link href="/en" className="hover:text-primary-container transition-colors">EN</Link>
                </>
              )}
            </div>
            <button
              className="text-on-surface"
              onClick={() => setOpen(!open)}
              aria-label={isEnglish ? 'Open menu' : 'Abrir menú'}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
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
              {ctaMobileLabel}
            </a>
            <div className="flex items-center justify-center gap-3 mt-2 text-sm font-label text-on-surface-variant">
              {isEnglish ? (
                <>
                  <Link href="/" className="hover:text-primary-container transition-colors" onClick={() => setOpen(false)}>Español</Link>
                  <span className="text-outline-variant">|</span>
                  <span className="text-primary-container font-semibold">English</span>
                </>
              ) : (
                <>
                  <span className="text-primary-container font-semibold">Español</span>
                  <span className="text-outline-variant">|</span>
                  <Link href="/en" className="hover:text-primary-container transition-colors" onClick={() => setOpen(false)}>English</Link>
                </>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
