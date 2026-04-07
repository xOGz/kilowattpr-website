import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, XCircle, Shield, Phone, Star, Clock, MapPin, Wrench } from 'lucide-react'
import { ArticleSchema, FAQSchema } from '@/components/SchemaOrg'
import FAQSection from '@/components/FAQSection'

export const metadata: Metadata = {
  title: 'Kilowatt PR vs Tesla Solar Puerto Rico: Comparación Completa',
  description:
    'Comparación detallada entre Kilowatt PR y Tesla Solar en Puerto Rico. Presencia local, instalación directa, soporte post-venta, precios transparentes y más. 4.9★ en Google.',
  alternates: {
    canonical: 'https://www.kilowattpr.com/comparacion/kilowatt-pr-vs-tesla-solar',
  },
}

const faqs = [
  {
    question: '¿Tesla Solar instala directamente en Puerto Rico?',
    answer:
      'Tesla frecuentemente utiliza subcontratistas para instalaciones en Puerto Rico. No mantiene un equipo de instalación local permanente en la isla. Esto puede afectar la consistencia de la calidad y el tiempo de respuesta post-instalación. Kilowatt PR instala con su propio equipo de técnicos con más de una década de experiencia en Puerto Rico.',
  },
  {
    question: '¿Puedo comprar un Tesla Powerwall a través de Kilowatt PR?',
    answer:
      'Kilowatt PR trabaja con múltiples marcas de baterías de respaldo de alta calidad. Si bien el Tesla Powerwall es un producto popular, la disponibilidad directa depende de Tesla. Nosotros podemos recomendar la mejor batería para tu hogar basándonos en tu consumo, presupuesto y necesidades específicas.',
  },
  {
    question: '¿Cuál es la diferencia de precio entre Tesla Solar y Kilowatt PR?',
    answer:
      'Kilowatt PR ofrece sistemas solares con batería incluida desde $13,000, con cotización detallada y desglose completo de costos. Tesla utiliza un modelo de precio fijo por vatio que puede variar significativamente según disponibilidad y logística a Puerto Rico. Con Kilowatt PR, sabes exactamente lo que pagas desde el primer día.',
  },
  {
    question: '¿Qué pasa si necesito servicio técnico después de instalar con Tesla en Puerto Rico?',
    answer:
      'El soporte post-venta de Tesla en Puerto Rico se gestiona a través de canales centralizados en Estados Unidos continental, lo que puede resultar en tiempos de espera prolongados. Kilowatt PR está en Aguada y responde por WhatsApp o llamada en un máximo de 2 horas durante horario laboral.',
  },
]

interface ComparisonRow {
  readonly categoria: string
  readonly kilowatt: string
  readonly tesla: string
  readonly kilowattPositive: boolean
  readonly teslaPositive: boolean
}

const comparaciones: readonly ComparisonRow[] = [
  {
    categoria: 'Presencia local en Puerto Rico',
    kilowatt: 'Oficina y equipo permanente en Aguada, PR',
    tesla: 'Sin oficina física ni equipo permanente en la isla',
    kilowattPositive: true,
    teslaPositive: false,
  },
  {
    categoria: '¿Quién instala?',
    kilowatt: 'Equipo propio de técnicos con 10+ años de experiencia',
    tesla: 'Frecuentemente utiliza subcontratistas en PR',
    kilowattPositive: true,
    teslaPositive: false,
  },
  {
    categoria: 'Disponibilidad de baterías',
    kilowatt: 'Baterías incluidas en todos los sistemas desde $13K',
    tesla: 'Powerwall con disponibilidad variable y tiempos de espera',
    kilowattPositive: true,
    teslaPositive: false,
  },
  {
    categoria: 'Modelo de precios',
    kilowatt: 'Cotización detallada con desglose completo de costos',
    tesla: 'Precio fijo por vatio, menos personalización',
    kilowattPositive: true,
    teslaPositive: false,
  },
  {
    categoria: 'Conocimiento de permisos OGPE',
    kilowatt: 'Gestión directa con experiencia local en permisos',
    tesla: 'Proceso centralizado desde EE.UU. continental',
    kilowattPositive: true,
    teslaPositive: false,
  },
  {
    categoria: 'Tiempo de respuesta',
    kilowatt: 'Máximo 2 horas por WhatsApp en horario laboral',
    tesla: 'Soporte centralizado con tiempos de espera variables',
    kilowattPositive: true,
    teslaPositive: false,
  },
  {
    categoria: 'Experiencia con huracanes',
    kilowatt: 'Operó durante y después del Huracán María',
    tesla: 'Logística dependiente de EE.UU. continental',
    kilowattPositive: true,
    teslaPositive: false,
  },
  {
    categoria: 'Servicio al cliente',
    kilowatt: 'Contacto directo con el equipo por WhatsApp o llamada',
    tesla: 'Call center automatizado, sin contacto local directo',
    kilowattPositive: true,
    teslaPositive: false,
  },
  {
    categoria: 'Reseñas verificadas',
    kilowatt: '4.9★ con 10+ reseñas en Google Business Profile',
    tesla: 'Reseñas mixtas para operaciones en Puerto Rico',
    kilowattPositive: true,
    teslaPositive: false,
  },
  {
    categoria: 'Soporte de garantía',
    kilowatt: 'Equipo local gestiona garantías sin intermediarios',
    tesla: 'Proceso de garantía gestionado desde EE.UU. continental',
    kilowattPositive: true,
    teslaPositive: false,
  },
]

