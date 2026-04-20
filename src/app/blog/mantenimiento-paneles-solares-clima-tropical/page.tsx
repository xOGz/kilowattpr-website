import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, User } from 'lucide-react'
import { ArticleSchema, FAQSchema } from '@/components/SchemaOrg'
import FAQSection from '@/components/FAQSection'

export const metadata: Metadata = {
  title: 'Mantenimiento de Paneles Solares en Clima Tropical: Lo Que Necesitas Saber',
  description:
    'Guía completa de mantenimiento de paneles solares en Puerto Rico. Frecuencia de limpieza, efectos del salitre, polvo del Sahara, humedad tropical y cuándo llamar a un profesional.',
  alternates: { canonical: 'https://www.kilowattpr.com/blog/mantenimiento-paneles-solares-clima-tropical' },
}

const faqs = [
  {
    question: '¿Cada cuánto debo limpiar mis paneles solares en Puerto Rico?',
    answer: 'La frecuencia de limpieza depende de tu ubicación en Puerto Rico. Si vives en el interior de la isla (Cayey, Caguas, Utuado), cada 6 a 8 meses es suficiente. Si vives en la costa (Rincón, Cabo Rojo, Fajardo), donde el salitre marino se acumula más rápido, se recomienda cada 4 a 6 meses. Si notas una capa visible de polvo o suciedad, o si tu producción solar ha bajado sin razón aparente, es momento de limpiar.',
  },
  {
    question: '¿El polvo del Sahara afecta mis paneles solares?',
    answer: 'Sí. Las nubes de polvo del Sahara que llegan a Puerto Rico entre junio y agosto depositan una capa fina de partículas sobre los paneles solares que puede reducir la producción entre un 5% y 15%. Después de un evento significativo de polvo sahariano, se recomienda una limpieza adicional para restaurar la eficiencia máxima. En Kilowatt PR monitoreamos estos eventos y notificamos a nuestros clientes cuando es necesario una limpieza fuera de programa.',
  },
  {
    question: '¿Puedo limpiar mis paneles solares yo mismo?',
    answer: 'Para limpieza básica, sí puedes usar agua y una esponja suave desde el suelo si tus paneles son accesibles y tu techo es seguro. Sin embargo, no recomendamos subir al techo sin equipo de seguridad adecuado, usar agua a presión (puede dañar los sellos del panel), ni usar jabones abrasivos o químicos fuertes. Para una limpieza profunda y segura, especialmente si tus paneles están en un techo inclinado o de difícil acceso, recomendamos el servicio profesional de Kilowatt PR.',
  },
  {
    question: '¿Qué pasa si no le doy mantenimiento a mis paneles solares?',
    answer: 'Sin mantenimiento regular, los paneles solares en el clima tropical de Puerto Rico pueden perder hasta un 25% de su eficiencia debido a la acumulación de salitre, polvo, moho y residuos orgánicos. Además, la falta de inspección puede permitir que problemas menores (conexiones sueltas, tornillos oxidados, sellado deteriorado) se conviertan en reparaciones costosas. El mantenimiento preventivo protege tu inversión y asegura que tu sistema produzca al máximo durante sus 25+ años de vida útil.',
  },
]

