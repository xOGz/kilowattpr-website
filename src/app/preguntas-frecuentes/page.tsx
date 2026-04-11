import type { Metadata } from 'next'
import { MessageCircle, Phone } from 'lucide-react'
import { FAQSchema } from '@/components/SchemaOrg'
import FAQSection from '@/components/FAQSection'

export const metadata: Metadata = {
  title: 'Preguntas Frecuentes sobre Energía Solar en Puerto Rico',
  description:
    'Respuestas a las preguntas más comunes sobre energía solar en Puerto Rico: costos, instalación, LUMA, baterías, mantenimiento y net metering.',
  alternates: { canonical: 'https://www.kilowattpr.com/preguntas-frecuentes' },
  openGraph: {
    title: 'Preguntas Frecuentes | Kilowatt PR',
    description:
      'Todo lo que necesitas saber sobre energía solar en Puerto Rico: costos desde $13,000, proceso de instalación, LUMA y más.',
    url: 'https://www.kilowattpr.com/preguntas-frecuentes',
  },
}

const costosFinanciamiento = [
  {
    question: '¿Cuánto cuesta un sistema de paneles solares en Puerto Rico?',
    answer:
      'Los sistemas solares residenciales comienzan desde $13,000. El precio final depende del consumo eléctrico de tu hogar, la cantidad de paneles necesarios y si incluyes batería de respaldo. En Kilowatt PR ofrecemos cotización gratuita y sin compromiso.',
  },
  {
    question: '¿Qué opciones de financiamiento están disponibles?',
    answer:
      'Ofrecemos financiamiento directo con pagos mensuales accesibles. También trabajamos con instituciones financieras locales para ofrecerte las mejores tasas. El pago mensual del financiamiento suele ser menor que tu factura actual de LUMA Energy.',
  },
  {
    question: '¿En cuánto tiempo recupero mi inversión en energía solar?',
    answer:
      'Con las tarifas altas de LUMA Energy, la mayoría de nuestros clientes recuperan su inversión entre 4 y 6 años. Después de eso, tu electricidad es prácticamente gratis por los siguientes 20+ años que dura el sistema.',
  },
  {
    question: '¿La energía solar realmente reduce mi factura de LUMA?',
    answer:
      'Sí. La mayoría de nuestros clientes reducen su factura de LUMA entre un 70% y 100%. Con net metering, la energía que produces y no usas se acredita a tu cuenta, reduciendo significativamente tu costo mensual.',
  },
  {
    question: '¿La cotización tiene algún costo o compromiso?',
    answer:
      'No. La consulta inicial y cotización son completamente gratis y sin compromiso. Nuestro ingeniero PE #6083 diseña cada sistema personalizado según tu consumo real, orientación del techo y necesidades específicas.',
  },
]

const procesoInstalacion = [
  {
    question: '¿Cuánto tiempo toma instalar un sistema solar?',
    answer:
      'El proceso completo toma entre 1 y 3 semanas, que incluye diseño, permisos y coordinación con LUMA. La instalación física en tu techo toma solo 1 a 2 días. Nos encargamos de todo el proceso de principio a fin.',
  },
  {
    question: '¿Kilowatt PR se encarga de los permisos de OGPE?',
    answer:
      'Sí. Gestionamos todos los permisos de OGPE (Oficina de Gerencia de Permisos) necesarios para tu instalación. No tienes que preocuparte por el papeleo ni visitas a oficinas gubernamentales.',
  },
  {
    question: '¿Cómo es el proceso de interconexión con LUMA Energy?',
    answer:
      'Manejamos todo el proceso de interconexión con LUMA Energy de principio a fin. Esto incluye la solicitud, documentación técnica, inspección y activación del medidor bidireccional para net metering.',
  },
  {
    question: '¿Necesito hacer cambios en mi techo antes de instalar paneles?',
    answer:
      'Depende del estado de tu techo. Durante la evaluación inicial gratuita, inspeccionamos la estructura y condición. Si se necesita algún refuerzo o reparación, te lo informamos antes de comenzar. Ofrecemos servicio de sellado de techo como complemento.',
  },
  {
    question: '¿Quién diseña mi sistema solar?',
    answer:
      'Cada sistema es diseñado por nuestro ingeniero profesional (PE #6083), con más de una década de experiencia en Puerto Rico. El diseño se personaliza según tu consumo eléctrico real, la orientación y área de tu techo, y tus necesidades energéticas.',
  },
]

