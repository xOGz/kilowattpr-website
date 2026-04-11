import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, User } from 'lucide-react'
import { ArticleSchema, FAQSchema } from '@/components/SchemaOrg'
import FAQSection from '@/components/FAQSection'

export const metadata: Metadata = {
  title: '¿Cómo Elegir el Mejor Instalador Solar en Puerto Rico? Guía 2026',
  description:
    'Guía para elegir el mejor instalador de paneles solares en Puerto Rico en 2026. Qué verificar: licencias, experiencia, garantías, reseñas. Checklist completo.',
  alternates: {
    canonical: 'https://www.kilowattpr.com/blog/mejor-instalador-solar-puerto-rico-2026',
  },
}

const faqs = [
  {
    question: '¿Qué licencia necesita un instalador solar en Puerto Rico?',
    answer: 'Un instalador solar en Puerto Rico necesita un perito electricista licenciado por la Junta Examinadora de Peritos Electricistas. Además, para el diseño del sistema, debe contar con un ingeniero eléctrico con licencia PE (Professional Engineer). Puedes verificar la licencia a través de DACO o directamente con la Junta Examinadora.',
  },
  {
    question: '¿Por qué es importante que el instalador sea una empresa local?',
    answer: 'Las empresas locales tienen mayor responsabilidad ante sus clientes porque operan en la misma comunidad. Conocen mejor los códigos locales, los procesos de permisos de OGPE y la interconexión con LUMA Energy. Además, pueden responder más rápido ante reclamaciones o servicios de mantenimiento. El caso de Sunnova, una empresa nacional que se declaró en bancarrota (Chapter 11), dejó a miles de clientes en Puerto Rico sin soporte.',
  },
  {
    question: '¿Cuánto tiempo tarda una instalación solar en Puerto Rico?',
    answer: 'La instalación física de paneles solares generalmente tarda de 1 a 3 días. Sin embargo, el proceso completo — que incluye diseño, permisos de OGPE, instalación e interconexión con LUMA Energy — puede tomar de 4 a 12 semanas dependiendo de la complejidad del proyecto y los tiempos de aprobación de permisos.',
  },
  {
    question: '¿Qué garantías debe ofrecer un buen instalador solar?',
    answer: 'Un instalador solar serio debe ofrecer: garantía de 25 años en paneles solares (del fabricante), garantía de 5 a 10 años en inversores y baterías (del fabricante), y garantía de mano de obra de al menos 1 a 5 años. Asegúrate de que todas las garantías estén por escrito en el contrato.',
  },
  {
    question: '¿Qué pasa si mi instalador solar cierra o se va en bancarrota?',
    answer: 'Si tu instalador cierra operaciones, las garantías de fabricante (paneles, inversores, baterías) siguen vigentes porque son independientes del instalador. Sin embargo, la garantía de mano de obra y el soporte técnico se pierden. Por eso es crucial elegir una empresa local establecida con historial verificable, no una cadena nacional que puede abandonar el mercado.',
  },
]

