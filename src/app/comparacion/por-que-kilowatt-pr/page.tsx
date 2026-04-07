import type { Metadata } from 'next'
import Link from 'next/link'
import { Check, X, Star, Shield, Clock, MapPin, Phone } from 'lucide-react'
import { ArticleSchema, FAQSchema } from '@/components/SchemaOrg'
import FAQSection from '@/components/FAQSection'

export const metadata: Metadata = {
  title: '¿Por Qué Elegir Kilowatt PR? — Comparación con la Competencia',
  description:
    'Compara a Kilowatt PR con cadenas nacionales e instaladores locales típicos. Perito electricista licenciado, ingeniero PE, precios transparentes desde $13K, batería incluida, 4.9★ en Google.',
  alternates: {
    canonical: 'https://www.kilowattpr.com/comparacion/por-que-kilowatt-pr',
  },
}

const faqs = [
  {
    question: '¿Qué credenciales tiene Kilowatt PR?',
    answer:
      'Kilowatt PR cuenta con Xavier Acevedo Santiago, fundador y perito electricista licenciado (#21309), quien supervisa cada instalación. El Ing. Julio A. Santiago Pérez (PE #6083), COO y asesor de ingeniería, respalda el diseño técnico de cada sistema con más de 50 años de experiencia profesional.',
  },
  {
    question: '¿Por qué incluyen batería en todos los sistemas?',
    answer:
      'En Puerto Rico, la batería de respaldo no es un lujo — es una necesidad. Con la inestabilidad de la red de LUMA Energy y la temporada de huracanes, un sistema solar sin batería te deja sin energía durante apagones. Por eso todos nuestros sistemas desde $13,000 incluyen batería de respaldo.',
  },
  {
    question: '¿Qué significa "inspección 3 meses gratis"?',
    answer:
      'Tres meses después de la instalación, nuestro equipo regresa a tu hogar para inspeccionar el sistema completo sin costo adicional. Verificamos el rendimiento de los paneles, las conexiones eléctricas, el estado de la batería y la producción real vs. la proyectada. Este seguimiento asegura que todo funcione al 100%.',
  },
  {
    question: '¿Cubren toda la isla de Puerto Rico?',
    answer:
      'Sí. Kilowatt PR brinda servicio en los 78 municipios de Puerto Rico. Nuestra base de operaciones en Aguada nos permite cubrir eficientemente toda la costa oeste, y nuestro equipo viaja regularmente a todas las regiones de la isla.',
  },
]

interface ComparisonFeature {
  readonly label: string
  readonly kilowatt: boolean
  readonly cadenaNacional: boolean
  readonly instaladorLocal: boolean
}

const features: readonly ComparisonFeature[] = [
  {
    label: 'Perito electricista licenciado',
    kilowatt: true,
    cadenaNacional: false,
    instaladorLocal: false,
  },
  {
    label: 'Asesor PE de ingeniería',
    kilowatt: true,
    cadenaNacional: false,
    instaladorLocal: false,
  },
  {
    label: 'Instalación directa (no subcontratistas)',
    kilowatt: true,
    cadenaNacional: false,
    instaladorLocal: true,
  },
  {
    label: 'Precios transparentes desde $13K',
    kilowatt: true,
    cadenaNacional: false,
    instaladorLocal: false,
  },
  {
    label: 'Batería incluida',
    kilowatt: true,
    cadenaNacional: false,
    instaladorLocal: false,
  },
  {
    label: 'Diseño para huracanes',
    kilowatt: true,
    cadenaNacional: false,
    instaladorLocal: false,
  },
  {
    label: 'Experiencia OGPE/LUMA',
    kilowatt: true,
    cadenaNacional: false,
    instaladorLocal: true,
  },
  {
    label: 'Tiempo de respuesta < 2 horas',
    kilowatt: true,
    cadenaNacional: false,
    instaladorLocal: false,
  },
  {
    label: 'Garantía paneles 25 años',
    kilowatt: true,
    cadenaNacional: true,
    instaladorLocal: false,
  },
  {
    label: 'Inspección 3 meses gratis',
    kilowatt: true,
    cadenaNacional: false,
    instaladorLocal: false,
  },
  {
    label: 'Reseñas verificadas (4.9★ en Google)',
    kilowatt: true,
    cadenaNacional: false,
    instaladorLocal: false,
  },
]

