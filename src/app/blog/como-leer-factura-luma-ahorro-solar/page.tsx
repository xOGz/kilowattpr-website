import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, User } from 'lucide-react'
import { ArticleSchema, FAQSchema } from '@/components/SchemaOrg'
import FAQSection from '@/components/FAQSection'

export const metadata: Metadata = {
  title: 'Cómo Leer tu Factura de LUMA y Calcular tu Ahorro Solar',
  description:
    'Aprende a leer cada cargo de tu factura de LUMA Energy y calcula cuánto puedes ahorrar con paneles solares en Puerto Rico. Guía paso a paso por ingenieros eléctricos.',
  alternates: { canonical: 'https://www.kilowattpr.com/blog/como-leer-factura-luma-ahorro-solar' },
}

const faqs = [
  {
    question: '¿Qué es el cargo CILT en la factura de LUMA Energy?',
    answer: 'El CILT (Cargo por Inversión en Líneas de Transmisión) es un cargo regulado que cubre el costo de mantenimiento y mejoras a la infraestructura de transmisión eléctrica de Puerto Rico. Este cargo se calcula por kWh consumido y aparece como una línea separada en tu factura de LUMA Energy. Es uno de los cargos que no desaparece completamente con solar, pero tu ahorro total en los cargos por consumo y combustible compensa ampliamente.',
  },
  {
    question: '¿Cuántos kWh consume un hogar promedio en Puerto Rico?',
    answer: 'Un hogar promedio en Puerto Rico consume entre 600 y 900 kWh al mes, dependiendo del tamaño de la casa, la cantidad de aires acondicionados y los electrodomésticos. Los hogares con múltiples unidades de aire acondicionado pueden superar los 1,200 kWh mensuales. Tu consumo exacto aparece en tu factura de LUMA Energy y es el dato más importante para dimensionar un sistema solar adecuado.',
  },
  {
    question: '¿Cómo sé qué tamaño de sistema solar necesito según mi factura?',
    answer: 'El tamaño del sistema solar se determina por tu consumo mensual en kWh. Como regla general, cada kW de paneles solares produce entre 120 y 150 kWh al mes en Puerto Rico. Si consumes 800 kWh al mes, necesitas un sistema de aproximadamente 6 kW. En Kilowatt PR analizamos tus últimas 12 facturas para diseñar el sistema óptimo, considerando variaciones estacionales y patrones de consumo.',
  },
  {
    question: '¿Puedo eliminar completamente mi factura de LUMA con solar?',
    answer: 'Con un sistema solar dimensionado correctamente y batería de respaldo, puedes reducir tu factura de LUMA Energy entre un 80% y 95%. El cargo fijo mínimo de conexión a la red (aproximadamente $3-5 al mes) siempre aplica mientras estés conectado. Sin embargo, el ahorro mensual de $150 a $400 o más hace que la inversión sea altamente rentable a mediano plazo.',
  },
]

