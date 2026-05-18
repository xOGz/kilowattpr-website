import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, User } from 'lucide-react'
import { ArticleSchema, FAQSchema } from '@/components/SchemaOrg'
import FAQSection from '@/components/FAQSection'

export const metadata: Metadata = {
  title:
    'Mi Instalador Solar Quebró (Sunnova, Freedom Forever): Qué Hacer en Puerto Rico',
  description:
    'Sunnova y Freedom Forever quebraron en 2025–2026. Si tu instalador solar cerró, tu sistema, garantías y monitoreo siguen siendo tuyos. Guía paso a paso para clientes en Puerto Rico.',
  alternates: {
    canonical:
      'https://www.kilowattpr.com/blog/que-hacer-si-tu-instalador-solar-quebro/',
  },
}

const faqs = [
  {
    question:
      '¿Mis paneles solares siguen funcionando si Sunnova quebró?',
    answer:
      'Sí. Tus paneles solares, inversor y batería son equipo físico instalado en tu propiedad y siguen produciendo energía aunque el instalador haya quebrado. La quiebra de Sunnova (Capítulo 11 en junio de 2025) afecta a la empresa que vendió o financió tu sistema, no al hardware mismo. Lo que sí puede cambiar es a quién le pagas el lease/PPA, quién atiende el monitoreo y quién honra las garantías de mano de obra. Las garantías del fabricante de los paneles (típicamente 25 años) y del inversor (5 a 12 años) las honra el fabricante directamente, no el instalador.',
  },
  {
    question:
      '¿Qué pasa con mi contrato de lease o PPA con Sunnova ahora que quebró?',
    answer:
      'Tu contrato de lease o PPA es un activo financiero de la empresa, y durante una quiebra Capítulo 11 esos contratos típicamente se venden a otro operador o servicer. En la práctica esto significa que vas a recibir notificación de a quién le tienes que pagar la mensualidad ahora. NO dejes de pagar sin orientación legal — incumplir el contrato puede afectar tu crédito y los derechos sobre el sistema. La firma legal Vargas Gonzalez Delombard publicó una guía específica para clientes en Puerto Rico que recomendamos consultar.',
  },
  {
    question:
      '¿Quién va a hacerle servicio a mi sistema solar ahora?',
    answer:
      'Cualquier instalador licenciado en Puerto Rico puede dar servicio a tu sistema, sin importar quién lo instaló originalmente. Lo que necesitas es un contratista eléctrico con licencia de Puerto Rico (no solo "vendedor" o broker), preferiblemente con un perito electricista en planta y, para sistemas con batería e inversor híbrido, con experiencia específica en tu marca de equipo (Sol-Ark, SolarEdge, Enphase, Tesla, FranklinWH, etc.). Kilowatt PR atiende sistemas instalados por terceros — diagnóstico, reparación, mantenimiento y reemplazo de componentes — en los 78 municipios.',
  },
  {
    question:
      '¿Cómo sé si mi garantía de paneles solares todavía es válida?',
    answer:
      'Las garantías de los paneles solares (rendimiento y materiales) las da el fabricante directamente — no el instalador. Para reclamarla necesitas: (1) el modelo y número de serie de los paneles, (2) la fecha de instalación, (3) prueba de la instalación profesional original. Esta información debe estar en tu paquete de cierre del contrato original, en la etiqueta del inversor, o en la app de monitoreo. Si no la tienes, podemos hacerle una inspección a tu sistema y documentar el equipo. Lo mismo aplica a la garantía del inversor y de la batería.',
  },
  {
    question:
      '¿Es seguro contratar otro instalador para que asuma mi sistema?',
    answer:
      'Sí, siempre que sea un contratista eléctrico con licencia activa en Puerto Rico. Verifica tres cosas antes de firmar: (1) número de licencia de contratista eléctrico (no solo permiso de hacer negocios), (2) que tenga seguro de responsabilidad civil vigente, y (3) que esté dispuesto a documentar por escrito qué garantías está ofreciendo sobre el trabajo nuevo (no puede heredar las garantías de mano de obra del instalador original). Pide siempre referencias verificables y reseñas en Google con fotos reales — no solo testimonios pegados al sitio web.',
  },
  {
    question:
      '¿Kilowatt PR puede tomar mi sistema instalado por Sunnova, Windmar, Power Solar u otro?',
    answer:
      'Sí. Kilowatt PR ofrece servicio, diagnóstico y mantenimiento de sistemas instalados por terceros, sin importar el instalador original. El primer paso es una inspección profesional (sin costo de evaluación inicial vía WhatsApp): verificamos estado de paneles, inversor, batería, conexión a LUMA, condición del sellado de techo y documentación. Después te damos un reporte por escrito con qué está bien, qué necesita atención y un estimado para cualquier trabajo necesario. Llama o escribe al 787-431-2275.',
  },
]