function FeatureCheck({ value }: { readonly value: boolean }) {
  return value ? (
    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-green-100">
      <Check className="text-green-600" size={16} strokeWidth={3} />
    </span>
  ) : (
    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-red-50">
      <X className="text-red-400" size={16} strokeWidth={3} />
    </span>
  )
}

export default function PorQueKilowattPage() {
  const publishDate = '2026-03-28'
  const url = 'https://www.kilowattpr.com/comparacion/por-que-kilowatt-pr'

  return (
    <>
      <ArticleSchema
        title="¿Por Qué Elegir Kilowatt PR? — Comparación con la Competencia"
        description="Compara a Kilowatt PR con cadenas nacionales e instaladores locales típicos en Puerto Rico."
        datePublished={publishDate}
        url={url}
      />
      <FAQSchema faqs={faqs} />

      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="bg-solar-yellow/10 text-solar-yellow font-medium px-3 py-1 rounded-full text-sm">
            Comparación Completa
          </span>

          <h1 className="text-3xl md:text-4xl font-bold text-navy-dark mt-4 mb-4">
            ¿Por Qué Elegir Kilowatt PR?
          </h1>

          <p className="article-intro text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            No todos los instaladores solares son iguales. Compara lo que ofrece Kilowatt PR
            contra una cadena nacional típica y un instalador local típico en Puerto Rico.
          </p>
        </div>

        {/* 3-Column Comparison Chart — Desktop */}
        <div className="hidden md:block overflow-x-auto mb-14">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-navy-dark text-white">
                <th className="text-left px-5 py-4 font-semibold rounded-tl-lg w-[35%]">
                  Característica
                </th>
                <th className="text-center px-4 py-4 font-semibold w-[22%]">
                  <span className="flex items-center justify-center gap-2">
                    <Star className="text-solar-yellow" size={16} />
                    Kilowatt PR
                  </span>
                </th>
                <th className="text-center px-4 py-4 font-semibold w-[22%]">
                  Cadena Nacional Típica
                </th>
                <th className="text-center px-4 py-4 font-semibold rounded-tr-lg w-[21%]">
                  Instalador Local Típico
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((row, i) => (
                <tr
                  key={row.label}
                  className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
                >
                  <td className="px-5 py-3.5 font-medium text-navy-dark text-sm border-b border-gray-100">
                    {row.label}
                  </td>
                  <td className="px-4 py-3.5 text-center border-b border-gray-100">
                    <span className="flex justify-center">
                      <FeatureCheck value={row.kilowatt} />
                    </span>
                  </td>
                  <td className="px-4 py-3.5 text-center border-b border-gray-100">
                    <span className="flex justify-center">
                      <FeatureCheck value={row.cadenaNacional} />
                    </span>
                  </td>
                  <td className="px-4 py-3.5 text-center border-b border-gray-100">
                    <span className="flex justify-center">
                      <FeatureCheck value={row.instaladorLocal} />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 3-Column Comparison — Mobile Cards */}
        <div className="md:hidden space-y-3 mb-14">
          {features.map((row) => (
            <div key={row.label} className="bg-gray-50 rounded-lg p-4">
              <p className="font-semibold text-navy-dark text-sm mb-3">{row.label}</p>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div>
                  <p className="text-xs font-semibold text-solar-yellow mb-1">Kilowatt PR</p>
                  <span className="flex justify-center">
                    <FeatureCheck value={row.kilowatt} />
                  </span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 mb-1">Cadena Nacional</p>
                  <span className="flex justify-center">
                    <FeatureCheck value={row.cadenaNacional} />
                  </span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 mb-1">Local Típico</p>
                  <span className="flex justify-center">
                    <FeatureCheck value={row.instaladorLocal} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Credentials section */}
        <div className="bg-navy-dark rounded-2xl p-8 md:p-10 mb-14 text-white">
          <h2 className="text-2xl font-bold mb-6 text-center">Nuestras Credenciales</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 rounded-xl p-6">
              <Shield className="text-solar-yellow mb-3" size={28} />
              <p className="font-bold text-lg mb-1">Xavier Acevedo Santiago</p>
              <p className="text-solar-yellow font-medium text-sm mb-2">
                Fundador y Perito Electricista
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                Licencia de perito electricista #21309. Supervisa personalmente cada
                instalación. Más de una década de experiencia en sistemas solares en Puerto Rico.
              </p>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <Shield className="text-solar-yellow mb-3" size={28} />
              <p className="font-bold text-lg mb-1">Ing. Julio A. Santiago Pérez</p>
              <p className="text-solar-yellow font-medium text-sm mb-2">
                COO y Asesor de Ingeniería — PE #6083
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                Ingeniero electricista con 50+ años de experiencia. Ex ingeniero de NASA y
                ex profesor de la Universidad de Puerto Rico, Mayagüez. Respalda el diseño
                técnico de cada sistema.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/20">
            <div className="flex items-center justify-center gap-2 mb-1">
              <Star className="text-solar-yellow fill-solar-yellow" size={20} />
              <Star className="text-solar-yellow fill-solar-yellow" size={20} />
              <Star className="text-solar-yellow fill-solar-yellow" size={20} />
              <Star className="text-solar-yellow fill-solar-yellow" size={20} />
              <Star className="text-solar-yellow fill-solar-yellow" size={20} />
            </div>
            <p className="text-center text-gray-300 text-sm">
              4.9 estrellas en Google — reseñas verificadas en Google Business Profile
            </p>
          </div>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          <div className="bg-solar-yellow/10 rounded-xl p-5 text-center">
            <Star className="text-solar-yellow mx-auto mb-2" size={24} />
            <p className="text-2xl font-bold text-navy-dark">4.9 ★</p>
            <p className="text-xs text-gray-500 mt-1">Reseñas verificadas</p>
          </div>
          <div className="bg-solar-yellow/10 rounded-xl p-5 text-center">
            <Shield className="text-solar-yellow mx-auto mb-2" size={24} />
            <p className="text-2xl font-bold text-navy-dark">10+</p>
            <p className="text-xs text-gray-500 mt-1">Años de experiencia</p>
          </div>
          <div className="bg-solar-yellow/10 rounded-xl p-5 text-center">
            <MapPin className="text-solar-yellow mx-auto mb-2" size={24} />
            <p className="text-2xl font-bold text-navy-dark">78</p>
            <p className="text-xs text-gray-500 mt-1">Municipios cubiertos</p>
          </div>
          <div className="bg-solar-yellow/10 rounded-xl p-5 text-center">
            <Clock className="text-solar-yellow mx-auto mb-2" size={24} />
            <p className="text-2xl font-bold text-navy-dark">2 hrs</p>
            <p className="text-xs text-gray-500 mt-1">Tiempo de respuesta</p>
          </div>
        </div>

        {/* WhatsApp CTA */}
        <div className="bg-solar-yellow/10 border border-solar-yellow/30 rounded-xl p-8 text-center mb-14">
          <h2 className="text-navy-dark font-bold text-xl mb-3">
            ¿Listo para Energía Solar con un Equipo que Cumple?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Solicita una cotización gratuita con desglose completo de costos. Sistemas solares
            con batería incluida desde $13,000. Sin compromisos, sin letra pequeña.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/17874312275?text=Hola%2C%20me%20interesa%20una%20cotizaci%C3%B3n%20de%20sistema%20solar%20con%20Kilowatt%20PR."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              <Phone size={18} />
              Cotización Gratis por WhatsApp
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

      <FAQSection faqs={faqs} title="Preguntas Frecuentes" />

      {/* Related links */}
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-bold text-navy-dark mb-4">Comparaciones Detalladas</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/comparacion/kilowatt-pr-vs-tesla-solar', label: 'Kilowatt PR vs Tesla Solar' },
              { href: '/comparacion/kilowatt-pr-vs-sunnova', label: 'Kilowatt PR vs Sunnova' },
              { href: '/comparacion/instalador-solar-local-vs-cadena-nacional', label: 'Instalador Local vs Cadena Nacional' },
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
