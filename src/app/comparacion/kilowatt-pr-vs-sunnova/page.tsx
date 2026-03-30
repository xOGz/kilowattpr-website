import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, XCircle, AlertTriangle, Shield, Phone, Star } from 'lucide-react'
import { ArticleSchema, FAQSchema } from '@/components/SchemaOrg'
import FAQSection from '@/components/FAQSection'

export const metadata: Metadata = {
  title: 'Kilowatt PR vs Sunnova: ¿Cuál Instalador Solar es Mejor en Puerto Rico?',
  description:
    'Comparación objetiva entre Kilowatt PR y Sunnova en Puerto Rico. Instalador local con 4.9★ y 147 reseñas vs cadena nacional en Chapter 11. Precios, garantía, servicio y más.',
  alternates: {
    canonical: 'https://www.kilowattpr.com/comparacion/kilowatt-pr-vs-sunnova',
  },
}

const faqs = [
  {
    question: '¿Qué pasó con Sunnova en Puerto Rico?',
    answer:
      'Sunnova Energy International se acogió al Capítulo 11 de bancarrota en 2024. Para clientes existentes en Puerto Rico, esto puede significar incertidumbre sobre garantías, servicio post-venta y mantenimiento de sus sistemas. Los contratos de arrendamiento (lease) y PPA pueden verse afectados dependiendo del proceso de reestructuración.',
  },
  {
    question: '¿Puedo cambiar de Sunnova a Kilowatt PR?',
    answer:
      'Depende de tu contrato actual. Si tienes un sistema arrendado (lease o PPA) con Sunnova, necesitamos revisar los términos de tu acuerdo. Si eres dueño de tu sistema, podemos ofrecerte servicio de mantenimiento, expansión del sistema o reemplazo de equipos. Contáctanos por WhatsApp para una evaluación gratuita de tu situación.',
  },
  {
    question: '¿Cuál es la diferencia entre comprar y arrendar un sistema solar?',
    answer:
      'Cuando compras tu sistema solar con Kilowatt PR, eres dueño del equipo desde el día uno. No hay pagos mensuales al instalador, y todos los ahorros de energía son tuyos. Con un arrendamiento (lease) o PPA, la compañía retiene la propiedad del sistema y tú pagas una tarifa mensual, reduciendo tus ahorros netos y limitando tu control sobre el equipo.',
  },
  {
    question: '¿Kilowatt PR ofrece garantía en sus instalaciones?',
    answer:
      'Sí. Todos nuestros sistemas incluyen garantía del fabricante en paneles (25 años), inversores (10-12 años) y baterías (10 años). Además, ofrecemos garantía de mano de obra en la instalación. Como empresa local en Aguada, nuestro equipo está disponible para cualquier servicio post-venta sin intermediarios.',
  },
]

interface ComparisonRow {
  readonly categoria: string
  readonly kilowatt: string
  readonly sunnova: string
  readonly kilowattPositive: boolean
  readonly sunnovaPositive: boolean
}

const comparaciones: readonly ComparisonRow[] = [
  {
    categoria: 'Tipo de empresa',
    kilowatt: 'Empresa local de Puerto Rico, fundada en Aguada',
    sunnova: 'Cadena nacional con sede en Houston, TX',
    kilowattPositive: true,
    sunnovaPositive: false,
  },
  {
    categoria: 'Estabilidad financiera',
    kilowatt: 'Empresa operativa y en crecimiento',
    sunnova: 'Se acogió al Capítulo 11 de bancarrota (2024)',
    kilowattPositive: true,
    sunnovaPositive: false,
  },
  {
    categoria: '¿Quién instala?',
    kilowatt: 'Equipo propio de técnicos con más de una década de experiencia',
    sunnova: 'Subcontratistas locales que varían por proyecto',
    kilowattPositive: true,
    sunnovaPositive: false,
  },
  {
    categoria: 'Ingeniería',
    kilowatt: 'Ing. Julio A. Santiago Pérez (PE #6083), COO y asesor de ingeniería con 50+ años de experiencia',
    sunnova: 'Ingenieros corporativos sin presencia local permanente',
    kilowattPositive: true,
    sunnovaPositive: false,
  },
  {
    categoria: 'Perito electricista',
    kilowatt: 'Xavier Acevedo Santiago, perito electricista lic. #21309',
    sunnova: 'Depende del subcontratista asignado',
    kilowattPositive: true,
    sunnovaPositive: false,
  },
  {
    categoria: 'Modelo de propiedad',
    kilowatt: 'Compra directa — eres dueño del sistema desde el día uno',
    sunnova: 'Modelos de lease y PPA — Sunnova retiene la propiedad',
    kilowattPositive: true,
    sunnovaPositive: false,
  },
  {
    categoria: 'Transparencia de precios',
    kilowatt: 'Cotización detallada con desglose completo de costos',
    sunnova: 'Estructura de pagos mensuales, costos totales menos visibles',
    kilowattPositive: true,
    sunnovaPositive: false,
  },
  {
    categoria: 'Reseñas verificadas',
    kilowatt: '4.9★ con 147 reseñas verificadas',
    sunnova: 'Múltiples quejas de servicio al cliente en plataformas públicas',
    kilowattPositive: true,
    sunnovaPositive: false,
  },
  {
    categoria: 'Tiempo de respuesta',
    kilowatt: 'Mismo día o siguiente día hábil por WhatsApp o llamada',
    sunnova: 'Call center centralizado con tiempos de espera variables',
    kilowattPositive: true,
    sunnovaPositive: false,
  },
  {
    categoria: 'Experiencia con huracanes',
    kilowatt: 'Equipo operó durante y después del Huracán María',
    sunnova: 'Operaciones dependientes de logística desde EE.UU. continental',
    kilowattPositive: true,
    sunnovaPositive: false,
  },
  {
    categoria: 'Conocimiento de permisos OGPE',
    kilowatt: 'Gestión directa de permisos con experiencia local',
    sunnova: 'Proceso centralizado que puede generar retrasos',
    kilowattPositive: true,
    sunnovaPositive: false,
  },
]

