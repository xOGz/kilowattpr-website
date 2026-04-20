import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, User } from 'lucide-react'
import { ArticleSchema, FAQSchema } from '@/components/SchemaOrg'
import FAQSection from '@/components/FAQSection'

export const metadata: Metadata = {
  title: 'Cómo Funciona el Net Metering (Medición Neta) en Puerto Rico',
  description:
    'Explicación completa del net metering en Puerto Rico. Cómo funciona el medidor bidireccional, créditos en tu factura de LUMA, requisitos de PREB y proceso de interconexión.',
  alternates: { canonical: 'https://www.kilowattpr.com/blog/como-funciona-net-metering-puerto-rico' },
}

const faqs = [
  {
    question: '¿Qué es el net metering en Puerto Rico?',
    answer: 'El net metering (medición neta) es un mecanismo regulado por el Negociado de Energía de Puerto Rico (PREB) que permite a los dueños de sistemas solares enviar la energía que no consumen de vuelta a la red eléctrica de LUMA. Un medidor bidireccional registra tanto la energía que consumes de la red como la que exportas. Al final del mes, solo pagas la diferencia neta: si exportaste más de lo que consumiste, recibes un crédito en tu próxima factura.',
  },
  {
    question: '¿Cuánto me paga LUMA por la energía que exporto con net metering?',
    answer: 'Bajo el programa de net metering en Puerto Rico, LUMA te acredita la energía exportada a una tarifa establecida por PREB, que típicamente es menor que la tarifa que pagas por el consumo. Esto significa que te conviene consumir la mayor cantidad posible de tu propia energía solar en tiempo real y exportar solo el excedente. El crédito aparece como un descuento en tu factura mensual de LUMA.',
  },
  {
    question: '¿Qué pasa con mis créditos de net metering al final del año?',
    answer: 'Los créditos de net metering en Puerto Rico se acumulan mes a mes. Si en un mes exportas más de lo que consumes, el crédito se transfiere al próximo mes. Al final del período de liquidación anual, los créditos acumulados que no se hayan utilizado generalmente se liquidan según las reglas vigentes de PREB. Por eso es importante dimensionar tu sistema correctamente para que la producción anual sea cercana a tu consumo anual.',
  },
  {
    question: '¿Necesito un medidor especial para el net metering en Puerto Rico?',
    answer: 'Sí. Para participar en el programa de net metering necesitas un medidor bidireccional que registre el flujo de energía en ambas direcciones: la que consumes de la red y la que exportas desde tu sistema solar. LUMA instala este medidor como parte del proceso de interconexión. El costo del medidor y su instalación están incluidos en el proceso de interconexión. En Kilowatt PR gestionamos todo el proceso de interconexión con LUMA para que no tengas que hacer trámites.',
  },
]

