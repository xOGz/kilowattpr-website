import type { Metadata } from 'next'
import Link from 'next/link'
import { FAQSchema } from '@/components/SchemaOrg'
import FAQSection from '@/components/FAQSection'
import QuoteForm from '@/components/QuoteForm'
import { CheckCircle, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Instalación de Cargadores de Vehículos Eléctricos en Puerto Rico',
  description:
    'Kilowatt PR instala cargadores de vehículos eléctricos (EV) Level 2 y Level 3 en residencias y comercios en Puerto Rico. Combinamos solar + EV para máximo ahorro.',
  alternates: { canonical: 'https://www.kilowattpr.com/servicios/cargadores-ev' },
}

const faqs = [
  {
    question: '¿Qué tipo de cargador EV necesito para mi casa en Puerto Rico?',
    answer: 'Para uso residencial en Puerto Rico, recomendamos un cargador Level 2 (240V) que carga tu vehículo eléctrico completamente en 4 a 8 horas, ideal para cargar durante la noche. Un cargador Level 1 (120V) es demasiado lento para uso práctico. Si tienes un negocio y quieres ofrecer carga rápida a clientes, un cargador Level 3 (DC Fast Charging) puede cargar un vehículo al 80% en 30 minutos.',
  },
  {
    question: '¿Necesito actualizar mi panel eléctrico para instalar un cargador EV?',
    answer: 'Depende de la capacidad actual de tu panel eléctrico. Un cargador Level 2 típico requiere un circuito dedicado de 40 a 50 amperios. Durante nuestra evaluación gratuita, revisamos tu panel eléctrico para determinar si tiene capacidad disponible o si necesita una actualización. Si ya tienes un sistema solar, podemos optimizar la configuración para que tu vehículo se cargue con energía solar.',
  },
  {
    question: '¿Puedo combinar un cargador EV con mi sistema solar?',
    answer: 'Absolutamente, y es la combinación más inteligente. Al cargar tu vehículo eléctrico con energía solar, reduces tu costo de combustible a prácticamente cero. Un sistema solar de 4-6 kW adicionales puede generar suficiente energía para cubrir 12,000 a 15,000 millas de manejo al año. Kilowatt PR diseña sistemas integrados solar + EV para maximizar tu ahorro.',
  },
  {
    question: '¿Cuánto cuesta instalar un cargador de vehículo eléctrico en Puerto Rico?',
    answer: 'El costo de instalación de un cargador EV Level 2 residencial varía según la distancia del panel eléctrico al área de estacionamiento, la capacidad de tu panel actual y el modelo de cargador seleccionado. Ofrecemos una evaluación gratuita donde analizamos tu situación específica y te entregamos una cotización detallada sin compromiso. Llámanos al 787-431-2275 o escríbenos por WhatsApp.',
  },
]

export default function CargadoresEvPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />

      <section className="bg-navy-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Cargadores de Vehículos Eléctricos en{' '}
            <span className="text-solar-yellow">Puerto Rico</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Instalación profesional de cargadores EV Level 2 y Level 3 para residencias y
            comercios. Combina solar + EV para máximo ahorro.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              Los vehículos eléctricos están transformando el transporte en Puerto Rico, y con
              las tarifas eléctricas de LUMA Energy entre las más altas del país, combinar un
              cargador EV con energía solar es la fórmula perfecta para eliminar tu dependencia
              de la gasolina y de la red eléctrica al mismo tiempo.
            </p>
            <p>
              En Kilowatt PR instalamos cargadores de vehículos eléctricos Level 2 para hogares
              y Level 3 para comercios en toda Puerto Rico. Nuestro equipo de peritos electricistas
              licenciados evalúa tu panel eléctrico, determina la mejor ubicación para el cargador,
              instala el circuito dedicado y configura el equipo — todo en un solo servicio
              integrado.
            </p>
            <p>
              Para residencias, un cargador Level 2 de 240 voltios es la opción ideal. Carga tu
              vehículo completamente durante la noche, estando listo cada mañana con batería al
              100%. Si tienes paneles solares, podemos programar la carga durante las horas de
              máxima producción solar para que tu vehículo funcione literalmente con energía del sol.
            </p>
            <p>
              Para negocios — restaurantes, hoteles, plazas comerciales, oficinas — ofrecer
              estaciones de carga EV es una ventaja competitiva real. Atrae clientes que buscan
              dónde cargar mientras consumen en tu establecimiento. Instalamos cargadores Level 2
              y Level 3 (DC Fast Charging) comerciales con la capacidad eléctrica y los permisos
              necesarios.
            </p>
            <p>
              Antes de cada instalación, realizamos una evaluación completa de la capacidad de tu
              panel eléctrico. Si necesitas una actualización de panel o un circuito adicional,
              lo incluimos en la cotización. Gestionamos todos los permisos y certificaciones
              requeridas por LUMA Energy.
            </p>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-bold text-navy-dark mb-6">
              ¿Cómo Funciona la Instalación?
            </h2>
            <div className="space-y-4">
              {[
                { step: '1', title: 'Evaluación Gratuita', desc: 'Revisamos tu panel eléctrico, medimos la distancia al área de carga y determinamos si necesitas una actualización de capacidad.' },
                { step: '2', title: 'Selección del Cargador', desc: 'Te recomendamos el cargador ideal según tu vehículo, presupuesto y si deseas integrarlo con energía solar.' },
                { step: '3', title: 'Cotización y Aprobación', desc: 'Recibes una cotización detallada con todos los materiales, mano de obra, permisos y cronograma de trabajo.' },
                { step: '4', title: 'Instalación Profesional', desc: 'Nuestros electricistas licenciados instalan el circuito dedicado y el cargador, generalmente en un solo día.' },
                { step: '5', title: 'Pruebas y Activación', desc: 'Verificamos el funcionamiento completo, te enseñamos a usar el cargador y configuramos la app de monitoreo si aplica.' },
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
            <h2 className="text-2xl font-bold text-navy-dark mb-6">¿Qué Incluye Nuestro Servicio?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Evaluación de capacidad del panel eléctrico',
                'Instalación de circuito dedicado 240V',
                'Cargadores Level 2 residenciales',
                'Cargadores Level 3 comerciales',
                'Integración con sistemas solares existentes',
                'Actualización de panel eléctrico si necesario',
                'Gestión de permisos y certificaciones LUMA',
                'Garantía de mano de obra',
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
              ¿Listo para cargar tu vehículo con energía solar?
            </h3>
            <QuoteForm defaultService="Cargador de vehículo eléctrico" />
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title="Preguntas sobre Cargadores EV en Puerto Rico" />

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-bold text-navy-dark mb-4">Servicios Relacionados</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/servicios/instalacion-paneles-solares', label: 'Instalación de Paneles Solares' },
              { href: '/servicios/contratista-electrico', label: 'Contratista Eléctrico' },
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
