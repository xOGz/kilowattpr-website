import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, User } from 'lucide-react'
import { ArticleSchema, FAQSchema } from '@/components/SchemaOrg'
import FAQSection from '@/components/FAQSection'

export const metadata: Metadata = {
  title: 'Energía Solar con Batería: Por Qué es Esencial en Puerto Rico',
  description:
    'Descubre por qué un sistema solar sin batería no es suficiente en Puerto Rico. Guía de baterías de respaldo, dimensionamiento, comparación con generador y costos reales.',
  alternates: { canonical: 'https://www.kilowattpr.com/blog/energia-solar-bateria-esencial-puerto-rico' },
}

const faqs = [
  {
    question: '¿Funciona un sistema solar sin batería durante un apagón de LUMA?',
    answer: 'No. Un sistema solar sin batería conectado a la red se apaga automáticamente durante un apagón de LUMA Energy por razones de seguridad (anti-islanding). Esto significa que aunque tengas paneles en el techo produciendo energía, no puedes usarla durante un apagón si no tienes batería. La batería es lo que permite que tu sistema solar funcione independientemente de la red durante los apagones frecuentes en Puerto Rico.',
  },
  {
    question: '¿Cuánto dura la batería solar durante un apagón?',
    answer: 'La duración depende del tamaño de la batería y tu consumo durante el apagón. Una batería de 10 kWh puede alimentar cargas esenciales (nevera, luces, abanicos, router WiFi, cargadores) por 8 a 12 horas. Con un sistema de 15-20 kWh, puedes mantener casi todo el hogar funcionando. Si tus paneles solares están produciendo durante el día, la batería se recarga y puedes mantener el suministro indefinidamente, incluso durante apagones que duran días o semanas.',
  },
  {
    question: '¿Qué tamaño de batería necesito para mi casa en Puerto Rico?',
    answer: 'El tamaño ideal depende de cuánta energía quieres respaldar durante un apagón. Para cargas esenciales (nevera, luces, abanicos, comunicaciones), una batería de 10 kWh es suficiente. Para respaldar el aire acondicionado de un dormitorio adicional, necesitas 15 kWh o más. Para cobertura total del hogar incluyendo múltiples aires acondicionados, recomendamos 20 kWh o más. En Kilowatt PR diseñamos el sistema basado en tus prioridades específicas.',
  },
  {
    question: '¿Es mejor un generador o una batería solar para los apagones en Puerto Rico?',
    answer: 'A largo plazo, la batería solar es significativamente mejor que un generador. Un generador requiere combustible constante ($50-100 por día de operación), mantenimiento frecuente, produce ruido y emisiones, y puede fallar cuando más lo necesitas si no tiene combustible. La batería solar se recarga gratis con el sol, no tiene partes móviles, opera en silencio, y no depende de la disponibilidad de combustible. En 5 a 7 años, el ahorro en combustible y mantenimiento compensa la diferencia de costo inicial.',
  },
]

