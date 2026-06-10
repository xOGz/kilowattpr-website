import type { Metadata } from 'next'
import Link from 'next/link'
import { FAQSchema } from '@/components/SchemaOrg'
import FAQSection from '@/components/FAQSection'
import QuoteForm from '@/components/QuoteForm'
import { CheckCircle, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Reparación e Instalación de Base de Contador en Puerto Rico — Certificación LUMA',
  description:
    'Reparación o instalación de base de contador (meter base) en Puerto Rico. Trabajo coordinado con LUMA, certificación de perito licenciado #21309, restablecimiento de servicio rápido. 787-431-2275.',
  alternates: { canonical: 'https://www.kilowattpr.com/servicios/base-de-contador/' },
}

const faqs = [
  {
    question: 'LUMA me cortó el servicio porque la base está dañada — ¿qué hago?',
    answer:
      'Eso es de las llamadas más comunes que recibimos. Cuando LUMA marca la base como insegura (corroída, partida, con cables expuestos, mast caído), se llevan el contador y te dejan sin servicio hasta que un perito electricista licenciado repare o reemplace la base y entregue una certificación. Sin esa certificación, LUMA no te vuelve a conectar — no hay vuelta. Llámanos al 787-431-2275 o por WhatsApp; las visitas para casos de servicio cortado las tratamos como prioridad porque sabemos que es estar sin luz y sin nevera funcionando.',
  },
  {
    question: '¿Qué hace que una base de contador falle en Puerto Rico?',
    answer:
      'Tres cosas principalmente. Primero, el salitre — si vives en zona costera (Aguada, Rincón, Cabo Rojo, Loíza, Vega Baja, costa norte y oeste en general), el aire con sal come las partes metálicas del meter base y del mast en 10-15 años. Segundo, huracanes y vientos — María y Fiona se llevaron miles de masts en la isla; el cableado de service entrance se torció y muchas bases quedaron comprometidas aunque por fuera se vieran bien. Tercero, edad y materiales — bases instaladas en los 70s u 80s con materiales que ya no cumplen el código vigente. En todos esos casos, lo correcto es reemplazar, no parchar.',
  },
  {
    question: '¿Cuánto tarda el trabajo desde que llamo hasta que tengo luz de vuelta?',
    answer:
      'En el mejor caso, de 2 a 4 días hábiles. El proceso es: (1) visita y cotización el mismo día o al siguiente, (2) instalación del nuevo meter base — generalmente 1 día de trabajo, (3) firma de certificación eléctrica nuestra, (4) coordinación con LUMA para que pase a reinspeccionar e instalar el meter de vuelta. El paso 4 depende de LUMA y a veces toma 24-48 horas adicionales según la zona. Si tu caso es urgente (negocio que está perdiendo dinero por día sin luz, dependencia médica), avísanos en la primera llamada y lo manejamos como prioridad.',
  },
  {
    question: '¿Necesito permiso de OGPE para cambiar la base?',
    answer:
      'Para reemplazo directo (misma ubicación, mismo amperaje) generalmente no se requiere permiso de OGPE — es trabajo de mantenimiento eléctrico cubierto por la certificación del perito licenciado. Si vas a aumentar el amperaje del servicio (de 100A a 200A, por ejemplo, porque vas a instalar paneles solares o cargador EV), o si vas a mover la ubicación del meter, ahí sí puede requerir permiso. Te orientamos según tu caso en la visita.',
  },
  {
    question: '¿Aprovecho y subo el servicio de 100A a 200A?',
    answer:
      'Si vas a tener que cambiar la base de todas formas, es buen momento para evaluar subirla. Casas viejas con servicio de 100A se quedan cortas cuando agregas aire acondicionado central, cargador EV, planta diesel o sistema solar grande. Subir a 200A en el momento del reemplazo te ahorra tener que tocar todo de nuevo dentro de unos años. La diferencia de costo entre instalar una base de 100A versus 200A es menor que hacerlo en dos etapas. En la cotización te mostramos ambas opciones con el diferencial claro.',
  },
  {
    question: '¿Cuánto cuesta?',
    answer:
      'El costo depende del amperaje (100A vs 200A vs 400A), si solo es la base o también el mast y el service entrance, la ubicación (altura, accesibilidad), si hay que coordinar corte con LUMA y horas de trabajo del perito. Para tener un número claro hacemos visita — gratis en Aguada, Aguadilla, Rincón, Moca, Añasco y Mayagüez; $150 reembolsables al firmar contrato fuera de esa zona. Para casos con servicio ya cortado, la visita tiene prioridad.',
  },
]

