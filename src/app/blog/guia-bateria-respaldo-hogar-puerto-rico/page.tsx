import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, User } from 'lucide-react'
import { ArticleSchema, FAQSchema } from '@/components/SchemaOrg'
import FAQSection from '@/components/FAQSection'

export const metadata: Metadata = {
  title: 'Guía Completa: Baterías de Respaldo Solar en Puerto Rico',
  description:
    'Todo sobre sistemas de almacenamiento solar en Puerto Rico: tipos, capacidad, costo y cómo elegir. Diseñado para hogares que sufren apagones de LUMA Energy.',
  alternates: { canonical: 'https://www.kilowattpr.com/blog/guia-bateria-respaldo-hogar-puerto-rico' },
}

const faqs = [
  {
    question: '¿Cuánta capacidad de batería necesita un hogar promedio en Puerto Rico?',
    answer: 'Un hogar promedio en Puerto Rico que consume entre 500 y 800 kWh al mes necesita entre 10 kWh y 20 kWh de capacidad de batería para cubrir las cargas esenciales durante un apagón de 8 a 12 horas. Para independencia de 24 horas o para cargas adicionales como aire acondicionado, se recomienda 20 kWh o más. El dimensionamiento exacto depende de qué electrodomésticos quieres cubrir durante el apagón.',
  },
  {
    question: '¿Cuánto cuesta una batería solar en Puerto Rico?',
    answer: 'El costo de una batería solar en Puerto Rico varía entre $8,000 y $15,000 para una unidad estándar de 10–13.5 kWh instalada. Las baterías de mayor capacidad o múltiples unidades tienen un costo proporcional. Opciones de financiamiento están disponibles para reducir el desembolso inicial.',
  },
  {
    question: '¿Qué marcas de baterías son las mejores para Puerto Rico?',
    answer: 'Para las condiciones de Puerto Rico, recomendamos baterías de litio de marcas reconocidas con garantías sólidas y soporte disponible en la isla. Las condiciones de calor y humedad tropical requieren baterías diseñadas para operar en rangos de temperatura amplios. En Kilowatt PR seleccionamos los equipos según las condiciones específicas de tu instalación y te presentamos las opciones con su análisis costo-beneficio.',
  },
  {
    question: '¿Las baterías solares requieren mantenimiento especial en el clima tropical?',
    answer: 'Las baterías de litio modernas son de bajo mantenimiento, pero el calor tropical de Puerto Rico puede afectar su longevidad si no se instalan con ventilación adecuada. Recomendamos instalar las baterías en espacios interiores protegidos del calor directo y la humedad extrema. Incluimos una revisión del sistema de baterías en nuestro servicio de mantenimiento semestral.',
  },
]