function ComparisonIcon({ positive }: { readonly positive: boolean }) {
  return positive ? (
    <CheckCircle className="text-green-500 shrink-0" size={18} />
  ) : (
    <XCircle className="text-red-400 shrink-0" size={18} />
  )
}

export default function KilowattVsSunnovaPage() {
  const publishDate = '2026-03-15'
  const url = 'https://www.kilowattpr.com/comparacion/kilowatt-pr-vs-sunnova'

  return (
    <>
      <ArticleSchema
        title="Kilowatt PR vs Sunnova: ¿Cuál Instalador Solar es Mejor en Puerto Rico?"
        description="Comparación objetiva entre Kilowatt PR y Sunnova en Puerto Rico. Instalador local vs cadena nacional."
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
            Kilowatt PR vs Sunnova: ¿Cuál Instalador Solar es Mejor en Puerto Rico?
          </h1>

          <p className="article-intro text-xl text-gray-600 leading-relaxed">
            Elegir un instalador solar es una decisión importante. Comparamos a Kilowatt PR, empresa
            local fundada en Aguada, con Sunnova, cadena nacional con sede en Houston. Esta
            comparación se basa en datos públicos y la experiencia real de clientes en Puerto Rico.
          </p>
        </div>

        {/* Bankruptcy notice */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-10 flex gap-3">
          <AlertTriangle className="text-amber-600 shrink-0 mt-0.5" size={22} />
          <div>
            <p className="font-semibold text-amber-900 mb-1">Nota importante sobre Sunnova</p>
            <p className="text-amber-800 text-sm leading-relaxed">
              En 2024, Sunnova Energy International Inc. se acogió al Capítulo 11 de bancarrota
              federal (Chapter 11 bankruptcy). Este es un hecho de registro público. Los clientes
              existentes de Sunnova en Puerto Rico pueden enfrentar incertidumbre sobre la
              continuidad de garantías y servicio post-venta durante el proceso de reestructuración.
            </p>
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
                <th className="text-left px-4 py-3 font-semibold rounded-tr-lg">Sunnova</th>
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
                      <ComparisonIcon positive={row.sunnovaPositive} />
                      <span className="text-gray-500">{row.sunnova}</span>
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
                  <ComparisonIcon positive={row.sunnovaPositive} />
                  <div>
                    <span className="text-xs font-semibold text-gray-400">Sunnova</span>
                    <p className="text-sm text-gray-500">{row.sunnova}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key differentiators */}
        <div className="prose prose-lg max-w-none text-gray-600">
          <h2>¿Por Qué Importa Elegir un Instalador Local en Puerto Rico?</h2>

          <p>
            Puerto Rico tiene condiciones únicas que hacen que la elección de instalador solar sea
            diferente al resto de Estados Unidos. La inestabilidad de la red eléctrica con LUMA
            Energy, la temporada de huracanes, y los procesos de permisos con la OGPE requieren
            un equipo que conozca el territorio, tenga relaciones locales y pueda responder
            rápidamente cuando lo necesites.
          </p>

          <h3>Propiedad del Sistema: Compra vs Arrendamiento</h3>

          <p>
            Una de las diferencias fundamentales es el modelo de propiedad. Con Kilowatt PR,
            compras tu sistema solar y eres dueño desde el primer día. Esto significa que todos
            los ahorros en tu factura de LUMA Energy son tuyos. No hay pagos mensuales al
            instalador, no hay escaladores de precio, y no necesitas permiso de nadie para
            modificar o expandir tu sistema.
          </p>

          <p>
            Sunnova ha operado principalmente con modelos de arrendamiento (lease) y acuerdos de
            compra de energía (PPA), donde la compañía retiene la propiedad del equipo instalado
            en tu techo. El cliente paga una tarifa mensual que, a lo largo de 20 a 25 años,
            puede superar significativamente el costo de comprar el sistema.
          </p>

          <h3>Respaldo de Ingeniería con Experiencia Real</h3>

          <p>
            Cada proyecto de Kilowatt PR cuenta con la supervisión del Ing. Julio A. Santiago
            Pérez (PE #6083), COO y asesor de ingeniería con más de 50 años de experiencia,
            incluyendo trabajo en NASA y docencia en la Universidad de Puerto Rico en Mayagüez.
            Xavier Acevedo Santiago, fundador y perito electricista licenciado (#21309), supervisa
            cada instalación personalmente.
          </p>

          <h3>Servicio Post-Venta Sin Intermediarios</h3>

          <p>
            Cuando necesitas servicio después de la instalación, llamas directamente a Kilowatt PR.
            No hay call center en otro estado, no hay tickets de soporte que se pierden, no hay
            semanas de espera. Nuestro equipo en Aguada responde por WhatsApp o llamada el mismo
            día o el siguiente día hábil.
          </p>
        </div>

        {/* Ratings comparison */}
        <div className="grid md:grid-cols-2 gap-6 my-12">
          <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
            <Shield className="text-green-600 mx-auto mb-3" size={32} />
            <p className="font-bold text-navy-dark text-lg">Kilowatt PR</p>
            <p className="text-3xl font-bold text-green-600 my-2">4.9 ★</p>
            <p className="text-sm text-gray-600">147 reseñas verificadas</p>
            <p className="text-xs text-gray-400 mt-1">Google Business Profile</p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center">
            <AlertTriangle className="text-gray-400 mx-auto mb-3" size={32} />
            <p className="font-bold text-navy-dark text-lg">Sunnova</p>
            <p className="text-sm text-gray-500 my-2">
              Múltiples quejas documentadas en BBB, Trustpilot y foros de consumidores sobre
              tiempos de espera, facturación y servicio al cliente.
            </p>
            <p className="text-xs text-gray-400 mt-1">Fuentes públicas</p>
          </div>
        </div>

        {/* CTA for Sunnova customers */}
        <div className="bg-solar-yellow/10 border border-solar-yellow/30 rounded-xl p-8 text-center my-12">
          <h2 className="text-navy-dark font-bold text-xl mb-3">
            ¿Ex cliente de Sunnova? Te ayudamos con la transición.
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Si tienes un sistema solar instalado por Sunnova y necesitas servicio, mantenimiento,
            o quieres explorar tus opciones, nuestro equipo puede evaluar tu situación sin costo
            ni compromiso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/17874312275?text=Hola%2C%20soy%20ex%20cliente%20de%20Sunnova%20y%20necesito%20ayuda%20con%20mi%20sistema%20solar."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              <Phone size={18} />
              Evaluar Mi Sistema por WhatsApp
            </a>
            <a
              href="tel:+17874312275"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-navy-dark text-navy-dark rounded-lg font-semibold hover:bg-navy-dark hover:text-white transition-colors"
            >
              Llamar al 787-431-2275
            </a>
          </div>
        </div>

        {/* Closing */}
        <div className="prose prose-lg max-w-none text-gray-600">
          <h2>Conclusión</h2>
          <p>
            Elegir un instalador solar es una decisión a largo plazo. En Puerto Rico, donde la
            infraestructura eléctrica presenta desafíos únicos, contar con un equipo local que
            conoce el territorio, tiene credenciales verificables y puede responder rápidamente
            marca una diferencia real en tu experiencia como cliente.
          </p>
          <p>
            Kilowatt PR ofrece instalación directa, propiedad del sistema desde el primer día,
            ingeniería supervisada por un PE con 50+ años de experiencia, y servicio post-venta
            sin intermediarios. Si estás evaluando opciones o necesitas asistencia con un sistema
            existente, estamos disponibles para una consulta gratuita.
          </p>
        </div>
      </article>

      <FAQSection faqs={faqs} title="Preguntas Frecuentes: Kilowatt PR vs Sunnova" />

      {/* Related links */}
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-bold text-navy-dark mb-4">Artículos Relacionados</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/comparacion/instalador-solar-local-vs-cadena-nacional', label: 'Instalador Local vs Cadena Nacional' },
              { href: '/blog/cuanto-cuesta-energia-solar-puerto-rico-2026', label: 'Costos de Energía Solar 2026' },
              { href: '/blog/guia-bateria-respaldo-hogar-puerto-rico', label: 'Guía de Baterías de Respaldo' },
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
