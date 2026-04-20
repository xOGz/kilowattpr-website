import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, User } from 'lucide-react'
import { ArticleSchema, FAQSchema } from '@/components/SchemaOrg'
import FAQSection from '@/components/FAQSection'

export const metadata: Metadata = {
  title: '¿Cuánto Puedes Ahorrar con Energía Solar en Puerto Rico? Calculadora 2026',
  description:
    'Calcula cuánto puedes ahorrar con paneles solares en Puerto Rico. Ejemplos reales por factura de LUMA: $200, $300, $500/mes. Retorno de inversión y proyecciones.',
  alternates: {
    canonical: 'https://www.kilowattpr.com/blog/cuanto-ahorro-energia-solar-puerto-rico',
  },
}

const faqs = [
  {
    question: '¿Cuánto puedo ahorrar al mes con paneles solares en Puerto Rico?',
    answer: 'El ahorro mensual depende de tu factura actual de LUMA Energy. Como referencia, un hogar con factura de $200/mes puede ahorrar aproximadamente $170/mes, uno con $350/mes puede ahorrar ~$300/mes, y uno con $500/mes puede ahorrar ~$440/mes. El ahorro exacto depende del tamaño del sistema, la orientación del techo y tu patrón de consumo.',
  },
  {
    question: '¿En cuántos años recupero la inversión en solar?',
    answer: 'Con las tarifas actuales de LUMA Energy, la mayoría de los sistemas residenciales en Puerto Rico se pagan en 3.5 a 6 años. A mayor factura eléctrica, más rápido es el retorno de inversión. Después de recuperar la inversión, la electricidad que genera tu sistema es esencialmente gratis por los 19 a 21 años restantes de garantía.',
  },
  {
    question: '¿El ahorro solar aumenta con el tiempo?',
    answer: 'Sí. Cada vez que LUMA Energy aumenta sus tarifas, tu ahorro solar aumenta proporcionalmente porque tu costo de generar energía con paneles permanece en $0. Históricamente, las tarifas eléctricas en Puerto Rico han aumentado un promedio de 3-5% anual, lo que significa que tu ahorro real crece cada año.',
  },
  {
    question: '¿Ahorro más con o sin batería de respaldo?',
    answer: 'Un sistema sin batería maximiza el ahorro económico porque toda la inversión va a paneles que generan electricidad. Sin embargo, un sistema con batería te protege contra los apagones frecuentes de LUMA Energy y puede ahorrarte costos indirectos como alimentos dañados, pérdida de productividad y compra de hielo o combustible para generadores.',
  },
]

