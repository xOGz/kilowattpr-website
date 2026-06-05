import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, User, ArrowRight, MessageCircle, Phone } from 'lucide-react'
import { buildAlternates } from '@/lib/alternates'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'

export const metadata: Metadata = {
  title: 'Blog Solar — Guías y Consejos sobre Energía Solar en Puerto Rico',
  description:
    'Artículos, guías y consejos sobre energía solar en Puerto Rico. Costos, LUMA Energy, baterías, mantenimiento, huracanes y más. Contenido del equipo de Kilowatt PR.',
  ...buildAlternates({ es: '/blog', en: '/en/blog' }),
}

const posts = [
  {
    slug: 'energia-solar-comercial-roi-negocios',
    title: 'Energía Solar Comercial en Puerto Rico: ROI para Negocios Locales',
    excerpt: 'Tres negocios del oeste que ya instalaron — qué pagaban a LUMA, qué pagan ahora, y en cuántos años se pagó el sistema. Sistemas de 15-50kW para restaurantes, almacenes y comercios.',
    date: '2026-05-20',
    category: 'Solar Comercial',
  },
  {
    slug: 'preguntas-antes-instalar-solar',
    title: '10 Preguntas que Debes Hacer Antes de Instalar Solar en PR',
    excerpt: 'Antes de firmar con cualquier instalador, hay 10 cosas que tienes que preguntar. Aquí están — con las respuestas que delatan a un buen contratista de uno que te va a dejar tirado.',
    date: '2026-05-12',
    category: 'Guía del Consumidor',
  },
  {
    slug: 'errores-comunes-contratar-instalador-solar',
    title: 'Errores Comunes al Contratar un Instalador Solar en Puerto Rico',
    excerpt: 'Lo que ya vimos pasar más de una vez: las movidas que te salen caras al contratar instalador en PR. Desde verificar licencias hasta exigir diseño para vientos huracanados.',
    date: '2026-05-03',
    category: 'Guía del Consumidor',
  },
  {
    slug: 'mejor-instalador-solar-puerto-rico-2026',
    title: '¿Cómo Elegir el Mejor Instalador Solar en Puerto Rico? Guía 2026',
    excerpt: 'Con Sunnova y Freedom Forever quebradas, escoger instalador en PR ya no se trata solo de precio. Qué verificar, qué exigir por escrito, y por qué local-establecido pesa más que nunca.',
    date: '2026-04-22',
    category: 'Guía del Consumidor',
  },
  {
    slug: 'que-hacer-si-tu-instalador-solar-quebro',
    title: 'Mi Instalador Solar Quebró (Sunnova, Freedom Forever): Qué Hacer',
    excerpt: 'Si Sunnova o Freedom Forever te instaló el sistema y ahora no contesta, no estás solo. El hardware sigue siendo tuyo, las garantías de fabricante también. Paso a paso para retomar control.',
    date: '2026-04-14',
    category: 'Guía del Consumidor',
  },
  {
    slug: 'energia-solar-bateria-esencial-puerto-rico',
    title: 'Energía Solar con Batería: Por Qué es Esencial en Puerto Rico',
    excerpt: 'Si tu sistema solar no tiene batería, el día que se va la luz tú te quedas sin luz también — aunque tengas paneles en el techo. Aquí te explico por qué pasa y cómo dimensionar la batería para tu casa.',
    date: '2026-04-05',
    category: 'Baterías y Almacenamiento',
  },
  {
    slug: 'que-hacer-despues-apagon-luma',
    title: 'Qué Hacer Después de un Apagón de LUMA: Guía para tu Sistema Solar',
    excerpt: 'Volvió la luz pero algo no se siente igual. Pasos para verificar tu sistema después de un apagón largo, qué señales no ignorar, y cuándo llamarnos para revisar.',
    date: '2026-03-28',
    category: 'Mantenimiento',
  },
  {
    slug: 'como-funciona-net-metering-puerto-rico',
    title: 'Cómo Funciona el Net Metering (Medición Neta) en Puerto Rico',
    excerpt: 'Cómo LUMA cuenta lo que tu sistema produce versus lo que consumes, por qué a veces tu crédito "desaparece" del mes, y cómo dimensionar el sistema para sacarle el máximo a la medición neta.',
    date: '2026-03-21',
    category: 'Proceso y Permisos',
  },
  {
    slug: 'mantenimiento-paneles-solares-clima-tropical',
    title: 'Mantenimiento de Paneles Solares en Clima Tropical',
    excerpt: 'Salitre en la costa, polvo del Sahara cada verano, calor que no para — los paneles en PR no se cuidan solos. Cada cuánto hacer limpieza, qué inspeccionar, y qué pasa si no lo haces.',
    date: '2026-03-12',
    category: 'Mantenimiento',
  },
  {
    slug: 'bateria-solar-vs-generador-gasolina',
    title: 'Batería Solar vs Generador de Gasolina: ¿Cuál es Mejor para PR?',
    excerpt: 'Después de María todo el mundo compró planta de gasolina. Ahora con batería solar disponible, ¿sigue valiendo la pena? Costo a 10 años, ruido, seguridad y qué pasa cuando no hay gasolina en la isla.',
    date: '2026-03-04',
    category: 'Comparación',
  },
  {
    slug: 'guia-evaluacion-techo-solar',
    title: 'Guía de Evaluación de Techo para Energía Solar',
    excerpt: 'No todo techo está listo para solar. Orientación, material (hormigón vs zinc vs tablilla), edad, sombra y capacidad estructural — lo que evaluamos en cada visita antes de cotizar.',
    date: '2026-02-24',
    category: 'Instalación',
  },
  {
    slug: 'como-leer-factura-luma-ahorro-solar',
    title: 'Cómo Leer tu Factura de LUMA y Calcular tu Ahorro Solar',
    excerpt: 'La factura de LUMA tiene cargos que la mayoría de la gente no entiende. Te enseñamos a leer cada línea y a sacar el cálculo real de cuánto bajaría tu factura con solar.',
    date: '2026-02-16',
    category: 'Ahorro y Facturación',
  },
  {
    slug: 'preparar-hogar-huracanes-solar',
    title: 'Cómo Preparar Tu Hogar para Huracanes con Energía Solar',
    excerpt: 'La temporada arranca el 1 de junio. Si vives en PR sabes lo que viene. Cómo dejar tu sistema solar y batería listos para aguantar un huracán, y qué hacer si todavía no tienes batería.',
    date: '2026-02-05',
    category: 'Huracanes y Resiliencia',
  },
  {
    slug: 'paneles-solares-condominio-puerto-rico',
    title: 'Paneles Solares en Condominios de Puerto Rico — Guía Completa 2026',
    excerpt: 'En condominio la cosa es distinta: techo común, junta de condóminos, reglamento, y la pregunta de quién paga qué. Cómo se hace solar en condominio sin pleitos y qué leyes de PR aplican.',
    date: '2026-01-22',
    category: 'Instalación',
  },
  {
    slug: 'guia-bateria-respaldo-hogar-puerto-rico',
    title: 'Guía Completa: Baterías de Respaldo para el Hogar en Puerto Rico',
    excerpt: 'Las baterías que instalamos en PR (EG4, Solark, Fortress, Sunbeat), capacidades reales para hogares puertorriqueños, y cómo escoger sin que te metan algo sobredimensionado.',
    date: '2026-01-10',
    category: 'Baterías y Almacenamiento',
  },
  {
    slug: 'como-funciona-interconexion-luma-energia',
    title: 'Cómo Funciona la Interconexión con LUMA Energy en Puerto Rico',
    excerpt: 'El proceso de interconexión con LUMA es donde mucho proyecto solar se atasca. Tiempos reales, los documentos que LUMA pide, y los errores que más demoran la activación del medidor bidireccional.',
    date: '2025-12-18',
    category: 'Proceso y Permisos',
  },
  {
    slug: 'cuanto-cuesta-energia-solar-puerto-rico-2026',
    title: '¿Cuánto Cuesta la Energía Solar en Puerto Rico en 2026?',
    excerpt: 'Precios reales en 2026: residencial desde $11,950, qué cambia con batería, qué pasa en comercial. Lo que cuesta el sistema y por qué los rangos varían tanto entre instaladores.',
    date: '2025-12-05',
    category: 'Costos',
  },
  {
    slug: 'cuanto-ahorro-energia-solar-puerto-rico',
    title: '¿Cuánto Puedes Ahorrar con Energía Solar en Puerto Rico?',
    excerpt: 'Las tarifas de LUMA siguen subiendo. Cálculo honesto de ahorro mensual basado en tu factura actual, tu consumo y el tamaño del sistema. Sin promesas infladas — números reales.',
    date: '2025-11-20',
    category: 'Ahorro y Facturación',
  },
  {
    slug: 'opciones-financiamiento-solar-puerto-rico',
    title: 'Opciones de Financiamiento para Paneles Solares en Puerto Rico',
    excerpt: 'Cooperativas, bancos comerciales, préstamos verdes — cómo el cliente puede financiar su sistema solar en PR. Kilowatt no financia directamente; te explicamos las opciones del mercado.',
    date: '2025-11-08',
    category: 'Financiamiento',
  },
]

