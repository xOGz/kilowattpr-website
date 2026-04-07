import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, User, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Solar Blog — Guides and Tips on Solar Energy in Puerto Rico',
  description:
    'Articles, guides, and tips about solar energy in Puerto Rico. Costs, LUMA Energy, batteries, maintenance, hurricanes, and more. By the Kilowatt PR team.',
  alternates: {
    canonical: 'https://www.kilowattpr.com/en/blog',
    languages: {
      es: 'https://www.kilowattpr.com/blog',
      en: 'https://www.kilowattpr.com/en/blog',
    },
  },
}

const posts = [
  {
    slug: '/blog/energia-solar-comercial-roi-negocios',
    title: 'Commercial Solar Energy in Puerto Rico: ROI for Local Businesses',
    excerpt: '15–50kW+ systems for restaurants, warehouses, and retail stores. Case studies with real return on investment based on LUMA rates.',
    date: '2026-03-25',
    category: 'Commercial Solar',
  },
  {
    slug: '/blog/preguntas-antes-instalar-solar',
    title: '10 Questions to Ask Before Installing Solar in PR',
    excerpt: 'The 10 critical questions you should ask any solar installer — and the answers they should give you. With red flags to watch for.',
    date: '2026-03-24',
    category: 'Consumer Guide',
  },
  {
    slug: '/blog/errores-comunes-contratar-instalador-solar',
    title: 'Common Mistakes When Hiring a Solar Installer in Puerto Rico',
    excerpt: '6 costly mistakes homeowners make when choosing a solar installer — and how to avoid them. From licenses to hurricane-rated design.',
    date: '2026-03-22',
    category: 'Consumer Guide',
  },
  {
    slug: '/blog/energia-solar-bateria-esencial-puerto-rico',
    title: 'Solar Energy with Battery: Why It Is Essential in Puerto Rico',
    excerpt: 'Without a battery, your solar system shuts off when LUMA goes down. Learn why battery backup is not optional in Puerto Rico and how to size yours.',
    date: '2026-03-20',
    category: 'Batteries & Storage',
  },
  {
    slug: '/blog/que-hacer-despues-apagon-luma',
    title: 'What to Do After a LUMA Power Outage: Guide for Your Solar System',
    excerpt: 'Post-outage checklist for solar system owners: what to verify, when to call, and how to prepare for the next one.',
    date: '2026-03-19',
    category: 'Maintenance',
  },
  {
    slug: '/blog/como-funciona-net-metering-puerto-rico',
    title: 'How Net Metering Works in Puerto Rico',
    excerpt: 'Simple explanation of how the bidirectional meter works, how your energy credits accumulate, and how to maximize your savings with LUMA.',
    date: '2026-03-17',
    category: 'Process & Permits',
  },
  {
    slug: '/blog/mantenimiento-paneles-solares-clima-tropical',
    title: 'Solar Panel Maintenance in a Tropical Climate',
    excerpt: 'Salt air, Sahara dust, extreme heat: Puerto Rico\'s climate demands specialized maintenance. Frequency guide and best practices.',
    date: '2026-03-15',
    category: 'Maintenance',
  },
  {
    slug: '/blog/bateria-solar-vs-generador-gasolina',
    title: 'Solar Battery vs Gas Generator: Which Is Better for PR?',
    excerpt: 'Direct comparison: 10-year cost, maintenance, noise, safety, and availability during hurricanes. Solar battery wins in almost every category.',
    date: '2026-03-14',
    category: 'Comparison',
  },
  {
    slug: '/blog/guia-evaluacion-techo-solar',
    title: 'Roof Evaluation Guide for Solar Energy in Puerto Rico',
    excerpt: 'Is your roof ready for solar? Orientation, material, age, shade, and structural capacity — everything we evaluate before installing.',
    date: '2026-03-12',
    category: 'Installation',
  },
  {
    slug: '/blog/como-leer-factura-luma-ahorro-solar',
    title: 'How to Read Your LUMA Bill and Calculate Your Solar Savings',
    excerpt: 'Understand every line on your LUMA Energy bill and calculate how much you can save with solar energy based on your real consumption.',
    date: '2026-03-10',
    category: 'Savings & Billing',
  },
  {
    slug: '/blog/incentivos-solares-puerto-rico-2026',
    title: 'How to Prepare Your Home for Hurricanes with Solar Energy',
    excerpt: 'Protect your family from outages during hurricane season with a solar battery backup system. Step-by-step guide to prepare before June.',
    date: '2026-02-28',
    category: 'Hurricanes & Resilience',
  },
  {
    slug: '/blog/guia-bateria-respaldo-hogar-puerto-rico',
    title: 'Complete Guide: Home Battery Backup Systems in Puerto Rico',
    excerpt: 'Everything about solar storage systems in Puerto Rico: battery types, recommended capacity, cost, and how to choose the right system.',
    date: '2026-02-15',
    category: 'Batteries & Storage',
  },
  {
    slug: '/blog/como-funciona-interconexion-luma-energia',
    title: 'How LUMA Energy Interconnection Works in Puerto Rico',
    excerpt: 'Step-by-step guide to the interconnection process: from the application to the activation of the bidirectional meter. Timelines, requirements, and common mistakes.',
    date: '2026-02-01',
    category: 'Process & Permits',
  },
  {
    slug: '/en/blog/how-much-does-solar-cost-puerto-rico-2026',
    title: 'How Much Does Solar Energy Cost in Puerto Rico in 2026?',
    excerpt: 'Complete pricing guide: residential and commercial systems, with and without battery. Everything you need to know before getting a quote for your solar system.',
    date: '2026-01-15',
    category: 'Costs & Financing',
  },
]

export default function BlogPage() {
  return (
    <>
      <section className="bg-navy-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Solar Blog — <span className="text-solar-yellow">Puerto Rico</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Guides, tips, and everything you need to know about solar energy in Puerto Rico.
            By Eng. Julio A. Santiago Perez, PE — electrical engineer with over 50 years of experience.
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
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                  </div>
                </div>
                <h2 className="font-bold text-xl text-navy-dark mb-3 group-hover:text-solar-yellow transition-colors">
                  <Link href={post.slug}>{post.title}</Link>
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <User size={12} />
                    <span>Eng. Julio A. Santiago Perez, PE</span>
                  </div>
                  <Link
                    href={post.slug}
                    className="flex items-center gap-1 text-solar-yellow text-sm font-medium hover:gap-2 transition-all"
                  >
                    Read more <ArrowRight size={14} />
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