export default function NetMeteringPuertoRicoPage() {
  const publishDate = '2026-03-17'
  const modifyDate = '2026-03-17'
  const url = 'https://www.kilowattpr.com/blog/como-funciona-net-metering-puerto-rico'

  return (
    <>
      <ArticleSchema
        title="Cómo Funciona el Net Metering (Medición Neta) en Puerto Rico"
        description="Explicación completa del net metering en Puerto Rico. Medidor bidireccional, créditos en factura LUMA, requisitos de PREB y proceso de interconexión."
        datePublished={publishDate}
        dateModified={modifyDate}
        url={url}
      />
      <FAQSchema faqs={faqs} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <div className="flex items-center gap-3 text-sm text-gray-400 mb-4">
            <span className="bg-solar-yellow/10 text-solar-yellow font-medium px-3 py-1 rounded-full">
              Proceso y Permisos
            </span>
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <time dateTime={publishDate}>17 de marzo de 2026</time>
            </div>
            <div className="flex items-center gap-1">
              <User size={14} />
              <Link href="/equipo/julio-santiago-perez" className="hover:text-solar-yellow transition-colors">Ing. Julio A. Santiago Pérez, PE</Link>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">
            Cómo Funciona el Net Metering (Medición Neta) en Puerto Rico
          </h1>

          <p className="article-intro text-xl text-gray-600 leading-relaxed">
            Si tienes paneles solares o estás considerando instalarlos, probablemente
            has escuchado el término "net metering" o "medición neta". Es el mecanismo
            que permite que la energía que tus paneles producen y no usas se envíe a
            la red de LUMA y se te acredite en tu factura. Suena simple, pero los
            detalles importan. Aquí te explicamos exactamente cómo funciona en Puerto
            Rico.
          </p>
        </div>

        <div className="prose prose-lg max-w-none text-gray-600">
          <h2>¿Qué Es el Net Metering?</h2>

          <p>
            El net metering (medición neta) es una política regulada por el Negociado
            de Energía de Puerto Rico (PREB) que permite a los propietarios de sistemas
            solares intercambiar energía con la red eléctrica. En términos simples:
            cuando tus paneles producen más energía de la que usas, el excedente va a
            la red y recibes un crédito. Cuando necesitas más energía de la que produces
            (por ejemplo, de noche), la tomas de la red.
          </p>

          <p>
            Al final de cada período de facturación, solo pagas la diferencia neta
            entre lo que consumiste de la red y lo que exportaste. De ahí el nombre:
            medición <em>neta</em>.
          </p>

          <h2>Cómo Funciona el Medidor Bidireccional</h2>

          <p>
            El corazón del net metering es el medidor bidireccional. A diferencia del
            medidor tradicional que solo mide la energía que consumes, el medidor
            bidireccional registra el flujo de energía en ambas direcciones:
          </p>

          <div className="not-prose bg-gray-50 rounded-xl p-6 my-6">
            <h3 className="font-bold text-navy-dark mb-4">Flujo de Energía con Net Metering</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="bg-green-100 text-green-700 font-bold px-3 py-1 rounded-full text-sm shrink-0">Día</span>
                <div>
                  <p className="font-medium text-navy-dark">Tus paneles producen más de lo que consumes</p>
                  <p className="text-sm text-gray-600">El excedente fluye hacia la red de LUMA. El medidor gira "hacia atrás", acumulando crédito a tu favor.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-blue-100 text-blue-700 font-bold px-3 py-1 rounded-full text-sm shrink-0">Noche</span>
                <div>
                  <p className="font-medium text-navy-dark">No hay producción solar, consumes de la red</p>
                  <p className="text-sm text-gray-600">El medidor gira "hacia adelante" normalmente, pero primero usa los créditos acumulados durante el día.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-amber-100 text-amber-700 font-bold px-3 py-1 rounded-full text-sm shrink-0">Factura</span>
                <div>
                  <p className="font-medium text-navy-dark">Solo pagas la diferencia neta</p>
                  <p className="text-sm text-gray-600">Si exportaste 400 kWh y consumiste 600 kWh de la red, solo pagas por 200 kWh netos.</p>
                </div>
              </div>
            </div>
          </div>

          <h2>Un Día Típico con Net Metering en Puerto Rico</h2>

          <p>
            Para entender mejor cómo funciona en la práctica, veamos un día típico de
            un hogar con paneles solares y net metering en Puerto Rico:
          </p>

          <ul>
            <li><strong>6:00 AM – 8:00 AM:</strong> Los paneles empiezan a producir pero aún no cubren todo el consumo matutino (calentador, estufa, luces). Consumes parcialmente de la red.</li>
            <li><strong>8:00 AM – 4:00 PM:</strong> Horas pico de producción solar. Los paneles producen significativamente más de lo que consumes (la casa está vacía o con bajo consumo). El excedente va a la red y acumulas crédito.</li>
            <li><strong>4:00 PM – 6:00 PM:</strong> La producción baja mientras el consumo sube (la familia llega, se enciende el A/C). Empiezas a consumir crédito acumulado.</li>
            <li><strong>6:00 PM – 6:00 AM:</strong> Sin producción solar. Consumes de la red, pero los créditos del día reducen tu consumo neto.</li>
          </ul>

          <h2>Créditos Mensuales en tu Factura de LUMA</h2>

          <p>
            Los créditos de net metering aparecen en tu factura de LUMA como un
            descuento directo. Hay varios escenarios posibles cada mes:
          </p>

          <div className="not-prose bg-gray-50 rounded-xl p-6 my-6">
            <h3 className="font-bold text-navy-dark mb-4">Escenarios de Facturación Mensual</h3>
            <div className="space-y-3">
              {[
                {
                  escenario: 'Consumiste más de lo que exportaste',
                  resultado: 'Pagas la diferencia neta (reducida significativamente)',
                  ejemplo: 'Consumo: 800 kWh | Exportación: 500 kWh | Pagas: 300 kWh',
                },
                {
                  escenario: 'Exportaste más de lo que consumiste',
                  resultado: 'Recibes crédito que se acumula para el próximo mes',
                  ejemplo: 'Consumo: 400 kWh | Exportación: 600 kWh | Crédito: 200 kWh',
                },
                {
                  escenario: 'Producción y consumo equilibrados',
                  resultado: 'Factura de LUMA cercana a $0 (solo cargos fijos mínimos)',
                  ejemplo: 'Consumo: 600 kWh | Exportación: 580 kWh | Pagas: 20 kWh',
                },
              ].map((row) => (
                <div key={row.escenario} className="border-b border-gray-200 last:border-0 pb-3 last:pb-0">
                  <p className="font-bold text-navy-dark">{row.escenario}</p>
                  <p className="text-sm text-gray-700">{row.resultado}</p>
                  <p className="text-xs text-gray-500 italic">{row.ejemplo}</p>
                </div>
              ))}
            </div>
          </div>

          <p>
            Es importante notar que incluso con net metering, tu factura de LUMA nunca
            llega exactamente a $0 porque existen cargos fijos mínimos que aplican
            independientemente de tu consumo neto. Sin embargo, es posible reducir tu
            factura mensual de $300–$400 a $20–$50.
          </p>

          <h2>Liquidación Anual de Créditos</h2>

          <p>
            Los créditos que acumulas se transfieren de mes a mes. Esto es beneficioso
            porque la producción solar varía según la época del año: en verano produces
            más y en los meses de lluvia un poco menos. Los créditos de los meses de
            alta producción compensan los meses de menor producción.
          </p>

          <p>
            Al final del período de liquidación anual, los créditos acumulados se
            manejan según las reglas vigentes de PREB. Por eso, dimensionar tu sistema
            correctamente es fundamental: queremos que tu producción anual sea lo más
            cercana posible a tu consumo anual para maximizar el beneficio y minimizar
            los créditos que se pierden en la liquidación.
          </p>

          <h2>El Rol de PREB y LUMA en el Net Metering</h2>

          <h3>PREB (Negociado de Energía de Puerto Rico)</h3>
          <p>
            PREB es el regulador que establece las reglas del net metering en Puerto
            Rico. Define las tarifas de crédito, los requisitos técnicos para participar,
            los límites de capacidad del sistema y los derechos y obligaciones tanto del
            cliente como de LUMA. PREB también atiende las querellas si surgen disputas
            con LUMA sobre los créditos de net metering.
          </p>

          <h3>LUMA Energy</h3>
          <p>
            LUMA es quien opera la red y ejecuta el programa de net metering día a día.
            Sus responsabilidades incluyen:
          </p>
          <ul>
            <li>Procesar la solicitud de interconexión</li>
            <li>Instalar el medidor bidireccional</li>
            <li>Realizar la inspección de interconexión</li>
            <li>Calcular y aplicar los créditos mensuales en tu factura</li>
            <li>Manejar la liquidación anual</li>
          </ul>

          <h2>Requisitos de Interconexión para Net Metering</h2>

          <p>
            Para participar en el programa de net metering en Puerto Rico, tu sistema
            solar debe cumplir con los requisitos de interconexión de LUMA:
          </p>

          <ol>
            <li><strong>Instalador autorizado:</strong> El sistema debe ser instalado por un instalador con licencia vigente en Puerto Rico</li>
            <li><strong>Permisos de OGPE:</strong> Todos los permisos de construcción de la Oficina de Gerencia de Permisos deben estar aprobados</li>
            <li><strong>Inspección eléctrica:</strong> El sistema debe pasar la inspección eléctrica del perito electricista</li>
            <li><strong>Solicitud de interconexión:</strong> Se somete la solicitud formal a LUMA con los planos del sistema</li>
            <li><strong>Inspección de LUMA:</strong> LUMA inspecciona el sistema antes de autorizar la interconexión</li>
            <li><strong>Instalación del medidor:</strong> LUMA instala el medidor bidireccional</li>
            <li><strong>Permiso para operar (PTO):</strong> LUMA emite el permiso final para que tu sistema pueda exportar a la red</li>
          </ol>

          <p>
            Este proceso puede tomar entre 4 y 12 semanas dependiendo de la carga de
            trabajo de LUMA y la complejidad del sistema. En Kilowatt PR gestionamos
            todo este proceso por ti: desde la solicitud inicial hasta que tu sistema
            está produciendo y exportando a la red.
          </p>

          <h2>Cómo Maximizar tus Beneficios con Net Metering</h2>

          <p>
            Para obtener el máximo beneficio del net metering en Puerto Rico, sigue
            estas recomendaciones:
          </p>

          <ul>
            <li><strong>Dimensiona tu sistema correctamente:</strong> Un sistema sobredimensionado genera créditos que puedes perder en la liquidación anual. Un sistema subdimensionado no maximiza tu ahorro. El punto ideal es que tu producción anual iguale tu consumo anual.</li>
            <li><strong>Desplaza consumo al día:</strong> Programa electrodomésticos grandes (lavadora, secadora, calentador de agua) para que operen durante las horas de sol cuando tus paneles producen excedente.</li>
            <li><strong>Monitorea tu producción:</strong> Usa la aplicación de monitoreo de tu inversor para verificar que tu sistema produce según lo esperado. Una caída inesperada puede indicar suciedad o un problema técnico.</li>
            <li><strong>Considera una batería:</strong> Con batería puedes almacenar excedente para uso nocturno en vez de enviarlo a la red, maximizando el autoconsumo y reduciendo la dependencia de los créditos de net metering.</li>
          </ul>

          <h2>Net Metering vs. Batería: ¿Son Complementarios?</h2>

          <p>
            Net metering y batería no son mutuamente excluyentes: son complementarios.
            El net metering te permite "usar la red como batería virtual" durante el día,
            mientras que una batería física te protege durante los apagones cuando la red
            no está disponible. La combinación ideal para muchos hogares en Puerto Rico
            es tener ambos: net metering para maximizar el ahorro mensual y batería para
            tener respaldo durante los apagones frecuentes de LUMA.
          </p>

          <h2>Conclusión: Net Metering es Clave para tu Retorno de Inversión</h2>

          <p>
            El net metering es lo que convierte tu inversión solar de un sistema de
            autoconsumo limitado al horario diurno en una solución de ahorro las 24
            horas del día. Sin net metering, la energía que produces y no usas
            durante el día se desperdicia. Con net metering, cada kilovatio-hora que
            produces tiene valor, ya sea que lo consumas directamente o lo envíes a
            la red como crédito.
          </p>

          <p>
            En Kilowatt PR, con técnicos y jornaleros con más de una década de
            experiencia en Puerto Rico, dimensionamos tu sistema para maximizar el
            beneficio del net metering y gestionamos todo el proceso de interconexión
            con LUMA para que tú solo te preocupes de disfrutar el ahorro.
          </p>
        </div>

        <div className="mt-12 bg-solar-yellow/10 border border-solar-yellow/30 rounded-xl p-6 text-center">
          <p className="text-navy-dark font-bold text-lg mb-4">
            ¿Quieres saber cuánto puedes ahorrar con net metering? Cotización gratuita.
          </p>
          <a
            href="https://wa.me/17874312275?text=Hola%2C%20me%20interesa%20saber%20c%C3%B3mo%20funciona%20el%20net%20metering%20y%20cu%C3%A1nto%20puedo%20ahorrar."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Consultar por WhatsApp
          </a>
        </div>
      </article>

      <FAQSection faqs={faqs} title="Preguntas sobre Net Metering en Puerto Rico" />

      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-bold text-navy-dark mb-4">Artículos Relacionados</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/blog/como-funciona-interconexion-luma-energia', label: 'Interconexión con LUMA' },
              { href: '/blog/cuanto-cuesta-energia-solar-puerto-rico-2026', label: 'Costos de Energía Solar 2026' },
              { href: '/blog/como-leer-factura-luma-ahorro-solar', label: 'Cómo Leer tu Factura LUMA' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="text-solar-yellow font-medium hover:underline text-sm">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
