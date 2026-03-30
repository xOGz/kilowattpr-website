import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Award, BookOpen, Briefcase, GraduationCap, Shield, Sun, Zap } from 'lucide-react'
import { PersonSchema, authorData } from '@/components/SchemaOrg'

export const metadata: Metadata = {
  title: 'Ing. Julio A. Santiago Pérez — Ingeniero Electricista Licenciado',
  description:
    'Ing. Julio Santiago Pérez (PE #6083), 50+ años de experiencia. Ex NASA, ex profesor UPR Mayagüez. COO de Kilowatt PR.',
  alternates: { canonical: 'https://www.kilowattpr.com/equipo/julio-santiago-perez' },
}

const credentials = [
  {
    icon: Shield,
    title: 'Ingeniero Licenciado — PE #6083',
    issuer: 'Junta Examinadora de Ingenieros y Agrimensores de Puerto Rico',
    detail: 'Vigente hasta abril 2028',
  },
  {
    icon: Sun,
    title: 'Instalador Certificado de Sistemas PV',
    issuer: 'DDEC — Programa de Política Pública Energética',
    detail: 'Certificación PPPE-PV-1809',
  },
]

const experience = [
  {
    icon: Zap,
    title: 'NASA',
    role: 'Ingeniero Eléctrico',
    desc: 'Experiencia en ingeniería eléctrica de alto nivel en proyectos de la agencia espacial estadounidense.',
  },
  {
    icon: GraduationCap,
    title: 'Universidad de Puerto Rico — Mayagüez (RUM)',
    role: 'Profesor',
    desc: 'Formador de las próximas generaciones de ingenieros en el Recinto Universitario de Mayagüez.',
  },
  {
    icon: Briefcase,
    title: 'Kilowatt PR LLC',
    role: 'Ingeniero Principal',
    desc: 'Diseña, supervisa y certifica cada instalación solar de Kilowatt PR en Puerto Rico.',
  },
]

const articles = [
  { href: '/blog/energia-solar-comercial-roi-negocios', title: 'Energía Solar Comercial: ROI para Negocios Locales' },
  { href: '/blog/errores-comunes-contratar-instalador-solar', title: 'Errores Comunes al Contratar un Instalador Solar' },
  { href: '/blog/energia-solar-bateria-esencial-puerto-rico', title: 'Energía Solar con Batería: Por Qué es Esencial en PR' },
  { href: '/blog/mantenimiento-paneles-solares-clima-tropical', title: 'Mantenimiento de Paneles Solares en Clima Tropical' },
  { href: '/blog/como-leer-factura-luma-ahorro-solar', title: 'Cómo Leer tu Factura de LUMA y Calcular tu Ahorro' },
  { href: '/blog/incentivos-solares-puerto-rico-2026', title: 'Cómo Preparar Tu Hogar para Huracanes con Energía Solar' },
  { href: '/blog/guia-bateria-respaldo-hogar-puerto-rico', title: 'Guía Completa: Baterías de Respaldo Solar' },
  { href: '/blog/como-funciona-interconexion-luma-energia', title: 'Cómo Funciona la Interconexión con LUMA Energy' },
  { href: '/blog/cuanto-cuesta-energia-solar-puerto-rico-2026', title: '¿Cuánto Cuesta la Energía Solar en Puerto Rico en 2026?' },
]

export default function AuthorPage() {
  return (
    <>
      <PersonSchema />

      <section className="py-16 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Author header */}
          <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
            <div className="w-32 h-32 rounded-full overflow-hidden relative shrink-0">
              <Image
                src="/team/julio-santiago.png"
                alt="Ing. Julio A. Santiago Pérez"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-on-surface mb-2">
                Ing. Julio A. Santiago Pérez
              </h1>
              <p className="text-lg text-primary-container font-headline font-semibold mb-4">
                Ingeniero Electricista Licenciado — PE #6083
              </p>
              <p className="text-on-surface-variant text-body-lg leading-relaxed max-w-2xl">
                {authorData.bio.es}
              </p>
            </div>
          </div>

          {/* Credentials */}
          <div className="mb-12">
            <h2 className="section-title mb-8">Certificaciones y Licencias</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {credentials.map((cred) => (
                <div key={cred.title} className="card flex gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(245, 166, 35, 0.12)' }}
                  >
                    <cred.icon className="text-primary-container" size={24} />
                  </div>
                  <div>
                    <h3 className="font-headline font-semibold text-on-surface mb-1">{cred.title}</h3>
                    <p className="text-sm text-on-surface-variant">{cred.issuer}</p>
                    <p className="text-sm text-primary-container font-label mt-1">{cred.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="mb-12">
            <h2 className="section-title mb-8">Trayectoria Profesional</h2>
            <div className="space-y-6">
              {experience.map((exp) => (
                <div key={exp.title} className="flex gap-5 p-6 rounded-lg bg-surface-container-low">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(245, 166, 35, 0.12)' }}
                  >
                    <exp.icon className="text-primary-container" size={24} />
                  </div>
                  <div>
                    <h3 className="font-headline font-semibold text-on-surface">{exp.title}</h3>
                    <p className="text-sm text-primary-container font-label mb-1">{exp.role}</p>
                    <p className="text-on-surface-variant text-body-md leading-relaxed">{exp.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-center text-on-surface-variant text-body-lg">
              Más de <span className="font-bold text-on-surface">50 años</span> de experiencia en ingeniería eléctrica
            </p>
          </div>

          {/* Articles by this author */}
          <div>
            <h2 className="section-title mb-8">
              <BookOpen size={24} className="inline mr-2 text-primary-container" />
              Artículos por Ing. Santiago Pérez
            </h2>
            <div className="space-y-3">
              {articles.map((article) => (
                <Link
                  key={article.href}
                  href={article.href}
                  className="block p-4 rounded-lg bg-surface-container-low hover:bg-surface-container-high transition-colors duration-200"
                >
                  <span className="font-headline font-semibold text-on-surface hover:text-primary-container transition-colors">
                    {article.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 bg-solar-yellow/10 border border-solar-yellow/30 rounded-xl p-6 text-center">
            <p className="text-navy-dark font-bold text-lg mb-2">
              ¿Tienes preguntas sobre energía solar?
            </p>
            <p className="text-on-surface-variant mb-4">
              El Ing. Santiago Pérez y su equipo están listos para ayudarte.
            </p>
            <a
              href="https://wa.me/17874312275"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Consulta Gratis por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