const equiposTecnologia = [
  {
    question: '¿Qué marcas de paneles solares instalan?',
    answer:
      'Instalamos paneles de las marcas más confiables del mercado con garantía de 25 años. Seleccionamos equipos de alto rendimiento probados en condiciones tropicales como las de Puerto Rico: alta humedad, calor y exposición a sal marina en zonas costeras.',
  },
  {
    question: '¿Necesito batería de respaldo con mis paneles solares?',
    answer:
      'En Puerto Rico, la batería es altamente recomendada debido a la inestabilidad de la red eléctrica de LUMA Energy. Con batería, tu hogar mantiene energía durante apagones. Sin ella, el sistema se apaga cuando LUMA se va. La mayoría de nuestros clientes eligen incluir batería.',
  },
  {
    question: '¿Qué tipo de inversor usan y cómo funciona?',
    answer:
      'Utilizamos inversores de alta eficiencia que convierten la energía DC generada por los paneles en energía AC para tu hogar. El tipo de inversor (string, microinversores o híbrido) se selecciona según el diseño específico de tu sistema.',
  },
  {
    question: '¿Puedo monitorear la producción de mi sistema solar?',
    answer:
      'Sí. Todos nuestros sistemas incluyen monitoreo en tiempo real a través de una aplicación en tu celular. Puedes ver cuánta energía produces, consumes y envías a la red de LUMA en cualquier momento.',
  },
  {
    question: '¿Los paneles solares resisten huracanes?',
    answer:
      'Sí. Los paneles que instalamos están certificados para vientos de hasta 180 mph. Además, utilizamos sistemas de montaje reforzados diseñados específicamente para las condiciones climáticas de Puerto Rico. Hemos servido a clientes a través de múltiples temporadas de huracanes.',
  },
]

const mantenimiento = [
  {
    question: '¿Con qué frecuencia debo limpiar mis paneles solares?',
    answer:
      'Recomendamos limpieza profesional cada 6 a 8 meses. En zonas costeras, donde la acumulación de sal es mayor, recomendamos cada 4 a 6 meses. Paneles sucios pueden perder hasta un 25% de eficiencia.',
  },
  {
    question: '¿Qué incluye el servicio de mantenimiento de Kilowatt PR?',
    answer:
      'Nuestro servicio incluye limpieza profesional de paneles, inspección visual de cableado y conexiones, verificación del inversor y batería, revisión del sistema de monitoreo y un reporte detallado del estado de tu sistema.',
  },
  {
    question: '¿El clima tropical de Puerto Rico afecta los paneles?',
    answer:
      'Los paneles modernos están diseñados para condiciones tropicales. Sin embargo, la humedad, salitre costero y polvo tropical requieren mantenimiento periódico para mantener el rendimiento óptimo. Por eso recomendamos nuestro plan de mantenimiento.',
  },
  {
    question: '¿Cuánto dura la garantía de los paneles solares?',
    answer:
      'Los paneles tienen garantía de fabricante de 25 años en rendimiento. Los inversores típicamente tienen 10 a 12 años de garantía. Las baterías varían según el modelo, generalmente entre 10 y 15 años. Kilowatt PR ofrece garantía de mano de obra en la instalación.',
  },
  {
    question: '¿Qué pasa si un panel se daña?',
    answer:
      'Si un panel se daña por defecto de fabricación, está cubierto por la garantía de 25 años del fabricante. Si el daño es por causas externas (impacto, vandalismo), tu seguro de hogar normalmente lo cubre. Nuestro equipo puede manejar el reemplazo y reclamación.',
  },
]

