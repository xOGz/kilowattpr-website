import type { Metadata } from 'next'
import Link from 'next/link'
import {
  AlertTriangle,
  BatteryCharging,
  Clock,
  Phone,
  Shield,
  Star,
  Sun,
  Zap,
} from 'lucide-react'
import { ArticleSchema, FAQSchema } from '@/components/SchemaOrg'
import FAQSection from '@/components/FAQSection'

export const metadata: Metadata = {
  title: 'Prepara tu Hogar Antes de la Temporada de Huracanes 2026 | Kilowatt PR',
  description:
    'La temporada de huracanes 2026 comienza el 1 de junio. Instala paneles solares con batería de respaldo para proteger tu familia. Sistemas desde $13,000. Kilowatt PR — 4.9★ / 147 reseñas.',
  keywords:
    'temporada huracanes puerto rico 2026 solar, huracanes puerto rico, batería respaldo huracanes, paneles solares huracanes, energía solar Puerto Rico',
  alternates: {
    canonical: 'https://www.kilowattpr.com/temporada-huracanes-2026',
  },
}

const faqs = [
  {
    question: '¿Los paneles solares sobreviven un huracán en Puerto Rico?',
    answer:
      'Sí, cuando están instalados correctamente. Los sistemas que instala Kilowatt PR están diseñados para soportar vientos de huracán. Utilizamos montaje reforzado, conectores resistentes y seguimos todas las especificaciones del código de construcción de Puerto Rico para zonas de alto viento. Nuestro equipo tiene experiencia directa del Huracán María y diseña cada sistema con esas lecciones en mente.',
  },
  {
    question: '¿Cuánto tiempo puede durar mi batería durante un apagón por huracán?',
    answer:
      'Depende del tamaño de la batería y tu consumo, pero un sistema típico puede alimentar cargas esenciales (nevera, abanicos, luces, cargadores, router de internet) entre 8 y 24 horas sin sol. Cuando sale el sol al día siguiente, los paneles recargan la batería, creando un ciclo de energía continua mientras dure la emergencia.',
  },
  {
    question: '¿Da tiempo instalar un sistema solar antes de junio 2026?',
    answer:
      'Sí. El proceso completo — desde la cotización hasta la instalación y conexión con LUMA — típicamente toma entre 4 y 8 semanas. Si contactas a Kilowatt PR ahora, puedes tener tu sistema operando antes de que comience la temporada de huracanes el 1 de junio.',
  },
  {
    question: '¿Qué pasa con mi sistema solar si se va la luz de LUMA durante un huracán?',
    answer:
      'Tu sistema solar con batería funciona de forma independiente durante apagones de LUMA. Cuando la red se cae, tu sistema se desconecta automáticamente de la red (anti-islanding) y tu batería comienza a alimentar tu hogar. Durante el día, los paneles recargan la batería. Tu familia mantiene energía mientras los vecinos esperan a LUMA.',
  },
]