export default function BaseDeContadorPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />

      <section className="bg-navy-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Reparación e Instalación de{' '}
            <span className="text-solar-yellow">Base de Contador</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Trabajo coordinado con LUMA Energy y certificación de perito electricista licenciado
            #21309. Casos urgentes con servicio cortado los tratamos como prioridad.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              Hay pocas cosas más estresantes que un inspector de LUMA llegue, mire la base de
              contador, te diga &quot;esto está en condición peligrosa&quot;, se lleve el meter y
              te quedes sin servicio. Pasa más de lo que la gente piensa, especialmente en casas
              de 30+ años o en zonas costeras con salitre. Y después de María y Fiona pasó masivo
              — miles de masts torcidos, bases con cables expuestos, service entrance comprometido.
            </p>
            <p>
              En Kilowatt PR reparamos e instalamos bases de contador en toda la isla. El trabajo
              lo hace nuestro equipo de peritos electricistas licenciados (Lic. #21309), queda
              certificado y coordinado con LUMA Energy para que la reconexión sea lo más rápida
              posible. Para casos con servicio ya cortado lo manejamos como prioridad — sabemos
              lo que es estar sin luz con la nevera dañándose y los nenes en la casa.
            </p>
            <p>
              El servicio cubre desde reemplazo directo (misma ubicación, mismo amperaje) hasta
              upgrades completos — subir de 100A a 200A o 400A, reemplazar mast y service entrance
              completo, o mover la ubicación del meter durante una remodelación. Si vas a instalar
              sistema solar, cargador EV o planta diesel y tu servicio actual de 100A se va a
              quedar corto, aprovechamos para subirlo en el mismo trabajo.
            </p>
            <p>
              Todo el trabajo se entrega con certificación eléctrica firmada que LUMA acepta para
              la reinspección y reinstalación del meter. Si tu caso requiere coordinación
              especial con LUMA (corte programado, reinspección urgente, permisos municipales),
              lo gestionamos como parte del servicio. No queremos que andes haciendo gestiones
              con LUMA por tu cuenta cuando es nuestro trabajo.
            </p>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-bold text-navy-dark mb-6">¿Cómo Funciona el Proceso?</h2>
            <div className="space-y-4">
              {[
                {
                  step: '1',
                  title: 'Llamada o WhatsApp',
                  desc: 'Llámanos al 787-431-2275 o escribe por WhatsApp. Si tienes el servicio cortado, dilo al inicio — pasa a prioridad.',
                },
                {
                  step: '2',
                  title: 'Visita y evaluación',
                  desc: 'Vamos al sitio, evaluamos base, mast y service entrance, vemos si es reemplazo directo o si conviene aprovechar para subir el amperaje. Gratis en el oeste; $150 reembolsables fuera.',
                },
                {
                  step: '3',
                  title: 'Cotización formal',
                  desc: 'Por escrito: tipo de base, amperaje, materiales, mano de obra, coordinación con LUMA, cronograma. Si vas a financiar, lista para presentar al banco o cooperativa.',
                },
                {
                  step: '4',
                  title: 'Coordinación con LUMA',
                  desc: 'Si requiere corte programado, lo coordinamos nosotros antes de empezar. Para casos de servicio ya cortado, el corte ya está y arrancamos directo.',
                },
                {
                  step: '5',
                  title: 'Instalación y certificación',
                  desc: 'Instalamos la nueva base, mast y service entrance según aplique, firmamos certificación eléctrica del perito #21309. Generalmente 1 día de trabajo.',
                },
                {
                  step: '6',
                  title: 'Reinspección LUMA y reconexión',
                  desc: 'Coordinamos con LUMA para que vuelvan a inspeccionar e instalen el meter. Te tenemos con luz de vuelta lo antes posible — el paso depende de LUMA y suele tomar 24-48 horas.',
                },
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
            <h2 className="text-2xl font-bold text-navy-dark mb-6">¿Qué Incluye el Servicio?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Reemplazo directo de base de contador',
                'Upgrade de amperaje (100A → 200A → 400A)',
                'Reemplazo de mast y service entrance',
                'Reubicación de meter durante remodelación',
                'Coordinación de corte programado con LUMA',
                'Manejo prioritario de casos con servicio ya cortado',
                'Certificación eléctrica firmada por perito #21309',
                'Coordinación de reinspección y reconexión con LUMA',
                '1 año de garantía de mano de obra Kilowatt',
                'Orientación sobre permisos municipales si aplican',
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
              ¿Tienes el servicio cortado o la base te falló? Llámanos.
            </h3>
            <QuoteForm defaultService="Base de contador" />
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title="Preguntas Frecuentes sobre Base de Contador" />

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-bold text-navy-dark mb-4">Servicios Relacionados</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/servicios/certificaciones-luma', label: 'Certificaciones Eléctricas LUMA' },
              { href: '/servicios/contratista-electrico', label: 'Contratista Eléctrico' },
              { href: '/servicios/instalacion-paneles-solares', label: 'Instalación de Micro Inversores' },
            ].map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="flex items-center gap-1 text-solar-yellow font-medium hover:underline"
              >
                {s.label} <ArrowRight size={14} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
