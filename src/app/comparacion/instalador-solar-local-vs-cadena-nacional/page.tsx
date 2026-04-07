import type { Metadata } from 'next'
import Link from 'next/link'
import {
  CheckCircle,
  XCircle,
  MapPin,
  Clock,
  Shield,
  Wrench,
  FileText,
  Heart,
  Phone,
} from 'lucide-react'
import { ArticleSchema, FAQSchema } from '@/components/SchemaOrg'
import FAQSection from '@/components/FAQSection'

export const metadata: Metadata = {
  title: 'Instalador Solar Local vs Cadena Nacional: Por Qué Importa en Puerto Rico',
  description:
    'Descubre por qué elegir un instalador solar local en Puerto Rico marca la diferencia. Respuesta ante huracanes, conocimiento de LUMA y OGPE, servicio directo vs subcontratistas.',
  alternates: {
    canonical:
      'https://www.kilowattpr.com/comparacion/instalador-solar-local-vs-cadena-nacional',
  },
}

const faqs = [
  {
    question:
      '¿Por qué es importante que mi instalador solar sea local en Puerto Rico?',
    answer:
      'Un instalador local conoce las condiciones específicas de Puerto Rico: los procesos de permisos de la OGPE, los requisitos de interconexión de LUMA Energy, los protocolos de huracanes y las características de cada municipio. Además, puede responder rápidamente ante emergencias sin depender de logística desde Estados Unidos continental.',
  },
  {
    question:
      '¿Las cadenas nacionales usan subcontratistas para instalar en Puerto Rico?',
    answer:
      'En la mayoría de los casos, sí. Las cadenas nacionales de energía solar no mantienen equipos de instalación permanentes en Puerto Rico. Contratan subcontratistas locales que pueden variar de proyecto en proyecto, lo que afecta la consistencia de la calidad y dificulta el seguimiento post-instalación.',
  },
  {
    question:
      '¿Qué pasa si necesito servicio después de un huracán y mi instalador es una cadena nacional?',
    answer:
      'Después de un evento climático mayor, las cadenas nacionales enfrentan desafíos logísticos para movilizar personal a Puerto Rico. Los instaladores locales como Kilowatt PR ya están en el territorio, conocen las rutas, tienen relaciones con suplidores locales y pueden responder en horas, no en semanas.',
  },
  {
    question:
      '¿Cómo verifico que un instalador solar es legítimo en Puerto Rico?',
    answer:
      'Verifica que el instalador tenga un perito electricista licenciado con número de licencia vigente del DACO/Junta Examinadora, un ingeniero eléctrico licenciado (PE) para el diseño del sistema, experiencia documentada con permisos de la OGPE, y reseñas verificables en Google Business Profile. Kilowatt PR cuenta con Xavier Acevedo Santiago (perito electricista lic. #21309) y el Ing. Julio A. Santiago Pérez (PE #6083).',
  },
]

interface ComparisonRow {
  readonly categoria: string
  readonly icon: React.ReactNode
  readonly local: string
  readonly nacional: string
  readonly localPositive: boolean
  readonly nacionalPositive: boolean
}