export default function BateriaEsencialPage() {
  const publishDate = '2026-03-20'
  const modifyDate = '2026-03-20'
  const url = 'https://www.kilowattpr.com/blog/energia-solar-bateria-esencial-puerto-rico'

  return (
    <>
      <ArticleSchema
        title="Energía Solar con Batería: Por Qué es Esencial en Puerto Rico"
        description="Descubre por qué un sistema solar sin batería no es suficiente en Puerto Rico. Guía completa de baterías de respaldo."
        datePublished={publishDate}
        dateModified={modifyDate}
        url={url}
      />
      <FAQSchema faqs={faqs} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <div className="flex items-center gap-3 text-sm text-gray-400 mb-4">
            <span className="bg-solar-yellow/10 text-solar-yellow font-medium px-3 py-1 rounded-full">
              Baterías y Almacenamiento
            </span>
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <time dateTime={publishDate}>20 de marzo de 2026</time>
            </div>
            <div className="flex items-center gap-1">
              <User size={14} />
              <Link href="/equipo/julio-santiago-perez" className="hover:text-solar-yellow transition-colors">Ing. Julio A. Santiago Pérez, PE</Link>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">
            Energía Solar con Batería: Por Qué es Esencial en Puerto Rico
          </h1>

          <p className="article-intro text-xl text-gray-600 leading-relaxed">
            En muchos lugares del mundo, la batería de respaldo es un accesorio opcional para
            un sistema solar. En Puerto Rico no lo es. Con los apagones frecuentes de LUMA
            Energy, una temporada de huracanes cada vez más intensa, y una red eléctrica que
            lleva décadas en deterioro, la batería no es un lujo: es la diferencia entre
            tener energía o quedarte a oscuras.
          </p>
        </div>

        <div className="prose prose-lg max-w-none text-gray-600">
          <h2>La Realidad de la Red Eléctrica en Puerto Rico</h2>

          <p>
            Después del Huracán María en 2017, Puerto Rico sufrió el apagón más largo en la
            historia de Estados Unidos: meses sin electricidad para millones de personas.
            Desde entonces, la situación no ha mejorado sustancialmente. LUMA Energy, que
            asumió la operación de la red en 2021, enfrenta una infraestructura envejecida
            que sigue produciendo apagones frecuentes.
          </p>

          <p>
            Los puertorriqueños experimentan apagones que van desde minutos hasta días,
            múltiples veces al mes. No son solo los huracanes: una lluvia fuerte, un
            transformador viejo, o una sobrecarga en la red pueden dejarte sin luz. Cada
            apagón significa comida echada a perder en la nevera, trabajo perdido si trabajas
            desde casa, noches de calor insoportable sin aire acondicionado, y la frustración
            de depender de un sistema que falla constantemente.
          </p>

          <h2>Solar Sin Batería: La Trampa que Muchos No Conocen</h2>

          <p>
            Aquí está el dato que sorprende a muchos propietarios: <strong>un sistema solar
            conectado a la red SIN batería se apaga durante un apagón de LUMA</strong>. Sí,
            leíste bien. Aunque tengas paneles solares en tu techo produciendo energía en
            pleno mediodía, si LUMA se va, tu sistema se apaga.
          </p>

          <p>
            ¿Por qué? Por una protección de seguridad llamada &quot;anti-islanding&quot;. Cuando la
            red de LUMA se cae, tu inversor solar se apaga automáticamente para evitar enviar
            electricidad a la red y poner en peligro a los técnicos de LUMA que trabajan en
            las líneas. Esta protección es obligatoria por código eléctrico y no se puede
            desactivar.
          </p>

          <p>
            Esto significa que sin batería, tu inversión solar de $15,000 a $30,000 no te
            protege durante los apagones, que es precisamente cuando más necesitas la energía.
            En un lugar como Puerto Rico, esto hace que un sistema sin batería sea incompleto.
          </p>

          <h2>Cómo Funciona el Modo Isla (Off-Grid) con Batería</h2>

          <p>
            Cuando tu sistema solar incluye una batería de respaldo, todo cambia. Al detectar
            un apagón de LUMA, el inversor/batería se desconecta automáticamente de la red en
            milisegundos y activa el &quot;modo isla&quot; (island mode). En este modo:
          </p>

          <ul>
            <li>Tu hogar se aísla de la red de LUMA de forma segura y automática</li>
            <li>La batería suministra energía inmediatamente a tus cargas esenciales</li>
            <li>Los paneles solares continúan produciendo y recargando la batería durante el día</li>
            <li>No necesitas hacer nada: la transición es automática e imperceptible</li>
          </ul>

          <p>
            En la práctica, cuando se va la luz en tu vecindario, tu casa sigue con
            electricidad. La nevera sigue funcionando, las luces no se apagan, el WiFi
            continúa activo, y puedes seguir trabajando o descansando con normalidad. Para
            tus vecinos sin batería, es un apagón. Para ti, es un día normal.
          </p>

          <h2>Dimensionamiento: ¿Qué Tamaño de Batería Necesitas?</h2>

          <p>
            El tamaño de batería adecuado depende de cuánta energía quieres respaldar durante
            un apagón y por cuánto tiempo. Aquí una guía según el tamaño y necesidades de
            tu hogar:
          </p>

          <div className="not-prose bg-gray-50 rounded-xl p-6 my-6">
            <h3 className="font-bold text-navy-dark mb-4">Guía de Dimensionamiento de Batería</h3>
            <div className="space-y-3">
              {[
                { perfil: 'Esencial (nevera, luces, abanicos, WiFi)', bateria: '10 kWh', duracion: '8–12 horas sin sol' },
                { perfil: 'Confort (esencial + 1 A/C + lavadora)', bateria: '15 kWh', duracion: '6–10 horas sin sol' },
                { perfil: 'Cobertura amplia (2+ A/C, cocina eléctrica)', bateria: '20 kWh', duracion: '5–8 horas sin sol' },
                { perfil: 'Hogar grande o independencia total', bateria: '30+ kWh', duracion: '8–12 horas sin sol' },
              ].map((row) => (
                <div key={row.perfil} className="grid grid-cols-3 gap-4 py-3 border-b border-gray-200 last:border-0">
                  <span className="text-sm text-gray-700">{row.perfil}</span>
                  <span className="font-bold text-solar-yellow text-center">{row.bateria}</span>
                  <span className="text-sm text-gray-700 text-right">{row.duracion}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-3">
              * Las horas asumen uso nocturno sin producción solar. Durante el día, los paneles recargan la batería y extienden la autonomía indefinidamente.
            </p>
          </div>

          <p>
            Un punto clave: durante el día, mientras hay sol, tus paneles solares recargan
            la batería al mismo tiempo que alimentan tu hogar. Esto significa que durante
            apagones prolongados (días o semanas), un sistema solar con batería puede mantener
            tu hogar energizado indefinidamente, siempre que haya sol durante el día. Esto
            es exactamente lo que sucedió con nuestros clientes durante huracanes recientes:
            mientras sus vecinos esperaban que regresara LUMA, ellos tenían electricidad.
          </p>

          <h2>Generador vs. Solar con Batería: Comparación a Largo Plazo</h2>

          <p>
            Muchos puertorriqueños compraron generadores después de María, y es comprensible:
            necesitaban una solución inmediata. Pero como inversión a largo plazo, el generador
            pierde frente a la batería solar en prácticamente todos los aspectos:
          </p>

          <div className="not-prose bg-gray-50 rounded-xl p-6 my-6">
            <h3 className="font-bold text-navy-dark mb-4">Generador vs. Batería Solar: Comparación a 10 Años</h3>
            <div className="space-y-3">
              {[
                { aspecto: 'Costo inicial', generador: '$1,500–$5,000', bateria: '$10,000–$15,000' },
                { aspecto: 'Combustible (10 años)', generador: '$15,000–$30,000', bateria: '$0 (sol gratis)' },
                { aspecto: 'Mantenimiento (10 años)', generador: '$3,000–$5,000', bateria: 'Mínimo ($500)' },
                { aspecto: 'Ruido', generador: '65–80 dB (alto)', bateria: 'Silencioso' },
                { aspecto: 'Emisiones', generador: 'CO, CO2, humo', bateria: 'Cero emisiones' },
                { aspecto: 'Vida útil', generador: '5–10 años', bateria: '10–15 años' },
                { aspecto: 'Disponibilidad combustible en huracán', generador: 'Escasa/nula', bateria: 'Sol disponible' },
                { aspecto: 'Costo total a 10 años', generador: '$20,000–$40,000', bateria: '$10,500–$15,500' },
              ].map((row) => (
                <div key={row.aspecto} className="grid grid-cols-3 gap-4 py-3 border-b border-gray-200 last:border-0">
                  <span className="text-sm text-gray-700 font-medium">{row.aspecto}</span>
                  <span className="text-sm text-gray-500 text-center">{row.generador}</span>
                  <span className="text-sm font-bold text-solar-yellow text-right">{row.bateria}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-3">
              * Costo de combustible estimado basado en uso promedio durante apagones frecuentes en Puerto Rico.
            </p>
          </div>

          <p>
            El punto más crítico: durante un huracán, cuando más necesitas energía, el
            combustible para el generador puede ser imposible de conseguir. Las gasolineras
            se quedan sin inventario, las carreteras están bloqueadas, y las filas duran
            horas. Tu batería solar, en cambio, se recarga con el sol que sale después de
            la tormenta. No depende de cadenas de suministro ni de logística de combustible.
          </p>

          <h2>¿Qué Pasa Durante un Huracán?</h2>

          <p>
            Antes del huracán, el sistema carga la batería al 100% (esto se puede programar
            automáticamente cuando hay aviso de tormenta). Durante el huracán, la batería
            alimenta tus cargas esenciales. Después del huracán, cuando sale el sol, los
            paneles comienzan a recargar la batería y tu hogar tiene energía mientras el
            resto de la isla puede estar semanas sin servicio.
          </p>

          <p>
            Los paneles solares modernos que instalamos en Kilowatt PR están certificados
            para resistir vientos de hasta 160 mph, cumpliendo con los códigos de construcción
            de Puerto Rico y los estándares del{' '}
            <a href="https://www.ul.com" target="_blank" rel="noopener noreferrer">
              Underwriters Laboratories (UL)
            </a>. La estructura de montaje se asegura con tornillería de grado marino y
            anclajes dimensionados por nuestros ingenieros para las condiciones de viento
            específicas de tu ubicación.
          </p>

          <h2>La Decisión Inteligente: Solar + Batería desde el Inicio</h2>

          <p>
            Algunos propietarios consideran instalar solo paneles ahora y añadir la batería
            después. Aunque es posible, no es lo más eficiente. Instalar todo junto reduce
            costos de instalación (los técnicos solo van una vez), asegura compatibilidad
            perfecta entre componentes, y te protege desde el día uno. En Kilowatt PR,
            nuestros técnicos con más de una década de experiencia en Puerto Rico diseñan
            sistemas integrados que maximizan tanto el ahorro como la protección.
          </p>

          <p>
            En un lugar donde la red eléctrica es impredecible, la temporada de huracanes
            dura 6 meses al año, y cada apagón te cuesta dinero en comida, productividad
            y comodidad, la batería no es un accesorio. Es el corazón de tu independencia
            energética.
          </p>
        </div>

        <div className="mt-12 bg-solar-yellow/10 border border-solar-yellow/30 rounded-xl p-6 text-center">
          <p className="text-navy-dark font-bold text-lg mb-4">
            No esperes al próximo apagón. Protege tu hogar hoy.
          </p>
          <a
            href="https://wa.me/17874312275?text=Hola%2C%20me%20interesa%20un%20sistema%20solar%20con%20bater%C3%ADa%20de%20respaldo."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Consulta Gratis — Sistema Solar con Batería
          </a>
        </div>
      </article>

      <FAQSection faqs={faqs} title="Preguntas sobre Baterías Solares en Puerto Rico" />

      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-bold text-navy-dark mb-4">Artículos Relacionados</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/blog/cuanto-cuesta-energia-solar-puerto-rico-2026', label: 'Costos de Energía Solar 2026' },
              { href: '/blog/incentivos-solares-puerto-rico-2026', label: 'Preparación para Huracanes' },
              { href: '/blog/como-funciona-interconexion-luma-energia', label: 'Interconexión con LUMA' },
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
