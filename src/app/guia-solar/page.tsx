import type { Metadata } from 'next'
import { BookOpen, CheckCircle, Sun, Battery, Shield, Zap } from 'lucide-react'
import LeadCaptureForm from '@/components/LeadCaptureForm'
import { buildAlternates } from '@/lib/alternates'

export const metadata: Metadata = {
  title: 'Guía Completa: Energía Solar en Puerto Rico 2026 — Descarga Gratis',
  description:
    'Descarga gratis la guía definitiva de energía solar en Puerto Rico. Costos, proceso, baterías, LUMA, mantenimiento y más. Todo en un solo documento.',
  ...buildAlternates({ es: '/guia-solar', en: '/en/solar-guide' }),
  openGraph: {
    title: 'Guía Solar Puerto Rico 2026 | Kilowatt PR',
    description:
      'Todo lo que necesitas saber sobre energía solar en Puerto Rico en un solo documento. Descarga gratis.',
    url: 'https://www.kilowattpr.com/guia-solar',
  },
}

const chapters = [
  {
    icon: Sun,
    title: '¿Cómo Funciona la Energía Solar?',
    desc: 'Explicación simple del proceso: paneles, inversor, batería, medidor bidireccional y LUMA.',
  },
  {
    icon: Zap,
    title: 'La Realidad de LUMA Energy',
    desc: 'Por qué Puerto Rico tiene las tarifas más altas de EE.UU. y cómo la solar te protege.',
  },
  {
    icon: Battery,
    title: 'Baterías: ¿Necesito una?',
    desc: 'Por qué la batería es esencial en PR, cómo dimensionarla y qué esperar durante un apagón.',
  },
  {
    icon: Shield,
    title: 'Huracanes y Resiliencia',
    desc: 'Cómo los sistemas solares modernos resisten huracanes categoría 5 y mantienen tu hogar con luz.',
  },
  {
    icon: CheckCircle,
    title: 'El Proceso Paso a Paso',
    desc: 'Desde la consulta gratis hasta la activación: permisos OGPE, interconexión LUMA, plazos reales.',
  },
  {
    icon: BookOpen,
    title: 'Checklist del Comprador',
    desc: '10 preguntas que debes hacer antes de contratar un instalador solar en Puerto Rico.',
  },
]

export default function GuiaSolarPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-surface text-on-surface py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="chip-gold inline-flex items-center gap-2 mb-6">
                <BookOpen size={12} />
                DESCARGA GRATIS
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-on-surface">
                Guía Completa: Energía Solar en{' '}
                <span className="text-primary-container">Puerto Rico 2026</span>
              </h1>
              <p className="text-xl text-on-surface-variant leading-relaxed mb-6">
                Todo lo que necesitas saber antes de instalar paneles solares — costos reales,
                proceso, baterías, LUMA, huracanes y mantenimiento. En un solo documento,
                escrito por nuestro equipo de ingeniería.
              </p>
              <div className="flex flex-wrap gap-3 text-sm text-on-surface-variant">
                <span className="flex items-center gap-1.5">
                  <CheckCircle size={14} className="text-primary-container" /> Gratis y sin compromiso
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle size={14} className="text-primary-container" /> Datos reales de PR
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle size={14} className="text-primary-container" /> Escrita por ingeniero PE
                </span>
              </div>
            </div>
            <div className="bg-surface-container-high rounded-2xl p-8">
              <h3 className="font-headline font-semibold text-on-surface text-lg mb-2">
                Descarga la Guía Gratis
              </h3>
              <p className="text-on-surface-variant text-sm mb-5">
                Ingresa tu email y te enviamos la guía al instante.
              </p>
              <LeadCaptureForm source="guia-solar" buttonText="Descargar Guía Gratis" />
            </div>
          </div>
        </div>
      </section>

      {/* What's inside */}
      <section className="py-20 section-light-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-display-md leading-tight text-[#121240]">
              ¿Qué Incluye la Guía?
            </h2>
            <p className="font-body text-body-lg mt-4 max-w-2xl mx-auto text-[#4A4A6A]">
              6 capítulos con toda la información que necesitas para tomar la mejor decisión.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {chapters.map((ch) => (
              <div key={ch.title} className="card-light">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: 'rgba(245, 166, 35, 0.1)' }}
                >
                  <ch.icon className="text-[#E09500]" size={24} />
                </div>
                <h3 className="font-headline font-semibold text-[#121240] mb-2">{ch.title}</h3>
                <p className="text-[#4A4A6A] text-body-md leading-relaxed">{ch.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 section-cta">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-[#3A2400] mb-4">
            ¿Prefieres una Consulta Personalizada?
          </h2>
          <p className="text-lg text-[#6B4400] mb-8 leading-relaxed">
            La guía te da la base. La consulta gratis te da un diseño 3D de tu techo,
            análisis de consumo y cotización exacta. Sin compromiso.
          </p>
          <a
            href="https://wa.me/17874312275"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base px-8 py-4 inline-flex"
          >
            Cotización Gratis por WhatsApp
          </a>
        </div>
      </section>
    </>
  )
}
