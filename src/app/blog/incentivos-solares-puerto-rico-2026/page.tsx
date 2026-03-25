import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, User } from 'lucide-react'
import { ArticleSchema, FAQSchema } from '@/components/SchemaOrg'
import FAQSection from '@/components/FAQSection'

export const metadata: Metadata = {
  title: 'Incentivos y Créditos para Energía Solar en Puerto Rico 2026',
  description:
    'Guía completa de incentivos solares en Puerto Rico 2026: crédito federal 30%, Ley 17, exenciones de impuestos y opciones de financiamiento disponibles.',
  alternates: { canonical: 'https://www.kilowattpr.com/blog/incentivos-solares-puerto-rico-2026' },
}

const faqs = [
  {
    question: '¿Aplica el crédito federal del 30% para residentes de Puerto Rico?',
    answer: 'Sí, el crédito tributario federal del 30% para energía solar (Investment Tax Credit, ITC) aplica para residentes de Puerto Rico que pagan impuestos federales. El crédito se aplica directamente contra la deuda tributaria federal del año en que se instala el sistema. Es importante consultar con un contador o asesor fiscal para asegurarte de maximizar este beneficio según tu situación específica.',
  },
  {
    question: '¿Qué es la Ley 17 de energía solar en Puerto Rico?',
    answer: 'La Ley Núm. 17 del Fomento y Desarrollo de las Energías Renovables es la legislación principal de Puerto Rico que regula e incentiva la energía solar. Entre sus beneficios, establece el marco para el net metering (medición neta), las exenciones de impuestos sobre la propiedad para el valor añadido por sistemas solares, y los incentivos para el desarrollo de energías renovables en la isla. Las regulaciones específicas se actualizan periódicamente.',
  },
  {
    question: '¿Puedo deducir una batería solar bajo el crédito federal?',
    answer: 'Sí, el crédito federal del 30% aplica para baterías de almacenamiento cuando se instalan junto con un sistema solar como parte del mismo proyecto. Desde la actualización de 2023, las baterías instaladas en una segunda fase también pueden calificar bajo ciertas condiciones. Consulta con tu asesor fiscal para determinar cómo aplica en tu caso específico.',
  },
  {
    question: '¿Hay exención de impuestos sobre la propiedad para sistemas solares en Puerto Rico?',
    answer: 'Puerto Rico ofrece exención del impuesto sobre la propiedad para el valor añadido por la instalación de sistemas de energía renovable. Esto significa que aunque tu propiedad aumente de valor al instalar paneles solares, ese aumento no se añade a tu base imponible para el impuesto sobre la propiedad. Esta exención es un incentivo adicional que reduce el costo efectivo de tu sistema solar a largo plazo.',
  },
]

