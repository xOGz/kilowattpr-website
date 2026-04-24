'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Clock } from 'lucide-react'

export default function Footer() {
  const pathname = usePathname()
  const isEnglish = pathname.startsWith('/en')

  return (
    <footer className="bg-surface-container-low text-on-surface-variant">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <span className="font-display font-bold text-xl">
                <span className="text-primary-container">Kilowatt</span>
                <span className="text-on-surface"> PR</span>
              </span>
            </div>
            <p className="text-body-md leading-relaxed mb-5 text-on-surface-variant">
              {isEnglish
                ? 'Professional solar engineering for Puerto Rico. Design and installation by a licensed PE engineer with 50+ years of experience. Families protected across the island.'
                : 'Ingeniería solar profesional para Puerto Rico. Diseño e instalación por ingeniero PE licenciado con más de 50 años de experiencia. Familias protegidas en toda la isla.'}
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/kilowattprllc"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-on-surface-variant hover:text-primary-container transition-colors duration-200"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/kilowatt_pr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-on-surface-variant hover:text-primary-container transition-colors duration-200"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/kilowatt-pr-llc/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-on-surface-variant hover:text-primary-container transition-colors duration-200"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-headline text-headline-md text-on-surface mb-5 text-base font-semibold">
              {isEnglish ? 'Services' : 'Servicios'}
            </h3>
            <ul className="space-y-3 text-body-md">
              <li>
                <Link href={isEnglish ? '/en/services/solar-panel-installation' : '/servicios/instalacion-paneles-solares'} className="hover:text-primary-container transition-colors duration-200">
                  {isEnglish ? 'Solar Panel Installation' : 'Instalación de Paneles Solares'}
                </Link>
              </li>
              <li>
                <Link href={isEnglish ? '/en/services/battery-backup-systems' : '/servicios/sistemas-con-bateria'} className="hover:text-primary-container transition-colors duration-200">
                  {isEnglish ? 'Battery Backup Systems' : 'Sistemas con Batería'}
                </Link>
              </li>
              <li>
                <Link href={isEnglish ? '/en/services/roof-sealing' : '/servicios/sellado-de-techo'} className="hover:text-primary-container transition-colors duration-200">
                  {isEnglish ? 'Roof Sealing' : 'Sellado de Techo'}
                </Link>
              </li>
              <li>
                <Link href={isEnglish ? '/en/services/maintenance' : '/servicios/mantenimiento-lavado'} className="hover:text-primary-container transition-colors duration-200">
                  {isEnglish ? 'Maintenance & Cleaning' : 'Mantenimiento y Lavado'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-headline text-headline-md text-on-surface mb-5 text-base font-semibold">
              {isEnglish ? 'Navigation' : 'Navegación'}
            </h3>
            <ul className="space-y-3 text-body-md">
              <li>
                <Link href={isEnglish ? '/en' : '/'} className="hover:text-primary-container transition-colors duration-200">
                  {isEnglish ? 'Home' : 'Inicio'}
                </Link>
              </li>
              <li>
                <Link href={isEnglish ? '/en/about' : '/sobre-nosotros'} className="hover:text-primary-container transition-colors duration-200">
                  {isEnglish ? 'About Us' : 'Sobre Nosotros'}
                </Link>
              </li>
              <li>
                <Link href={isEnglish ? '/en/projects' : '/proyectos'} className="hover:text-primary-container transition-colors duration-200">
                  {isEnglish ? 'Projects' : 'Proyectos'}
                </Link>
              </li>
              <li>
                <Link href={isEnglish ? '/en/solar-calculator' : '/calculadora-solar'} className="hover:text-primary-container transition-colors duration-200">
                  {isEnglish ? 'Solar Calculator' : 'Calculadora Solar'}
                </Link>
              </li>
              <li>
                <Link href={isEnglish ? '/en/reviews' : '/resenas'} className="hover:text-primary-container transition-colors duration-200">
                  {isEnglish ? 'Reviews' : 'Reseñas'}
                </Link>
              </li>
              <li>
                <Link href={isEnglish ? '/en/blog' : '/preguntas-frecuentes'} className="hover:text-primary-container transition-colors duration-200">
                  {isEnglish ? 'FAQ' : 'Preguntas Frecuentes'}
                </Link>
              </li>
              <li>
                <Link href={isEnglish ? '/en/blog' : '/blog'} className="hover:text-primary-container transition-colors duration-200">
                  {isEnglish ? 'Solar Blog' : 'Blog Solar'}
                </Link>
              </li>
              <li>
                <Link href={isEnglish ? '/en/referral-program' : '/programa-de-referidos'} className="hover:text-primary-container transition-colors duration-200">
                  {isEnglish ? 'Referral Program' : 'Programa de Referidos'}
                </Link>
              </li>
              <li>
                <Link href={isEnglish ? '/en/comparison/why-kilowatt-pr' : '/comparacion/kilowatt-pr-vs-sunnova'} className="hover:text-primary-container transition-colors duration-200">
                  {isEnglish ? 'Why Kilowatt PR' : 'Kilowatt PR vs Sunnova'}
                </Link>
              </li>
              <li>
                <Link href={isEnglish ? '/en/contact' : '/contacto'} className="hover:text-primary-container transition-colors duration-200">
                  {isEnglish ? 'Contact' : 'Contacto'}
                </Link>
              </li>
              <li>
                <Link href={isEnglish ? '/en/privacy' : '/privacidad'} className="hover:text-primary-container transition-colors duration-200">
                  {isEnglish ? 'Privacy Policy' : 'Privacidad'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-headline text-headline-md text-on-surface mb-5 text-base font-semibold">
              {isEnglish ? 'Contact' : 'Contacto'}
            </h3>
            <ul className="space-y-4 text-body-md">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-primary-container mt-0.5 shrink-0" />
                <span>HC 3 Box 31767, Aguada, PR 00602</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-primary-container shrink-0" />
                <a href="tel:+17874312275" className="hover:text-primary-container transition-colors duration-200">
                  +1-787-431-2275
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-primary-container shrink-0" />
                <a href="mailto:info@kilowattpr.com" className="hover:text-primary-container transition-colors duration-200">
                  info@kilowattpr.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={16} className="text-primary-container shrink-0" />
                <span>{isEnglish ? 'Mon–Fri, 8:00 AM – 5:00 PM' : 'Lun–Vie, 8:00 AM – 5:00 PM'}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-body-md" style={{ background: 'transparent' }}>
          <p className="text-on-surface-variant opacity-60">
            © {new Date().getFullYear()} Kilowatt PR LLC. {isEnglish ? 'All rights reserved.' : 'Todos los derechos reservados.'}
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://www.bbb.org/us/pr/aguada/profile/solar-energy-contractors/kilowatt-pr-llc-0633-92054804"
              target="_blank"
              rel="noopener noreferrer"
              className="text-on-surface-variant opacity-60 hover:opacity-100 transition-all duration-200 text-xs font-semibold"
              title="BBB Accredited Business"
            >
              BBB Accredited
            </a>
            <Link href={isEnglish ? '/en/privacy' : '/privacidad'} className="text-on-surface-variant opacity-60 hover:text-primary-container hover:opacity-100 transition-all duration-200">
              {isEnglish ? 'Privacy Policy' : 'Política de Privacidad'}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
