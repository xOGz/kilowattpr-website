import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, User, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog Solar — Guías y Consejos sobre Energía Solar en Puerto Rico',
  description:
    'Artículos, guías y consejos sobre energía solar en Puerto Rico. Costos, incentivos, LUMA Energy, baterías y más. Por el equipo de Kilowatt PR.',
  alternates: { canonical: 'https://www.kilowattpr.com/blog' },
}

const posts = [
  {
    slug: 'cuanto-cuesta-energia-solar-puerto-rico-2026',
    title: '¿Cuánto Cuesta la Energía Solar en Puerto Rico en 2026?',
    excerpt: 'Guía completa de precios: sistemas residenciales, comerciales, con y sin batería. Todo lo que necesitas saber antes de cotizar tu sistema solar.',
    date: '2026-01-15',
    category: 'Costos y Financiamiento',
  },
  {
    slug: 'como-funciona-interconexion-luma-energia',
    title: 'Cómo Funciona la Interconexión con LUMA Energy en Puerto Rico',
    excerpt: 'Guía paso a paso del proceso de interconexión: desde la solicitud hasta la activación del medidor bidireccional. Tiempos, requisitos y errores comunes.',
    date: '2026-02-01',
    category: 'Proceso y Permisos',
  },
  {
    slug: 'guia-bateria-respaldo-hogar-puerto-rico',
    title: 'Guía Completa: Baterías de Respaldo para el Hogar en Puerto Rico',
    excerpt: 'Todo sobre sistemas de almacenamiento solar en Puerto Rico: tipos de baterías, capacidad recomendada, costo y cómo elegir el sistema correcto.',
    date: '2026-02-15',
    category: 'Baterías y Almacenamiento',
  },
  {
    slug: 'incentivos-solares-puerto-rico-2026',
    title: 'Incentivos y Créditos para Energía Solar en Puerto Rico 2026',
    excerpt: 'Crédito federal del 30%, Ley 17 de Puerto Rico, financiamiento disponible. Maximiza los incentivos disponibles para tu instalación solar.',
    date: '2026-03-01',
    category: 'Incentivos y Ahorro',
  },
]

export default function BlogPage() {
  return (
    <>
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
