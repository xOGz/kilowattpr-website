import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Clock, Headphones, MessageCircle, Users } from 'lucide-react'
import { KristenPersonSchema, kristenData } from '@/components/SchemaOrg'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'

export const metadata: Metadata = {
  title: 'Kristen S. Román — Coordinadora de Proyectos · Kilowatt PR',
  description:
    'Kristen S. Román es coordinadora de proyectos y responsable de servicio al cliente en Kilowatt PR. Primer punto de contacto para cada cotización en Puerto Rico.',
  alternates: { canonical: 'https://www.kilowattpr.com/equipo/kristen-roman' },
}

const responsibilities = [
  {
    icon: MessageCircle,
    title: 'Primer Contacto',
    role: 'Respuesta en menos de 2 horas',
    desc: 'Recibe cada lead entrante por WhatsApp, teléfono y formulario de cotización. Califica la solicitud y agenda la consulta técnica con el equipo.',
  },
  {
    icon: Users,
    title: 'Coordinación con Instalación',
    role: 'Puente entre cliente y equipo técnico',
    desc: 'Coordina la agenda de los técnicos de instalación, gestiona la documentación de permisos OGPe y el proceso de interconexión con LUMA Energy.',
  },
  {
    icon: Headphones,
    title: 'Servicio Post-Instalación',
    role: 'Seguimiento a largo plazo',
    desc: 'Responsable del seguimiento posterior a la instalación, coordinación de mantenimiento programado y soporte ante cualquier incidencia con el sistema.',
  },
]

export default function KristenRomanPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Sobre Nosotros', path: '/sobre-nosotros' },
          { name: 'Kristen S. Román', path: '/equipo/kristen-roman' },
        ]}
      />
      <KristenPersonSchema />

      <section className="py-16 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
            <div className="w-32 h-32 rounded-full overflow-hidden relative shrink-0">
              <Image
                src="/team/kristen-roman.png"
                alt="Kristen S. Román — Coordinadora de Proyectos de Kilowatt PR"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-on-surface mb-2">
                {kristenData.name}
              </h1>
              <p className="text-lg text-primary-container font-headline font-semibold mb-4">
                {kristenData.title.es}
              </p>
              <p className="text-on-surface-variant text-body-lg leading-relaxed max-w-2xl">
                {kristenData.bio.es}
              </p>
            </div>
          </div>

          {/* Responsibilities */}
          <div className="mb-12">
            <h2 className="section-title mb-8">Responsabilidades</h2>
            <div className="space-y-6">
              {responsibilities.map((item) => (
                <div
                  key={item.title}
                  className="flex gap-5 p-6 rounded-lg bg-surface-container-low"
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(245, 166, 35, 0.12)' }}
                  >
                    <item.icon className="text-primary-container" size={24} />
                  </div>
                  <div>
                    <h3 className="font-headline font-semibold text-on-surface">{item.title}</h3>
                    <p className="text-sm text-primary-container font-label mb-1">{item.role}</p>
                    <p className="text-on-surface-variant text-body-md leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Response time callout */}
          <div className="mb-12 bg-primary-container/10 border border-primary-container/30 rounded-xl p-6 flex gap-4">
            <Clock className="text-primary-container shrink-0 mt-0.5" size={28} />
            <div>
              <h3 className="font-headline font-bold text-on-surface text-lg mb-1">
                Compromiso de respuesta
              </h3>
              <p className="text-on-surface-variant text-body-md leading-relaxed">
                Kilowatt PR responde a toda solicitud de cotización en menos de 2 horas durante horario
                laboral (Lunes–Viernes, 8:00 AM – 5:00 PM). Si escribes fuera de horario, recibirás
                respuesta a primera hora del siguiente día laborable.
              </p>
            </div>
          </div>

          {/* Team links */}
          <div className="mb-12">
            <h2 className="section-title mb-6">El resto del equipo</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link
                href="/equipo/xavier-acevedo"
                className="block p-5 rounded-lg bg-surface-container-low hover:bg-surface-container-high transition-colors duration-200"
              >
                <p className="font-headline font-semibold text-on-surface">Xavier Acevedo Santiago</p>
                <p className="text-sm text-on-surface-variant mt-1">Fundador y CEO · Perito Electricista Lic. #21309</p>
              </Link>
              <Link
                href="/equipo/julio-santiago-perez"
                className="block p-5 rounded-lg bg-surface-container-low hover:bg-surface-container-high transition-colors duration-200"
              >
                <p className="font-headline font-semibold text-on-surface">Ing. Julio A. Santiago Pérez, PE</p>
                <p className="text-sm text-on-surface-variant mt-1">COO y Asesor de Ingeniería · PE #6083</p>
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-solar-yellow/10 border border-solar-yellow/30 rounded-xl p-6 text-center">
            <p className="text-navy-dark font-bold text-lg mb-2">
              ¿Listo para empezar tu cotización?
            </p>
            <p className="text-on-surface-variant mb-4">
              Escríbele directamente a Kristen por WhatsApp para agendar tu consulta.
            </p>
            <a
              href="https://wa.me/17874312275"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