export default function BlogPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Blog', path: '/blog' }]} />
      <section className="bg-navy-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Blog Solar — <span className="text-solar-yellow">Puerto Rico</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Guías y artículos sobre energía solar en Puerto Rico. Contenido del equipo de
            Kilowatt PR, con dirección técnica del Ing. Julio A. Santiago Pérez, PE (Lic. #6083)
            — ingeniero electricista con más de 30 años de experiencia en la isla.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <article key={post.slug} className="card group">
                <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                  <span className="bg-solar-yellow/10 text-solar-yellow font-medium px-2 py-1 rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Calendar size={12} />
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('es-PR', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                  </div>
                </div>
                <h2 className="font-bold text-xl text-navy-dark mb-3 group-hover:text-solar-yellow transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <User size={12} />
                    <Link href="/equipo/julio-santiago-perez" className="hover:text-solar-yellow transition-colors">Ing. Julio A. Santiago Pérez, PE</Link>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="flex items-center gap-1 text-solar-yellow text-sm font-medium hover:gap-2 transition-all"
                  >
                    Leer más <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA — after reading articles, give a clear next step */}
      <section className="py-16 bg-navy-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Listo para cotizar tu sistema solar?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            La consulta es gratis en Aguada, Aguadilla, Rincón, Moca, Añasco y Mayagüez.
            Fuera de esa zona, $150 reembolsables al firmar contrato. Diseño firmado por PE
            #6083, instalación por perito licenciado #21309.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/17874312275"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp justify-center text-base py-4 px-8 inline-flex"
            >
              <MessageCircle size={20} />
              WhatsApp 787-431-2275
            </a>
            <a
              href="tel:+17874312275"
              className="btn-secondary justify-center text-base py-4 px-8 inline-flex"
            >
              <Phone size={20} />
              Llamar
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
