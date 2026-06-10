import type { Metadata } from 'next'
import Link from 'next/link'
import { FAQSchema } from '@/components/SchemaOrg'
import FAQSection from '@/components/FAQSection'
import QuoteForm from '@/components/QuoteForm'
import { CheckCircle, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Plantas Eléctricas Diesel en Puerto Rico — Residencial y Comercial',
  description:
    'Venta, instalación y servicio de plantas eléctricas diesel residenciales y comerciales en Puerto Rico. Dimensionamiento por carga, transfer switch, certificación LUMA. 787-431-2275.',
  alternates: { canonical: 'https://www.kilowattpr.com/servicios/plantas-diesel/' },
}

const faqs = [
  {
    question: '¿Diesel o solar con batería? ¿Cuál me conviene?',
    answer:
      'Depende del uso. Si lo que quieres es respaldo para apagones largos de varios días, especialmente para un comercio con neveras o un hogar con dependencia médica, una planta diesel bien dimensionada arranca y aguanta horas o días seguidos mientras tengas combustible. Si lo que quieres es bajar la factura mensual de LUMA y tener algunas horas de respaldo durante apagones cortos, el sistema solar con batería es la mejor inversión a largo plazo. Muchos clientes terminan haciendo el combo: solar + batería para el día a día y reducir LUMA, planta diesel para los huracanes y apagones prolongados. En la consulta gratis te ayudamos a entender qué te conviene según tu factura, tu uso y tu presupuesto.',
  },
  {
    question: '¿Qué tamaño de planta necesito para mi casa?',
    answer:
      'Lo correcto es hacer un cálculo de carga, no adivinar por el tamaño de la casa. Para una residencia típica en Puerto Rico, las plantas más comunes van de 8 kW a 22 kW dependiendo si quieres correr aire acondicionado central, qué tan grande es la nevera, si tienes pozo de agua con bomba eléctrica, etc. En la visita medimos las cargas críticas, te enseñamos qué circuitos vamos a respaldar y cuáles van a quedar fuera durante el apagón, y dimensionamos la planta para que arranque sin sobrecargarse cuando varias cargas se prenden al mismo tiempo.',
  },
  {
    question: '¿Diesel o gasolina para plantas portátiles?',
    answer:
      'Diesel para uso fijo y operación prolongada, gasolina solo para emergencias muy puntuales. El diesel rinde más por galón, el combustible se almacena con mucho menos riesgo de incendio y los motores diesel duran más horas sin desgaste serio. En un apagón largo (huracán María fue 4-6 meses para muchas casas), tener una planta de gasolina significa hacer fila todos los días en la estación cuando hay gasolina — eso ya lo vimos. Una planta diesel residencial bien instalada, con su tanque dedicado, te da días de operación con una sola carga.',
  },
  {
    question: '¿Instalan también el transfer switch?',
    answer:
      'Sí — y casi siempre lo cotizamos junto. La planta sola no sirve si no hay un switch que la conecte al panel eléctrico de forma segura. Podemos hacer manual (más económico, tú accionas la palanca cuando se va la luz) o ATS (la planta arranca automáticamente al detectar el apagón, sin que tengas que salir). Ver detalles en nuestra página de Transfer Switch / ATS.',
  },
  {
    question: '¿La planta necesita permisos y certificación?',
    answer:
      'Sí. Toda planta fija conectada al panel eléctrico requiere certificación del perito electricista que la instala (Lic. #21309 en nuestro caso). Si la planta está en exterior y la cantidad de combustible almacenado pasa cierto umbral, también aplica revisión de bomberos y permisos municipales. Kilowatt PR gestiona la certificación eléctrica como parte del servicio y te orienta sobre cualquier permiso municipal adicional que aplique a tu caso.',
  },
  {
    question: '¿Cuánto cuesta una planta diesel residencial instalada?',
    answer:
      'El costo total varía según el kW de la planta, la distancia del panel eléctrico al sitio donde va, si es planta nueva o cliente que ya tiene la planta y solo necesita instalación, si necesita ATS o transfer switch manual, y trabajo civil (base de concreto, conduit). Para tener un número claro hacemos una visita — gratis en Aguada, Aguadilla, Rincón, Moca, Añasco y Mayagüez. Fuera de esa zona cobramos $150 reembolsables al firmar contrato. Llámanos al 787-431-2275 o por WhatsApp.',
  },
]

