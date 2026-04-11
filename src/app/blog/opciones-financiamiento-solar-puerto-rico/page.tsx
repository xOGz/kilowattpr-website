import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, User } from 'lucide-react'
import { ArticleSchema, FAQSchema } from '@/components/SchemaOrg'
import FAQSection from '@/components/FAQSection'

export const metadata: Metadata = {
  title: 'Opciones de Financiamiento para Paneles Solares en Puerto Rico 2026',
  description:
    'Guía completa de financiamiento solar en Puerto Rico. Préstamos verdes, cooperativas, financiamiento directo. Cómo pagar tu sistema solar sin pago inicial.',
  alternates: {
    canonical: 'https://www.kilowattpr.com/blog/opciones-financiamiento-solar-puerto-rico',
  },
}

const faqs = [
  {
    question: '¿Puedo instalar paneles solares sin pago inicial en Puerto Rico?',
    answer: 'Sí, existen opciones de financiamiento que cubren el 100% del costo del sistema solar, permitiéndote comenzar a ahorrar desde el primer mes sin desembolso inicial. Algunas cooperativas de crédito, bancos y programas de financiamiento directo del instalador ofrecen planes con $0 de pronto. Tu pago mensual del préstamo suele ser menor que tu factura actual de LUMA Energy.',
  },
  {
    question: '¿Cuál es la mejor opción de financiamiento solar en Puerto Rico?',
    answer: 'La mejor opción depende de tu situación financiera. Las cooperativas de ahorro y crédito generalmente ofrecen las tasas más competitivas (desde 5% APR) y un servicio más personalizado. Los préstamos verdes de bancos comerciales como Banco Popular y FirstBank son buenas opciones para montos más altos. El financiamiento directo del instalador es ideal si prefieres un proceso simplificado con $0 inicial.',
  },
  {
    question: '¿Cuánto es el pago mensual de un sistema solar financiado?',
    answer: 'Para un sistema residencial típico de $20,000 financiado a 10 años con una tasa del 6%, el pago mensual sería aproximadamente $222. Esto es comparable o menor que la factura mensual promedio de LUMA Energy para un hogar que consume 800-1,000 kWh al mes. Después de pagar el préstamo, tu energía es esencialmente gratis por los 15+ años restantes de vida del sistema.',
  },
  {
    question: '¿Qué requisitos necesito para financiar paneles solares?',
    answer: 'Los requisitos varían según la institución, pero generalmente incluyen: prueba de ingresos (planillas o comprobantes de empleo), buen historial crediticio, ser dueño de la propiedad donde se instalará el sistema, y copia de facturas recientes de LUMA Energy. Algunas cooperativas tienen requisitos más flexibles que los bancos comerciales.',
  },
  {
    question: '¿El Banco de Desarrollo Económico (BDE) financia paneles solares?',
    answer: 'Sí, el Banco de Desarrollo Económico de Puerto Rico (BDE) ofrece programas de financiamiento para proyectos de energía renovable, incluyendo sistemas solares residenciales y comerciales. Las condiciones y disponibilidad pueden variar, por lo que se recomienda consultar directamente con el BDE o preguntar a tu instalador sobre la disponibilidad actual del programa.',
  },
]

