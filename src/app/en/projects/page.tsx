import type { Metadata } from 'next'
import { MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Solar Projects in Puerto Rico',
  description:
    'Gallery of solar panel installation projects in Puerto Rico completed by Kilowatt PR LLC. Residential, commercial, and battery backup systems.',
  alternates: {
    canonical: 'https://www.kilowattpr.com/en/projects',
    languages: {
      es: 'https://www.kilowattpr.com/proyectos',
      en: 'https://www.kilowattpr.com/en/projects',
    },
  },
}

const projects = [
  {
    title: '8kW Residential System',
    location: 'Aguada, PR',
    type: 'Residential',
    desc: '8kW system installed on a single-family home. Includes SolarEdge inverter and monitoring system. 95% reduction in LUMA Energy bill.',
    tag: 'No Battery',
  },
  {
    title: '10kW Premium System + Battery',
    location: 'San Juan, PR',
    type: 'Premium Residential',
    desc: 'Complete 10kW system with battery storage. Total energy independence during LUMA outages. Client with medical devices at home.',
    tag: 'With Battery',
  },
  {
    title: '25kW Commercial System',
    location: 'Mayaguez, PR',
    type: 'Commercial',
    desc: 'Commercial installation for a business with high electricity demand. Custom design to maximize production with the available roof orientation.',
    tag: 'Commercial',
  },
  {
    title: '6kW Residential System',
    location: 'Ponce, PR',
    type: 'Residential',
    desc: '6kW system for a 3-bedroom home. Complete process from contract to activation in 8 weeks.',
    tag: 'Residential',
  },
  {
    title: '12kW System + Dual Battery',
    location: 'Aguadilla, PR',
    type: 'Premium Residential',
    desc: 'High-capacity system with dual battery for a coastal property with high consumption. Special configuration for marine environment resistance.',
    tag: 'Coastal Zone',
  },
  {
    title: '7kW Residential System',
    location: 'Caguas, PR',
    type: 'Residential',
    desc: 'Installation in an interior Puerto Rico neighborhood. System designed to cover 100% of the average household consumption.',
    tag: 'No Battery',
  },
]

export default function ProjectsPage() {
  return (
    <>
      <section className="bg-navy-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Solar Projects in <span className="text-solar-yellow">Puerto Rico</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Showcase of residential and commercial installations completed by Kilowatt PR
            across Puerto Rico.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p) => (
              <div key={p.title} className="card group">
                <div className="bg-gray-100 rounded-xl h-48 mb-4 flex items-center justify-center relative overflow-hidden">
                  <div className="text-gray-300 text-center">
                    <div className="text-4xl mb-2">☀️</div>
                    <p className="text-sm font-medium text-gray-400">Project Photo</p>
                    <p className="text-xs text-gray-400">(Real photos — coming soon)</p>
                  </div>
                  <div className="absolute top-3 left-3 bg-solar-yellow text-navy-dark text-xs font-bold px-2 py-1 rounded-full">
                    {p.tag}
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs text-gray-400 mb-2">
                  <MapPin size={12} />
                  {p.location}
                  <span className="ml-2 text-solar-yellow font-medium">{p.type}</span>
                </div>
                <h3 className="font-bold text-navy-dark mb-2">{p.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-navy-dark text-white rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-3">
              Your Project Could Be Next
            </h2>
            <p className="text-gray-300 mb-6">
              Free quote, no commitment. Consumption analysis, 3D design, and 25-year
              savings projection.
            </p>
            <a
              href="https://wa.me/17874312275"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Request a Free Quote
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
