import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, User } from 'lucide-react'
import { ArticleSchema, FAQSchema } from '@/components/SchemaOrg'
import FAQSection from '@/components/FAQSection'

export const metadata: Metadata = {
  title: 'Energía Solar Comercial en Puerto Rico: ROI para Negocios Locales',
  description:
    'Guía de energía solar comercial para negocios en Puerto Rico. Sistemas de 15-50kW+, análisis de ROI real basado en tarifas de LUMA Energy, y casos de estudio para restaurantes, almacenes y comercios.',
  alternates: {
    canonical: 'https://www.kilowattpr.com/blog/energia-solar-comercial-roi-negocios',
    languages: {
      'es': 'https://www.kilowattpr.com/blog/energia-solar-comercial-roi-negocios',
    },
  },
}

const faqs = [
  {
    question: '¿Cuánto cuesta un sistema solar comercial en Puerto Rico?',
    answer: 'Un sistema solar comercial en Puerto Rico varía significativamente según el tamaño del negocio. Sistemas de 15 kW para comercios pequeños comienzan desde aproximadamente $30,000, mientras que sistemas de 25-50 kW para operaciones medianas oscilan entre $55,000 y $110,000. El costo por vatio tiende a ser menor en sistemas comerciales que residenciales, lo que mejora el retorno de inversión. En Kilowatt PR ofrecemos consultas gratis con análisis detallado de tu consumo comercial y proyección de ROI.',
  },
  {
    question: '¿En cuánto tiempo recupero la inversión de un sistema solar comercial?',
    answer: 'Con las tarifas comerciales de LUMA Energy — que son incluso más altas que las residenciales — la mayoría de los sistemas solares comerciales en Puerto Rico se pagan en 4 a 7 años. Negocios con alto consumo diurno como restaurantes, supermercados y oficinas tienden a tener períodos de recuperación más cortos porque su demanda de energía coincide con las horas de mayor producción solar.',
  },
  {
    question: '¿Puede un negocio en Puerto Rico operar completamente con energía solar?',
    answer: 'Sí, con un sistema correctamente dimensionado y almacenamiento de batería suficiente, un negocio en Puerto Rico puede cubrir el 80-95% de su consumo eléctrico con energía solar. El porcentaje exacto depende del perfil de consumo del negocio, el espacio disponible en techo, y el tamaño de la batería. La medición neta de LUMA Energy permite acreditar el exceso de producción diurna contra el consumo nocturno.',
  },
  {
    question: '¿Qué pasa con mi negocio durante los apagones de LUMA si tengo solar?',
    answer: 'Si tu sistema solar comercial incluye batería de respaldo, tu negocio puede continuar operando durante los apagones de LUMA Energy. Esto significa que puedes seguir atendiendo clientes, mantener la refrigeración de inventario, operar los puntos de venta y mantener las luces encendidas mientras tu competencia cierra. En Puerto Rico, donde los apagones pueden durar horas o días, esta continuidad operacional tiene un valor económico real que va más allá del ahorro en la factura eléctrica.',
  },
]