const comparaciones: readonly ComparisonRow[] = [
  {
    categoria: 'Tiempo de respuesta',
    icon: <Clock size={18} className="text-solar-yellow" />,
    local: 'Mismo día o siguiente día hábil',
    nacional: 'Días a semanas, dependiendo de disponibilidad',
    localPositive: true,
    nacionalPositive: false,
  },
  {
    categoria: '¿Quién instala?',
    icon: <Wrench size={18} className="text-solar-yellow" />,
    local: 'Equipo propio con experiencia constante',
    nacional: 'Subcontratistas que varían por proyecto',
    localPositive: true,
    nacionalPositive: false,
  },
  {
    categoria: 'Conocimiento de permisos OGPE',
    icon: <FileText size={18} className="text-solar-yellow" />,
    local: 'Experiencia directa con procesos municipales y estatales',
    nacional: 'Proceso centralizado que puede generar demoras',
    localPositive: true,
    nacionalPositive: false,
  },
  {
    categoria: 'Servicio post-instalación',
    icon: <Shield size={18} className="text-solar-yellow" />,
    local: 'Contacto directo con el mismo equipo que instaló',
    nacional: 'Call center centralizado fuera de Puerto Rico',
    localPositive: true,
    nacionalPositive: false,
  },
  {
    categoria: 'Transparencia de precios',
    icon: <FileText size={18} className="text-solar-yellow" />,
    local: 'Cotización detallada con desglose completo',
    nacional: 'Estructuras de lease/PPA con costos menos visibles',
    localPositive: true,
    nacionalPositive: false,
  },
  {
    categoria: 'Respuesta ante huracanes',
    icon: <Shield size={18} className="text-solar-yellow" />,
    local: 'Ya está en el territorio, responde en horas',
    nacional: 'Depende de movilización desde EE.UU. continental',
    localPositive: true,
    nacionalPositive: false,
  },
  {
    categoria: 'Conocimiento de LUMA Energy',
    icon: <Wrench size={18} className="text-solar-yellow" />,
    local: 'Experiencia diaria con procesos de interconexión',
    nacional: 'Conocimiento limitado de particularidades locales',
    localPositive: true,
    nacionalPositive: false,
  },
  {
    categoria: 'Inversión en la comunidad',
    icon: <Heart size={18} className="text-solar-yellow" />,
    local: 'Emplea técnicos locales, compra a suplidores locales',
    nacional: 'Ganancias y decisiones se toman fuera de la isla',
    localPositive: true,
    nacionalPositive: false,
  },
]

function ComparisonIcon({ positive }: { readonly positive: boolean }) {
  return positive ? (
    <CheckCircle className="text-green-500 shrink-0" size={18} />
  ) : (
    <XCircle className="text-red-400 shrink-0" size={18} />
  )
}

