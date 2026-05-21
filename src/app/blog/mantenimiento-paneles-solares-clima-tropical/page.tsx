import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, User } from 'lucide-react'
import { ArticleSchema, FAQSchema } from '@/components/SchemaOrg'
import FAQSection from '@/components/FAQSection'

export const metadata: Metadata = {
  title: 'Mantenimiento de Paneles Solares en Clima Tropical: Lo Que Necesitas Saber',
  description:
    'Guía de mantenimiento de paneles solares en Puerto Rico basada en más de una década de servicio en la isla: frecuencia de limpieza por zona, salitre, polvo del Sahara, mantenimiento post-huracán y cuándo llamar a un profesional.',
  alternates: { canonical: 'https://www.kilowattpr.com/blog/mantenimiento-paneles-solares-clima-tropical/' },
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
  {
    question: '¿Cómo sé si mis paneles necesitan limpieza sin subir al techo?',
    answer: 'Tu app de monitoreo es la mejor herramienta de diagnóstico. Si la producción de un día soleado es notablemente menor que la de semanas anteriores con clima similar, casi siempre la causa es suciedad acumulada. Otras señales: una capa visible de polvo o sal al mirar los paneles desde el suelo, manchas de agua o residuos orgánicos en los bordes, o producción que no se recupera después de un día de lluvia fuerte. Ante cualquiera de estas señales, una inspección resuelve la duda.',
  },
  {
    question: '¿Debo inspeccionar mis paneles después de un huracán?',
    answer: 'Sí, siempre. Después de un huracán o tormenta tropical, recomendamos una inspección profesional antes de confiar de nuevo en el sistema. Los vientos fuertes pueden aflojar herrajes, desplazar paneles, dejar escombros entre el panel y el techo, y causar micro-fisuras que no se ven a simple vista. Una inspección post-huracán de Kilowatt PR verifica la estructura de montaje, las conexiones eléctricas, el sellado y la producción por string para confirmar que el sistema quedó seguro y operando al máximo.',
  },
]