const lumaNetMetering = [
  {
    question: '¿Qué es net metering y cómo funciona con LUMA?',
    answer:
      'Net metering es un programa donde la energía que tus paneles producen y no consumes se envía a la red de LUMA. Recibes créditos en tu factura por esa energía. Es como si LUMA te "guardara" la energía para cuando la necesites. Kilowatt PR gestiona toda la interconexión.',
  },
  {
    question: '¿LUMA me paga por la energía que produzco?',
    answer:
      'LUMA no te paga directamente, pero te otorga créditos en tu factura por la energía que envías a la red. Estos créditos reducen tu cargo mensual significativamente. Muchos clientes logran facturas de LUMA cercanas a cero con un sistema correctamente dimensionado.',
  },
  {
    question: '¿Qué pasa con mi sistema solar durante un apagón de LUMA?',
    answer:
      'Sin batería, tu sistema solar se apaga por seguridad cuando LUMA se desconecta (esto es un requisito de seguridad). Con batería de respaldo, tu hogar mantiene energía usando la batería y los paneles continúan cargándola durante el día.',
  },
  {
    question: '¿Cuánto tarda LUMA en aprobar la interconexión?',
    answer:
      'El proceso de interconexión con LUMA puede tomar de 2 a 4 semanas después de completar la instalación. Kilowatt PR maneja toda la documentación, seguimiento y coordinación con LUMA para que no tengas que preocuparte por el proceso burocrático.',
  },
  {
    question: '¿Puedo desconectarme completamente de LUMA Energy?',
    answer:
      'Técnicamente es posible con un sistema solar grande y suficiente almacenamiento en baterías, pero para la mayoría de los hogares recomendamos mantener la conexión a LUMA con net metering. Esto te da la ventaja de los créditos por energía excedente y respaldo adicional de la red.',
  },
]

const allFaqs = [
  ...costosFinanciamiento,
  ...procesoInstalacion,
  ...equiposTecnologia,
  ...mantenimiento,
  ...lumaNetMetering,
]

export default function PreguntasFrecuentesPage() {
  return (
    <>
      <FAQSchema faqs={allFaqs} />

      {/* Hero */}
      <section className="bg-surface text-on-surface py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-headline text-4xl md:text-5xl font-bold mb-6">
            Preguntas Frecuentes sobre{' '}
            <span className="text-primary-container">Energía Solar</span> en Puerto Rico
          </h1>
          <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl mx-auto">
            Respuestas claras y honestas a las preguntas más comunes de nuestros clientes.
            Con 4.9★ en Google y más de una década de experiencia en Puerto Rico.
          </p>
        </div>
      </section>

      {/* Costos y Financiamiento */}
      <FAQSection faqs={costosFinanciamiento} title="Costos y Financiamiento" />

      {/* Proceso de Instalación */}
      <FAQSection faqs={procesoInstalacion} title="Proceso de Instalación" />

      {/* Equipos y Tecnología */}
      <FAQSection faqs={equiposTecnologia} title="Equipos y Tecnología" />

      {/* Mantenimiento */}
      <FAQSection faqs={mantenimiento} title="Mantenimiento" />

      {/* LUMA Energy y Net Metering */}
      <FAQSection faqs={lumaNetMetering} title="LUMA Energy y Net Metering" />

      {/* CTA */}
      <section className="bg-surface py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-on-surface mb-6">
            ¿No encontraste tu pregunta?
          </h2>
          <p className="text-on-surface-variant text-lg mb-8 max-w-2xl mx-auto">
            Escríbenos por WhatsApp o llámanos. Nuestro equipo de técnicos y peritos
            electricistas con más de una década de experiencia en Puerto Rico está listo
            para ayudarte.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/17874312275?text=Hola%2C%20tengo%20una%20pregunta%20sobre%20energ%C3%ADa%20solar."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base px-8 py-4 inline-flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              Escríbenos por WhatsApp
            </a>
            <a
              href="tel:+17874312275"
              className="btn-outline text-base px-8 py-4 inline-flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              787-431-2275
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
