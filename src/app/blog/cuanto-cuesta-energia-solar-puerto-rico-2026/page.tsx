import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, User } from 'lucide-react'
import { ArticleSchema, FAQSchema } from '@/components/SchemaOrg'
import FAQSection from '@/components/FAQSection'
import { buildAlternates } from '@/lib/alternates'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'

export const metadata: Metadata = {
  title: '¿Cuánto Cuesta la Energía Solar en Puerto Rico en 2026?',
  description:
    'Guía completa de costos de energía solar en Puerto Rico 2026. Sistemas residenciales desde $13,000 en adelante, comerciales, con y sin batería. Financiamiento disponible.',
  ...buildAlternates({
    es: '/blog/cuanto-cuesta-energia-solar-puerto-rico-2026',
    en: '/en/blog/how-much-does-solar-cost-puerto-rico-2026',
  }),
}

const faqs = [
  {
    question: '¿Cuánto cuesta un sistema solar en Puerto Rico?',
    answer: 'Un sistema solar residencial de 4 kW de solar y 10 kWh en batería en Puerto Rico tiene un costo desde $13,000 en adelante instalado, incluyendo permisos y la interconexión con LUMA Energy. Opciones de financiamiento están disponibles para reducir el desembolso inicial.',
  },
  {
    question: '¿Vale la pena instalar paneles solares en Puerto Rico en 2026?',
    answer: 'Sí, en 2026 instalar paneles solares en Puerto Rico sigue siendo una de las mejores inversiones disponibles. Las tarifas de LUMA Energy continúan siendo las más altas de todo Estados Unidos, los precios de los sistemas han bajado significativamente, y la necesidad de independencia energética ante los apagones frecuentes es mayor que nunca. La mayoría de los sistemas se pagan solos en 5 a 8 años, con una garantía de 25 años.',
  },
  {
    question: '¿Hay financiamiento disponible para paneles solares en Puerto Rico?',
    answer: 'Sí, existen múltiples opciones de financiamiento: préstamos personales, préstamos solares especializados, acuerdos de poder de compra (PPA), y financiamiento a través de cooperativas de crédito. Muchas instituciones financieras en Puerto Rico ofrecen tasas preferenciales para proyectos de energía renovable. En Kilowatt PR te presentamos todas las opciones disponibles durante la consulta.',
  },
  {
    question: '¿En cuánto tiempo se paga un sistema solar en Puerto Rico?',
    answer: 'Con las tarifas actuales de LUMA Energy, la mayoría de los sistemas solares residenciales en Puerto Rico se pagan en 5 a 8 años a través del ahorro mensual en la factura eléctrica. Después de ese período, la electricidad que genera tu sistema es esencialmente gratis por los 17 a 20 años restantes de la garantía de los paneles.',
  },
]

