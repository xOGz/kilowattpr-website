import type { Metadata } from 'next'
import Link from 'next/link'
import { FAQSchema } from '@/components/SchemaOrg'
import FAQSection from '@/components/FAQSection'
import QuoteForm from '@/components/QuoteForm'
import { CheckCircle, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contratista Eléctrico en Puerto Rico — Servicios Residenciales y Comerciales',
  description:
    'Servicios de contratista eléctrico residencial y comercial en Puerto Rico. Reparación de bases de medidores, certificaciones LUMA, instalaciones eléctricas. Perito electricista licenciado.',
  alternates: { canonical: 'https://www.kilowattpr.com/servicios/contratista-electrico' },
}

const faqs = [
  {
    question: '¿Kilowatt PR tiene licencia de contratista eléctrico en Puerto Rico?',
    answer: 'Sí. Kilowatt PR cuenta con el perito electricista Xavier Acevedo Santiago (licencia #21309) y el ingeniero eléctrico Julio Santiago Pérez (PE #6083), con más de tres décadas de experiencia combinada en instalaciones eléctricas residenciales y comerciales en Puerto Rico.',
  },
  {
    question: '¿Qué es una reparación de base de medidor y cuándo la necesito?',
    answer: 'La base de medidor es el panel donde LUMA Energy conecta su medidor eléctrico a tu propiedad. Con el tiempo, las bases se corroen, se dañan por tormentas o quedan obsoletas. Si LUMA te notifica que tu base necesita reparación o certificación, nuestros electricistas licenciados la reemplazan o reparan según los códigos vigentes para que puedas restablecer o mantener tu servicio eléctrico.',
  },
  {
    question: '¿Cuánto tiempo toma un trabajo eléctrico residencial típico?',
    answer: 'La mayoría de los trabajos residenciales como cambio de panel eléctrico, reparación de base de medidor o instalación de circuitos dedicados se completan en 1 a 2 días. Proyectos más complejos como el recableado completo de una propiedad pueden tomar de 3 a 5 días. Después de la evaluación inicial, te damos un cronograma exacto antes de comenzar.',
  },
  {
    question: '¿Manejan las certificaciones y permisos requeridos por LUMA Energy?',
    answer: 'Sí. Kilowatt PR gestiona todo el proceso de certificación con LUMA Energy, incluyendo la preparación de documentos, solicitud de permisos, coordinación de inspecciones y la entrega final. No tienes que lidiar con el proceso burocrático — nosotros nos encargamos de principio a fin.',
  },
]

export default function ContratistaElectricoPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />

      <section className="bg-navy-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contratista Eléctrico en{' '}
            <span className="text-solar-yellow">Puerto Rico</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Servicios eléctricos residenciales y comerciales por peritos electricistas
            licenciados con más de 3 décadas de experiencia en Puerto Rico.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              En Puerto Rico, contar con un contratista eléctrico confiable y licenciado no es
              un lujo — es una necesidad. Con una infraestructura eléctrica envejecida, tormentas
              frecuentes y los requisitos cada vez más estrictos de LUMA Energy, necesitas un
              equipo que conozca el código eléctrico local y tenga la experiencia para resolver
              cualquier situación.
            </p>
            <p>
              Kilowatt PR ofrece servicios eléctricos completos para residencias y comercios en
              toda la isla. Desde la reparación y reemplazo de bases de medidores hasta
              actualizaciones de paneles eléctricos, instalación de circuitos dedicados y
              certificaciones requeridas por LUMA Energy. Nuestro equipo está liderado por el
              perito electricista Xavier Acevedo Santiago (licencia #21309) y el ingeniero
              eléctrico Julio Santiago Pérez (PE #6083).
            </p>
            <p>
              Uno de nuestros servicios más solicitados es la reparación de bases de medidores.
              Cuando LUMA Energy detecta una base dañada, corroída o que no cumple con los
              códigos actuales, te exige repararla antes de restablecer o continuar el servicio.
              Nuestros electricistas realizan este trabajo rápidamente, con los materiales
              correctos y cumpliendo todos los requisitos de LUMA.
            </p>
            <p>
              También realizamos actualizaciones de paneles eléctricos para hogares y negocios
              que necesitan más capacidad — ya sea para añadir un sistema solar, un cargador de
              vehículo eléctrico, o simplemente para modernizar una instalación antigua. Cada
              trabajo incluye evaluación completa, cotización detallada y garantía de mano de obra.
            </p>
            <p>
              Todos nuestros trabajos cumplen con el Código Eléctrico Nacional (NEC 2023) y los
              requisitos específicos de LUMA Energy para Puerto Rico. Gestionamos los permisos
              necesarios y coordinamos las inspecciones para que tú no tengas que preocuparte por
              la burocracia.
            </p>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-bold text-navy-dark mb-6">
              ¿Cómo Funciona Nuestro Proceso?
            </h2>
            <div className="space-y-4">
              {[
                { step: '1', title: 'Consulta y Evaluación', desc: 'Visitamos tu propiedad para evaluar la situación eléctrica actual y determinar exactamente qué se necesita.' },
                { step: '2', title: 'Cotización Detallada', desc: 'Te entregamos una cotización por escrito con el alcance del trabajo, materiales, costo y cronograma estimado.' },
                { step: '3', title: 'Ejecución del Trabajo', desc: 'Nuestros electricistas licenciados realizan el trabajo según los códigos vigentes, con materiales de primera calidad.' },
                { step: '4', title: 'Inspección y Certificación', desc: 'Coordinamos la inspección con LUMA Energy y gestionamos toda la documentación necesaria para la certificación.' },
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
            <h2 className="text-2xl font-bold text-navy-dark mb-6">Nuestros Servicios Eléctricos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Reparación y reemplazo de bases de medidores',
                'Certificaciones LUMA Energy',
                'Actualización de paneles eléctricos',
                'Instalación de circuitos dedicados',
                'Cableado residencial y comercial',
                'Instalación de sistemas de transferencia',
                'Reparaciones eléctricas de emergencia',
                'Inspecciones eléctricas completas',
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
              ¿Necesitas un electricista licenciado en Puerto Rico?
            </h3>
            <QuoteForm defaultService="Contratista eléctrico" />
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title="Preguntas sobre Servicios Eléctricos en Puerto Rico" />

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-bold text-navy-dark mb-4">Servicios Relacionados</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/servicios/instalacion-paneles-solares', label: 'Instalación de Paneles Solares' },
              { href: '/servicios/cargadores-ev', label: 'Cargadores de Vehículos Eléctricos' },
              { href: '/servicios/sistemas-con-bateria', label: 'Sistemas con Batería' },
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
