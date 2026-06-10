import type { Metadata } from 'next'
import Link from 'next/link'
import { FAQSchema } from '@/components/SchemaOrg'
import FAQSection from '@/components/FAQSection'
import QuoteForm from '@/components/QuoteForm'
import { CheckCircle, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Transfer Switch Manual y ATS en Puerto Rico — Instalación con Perito Licenciado',
  description:
    'Instalación de transfer switch manual y ATS (Automatic Transfer Switch) en Puerto Rico para conectar plantas eléctricas o sistemas solares al panel de tu casa. Perito #21309. 787-431-2275.',
  alternates: { canonical: 'https://www.kilowattpr.com/servicios/transfer-switch-ats/' },
}

const faqs = [
  {
    question: '¿Qué es un transfer switch y por qué lo necesito?',
    answer:
      'El transfer switch es el equipo que conecta una fuente de energía de respaldo (planta diesel, sistema solar con batería, generador portátil) al panel eléctrico de la casa. Sin transfer switch, conectar una planta directo al panel es peligroso e ilegal — hay riesgo de electrocutar a un técnico de LUMA trabajando en la línea (backfeed), incendio por sobrecarga y daño al equipo. El transfer switch aísla el sistema de la red de LUMA y permite que la planta o solar alimenten los circuitos de tu casa de forma segura.',
  },
  {
    question: '¿Cuál es la diferencia entre transfer switch manual y ATS?',
    answer:
      'Un transfer switch manual lo accionas tú con una palanca cuando se va la luz — son más económicos y confiables porque tienen menos partes que fallar. Un ATS (Automatic Transfer Switch) detecta el apagón y arranca la planta automáticamente en segundos, sin que tengas que salir a moverlo. El ATS es la opción para clientes con plantas diesel que quieren operación 100% automática, especialmente útil si pasas tiempo fuera o tienes equipos que no toleran interrupciones (neveras, equipos médicos, servidores). El manual es perfecto si estás en casa cuando se va la luz y prefieres simpleza.',
  },
  {
    question: '¿Puedo conectar mi planta portátil al panel sin transfer switch?',
    answer:
      'No, y conectar una planta portátil directo al panel mediante un cable "macho-macho" (el típico backfeed) es ilegal y extremadamente peligroso. Pone en riesgo de muerte a cualquier persona trabajando en la línea de LUMA, viola el National Electrical Code (NEC) y puede invalidar tu seguro de hogar si causa un incendio. Si tienes una planta portátil, lo correcto es instalar al menos un inlet box con interlock kit en el panel — un trabajo de medio día que cualquier perito electricista licenciado hace por una fracción del costo de un ATS.',
  },
  {
    question: '¿Cuánto cuesta instalar un transfer switch en Puerto Rico?',
    answer:
      'Depende del tipo (manual vs ATS), el amperaje (200A residencial es lo más común), cuántos circuitos vas a respaldar y si hay que pasar conduit nuevo. Para tener un número claro necesitamos ver tu panel y la ubicación de la planta o sistema solar — la consulta es gratis en el oeste (Aguada, Aguadilla, Rincón, Moca, Añasco, Mayagüez). Fuera de esa zona cobramos $150 reembolsables al firmar contrato. Llámanos al 787-431-2275 o escríbenos por WhatsApp para coordinar.',
  },
  {
    question: '¿El trabajo necesita certificación de LUMA Energy?',
    answer:
      'Sí. Cualquier modificación al panel eléctrico que afecte la conexión con la red requiere certificación de un perito electricista licenciado (Lic. #21309 en nuestro caso) y, en muchos casos, una inspección/certificación que se somete a LUMA. Kilowatt PR gestiona la certificación completa como parte del servicio — incluida la documentación que necesites si LUMA pide inspección posterior.',
  },
]