export default function GuiaBateriaPage() {
  const publishDate = '2026-02-15'
  const modifyDate = '2026-02-15'
  const url = 'https://www.kilowattpr.com/blog/guia-bateria-respaldo-hogar-puerto-rico'

  return (
    <>
      <ArticleSchema
        title="Guía Completa: Baterías de Respaldo Solar en Puerto Rico"
        description="Todo sobre sistemas de almacenamiento solar en Puerto Rico. Tipos de baterías, capacidad, costo y cómo elegir."
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
              <time dateTime={publishDate}>15 de febrero de 2026</time>
            </div>
            <div className="flex items-center gap-1">
              <User size={14} />
              <Link href="/equipo/julio-santiago-perez" className="hover:text-solar-yellow transition-colors">Ing. Julio A. Santiago Pérez, PE</Link>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">
            Guía Completa: Baterías de Respaldo Solar para el Hogar en Puerto Rico
          </h1>

          <p className="article-intro text-xl text-gray-600 leading-relaxed">
            Los apagones de LUMA Energy son una realidad cotidiana en Puerto Rico. Para muchas
            familias, la pregunta no es si habrá un apagón, sino cuándo. Los sistemas solares
            con almacenamiento de batería ofrecen la respuesta definitiva: independencia
            energética real durante horas o días sin electricidad de la red.
          </p>
        </div>

        <div className="prose prose-lg max-w-none text-gray-600">
          <h2>¿Por Qué las Baterías Son Especialmente Importantes en Puerto Rico?</h2>
          <p>
            Puerto Rico tiene uno de los registros de confiabilidad eléctrica más bajos de
            los Estados Unidos. Según datos de la{' '}
            <a href="https://www.eia.gov/electricity/monthly/epm_table_5_6_a.html" target="_blank" rel="noopener noreferrer">
              Administración de Información Energética (EIA)
            </a>, los clientes residenciales de LUMA Energy experimentan un promedio de más
            de 12 horas de apagón al año, con picos significativos después de tormentas
            tropicales y huracanes. Según el{' '}
            <a href="https://www.energy.gov/ceser/puerto-rico-grid-recovery-and-modernization" target="_blank" rel="noopener noreferrer">
              Departamento de Energía de EE.UU.
            </a>, durante el huracán María en 2017, muchas comunidades estuvieron sin
            electricidad por semanas o meses.
          </p>
          <p>
            A diferencia de los generadores de gasolina, que requieren combustible, producen
            ruido y emiten gases, las baterías solares funcionan silenciosamente, de forma
            automática y sin necesidad de combustible. El sistema detecta el apagón en
            milisegundos y cambia a energía de batería antes de que notes la diferencia.
          </p>

          <h2>Tipos de Baterías para Energía Solar</h2>

          <h3>Baterías de Litio-Ion (Recomendadas)</h3>
          <p>
            Las baterías de litio-ion son hoy el estándar de la industria para almacenamiento
            solar residencial. Según el{' '}
            <a href="https://www.nrel.gov/docs/fy23osti/85332.pdf" target="_blank" rel="noopener noreferrer">
              NREL (National Renewable Energy Laboratory)
            </a>, ofrecen alta densidad de energía, ciclos de vida de 4,000 a 10,000 ciclos,
            y requieren poco o ningún mantenimiento. Son más costosas que las alternativas de
            plomo-ácido, pero su vida útil es significativamente mayor y toleran mejor el calor
            tropical de Puerto Rico.
          </p>

          <h3>Baterías de Litio Ferrofosfato (LFP)</h3>
          <p>
            Una variante del litio-ion, las baterías LFP ofrecen mayor seguridad térmica y
            una vida útil aún más larga (6,000–10,000 ciclos). Son ligeramente más grandes
            y pesadas, pero son especialmente adecuadas para instalaciones en climas cálidos
            como Puerto Rico, donde la temperatura ambiente puede afectar la degradación
            de las baterías.
          </p>

          <h2>¿Cómo Dimensionar tu Sistema de Batería?</h2>
          <p>
            El tamaño correcto de batería depende de dos factores: cuántas horas de respaldo
            necesitas y qué cargas quieres cubrir durante el apagón. Te mostramos un ejemplo
            de cálculo para un hogar típico en Puerto Rico:
          </p>

          <div className="not-prose bg-gray-50 rounded-xl p-6 my-6">
            <h3 className="font-bold text-navy-dark mb-4">Ejemplo: Cargas Esenciales de un Hogar Típico</h3>
            <div className="space-y-2 text-sm">
              {[
                { item: 'Refrigerador (200W × 12h)', consumo: '2.4 kWh' },
                { item: 'Iluminación LED (100W × 8h)', consumo: '0.8 kWh' },
                { item: 'Ventiladores × 2 (150W × 8h)', consumo: '1.2 kWh' },
                { item: 'TV y cargadores (150W × 4h)', consumo: '0.6 kWh' },
                { item: 'Router de internet (20W × 24h)', consumo: '0.5 kWh' },
              ].map((row) => (
                <div key={row.item} className="flex justify-between py-2 border-b border-gray-200 last:border-0">
                  <span className="text-gray-700">{row.item}</span>
                  <span className="font-semibold text-navy-dark">{row.consumo}</span>
                </div>
              ))}
              <div className="flex justify-between py-2 font-bold text-solar-yellow">
                <span>Total estimado (12 horas)</span>
                <span>~5.5 kWh</span>
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-2">
              Para este hogar, una batería de 10–13.5 kWh proporciona aproximadamente 24 horas de respaldo en cargas esenciales.
            </p>
          </div>

          <h2>Instalación Correcta en el Clima de Puerto Rico</h2>
          <p>
            Según las{' '}
            <a href="https://www.energy.gov/eere/solar/solar-energy-storage-basics" target="_blank" rel="noopener noreferrer">
              guías del Departamento de Energía sobre almacenamiento solar
            </a>, las baterías de litio operan mejor en rangos de temperatura de 15°C a 35°C.
            En Puerto Rico, las temperaturas en interiores no climatizados pueden superar
            los 40°C en verano, lo que puede acelerar la degradación de las baterías y
            reducir su vida útil. Por esta razón, Kilowatt PR instala las baterías en
            espacios interiores con ventilación adecuada, protegidos del sol directo y
            lejos de fuentes de calor.
          </p>

          <h2>Sistema Solar + Batería vs. Generador de Gasolina</h2>
          <p>
            Muchos propietarios en Puerto Rico comparan las baterías solares con los
            generadores de gasolina. El{' '}
            <a href="https://www.nrel.gov/solar/market-research-analysis.html" target="_blank" rel="noopener noreferrer">
              NREL
            </a>{' '}
            ha documentado la caída de costos de almacenamiento que hace esta comparación
            cada vez más favorable. La comparación más honesta muestra que:
          </p>
          <ul>
            <li>Las baterías funcionan automáticamente, sin intervención humana</li>
            <li>No requieren combustible ni almacenamiento de gasolina</li>
            <li>No producen ruido ni emisiones de carbono</li>
            <li>Se recargan gratis con tus propios paneles solares</li>
            <li>Tienen menor costo de mantenimiento a largo plazo</li>
            <li>El costo inicial es mayor, pero el costo total de 10 años es generalmente menor</li>
          </ul>

          <h2>Próximos Pasos: Cotiza tu Sistema con Batería</h2>
          <p>
            Cada hogar en Puerto Rico tiene necesidades diferentes. La cantidad de paneles
            necesarios, el tamaño de la batería y la configuración del sistema dependen de
            tu consumo, el tamaño de tu techo y las cargas que quieras respaldar durante
            los apagones. Nuestros peritos electricistas e ingenieros eléctricos con más de 3 décadas de experiencia
            en Puerto Rico pueden diseñar el sistema exacto que necesitas durante una consulta
            gratis y sin compromiso.
          </p>
        </div>

        <div className="mt-12 bg-solar-yellow/10 border border-solar-yellow/30 rounded-xl p-6 text-center">
          <p className="text-navy-dark font-bold text-lg mb-4">
            Diseña tu sistema con batería. Consulta gratis, sin compromiso.
          </p>
          <a
            href="https://wa.me/17874312275"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Cotizar Sistema con Batería
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
              { href: '/blog/como-funciona-interconexion-luma-energia', label: 'Interconexión con LUMA' },
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
