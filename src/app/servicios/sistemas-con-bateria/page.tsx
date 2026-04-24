import type { Metadata } from 'next'
import Link from 'next/link'
import { FAQSchema } from '@/components/SchemaOrg'
import FAQSection from '@/components/FAQSection'
import QuoteForm from '@/components/QuoteForm'
import { Battery, CheckCircle, ArrowRight } from 'lucide-react'
import { buildAlternates } from '@/lib/alternates'

export const metadata: Metadata = {
  title: 'Sistemas Solares con Batería en Puerto Rico',
  description:
    'Independencia energética total durante los apagones de LUMA Energy. Sistemas solares con batería instalados por Kilowatt PR en toda Puerto Rico. Hasta 24 horas de respaldo.',
  ...buildAlternates({
    es: '/servicios/sistemas-con-bateria',
    en: '/en/services/battery-backup-systems',
  }),
}

const faqs = [
  {
    question: '¿Cuánto tiempo dura la batería durante un apagón de LUMA Energy?',
    answer: 'Un sistema de batería estándar puede proporcionar entre 10 y 24 horas de electricidad para los electrodomésticos esenciales del hogar, dependiendo del consumo. Durante el día, los paneles solares recargan la batería mientras usas energía simultáneamente. En noches o días nublados, la batería utiliza la energía almacenada. Diseñamos cada sistema según tus necesidades específicas de respaldo.',
  },
  {
    question: '¿Puedo añadir una batería a mi sistema solar existente en Puerto Rico?',
    answer: 'En muchos casos sí es posible añadir almacenamiento de baterías a un sistema solar existente en Puerto Rico. Depende del tipo de inversor que tengas instalado actualmente. Si tienes un inversor de red ("grid-tie"), puede requerir reemplazarlo por uno híbrido. Durante la evaluación, nuestro equipo analiza tu sistema actual y te presenta las opciones disponibles y sus costos.',
  },
  {
    question: '¿Qué electrodomésticos puede alimentar una batería solar durante un apagón?',
    answer: 'Un sistema de batería bien dimensionado puede alimentar refrigeradores, luces LED, ventiladores, televisores, dispositivos médicos esenciales, cargadores de celular y enrutadores de internet. Los electrodomésticos de alto consumo como aires acondicionados de ventana y secadoras requieren baterías de mayor capacidad. Te ayudamos a priorizar según tus necesidades y a elegir el tamaño de batería correcto.',
  },
  {
    question: '¿Las baterías solares requieren mantenimiento en Puerto Rico?',
    answer: 'Las baterías de litio modernas requieren muy poco mantenimiento. El sistema de monitoreo integrado verifica constantemente el estado de la batería y nos alerta ante cualquier irregularidad. Recomendamos incluir una revisión del sistema de baterías en el mantenimiento semestral de los paneles. El calor tropical de Puerto Rico puede afectar la vida útil de las baterías, por lo que instalamos con ventilación adecuada.',
  },
]

export default function SistemasConBateriaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />

      <section className="bg-navy-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 bg-solar-yellow/20 rounded-xl flex items-center justify-center">
              <Battery className="text-solar-yellow" size={28} />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Sistemas Solares con Batería en{' '}
            <span className="text-solar-yellow">Puerto Rico</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Independencia energética real durante los apagones de LUMA Energy. Diseñados
            específicamente para las condiciones de Puerto Rico.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              Puerto Rico tiene una de las tasas de apagones más altas de todos los territorios
              de Estados Unidos. Después del huracán María, muchas familias y negocios
              estuvieron sin electricidad por semanas o meses. Los sistemas solares con
              batería son la solución definitiva para la independencia energética en Puerto Rico.
            </p>
            <p>
              Un sistema solar con almacenamiento de batería funciona de forma diferente a
              un sistema solar convencional conectado a la red. Cuando los paneles producen
              más energía de la que consumes, el excedente se almacena en la batería en lugar
              de exportarse a LUMA Energy. Cuando los paneles no producen suficiente (durante
              la noche o un apagón), la batería proporciona la energía necesaria.
            </p>
            <p>
              En Kilowatt PR instalamos sistemas de baterías de litio de última generación,
              con la tecnología más confiable disponible en el mercado. Nuestros técnicos
              e ingenieros eléctricos con más de 3 décadas de experiencia en Puerto Rico conocen exactamente
              cómo dimensionar y configurar estos sistemas para las condiciones locales.
            </p>
            <p>
              Un sistema de batería estándar puede proporcionar hasta 24 horas de electricidad
              para los electrodomésticos esenciales: refrigeración, iluminación, ventiladores,
              dispositivos médicos y comunicaciones. Para hogares o negocios con mayor demanda,
              diseñamos sistemas de múltiples baterías que extienden aún más la autonomía.
            </p>
            <p>
              La instalación incluye un inversor híbrido que gestiona inteligentemente la energía
              entre los paneles, la batería, el consumo del hogar y la red de LUMA Energy.
              El sistema se desconecta automáticamente de la red cuando detecta un apagón,
              protegiendo a los técnicos de LUMA que trabajan en las líneas, y se reconecta
              automáticamente cuando el servicio se restaura.
            </p>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-bold text-navy-dark mb-6">¿Qué Incluye el Sistema con Batería?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Paneles solares de alta eficiencia',
                'Batería de litio de alta capacidad',
                'Inversor híbrido inteligente',
                'Sistema de monitoreo en tiempo real',
                'Desconexión automática en apagones',
                'Gestión de permisos OGPE',
                'Interconexión con LUMA Energy',
                'Instalación con ventilación adecuada',
                'Configuración de prioridades de carga',
                'Garantía completa en equipos',
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
              El próximo apagón de LUMA Energy no te va a afectar
            </h3>
            <QuoteForm defaultService="Sistema solar con batería" />
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title="Preguntas sobre Sistemas con Batería en Puerto Rico" />

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-bold text-navy-dark mb-4">Servicios Relacionados</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/servicios/instalacion-paneles-solares', label: 'Instalación de Paneles Solares' },
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