export default function TransferSwitchAtsPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />

      <section className="bg-navy-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Transfer Switch Manual y ATS en{' '}
            <span className="text-solar-yellow">Puerto Rico</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Instalación segura del switch que conecta tu planta diesel o sistema solar al panel
            eléctrico. Trabajo certificado por perito electricista licenciado #21309.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              Después de un apagón largo, mucha gente compra una planta diesel pensando que con
              eso resuelve. Pero la planta sola no sirve de nada si no está conectada al panel
              eléctrico de forma segura — y la única manera segura es un transfer switch. Sin él,
              estás cargando el cable de extensión por todos lados con regletas, o peor, intentando
              hacer un backfeed con un cable macho-macho que es ilegal y peligroso.
            </p>
            <p>
              En Kilowatt PR instalamos transfer switches manuales y ATS (Automatic Transfer
              Switch) para residencias y comercios en toda la isla. El trabajo lo hace nuestro
              equipo de peritos electricistas licenciados (Lic. #21309) y queda certificado para
              cumplir con el National Electrical Code y los requisitos de LUMA Energy. La idea es
              simple: cuando se va la luz, tu planta o tu sistema solar toman el relevo sin riesgo
              de backfeed a la línea de LUMA, y cuando vuelve, todo regresa solo a la red sin que
              tengas que tocar nada.
            </p>
            <p>
              Para clientes con planta diesel grande (8kW en adelante), el ATS es lo que tiene
              sentido — arranca la planta solo cuando detecta el apagón y la apaga cuando vuelve
              LUMA. Si pasas tiempo fuera de la casa, o si tienes neveras comerciales, equipos
              médicos o un home office que no aguanta interrupciones, el ATS te paga su costo en
              tranquilidad. Para clientes con planta portátil o demanda más liviana, un transfer
              switch manual con interlock kit es la opción correcta — más económico, casi sin
              piezas que fallen, y rinde igual de bien si estás dispuesto a salir a moverlo cuando
              se va la luz.
            </p>
            <p>
              En sistemas solares con batería, el transfer switch también es clave: define qué
              circuitos quedan en el "backup panel" alimentado por la batería durante un apagón.
              No tiene sentido que tu batería de 15 kWh trate de mantener encendido el aire
              acondicionado central — la idea es respaldar las cargas críticas (neveras, abanicos,
              comunicaciones, algunas luces) para que el sistema dure horas o días, no minutos. El
              diseño del backup panel lo firma nuestro PE #6083.
            </p>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-bold text-navy-dark mb-6">¿Cómo Funciona el Proceso?</h2>
            <div className="space-y-4">
              {[
                {
                  step: '1',
                  title: 'Consulta y evaluación',
                  desc: 'Vamos a tu casa o negocio, miramos el panel, la ubicación de la planta o el sistema solar, y conversamos qué circuitos quieres respaldar. Gratis en el oeste; $150 reembolsables fuera del área.',
                },
                {
                  step: '2',
                  title: 'Cotización formal',
                  desc: 'Te entregamos por escrito el tipo de switch recomendado (manual vs ATS), amperaje, materiales, mano de obra y tiempo. Si necesitas financiamiento, te lo entregamos listo para presentar al banco o cooperativa.',
                },
                {
                  step: '3',
                  title: 'Instalación con perito licenciado',
                  desc: 'Coordinamos un corte breve del servicio con LUMA si aplica, instalamos el switch, conectamos el inlet (para portátiles) o la línea fija a la planta/sistema solar, y probamos la transferencia en ambos sentidos.',
                },
                {
                  step: '4',
                  title: 'Certificación y entrega',
                  desc: 'Firmamos la certificación eléctrica y te entregamos copia. Te enseñamos a operar el switch (manual) o verificamos que el ATS arranque y apague la planta correctamente. 1 año de garantía de mano de obra Kilowatt.',
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
                'Transfer switch manual con interlock kit (planta portátil)',
                'ATS de 100A a 400A para planta fija',
                'Inlet box exterior con cubierta NEMA 3R',
                'Conduit, cableado calibre correcto y breakers',
                'Coordinación con LUMA si requiere corte',
                'Certificación eléctrica firmada por perito #21309',
                'Diseño de backup panel para sistemas solares (firmado por PE #6083)',
                '1 año de garantía de mano de obra Kilowatt',
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
              ¿Listo para conectar tu planta o sistema solar de forma segura?
            </h3>
            <QuoteForm defaultService="Transfer Switch / ATS" />
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title="Preguntas Frecuentes sobre Transfer Switch y ATS" />

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-bold text-navy-dark mb-4">Servicios Relacionados</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/servicios/sistemas-con-bateria', label: 'Sistemas Solares Híbridos con Batería' },
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