export default function MantenimientoPanelesPage() {
  const publishDate = '2026-03-15'
  const modifyDate = '2026-05-20'
  const url = 'https://www.kilowattpr.com/blog/mantenimiento-paneles-solares-clima-tropical/'

  return (
    <>
      <ArticleSchema
        title="Mantenimiento de Paneles Solares en Clima Tropical: Lo Que Necesitas Saber"
        description="Guía de mantenimiento de paneles solares en Puerto Rico basada en más de una década de servicio: frecuencia de limpieza, salitre, polvo del Sahara, mantenimiento post-huracán y cuándo llamar a un profesional."
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
            correctamente. Esta guía la escribimos a partir de más de una década dando
            servicio solar y eléctrico en la isla, atravesando el huracán María y la crisis
            de LUMA Energy.
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
            los componentes no son de grado marino. En Kilowatt PR seleccionamos herrajes y
            sistemas de montaje aptos para ambiente costero precisamente por esta razón.
          </p>

          <h3>2. Polvo del Sahara</h3>
          <p>
            Cada año, entre junio y agosto, nubes masivas de polvo del desierto del Sahara
            cruzan el Atlántico y llegan al Caribe. Este fenómeno, conocido como la Capa de
            Aire Sahariano, es monitoreado de cerca por la Administración Nacional Oceánica
            y Atmosférica (NOAA) porque también influye en la temporada de huracanes. Para
            tus paneles, lo relevante es que estas nubes depositan partículas finas sobre
            toda la isla. Durante eventos severos de polvo sahariano, la producción solar
            puede bajar entre un <strong>5% y 15%</strong> temporalmente. Después de que pasa
            el evento, una limpieza rápida restaura la producción normal.
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

          <h2>Lo Que Vemos en el Campo: Más de una Década de Mantenimiento Solar en PR</h2>

          <p>
            La teoría sobre suciedad y eficiencia es una cosa; lo que realmente observamos
            techo por techo en Puerto Rico es otra. Estos son los patrones que más se repiten
            en nuestro trabajo de mantenimiento a lo largo de la isla:
          </p>

          <ul>
            <li>
              <strong>El problema casi nunca es el equipo, es la suciedad.</strong> Cuando
              un cliente llama porque "el sistema bajó de producción", la causa más común no
              es una falla del inversor ni de los paneles: es una capa de polvo, sal o residuo
              orgánico que se acumuló sin que nadie lo notara.
            </li>
            <li>
              <strong>La diferencia entre la costa y la montaña es real.</strong> Un sistema
              en Rincón o Aguada acumula salitre a un ritmo muy distinto al de uno en Cayey o
              Utuado. No existe un calendario único de limpieza para toda la isla; depende de
              tu microclima.
            </li>
            <li>
              <strong>La esquina inferior del panel es donde empieza el problema.</strong> El
              agua de lluvia arrastra suciedad hacia el borde inferior del panel y la deja ahí
              al evaporarse. Esa franja sucia en la parte baja del vidrio es una de las
              primeras señales visibles de que toca limpieza.
            </li>
            <li>
              <strong>La lluvia no limpia tus paneles.</strong> Es el mito más común. La
              lluvia tropical fuerte moja la suciedad y la redistribuye, pero el salitre y el
              polvo fino quedan adheridos. Confiar en la lluvia como "limpieza gratis" es una
              de las razones por las que vemos sistemas con años de acumulación.
            </li>
            <li>
              <strong>Los nidos y los escombros bajo el panel son comunes.</strong> El espacio
              entre el panel y el techo es atractivo para aves, lagartijos e insectos.
              Detectar y despejar eso a tiempo evita problemas de cableado y sombras parciales.
            </li>
          </ul>

          <p>
            Esa experiencia acumulada es la razón por la que el mantenimiento preventivo
            funciona: la mayoría de las pérdidas de producción en Puerto Rico son
            predecibles y evitables.
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

          <p>
            Por ejemplo, un sistema en Aguada —zona de llano costero con brisa marina
            constante— suele necesitar limpieza cada 5 a 7 meses, mientras que uno en San Juan,
            más protegido del salitre directo pero expuesto a polvo urbano, puede mantenerse
            bien con un intervalo similar o ligeramente más largo. La regla práctica: mientras
            más cerca del mar y más expuesto al viento, más frecuente la limpieza.
          </p>

          <h2>Señales de que tus Paneles Necesitan Limpieza Ya</h2>

          <p>
            No tienes que esperar al próximo servicio programado. Estas son las señales de
            que toca actuar antes:
          </p>

          <ul>
            <li><strong>La producción bajó sin explicación.</strong> En un día soleado, tu sistema produce notablemente menos que en semanas anteriores con clima parecido.</li>
            <li><strong>Capa visible de polvo o sal.</strong> Desde el suelo se ve una película opaca o manchas blancuzcas sobre el vidrio.</li>
            <li><strong>Franja sucia en el borde inferior.</strong> Una línea de residuo acumulado en la parte baja de los paneles.</li>
            <li><strong>Moho, líquenes o manchas verdes</strong> en los marcos o esquinas.</li>
            <li><strong>Pasó un evento de polvo del Sahara</strong> o una tormenta de viento que arrastró tierra y hojas.</li>
            <li><strong>Han pasado más de 8 meses</strong> desde la última limpieza, sin importar la zona.</li>
          </ul>

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

          <h2>Mantenimiento Después de un Huracán o Tormenta Tropical</h2>

          <p>
            En Puerto Rico el mantenimiento solar no se entiende sin la temporada de
            huracanes. Después del huracán María, parte de nuestro trabajo fue precisamente
            evaluar y restaurar sistemas eléctricos y solares afectados. Por eso insistimos:
            un sistema solar que pasó un huracán necesita una inspección profesional antes de
            volver a confiar plenamente en él, aunque "se vea bien" desde el suelo.
          </p>

          <p>Una inspección post-huracán debe verificar al menos:</p>

          <ul>
            <li><strong>Herrajes y estructura de montaje</strong> — los vientos fuertes aflojan tornillería y pueden desplazar paneles milímetros que rompen el sellado.</li>
            <li><strong>Escombros entre el panel y el techo</strong> — hojas, ramas y tierra que generan sombras parciales y retienen humedad.</li>
            <li><strong>Micro-fisuras en el vidrio</strong> — impactos de escombros voladores que no se ven a simple vista pero degradan el rendimiento.</li>
            <li><strong>Conexiones eléctricas y cableado</strong> — humedad infiltrada o cables desplazados.</li>
            <li><strong>Producción por string</strong> — comparar contra la producción esperada para confirmar que todo el arreglo está aportando.</li>
          </ul>

          <p>
            Si quieres prepararte antes de que llegue la temporada, revisa nuestra guía de{' '}
            <Link href="/temporada-huracanes-2026">temporada de huracanes 2026</Link> y, si
            acabas de pasar un apagón prolongado, lee{' '}
            <Link href="/blog/que-hacer-despues-apagon-luma">qué hacer después de un apagón de LUMA</Link>.
          </p>

          <h2>El Monitoreo: tu Primera Herramienta de Diagnóstico</h2>

          <p>
            La mayoría de los sistemas solares modernos incluyen una app de monitoreo que
            muestra la producción diaria. Esa app es tu mejor aliada para el mantenimiento
            sin subir al techo. Te recomendamos revisarla con esta lógica simple:
          </p>

          <ul>
            <li>Compara días soleados entre sí, no un día nublado contra uno despejado.</li>
            <li>Una caída gradual y sostenida de producción en días buenos casi siempre es suciedad acumulada.</li>
            <li>Una caída súbita y marcada puede indicar un problema de equipo o de una conexión: ahí conviene llamar de inmediato.</li>
            <li>Anota tu producción típica por temporada para tener una referencia personal.</li>
          </ul>

          <p>
            El monitoreo te dice <em>cuándo</em> algo cambió; la inspección profesional te
            dice <em>por qué</em>. Los dos juntos son el mantenimiento completo.
          </p>

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
            de un huracán o evento climático severo. El{' '}
            <Link href="/servicios/mantenimiento-lavado">servicio de mantenimiento y lavado de Kilowatt PR</Link>{' '}
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
            específicamente para las condiciones de Puerto Rico. Nuestros técnicos y peritos
            electricistas, con más de una década de experiencia en la isla, conocen los
            desafíos de cada zona: sabemos que un sistema en Rincón necesita un protocolo
            diferente a uno en Cayey.
          </p>

          <p>
            El mantenimiento no es un gasto: es la protección de tu inversión. Un sistema
            solar de $15,000 a $35,000 merece el cuidado adecuado para producir al máximo
            durante sus 25 años de vida útil. La garantía de mano de obra de Kilowatt PR en
            la instalación de sistemas solares es de 1 año; las garantías de los equipos
            (paneles, inversor, batería) las cubre cada fabricante. Un programa de
            mantenimiento preventivo cuesta una fracción de lo que pierdes en producción
            cuando los paneles están sucios.
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
              { href: '/servicios/mantenimiento-lavado', label: 'Servicio de Mantenimiento y Lavado' },
              { href: '/blog/que-hacer-despues-apagon-luma', label: 'Qué Hacer Después de un Apagón de LUMA' },
              { href: '/temporada-huracanes-2026', label: 'Temporada de Huracanes 2026' },
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
