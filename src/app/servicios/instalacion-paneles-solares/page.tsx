import type { Metadata } from 'next'
import Link from 'next/link'
import { FAQSchema } from '@/components/SchemaOrg'
import FAQSection from '@/components/FAQSection'
import QuoteForm from '@/components/QuoteForm'
import { CheckCircle, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Instalación de Paneles Solares en Puerto Rico',
  description:
    'Kilowatt PR instala sistemas de paneles solares residenciales y comerciales en toda Puerto Rico. Técnicos certificados, gestión de permisos ARPE y LUMA. Cotización gratis.',
  alternates: { canonical: 'https://www.kilowattpr.com/servicios/instalacion-paneles-solares' },
}

const faqs = [
  {
    question: '¿Qué tamaño de sistema solar necesito en Puerto Rico?',
    answer: 'El tamaño de tu sistema solar depende de tu consumo eléctrico mensual medido en kWh. La mayoría de los hogares residenciales en Puerto Rico necesitan entre 5kW y 10kW. Para determinarlo con precisión, analizamos tus últimas 12 facturas de LUMA Energy durante la consulta gratis. Un sistema bien dimensionado puede eliminar entre el 80% y el 100% de tu factura eléctrica.',
  },
  {
    question: '¿Cómo funciona la interconexión con LUMA Energy en Puerto Rico?',
    answer: 'La interconexión con LUMA Energy es el proceso oficial para conectar tu sistema solar a la red eléctrica. Kilowatt PR maneja todo este proceso por ti: preparamos la solicitud de interconexión, coordinamos la inspección de LUMA, y nos aseguramos de que tu medidor bidireccional esté instalado correctamente. Este proceso puede tomar entre 3 y 6 semanas adicionales a la instalación.',
  },
  {
    question: '¿Necesito permiso de ARPE para instalar paneles solares en Puerto Rico?',
    answer: 'Sí, la instalación de paneles solares en Puerto Rico requiere permisos de ARPE (Administración de Reglamentos y Permisos). Este proceso incluye la presentación de planos estructurales y eléctricos. Kilowatt PR gestiona todos estos permisos como parte del servicio de instalación, sin costo adicional para el cliente.',
  },
  {
    question: '¿Los paneles solares resisten los huracanes en Puerto Rico?',
    answer: 'Los paneles solares que instalamos están certificados para resistir vientos de hasta 130-140 mph según los estándares de la isla. Instalamos los soportes con materiales de acero inoxidable y sistemas de fijación reforzados diseñados para las condiciones de huracanes de Puerto Rico. Además, los paneles cuentan con garantía de 25 años del fabricante.',
  },
]

export default function InstalacionPanelesSolaresPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />

      <section className="bg-navy-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Instalación de Paneles Solares en{' '}
            <span className="text-solar-yellow">Puerto Rico</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Sistemas fotovoltaicos residenciales y comerciales instalados por técnicos y
            jornaleros con más de una década de experiencia en Puerto Rico.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              La instalación de paneles solares en Puerto Rico es una de las decisiones
              financieras más inteligentes que puedes tomar hoy. Con tarifas eléctricas entre
              las más altas de todo Estados Unidos y una infraestructura de LUMA Energy que
              experimenta interrupciones frecuentes, los sistemas fotovoltaicos ofrecen
              independencia real y ahorros medibles desde el primer mes.
            </p>
            <p>
              En Kilowatt PR, cada instalación comienza con un análisis completo de tu consumo
              eléctrico y una evaluación de tu techo. Diseñamos el sistema en 3D para optimizar
              la captación solar según la orientación e inclinación específica de tu propiedad.
              Luego gestionamos todos los permisos de ARPE y el proceso de interconexión con
              LUMA Energy, sin que tengas que hacer nada.
            </p>
            <p>
              Trabajamos con los paneles solares de mayor calidad disponibles en el mercado,
              con garantías de 25 años de rendimiento. Nuestros inversores y sistemas de
              monitoreo te permiten ver en tiempo real cuánta energía estás produciendo, cuánto
              estás consumiendo y cuánto estás ahorrando.
            </p>
            <p>
              El proceso completo desde la firma del contrato hasta la activación del sistema
              toma entre 6 y 10 semanas. La instalación física se completa generalmente en
              1 a 2 días. Durante todo el proceso, tu gerente de proyecto en Kilowatt PR
              estará disponible para responder cualquier pregunta.
            </p>
            <p>
              Los sistemas que instalamos están diseñados específicamente para las condiciones
              de Puerto Rico: resistencia a vientos huracanados, calor tropical, alta humedad,
              polvo del Sahara y ambientes costeros con salitre. Cada sistema viene con una
              garantía completa de mano de obra adicional a las garantías de fábrica de los
              equipos.
            </p>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-bold text-navy-dark mb-6">
              ¿Cómo Funciona el Proceso de Instalación?
            </h2>
            <div className="space-y-4">
              {[
                { step: '1', title: 'Consulta Gratis', desc: 'Análisis de consumo, diseño 3D del sistema y proyección de ahorros a 25 años. Sin costo, sin compromiso.' },
                { step: '2', title: 'Firma de Contrato', desc: 'Revisamos todos los detalles del sistema, costo, financiamiento disponible y cronograma de trabajo.' },
                { step: '3', title: 'Permisos y Diseño Final', desc: 'Gestionamos los permisos de ARPE y sometemos la solicitud de interconexión a LUMA Energy.' },
                { step: '4', title: 'Instalación', desc: 'Nuestro equipo instala el sistema en 1–2 días con mínima interferencia en tu rutina diaria.' },
                { step: '5', title: 'Inspecciones y Activación', desc: 'Coordinamos las inspecciones requeridas y la activación del medidor bidireccional con LUMA Energy.' },
                { step: '6', title: 'Seguimiento', desc: 'Te enseñamos a monitorear tu sistema y estamos disponibles para cualquier consulta post-instalación.' },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="w-8 h-8 bg-solar-yellow text-navy-dark rounded-full flex items-center justify-center font-bold shrink-0 text-sm">
                    {item.step}
                  </div>
                  <div>
                    <p className="font-bold text-navy-dark">{item.title}</p>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-bold text-navy-dark mb-6">¿Qué Incluye Nuestra Instalación?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Paneles solares de alta eficiencia',
                'Inversor string o microinversores',
                'Estructura de montaje en acero inoxidable',
                'Cableado y protecciones eléctricas',
                'Sistema de monitoreo en tiempo real',
                'Gestión completa de permisos ARPE',
                'Solicitud de interconexión con LUMA',
                'Garantía de 25 años en paneles',
                'Orientación para el cliente',
                'Soporte post-instalación',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="text-solar-yellow shrink-0" size={16} />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 bg-solar-yellow/10 border border-solar-yellow/30 rounded-xl p-8">
            <h3 className="text-navy-dark font-bold text-lg mb-5 text-center">
              ¿Listo para dejar de pagarle tanto a LUMA Energy?
            </h3>
            <QuoteForm defaultService="Instalación de paneles solares" />
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title="Preguntas sobre Instalación Solar en Puerto Rico" />

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-bold text-navy-dark mb-4">Servicios Relacionados</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/servicios/sistemas-con-bateria', label: 'Sistemas con Batería' },
              { href: '/servicios/sellado-de-techo', label: 'Sellado de Techo' },
              { href: '/servicios/mantenimiento-lavado', label: 'Mantenimiento y Lavado' },
            ].map((s) => (
              <Link key={s.href} href={s.href} className="flex items-center gap-1 text-solar-yellow font-medium hover:underline">
                {s.label} <ArrowRight size={14} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
