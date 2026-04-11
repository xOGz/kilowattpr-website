import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, User } from 'lucide-react'
import { ArticleSchema, FAQSchema } from '@/components/SchemaOrg'
import FAQSection from '@/components/FAQSection'

export const metadata: Metadata = {
  title: 'Paneles Solares en Condominios de Puerto Rico — Guía Completa 2026',
  description:
    'Cómo instalar paneles solares en tu condominio en Puerto Rico. Proceso de aprobación, opciones para techos compartidos, beneficios y costos. Guía paso a paso.',
  alternates: {
    canonical: 'https://www.kilowattpr.com/blog/paneles-solares-condominio-puerto-rico',
  },
}

const faqs = [
  {
    question: '¿Se pueden instalar paneles solares en un condominio en Puerto Rico?',
    answer: 'Sí. La Ley de Condominios de Puerto Rico y regulaciones de energía renovable permiten que los propietarios instalen paneles solares en su unidad o en áreas comunes con la aprobación de la junta de directores. La tendencia es cada vez más favorable hacia la energía solar en condominios.',
  },
  {
    question: '¿Necesito permiso de la junta de directores para instalar solar?',
    answer: 'Sí, necesitas la aprobación de la junta de directores del condominio. Debes presentar una solicitud formal con los planos del sistema, el área de instalación propuesta y una carta del instalador certificado. La junta no puede negarse sin causa razonable si la instalación cumple con los códigos y no afecta la estructura del edificio.',
  },
  {
    question: '¿Cuánto cuesta un sistema solar para un apartamento en condominio?',
    answer: 'Un sistema solar para una unidad de condominio típicamente va de $8,000 a $18,000, dependiendo del tamaño (3-8 kW) y si incluye batería de respaldo. Los sistemas más pequeños para apartamentos con consumo moderado pueden comenzar desde $8,000 instalados.',
  },
  {
    question: '¿Qué pasa si me mudo del condominio después de instalar solar?',
    answer: 'Los paneles solares aumentan el valor de tu propiedad. Si vendes tu unidad, el sistema se transfiere al nuevo propietario como una mejora permanente. Esto es un punto de venta atractivo dado el alto costo de la electricidad en Puerto Rico. También puedes negociar el valor del sistema como parte del precio de venta.',
  },
]

