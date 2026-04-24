import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Award, Briefcase, Shield, Sun, Users, Zap } from 'lucide-react'
import { XavierPersonSchema, xavierData } from '@/components/SchemaOrg'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'

export const metadata: Metadata = {
  title: 'Xavier Acevedo Santiago — Fundador y CEO de Kilowatt PR',
  description:
    'Xavier Acevedo Santiago: fundador y CEO de Kilowatt PR LLC. Perito electricista licenciado #21309, más de una década instalando solar en Puerto Rico.',
  alternates: { canonical: 'https://www.kilowattpr.com/equipo/xavier-acevedo' },
}

const credentials = [
  {
    icon: Shield,
    title: `Perito Electricista Licenciado — #${xavierData.credentials.electricianLicense}`,
    issuer: 'Junta Examinadora de Ingenieros y Agrimensores de Puerto Rico',
    detail: 'Licencia activa',
  },
  {
    icon: Sun,
    title: 'Instalador Solar con Experiencia Operativa',
    issuer: 'Más de una década de instalaciones residenciales y comerciales',
    detail: 'Puerto Rico, todas las 78 municipalidades',
  },
]

const experience = [
  {
    icon: Briefcase,
    title: 'Kilowatt PR LLC',
    role: 'Fundador y Director Ejecutivo',
    desc: 'Fundó la empresa después del huracán María con la misión de proveer sistemas solares resilientes a familias y negocios puertorriqueños. Supervisa cada instalación y es el responsable directo de la calidad final.',
  },
  {
    icon: Zap,
    title: 'Instalaciones Solares Residenciales y Comerciales',
    role: 'Más de una década de experiencia',
    desc: 'Especializado en sistemas 4 kW–25 kW residenciales con baterías, y sistemas comerciales hasta 100 kW+. Coordinación directa de permisos OGPe e interconexión con LUMA Energy.',
  },
  {
    icon: Users,
    title: 'Equipo de Instalación Propio',
    role: 'Construcción y formación',
    desc: 'En vez de subcontratar, Kilowatt PR mantiene un equipo interno de técnicos y electricistas liderado por Xavier. Esto asegura consistencia de calidad y respuesta post-instalación rápida.',
  },
]

const values = [
  {
    icon: Award,
    title: 'Calidad sobre volumen',
    desc: 'Preferimos instalar menos sistemas al año pero con ingeniería respaldada por PE y garantía real, que competir por cantidad con instalaciones genéricas.',
  },
  {
    icon: Shield,
    title: 'Resiliencia puertorriqueña',
    desc: 'Cada sistema se diseña asumiendo huracanes, LUMA outages y polvo del Sahara — no condiciones ideales de laboratorio.',
  },
  {
    icon: Users,
    title: 'Respuesta directa',
    desc: 'Cuando firmas con Kilowatt PR hablas con el fundador. No hay call center ni layers de intermediarios.',
  },
]

export default function XavierAcevedoPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Sobre Nosotros', path: '/sobre-nosotros' },
          { name: 'Xavier Acevedo Santiago', path: '/equipo/xavier-acevedo' },
        ]}
      />
      <XavierPersonSchema />

      <section className="py-16 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
            <div className="w-32 h-32 rounded-full overflow-hidden relative shrink-0">
              <Image
                src="/team/xavier-acevedo.png"
                alt="Xavier Acevedo Santiago — Fundador y CEO de Kilowatt PR"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-on-surface mb-2">
                {xavierData.name}
              </h1>
              <p className="text-lg text-primary-container font-headline font-semibold mb-4">
                {xavierData.title.es}
              </p>
              <p className="text-on-surface-variant text-body-lg leading-relaxed max-w-2xl">
                {xavierData.bio.es}
              </p>
            </div>
          </div>

          {/* Credentials */}
          <div className="mb-12">
            <h2 className="section-title mb-8">Licencia y Experiencia</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {credentials.map((cred) => (
                <div key={cred.title} className="card flex gap-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
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

          {/* Role / Experience */}
          <div className="mb-12">
            <h2 className="section-title mb-8">Rol en Kilowatt PR</h2>
            <div className="space-y-6">
              {experience.map((exp) => (
                <div
                  key={exp.title}
                  className="flex gap-5 p-6 rounded-lg bg-surface-container-low"
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
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
          </div>

          {/* Values */}
          <div className="mb-12">
            <h2 className="section-title mb-8">Principios Operativos</h2>
            <div className="space-y-4">
              {values.map((v) => (
                <div key={v.title} className="flex gap-4 p-5 rounded-lg bg-surface-container-low">
                  <v.icon className="text-primary-container shrink-0 mt-0.5" size={22} />
                  <div>
                    <h3 className="font-headline font-semibold text-on-surface mb-1">{v.title}</h3>
                    <p className="text-on-surface-variant text-body-md leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Team links */}
          <div className="mb-12">
            <h2 className="section-title mb-6">El resto del equipo</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link
                href="/equipo/julio-santiago-perez"
                className="block p-5 rounded-lg bg-surface-container-low hover:bg-surface-container-high transition-colors duration-200"
              >
                <p className="font-headline font-semibold text-on-surface">Ing. Julio A. Santiago Pérez, PE</p>
                <p className="text-sm text-on-surface-variant mt-1">COO y Asesor de Ingeniería · PE #6083</p>
              </Link>
              <Link
                href="/equipo/kristen-roman"
                className="block p-5 rounded-lg bg-surface-container-low hover:bg-surface-container-high transition-colors duration-200"
              >
                <p className="font-headline font-semibold text-on-surface">Kristen S. Román</p>
                <p className="text-sm text-on-surface-variant mt-1">Coordinadora de Proyectos y Servicio al Cliente</p>
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-solar-yellow/10 border border-solar-yellow/30 rounded-xl p-6 text-center">
            <p className="text-navy-dark font-bold text-lg mb-2">
              ¿Necesitas una cotización para tu sistema solar?
            </p>
            <p className="text-on-surface-variant mb-4">
              Xavier y su equipo responden en menos de 2 horas durante horario laboral.
            </p>
            <a
              href="https://wa.me/17874312275"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Cotización Gratis por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
