import type { Metadata } from 'next'
import Link from 'next/link'
import { FAQSchema } from '@/components/SchemaOrg'
import FAQSection from '@/components/FAQSection'
import QuoteForm from '@/components/QuoteForm'
import { Wrench, CheckCircle, ArrowRight } from 'lucide-react'
import { buildAlternates } from '@/lib/alternates'

export const metadata: Metadata = {
  title: 'Mantenimiento y Lavado de Paneles Solares en Puerto Rico',
  description:
    'Servicio de mantenimiento y lavado de paneles solares en Puerto Rico. Kilowatt PR: cada 6–8 meses estándar, cada 4–6 meses en zonas costeras. Técnicos certificados.',
  ...buildAlternates({
    es: '/servicios/mantenimiento-lavado',
    en: '/en/services/maintenance',
  }),
}

const faqs = [
  {
    question: '¿Con qué frecuencia debo limpiar los paneles solares en Puerto Rico?',
    answer: 'En Puerto Rico recomendamos mantenimiento y lavado cada 6 a 8 meses para sistemas en el interior de la isla. Para propiedades en zonas costeras, la frecuencia ideal es cada 4 a 6 meses, ya que la acumulación de salitre, polvo del Sahara y humedad es significativamente mayor. Las tormentas y temporadas de lluvia también aumentan la necesidad de mantenimiento preventivo. Un panel sucio puede perder entre el 15% y el 25% de su eficiencia.',
  },
  {
    question: '¿Qué incluye el servicio de mantenimiento preventivo?',
    answer: 'Nuestro servicio incluye limpieza profesional de los paneles con agua purificada y soluciones especializadas, inspección visual de las células solares para detectar grietas o daños, revisión del inversor y las conexiones eléctricas, verificación del sistema de monitoreo, y un reporte escrito del estado del sistema con recomendaciones. Si detectamos algún problema durante la inspección, te lo comunicamos inmediatamente con opciones de solución.',
  },
  {
    question: '¿Puedo limpiar los paneles solares yo mismo?',
    answer: 'Técnicamente es posible, pero no lo recomendamos por varias razones. Subir al techo sin equipo de seguridad adecuado representa un riesgo real. Usar productos de limpieza incorrectos puede dañar el recubrimiento antireflectante de los paneles y anular la garantía. Además, sin acceso al sistema de monitoreo y al conocimiento técnico, no podrías detectar problemas eléctricos o de degradación que solo se identifican con una inspección profesional.',
  },
  {
    question: '¿El mantenimiento es necesario si mis paneles se ven limpios?',
    answer: 'Sí, aunque los paneles puedan verse limpios a simple vista, acumulan una capa fina de polvo, salitre, residuos de aves y biofilm que reduce la transmisión de luz. El polvo del Sahara, que llega regularmente a Puerto Rico entre mayo y agosto, forma una capa especialmente difícil de ver pero muy efectiva para reducir la producción. Además, la inspección visual interna y la revisión de componentes eléctricos solo es posible con una visita profesional.',
  },
]

export default function MantenimientoLavadoPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />

      <section className="bg-navy-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 bg-solar-yellow/20 rounded-xl flex items-center justify-center">
              <Wrench className="text-solar-yellow" size={28} />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Mantenimiento y Lavado de Paneles Solares en{' '}
            <span className="text-solar-yellow">Puerto Rico</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Mantén tu sistema solar al 100% de su eficiencia. Programas de mantenimiento
            diseñados para las condiciones climáticas únicas de Puerto Rico.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              Instalarte un sistema solar es solo el comienzo. Para que tu inversión produzca
              el máximo retorno durante los 25 años de vida del sistema, el mantenimiento
              regular es esencial. Puerto Rico presenta condiciones climáticas únicas que
              hacen que el mantenimiento sea especialmente importante: polvo del Sahara,
              salitre marino, alta humedad tropical, deposiciones de aves y vegetación
              que reduce la luz en algunas orientaciones.
            </p>
            <p>
              Un panel solar sucio puede perder entre el 15% y el 25% de su eficiencia,
              dependiendo del tipo y cantidad de contaminación. En un sistema de 10kW,
              eso representa una pérdida de producción significativa que se traduce en
              más dinero pagado a LUMA Energy del necesario. El mantenimiento regular
              previene esta pérdida y protege la garantía de tus paneles.
            </p>
            <p>
              Nuestro equipo de peritos electricistas e ingenieros eléctricos con más de 3 décadas de experiencia
              en Puerto Rico realiza el mantenimiento con agua purificada y soluciones
              de limpieza específicas para paneles solares. No usamos agua con minerales
              que dejen manchas ni productos abrasivos que dañen el recubrimiento de los
              paneles. Cada limpieza se realiza siguiendo los protocolos recomendados
              por los fabricantes.
            </p>
            <p>
              Recomendamos mantenimiento cada 6 a 8 meses para la mayoría de las propiedades
              en Puerto Rico. Para propiedades en zonas costeras, aumentamos la frecuencia
              a cada 4 a 6 meses por la acumulación de salitre y la mayor exposición a los
              vientos marinos que traen polvo del Sahara. Te ayudamos a establecer un calendario
              de mantenimiento personalizado según tu ubicación y tipo de sistema.
            </p>
            <p>
              Además de la limpieza, cada visita de mantenimiento incluye una inspección
              técnica completa del sistema. Revisamos el inversor, las conexiones eléctricas,
              el estado físico de los paneles y el sistema de monitoreo. Si detectamos
              cualquier anomalía, te la informamos inmediatamente con las opciones de
              solución disponibles.
            </p>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-bold text-navy-dark mb-6">¿Qué Incluye el Mantenimiento?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Limpieza con agua purificada',
                'Soluciones específicas para paneles',
                'Inspección visual de células solares',
                'Revisión del inversor y conexiones',
                'Verificación del sistema de monitoreo',
                'Inspección de soportes y estructura',
                'Detección de sombras nuevas',
                'Reporte escrito del estado del sistema',
                'Recomendaciones preventivas',
                'Coordinación del próximo servicio',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="text-solar-yellow shrink-0" size={16} />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="font-bold text-navy-dark mb-2">Interior / General</h3>
              <p className="text-3xl font-black text-solar-yellow mb-1">6–8 meses</p>
              <p className="text-sm text-gray-600">Frecuencia recomendada para propiedades en el interior y zonas no costeras de Puerto Rico.</p>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
              <h3 className="font-bold text-navy-dark mb-2">Zonas Costeras</h3>
              <p className="text-3xl font-black text-solar-yellow mb-1">4–6 meses</p>
              <p className="text-sm text-gray-600">Mayor frecuencia por la acumulación de salitre, brisa marina y polvo del Sahara en las costas.</p>
            </div>
          </div>

          <div className="mt-12 bg-solar-yellow/10 border border-solar-yellow/30 rounded-xl p-8">
            <h3 className="text-navy-dark font-bold text-lg mb-5 text-center">
              ¿Cuándo fue la última vez que limpiaron tus paneles?
            </h3>
            <QuoteForm defaultService="Mantenimiento y lavado" />
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title="Preguntas sobre Mantenimiento Solar en Puerto Rico" />

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-bold text-navy-dark mb-4">Servicios Relacionados</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/servicios/instalacion-paneles-solares', label: 'Instalación de Paneles Solares' },
              { href: '/servicios/sistemas-con-bateria', label: 'Sistemas con Batería' },
              { href: '/servicios/sellado-de-techo', label: 'Sellado de Techo' },
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
