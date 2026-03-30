import type { Metadata } from 'next'
import { Gift, MessageCircle, CheckCircle, Users, DollarSign, ArrowRight } from 'lucide-react'
import { FAQSchema } from '@/components/SchemaOrg'
import FAQSection from '@/components/FAQSection'

export const metadata: Metadata = {
  title: 'Programa de Referidos — Gana $500 por Cada Referido',
  description:
    'Refiere a un amigo o familiar a Kilowatt PR y gana $500 por cada instalación completada. Sin límite de referidos. Programa exclusivo para clientes.',
  alternates: { canonical: 'https://www.kilowattpr.com/programa-de-referidos' },
  openGraph: {
    title: 'Programa de Referidos | Kilowatt PR — Gana $500',
    description:
      'Gana $500 por cada persona que refieras a Kilowatt PR y complete su instalación solar.',
    url: 'https://www.kilowattpr.com/programa-de-referidos',
  },
}

const faqs = [
  {
    question: '¿Quién puede participar en el programa de referidos?',
    answer: 'Cualquier cliente actual de Kilowatt PR puede participar. No necesitas haber completado tu instalación — si ya firmaste contrato con nosotros, puedes empezar a referir de inmediato.',
  },
  {
    question: '¿Cómo recibo mi recompensa de $500?',
    answer: 'Una vez que la persona que referiste completa su instalación y el sistema está activo, te contactamos para coordinar tu recompensa. Puedes elegir entre: crédito hacia mantenimiento o upgrade de batería, o pago directo.',
  },
  {
    question: '¿Hay un límite de cuántas personas puedo referir?',
    answer: 'No hay límite. Cada referido que complete una instalación te genera $500. Hemos tenido clientes que han referido 3, 4 y hasta 5 personas de su comunidad o familia.',
  },
  {
    question: '¿Qué recibe la persona que yo refiero?',
    answer: 'La persona que refieras recibe la misma consulta gratis, diseño 3D personalizado y cotización sin compromiso que todos nuestros clientes. Además, al mencionar tu nombre, saben que vienen recomendados por alguien que ya confía en nuestro trabajo.',
  },
]

const steps = [
  {
    num: '01',
    icon: Users,
    title: 'Refiere a Alguien',
    desc: 'Comparte tu experiencia con un amigo, familiar o vecino que esté considerando energía solar. Dales nuestro número de WhatsApp o envíales el enlace de esta página.',
  },
  {
    num: '02',
    icon: MessageCircle,
    title: 'Ellos Nos Contactan',
    desc: 'Tu referido nos contacta por WhatsApp o teléfono y menciona tu nombre. Nosotros nos encargamos del resto: consulta gratis, diseño 3D, cotización sin compromiso.',
  },
  {
    num: '03',
    icon: Gift,
    title: 'Tú Ganas $500',
    desc: 'Cuando tu referido completa su instalación y el sistema está activo, recibes $500. Puedes elegir crédito para mantenimiento, upgrade de batería, o pago directo.',
  },
]

export default function ReferralPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />

      {/* Hero */}
      <section className="bg-surface text-on-surface py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="chip-gold inline-flex items-center gap-2 mb-6">
              <Gift size={12} />
              PROGRAMA DE REFERIDOS
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-on-surface">
              Gana <span className="text-primary-container">$500</span> por Cada Persona que Refieras
            </h1>
            <p className="text-xl text-on-surface-variant leading-relaxed mb-8">
              Ya disfrutas de energía solar. Ahora ayuda a tus amigos y familiares a protegerse
              de los apagones de LUMA — y gana $500 por cada instalación completada. Sin límite.
            </p>
            <a
              href="https://wa.me/17874312275?text=Hola%2C%20quiero%20referir%20a%20alguien%20al%20programa%20de%20referidos."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base px-8 py-4 inline-flex"
            >
              <MessageCircle size={20} />
              Referir a Alguien por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 section-light-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-display-md leading-tight text-[#121240]">
              ¿Cómo Funciona?
            </h2>
            <p className="font-body text-body-lg mt-4 max-w-2xl mx-auto text-[#4A4A6A]">
              3 pasos simples. Tú refieres, nosotros instalamos, tú ganas.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.num} className="card-light text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-display font-black mx-auto mb-5"
                  style={{
                    background: 'linear-gradient(135deg, #E09500, #F5A623)',
                    color: '#3A2400',
                  }}
                >
                  {step.num}
                </div>
                <h3 className="font-headline font-semibold text-[#121240] text-lg mb-3">{step.title}</h3>
                <p className="text-[#4A4A6A] text-body-md leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reward options */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Elige Tu Recompensa</h2>
            <p className="section-subtitle mx-auto">
              $500 por cada referido que complete su instalación. Tú decides cómo recibirlo.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: DollarSign,
                title: 'Pago Directo',
                desc: '$500 en efectivo o transferencia. Simple y directo.',
              },
              {
                icon: Gift,
                title: 'Crédito de Mantenimiento',
                desc: '$500 aplicados hacia lavado y mantenimiento de tus paneles solares.',
              },
              {
                icon: ArrowRight,
                title: 'Upgrade de Batería',
                desc: '$500 de descuento en un upgrade o adición de batería a tu sistema.',
              },
            ].map((option) => (
              <div key={option.title} className="p-6 rounded-lg text-center hover:bg-surface-container-high transition-all duration-300">
                <div className="w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-5"
                  style={{ background: 'rgba(245, 166, 35, 0.12)' }}
                >
                  <option.icon className="text-primary-container" size={28} />
                </div>
                <h3 className="font-headline font-semibold text-on-surface text-lg mb-2">{option.title}</h3>
                <p className="text-on-surface-variant text-body-md leading-relaxed">{option.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="py-16 section-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl font-bold text-[#121240] mb-4">
            147 Familias Ya Confían en Nosotros
          </h2>
          <p className="text-[#4A4A6A] text-lg leading-relaxed mb-8">
            Con 4.9 estrellas en 147 reseñas verificadas, nuestros clientes son nuestros
            mejores embajadores. Cada referido es una familia más protegida contra los
            apagones de LUMA.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/17874312275?text=Hola%2C%20quiero%20referir%20a%20alguien%20al%20programa%20de%20referidos."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base px-8 py-4"
            >
              <MessageCircle size={20} />
              Referir Ahora por WhatsApp
            </a>
            <a
              href="tel:+17874312275"
              className="inline-flex items-center justify-center gap-2 font-label font-semibold tracking-wide rounded-full px-8 py-4 text-base border border-[#121240]/20 text-[#121240] hover:bg-[#121240]/5 transition-all duration-200"
            >
              Llamar al 787-431-2275
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={faqs} title="Preguntas sobre el Programa de Referidos" />
    </>
  )
}
