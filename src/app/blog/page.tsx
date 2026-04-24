import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, User, ArrowRight } from 'lucide-react'
import { buildAlternates } from '@/lib/alternates'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'

export const metadata: Metadata = {
  title: 'Blog Solar — Guías y Consejos sobre Energía Solar en Puerto Rico',
  description:
    'Artículos, guías y consejos sobre energía solar en Puerto Rico. Costos, LUMA Energy, baterías, mantenimiento, huracanes y más. Por el equipo de Kilowatt PR.',
  ...buildAlternates({ es: '/blog', en: '/en/blog' }),
}

const posts = [
  {
    slug: 'energia-solar-comercial-roi-negocios',
    title: 'Energía Solar Comercial en Puerto Rico: ROI para Negocios Locales',
    excerpt: 'Sistemas de 15-50kW+ para restaurantes, almacenes y comercios. Casos de estudio con retorno de inversión real basado en tarifas de LUMA.',
    date: '2026-03-25',
    category: 'Solar Comercial',
  },
  {
    slug: 'preguntas-antes-instalar-solar',
    title: '10 Preguntas que Debes Hacer Antes de Instalar Solar en PR',
    excerpt: 'Las 10 preguntas críticas que debes hacerle a cualquier instalador solar — y las respuestas que deberían darte. Con señales de alerta.',
    date: '2026-03-24',
    category: 'Guía del Consumidor',
  },
  {
    slug: 'errores-comunes-contratar-instalador-solar',
    title: 'Errores Comunes al Contratar un Instalador Solar en Puerto Rico',
    excerpt: '6 errores costosos que cometen los dueños de hogar al elegir instalador solar — y cómo evitarlos. Desde licencias hasta diseño para huracanes.',
    date: '2026-03-22',
    category: 'Guía del Consumidor',
  },
  {
    slug: 'energia-solar-bateria-esencial-puerto-rico',
    title: 'Energía Solar con Batería: Por Qué es Esencial en Puerto Rico',
    excerpt: 'Sin batería, tu sistema solar se apaga cuando LUMA se va. Aprende por qué la batería no es opcional en Puerto Rico y cómo dimensionar la tuya.',
    date: '2026-03-20',
    category: 'Baterías y Almacenamiento',
  },
  {
    slug: 'que-hacer-despues-apagon-luma',
    title: 'Qué Hacer Después de un Apagón de LUMA: Guía para tu Sistema Solar',
    excerpt: 'Checklist post-apagón para dueños de sistemas solares: qué verificar, cuándo llamar, y cómo prepararte para el próximo.',
    date: '2026-03-19',
    category: 'Mantenimiento',
  },
  {
    slug: 'como-funciona-net-metering-puerto-rico',
    title: 'Cómo Funciona el Net Metering (Medición Neta) en Puerto Rico',
    excerpt: 'Explicación simple de cómo funciona el medidor bidireccional, cómo se acumulan tus créditos de energía y cómo maximizar tu ahorro con LUMA.',
    date: '2026-03-17',
    category: 'Proceso y Permisos',
  },
  {
    slug: 'mantenimiento-paneles-solares-clima-tropical',
    title: 'Mantenimiento de Paneles Solares en Clima Tropical',
    excerpt: 'Salitre, polvo del Sahara, calor extremo: el clima de Puerto Rico exige mantenimiento especializado. Guía de frecuencia y mejores prácticas.',
    date: '2026-03-15',
    category: 'Mantenimiento',
  },
  {
    slug: 'bateria-solar-vs-generador-gasolina',
    title: 'Batería Solar vs Generador de Gasolina: ¿Cuál es Mejor para PR?',
    excerpt: 'Comparación directa: costo a 10 años, mantenimiento, ruido, seguridad y disponibilidad durante huracanes. La batería solar gana en casi todo.',
    date: '2026-03-14',
    category: 'Comparación',
  },
  {
    slug: 'guia-evaluacion-techo-solar',
    title: 'Guía de Evaluación de Techo para Energía Solar en Puerto Rico',
    excerpt: '¿Tu techo está listo para solar? Orientación, material, edad, sombra y capacidad estructural — todo lo que evaluamos antes de instalar.',
    date: '2026-03-12',
    category: 'Instalación',
  },
  {
    slug: 'como-leer-factura-luma-ahorro-solar',
    title: 'Cómo Leer tu Factura de LUMA y Calcular tu Ahorro Solar',
    excerpt: 'Entiende cada línea de tu factura de LUMA Energy y calcula cuánto puedes ahorrar con energía solar basado en tu consumo real.',
    date: '2026-03-10',
    category: 'Ahorro y Facturación',
  },
  {
    slug: 'incentivos-solares-puerto-rico-2026',
    title: 'Cómo Preparar Tu Hogar para Huracanes con Energía Solar',
    excerpt: 'Protege a tu familia de los apagones durante la temporada de huracanes con un sistema solar con batería. Guía paso a paso para prepararte antes de junio.',
    date: '2026-02-28',
    category: 'Huracanes y Resiliencia',
  },
  {
    slug: 'guia-bateria-respaldo-hogar-puerto-rico',
    title: 'Guía Completa: Baterías de Respaldo para el Hogar en Puerto Rico',
    excerpt: 'Todo sobre sistemas de almacenamiento solar en Puerto Rico: tipos de baterías, capacidad recomendada, costo y cómo elegir el sistema correcto.',
    date: '2026-02-15',
    category: 'Baterías y Almacenamiento',
  },
  {
    slug: 'como-funciona-interconexion-luma-energia',
    title: 'Cómo Funciona la Interconexión con LUMA Energy en Puerto Rico',
    excerpt: 'Guía paso a paso del proceso de interconexión: desde la solicitud hasta la activación del medidor bidireccional. Tiempos, requisitos y errores comunes.',
    date: '2026-02-01',
    category: 'Proceso y Permisos',
  },
  {
    slug: 'cuanto-cuesta-energia-solar-puerto-rico-2026',
    title: '¿Cuánto Cuesta la Energía Solar en Puerto Rico en 2026?',
    excerpt: 'Guía completa de precios: sistemas residenciales, comerciales, con y sin batería. Todo lo que necesitas saber antes de cotizar tu sistema solar.',
    date: '2026-01-15',
    category: 'Costos y Financiamiento',
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
            Guías, consejos y todo lo que necesitas saber sobre energía solar en Puerto Rico.
            Por el Ing. Julio A. Santiago Pérez, PE — ingeniero electricista con más de 50 años de experiencia.
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
    </>
  )
}