function ComparisonIcon({ positive }: { readonly positive: boolean }) {
  return positive ? (
    <CheckCircle className="text-green-500 shrink-0" size={18} />
  ) : (
    <XCircle className="text-red-400 shrink-0" size={18} />
  )
}

export default function KilowattVsTeslaPage() {
  const publishDate = '2026-03-28'
  const url = 'https://www.kilowattpr.com/comparacion/kilowatt-pr-vs-tesla-solar'

  return (
    <>
      <ArticleSchema
        title="Kilowatt PR vs Tesla Solar Puerto Rico: Comparación Completa"
        description="Comparación detallada entre Kilowatt PR y Tesla Solar en Puerto Rico. Presencia local, instalación directa, soporte y precios."
        datePublished={publishDate}
        url={url}
      />
      <FAQSchema faqs={faqs} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="mb-10">
          <span className="bg-solar-yellow/10 text-solar-yellow font-medium px-3 py-1 rounded-full text-sm">
            Comparación de Instaladores
          </span>

          <h1 className="text-3xl md:text-4xl font-bold text-navy-dark mt-4 mb-4">
            Kilowatt PR vs Tesla Solar Puerto Rico: Comparación Completa
          </h1>

          <p className="article-intro text-xl text-gray-600 leading-relaxed">
            Tesla es una marca reconocida mundialmente, pero ¿es la mejor opción para instalar
            solar en Puerto Rico? Comparamos a Kilowatt PR, empresa local con equipo propio
            en Aguada, con Tesla Solar, que opera en la isla sin presencia permanente.
          </p>
        </div>

        {/* Key advantage callout */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-10">
          <div className="flex items-start gap-3">
            <MapPin className="text-green-600 shrink-0 mt-0.5" size={22} />
            <div>
              <p className="font-semibold text-green-900 mb-1">La ventaja local importa</p>
              <p className="text-green-800 text-sm leading-relaxed">
                En Puerto Rico, la presencia local no es solo conveniencia — es la diferencia
                entre recibir servicio en horas o en semanas. Kilowatt PR tiene oficina, equipo
                y relaciones con suplidores directamente en la isla, lo que permite respuesta
                inmediata ante huracanes, apagones de LUMA y necesidades de servicio.
              </p>
            </div>
          </div>
        </div>

        {/* Comparison table — Desktop */}
        <div className="hidden md:block overflow-x-auto mb-12">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-navy-dark text-white">
                <th className="text-left px-4 py-3 font-semibold rounded-tl-lg">Categoría</th>
                <th className="text-left px-4 py-3 font-semibold">
                  <span className="flex items-center gap-2">
                    <Star className="text-solar-yellow" size={16} />
                    Kilowatt PR
                  </span>
                </th>
                <th className="text-left px-4 py-3 font-semibold rounded-tr-lg">Tesla Solar</th>
              </tr>
            </thead>
            <tbody>
              {comparaciones.map((row, i) => (
                <tr
                  key={row.categoria}
                  className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
                >
                  <td className="px-4 py-3 font-medium text-navy-dark text-sm border-b border-gray-100">
                    {row.categoria}
                  </td>
                  <td className="px-4 py-3 text-sm border-b border-gray-100">
                    <span className="flex items-start gap-2">
                      <ComparisonIcon positive={row.kilowattPositive} />
                      <span className="text-gray-700">{row.kilowatt}</span>
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm border-b border-gray-100">
                    <span className="flex items-start gap-2">
                      <ComparisonIcon positive={row.teslaPositive} />
                      <span className="text-gray-500">{row.tesla}</span>
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
              <p className="font-semibold text-navy-dark text-sm mb-3">{row.categoria}</p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <ComparisonIcon positive={row.kilowattPositive} />
                  <div>
                    <span className="text-xs font-semibold text-solar-yellow">Kilowatt PR</span>
                    <p className="text-sm text-gray-700">{row.kilowatt}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <ComparisonIcon positive={row.teslaPositive} />
                  <div>
                    <span className="text-xs font-semibold text-gray-400">Tesla Solar</span>
                    <p className="text-sm text-gray-500">{row.tesla}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Advantages section */}
        <div className="prose prose-lg max-w-none text-gray-600">
          <h2>Las Ventajas de Kilowatt PR en Puerto Rico</h2>

          <h3>Equipo Local con Credenciales Verificables</h3>
          <p>
            Kilowatt PR cuenta con Xavier Acevedo Santiago, fundador y perito electricista
            licenciado (#21309), quien supervisa cada instalación personalmente. El Ing. Julio
            A. Santiago Pérez (PE #6083), COO y asesor de ingeniería con más de 50 años de
            experiencia, respalda el diseño de cada sistema. Tesla no ofrece este nivel de
            supervisión local personalizada en Puerto Rico.
          </p>

          <h3>Instalación Directa, No Subcontratistas</h3>
          <p>
            Cuando contratas a Kilowatt PR, nuestro propio equipo de técnicos con más de una
            década de experiencia instala tu sistema. No subcontratamos. Tesla, al no mantener
            un equipo permanente en la isla, frecuentemente depende de subcontratistas locales
            que pueden variar de proyecto en proyecto.
          </p>

          <h3>Diseño para Huracanes</h3>
          <p>
            Nuestros sistemas están diseñados específicamente para las condiciones climáticas
            de Puerto Rico, incluyendo vientos de huracán. Nuestro equipo operó durante y
            después del Huracán María — conocemos de primera mano lo que estos sistemas
            necesitan para sobrevivir y seguir generando energía cuando más se necesita.
          </p>

          <h3>Precios Transparentes con Batería Incluida</h3>
          <p>
            Kilowatt PR ofrece sistemas solares completos con batería de respaldo incluida
            desde $13,000. Cada cotización incluye un desglose detallado de todos los costos.
            Sin sorpresas, sin cargos ocultos, sin escaladores de precio. Tesla maneja un
            modelo de precio por vatio que puede variar y donde la batería se cotiza por
            separado.
          </p>

          <h3>Respuesta en 2 Horas</h3>
          <p>
            En Puerto Rico, donde los apagones de LUMA Energy pueden ocurrir en cualquier
            momento, el tiempo de respuesta importa. Kilowatt PR responde por WhatsApp o
            llamada en un máximo de 2 horas durante horario laboral. Con Tesla, el soporte
            se gestiona a través de canales centralizados en Estados Unidos continental.
          </p>
        </div>

        {/* Ratings comparison */}
        <div className="grid md:grid-cols-2 gap-6 my-12">
          <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
            <Shield className="text-green-600 mx-auto mb-3" size={32} />
            <p className="font-bold text-navy-dark text-lg">Kilowatt PR</p>
            <p className="text-3xl font-bold text-green-600 my-2">4.9 ★</p>
            <p className="text-sm text-gray-600">10+ reseñas verificadas</p>
            <p className="text-xs text-gray-400 mt-1">Google Business Profile</p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center">
            <Clock className="text-gray-400 mx-auto mb-3" size={32} />
            <p className="font-bold text-navy-dark text-lg">Tesla Solar PR</p>
            <p className="text-sm text-gray-500 my-2">
              Tiempos de espera prolongados reportados por clientes en Puerto Rico.
              Soporte limitado sin presencia local permanente.
            </p>
            <p className="text-xs text-gray-400 mt-1">Experiencias reportadas en foros públicos</p>
          </div>
        </div>

        {/* WhatsApp CTA */}
        <div className="bg-solar-yellow/10 border border-solar-yellow/30 rounded-xl p-8 text-center my-12">
          <h2 className="text-navy-dark font-bold text-xl mb-3">
            ¿Comparando Opciones Solares en Puerto Rico?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Solicita una cotización gratuita y detallada con Kilowatt PR. Te mostramos
            exactamente lo que incluye tu sistema, el ahorro proyectado y el proceso
            completo de instalación — sin compromisos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/17874312275?text=Hola%2C%20estoy%20comparando%20instaladores%20solares%20y%20me%20gustar%C3%ADa%20una%20cotizaci%C3%B3n%20de%20Kilowatt%20PR."
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

      <FAQSection faqs={faqs} title="Preguntas Frecuentes: Kilowatt PR vs Tesla Solar" />

      {/* Related links */}
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-bold text-navy-dark mb-4">Comparaciones Relacionadas</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/comparacion/kilowatt-pr-vs-sunnova', label: 'Kilowatt PR vs Sunnova' },
              { href: '/comparacion/por-que-kilowatt-pr', label: '¿Por Qué Kilowatt PR?' },
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
