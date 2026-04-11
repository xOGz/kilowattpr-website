import type { Metadata } from 'next'
import Link from 'next/link'
import { FAQSchema } from '@/components/SchemaOrg'
import FAQSection from '@/components/FAQSection'
import QuoteForm from '@/components/QuoteForm'
import { CheckCircle, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Energía Solar Comercial en Puerto Rico — Sistemas para Negocios',
  description:
    'Sistemas solares comerciales para negocios en Puerto Rico. Restaurantes, farmacias, almacenes, hoteles. ROI en 3-5 años. Consulta gratis.',
  alternates: { canonical: 'https://www.kilowattpr.com/servicios/energia-solar-comercial' },
}

const faqs = [
  {
    question: '¿Qué tamaño de sistema solar necesita mi negocio en Puerto Rico?',
    answer: 'El tamaño depende de tu consumo eléctrico comercial. Un restaurante pequeño puede necesitar 10-15 kW, una farmacia 15-25 kW, un almacén 25-50 kW, y un hotel o supermercado 50-100 kW o más. Durante la consulta gratuita, analizamos tus últimas 12 facturas de LUMA Energy para diseñar un sistema que cubra entre el 80% y el 100% de tu consumo.',
  },
  {
    question: '¿Cuál es el retorno de inversión (ROI) de un sistema solar comercial?',
    answer: 'La mayoría de los negocios en Puerto Rico recuperan su inversión en energía solar en 3 a 5 años, dependiendo del tamaño del sistema y el consumo eléctrico. Con las tarifas de LUMA Energy entre las más altas de Estados Unidos, un sistema solar comercial puede generar ahorros de miles de dólares mensuales. Después del período de retorno, la electricidad que produce tu sistema es prácticamente gratis por los próximos 20+ años.',
  },
  {
    question: '¿Cómo funciona el net metering para negocios en Puerto Rico?',
    answer: 'El net metering (medición neta) permite que tu negocio envíe el exceso de energía solar a la red de LUMA Energy y reciba crédito en tu factura. Si tu sistema produce más energía de la que consumes durante el día, ese excedente reduce tu factura. Es especialmente beneficioso para negocios que operan principalmente en horario diurno, cuando la producción solar es máxima.',
  },
  {
    question: '¿Pueden instalar paneles solares sin interrumpir las operaciones de mi negocio?',
    answer: 'Sí. Planificamos cada instalación comercial para minimizar el impacto en tus operaciones. La mayor parte del trabajo se realiza en el techo y el área eléctrica, sin afectar el interior del negocio. La conexión final al panel eléctrico puede requerir una interrupción breve de 1 a 2 horas, que coordinamos para el momento de menor actividad de tu negocio.',
  },
]

export default function EnergiaSolarComercialPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />

      <section className="bg-navy-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Energía Solar Comercial en{' '}
            <span className="text-solar-yellow">Puerto Rico</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Sistemas solares de 10 kW a 100 kW+ para negocios. ROI en 3-5 años, reducción de
            cargos por demanda y protección contra los aumentos de LUMA Energy.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              Para los negocios en Puerto Rico, la electricidad es uno de los gastos operativos
              más altos. Con tarifas de LUMA Energy que superan los $0.25 por kWh y cargos por
              demanda que pueden representar el 30-40% de la factura comercial, un sistema solar
              no es solo una decisión ambiental — es una estrategia financiera que impacta
              directamente tu rentabilidad.
            </p>
            <p>
              Kilowatt PR diseña e instala sistemas solares comerciales para restaurantes,
              farmacias, almacenes, hoteles, oficinas, talleres y todo tipo de negocios en
              Puerto Rico. Nuestro equipo, liderado por el ingeniero eléctrico Julio Santiago
              Pérez (PE #6083), diseña cada sistema para maximizar el retorno de inversión
              específico de tu operación.
            </p>
            <p>
              Un sistema solar comercial bien dimensionado puede eliminar entre el 80% y el 100%
              de tu factura eléctrica. Además, reduce tus cargos por demanda — el componente más
              costoso de las facturas comerciales en Puerto Rico. El exceso de energía producida
              se acredita a tu cuenta mediante net metering con LUMA Energy.
            </p>
            <p>
              Nuestros sistemas comerciales van desde 10 kW para negocios pequeños hasta 100 kW
              o más para operaciones industriales y comerciales grandes. Utilizamos paneles de
              alta eficiencia con garantía de 25 años e inversores comerciales diseñados para
              maximizar la producción en las condiciones tropicales de Puerto Rico.
            </p>
            <p>
              El proceso incluye análisis de consumo detallado, diseño personalizado, gestión
              completa de permisos OGPE, solicitud de interconexión con LUMA Energy y un plan
              de mantenimiento para asegurar el rendimiento óptimo durante toda la vida útil del
              sistema. La mayoría de nuestros clientes comerciales recuperan su inversión en
              3 a 5 años.
            </p>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-bold text-navy-dark mb-6">
              ¿Cómo Funciona el Proceso para Negocios?
            </h2>
            <div className="space-y-4">
              {[
                { step: '1', title: 'Análisis Comercial Gratuito', desc: 'Estudiamos tus facturas de LUMA Energy, patrones de consumo, cargos por demanda y horario de operación para diseñar el sistema óptimo.' },
                { step: '2', title: 'Diseño y Propuesta', desc: 'Te presentamos un diseño personalizado con proyección de ahorros, ROI estimado y opciones de financiamiento comercial.' },
                { step: '3', title: 'Permisos y Logística', desc: 'Gestionamos todos los permisos de OGPE y la solicitud de interconexión con LUMA Energy. Planificamos la instalación para no afectar tus operaciones.' },
                { step: '4', title: 'Instalación', desc: 'Nuestro equipo instala el sistema en el menor tiempo posible, coordinando cualquier interrupción necesaria en horarios de baja actividad.' },
                { step: '5', title: 'Activación y Monitoreo', desc: 'Activamos el sistema, configuramos el monitoreo en tiempo real y te entregamos acceso al dashboard para ver tu producción y ahorros.' },
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
            <h2 className="text-2xl font-bold text-navy-dark mb-6">¿Qué Incluye Nuestro Servicio Comercial?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Análisis de consumo y cargos por demanda',
                'Diseño personalizado con proyección de ROI',
                'Paneles solares comerciales de alta eficiencia',
                'Inversores comerciales con monitoreo',
                'Estructura de montaje para techos comerciales',
                'Gestión completa de permisos OGPE',
                'Solicitud de interconexión y net metering',
                'Garantía de 25 años en paneles',
                'Plan de mantenimiento preventivo',
                'Soporte técnico post-instalación',
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
              ¿Quieres reducir los costos eléctricos de tu negocio?
            </h3>
            <QuoteForm defaultService="Energía solar comercial" />
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title="Preguntas sobre Energía Solar Comercial en Puerto Rico" />

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-bold text-navy-dark mb-4">Servicios Relacionados</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/servicios/instalacion-paneles-solares', label: 'Instalación Residencial' },
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