export default function CuantoAhorroPage() {
  const publishDate = '2026-04-10'
  const modifyDate = '2026-04-10'
  const url = 'https://www.kilowattpr.com/blog/cuanto-ahorro-energia-solar-puerto-rico'

  return (
    <>
      <ArticleSchema
        title="¿Cuánto Puedes Ahorrar con Energía Solar en Puerto Rico?"
        description="Calcula cuánto puedes ahorrar con paneles solares en Puerto Rico. Ejemplos reales por factura de LUMA: $200, $300, $500/mes."
        datePublished={publishDate}
        dateModified={modifyDate}
        url={url}
      />
      <FAQSchema faqs={faqs} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <div className="flex items-center gap-3 text-sm text-gray-400 mb-4">
            <span className="bg-solar-yellow/10 text-solar-yellow font-medium px-3 py-1 rounded-full">
              Ahorro Solar
            </span>
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <time dateTime={publishDate}>10 de abril de 2026</time>
            </div>
            <div className="flex items-center gap-1">
              <User size={14} />
              <Link href="/equipo/julio-santiago-perez" className="hover:text-solar-yellow transition-colors">Ing. Julio A. Santiago Pérez, PE</Link>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">
            ¿Cuánto Puedes Ahorrar con Energía Solar en Puerto Rico?
          </h1>

          <p className="article-intro text-xl text-gray-600 leading-relaxed">
            La pregunta más importante antes de invertir en paneles solares: ¿cuánto voy a ahorrar
            realmente? En esta guía te mostramos ejemplos concretos basados en facturas reales de
            LUMA Energy, para que puedas calcular tu ahorro estimado y el tiempo de retorno de
            inversión.
          </p>
        </div>

        <div className="prose prose-lg max-w-none text-gray-600">
          <h2>Tu Ahorro Depende de Tu Factura de LUMA</h2>

          <p>
            La relación es directa: mientras más alta tu factura de LUMA Energy, más puedes
            ahorrar con energía solar. Puerto Rico tiene una de las{' '}
            <a href="https://www.eia.gov/electricity/monthly/epm_table_5_6_a.html" target="_blank" rel="noopener noreferrer">
              tarifas eléctricas más altas de Estados Unidos
            </a>, lo que convierte a la energía solar en una de las inversiones con mejor retorno
            disponible para los hogares puertorriqueños.
          </p>
          <p>
            Un sistema solar bien diseñado puede cubrir entre el 80% y el 100% de tu consumo
            eléctrico. Siempre quedará un cargo mínimo de conexión a la red de LUMA (típicamente
            $20–$30/mes), pero el resto de tu factura puede reducirse drásticamente o eliminarse
            por completo.
          </p>

          <h2>Ejemplos Reales de Ahorro</h2>

          <p>
            A continuación presentamos tres escenarios basados en facturas comunes que vemos en
            nuestras consultas diarias en Kilowatt PR. Estos números reflejan las{' '}
            <Link href="/blog/cuanto-cuesta-energia-solar-puerto-rico-2026" className="text-solar-yellow hover:underline">
              condiciones reales del mercado solar en Puerto Rico en 2026
            </Link>.
          </p>

          <div className="not-prose bg-gray-50 rounded-xl p-6 my-6">
            <h3 className="font-bold text-navy-dark mb-4">Escenario 1: Factura de $200/mes</h3>
            <div className="space-y-3">
              {[
                { concepto: 'Factura actual de LUMA', valor: '$200/mes' },
                { concepto: 'Tamaño del sistema recomendado', valor: '~6 kW' },
                { concepto: 'Costo estimado del sistema', valor: 'Desde $15,000' },
                { concepto: 'Nueva factura estimada de LUMA', valor: '~$30/mes' },
                { concepto: 'Ahorro mensual estimado', valor: '~$170/mes' },
                { concepto: 'Ahorro anual estimado', valor: '~$2,040/año' },
                { concepto: 'Retorno de inversión estimado', valor: '~5 años' },
              ].map((row) => (
                <div key={row.concepto} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-0">
                  <span className="text-sm text-gray-700">{row.concepto}</span>
                  <span className="font-bold text-solar-yellow">{row.valor}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="not-prose bg-gray-50 rounded-xl p-6 my-6">
            <h3 className="font-bold text-navy-dark mb-4">Escenario 2: Factura de $350/mes</h3>
            <div className="space-y-3">
              {[
                { concepto: 'Factura actual de LUMA', valor: '$350/mes' },
                { concepto: 'Tamaño del sistema recomendado', valor: '~10 kW' },
                { concepto: 'Costo estimado del sistema', valor: 'Desde $22,000' },
                { concepto: 'Nueva factura estimada de LUMA', valor: '~$50/mes' },
                { concepto: 'Ahorro mensual estimado', valor: '~$300/mes' },
                { concepto: 'Ahorro anual estimado', valor: '~$3,600/año' },
                { concepto: 'Retorno de inversión estimado', valor: '~4 años' },
              ].map((row) => (
                <div key={row.concepto} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-0">
                  <span className="text-sm text-gray-700">{row.concepto}</span>
                  <span className="font-bold text-solar-yellow">{row.valor}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="not-prose bg-gray-50 rounded-xl p-6 my-6">
            <h3 className="font-bold text-navy-dark mb-4">Escenario 3: Factura de $500/mes</h3>
            <div className="space-y-3">
              {[
                { concepto: 'Factura actual de LUMA', valor: '$500/mes' },
                { concepto: 'Tamaño del sistema recomendado', valor: '~15 kW' },
                { concepto: 'Costo estimado del sistema', valor: 'Desde $30,000' },
                { concepto: 'Nueva factura estimada de LUMA', valor: '~$60/mes' },
                { concepto: 'Ahorro mensual estimado', valor: '~$440/mes' },
                { concepto: 'Ahorro anual estimado', valor: '~$5,280/año' },
                { concepto: 'Retorno de inversión estimado', valor: '~3.5 años' },
              ].map((row) => (
                <div key={row.concepto} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-0">
                  <span className="text-sm text-gray-700">{row.concepto}</span>
                  <span className="font-bold text-solar-yellow">{row.valor}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-3">
              * Proyecciones estimadas. El ahorro real depende de la orientación del techo, sombras, patrón de consumo y tarifa vigente de LUMA Energy.
            </p>
          </div>

          <p>
            La tendencia es clara: a mayor consumo eléctrico, mayor ahorro y más rápido el retorno
            de inversión. Hogares con facturas de $500 o más pueden recuperar su inversión en menos
            de 4 años, con más de 21 años de electricidad prácticamente gratis después.
          </p>

          <h2>Factores que Afectan Tu Ahorro</h2>

          <p>
            Los ejemplos anteriores son proyecciones basadas en condiciones promedio. Tu ahorro real
            puede variar según estos factores:
          </p>

          <h3>1. Orientación del Techo</h3>
          <p>
            Los techos orientados al sur producen la máxima cantidad de energía en Puerto Rico. Los
            techos orientados al este u oeste producen aproximadamente un 15-20% menos. Para más
            detalles, consulta nuestra{' '}
            <Link href="/blog/guia-evaluacion-techo-solar" className="text-solar-yellow hover:underline">
              guía de evaluación de techo para solar
            </Link>.
          </p>

          <h3>2. Sombras</h3>
          <p>
            Árboles, edificios adyacentes o estructuras que proyecten sombra sobre tus paneles
            reducen la producción de energía. Durante la evaluación gratuita, nuestros técnicos
            analizan las sombras en diferentes horas del día para optimizar la colocación de los
            paneles.
          </p>

          <h3>3. Tamaño del Sistema</h3>
          <p>
            Un sistema subdimensionado no cubrirá todo tu consumo. Un sistema sobredimensionado
            generará exceso que va a la red de LUMA vía{' '}
            <Link href="/blog/como-funciona-net-metering-puerto-rico" className="text-solar-yellow hover:underline">
              net metering
            </Link>, pero el crédito que recibes por esa energía es menor que lo que pagas por
            consumirla. En Kilowatt PR diseñamos sistemas que cubren tu consumo real sin
            sobredimensionar innecesariamente.
          </p>

          <h3>4. Batería de Respaldo</h3>
          <p>
            Añadir una{' '}
            <Link href="/blog/guia-bateria-respaldo-hogar-puerto-rico" className="text-solar-yellow hover:underline">
              batería de respaldo
            </Link>{' '}
            aumenta la inversión inicial, pero te protege contra los apagones de LUMA Energy y
            puede maximizar tu autoconsumo al almacenar energía producida durante el día para
            usarla en la noche.
          </p>

          <h2>El Ahorro Aumenta Cada Año</h2>

          <p>
            Uno de los beneficios menos entendidos de la energía solar es que tu ahorro crece
            con el tiempo. Cada vez que LUMA Energy aumenta sus tarifas — algo que ha ocurrido
            consistentemente año tras año — la electricidad que evitas comprar vale más.
          </p>
          <p>
            Tu sistema solar, en cambio, genera electricidad a costo fijo: $0 después de pagar
            la inversión inicial. Mientras el costo de la electricidad de LUMA sube, el costo
            de tu energía solar permanece igual.
          </p>

          <div className="not-prose bg-gray-50 rounded-xl p-6 my-6">
            <h3 className="font-bold text-navy-dark mb-4">Proyección de Ahorro a 10 Años (Factura $350/mes)</h3>
            <div className="space-y-3">
              {[
                { año: 'Año 1', ahorro: '$3,600', acumulado: '$3,600' },
                { año: 'Año 3', ahorro: '$3,820', acumulado: '$11,240' },
                { año: 'Año 5', ahorro: '$4,050', acumulado: '$19,300' },
                { año: 'Año 7', ahorro: '$4,300', acumulado: '$27,800' },
                { año: 'Año 10', ahorro: '$4,690', acumulado: '$41,200' },
              ].map((row) => (
                <div key={row.año} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-0">
                  <span className="text-sm text-gray-700 font-medium">{row.año}</span>
                  <span className="text-sm text-gray-600">Ahorro anual: {row.ahorro}</span>
                  <span className="font-bold text-solar-yellow">Total: {row.acumulado}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-3">
              * Proyección asumiendo aumento promedio de 3% anual en tarifas de LUMA Energy. El ahorro real puede variar.
            </p>
          </div>

          <p>
            En 10 años, un hogar con factura de $350/mes puede acumular más de $41,000 en
            ahorros — casi el doble de la inversión inicial. Y el sistema sigue produciendo
            energía por 15 años más bajo garantía.
          </p>

          <p>
            Para entender cómo se conecta tu sistema solar a la red y maximizar tus ahorros con
            los créditos de LUMA, lee nuestra guía sobre{' '}
            <Link href="/blog/como-funciona-interconexion-luma-energia" className="text-solar-yellow hover:underline">
              cómo funciona la interconexión con LUMA Energy
            </Link>.
          </p>
        </div>

        <div className="mt-12 bg-solar-yellow/10 border border-solar-yellow/30 rounded-xl p-6 text-center">
          <p className="text-navy-dark font-bold text-lg mb-2">
            ¿Quieres saber exactamente cuánto puedes ahorrar?
          </p>
          <p className="text-gray-600 text-sm mb-4">
            Envíanos tu factura de LUMA por WhatsApp y nuestros ingenieros te preparan una
            proyección de ahorro personalizada a 7 años, gratis y sin compromiso.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/17874312275"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Enviar Mi Factura por WhatsApp
            </a>
            <Link
              href="/calculadora-solar"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-solar-yellow text-solar-yellow font-bold rounded-lg hover:bg-solar-yellow/10 transition-colors"
            >
              Usar Calculadora Solar
            </Link>
          </div>
        </div>
      </article>

      <FAQSection faqs={faqs} title="Preguntas sobre el Ahorro con Energía Solar" />

      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-bold text-navy-dark mb-4">Artículos Relacionados</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/blog/cuanto-cuesta-energia-solar-puerto-rico-2026', label: 'Costos de Energía Solar 2026' },
              { href: '/blog/paneles-solares-condominio-puerto-rico', label: 'Solar en Condominios' },
              { href: '/blog/como-funciona-net-metering-puerto-rico', label: 'Net Metering en Puerto Rico' },
              { href: '/blog/opciones-financiamiento-solar-puerto-rico', label: 'Financiamiento Solar' },
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