export default function MantenimientoPanelesPage() {
  const publishDate = '2026-03-15'
  const modifyDate = '2026-03-15'
  const url = 'https://www.kilowattpr.com/blog/mantenimiento-paneles-solares-clima-tropical'

  return (
    <>
      <ArticleSchema
        title="Mantenimiento de Paneles Solares en Clima Tropical: Lo Que Necesitas Saber"
        description="Guía completa de mantenimiento de paneles solares en Puerto Rico. Frecuencia de limpieza, salitre, polvo del Sahara y cuándo llamar a un profesional."
        datePublished={publishDate}
        dateModified={modifyDate}
        url={url}
      />
      <FAQSchema faqs={faqs} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <div className="flex items-center gap-3 text-sm text-gray-400 mb-4">
            <span className="bg-solar-yellow/10 text-solar-yellow font-medium px-3 py-1 rounded-full">
              Mantenimiento
            </span>
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <time dateTime={publishDate}>15 de marzo de 2026</time>
            </div>
            <div className="flex items-center gap-1">
              <User size={14} />
              <Link href="/equipo/julio-santiago-perez" className="hover:text-solar-yellow transition-colors">Ing. Julio A. Santiago Pérez, PE</Link>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">
            Mantenimiento de Paneles Solares en Clima Tropical: Lo Que Necesitas Saber
          </h1>

          <p className="article-intro text-xl text-gray-600 leading-relaxed">
            Puerto Rico es uno de los mejores lugares del mundo para la energía solar, pero
            nuestro clima tropical presenta desafíos únicos para el mantenimiento de paneles
            solares. El salitre costero, el polvo del Sahara, la humedad extrema y las
            temperaturas altas pueden afectar la eficiencia de tu sistema si no se maneja
            correctamente. Esta guía te explica todo lo que necesitas saber.
          </p>
        </div>

        <div className="prose prose-lg max-w-none text-gray-600">
          <h2>El Clima Tropical de Puerto Rico: Amigo y Enemigo del Solar</h2>

          <p>
            Puerto Rico recibe entre 5 y 6 horas de sol pico al día durante todo el año,
            según el{' '}
            <a href="https://www.nrel.gov/gis/solar-resource-maps.html" target="_blank" rel="noopener noreferrer">
              Laboratorio Nacional de Energía Renovable (NREL)
            </a>. Esa radiación solar constante es la razón por la cual los sistemas solares
            en la isla producen tanta energía. Pero ese mismo ambiente tropical que nos da
            sol abundante también trae condiciones que pueden reducir la eficiencia de tus
            paneles si no se mantienen.
          </p>

          <p>
            La buena noticia: el mantenimiento de paneles solares es relativamente simple y
            económico. Con las inspecciones y limpiezas correctas en los intervalos adecuados,
            tu sistema mantendrá su producción óptima durante los 25 a 30 años de su vida útil.
          </p>

          <h2>Los 4 Enemigos de tus Paneles Solares en Puerto Rico</h2>

          <h3>1. Salitre Marino (Zonas Costeras)</h3>
          <p>
            Si vives en un municipio costero como Rincón, Aguada, Cabo Rojo, Isabela, Fajardo
            o cualquier zona a menos de 2 kilómetros del mar, el salitre es tu principal
            enemigo. La brisa marina deposita una capa invisible de sal sobre los paneles que,
            con el tiempo, se acumula y forma una película opaca que bloquea la luz solar.
          </p>
          <p>
            En zonas costeras, esta acumulación puede reducir la producción hasta un{' '}
            <strong>15% a 20%</strong> si no se limpia regularmente. El salitre también puede
            acelerar la corrosión de los marcos de aluminio y las conexiones eléctricas si
            los componentes no son de grado marino.
          </p>

          <h3>2. Polvo del Sahara</h3>
          <p>
            Cada año, entre junio y agosto, nubes masivas de polvo del desierto del Sahara
            cruzan el Atlántico y llegan al Caribe. Estas nubes depositan partículas finas
            sobre toda la isla, incluyendo tus paneles solares. Durante eventos severos de
            polvo sahariano, la producción solar puede bajar entre un{' '}
            <strong>5% y 15%</strong> temporalmente. Después de que pasa el evento, una
            limpieza rápida restaura la producción normal.
          </p>

          <h3>3. Humedad y Moho</h3>
          <p>
            Con una humedad relativa promedio de 75% a 85%, Puerto Rico es un ambiente ideal
            para el crecimiento de moho, líquenes y algas, especialmente en las zonas
            montañosas del interior donde la neblina es frecuente. Estos organismos pueden
            crecer en los bordes de los paneles, en los marcos y hasta sobre el vidrio si la
            limpieza no es regular. Aunque el vidrio templado de los paneles modernos es
            resistente, el moho en los bordes puede retener humedad y acelerar el deterioro
            de los sellos.
          </p>

          <h3>4. Calor Extremo</h3>
          <p>
            Los paneles solares pierden eficiencia cuando se calientan demasiado. En Puerto
            Rico, las temperaturas de la superficie del techo pueden superar los 65°C (150°F)
            en horas pico. Los paneles solares modernos están diseñados para operar en estas
            condiciones, pero la instalación correcta es clave: una separación adecuada entre
            el panel y el techo permite la circulación de aire que reduce la temperatura.
            Kilowatt PR instala con la separación apropiada según las especificaciones del
            fabricante.
          </p>

          <h2>Frecuencia de Limpieza Recomendada</h2>

          <p>
            La frecuencia ideal de limpieza varía según tu ubicación en Puerto Rico:
          </p>

          <div className="not-prose bg-gray-50 rounded-xl p-6 my-6">
            <h3 className="font-bold text-navy-dark mb-4">Calendario de Limpieza por Zona</h3>
            <div className="space-y-3">
              {[
                { zona: 'Costa (Rincón, Cabo Rojo, Fajardo, Isabela)', frecuencia: 'Cada 4–6 meses' },
                { zona: 'Llano costero (Aguada, Mayagüez, Ponce)', frecuencia: 'Cada 5–7 meses' },
                { zona: 'Interior (Cayey, Caguas, Utuado, Adjuntas)', frecuencia: 'Cada 6–8 meses' },
                { zona: 'Después de evento de polvo del Sahara', frecuencia: 'Limpieza adicional' },
                { zona: 'Después de huracán o tormenta tropical', frecuencia: 'Inspección + limpieza' },
              ].map((row) => (
                <div key={row.zona} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-0">
                  <span className="text-sm text-gray-700">{row.zona}</span>
                  <span className="font-bold text-solar-yellow">{row.frecuencia}</span>
                </div>
              ))}
            </div>
          </div>

          <h2>Qué Sucede Si No Mantienes tus Paneles: Pérdida de Hasta 25% de Eficiencia</h2>

          <p>
            La acumulación progresiva de suciedad, salitre, polvo y residuos orgánicos puede
            causar una pérdida de eficiencia de hasta un <strong>25%</strong> en paneles sin
            mantenimiento en el clima de Puerto Rico. Esto significa que un sistema de 8 kW
            que debería producir alrededor de 1,000 kWh al mes podría producir solo 750 kWh,
            perdiendo el equivalente a $75 a $100 mensuales en ahorro que dejas en la mesa.
          </p>

          <p>
            Más allá de la suciedad superficial, la falta de inspección periódica puede
            permitir que problemas menores se conviertan en fallas mayores:
          </p>

          <ul>
            <li><strong>Conexiones eléctricas sueltas</strong> pueden causar arcos eléctricos o incendios</li>
            <li><strong>Tornillos y herrajes oxidados</strong> debilitan la estructura de montaje</li>
            <li><strong>Sellado deteriorado</strong> permite la entrada de humedad al panel</li>
            <li><strong>Cables expuestos</strong> son vulnerables a roedores y degradación UV</li>
            <li><strong>Micro-fisuras en paneles</strong> se expanden con los ciclos térmicos tropicales</li>
          </ul>

          <h2>Limpieza DIY vs. Limpieza Profesional</h2>

          <h3>Lo Que Puedes Hacer Tú Mismo</h3>
          <p>
            Si tus paneles están accesibles desde el suelo o una escalera segura, puedes hacer
            una limpieza básica con agua limpia y una esponja o trapo suave. Usa agua sin
            minerales pesados si es posible (el agua de lluvia recogida funciona bien).
            Limpia en las mañanas o tardes cuando los paneles no están calientes para evitar
            el choque térmico.
          </p>

          <h3>Lo Que NO Debes Hacer</h3>
          <ul>
            <li><strong>Nunca uses agua a presión</strong> (power washer): puede dañar los sellos y las conexiones eléctricas</li>
            <li><strong>Nunca uses jabones abrasivos, cloro o químicos fuertes</strong>: pueden dañar el revestimiento anti-reflectante del vidrio</li>
            <li><strong>Nunca camines sobre los paneles</strong>: puedes causar micro-fisuras invisibles que degradan el rendimiento permanentemente</li>
            <li><strong>Nunca trabajes en el techo sin equipo de seguridad</strong>: las caídas de techo son una de las principales causas de lesiones en el hogar</li>
          </ul>

          <h3>Cuándo Llamar a un Profesional</h3>
          <p>
            Recomendamos una inspección profesional al menos una vez al año, y siempre después
            de un huracán o evento climático severo. La inspección profesional de Kilowatt PR
            incluye:
          </p>

          <ul>
            <li>Limpieza profunda con productos seguros para paneles solares</li>
            <li>Inspección visual de cada panel, cable y conexión</li>
            <li>Revisión de voltaje y producción por string</li>
            <li>Inspección de la estructura de montaje y tornillería</li>
            <li>Verificación del inversor y sistema de monitoreo</li>
            <li>Reporte escrito con fotografías y recomendaciones</li>
          </ul>

          <h2>El Servicio de Mantenimiento de Kilowatt PR</h2>

          <p>
            En Kilowatt PR ofrecemos planes de mantenimiento preventivo diseñados
            específicamente para las condiciones de Puerto Rico. Nuestros técnicos con más
            de una década de experiencia en la isla conocen los desafíos de cada zona: sabemos
            que un sistema en Rincón necesita un protocolo diferente a uno en Cayey.
          </p>

          <p>
            El mantenimiento no es un gasto: es la protección de tu inversión. Un sistema
            solar de $20,000 a $30,000 merece el cuidado adecuado para producir al máximo
            durante sus 25 años de garantía. Un programa de mantenimiento típico cuesta
            una fracción de lo que pierdes en producción cuando los paneles están sucios.
          </p>
        </div>

        <div className="mt-12 bg-solar-yellow/10 border border-solar-yellow/30 rounded-xl p-6 text-center">
          <p className="text-navy-dark font-bold text-lg mb-4">
            ¿Tus paneles están produciendo al máximo? Agenda una inspección.
          </p>
          <a
            href="https://wa.me/17874312275?text=Hola%2C%20me%20interesa%20el%20servicio%20de%20mantenimiento%20de%20paneles%20solares."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Solicitar Mantenimiento por WhatsApp
          </a>
        </div>
      </article>

      <FAQSection faqs={faqs} title="Preguntas sobre Mantenimiento de Paneles Solares" />

      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-bold text-navy-dark mb-4">Artículos Relacionados</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/blog/cuanto-cuesta-energia-solar-puerto-rico-2026', label: 'Costos de Energía Solar 2026' },
              { href: '/blog/guia-bateria-respaldo-hogar-puerto-rico', label: 'Guía de Baterías' },
              { href: '/blog/incentivos-solares-puerto-rico-2026', label: 'Preparación para Huracanes' },
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