export default function MejorInstaladorPage() {
  const publishDate = '2026-04-10'
  const url = 'https://www.kilowattpr.com/blog/mejor-instalador-solar-puerto-rico-2026'

  return (
    <>
      <ArticleSchema
        title="¿Cómo Elegir el Mejor Instalador Solar en Puerto Rico en 2026?"
        description="Guía para elegir el mejor instalador de paneles solares en Puerto Rico en 2026. Qué verificar: licencias, experiencia, garantías, reseñas."
        datePublished={publishDate}
        url={url}
      />
      <FAQSchema faqs={faqs} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <div className="flex items-center gap-3 text-sm text-gray-400 mb-4">
            <span className="bg-solar-yellow/10 text-solar-yellow font-medium px-3 py-1 rounded-full">
              Guía del Consumidor
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
            ¿Cómo Elegir el Mejor Instalador Solar en Puerto Rico en 2026?
          </h1>

          <p className="article-intro text-xl text-gray-600 leading-relaxed">
            Elegir al instalador de paneles solares correcto es una de las decisiones más importantes
            que tomarás para tu hogar. Un buen instalador te ahorra dinero, dolores de cabeza y
            garantiza que tu sistema funcione por décadas. Un mal instalador puede costarte miles
            de dólares en reparaciones y dejarte sin garantía. En esta guía te explicamos exactamente
            qué buscar y qué evitar.
          </p>
        </div>

        <div className="prose prose-lg max-w-none text-gray-600">
          <h2>Por Qué Es Importante Elegir Bien</h2>

          <p>
            Instalar paneles solares es una inversión de entre $13,000 y $35,000 — probablemente
            una de las compras más grandes que harás para tu hogar después de la propia casa. A
            diferencia de comprar un electrodoméstico, un sistema solar requiere diseño profesional,
            permisos gubernamentales, instalación técnica y coordinación con LUMA Energy para la
            interconexión. Si algo sale mal en cualquiera de estos pasos, las consecuencias pueden
            ser costosas y peligrosas.
          </p>

          <p>
            El caso más reciente y alarmante es el de{' '}
            <strong>Sunnova Energy</strong>, una de las empresas solares más grandes de Estados
            Unidos, que se declaró en{' '}
            <a href="https://www.reuters.com/business/energy/sunnova-energy-files-chapter-11-bankruptcy-2025-01-06/" target="_blank" rel="noopener noreferrer">
              bancarrota Chapter 11
            </a>{' '}
            dejando a miles de clientes en Puerto Rico y el resto de Estados Unidos sin soporte
            técnico, sin servicio de garantía y con contratos de arrendamiento solar en el limbo.
            Muchos de estos clientes ahora buscan desesperadamente un nuevo instalador que pueda
            hacerse cargo de sus sistemas.
          </p>

          <p>
            Esta situación demuestra un punto crítico: <strong>no todos los instaladores solares
            son iguales</strong>, y el más barato o el más grande no siempre es la mejor opción.
            A continuación te presentamos los 7 criterios que debes evaluar antes de firmar
            cualquier contrato.
          </p>

          <h2>7 Criterios para Evaluar un Instalador Solar</h2>

          <div className="not-prose bg-gray-50 rounded-xl p-6 my-6">
            <h3 className="font-bold text-navy-dark mb-4">Checklist del Instalador Solar</h3>
            <div className="space-y-3">
              {[
                { criterio: 'Perito electricista licenciado', detalle: 'Verificable con Junta Examinadora / DACO' },
                { criterio: 'Ingeniero eléctrico PE para diseño', detalle: 'No solo un vendedor — un profesional certificado' },
                { criterio: 'Experiencia con permisos OGPE', detalle: 'Manejo completo del proceso de permisos' },
                { criterio: 'Reseñas verificables en Google', detalle: 'Historial público de clientes satisfechos' },
                { criterio: 'Garantías claras por escrito', detalle: 'Paneles 25 años, inversor/batería 5-10, mano de obra' },
                { criterio: 'Manejo de interconexión LUMA', detalle: 'Proceso completo hasta la conexión final' },
                { criterio: 'Empresa local establecida', detalle: 'Presencia física y compromiso con la comunidad' },
              ].map((row) => (
                <div key={row.criterio} className="flex items-start gap-3 py-2 border-b border-gray-200 last:border-0">
                  <span className="text-solar-yellow font-bold text-lg mt-0.5">✓</span>
                  <div>
                    <span className="text-sm font-semibold text-gray-800">{row.criterio}</span>
                    <span className="text-sm text-gray-500 block">{row.detalle}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <h3>1. Perito Electricista Licenciado</h3>
          <p>
            En Puerto Rico, toda instalación eléctrica — incluyendo sistemas solares — debe ser
            realizada o supervisada por un perito electricista licenciado. Esta licencia la emite
            la Junta Examinadora de Peritos Electricistas y puedes verificarla a través de{' '}
            <a href="https://daco.pr.gov/" target="_blank" rel="noopener noreferrer">DACO</a>.
            Si un instalador no puede mostrarte su licencia de perito electricista, eso es razón
            suficiente para descartarlo inmediatamente.
          </p>
          <p>
            No confundas un vendedor de paneles solares con un perito electricista. Muchas empresas
            usan vendedores para cerrar el trato y luego subcontratan la instalación a terceros.
            Pregunta directamente: <em>&ldquo;¿Quién es el perito electricista que firma y supervisa
            mi instalación?&rdquo;</em>
          </p>

          <h3>2. Ingeniero Eléctrico PE para el Diseño</h3>
          <p>
            El diseño de un sistema solar no es simplemente colocar paneles en el techo. Requiere
            cálculos de carga eléctrica, dimensionamiento del inversor, diseño del sistema de
            baterías y cumplimiento con el{' '}
            <a href="https://www.nfpa.org/codes-and-standards/nfpa-70-standard-for-electrical-safety-in-the-workplace" target="_blank" rel="noopener noreferrer">
              Código Eléctrico Nacional (NEC)
            </a>. Un ingeniero eléctrico con licencia PE (Professional Engineer) garantiza que
            el diseño sea seguro, eficiente y cumpla con todos los códigos aplicables.
          </p>

          <h3>3. Experiencia con Permisos OGPE</h3>
          <p>
            Todo sistema solar en Puerto Rico requiere permisos de la{' '}
            <a href="https://ogpe.pr.gov/" target="_blank" rel="noopener noreferrer">
              Oficina de Gerencia de Permisos (OGPE)
            </a>. El proceso puede ser complejo y lento si no se maneja correctamente. Un
            instalador experimentado conoce los requisitos, prepara la documentación completa
            y evita demoras innecesarias. Pregunta cuántas instalaciones ha completado con
            permisos OGPE en el último año.
          </p>

          <h3>4. Reseñas Verificables en Google</h3>
          <p>
            Las reseñas de Google son el indicador más confiable de la calidad de servicio porque
            son públicas, verificables y difíciles de manipular. Busca un instalador con:
          </p>
          <ul>
            <li>Al menos 10 reseñas verificadas</li>
            <li>Calificación de 4.5 estrellas o más</li>
            <li>Reseñas recientes (últimos 6 meses)</li>
            <li>Respuestas del negocio a las reseñas (indica compromiso)</li>
          </ul>
          <p>
            Desconfía de empresas sin presencia en Google o con reseñas que parecen genéricas
            o fabricadas.
          </p>

          <h3>5. Garantías Claras por Escrito</h3>
          <p>
            Un instalador serio debe ofrecer garantías claras y por escrito que cubran:
          </p>
          <ul>
            <li><strong>Paneles solares:</strong> 25 años de garantía de rendimiento (garantía del fabricante)</li>
            <li><strong>Inversores:</strong> 5 a 12 años según el modelo</li>
            <li><strong>Baterías:</strong> 5 a 10 años según el fabricante</li>
            <li><strong>Mano de obra:</strong> Mínimo 1 a 5 años cubriendo defectos de instalación</li>
          </ul>
          <p>
            Asegúrate de que las garantías estén detalladas en el contrato. Una garantía verbal
            no tiene valor legal.
          </p>

          <h3>6. Manejo Completo de la Interconexión con LUMA</h3>
          <p>
            La{' '}
            <Link href="/blog/como-funciona-interconexion-luma-energia" className="text-solar-yellow hover:underline">
              interconexión con LUMA Energy
            </Link>{' '}
            es uno de los pasos más frustrantes del proceso solar. Un buen instalador se encarga
            de todo el proceso: solicitud, inspección, aprobación y activación del medidor
            bidireccional. Si el instalador te dice que la interconexión &ldquo;es tu
            responsabilidad&rdquo;, busca otro.
          </p>

          <h3>7. Empresa Local vs. Cadena Nacional</h3>
          <p>
            El caso de Sunnova demostró los riesgos de depender de una empresa nacional que puede
            abandonar el mercado de Puerto Rico sin previo aviso. Una empresa local:
          </p>
          <ul>
            <li>Tiene compromiso con la comunidad donde opera</li>
            <li>Puede responder rápidamente a llamadas de servicio</li>
            <li>Conoce las condiciones locales (huracanes, salinidad, códigos municipales)</li>
            <li>No va a desaparecer después de cerrar la venta</li>
            <li>Tiene reputación que proteger en su propia comunidad</li>
          </ul>

          <h2>Preguntas Que Debes Hacer Antes de Firmar</h2>

          <p>
            Antes de firmar cualquier contrato con un instalador solar, haz estas preguntas y
            exige respuestas claras:
          </p>

          <ol>
            <li><strong>&ldquo;¿Cuál es el número de licencia de su perito electricista?&rdquo;</strong> — Debe poder dártelo inmediatamente.</li>
            <li><strong>&ldquo;¿Quién diseña el sistema? ¿Es un ingeniero eléctrico PE?&rdquo;</strong> — El diseño no debe hacerlo un vendedor.</li>
            <li><strong>&ldquo;¿Ustedes manejan los permisos de OGPE y la interconexión con LUMA?&rdquo;</strong> — La respuesta debe ser sí a ambos.</li>
            <li><strong>&ldquo;¿Puedo ver sus reseñas en Google?&rdquo;</strong> — Un negocio legítimo tiene presencia pública.</li>
            <li><strong>&ldquo;¿Qué garantías incluye el contrato por escrito?&rdquo;</strong> — Exige detalles específicos.</li>
            <li><strong>&ldquo;¿Qué marcas de paneles, inversores y baterías usan?&rdquo;</strong> — Investiga las marcas por tu cuenta.</li>
            <li><strong>&ldquo;¿Cuántas instalaciones han completado en Puerto Rico?&rdquo;</strong> — Experiencia verificable.</li>
            <li><strong>&ldquo;¿Visitarán mi techo antes de dar un precio final?&rdquo;</strong> — Nadie puede cotizar bien sin ver el techo.</li>
          </ol>

          <h2>Señales de Alerta (Red Flags)</h2>

          <p>
            Si un instalador presenta cualquiera de estas señales de alerta, procede con
            extrema precaución o busca otra opción:
          </p>

          <div className="not-prose bg-red-50 rounded-xl p-6 my-6">
            <h3 className="font-bold text-red-800 mb-4">🚩 Red Flags — Señales de Peligro</h3>
            <div className="space-y-3">
              {[
                'No tiene perito electricista propio — subcontrata toda la instalación',
                'Solo vende por teléfono sin visitar tu techo antes de cotizar',
                'Promete precios imposiblemente bajos para cerrar rápido',
                'No maneja permisos de OGPE — te dice que lo hagas tú',
                'Sin presencia verificable en Google (sin reseñas, sin perfil)',
                'Presiona para firmar "hoy" con descuentos que vencen mañana',
                'No puede explicar claramente qué equipo instalará',
                'Pide el pago total por adelantado antes de comenzar',
              ].map((flag) => (
                <div key={flag} className="flex items-start gap-3 py-2 border-b border-red-200 last:border-0">
                  <span className="text-red-600 font-bold">✕</span>
                  <span className="text-sm text-red-800">{flag}</span>
                </div>
              ))}
            </div>
          </div>

          <h2>Conclusión: Invierte Tiempo en Elegir Bien</h2>

          <p>
            Un sistema solar es una inversión que debe durarte 25 años o más. Dedicar unas
            horas a verificar licencias, leer reseñas y hacer las preguntas correctas puede
            ahorrarte miles de dólares y años de frustración. No te dejes llevar solo por
            el precio más bajo — busca un instalador que combine competencia técnica,
            transparencia y compromiso local.
          </p>

          <p>
            En Kilowatt PR, cada sistema es diseñado por el Ing. Julio Santiago Pérez
            (PE #6083) e instalado bajo la supervisión del perito electricista Xavier Acevedo
            Santiago (Lic. #21309). Somos una empresa local de Aguada con 4.9 estrellas en
            Google y más de una década de experiencia en instalaciones solares en Puerto Rico.
            Te invitamos a verificar nuestras credenciales y compararlas con cualquier otro
            instalador.
          </p>
        </div>

        <div className="mt-12 bg-solar-yellow/10 border border-solar-yellow/30 rounded-xl p-6 text-center">
          <p className="text-navy-dark font-bold text-lg mb-2">
            ¿Buscas un instalador solar confiable en Puerto Rico?
          </p>
          <p className="text-gray-600 text-sm mb-4">
            Consulta gratis — verificamos tu techo, diseñamos tu sistema y te presentamos
            un presupuesto detallado sin compromiso.
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

      <FAQSection faqs={faqs} title="Preguntas Frecuentes sobre Instaladores Solares en Puerto Rico" />

      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-bold text-navy-dark mb-4">Artículos Relacionados</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/blog/cuanto-cuesta-energia-solar-puerto-rico-2026', label: 'Costos de Energía Solar 2026' },
              { href: '/blog/como-funciona-interconexion-luma-energia', label: 'Interconexión con LUMA' },
              { href: '/blog/errores-comunes-contratar-instalador-solar', label: 'Errores al Contratar Instalador' },
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
