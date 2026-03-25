import type { Metadata } from 'next'
import Link from 'next/link'
import { FAQSchema } from '@/components/SchemaOrg'
import FAQSection from '@/components/FAQSection'
import QuoteForm from '@/components/QuoteForm'
import { Home, CheckCircle, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sellado de Techo en Puerto Rico',
  description:
    'Kilowatt PR ofrece sellado e impermeabilización profesional de techos en Puerto Rico. Garantía de 2 años de mano de obra. Servicio previo a instalación solar.',
  alternates: { canonical: 'https://www.kilowattpr.com/servicios/sellado-de-techo' },
}

const faqs = [
  {
    question: '¿Por qué es importante sellar el techo antes de instalar paneles solares?',
    answer: 'El sellado del techo antes de la instalación solar es fundamental por varias razones. Primero, garantiza que las perforaciones necesarias para los soportes de los paneles estén completamente impermeabilizadas, evitando filtraciones de agua. Segundo, si tu techo tiene goteras o daños existentes, instalar paneles encima podría agravar el problema y anular garantías. Un techo en buen estado protege tu hogar y asegura que la instalación solar dure los 25 años proyectados.',
  },
  {
    question: '¿Qué tipos de techo trabajan con el servicio de sellado?',
    answer: 'Trabajamos con todos los tipos de techo comunes en Puerto Rico: techo plano de cemento, techo de metal (zinc), techo de tejas asfálticas y techo de madera. El proceso de sellado varía según el material, pero en todos los casos utilizamos productos de alta calidad diseñados para el clima tropical de Puerto Rico, resistentes a UV, lluvia, salitre y temperaturas extremas.',
  },
  {
    question: '¿Cuánto tiempo dura el sellado de techo?',
    answer: 'Un sellado de techo profesional con los materiales que utilizamos tiene una vida útil de 5 a 10 años bajo condiciones normales. Ofrecemos una garantía de mano de obra de 2 años en todos nuestros trabajos de sellado. El mantenimiento periódico y la inspección regular pueden extender significativamente la vida útil del tratamiento de impermeabilización.',
  },
  {
    question: '¿Puedo contratar el sellado de techo sin instalar paneles solares?',
    answer: 'Absolutamente sí. El servicio de sellado e impermeabilización de techo está disponible de forma independiente para cualquier propiedad en Puerto Rico que necesite protección contra filtraciones. Muchas familias contratan este servicio antes de temporada de lluvias o como preparación para el trabajo de instalación solar en el futuro. Contáctanos para una evaluación gratis del estado de tu techo.',
  },
]

export default function SelladoTechoPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />

      <section className="bg-navy-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 bg-solar-yellow/20 rounded-xl flex items-center justify-center">
              <Home className="text-solar-yellow" size={28} />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Sellado de Techo en <span className="text-solar-yellow">Puerto Rico</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Impermeabilización profesional con garantía de 2 años de mano de obra. El primer
            paso para una instalación solar segura y duradera.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              En Puerto Rico, el techo de una propiedad enfrenta condiciones climáticas
              extremas: lluvia tropical intensa, humedad constante, vientos huracanados,
              radiación UV, salitre en zonas costeras y el peso acumulado de los materiales
              con el tiempo. Un techo con goteras o daños estructurales no solo compromete
              la salud de tu hogar, sino que también puede invalidar las garantías de cualquier
              instalación solar que se haga sobre él.
            </p>
            <p>
              En Kilowatt PR, realizamos una evaluación completa del techo antes de cada
              instalación de paneles solares. Si detectamos áreas con daños, filtraciones o
              vulnerabilidades, recomendamos el sellado y la impermeabilización como paso
              previo. Este proceso protege tu inversión a largo plazo y garantiza que la
              estructura del techo soporte adecuadamente el peso y la carga de viento
              del sistema solar.
            </p>
            <p>
              Utilizamos productos de impermeabilización de calidad industrial, formulados
              específicamente para el clima tropical de Puerto Rico. Nuestros materiales son
              resistentes a los rayos UV que deterioran otros productos en la isla, a las
              lluvias intensas y al salitre de las zonas costeras. El trabajo lo realizan
              nuestros técnicos y jornaleros con más de una década de experiencia en Puerto Rico,
              garantizando una aplicación correcta en todo momento.
            </p>
            <p>
              Además del sellado previo a la instalación solar, ofrecemos este servicio de
              forma independiente para cualquier propiedad que necesite impermeabilización.
              Ya sea como preparación para la temporada de lluvias o para reparar goteras
              existentes, nuestro equipo puede ayudarte.
            </p>
            <p>
              Todos nuestros trabajos de sellado de techo incluyen una garantía de 2 años
              de mano de obra. Si durante este período se presenta cualquier problema
              relacionado con nuestra aplicación, lo atendemos sin costo adicional. Esta
              garantía es parte de nuestro compromiso con la calidad en cada proyecto
              que realizamos.
            </p>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-bold text-navy-dark mb-6">¿Qué Incluye el Proceso de Sellado?</h2>
            <div className="space-y-4">
              {[
                { step: '1', title: 'Inspección del Techo', desc: 'Evaluación visual completa para identificar grietas, filtraciones, daños estructurales y áreas vulnerables.' },
                { step: '2', title: 'Limpieza Profesional', desc: 'Lavado a presión del techo para remover musgo, hongos, suciedad y materiales sueltos que afecten la adhesión.' },
                { step: '3', title: 'Reparación de Grietas', desc: 'Sellado de grietas, juntas y puntos de penetración con masilla especializada antes de la aplicación del impermeabilizante.' },
                { step: '4', title: 'Aplicación del Impermeabilizante', desc: 'Aplicación uniforme del producto de sellado en capas según las especificaciones del fabricante y las condiciones del techo.' },
                { step: '5', title: 'Inspección Final', desc: 'Revisión de toda el área tratada para garantizar cobertura completa y uniforme antes de entregar el trabajo al cliente.' },
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
            <h2 className="text-2xl font-bold text-navy-dark mb-6">Incluido en Cada Sellado</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Inspección estructural del techo',
                'Limpieza a presión incluida',
                'Reparación de grietas y juntas',
                'Impermeabilizante de alta calidad',
                'Aplicación profesional en capas',
                'Tratamiento de puntos de penetración',
                'Garantía de 2 años de mano de obra',
                'Informe del estado del techo',
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
              Protege tu techo antes de la próxima temporada de lluvias
            </h3>
            <QuoteForm defaultService="Sellado de techo" />
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title="Preguntas sobre Sellado de Techo en Puerto Rico" />

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-bold text-navy-dark mb-4">Servicios Relacionados</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/servicios/instalacion-paneles-solares', label: 'Instalación de Paneles Solares' },
              { href: '/servicios/sistemas-con-bateria', label: 'Sistemas con Batería' },
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