export default function InstaladorSolarQuebroPage() {
  const publishDate = '2026-05-02'
  const modifyDate = '2026-05-02'
  const url =
    'https://www.kilowattpr.com/blog/que-hacer-si-tu-instalador-solar-quebro/'

  return (
    <>
      <ArticleSchema
        title="Mi Instalador Solar Quebró (Sunnova, Freedom Forever): Qué Hacer en Puerto Rico"
        description="Sunnova y Freedom Forever quebraron en 2025–2026. Si tu instalador solar cerró, tu sistema, garantías y monitoreo siguen siendo tuyos. Guía paso a paso para clientes en Puerto Rico."
        datePublished={publishDate}
        dateModified={modifyDate}
        url={url}
      />
      <FAQSchema faqs={faqs} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <div className="flex items-center gap-3 text-sm text-gray-400 mb-4">
            <span className="bg-solar-yellow/10 text-solar-yellow font-medium px-3 py-1 rounded-full">
              Servicio post-instalación
            </span>
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <time dateTime={publishDate}>2 de mayo de 2026</time>
            </div>
            <div className="flex items-center gap-1">
              <User size={14} />
              <Link
                href="/equipo/xavier-acevedo"
                className="hover:text-solar-yellow transition-colors"
              >
                Xavier Acevedo Santiago, Lic. #21309
              </Link>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">
            Mi Instalador Solar Quebró: Qué Hacer en Puerto Rico (Sunnova,
            Freedom Forever y otros)
          </h1>

          <p className="article-intro text-xl text-gray-600 leading-relaxed">
            Sunnova se acogió a Capítulo 11 en junio de 2025. Freedom Forever
            cerró el ciclo de quiebras del solar residencial en abril de 2026.
            En el medio: SunPower, Lumio, PosiGen, Mosaic, Titan. Si tu sistema
            fue instalado por uno de ellos, esta guía te dice exactamente qué
            cambia, qué no cambia y los próximos pasos para mantener tu
            inversión protegida.
          </p>
        </div>

        <div className="prose prose-lg max-w-none text-gray-600">
          <h2>Lo Primero: Tu Sistema Solar Sigue Siendo Tuyo</h2>

          <p>
            Hay mucha confusión y miedo cuando un instalador grande quiebra.
            Empecemos por lo más importante: <strong>los paneles, el inversor
            y la batería instalados en tu propiedad son equipo físico</strong>.
            Producen energía hoy, mañana y dentro de 5 años, sin importar si
            la empresa que te los vendió todavía existe.
          </p>

          <p>
            Lo que cambia con una quiebra es la <em>relación de servicio</em>:
            quién atiende llamadas de soporte, quién hace el monitoreo
            remoto, quién honra las garantías de mano de obra y, si tienes
            lease o PPA, a quién le pagas la mensualidad. Todo eso se puede
            reemplazar. El sistema mismo sigue funcionando.
          </p>

          <h2>Mapa de Quiebras del Solar Residencial 2024–2026</h2>

          <p>
            En los últimos 24 meses, la industria del solar residencial en
            Estados Unidos vivió una cascada de quiebras sin precedentes. Esto
            es lo que ocurrió y por qué importa en Puerto Rico:
          </p>

          <div className="not-prose bg-gray-50 rounded-xl p-6 my-6">
            <h3 className="font-bold text-navy-dark mb-4">
              Quiebras Recientes y su Impacto en PR
            </h3>
            <div className="space-y-3">
              {[
                {
                  empresa: 'SunPower',
                  fecha: 'Agosto 2024',
                  impacto:
                    'Marca premium con clientes en PR; venta de activos a Complete Solaria',
                },
                {
                  empresa: 'Lumio',
                  fecha: 'Septiembre 2024',
                  impacto:
                    'Operación principalmente en EE.UU. continental',
                },
                {
                  empresa: 'Mosaic (financiamiento)',
                  fecha: 'Junio 2025',
                  impacto:
                    'Financiamiento solar; clientes con préstamos Mosaic deben verificar a quién le pagan ahora',
                },
                {
                  empresa: 'Sunnova',
                  fecha: 'Junio 2025',
                  impacto:
                    'Presencia fuerte en PR vía fondo DOE para comunidades vulnerables; clientes con lease/PPA y panel/batería instalados',
                },
                {
                  empresa: 'PosiGen',
                  fecha: 'Septiembre 2025',
                  impacto:
                    'Modelo de lease para clientes de bajos ingresos',
                },
                {
                  empresa: 'Titan Solar',
                  fecha: 'Diciembre 2025',
                  impacto: 'Operaciones en sureste de EE.UU.',
                },
                {
                  empresa: 'Freedom Forever',
                  fecha: 'Abril 2026',
                  impacto:
                    'Mayor instalador residencial nacional al momento de la quiebra',
                },
              ].map((row) => (
                <div
                  key={row.empresa}
                  className="border-b border-gray-200 last:border-0 pb-3 last:pb-0"
                >
                  <p className="font-bold text-navy-dark">
                    {row.empresa} — <span className="font-normal text-sm text-gray-600">{row.fecha}</span>
                  </p>
                  <p className="text-sm text-gray-700">{row.impacto}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-4">
              Fuentes: presentaciones de Capítulo 11 publicadas, cobertura de
              Bloomberg Law sobre Sunnova en Puerto Rico, y reportes de la
              industria solar residencial 2024–2026.
            </p>
          </div>

          <h2>Sunnova en Puerto Rico: el Caso Más Relevante</h2>

          <p>
            Sunnova fue uno de los instaladores y financistas con presencia más
            grande en Puerto Rico, en parte por su rol en el fondo del
            Departamento de Energía federal (DOE) para instalar paneles y
            baterías en comunidades vulnerables. Después de su quiebra,
            instaladores locales —Windmar, Power Solar, Integrated Solar
            Operations— llegaron a presentar reclamaciones contra Sunnova por
            millones en pagos pendientes del fondo DOE.
          </p>

          <p>
            Si eres cliente de Sunnova en PR, hay dos escenarios distintos:
          </p>

          <ul>
            <li>
              <strong>Compraste tu sistema (cash o préstamo bancario):</strong>{' '}
              El sistema es tuyo. La quiebra de Sunnova no afecta tu propiedad
              del equipo. Necesitas un nuevo proveedor de servicio de
              mantenimiento y monitoreo. Las garantías de fabricante (paneles,
              inversor, batería) las honras directamente con el fabricante.
            </li>
            <li>
              <strong>Tienes lease o PPA con Sunnova:</strong> El contrato es
              un activo de la empresa que típicamente se vende durante el
              proceso de quiebra. Vas a recibir notificación oficial de a
              quién le pagas ahora. <strong>No dejes de pagar sin orientación
              legal</strong> — incumplir puede afectar tu crédito y los
              derechos sobre el sistema. Consulta con un abogado especializado
              antes de tomar acción.
            </li>
          </ul>

          <h2>Checklist: 7 Pasos Si Tu Instalador Solar Quebró</h2>

          <div className="not-prose bg-blue-50 border border-blue-200 rounded-xl p-6 my-6">
            <h3 className="font-bold text-navy-dark mb-4">
              Plan de Acción de 30 Días
            </h3>
            <ol className="space-y-3 text-sm text-gray-800">
              <li>
                <strong>1. Localiza tu paquete de cierre.</strong> Busca el
                contrato original, hoja de especificaciones del sistema,
                números de serie de paneles e inversor, y certificado de
                interconexión con LUMA. Si no los tienes, pídelos por escrito
                al servicer actual o consíguelos vía la app de monitoreo.
              </li>
              <li>
                <strong>2. Verifica el estado actual del sistema.</strong>{' '}
                Abre la app de monitoreo. Confirma que el sistema está
                produciendo, que la batería se carga (si tienes), y que no hay
                códigos de error en el inversor. Toma capturas de pantalla.
              </li>
              <li>
                <strong>3. Si tienes lease o PPA, no dejes de pagar.</strong>{' '}
                Espera comunicación oficial sobre a quién le toca cobrar
                ahora. Consulta con un abogado de quiebras o con un abogado
                de derecho del consumidor en Puerto Rico antes de hacer
                cambios al contrato.
              </li>
              <li>
                <strong>4. Documenta toda comunicación.</strong> Guarda
                emails, cartas y mensajes del instalador original o del
                trustee de la quiebra. Pueden ser importantes para cualquier
                reclamación futura de garantía.
              </li>
              <li>
                <strong>5. Contrata una inspección profesional.</strong> Un
                contratista eléctrico licenciado en PR puede inspeccionar
                físicamente el sistema, confirmar que está bien instalado,
                identificar cualquier riesgo, y darte un reporte por escrito.
                Esto te protege para los próximos años.
              </li>
              <li>
                <strong>6. Establece un nuevo proveedor de servicio.</strong>{' '}
                Necesitas a alguien que conteste cuando algo falle. Confirma
                con qué garantía cubre su trabajo (no puede heredar las
                garantías de mano de obra del instalador original, pero sí
                debe garantizar el suyo).
              </li>
              <li>
                <strong>7. Considera ampliar (no reemplazar).</strong> Si tu
                sistema actual quedó pequeño o sin batería, agregar capacidad
                es típicamente mucho más económico que reemplazar todo. Un
                inversor híbrido puede convertir un sistema solo solar en
                solar + batería sin tirar lo que ya tienes.
              </li>
            </ol>
          </div>

          <h2>Cómo Verificar a un Nuevo Instalador en Puerto Rico</h2>

          <p>
            La quiebra de tu instalador no debería empujarte a tomar la
            primera oferta que llegue por mensaje. Verifica antes de firmar:
          </p>

          <ul>
            <li>
              <strong>Licencia de contratista eléctrico de PR vigente</strong>{' '}
              (no es lo mismo que un permiso de hacer negocios o un &ldquo;dealer
              ID&rdquo; del fabricante de paneles).
            </li>
            <li>
              <strong>Perito electricista licenciado en planta</strong> que
              firme las instalaciones — no solo vendedores.
            </li>
            <li>
              <strong>Seguro de responsabilidad civil activo</strong>{' '}
              (pídele certificado).
            </li>
            <li>
              <strong>Reseñas verificables en Google con fotos reales</strong>{' '}
              — no testimonios pegados al sitio web sin fuente.
            </li>
            <li>
              <strong>Garantía de mano de obra por escrito</strong> sobre el
              trabajo que están haciendo (típicamente 1 a 2 años en sellado
              de techo y conexión eléctrica).
            </li>
            <li>
              <strong>Experiencia con tu marca específica de equipo</strong>{' '}
              (especialmente para baterías e inversores híbridos).
            </li>
          </ul>

          <h2>Por Qué Local Importa Después de una Quiebra Nacional</h2>

          <p>
            Las quiebras de Sunnova, Freedom Forever, SunPower y compañía
            tienen algo en común: eran empresas nacionales con modelos
            financieros agresivos, expansión rápida y poca o ninguna
            operación física en la mayoría de los mercados donde vendían.
            Cuando colapsaron, los clientes en Puerto Rico se quedaron
            haciendo llamadas a un call center sin respuesta.
          </p>

          <p>
            Un instalador local con base física en Puerto Rico no desaparece
            con una llamada del trustee en Houston. Kilowatt PR opera desde
            Aguada, con perito electricista licenciado #21309 en planta,
            ingeniero PE licenciado #6083 firmando los diseños, y un equipo
            que ha trabajado en la isla por más de una década —operando
            durante el huracán María, durante la crisis de transición a LUMA,
            y durante todos los apagones que han pasado en el medio.
          </p>

          <h2>Próximo Paso</h2>

          <p>
            Si tu instalador solar quebró —o si simplemente ya no contesta el
            teléfono— escríbenos por WhatsApp al{' '}
            <a
              href="https://wa.me/17874312275"
              target="_blank"
              rel="noopener noreferrer"
              className="text-solar-yellow font-semibold"
            >
              787-431-2275
            </a>{' '}
            con una foto del inversor y, si la tienes, una captura de la app
            de monitoreo. Te damos diagnóstico inicial gratis y, si necesitas
            una inspección física, agendamos visita en cualquier municipio.
          </p>

          <p>
            Tu sistema solar es una inversión de $15,000 a $35,000+. La
            quiebra del instalador no debería ponerla en riesgo —pero sí
            necesita un plan de servicio. Estamos para ayudarte a construirlo.
          </p>
        </div>

        <div className="not-prose bg-navy-dark text-white rounded-2xl p-8 my-12">
          <h3 className="font-display text-2xl font-bold mb-3">
            ¿Tu instalador solar cerró? Pide diagnóstico gratis.
          </h3>
          <p className="text-gray-300 mb-6">
            Inspeccionamos sistemas instalados por Sunnova, Freedom Forever,
            SunPower, Windmar, Power Solar y cualquier otro instalador.
            Reporte por escrito sin compromiso.
          </p>
          <a
            href="https://wa.me/17874312275?text=Hola%2C%20mi%20instalador%20solar%20quebr%C3%B3%20y%20necesito%20diagn%C3%B3stico"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            Diagnóstico Gratis por WhatsApp
          </a>
        </div>

        <FAQSection faqs={faqs} />
      </article>
    </>
  )
}