export default function FinanciamientoSolarPage() {
  const publishDate = '2026-04-10'
  const url = 'https://www.kilowattpr.com/blog/opciones-financiamiento-solar-puerto-rico'

  return (
    <>
      <ArticleSchema
        title="Opciones de Financiamiento para Paneles Solares en Puerto Rico en 2026"
        description="Guía completa de financiamiento solar en Puerto Rico. Préstamos verdes, cooperativas, financiamiento directo."
        datePublished={publishDate}
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
              <time dateTime={publishDate}>10 de abril de 2026</time>
            </div>
            <div className="flex items-center gap-1">
              <User size={14} />
              <Link href="/equipo/julio-santiago-perez" className="hover:text-solar-yellow transition-colors">Ing. Julio A. Santiago Pérez, PE</Link>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">
            Opciones de Financiamiento para Paneles Solares en Puerto Rico en 2026
          </h1>

          <p className="article-intro text-xl text-gray-600 leading-relaxed">
            El costo de un sistema solar no debería ser un obstáculo para dejar de pagar las
            tarifas más altas de electricidad en Estados Unidos. En Puerto Rico existen múltiples
            opciones de financiamiento que te permiten instalar paneles solares con $0 de pronto
            y comenzar a ahorrar desde el primer mes. En esta guía te explicamos todas las opciones
            disponibles, cuánto pagarías mensualmente y cómo comparar para elegir la mejor.
          </p>
        </div>

        <div className="prose prose-lg max-w-none text-gray-600">
          <h2>¿Cuánto Cuesta un Sistema Solar en Puerto Rico?</h2>

          <p>
            Antes de hablar de financiamiento, es importante entender los rangos de precio. Un
            sistema solar residencial en Puerto Rico en 2026 cuesta entre{' '}
            <strong>$13,000 y $35,000</strong>, dependiendo del tamaño del sistema, si incluye
            batería de respaldo y las condiciones específicas de tu propiedad. Para una guía
            detallada de precios, consulta nuestro artículo sobre{' '}
            <Link href="/blog/cuanto-cuesta-energia-solar-puerto-rico-2026" className="text-solar-yellow hover:underline">
              costos de energía solar en Puerto Rico 2026
            </Link>.
          </p>

          <div className="not-prose bg-gray-50 rounded-xl p-6 my-6">
            <h3 className="font-bold text-navy-dark mb-4">Rangos de Precio Referenciales</h3>
            <div className="space-y-3">
              {[
                { sistema: 'Sistema básico (4 kW + 10 kWh batería)', precio: 'Desde $13,000' },
                { sistema: 'Sistema mediano (8 kW + batería)', precio: 'Desde $20,000' },
                { sistema: 'Sistema premium (10 kW + batería)', precio: 'Desde $28,000' },
                { sistema: 'Sistema comercial (20 kW+)', precio: 'Cotización personalizada' },
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

          <h2>Opciones de Financiamiento Disponibles en Puerto Rico</h2>

          <p>
            La buena noticia es que no necesitas tener $20,000 o $30,000 en efectivo para
            instalar solar. Estas son las opciones de financiamiento disponibles en Puerto Rico:
          </p>

          <h3>1. Préstamos Verdes Bancarios</h3>
          <p>
            Los principales bancos comerciales de Puerto Rico ofrecen productos de financiamiento
            específicos para proyectos de energía renovable:
          </p>
          <ul>
            <li>
              <strong>Banco Popular de Puerto Rico</strong> — Ofrece préstamos verdes con
              tasas desde 5.99% APR y plazos de hasta 15 años. Proceso de solicitud disponible
              en sucursales y en línea.
            </li>
            <li>
              <strong>FirstBank</strong> — Líneas de crédito y préstamos personales para
              mejoras del hogar que incluyen sistemas solares. Tasas competitivas desde 6% APR
              con plazos de 5 a 12 años.
            </li>
            <li>
              <strong>Oriental Bank</strong> — Préstamos para mejoras del hogar aplicables
              a instalaciones solares con tasas desde 6.5% APR.
            </li>
          </ul>
          <p>
            <strong>Ventaja:</strong> Tasas fijas, plazos largos, proceso establecido.<br />
            <strong>Desventaja:</strong> Requisitos crediticios más estrictos, proceso puede
            tomar 2-4 semanas.
          </p>

          <h3>2. Cooperativas de Ahorro y Crédito</h3>
          <p>
            Las cooperativas son una de las mejores opciones de financiamiento en Puerto Rico
            para proyectos solares. Ofrecen:
          </p>
          <ul>
            <li>Tasas desde 5% APR — generalmente más bajas que los bancos comerciales</li>
            <li>Servicio personalizado y atención directa</li>
            <li>Requisitos de crédito más flexibles para sus socios</li>
            <li>Plazos de 5 a 15 años</li>
            <li>Proceso de aprobación más rápido en muchos casos</li>
          </ul>
          <p>
            Cooperativas como{' '}
            <strong>Cooperativa de Ahorro y Crédito de Aguada</strong>,{' '}
            <strong>COSSEC</strong> y muchas otras a través de toda la isla tienen programas
            activos de financiamiento para energía solar. Si ya eres socio de una cooperativa,
            consulta primero con ellos.
          </p>

          <h3>3. Financiamiento Directo del Instalador</h3>
          <p>
            Algunos instaladores solares ofrecen planes de financiamiento directos que simplifican
            el proceso:
          </p>
          <ul>
            <li>$0 de pago inicial — comienza a ahorrar inmediatamente</li>
            <li>Proceso simplificado — una sola solicitud, sin visitar el banco</li>
            <li>Aprobación rápida — en muchos casos el mismo día</li>
            <li>Pagos mensuales fijos por 5 a 15 años</li>
          </ul>
          <p>
            En Kilowatt PR trabajamos con múltiples instituciones financieras para ofrecerte
            las mejores opciones de financiamiento disponibles. Durante la consulta gratuita
            te presentamos todas las alternativas para que elijas la que mejor se adapte a
            tu presupuesto.
          </p>

          <h3>4. Préstamos Personales</h3>
          <p>
            Un préstamo personal tradicional también puede usarse para financiar paneles solares.
            Aunque las tasas pueden ser ligeramente más altas (7-12% APR), tiene la ventaja de
            que el proceso es más rápido y no requiere que el préstamo esté atado específicamente
            a un proyecto solar. Esta opción es útil si necesitas financiar tanto la instalación
            solar como otras mejoras al hogar simultáneamente.
          </p>

          <h3>5. Programa del Banco de Desarrollo Económico (BDE)</h3>
          <p>
            El{' '}
            <a href="https://bfrpr.com/" target="_blank" rel="noopener noreferrer">
              Banco de Desarrollo Económico de Puerto Rico
            </a>{' '}
            ha establecido programas de financiamiento para proyectos de energía renovable,
            tanto residenciales como comerciales. Estos programas pueden ofrecer:
          </p>
          <ul>
            <li>Tasas preferenciales subsidiadas</li>
            <li>Plazos extendidos</li>
            <li>Requisitos más flexibles para pequeñas empresas</li>
          </ul>
          <p>
            La disponibilidad y condiciones de estos programas pueden variar. Consulta
            directamente con el BDE o pregúntanos durante tu consulta para verificar las
            opciones vigentes.
          </p>

          <h2>Comparación: ¿Cuál Opción Te Conviene?</h2>

          <div className="not-prose bg-gray-50 rounded-xl p-6 my-6">
            <h3 className="font-bold text-navy-dark mb-4">Comparación de Opciones de Financiamiento</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-300">
                    <th className="text-left py-2 text-gray-800">Opción</th>
                    <th className="text-left py-2 text-gray-800">Tasa APR</th>
                    <th className="text-left py-2 text-gray-800">Plazo</th>
                    <th className="text-left py-2 text-gray-800">Pronto</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { opcion: 'Préstamo verde bancario', tasa: '5.99-8%', plazo: '5-15 años', pronto: '0-10%' },
                    { opcion: 'Cooperativa de crédito', tasa: '5-7%', plazo: '5-15 años', pronto: '0-5%' },
                    { opcion: 'Financiamiento directo', tasa: '6-9%', plazo: '5-15 años', pronto: '$0' },
                    { opcion: 'Préstamo personal', tasa: '7-12%', plazo: '3-7 años', pronto: '$0' },
                    { opcion: 'Programa BDE', tasa: 'Variable', plazo: '5-15 años', pronto: 'Variable' },
                  ].map((row) => (
                    <tr key={row.opcion} className="border-b border-gray-200">
                      <td className="py-2 text-gray-700 font-medium">{row.opcion}</td>
                      <td className="py-2 text-gray-600">{row.tasa}</td>
                      <td className="py-2 text-gray-600">{row.plazo}</td>
                      <td className="py-2 text-solar-yellow font-semibold">{row.pronto}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-3">
              * Tasas y condiciones referenciales. Consulta directamente con cada institución para ofertas vigentes.
            </p>
          </div>

          <h2>El Pago Mensual vs. Tu Factura de LUMA Energy</h2>

          <p>
            Esta es la comparación más importante que debes hacer: <strong>¿cuánto pagas
            actualmente a LUMA Energy cada mes y cuánto sería el pago mensual del
            préstamo solar?</strong> En la mayoría de los casos, el pago del préstamo es
            igual o menor que tu factura de LUMA.
          </p>

          <div className="not-prose bg-gray-50 rounded-xl p-6 my-6">
            <h3 className="font-bold text-navy-dark mb-4">Pago Mensual del Préstamo vs. Factura de LUMA</h3>
            <div className="space-y-4">
              {[
                {
                  sistema: 'Sistema $15,000 (10 años, 6% APR)',
                  pago: '$167/mes',
                  luma: '$200-$300/mes',
                  ahorro: 'Ahorro desde el primer mes',
                },
                {
                  sistema: 'Sistema $20,000 (10 años, 6% APR)',
                  pago: '$222/mes',
                  luma: '$300-$400/mes',
                  ahorro: 'Ahorro desde el primer mes',
                },
                {
                  sistema: 'Sistema $28,000 (12 años, 6% APR)',
                  pago: '$275/mes',
                  luma: '$400-$500/mes',
                  ahorro: 'Ahorro desde el primer mes',
                },
              ].map((row) => (
                <div key={row.sistema} className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="font-semibold text-gray-800 text-sm mb-2">{row.sistema}</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-xs text-gray-500 block">Pago del préstamo</span>
                      <span className="text-solar-yellow font-bold">{row.pago}</span>
                    </div>
                    <div className="text-gray-400">vs.</div>
                    <div>
                      <span className="text-xs text-gray-500 block">Factura LUMA típica</span>
                      <span className="text-red-500 font-bold">{row.luma}</span>
                    </div>
                    <div>
                      <span className="text-xs text-gray-500 block">Resultado</span>
                      <span className="text-green-600 font-bold text-sm">{row.ahorro}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-3">
              * Estimados basados en consumo promedio. El ahorro real depende de tu consumo específico y tarifa de LUMA.
            </p>
          </div>

          <p>
            La lógica es sencilla: si actualmente pagas $350 al mes a LUMA Energy y tu pago
            del préstamo solar sería $222 al mes, estás ahorrando $128 mensuales desde el
            primer día. Y cuando terminas de pagar el préstamo en 10 años, tu energía es
            prácticamente gratis por los 15+ años restantes de vida del sistema.
          </p>

          <p>
            Dicho de otra manera: con LUMA, pagas por siempre y las tarifas suben cada año.
            Con un sistema solar financiado, pagas por un tiempo limitado y después no pagas nada.
          </p>

          <h2>Consejos para Obtener el Mejor Financiamiento</h2>

          <ol>
            <li>
              <strong>Compara al menos 3 opciones</strong> — No aceptes la primera oferta. Compara
              tasas entre bancos, cooperativas y financiamiento del instalador.
            </li>
            <li>
              <strong>Prioriza tasa fija sobre variable</strong> — Una tasa fija te protege contra
              aumentos futuros y te permite planificar tu presupuesto con certeza.
            </li>
            <li>
              <strong>Considera el plazo total</strong> — Un plazo más largo reduce el pago mensual
              pero aumenta el costo total de intereses. Busca el balance entre pago cómodo y costo
              total razonable.
            </li>
            <li>
              <strong>Verifica penalidades por pago adelantado</strong> — Asegúrate de que puedas
              hacer pagos adicionales o pagar el préstamo antes sin penalidades.
            </li>
            <li>
              <strong>Consulta tu cooperativa primero</strong> — Si eres socio de una cooperativa,
              generalmente obtendrás mejores condiciones que en un banco comercial.
            </li>
          </ol>

          <h2>Conclusión: No Dejes Que el Costo Inicial Te Detenga</h2>

          <p>
            El financiamiento hace que la energía solar sea accesible para prácticamente cualquier
            propietario en Puerto Rico. Con opciones de $0 de pronto y pagos mensuales que suelen
            ser menores que tu factura actual de LUMA Energy, la pregunta no es si puedes costear
            paneles solares — es si puedes seguir costeando no tenerlos.
          </p>

          <p>
            En Kilowatt PR te ayudamos a evaluar todas las opciones de financiamiento disponibles
            durante la consulta gratuita. Analizamos tu consumo, diseñamos el sistema óptimo para
            tu propiedad y te presentamos un presupuesto detallado con las proyecciones de ahorro
            y las opciones de pago — todo sin costo ni compromiso.
          </p>
        </div>

        <div className="mt-12 bg-solar-yellow/10 border border-solar-yellow/30 rounded-xl p-6 text-center">
          <p className="text-navy-dark font-bold text-lg mb-2">
            ¿Quieres saber cuánto pagarías mensualmente por tu sistema solar?
          </p>
          <p className="text-gray-600 text-sm mb-4">
            Consulta gratis — te presentamos todas las opciones de financiamiento disponibles
            para tu caso específico.
          </p>
          <a
            href="https://wa.me/17874312275"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Solicitar Consulta Gratis por WhatsApp
          </a>
        </div>
      </article>

      <FAQSection faqs={faqs} title="Preguntas Frecuentes sobre Financiamiento Solar en Puerto Rico" />

      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-bold text-navy-dark mb-4">Artículos Relacionados</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/blog/cuanto-cuesta-energia-solar-puerto-rico-2026', label: 'Costos de Energía Solar 2026' },
              { href: '/blog/mejor-instalador-solar-puerto-rico-2026', label: 'Cómo Elegir Instalador Solar' },
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