export default function TemporadaHuracanes2026Page() {
  const publishDate = '2026-03-28'
  const url = 'https://www.kilowattpr.com/temporada-huracanes-2026'

  return (
    <>
      <ArticleSchema
        title="Prepara tu Hogar Antes de la Temporada de Huracanes 2026"
        description="La temporada de huracanes 2026 comienza el 1 de junio. Instala paneles solares con batería de respaldo para proteger tu familia."
        datePublished={publishDate}
        url={url}
      />
      <FAQSchema faqs={faqs} />

      {/* Hero Section */}
      <section className="bg-navy-dark text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy-dark to-red-900/30" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-red-500/20 text-red-300 font-semibold px-4 py-2 rounded-full text-sm mb-6">
            <AlertTriangle size={16} />
            Temporada de Huracanes 2026
          </div>

          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            La temporada de huracanes comienza el 1 de junio.
            <span className="block text-solar-yellow mt-2">
              ¿Tu familia está protegida?
            </span>
          </h1>

          <p className="article-intro text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Cada temporada de huracanes, familias en Puerto Rico pasan días — a veces
            semanas — sin electricidad. Con un sistema solar y batería de respaldo,
            tu hogar mantiene energía cuando LUMA no puede.
          </p>

          <a
            href="https://wa.me/17874312275?text=Hola%2C%20quiero%20instalar%20solar%20antes%20de%20la%20temporada%20de%20huracanes%202026."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center justify-center gap-2 text-lg px-8 py-4"
          >
            <Phone size={20} />
            Protege tu Hogar — Cotización Gratis
          </a>

          <p className="text-gray-400 text-sm mt-4">
            Sistemas desde $13,000 con batería incluida
          </p>
        </div>
      </section>

      {/* Timeline urgency */}
      <section className="py-14 bg-red-50 border-b border-red-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Clock className="text-red-600" size={24} />
            <h2 className="text-xl md:text-2xl font-bold text-navy-dark">
              Instala Antes de Junio — El Proceso Completo
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {[
              {
                step: 'Semana 1',
                title: 'Cotización y diseño',
                desc: 'Evaluamos tu consumo, diseñamos el sistema ideal y te damos precio fijo.',
              },
              {
                step: 'Semana 2-3',
                title: 'Permisos OGPE',
                desc: 'Gestionamos todos los permisos necesarios con la OGPE directamente.',
              },
              {
                step: 'Semana 3-5',
                title: 'Instalación',
                desc: 'Nuestro equipo propio instala tu sistema. Sin subcontratistas.',
              },
              {
                step: 'Semana 5-8',
                title: 'Conexión LUMA',
                desc: 'Completamos el proceso de interconexión con LUMA Energy.',
              },
            ].map((item) => (
              <div key={item.step} className="bg-white rounded-xl p-5 border border-red-100">
                <p className="text-red-600 font-bold text-sm mb-1">{item.step}</p>
                <p className="font-semibold text-navy-dark mb-1">{item.title}</p>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-red-700 font-medium mt-6 text-sm">
            Si contactas ahora, tu sistema puede estar operando antes del 1 de junio de 2026.
          </p>
        </div>
      </section>

      {/* Section 1: Why solar + battery during hurricanes */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <Sun className="text-solar-yellow mx-auto mb-4" size={36} />
            <h2 className="text-2xl md:text-3xl font-bold text-navy-dark mb-4">
              ¿Por Qué Solar + Batería Durante Huracanes?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Después del Huracán María, Puerto Rico estuvo sin electricidad por meses.
              LUMA Energy no ha resuelto la fragilidad de la red. Un sistema solar con
              batería es tu independencia energética.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <BatteryCharging className="text-green-600 mb-3" size={28} />
              <h3 className="font-bold text-navy-dark mb-2">Energía Cuando LUMA Falla</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Tu batería se activa automáticamente cuando se va la luz. Sin generador,
                sin gasolina, sin ruido. Energía limpia y silenciosa para tu familia.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <Sun className="text-solar-yellow mb-3" size={28} />
              <h3 className="font-bold text-navy-dark mb-2">Recarga con el Sol</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Después del huracán, tus paneles recargan la batería cada día. Mientras
                tus vecinos buscan gasolina para el generador, tu sistema se recarga solo.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <Shield className="text-blue-600 mb-3" size={28} />
              <h3 className="font-bold text-navy-dark mb-2">Diseñado para Vientos</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Nuestros sistemas están instalados con montaje reforzado siguiendo
                código de construcción de Puerto Rico para zonas de alto viento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="py-10 bg-solar-yellow/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-navy-dark font-bold text-lg mb-4">
            No esperes a que se acerque un huracán para actuar.
          </p>
          <a
            href="https://wa.me/17874312275?text=Hola%2C%20quiero%20proteger%20mi%20hogar%20antes%20de%20la%20temporada%20de%20huracanes."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center justify-center gap-2"
          >
            <Phone size={18} />
            Cotización Gratis por WhatsApp
          </a>
        </div>
      </section>

      {/* Section 2: What you can power */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <Zap className="text-solar-yellow mx-auto mb-4" size={36} />
            <h2 className="text-2xl md:text-3xl font-bold text-navy-dark mb-4">
              ¿Qué Puedes Alimentar Durante un Apagón?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Un sistema solar con batería de respaldo mantiene funcionando lo esencial
              de tu hogar durante un apagón prolongado.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { item: 'Nevera', icon: '🧊', hours: '24/7' },
              { item: 'Abanicos', icon: '💨', hours: '24/7' },
              { item: 'Luces LED', icon: '💡', hours: '24/7' },
              { item: 'Cargadores', icon: '🔌', hours: '24/7' },
              { item: 'Router WiFi', icon: '📡', hours: '24/7' },
              { item: 'TV', icon: '📺', hours: '8-12 hrs' },
              { item: 'Microondas', icon: '🍳', hours: 'Uso moderado' },
              { item: 'Bomba de agua', icon: '💧', hours: 'Ciclos' },
            ].map((device) => (
              <div
                key={device.item}
                className="bg-green-50 rounded-lg p-4 text-center border border-green-100"
              >
                <p className="text-2xl mb-1">{device.icon}</p>
                <p className="font-semibold text-navy-dark text-sm">{device.item}</p>
                <p className="text-xs text-green-700 mt-1">{device.hours}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-500 text-xs mt-4">
            * Duración depende del tamaño de batería y consumo. Basado en sistema típico residencial.
          </p>
        </div>
      </section>

      {/* Section 3: How fast we can install */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <Clock className="text-solar-yellow mx-auto mb-4" size={36} />
            <h2 className="text-2xl md:text-3xl font-bold text-navy-dark mb-4">
              Instalamos Rápido — Tu Sistema Antes de Junio
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nuestro equipo propio, con experiencia en permisos OGPE y procesos LUMA,
              acelera cada paso para que tengas tu sistema funcionando a tiempo.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
              <p className="text-3xl font-bold text-solar-yellow mb-2">4-8</p>
              <p className="font-semibold text-navy-dark">Semanas de inicio a fin</p>
              <p className="text-sm text-gray-500 mt-2">
                Desde cotización hasta sistema conectado y operando con LUMA
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
              <p className="text-3xl font-bold text-solar-yellow mb-2">0</p>
              <p className="font-semibold text-navy-dark">Subcontratistas</p>
              <p className="text-sm text-gray-500 mt-2">
                Nuestro propio equipo de técnicos instala tu sistema de principio a fin
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
              <p className="text-3xl font-bold text-solar-yellow mb-2">2 hrs</p>
              <p className="font-semibold text-navy-dark">Tiempo de respuesta</p>
              <p className="text-sm text-gray-500 mt-2">
                Respondemos por WhatsApp o llamada en horario laboral
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-solar-yellow/5 border border-solar-yellow/20 rounded-2xl p-8 md:p-10">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-solar-yellow fill-solar-yellow" size={18} />
              ))}
            </div>
            <blockquote className="text-lg md:text-xl text-navy-dark leading-relaxed mb-6 italic">
              &ldquo;Después de María estuvimos 4 meses sin luz. Cuando instalamos
              el sistema solar con Kilowatt PR, fue la mejor decisión. El último apagón
              de LUMA, mientras los vecinos estaban a oscuras, nosotros teníamos nevera,
              abanicos y hasta el WiFi funcionando. Mis hijos pudieron seguir con sus
              clases online. No tiene precio esa tranquilidad.&rdquo;
            </blockquote>
            <div>
              <p className="font-bold text-navy-dark">Carmen T.</p>
              <p className="text-sm text-gray-500">Rincón, Puerto Rico</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing anchor */}
      <section className="py-16 bg-navy-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Sistemas Desde $13,000 con Batería Incluida
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-4">
            Cada sistema incluye paneles solares, batería de respaldo, inversor,
            instalación completa, permisos OGPE y proceso de interconexión con LUMA.
            Precio fijo, sin sorpresas.
          </p>

          <div className="flex flex-wrap justify-center gap-6 my-8">
            <div className="text-center">
              <p className="text-sm text-gray-400">Paneles</p>
              <p className="text-lg font-bold">25 años garantía</p>
            </div>
            <div className="w-px bg-white/20 hidden md:block" />
            <div className="text-center">
              <p className="text-sm text-gray-400">Baterías</p>
              <p className="text-lg font-bold">10 años garantía</p>
            </div>
            <div className="w-px bg-white/20 hidden md:block" />
            <div className="text-center">
              <p className="text-sm text-gray-400">Inversores</p>
              <p className="text-lg font-bold">10-12 años garantía</p>
            </div>
            <div className="w-px bg-white/20 hidden md:block" />
            <div className="text-center">
              <p className="text-sm text-gray-400">Inspección</p>
              <p className="text-lg font-bold">3 meses gratis</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/17874312275?text=Hola%2C%20quiero%20cotizar%20un%20sistema%20solar%20para%20proteger%20mi%20hogar%20antes%20de%20la%20temporada%20de%20huracanes%202026."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center justify-center gap-2 text-lg px-8 py-4"
            >
              <Phone size={20} />
              Cotización Gratis por WhatsApp
            </a>
            <a
              href="tel:+17874312275"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-navy-dark transition-colors"
            >
              Llamar al 787-431-2275
            </a>
          </div>

          <p className="text-gray-400 text-xs mt-6">
            Xavier Acevedo Santiago — Perito Electricista Lic. #21309 | Ing. Julio A. Santiago Pérez — PE #6083
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} title="Preguntas Sobre Huracanes y Energía Solar" />

      {/* Final CTA */}
      <section className="py-14 bg-red-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AlertTriangle className="text-red-600 mx-auto mb-4" size={32} />
          <h2 className="text-xl md:text-2xl font-bold text-navy-dark mb-3">
            La Temporada de Huracanes No Espera
          </h2>
          <p className="text-gray-600 mb-6">
            Cada año, familias en Puerto Rico dicen &ldquo;el próximo año instalo solar&rdquo;
            — hasta que llega el huracán y ya es tarde. No repitas ese error.
            Contacta a Kilowatt PR hoy.
          </p>
          <a
            href="https://wa.me/17874312275?text=Hola%2C%20quiero%20instalar%20solar%20antes%20de%20la%20temporada%20de%20huracanes.%20%C2%BFMe%20pueden%20cotizar%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center justify-center gap-2"
          >
            <Phone size={18} />
            Actúa Ahora — WhatsApp
          </a>
        </div>
      </section>

      {/* Related links */}
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-bold text-navy-dark mb-4">Recursos Relacionados</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/blog/guia-bateria-respaldo-hogar-puerto-rico', label: 'Guía de Baterías de Respaldo' },
              { href: '/comparacion/por-que-kilowatt-pr', label: '¿Por Qué Kilowatt PR?' },
              { href: '/calculadora-solar', label: 'Calculadora Solar' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="text-solar-yellow font-medium hover:underline text-sm">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