export default function LocalVsNacionalPage() {
  const publishDate = '2026-03-15'
  const url =
    'https://www.kilowattpr.com/comparacion/instalador-solar-local-vs-cadena-nacional'

  return (
    <>
      <ArticleSchema
        title="Instalador Solar Local vs Cadena Nacional: Por Qué Importa en Puerto Rico"
        description="Descubre por qué elegir un instalador solar local en Puerto Rico marca la diferencia."
        datePublished={publishDate}
        url={url}
      />
      <FAQSchema faqs={faqs} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="mb-10">
          <span className="bg-solar-yellow/10 text-solar-yellow font-medium px-3 py-1 rounded-full text-sm">
            Guía del Consumidor
          </span>

          <h1 className="text-3xl md:text-4xl font-bold text-navy-dark mt-4 mb-4">
            Instalador Solar Local vs Cadena Nacional: Por Qué Importa en Puerto Rico
          </h1>

          <p className="article-intro text-xl text-gray-600 leading-relaxed">
            En Puerto Rico, elegir un instalador solar no es solo una decisión financiera.
            Las condiciones únicas de la isla — desde la inestabilidad de LUMA Energy hasta
            la temporada de huracanes — hacen que tener un equipo local sea una ventaja real
            para tu inversión y tu tranquilidad.
          </p>
        </div>

        {/* Why local matters in PR */}
        <div className="prose prose-lg max-w-none text-gray-600 mb-12">
          <h2>¿Por Qué Puerto Rico Es Diferente?</h2>

          <p>
            Instalar paneles solares en Puerto Rico no es igual que en Florida, Texas o
            California. La isla tiene condiciones que requieren experiencia local específica:
          </p>

          <div className="not-prose grid sm:grid-cols-2 gap-4 my-8">
            {[
              {
                icon: <Shield className="text-solar-yellow" size={24} />,
                title: 'Huracanes',
                desc: 'Los sistemas deben soportar vientos categoría 5. Un instalador local sabe exactamente qué estructuras de montaje funcionan aquí.',
              },
              {
                icon: <Wrench className="text-solar-yellow" size={24} />,
                title: 'LUMA Energy',
                desc: 'Los procesos de interconexión y medición neta con LUMA tienen particularidades que solo se aprenden con experiencia directa.',
              },
              {
                icon: <FileText className="text-solar-yellow" size={24} />,
                title: 'Permisos OGPE',
                desc: 'Cada municipio tiene requisitos específicos. Un equipo local navega estos procesos con eficiencia.',
              },
              {
                icon: <MapPin className="text-solar-yellow" size={24} />,
                title: 'Geografía',
                desc: 'Desde la costa hasta la montaña, cada zona tiene condiciones de viento, salinidad y exposición solar distintas.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-gray-50 rounded-lg p-5 flex gap-4"
              >
                <div className="shrink-0 mt-1">{item.icon}</div>
                <div>
                  <p className="font-semibold text-navy-dark mb-1">
                    {item.title}
                  </p>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison table — Desktop */}
        <div className="hidden md:block overflow-x-auto mb-12">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-navy-dark text-white">
                <th className="text-left px-4 py-3 font-semibold rounded-tl-lg">
                  Categoría
                </th>
                <th className="text-left px-4 py-3 font-semibold">
                  <span className="flex items-center gap-2">
                    <MapPin size={16} className="text-solar-yellow" />
                    Instalador Local
                  </span>
                </th>
                <th className="text-left px-4 py-3 font-semibold rounded-tr-lg">
                  Cadena Nacional
                </th>
              </tr>
            </thead>
            <tbody>
              {comparaciones.map((row, i) => (
                <tr
                  key={row.categoria}
                  className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
                >
                  <td className="px-4 py-3 text-sm border-b border-gray-100">
                    <span className="flex items-center gap-2 font-medium text-navy-dark">
                      {row.icon}
                      {row.categoria}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm border-b border-gray-100">
                    <span className="flex items-start gap-2">
                      <ComparisonIcon positive={row.localPositive} />
                      <span className="text-gray-700">{row.local}</span>
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm border-b border-gray-100">
                    <span className="flex items-start gap-2">
                      <ComparisonIcon positive={row.nacionalPositive} />
                      <span className="text-gray-500">{row.nacional}</span>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Comparison cards — Mobile */}
        <div className="md:hidden space-y-4 mb-12">
          {comparaciones.map((row) => (
            <div key={row.categoria} className="bg-gray-50 rounded-lg p-4">
              <p className="font-semibold text-navy-dark text-sm mb-3 flex items-center gap-2">
                {row.icon}
                {row.categoria}
              </p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <ComparisonIcon positive={row.localPositive} />
                  <div>
                    <span className="text-xs font-semibold text-solar-yellow">
                      Instalador Local
                    </span>
                    <p className="text-sm text-gray-700">{row.local}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <ComparisonIcon positive={row.nacionalPositive} />
                  <div>
                    <span className="text-xs font-semibold text-gray-400">
                      Cadena Nacional
                    </span>
                    <p className="text-sm text-gray-500">{row.nacional}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Kilowatt PR profile */}
        <div className="prose prose-lg max-w-none text-gray-600">
          <h2>Kilowatt PR: Instalador Local con Raíces en Puerto Rico</h2>

          <p>
            Kilowatt PR fue fundada en Aguada por Xavier Acevedo Santiago, perito electricista
            licenciado (#21309). El equipo cuenta con el Ing. Julio A. Santiago Pérez (PE
            #6083) como COO y asesor de ingeniería, con más de 50 años de experiencia que
            incluyen trabajo en NASA y docencia en la Universidad de Puerto Rico en Mayagüez.
          </p>

          <p>
            Nuestros técnicos e instaladores tienen más de una década de experiencia en Puerto
            Rico. Operamos durante y después del Huracán María, y conocemos cada municipio de
            la isla. Cuando llamas a Kilowatt PR, hablas directamente con el equipo que va a
            diseñar, instalar y dar servicio a tu sistema solar.
          </p>

          <h3>Lo que significa ser local en la práctica</h3>

          <ul>
            <li>
              <strong>Respuesta inmediata:</strong> Nuestro equipo está en Aguada y sirve a
              toda la isla. Si necesitas servicio, respondemos el mismo día o el siguiente
              día hábil por WhatsApp o llamada.
            </li>
            <li>
              <strong>Permisos sin complicaciones:</strong> Gestionamos directamente los
              permisos con la OGPE y la interconexión con LUMA Energy, con experiencia en
              los requisitos específicos de cada municipio.
            </li>
            <li>
              <strong>Preparación para huracanes:</strong> Diseñamos e instalamos sistemas
              que cumplen con los códigos de construcción para zona de huracanes. Si hay
              un evento, estamos aquí para evaluar y reparar.
            </li>
            <li>
              <strong>Confianza verificable:</strong> 4.9 estrellas en Google con
              reseñas verificadas de clientes reales. Nuestros clientes son tus vecinos.
            </li>
          </ul>
        </div>

        {/* Trust bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-12">
          {[
            { value: '4.9★', label: '10+ reseñas' },
            { value: '10+', label: 'años en PR' },
            { value: '78', label: 'municipios servidos' },
            { value: '24h', label: 'tiempo de respuesta' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-navy-dark rounded-lg p-4 text-center"
            >
              <p className="text-2xl font-bold text-solar-yellow">
                {stat.value}
              </p>
              <p className="text-xs text-gray-300 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Closing content */}
        <div className="prose prose-lg max-w-none text-gray-600">
          <h2>Conclusión: Tu Sistema Solar Merece un Equipo Local</h2>

          <p>
            Un sistema solar es una inversión de 25 años o más. En Puerto Rico, donde las
            condiciones climáticas, regulatorias y de infraestructura eléctrica son únicas,
            contar con un instalador que vive y trabaja en la isla no es un lujo — es una
            necesidad práctica.
          </p>

          <p>
            Las cadenas nacionales pueden tener reconocimiento de marca, pero cuando necesitas
            servicio después de un huracán, cuando tu trámite de LUMA se complica, o cuando
            quieres expandir tu sistema, la diferencia entre llamar a un call center en Houston
            y hablar directamente con tu instalador en Puerto Rico es real y significativa.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-solar-yellow/10 border border-solar-yellow/30 rounded-xl p-8 text-center my-12">
          <h2 className="text-navy-dark font-bold text-xl mb-3">
            Cotización Gratis de un Instalador Local en Puerto Rico
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Nuestro equipo evalúa tu propiedad, diseña un sistema a tu medida y te presenta
            una cotización detallada con desglose completo de costos y proyección de ahorros.
            Sin compromiso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/17874312275?text=Hola%2C%20me%20interesa%20una%20cotizaci%C3%B3n%20para%20paneles%20solares."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              <Phone size={18} />
              Cotización por WhatsApp
            </a>
            <a
              href="tel:+17874312275"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-navy-dark text-navy-dark rounded-lg font-semibold hover:bg-navy-dark hover:text-white transition-colors"
            >
              Llamar al 787-431-2275
            </a>
          </div>
        </div>
      </article>

      <FAQSection
        faqs={faqs}
        title="Preguntas Frecuentes: Instalador Local vs Cadena Nacional"
      />

      {/* Related links */}
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-bold text-navy-dark mb-4">Artículos Relacionados</h3>
          <div className="flex flex-wrap gap-3">
            {[
              {
                href: '/comparacion/kilowatt-pr-vs-sunnova',
                label: 'Kilowatt PR vs Sunnova',
              },
              {
                href: '/blog/cuanto-cuesta-energia-solar-puerto-rico-2026',
                label: 'Costos de Energía Solar 2026',
              },
              {
                href: '/blog/como-funciona-interconexion-luma-energia',
                label: 'Interconexión con LUMA',
              },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-solar-yellow font-medium hover:underline text-sm"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