export default function SolarComercialPage() {
  const publishDate = '2026-03-25'
  const modifyDate = '2026-03-25'
  const url = 'https://www.kilowattpr.com/blog/energia-solar-comercial-roi-negocios'

  return (
    <>
      <ArticleSchema
        title="Energía Solar Comercial en Puerto Rico: ROI para Negocios Locales"
        description="Guía de energía solar comercial para negocios en Puerto Rico. Sistemas de 15-50kW+, análisis de ROI real basado en tarifas de LUMA Energy."
        datePublished={publishDate}
        dateModified={modifyDate}
        url={url}
      />
      <FAQSchema faqs={faqs} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <div className="flex items-center gap-3 text-sm text-gray-400 mb-4">
            <span className="bg-solar-yellow/10 text-solar-yellow font-medium px-3 py-1 rounded-full">
              Solar Comercial
            </span>
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <time dateTime={publishDate}>25 de marzo de 2026</time>
            </div>
            <div className="flex items-center gap-1">
              <User size={14} />
              <Link href="/equipo/julio-santiago-perez" className="hover:text-solar-yellow transition-colors">Ing. Julio A. Santiago Pérez, PE</Link>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">
            Energía Solar Comercial en Puerto Rico: ROI para Negocios Locales
          </h1>

          <p className="article-intro text-xl text-gray-600 leading-relaxed">
            Si eres dueño de un negocio en Puerto Rico, ya conoces el dolor de las facturas
            de LUMA Energy. Las tarifas comerciales son incluso más altas que las
            residenciales, y cada apagón representa ventas perdidas, inventario arruinado
            y clientes frustrados. La energía solar comercial no es solo una decisión
            ambiental — es una estrategia financiera con retorno de inversión medible.
          </p>
        </div>

        <div className="prose prose-lg max-w-none text-gray-600">
          <h2>Por Qué la Energía Solar Comercial Tiene Sentido en Puerto Rico</h2>

          <p>
            Puerto Rico tiene una combinación única de factores que hacen que la energía
            solar comercial sea especialmente rentable:
          </p>

          <ul>
            <li>
              <strong>Tarifas comerciales elevadas:</strong> Las tarifas de{' '}
              <a href="https://lumaenergy.com/tarifas/" target="_blank" rel="noopener noreferrer">
                LUMA Energy
              </a>{' '}
              para clientes comerciales están entre las más altas de todo Estados Unidos,
              según la{' '}
              <a href="https://www.eia.gov/electricity/monthly/epm_table_5_6_a.html" target="_blank" rel="noopener noreferrer">
                Administración de Información Energética (EIA)
              </a>. Cada kWh que produces con tus paneles es un kWh que no le pagas a LUMA
              a precio premium.
            </li>
            <li>
              <strong>Irradiación solar excepcional:</strong> Puerto Rico recibe entre
              5.0 y 6.0 kWh/m²/día de{' '}
              <a href="https://www.nrel.gov/gis/solar-resource-maps.html" target="_blank" rel="noopener noreferrer">
                irradiación solar
              </a>, lo que significa que los paneles producen más energía aquí que en la
              mayoría del territorio continental de Estados Unidos.
            </li>
            <li>
              <strong>Consumo diurno alineado con producción solar:</strong> La mayoría
              de los negocios operan durante las horas de mayor producción solar (8am-5pm),
              lo que maximiza el autoconsumo directo sin depender de baterías para el
              100% del ahorro.
            </li>
            <li>
              <strong>Continuidad operacional:</strong> Con batería de respaldo, tu
              negocio puede seguir operando durante los apagones mientras tu competencia
              cierra las puertas.
            </li>
          </ul>

          <h2>Tamaños Típicos de Sistemas Comerciales</h2>

          <div className="not-prose bg-gray-50 rounded-xl p-6 my-6">
            <h3 className="font-bold text-navy-dark mb-4">Sistemas Comerciales por Tipo de Negocio</h3>
            <div className="space-y-3">
              {[
                { negocio: 'Oficina / Consultorio (15 kW)', rango: '$30,000 – $42,000' },
                { negocio: 'Restaurante / Cafetería (20-25 kW)', rango: '$44,000 – $60,000' },
                { negocio: 'Almacén / Taller (25-35 kW)', rango: '$55,000 – $80,000' },
                { negocio: 'Supermercado / Retail Grande (40-50 kW+)', rango: '$88,000 – $110,000+' },
              ].map((row) => (
                <div key={row.negocio} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-0">
                  <span className="text-sm text-gray-700">{row.negocio}</span>
                  <span className="font-bold text-solar-yellow">{row.rango}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-3">
              * Precios referenciales incluyendo batería de respaldo. El costo exacto
              depende del análisis de consumo y las condiciones del techo.
            </p>
          </div>

          <p>
            Los sistemas comerciales generalmente tienen un costo por vatio menor que los
            residenciales gracias a las economías de escala. Un sistema residencial de 8 kW
            podría costar $2.50/W, mientras que un sistema comercial de 25 kW puede bajar
            a $2.20/W o menos, mejorando significativamente el retorno de inversión.
          </p>

          <h2>Análisis de ROI: Tres Escenarios Reales</h2>

          <p>
            Para entender el retorno de inversión real de la energía solar comercial en
            Puerto Rico, analicemos tres escenarios representativos basados en tarifas
            actuales de LUMA Energy y producción solar documentada.
          </p>

          <h3>Caso 1: Restaurante en Mayagüez</h3>

          <div className="not-prose bg-gray-50 rounded-xl p-6 my-6">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-gray-700">Consumo mensual promedio:</span><span className="font-semibold">3,200 kWh</span></div>
              <div className="flex justify-between"><span className="text-gray-700">Factura mensual de LUMA:</span><span className="font-semibold text-red-500">$1,050</span></div>
              <div className="flex justify-between"><span className="text-gray-700">Sistema recomendado:</span><span className="font-semibold">22 kW + batería 20 kWh</span></div>
              <div className="flex justify-between"><span className="text-gray-700">Inversión estimada:</span><span className="font-semibold">$52,000</span></div>
              <div className="flex justify-between"><span className="text-gray-700">Producción solar mensual:</span><span className="font-semibold">2,860 kWh</span></div>
              <div className="flex justify-between"><span className="text-gray-700">Ahorro mensual estimado:</span><span className="font-semibold text-green-600">$780</span></div>
              <div className="flex justify-between border-t border-gray-300 pt-2 mt-2"><span className="text-gray-700 font-semibold">Período de recuperación:</span><span className="font-bold text-solar-yellow">~5.5 años</span></div>
              <div className="flex justify-between"><span className="text-gray-700 font-semibold">Ahorro total en 25 años:</span><span className="font-bold text-green-600">$182,000+</span></div>
            </div>
          </div>

          <p>
            Un restaurante tiene un perfil de consumo ideal para la energía solar: opera
            principalmente durante el día, tiene un techo amplio y plano, y usa mucha
            energía en refrigeración y aire acondicionado — los dos mayores consumidores
            de electricidad. La batería cubre el cierre nocturno y los equipos de
            refrigeración que operan 24/7.
          </p>

          <h3>Caso 2: Almacén Industrial en Caguas</h3>

          <div className="not-prose bg-gray-50 rounded-xl p-6 my-6">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-gray-700">Consumo mensual promedio:</span><span className="font-semibold">4,800 kWh</span></div>
              <div className="flex justify-between"><span className="text-gray-700">Factura mensual de LUMA:</span><span className="font-semibold text-red-500">$1,580</span></div>
              <div className="flex justify-between"><span className="text-gray-700">Sistema recomendado:</span><span className="font-semibold">35 kW + batería 30 kWh</span></div>
              <div className="flex justify-between"><span className="text-gray-700">Inversión estimada:</span><span className="font-semibold">$76,000</span></div>
              <div className="flex justify-between"><span className="text-gray-700">Producción solar mensual:</span><span className="font-semibold">4,550 kWh</span></div>
              <div className="flex justify-between"><span className="text-gray-700">Ahorro mensual estimado:</span><span className="font-semibold text-green-600">$1,200</span></div>
              <div className="flex justify-between border-t border-gray-300 pt-2 mt-2"><span className="text-gray-700 font-semibold">Período de recuperación:</span><span className="font-bold text-solar-yellow">~5.3 años</span></div>
              <div className="flex justify-between"><span className="text-gray-700 font-semibold">Ahorro total en 25 años:</span><span className="font-bold text-green-600">$284,000+</span></div>
            </div>
          </div>

          <p>
            Los almacenes e instalaciones industriales son candidatos ideales para la
            energía solar comercial. Tienen techos enormes y generalmente planos —
            perfectos para maximizar la cantidad de paneles. El consumo principal suele
            ser iluminación, ventilación y equipos de carga, todos con uso intensivo
            durante horas solares.
          </p>

          <h3>Caso 3: Comercio de Retail en Ponce</h3>

          <div className="not-prose bg-gray-50 rounded-xl p-6 my-6">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-gray-700">Consumo mensual promedio:</span><span className="font-semibold">2,000 kWh</span></div>
              <div className="flex justify-between"><span className="text-gray-700">Factura mensual de LUMA:</span><span className="font-semibold text-red-500">$660</span></div>
              <div className="flex justify-between"><span className="text-gray-700">Sistema recomendado:</span><span className="font-semibold">15 kW + batería 15 kWh</span></div>
              <div className="flex justify-between"><span className="text-gray-700">Inversión estimada:</span><span className="font-semibold">$35,000</span></div>
              <div className="flex justify-between"><span className="text-gray-700">Producción solar mensual:</span><span className="font-semibold">1,950 kWh</span></div>
              <div className="flex justify-between"><span className="text-gray-700">Ahorro mensual estimado:</span><span className="font-semibold text-green-600">$510</span></div>
              <div className="flex justify-between border-t border-gray-300 pt-2 mt-2"><span className="text-gray-700 font-semibold">Período de recuperación:</span><span className="font-bold text-solar-yellow">~5.7 años</span></div>
              <div className="flex justify-between"><span className="text-gray-700 font-semibold">Ahorro total en 25 años:</span><span className="font-bold text-green-600">$118,000+</span></div>
            </div>
          </div>

          <p>
            Para comercios más pequeños, un sistema de 15 kW puede cubrir prácticamente
            todo el consumo diurno. La batería protege contra apagones que de otro modo
            significarían cerrar la tienda y perder ventas. En Puerto Rico, un comercio
            con energía solar y batería tiene una ventaja competitiva real: cuando LUMA
            se va, tú sigues abierto.
          </p>

          <h2>El Valor Oculto: Continuidad Operacional</h2>

          <p>
            El ROI de un sistema solar comercial en Puerto Rico va más allá del ahorro
            en la factura eléctrica. Considera los costos invisibles de los apagones para
            un negocio:
          </p>

          <ul>
            <li><strong>Ventas perdidas:</strong> Cada hora cerrado por apagón es ingreso que no recuperas.</li>
            <li><strong>Inventario dañado:</strong> Sin refrigeración, los restaurantes y supermercados pierden miles de dólares en alimentos.</li>
            <li><strong>Productividad del personal:</strong> Empleados sin poder trabajar siguen en nómina.</li>
            <li><strong>Reputación:</strong> Los clientes recuerdan quién estaba abierto durante el apagón — y quién no.</li>
          </ul>

          <p>
            Un solo evento como un apagón de 3 días puede costarle a un restaurante
            $5,000-$15,000 entre ventas perdidas e inventario dañado. Ese costo,
            multiplicado por los apagones frecuentes de LUMA Energy, acelera
            significativamente el período de recuperación real del sistema solar.
          </p>

          <h2>Proyecto Destacado: Sistema Comercial de 25 kW en Mayagüez</h2>

          <p>
            Kilowatt PR completó recientemente un sistema comercial de 25 kW en Mayagüez,
            diseñado para un negocio con alto consumo diurno. El sistema fue diseñado por
            nuestro asesor de ingeniería, Ing. Julio A. Santiago Pérez (PE #6083), con
            estructura de montaje clasificada para vientos huracanados e incluye
            almacenamiento de batería para respaldo durante apagones.
          </p>
          <p>
            Este tipo de proyecto comercial es representativo de la oportunidad que
            existe para negocios en el área oeste de Puerto Rico, donde las tarifas de
            LUMA son las mismas que en el resto de la isla pero la irradiación solar es
            excelente — especialmente en municipios como Mayagüez, Aguada, Aguadilla,
            Cabo Rojo y San Germán.
          </p>

          <h2>Financiamiento para Sistemas Comerciales</h2>

          <p>
            La inversión inicial de un sistema comercial es mayor que la de uno
            residencial, pero las opciones de financiamiento hacen que sea accesible
            para la mayoría de los negocios:
          </p>

          <ul>
            <li><strong>Préstamos comerciales:</strong> Bancos y cooperativas en Puerto Rico ofrecen líneas de crédito comercial para proyectos de eficiencia energética.</li>
            <li><strong>Leasing solar:</strong> Pagas una mensualidad fija por el uso del sistema, generalmente menor que tu factura actual de LUMA.</li>
            <li><strong>Acuerdos de compra de energía (PPA):</strong> Un tercero instala el sistema en tu techo y te vende la energía a un precio fijo menor que la tarifa de LUMA.</li>
            <li><strong>Financiamiento directo:</strong> En Kilowatt PR trabajamos con múltiples instituciones financieras para ofrecerte las mejores opciones disponibles.</li>
          </ul>

          <h2>Conclusión: La Matemática es Clara</h2>

          <p>
            Para un negocio en Puerto Rico, la energía solar comercial no es un gasto —
            es una inversión con retorno medible. Con tarifas comerciales de LUMA Energy
            entre las más altas de Estados Unidos, el período de recuperación es de 4 a
            7 años, seguido de 18 a 21 años de energía prácticamente gratuita.
          </p>
          <p>
            Sumado a la continuidad operacional durante apagones, la protección contra
            futuros aumentos en las tarifas de LUMA, y la reducción de tu huella de
            carbono, la decisión se vuelve obvia. La pregunta no es si te conviene
            instalar solar — es cuánto estás perdiendo cada mes sin él.
          </p>
          <p>
            En Kilowatt PR, nuestros técnicos con más de una década de experiencia en
            Puerto Rico y nuestro ingeniero profesional con más de 50 años en el campo
            analizan tu consumo comercial, evalúan tu espacio de techo y te presentan un
            diseño con el ROI detallado — sin costo ni compromiso.
          </p>
        </div>

        <div className="mt-12 bg-solar-yellow/10 border border-solar-yellow/30 rounded-xl p-6 text-center">
          <p className="text-navy-dark font-bold text-lg mb-4">
            ¿Cuánto puede ahorrar tu negocio con energía solar?
          </p>
          <a
            href="https://wa.me/17874312275"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Consulta Comercial Gratis — Análisis de ROI
          </a>
        </div>
      </article>

      <FAQSection faqs={faqs} title="Preguntas sobre Energía Solar Comercial en Puerto Rico" />

      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-bold text-navy-dark mb-4">Artículos Relacionados</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/blog/cuanto-cuesta-energia-solar-puerto-rico-2026', label: 'Costos de Energía Solar 2026' },
              { href: '/blog/guia-bateria-respaldo-hogar-puerto-rico', label: 'Guía de Baterías de Respaldo' },
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