export default function IncentivosPage() {
  const publishDate = '2026-03-01'
  const url = 'https://www.kilowattpr.com/blog/incentivos-solares-puerto-rico-2026'

  return (
    <>
      <ArticleSchema
        title="Incentivos y Créditos para Energía Solar en Puerto Rico 2026"
        description="Guía completa de incentivos solares en Puerto Rico 2026: crédito federal 30%, Ley 17, exenciones de impuestos."
        datePublished={publishDate}
        url={url}
      />
      <FAQSchema faqs={faqs} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <div className="flex items-center gap-3 text-sm text-gray-400 mb-4">
            <span className="bg-solar-yellow/10 text-solar-yellow font-medium px-3 py-1 rounded-full">
              Incentivos y Ahorro
            </span>
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <time dateTime={publishDate}>1 de marzo de 2026</time>
            </div>
            <div className="flex items-center gap-1">
              <User size={14} />
              <Link href="/equipo/julio-santiago-perez" className="hover:text-solar-yellow transition-colors">Ing. Julio A. Santiago Pérez, PE</Link>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">
            Incentivos y Créditos para Energía Solar en Puerto Rico 2026
          </h1>

          <p className="article-intro text-xl text-gray-600 leading-relaxed">
            Puerto Rico ofrece una combinación única de incentivos federales y locales que
            pueden reducir el costo de un sistema solar entre el 30% y el 40%. Esta guía
            explica todos los incentivos disponibles en 2026 y cómo aprovecharlos al máximo
            antes de instalar tu sistema solar.
          </p>
        </div>

        <div className="prose prose-lg max-w-none text-gray-600">
          <h2>El Crédito Tributario Federal del 30% (ITC)</h2>
          <p>
            El incentivo más significativo para la energía solar en Puerto Rico en 2026 sigue
            siendo el{' '}
            <a href="https://www.irs.gov/credits-deductions/residential-clean-energy-credit" target="_blank" rel="noopener noreferrer">
              Crédito Tributario para Inversiones en Energía Limpia (ITC)
            </a>, según el IRS. Este crédito federal permite deducir el 30% del costo total
            del sistema solar de lo que debes en impuestos federales.
          </p>
          <p>
            Según la{' '}
            <a href="https://www.energy.gov/eere/solar/homeowners-guide-federal-tax-credit-solar-photovoltaics" target="_blank" rel="noopener noreferrer">
              guía del Departamento de Energía para propietarios
            </a>, el crédito aplica sobre el costo completo del sistema: paneles, inversor,
            batería (si se instala como parte del proyecto), materiales de instalación y mano
            de obra. Para un sistema de $25,000, el crédito es de $7,500. Para un sistema de
            $35,000 con batería, el crédito sería de $10,500.
          </p>

          <div className="not-prose bg-solar-yellow/5 border border-solar-yellow/30 rounded-xl p-6 my-6">
            <h3 className="font-bold text-navy-dark mb-3">Ejemplo del Crédito Federal</h3>
            <div className="space-y-2 text-sm">
              {[
                { concepto: 'Costo total del sistema', valor: '$28,000' },
                { concepto: 'Crédito federal (30%)', valor: '- $8,400' },
                { concepto: 'Costo neto después del crédito', valor: '$19,600' },
              ].map((row) => (
                <div key={row.concepto} className="flex justify-between py-2 border-b border-gray-200 last:border-0">
                  <span className={row.concepto.includes('neto') ? 'font-bold text-navy-dark' : 'text-gray-700'}>
                    {row.concepto}
                  </span>
                  <span className={`font-bold ${row.concepto.includes('neto') ? 'text-solar-yellow text-lg' : 'text-gray-600'}`}>
                    {row.valor}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-3">
              * Ejemplo ilustrativo. Consulta un asesor fiscal para tu situación específica.
            </p>
          </div>

          <h3>Requisitos para Calificar para el ITC</h3>
          <p>Para calificar para el crédito federal del 30%, el sistema solar debe:</p>
          <ul>
            <li>Instalarse en tu residencia principal o secundaria ubicada en Estados Unidos o sus territorios (incluyendo Puerto Rico)</li>
            <li>Ser un sistema nuevo (no usado o reacondicionado)</li>
            <li>Completarse en el año fiscal para el que reclamas el crédito</li>
            <li>Ser de tu propiedad (no un sistema en arriendo o PPA para el propietario)</li>
          </ul>

          <h2>Ley Núm. 17 — Marco Regulatorio Solar de Puerto Rico</h2>
          <p>
            La{' '}
            <a href="https://energia.pr.gov" target="_blank" rel="noopener noreferrer">
              Ley de Política Pública Energética de Puerto Rico
            </a>, administrada por la PREB (Puerto Rico Energy Bureau), establece el marco
            para los incentivos locales de energía renovable. Incluye disposiciones importantes
            para los propietarios de sistemas solares:
          </p>

          <h3>Medición Neta (Net Metering)</h3>
          <p>
            El programa de{' '}
            <a href="https://www.energy.gov/eere/solar/net-metering" target="_blank" rel="noopener noreferrer">
              medición neta (net metering)
            </a>{' '}
            permite a los clientes solares recibir crédito en su cuenta de{' '}
            <a href="https://lumaenergy.com/generacion-distribuida/" target="_blank" rel="noopener noreferrer">
              LUMA Energy
            </a>{' '}
            por la energía que exportan a la red cuando su sistema produce más de lo que
            consumen. Este crédito reduce las facturas futuras de LUMA. El valor exacto del
            crédito por kWh exportado y las reglas específicas del programa están sujetos a
            las regulaciones de la PREB.
          </p>

          <h3>Exención del Impuesto sobre la Propiedad</h3>
          <p>
            Los sistemas de energía renovable instalados en propiedades en Puerto Rico están
            exentos del impuesto sobre la propiedad sobre el valor añadido por el sistema.
            Si tu propiedad vale $200,000 y el sistema solar añade $25,000 de valor, sigues
            pagando impuesto sobre los $200,000 originales, no sobre los $225,000.
          </p>

          <h2>Opciones de Financiamiento para Maximizar Incentivos</h2>
          <p>
            Para aprovechar al máximo el crédito federal del 30%, lo ideal es financiar el
            sistema con un préstamo y usar el crédito fiscal para pagar adelantado el préstamo.
            Esta estrategia te permite:
          </p>
          <ul>
            <li>Instalar el sistema con mínimo desembolso inicial</li>
            <li>Usar el crédito fiscal para reducir el principal del préstamo</li>
            <li>Empezar a ahorrar desde el primer mes</li>
            <li>Acelerar el período de recuperación de la inversión</li>
          </ul>
          <p>
            Las cooperativas de crédito de Puerto Rico (Coop) frecuentemente ofrecen préstamos
            personales con tasas preferenciales para proyectos de energía renovable. El BDE
            (Banco de Desarrollo Económico de Puerto Rico) también ofrece productos de
            financiamiento para energía renovable.
          </p>

          <h2>¿Cómo Calcular el Retorno de Inversión con Incentivos?</h2>
          <p>
            Con el crédito federal del 30% y los ahorros mensuales en la factura de LUMA Energy
            — cuyas{' '}
            <a href="https://www.eia.gov/electricity/monthly/epm_table_5_6_a.html" target="_blank" rel="noopener noreferrer">
              tarifas están entre las más altas de EE.UU. según la EIA
            </a>{' '}
            — la mayoría de los sistemas solares en Puerto Rico se pagan en 4 a 6 años. Según
            la{' '}
            <a href="https://www.seia.org/solar-industry-research-data" target="_blank" rel="noopener noreferrer">
              SEIA (Solar Energy Industries Association)
            </a>, Puerto Rico es uno de los mercados con mejor retorno de inversión solar.
            Para un sistema de $25,000:
          </p>
          <ul>
            <li>Costo después del crédito federal: $17,500</li>
            <li>Ahorro mensual estimado: $300–$400</li>
            <li>Período de recuperación: aproximadamente 4–5 años</li>
            <li>Ahorros totales en 25 años: $90,000–$120,000+</li>
          </ul>
          <p>
            Estas proyecciones son estimaciones basadas en tarifas actuales de LUMA Energy.
            Durante la consulta gratis de Kilowatt PR, preparamos un análisis financiero
            personalizado para tu hogar específico.
          </p>

          <h2>Importante: Consulta con un Asesor Fiscal</h2>
          <p>
            Los detalles de los incentivos fiscales cambian con las actualizaciones de ley.
            Este artículo proporciona información general sobre los incentivos disponibles en
            2026, pero no constituye asesoramiento fiscal. Te recomendamos trabajar con un
            contador o asesor fiscal certificado en Puerto Rico para determinar exactamente
            cómo aplican estos incentivos a tu situación y para asegurarte de reclamar el
            máximo beneficio disponible.
          </p>
          <p>
            Lo que sí podemos garantizarte es que en Kilowatt PR, nuestros técnicos y jornaleros
            con más de una década de experiencia en Puerto Rico instalarán tu sistema de forma
            que califique para todos los incentivos aplicables. Preparamos toda la documentación
            necesaria para que tu asesor fiscal pueda reclamar el crédito federal sin ningún
            contratiempo.
          </p>
        </div>

        <div className="mt-12 bg-solar-yellow/10 border border-solar-yellow/30 rounded-xl p-6 text-center">
          <p className="text-navy-dark font-bold text-lg mb-4">
            Aprovecha el crédito del 30% antes de que cambie. Consulta gratis hoy.
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
      </article>

      <FAQSection faqs={faqs} title="Preguntas sobre Incentivos Solares en Puerto Rico" />

      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-bold text-navy-dark mb-4">Artículos Relacionados</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/blog/cuanto-cuesta-energia-solar-puerto-rico-2026', label: 'Costos de Energía Solar 2026' },
              { href: '/blog/como-funciona-interconexion-luma-energia', label: 'Interconexión con LUMA' },
              { href: '/blog/guia-bateria-respaldo-hogar-puerto-rico', label: 'Guía de Baterías' },
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