export default function ComoLeerFacturaPage() {
  const publishDate = '2026-03-10'
  const modifyDate = '2026-03-10'
  const url = 'https://www.kilowattpr.com/blog/como-leer-factura-luma-ahorro-solar'

  return (
    <>
      <ArticleSchema
        title="Cómo Leer tu Factura de LUMA y Calcular tu Ahorro Solar"
        description="Aprende a leer cada cargo de tu factura de LUMA Energy y calcula cuánto puedes ahorrar con paneles solares en Puerto Rico."
        datePublished={publishDate}
        dateModified={modifyDate}
        url={url}
      />
      <FAQSchema faqs={faqs} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <div className="flex items-center gap-3 text-sm text-gray-400 mb-4">
            <span className="bg-solar-yellow/10 text-solar-yellow font-medium px-3 py-1 rounded-full">
              Ahorro y Facturación
            </span>
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <time dateTime={publishDate}>10 de marzo de 2026</time>
            </div>
            <div className="flex items-center gap-1">
              <User size={14} />
              <Link href="/equipo/julio-santiago-perez" className="hover:text-solar-yellow transition-colors">Ing. Julio A. Santiago Pérez, PE</Link>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">
            Cómo Leer tu Factura de LUMA y Calcular tu Ahorro Solar
          </h1>

          <p className="article-intro text-xl text-gray-600 leading-relaxed">
            Tu factura de LUMA Energy contiene la información más importante para determinar
            cuánto puedes ahorrar con energía solar. Sin embargo, con tantos cargos, líneas
            y ajustes, puede ser difícil de entender. En esta guía te explicamos cada sección
            de tu factura y te mostramos cómo calcular tu ahorro potencial con paneles solares.
          </p>
        </div>

        <div className="prose prose-lg max-w-none text-gray-600">
          <h2>Por Qué es Importante Entender tu Factura de LUMA</h2>

          <p>
            Antes de invertir en un sistema solar, necesitas conocer tu consumo real. La factura
            de{' '}
            <a href="https://lumaenergy.com" target="_blank" rel="noopener noreferrer">
              LUMA Energy
            </a>{' '}
            no es solo un número al final del mes: es un mapa detallado de cómo y cuánto
            consumes electricidad. Entenderla te permite tomar una decisión informada sobre el
            tamaño de sistema solar que necesitas y calcular con precisión tu retorno de inversión.
          </p>

          <p>
            Muchos propietarios en Puerto Rico pagan entre $200 y $500 mensuales a LUMA Energy
            sin saber exactamente por qué. Desglosar tu factura es el primer paso para tomar
            control de tu energía.
          </p>

          <h2>Anatomía de tu Factura de LUMA Energy: Cargo por Cargo</h2>

          <p>
            Tu factura de LUMA contiene múltiples líneas de cargos. Aquí explicamos cada uno
            para que sepas exactamente a dónde va tu dinero:
          </p>

          <h3>1. Cargo por Consumo de Energía (kWh)</h3>
          <p>
            Este es el cargo principal y el más grande de tu factura. Se calcula multiplicando
            los kilovatios-hora (kWh) que consumiste durante el período de facturación por la
            tarifa vigente por kWh. En Puerto Rico, la tarifa de LUMA Energy es una de las más
            altas de todo Estados Unidos, según datos de la{' '}
            <a href="https://www.eia.gov/electricity/monthly/epm_table_5_6_a.html" target="_blank" rel="noopener noreferrer">
              Administración de Información Energética (EIA)
            </a>. Este cargo es el que más se reduce con energía solar, porque generas tu
            propia electricidad en lugar de comprarla a LUMA.
          </p>

          <h3>2. Cargo por Combustible</h3>
          <p>
            Puerto Rico genera la mayoría de su electricidad con combustibles fósiles importados
            (petróleo, gas natural). El cargo por combustible es variable y fluctúa según el
            precio internacional del petróleo. Cuando el barril de petróleo sube, este cargo
            sube. Con energía solar, tu producción de electricidad no depende del precio del
            petróleo, protegiéndote de estas fluctuaciones impredecibles.
          </p>

          <h3>3. Cargo Fijo por Servicio</h3>
          <p>
            Es un cargo mensual fijo que LUMA cobra por mantener tu conexión a la red eléctrica,
            independientemente de cuánto consumas. Este cargo oscila entre $3 y $5 para clientes
            residenciales y es el único cargo que no se puede eliminar con solar mientras estés
            conectado a la red. Es un costo mínimo comparado con el ahorro total.
          </p>

          <h3>4. CILT (Cargo por Inversión en Líneas de Transmisión)</h3>
          <p>
            El CILT cubre los costos de mantenimiento y mejoras de la infraestructura de
            transmisión y distribución eléctrica. Se calcula por kWh consumido. Aunque este
            cargo se reduce proporcionalmente cuando generas tu propia energía con solar, no
            desaparece completamente si sigues conectado a la red.
          </p>

          <h3>5. Subsidio Cruzado</h3>
          <p>
            Este cargo existe para subsidiar las tarifas de clientes residenciales con bajo
            consumo. Si tu consumo es alto (más de 425 kWh al mes), pagas un subsidio cruzado
            que beneficia a otros usuarios. Al reducir tu consumo de la red con solar, este
            cargo también se reduce significativamente.
          </p>

          <h3>6. Otros Cargos y Ajustes</h3>
          <p>
            Tu factura puede incluir cargos adicionales como el cargo por PREPA Bonds (deuda
            histórica de la AEE), ajustes por compra de energía, y cargos de transición. Estos
            cargos generalmente se calculan por kWh y se reducen proporcionalmente cuando
            generas tu propia energía.
          </p>

          <h2>Cómo Encontrar tu Consumo en kWh</h2>

          <p>
            El dato más importante de tu factura para calcular tu ahorro solar es el{' '}
            <strong>consumo total en kWh</strong>. Busca en tu factura la línea que dice
            &quot;Consumo&quot; o &quot;kWh&quot;. Este número aparece generalmente en la primera página
            junto con la lectura del medidor.
          </p>

          <div className="not-prose bg-gray-50 rounded-xl p-6 my-6">
            <h3 className="font-bold text-navy-dark mb-4">Ejemplo: Lectura de Consumo en tu Factura</h3>
            <div className="space-y-3">
              {[
                { concepto: 'Lectura actual del medidor', valor: '45,230 kWh' },
                { concepto: 'Lectura anterior del medidor', valor: '44,430 kWh' },
                { concepto: 'Consumo del período (diferencia)', valor: '800 kWh' },
                { concepto: 'Días del período de facturación', valor: '30 días' },
                { concepto: 'Consumo diario promedio', valor: '26.7 kWh/día' },
              ].map((row) => (
                <div key={row.concepto} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-0">
                  <span className="text-sm text-gray-700">{row.concepto}</span>
                  <span className="font-bold text-solar-yellow">{row.valor}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-3">
              * Tu consumo puede variar entre facturas. Lo ideal es analizar 12 meses completos.
            </p>
          </div>

          <p>
            Para obtener tu consumo promedio anual, suma los kWh de tus últimas 12 facturas
            y divide entre 12. Este promedio es la base para dimensionar tu sistema solar
            correctamente, considerando que algunos meses consumes más (verano con aire
            acondicionado) y otros menos.
          </p>

          <h2>De tu Factura a tu Sistema Solar: Cómo Calcular el Ahorro</h2>

          <p>
            Una vez que conoces tu consumo mensual promedio, puedes estimar el tamaño del
            sistema solar que necesitas y cuánto ahorrarías. En Puerto Rico, gracias a la
            alta{' '}
            <a href="https://www.nrel.gov/gis/solar-resource-maps.html" target="_blank" rel="noopener noreferrer">
              irradiación solar
            </a>{' '}
            que recibimos durante todo el año, cada kilowatt (kW) de paneles solares instalados
            produce aproximadamente 120 a 150 kWh al mes.
          </p>

          <div className="not-prose bg-gray-50 rounded-xl p-6 my-6">
            <h3 className="font-bold text-navy-dark mb-4">Calculadora Rápida: Consumo vs. Sistema Recomendado</h3>
            <div className="space-y-3">
              {[
                { consumo: '400–600 kWh/mes', sistema: '4 kW solar + 10 kWh batería', ahorro: '$100–$180/mes' },
                { consumo: '600–900 kWh/mes', sistema: '6–7 kW solar + 10 kWh batería', ahorro: '$180–$280/mes' },
                { consumo: '900–1,200 kWh/mes', sistema: '8–10 kW solar + 15 kWh batería', ahorro: '$280–$400/mes' },
                { consumo: '1,200+ kWh/mes', sistema: '10+ kW solar + 20 kWh batería', ahorro: '$400+/mes' },
              ].map((row) => (
                <div key={row.consumo} className="grid grid-cols-3 gap-4 py-3 border-b border-gray-200 last:border-0">
                  <span className="text-sm text-gray-700">{row.consumo}</span>
                  <span className="text-sm text-gray-700">{row.sistema}</span>
                  <span className="font-bold text-solar-yellow text-right">{row.ahorro}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-3">
              * Estimados basados en tarifas actuales de LUMA Energy. Tu ahorro real depende de la orientación del techo, sombras y patrón de consumo.
            </p>
          </div>

          <h2>Los Cargos que Más Duelen y Cómo Solar los Elimina</h2>

          <p>
            Los cargos que representan la mayor parte de tu factura de LUMA Energy son el
            cargo por consumo de energía y el cargo por combustible. Juntos, estos dos cargos
            pueden representar entre el 60% y 75% del total de tu factura. Son precisamente los
            cargos que un sistema solar elimina o reduce drásticamente.
          </p>

          <p>
            Cuando tu sistema solar genera electricidad durante el día, esa energía se usa
            directamente en tu hogar en lugar de comprarla a LUMA. Si generas más de lo que
            consumes, el excedente se envía a la red y recibes un crédito en tu próxima
            factura a través del programa de medición neta (net metering). Con una batería de
            respaldo, puedes almacenar ese excedente para usarlo en la noche, maximizando tu
            ahorro y manteniéndote energizado durante los apagones de LUMA.
          </p>

          <h2>El Historial de Consumo: Tu Arma Secreta</h2>

          <p>
            LUMA Energy incluye en tu factura un gráfico o tabla con tu historial de consumo
            de los últimos 12 meses. Este historial es fundamental porque revela tus patrones
            estacionales: cuánto más consumes en verano (aire acondicionado) versus invierno.
            Un instalador serio como Kilowatt PR siempre analiza este historial completo para
            diseñar un sistema que cubra tus necesidades reales durante todo el año, no solo
            un mes específico.
          </p>

          <p>
            Si no tienes tus facturas a mano, puedes acceder a tu historial de consumo a
            través del{' '}
            <a href="https://lumaenergy.com/mi-cuenta/" target="_blank" rel="noopener noreferrer">
              portal de clientes de LUMA Energy
            </a>{' '}
            o solicitarlo directamente en su oficina. También puedes traer cualquier factura
            reciente a tu consulta con Kilowatt PR y nosotros obtenemos los datos necesarios.
          </p>

          <h2>Trae tu Factura: Consulta Gratis con Kilowatt PR</h2>

          <p>
            Entender tu factura es el primer paso, pero el análisis profesional es lo que te
            da la información real para tomar la mejor decisión. En Kilowatt PR, nuestros
            ingenieros eléctricos con más de 3 décadas de experiencia en Puerto Rico analizan
            tu factura de LUMA, calculan tu consumo anual, evalúan tu techo y te presentan
            una propuesta detallada con:
          </p>

          <ul>
            <li>El tamaño exacto de sistema solar recomendado para tu hogar</li>
            <li>El costo total con opciones de financiamiento</li>
            <li>La proyección de ahorros mes por mes durante 7 años</li>
            <li>El tiempo estimado de recuperación de la inversión</li>
          </ul>

          <p>
            Todo esto sin costo y sin compromiso. Solo necesitas tu factura más reciente de
            LUMA Energy. Envíanos una foto de tu factura por WhatsApp y en menos de 48 horas
            tienes una propuesta personalizada.
          </p>
        </div>

        <div className="mt-12 bg-solar-yellow/10 border border-solar-yellow/30 rounded-xl p-6 text-center">
          <p className="text-navy-dark font-bold text-lg mb-4">
            Envía tu factura de LUMA por WhatsApp y recibe tu análisis solar gratis
          </p>
          <a
            href="https://wa.me/17874312275?text=Hola%2C%20me%20gustar%C3%ADa%20una%20consulta%20solar.%20Adjunto%20mi%20factura%20de%20LUMA."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Enviar Factura por WhatsApp
          </a>
        </div>
      </article>

      <FAQSection faqs={faqs} title="Preguntas sobre tu Factura de LUMA y Ahorro Solar" />

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