export default function CuantoCuestaPage() {
  const publishDate: string = '2026-01-15'
  const modifyDate: string = '2026-04-23'
  const url = 'https://www.kilowattpr.com/blog/cuanto-cuesta-energia-solar-puerto-rico-2026'
  const wasUpdated = modifyDate !== publishDate
  const modifyDateFormatted = new Date(modifyDate).toLocaleDateString('es-PR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Blog', path: '/blog' },
          { name: '¿Cuánto cuesta la energía solar en Puerto Rico en 2026?', path: '/blog/cuanto-cuesta-energia-solar-puerto-rico-2026' },
        ]}
      />
      <ArticleSchema
        title="¿Cuánto Cuesta la Energía Solar en Puerto Rico en 2026?"
        description="Guía completa de costos de energía solar en Puerto Rico 2026. Sistemas residenciales, comerciales, con y sin batería."
        datePublished={publishDate}
        dateModified={modifyDate}
        url={url}
      />
      <FAQSchema faqs={faqs} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <div className="flex items-center gap-3 text-sm text-gray-400 mb-4">
            <span className="bg-solar-yellow/10 text-solar-yellow font-medium px-3 py-1 rounded-full">
              Costos y Financiamiento
            </span>
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <time dateTime={publishDate}>15 de enero de 2026</time>
            </div>
            <div className="flex items-center gap-1">
              <User size={14} />
              <Link href="/equipo/julio-santiago-perez" className="hover:text-solar-yellow transition-colors">Ing. Julio A. Santiago Pérez, PE</Link>
            </div>
          </div>

          {wasUpdated && (
            <div className="text-xs text-gray-500 mb-4">
              Última actualización: <time dateTime={modifyDate}>{modifyDateFormatted}</time>
            </div>
          )}

          {/* Language switcher */}
          <div className="flex items-center gap-3 text-sm text-on-surface-variant mb-4">
            <span className="text-primary-container font-semibold">Español</span>
            <span className="text-outline">|</span>
            <Link href="/en/blog/how-much-does-solar-cost-puerto-rico-2026" className="hover:text-primary-container transition-colors">
              Read in English
            </Link>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">
            ¿Cuánto Cuesta la Energía Solar en Puerto Rico en 2026?
          </h1>

          <p className="article-intro text-xl text-gray-600 leading-relaxed">
            Si estás considerando instalar paneles solares en Puerto Rico, el costo es probablemente
            tu primera pregunta. En esta guía completa te explicamos los precios reales de los
            sistemas solares residenciales y comerciales en 2026, los factores que afectan el costo,
            y las opciones de financiamiento disponibles.
          </p>
        </div>

        <div className="prose prose-lg max-w-none text-gray-600">
          <h2>Costo Promedio de un Sistema Solar Residencial en Puerto Rico</h2>

          <p>
            El costo de un sistema solar residencial en Puerto Rico en 2026 comienza desde
            <strong> $13,000 en adelante</strong>, dependiendo del tamaño del sistema, el tipo de
            equipo y si incluye almacenamiento de batería. Según datos del{' '}
            <a href="https://www.nrel.gov/solar/market-research-analysis.html" target="_blank" rel="noopener noreferrer">
              Laboratorio Nacional de Energía Renovable (NREL)
            </a>, el costo promedio por vatio instalado ha bajado consistentemente en la última
            década. Opciones de financiamiento están disponibles para reducir el desembolso inicial.
          </p>

          <div className="not-prose bg-gray-50 rounded-xl p-6 my-6">
            <h3 className="font-bold text-navy-dark mb-4">Rangos de Precio por Tipo de Sistema</h3>
            <div className="space-y-3">
              {[
                { sistema: 'Sistema 4 kW solar + 10 kWh batería', precio: 'Desde $13,000' },
                { sistema: 'Sistema Mediano 8kW + Batería', precio: 'Desde $20,000' },
                { sistema: 'Sistema Premium 10kW + Batería', precio: 'Desde $28,000' },
                { sistema: 'Sistema Comercial 20kW+', precio: 'Cotización personalizada' },
              ].map((row) => (
                <div key={row.sistema} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-0">
                  <span className="text-sm text-gray-700">{row.sistema}</span>
                  <span className="font-bold text-solar-yellow">{row.precio}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-3">
              * Precios referenciales. El costo exacto depende de la evaluación de tu propiedad.
            </p>
          </div>

          <h2>¿Qué Factores Afectan el Costo de un Sistema Solar en Puerto Rico?</h2>

          <p>
            No todos los sistemas solares cuestan lo mismo. Los principales factores que
            determinan el precio final de tu instalación son:
          </p>

          <h3>1. Consumo Eléctrico del Hogar</h3>
          <p>
            El factor más importante es cuánta energía consume tu hogar mensualmente. Un hogar
            que consume 400 kWh al mes necesita un sistema más pequeño (y más barato) que uno
            que consume 1,200 kWh. Para determinar tu consumo real, analizamos tus últimas 12
            facturas de LUMA Energy durante la consulta gratis.
          </p>

          <h3>2. Tipo de Techo y Orientación</h3>
          <p>
            Los techos orientados al sur, libres de sombras, son los más eficientes para la
            energía solar en Puerto Rico. Los techos orientados al norte o con sombras
            importantes de árboles o estructuras adyacentes pueden requerir más paneles para
            producir la misma cantidad de energía, aumentando el costo.
          </p>

          <h3>3. Sistema con o sin Batería</h3>
          <p>
            Un sistema con almacenamiento de batería cuesta entre $10,000 y $15,000 más que
            el mismo sistema sin batería. Sin embargo, las baterías son especialmente valiosas
            en Puerto Rico por la frecuencia de los apagones de LUMA Energy. Muchos propietarios
            consideran que la inversión adicional vale la pena por la tranquilidad y la
            independencia energética que proporciona.
          </p>

          <h3>4. Estado del Techo</h3>
          <p>
            Si tu techo necesita reparaciones o impermeabilización antes de instalar los paneles,
            esto añade costo al proyecto. En Kilowatt PR evaluamos el techo como parte de la
            consulta gratis y te informamos si se necesita trabajo previo.
          </p>

          <h2>¿Cuánto Tiempo Tarda en Pagarse un Sistema Solar en Puerto Rico?</h2>

          <p>
            Con las{' '}
            <a href="https://lumaenergy.com/tarifas/" target="_blank" rel="noopener noreferrer">
              tarifas actuales de LUMA Energy
            </a> — entre las más altas de todo Estados Unidos según la{' '}
            <a href="https://www.eia.gov/electricity/monthly/epm_table_5_6_a.html" target="_blank" rel="noopener noreferrer">
              Administración de Información Energética (EIA)
            </a> — la mayoría de los sistemas solares residenciales en Puerto Rico se pagan
            solos en <strong>5 a 8 años</strong>. Después de ese período, toda la energía que
            produces es efectivamente gratuita hasta el final de la vida del sistema (25 años
            o más).
          </p>
          <p>
            Para un sistema de $25,000 con ahorros mensuales de $300–$400 en la factura de
            LUMA Energy, el período de recuperación es de aproximadamente 6 a 7 años.
          </p>

          <h2>Opciones de Financiamiento en Puerto Rico</h2>

          <p>
            No es necesario tener todo el capital disponible para instalar paneles solares.
            Existen múltiples opciones de financiamiento en Puerto Rico:
          </p>

          <ul>
            <li>Préstamos personales en cooperativas de crédito (Coop)</li>
            <li>Préstamos solares especializados con tasas preferenciales</li>
            <li>Acuerdos de compra de energía (PPA) con $0 inicial</li>
            <li>Financiamiento a través del vendedor/instalador</li>
            <li>Préstamos del Banco de Desarrollo Económico (BDE)</li>
          </ul>

          <p>
            En Kilowatt PR te presentamos todas las opciones de financiamiento disponibles
            durante la consulta y te ayudamos a elegir la que mejor se adapta a tu situación
            financiera.
          </p>

          <h2>Conclusión: ¿Vale la Pena Instalar Solar en Puerto Rico en 2026?</h2>

          <p>
            Con tarifas eléctricas entre las más altas de los Estados Unidos, apagones frecuentes
            de LUMA Energy, y alta{' '}
            <a href="https://www.nrel.gov/gis/solar-resource-maps.html" target="_blank" rel="noopener noreferrer">
              irradiación solar
            </a>{' '}
            todo el año, 2026 sigue siendo un excelente momento para instalar energía solar en
            Puerto Rico. La inversión se recupera en un período razonable y proporciona décadas
            de energía limpia, barata e independiente de la red.
          </p>
          <p>
            La mejor manera de saber exactamente cuánto costaría un sistema para tu propiedad
            específica es a través de una consulta gratis. En Kilowatt PR, nuestros técnicos
            e ingenieros eléctricos con más de 3 décadas de experiencia en Puerto Rico analizan tu consumo,
            evalúan tu techo y te presentan un diseño detallado con el costo exacto y la
            proyección de ahorros a 7 años, sin costo ni compromiso.
          </p>
        </div>

        <div className="mt-12 bg-solar-yellow/10 border border-solar-yellow/30 rounded-xl p-6 text-center">
          <p className="text-navy-dark font-bold text-lg mb-4">
            ¿Cuánto puedes ahorrar con energía solar en Puerto Rico?
          </p>
          <a
            href="https://wa.me/17874312275"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Consulta Gratis — Proyección de Ahorros a 7 Años
          </a>
        </div>
      </article>

      <FAQSection faqs={faqs} title="Preguntas sobre el Costo de Energía Solar en Puerto Rico" />

      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-bold text-navy-dark mb-4">Artículos Relacionados</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/blog/incentivos-solares-puerto-rico-2026', label: 'Preparación para Huracanes' },
              { href: '/blog/guia-bateria-respaldo-hogar-puerto-rico', label: 'Guía de Baterías' },
              { href: '/blog/como-funciona-interconexion-luma-energia', label: 'Interconexión con LUMA' },
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