export default function PanelesSolaresCondominioPage() {
  const publishDate = '2026-04-10'
  const url = 'https://www.kilowattpr.com/blog/paneles-solares-condominio-puerto-rico'

  return (
    <>
      <ArticleSchema
        title="Paneles Solares en Condominios de Puerto Rico — ¿Es Posible?"
        description="Cómo instalar paneles solares en tu condominio en Puerto Rico. Proceso de aprobación, opciones para techos compartidos, beneficios y costos."
        datePublished={publishDate}
        url={url}
      />
      <FAQSchema faqs={faqs} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <div className="flex items-center gap-3 text-sm text-gray-400 mb-4">
            <span className="bg-solar-yellow/10 text-solar-yellow font-medium px-3 py-1 rounded-full">
              Solar en Condominios
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
            Paneles Solares en Condominios de Puerto Rico — ¿Es Posible?
          </h1>

          <p className="article-intro text-xl text-gray-600 leading-relaxed">
            Vivir en un condominio no significa que tengas que depender exclusivamente de LUMA Energy.
            Cada vez más propietarios de condominios en Puerto Rico están instalando paneles solares
            para reducir su factura eléctrica y protegerse contra los apagones. En esta guía te
            explicamos cómo hacerlo, paso a paso.
          </p>
        </div>

        <div className="prose prose-lg max-w-none text-gray-600">
          <h2>Sí, Puedes Instalar Solar en tu Condominio</h2>

          <p>
            Muchos propietarios de condominios en Puerto Rico creen que la energía solar no es una
            opción para ellos. La realidad es diferente. La legislación puertorriqueña permite la
            instalación de sistemas de energía renovable en condominios, siempre que se siga el
            proceso de aprobación correcto y se cumplan los códigos de construcción aplicables.
          </p>
          <p>
            Puerto Rico tiene una de las{' '}
            <a href="https://www.eia.gov/electricity/monthly/epm_table_5_6_a.html" target="_blank" rel="noopener noreferrer">
              tarifas eléctricas más altas de Estados Unidos
            </a>, y los apagones frecuentes de LUMA Energy afectan por igual a casas y condominios.
            Instalar solar en tu condominio te permite tomar control de tu energía, reducir costos
            mensuales y tener respaldo durante interrupciones del servicio.
          </p>
          <p>
            La Ley de Condominios de Puerto Rico establece que los propietarios tienen derecho a
            realizar mejoras en su propiedad, incluyendo la instalación de sistemas de energía
            renovable, sujeto a la aprobación de la junta y al cumplimiento de las regulaciones
            del edificio.
          </p>

          <h2>Cómo Obtener Aprobación de la Junta de Directores</h2>

          <p>
            El proceso de aprobación varía según el condominio, pero generalmente sigue estos pasos:
          </p>

          <div className="not-prose bg-gray-50 rounded-xl p-6 my-6">
            <h3 className="font-bold text-navy-dark mb-4">Proceso de Aprobación Paso a Paso</h3>
            <div className="space-y-4">
              {[
                {
                  paso: 'Paso 1: Consulta con un Instalador Certificado',
                  detalle: 'Programa una evaluación gratuita con un instalador certificado como Kilowatt PR. El técnico evaluará tu unidad, el techo disponible y tu consumo eléctrico para diseñar un sistema a la medida.',
                },
                {
                  paso: 'Paso 2: Prepara la Documentación',
                  detalle: 'El instalador prepara los planos del sistema, especificaciones técnicas, área de instalación propuesta y carta de responsabilidad. Estos documentos son necesarios para presentar a la junta.',
                },
                {
                  paso: 'Paso 3: Presenta la Solicitud a la Junta',
                  detalle: 'Envía una solicitud formal por escrito a la junta de directores con toda la documentación. Incluye detalles sobre el impacto visual, el peso del sistema y cómo se protegerá la impermeabilización del techo.',
                },
                {
                  paso: 'Paso 4: Asiste a la Reunión de la Junta',
                  detalle: 'Es recomendable asistir a la reunión donde se discuta tu solicitud. Puedes llevar a tu instalador para responder preguntas técnicas de los demás propietarios o de la administración.',
                },
                {
                  paso: 'Paso 5: Obtén la Aprobación y Permisos',
                  detalle: 'Una vez aprobado por la junta, el instalador tramita los permisos municipales y la interconexión con LUMA Energy. El proceso de permisos toma típicamente de 4 a 8 semanas.',
                },
              ].map((item) => (
                <div key={item.paso} className="border-l-4 border-solar-yellow pl-4">
                  <p className="font-bold text-navy-dark text-sm">{item.paso}</p>
                  <p className="text-sm text-gray-600 mt-1">{item.detalle}</p>
                </div>
              ))}
            </div>
          </div>

          <p>
            Es importante saber que la junta de directores no puede negarse arbitrariamente a
            aprobar una instalación solar que cumpla con todos los códigos y no comprometa la
            estructura del edificio. Si encuentras resistencia, un instalador experimentado como
            Kilowatt PR puede ayudarte a presentar tu caso de manera profesional.
          </p>

          <h2>Opciones de Instalación para Condominios</h2>

          <p>
            Dependiendo de la estructura de tu condominio y los acuerdos con la junta, hay varias
            opciones disponibles:
          </p>

          <h3>1. Instalación Individual en Tu Unidad</h3>
          <p>
            Si tu unidad tiene acceso directo al techo (penthouses o unidades superiores), puedes
            instalar paneles solares exclusivamente para tu apartamento. Este es el escenario más
            sencillo y común. El sistema se conecta directamente a tu medidor de LUMA Energy y
            el ahorro va 100% a tu factura.
          </p>

          <h3>2. Uso de Techo Compartido con Asignación Individual</h3>
          <p>
            En edificios donde el techo es un área común, puedes solicitar una sección del techo
            para instalar tus paneles. La junta asigna un área proporcional y cada propietario
            interesado instala su propio sistema conectado a su medidor individual. Esta opción
            requiere un acuerdo claro sobre las áreas asignadas y responsabilidades de mantenimiento.
          </p>

          <h3>3. Sistema Comunitario para Áreas Comunes</h3>
          <p>
            El condominio puede instalar un sistema solar para alimentar las áreas comunes:
            elevadores, iluminación de pasillos, bombas de agua, sistemas de seguridad y aires
            acondicionados de áreas comunes. Esto reduce la cuota de mantenimiento de todos los
            propietarios y se financia como un gasto común del condominio.
          </p>

          <h2>Costos y Ahorro para Condominios</h2>

          <p>
            Los sistemas solares para condominios suelen ser más pequeños que los residenciales
            tradicionales, ya que los apartamentos generalmente consumen menos energía que una casa
            independiente. Esto se traduce en una inversión inicial más accesible.
          </p>

          <div className="not-prose bg-gray-50 rounded-xl p-6 my-6">
            <h3 className="font-bold text-navy-dark mb-4">Costos Típicos para Unidades de Condominio</h3>
            <div className="space-y-3">
              {[
                { sistema: 'Sistema 3 kW (apartamento pequeño)', precio: 'Desde $8,000', ahorro: '~$100/mes' },
                { sistema: 'Sistema 5 kW (apartamento mediano)', precio: 'Desde $12,000', ahorro: '~$170/mes' },
                { sistema: 'Sistema 8 kW (penthouse o alto consumo)', precio: 'Desde $18,000', ahorro: '~$280/mes' },
                { sistema: 'Sistema con batería de respaldo', precio: '+$8,000–$12,000', ahorro: 'Protección contra apagones' },
              ].map((row) => (
                <div key={row.sistema} className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2 border-b border-gray-200 last:border-0 gap-1">
                  <span className="text-sm text-gray-700">{row.sistema}</span>
                  <div className="flex gap-4">
                    <span className="font-bold text-solar-yellow">{row.precio}</span>
                    <span className="text-sm text-gray-500">{row.ahorro}</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-3">
              * Precios referenciales. El costo exacto depende de la evaluación de tu propiedad y la configuración del condominio.
            </p>
          </div>

          <p>
            Con tarifas de LUMA Energy que continúan entre las más altas de Estados Unidos, incluso
            un sistema pequeño de 3 kW puede generar ahorros significativos. Un sistema de $12,000
            con ahorros de $170 mensuales se paga en aproximadamente 6 años, dejando 19+ años de
            energía prácticamente gratis bajo la{' '}
            <Link href="/blog/cuanto-cuesta-energia-solar-puerto-rico-2026" className="text-solar-yellow hover:underline">
              garantía estándar de 25 años
            </Link>.
          </p>

          <p>
            Además, la instalación solar aumenta el valor de reventa de tu unidad. En un mercado
            donde todos los propietarios pagan facturas eléctricas altas, un apartamento con
            paneles solares instalados es significativamente más atractivo para compradores.
          </p>

          <p>
            Para conocer las opciones de pago disponibles, incluyendo financiamiento con pagos
            mensuales menores que tu factura actual de LUMA, consulta nuestra guía de{' '}
            <Link href="/blog/opciones-financiamiento-solar-puerto-rico" className="text-solar-yellow hover:underline">
              opciones de financiamiento solar en Puerto Rico
            </Link>.
          </p>
        </div>

        <div className="mt-12 bg-solar-yellow/10 border border-solar-yellow/30 rounded-xl p-6 text-center">
          <p className="text-navy-dark font-bold text-lg mb-2">
            ¿Vives en un condominio y quieres dejar de depender de LUMA?
          </p>
          <p className="text-gray-600 text-sm mb-4">
            Nuestros técnicos e ingenieros eléctricos con más de 3 décadas de experiencia en Puerto Rico
            evalúan tu condominio y te presentan las opciones disponibles, sin costo ni compromiso.
          </p>
          <a
            href="https://wa.me/17874312275"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Consulta Gratis por WhatsApp
          </a>
        </div>
      </article>

      <FAQSection faqs={faqs} title="Preguntas sobre Paneles Solares en Condominios" />

      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-bold text-navy-dark mb-4">Artículos Relacionados</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/blog/cuanto-cuesta-energia-solar-puerto-rico-2026', label: 'Costos de Energía Solar 2026' },
              { href: '/blog/cuanto-ahorro-energia-solar-puerto-rico', label: '¿Cuánto Puedes Ahorrar con Solar?' },
              { href: '/blog/como-funciona-interconexion-luma-energia', label: 'Interconexión con LUMA' },
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