export default function PlantasDieselPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />

      <section className="bg-navy-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Plantas Eléctricas Diesel en{' '}
            <span className="text-solar-yellow">Puerto Rico</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Venta, instalación y servicio de plantas diesel residenciales y comerciales. Trabajo
            certificado por perito electricista licenciado #21309. Dimensionamiento honesto según
            tu carga real.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              En Puerto Rico, una planta diesel no es lujo — es la diferencia entre perder un
              freezer lleno de comida en un apagón de 3 días o seguir trabajando como si nada. Lo
              vimos en María, lo vivimos en Fiona, y lo seguimos viendo cada vez que LUMA tumba un
              circuito completo por mantenimiento. Para comercios con neveras (panaderías,
              restaurantes, farmacias, supermercados pequeños) y hogares con dependencia médica o
              home office, tener planta no es opcional.
            </p>
            <p>
              En Kilowatt PR vendemos, instalamos y damos servicio a plantas diesel residenciales
              y comerciales en toda la isla. El trabajo lo hace nuestro equipo de peritos
              electricistas licenciados (Lic. #21309) y queda certificado para cumplir con el
              National Electrical Code y los requisitos de LUMA Energy. No vendemos plantas
              sobredimensionadas para inflar el ticket — hacemos el cálculo de carga, te
              recomendamos el tamaño correcto según las cargas críticas que quieras respaldar, y
              te explicamos qué quedaría fuera durante el apagón.
            </p>
            <p>
              Para residencial, los tamaños más comunes van de 8 kW a 22 kW. Una planta de 10 kW
              bien dimensionada respalda una nevera grande, un par de aires acondicionados de
              ventana o uno central de bajo BTU, luces, abanicos, tomas de comunicaciones y la
              bomba del pozo si aplica. Si quieres correr aire acondicionado central más todo lo
              demás, hay que subir al rango de 15 kW a 22 kW.
            </p>
            <p>
              Para comercial — un restaurante, panadería, farmacia, oficina, almacén — el cálculo
              es distinto porque entran cargas trifásicas, motores grandes (compresores, walk-in
              coolers), iluminación de alto BTU, y a veces equipos electrónicos que no toleran
              variaciones de voltaje. Diseñamos cada planta comercial con margen de arranque para
              que el compresor del walk-in no tumbe el sistema cuando arranque al mismo tiempo
              que el resto de la carga.
            </p>
            <p>
              Si ya tienes una planta y solo necesitas instalación profesional con transfer
              switch, también lo hacemos. Mucho cliente compra la planta en Sam&apos;s o Home
              Depot y se queda atascado porque nadie quiere hacer la conexión correcta — nosotros
              sí. Cotizamos solo la instalación y certificación, separada del equipo.
            </p>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-bold text-navy-dark mb-6">¿Cómo Funciona el Proceso?</h2>
            <div className="space-y-4">
              {[
                {
                  step: '1',
                  title: 'Visita y cálculo de carga',
                  desc: 'Vamos al sitio, medimos las cargas críticas que quieres respaldar, evaluamos panel eléctrico y ubicación posible de la planta. Gratis en el oeste; $150 reembolsables fuera del área.',
                },
                {
                  step: '2',
                  title: 'Recomendación honesta de tamaño',
                  desc: 'Te decimos qué kW necesitas y por qué — sin sobredimensionar. Si la planta más grande no aporta valor real, no te la vendemos.',
                },
                {
                  step: '3',
                  title: 'Cotización formal',
                  desc: 'Por escrito: planta (marca y modelo), transfer switch (manual o ATS), conduit, base de concreto si aplica, certificación LUMA, mano de obra y cronograma. Lista para presentar al banco o cooperativa si vas a financiar.',
                },
                {
                  step: '4',
                  title: 'Instalación con perito licenciado',
                  desc: 'Coordinamos cualquier corte breve con LUMA, montamos la planta, conectamos el transfer switch, probamos arranque automático y manual, y firmamos certificación.',
                },
                {
                  step: '5',
                  title: 'Entrega y servicio',
                  desc: 'Te enseñamos a operarla, cuándo cambiar aceite y filtros, y cómo arrancarla mensualmente para mantenerla en condición. 1 año de garantía de mano de obra Kilowatt; garantía del equipo según el fabricante.',
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
                'Cálculo de carga real (no adivinanza)',
                'Plantas residenciales 8 kW a 22 kW',
                'Plantas comerciales hasta sistemas trifásicos',
                'Transfer switch manual o ATS incluido',
                'Conduit, cableado y breakers',
                'Base de concreto y trabajo civil si aplica',
                'Certificación eléctrica perito #21309',
                'Coordinación con LUMA y orientación de permisos municipales',
                '1 año de garantía de mano de obra Kilowatt',
                'Garantía de equipo según el fabricante',
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
              ¿Listo para tener respaldo confiable cuando se va la luz?
            </h3>
            <QuoteForm defaultService="Planta eléctrica diesel" />
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title="Preguntas Frecuentes sobre Plantas Diesel en Puerto Rico" />

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-bold text-navy-dark mb-4">Servicios Relacionados</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/servicios/transfer-switch-ats', label: 'Transfer Switch / ATS' },
              { href: '/servicios/sistemas-con-bateria', label: 'Sistemas Solares Híbridos con Batería' },
              { href: '/servicios/contratista-electrico', label: 'Contratista Eléctrico' },
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
