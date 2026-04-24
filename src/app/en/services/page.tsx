import type { Metadata } from 'next'
import Link from 'next/link'
import { Sun, Battery, Home, Wrench, ArrowRight } from 'lucide-react'
import { buildEnAlternates } from '@/lib/alternates'

export const metadata: Metadata = {
  title: 'Solar Energy Services in Puerto Rico',
  description:
    'Kilowatt PR offers solar panel installation, battery backup systems, roof sealing, and maintenance across Puerto Rico. Certified technicians, 25-year warranty.',
  ...buildEnAlternates({ es: '/servicios', en: '/en/services' }),
}

const services = [
  {
    icon: Sun,
    title: 'Solar Panel Installation',
    desc: 'We install residential and commercial photovoltaic systems designed for Puerto Rico\'s climate conditions. Everything included: consultation, 3D design, OGPE permits, LUMA interconnection, and installation.',
    href: '/en/services/solar-panel-installation',
    features: ['Residential systems 4kW\u201325kW', 'Custom commercial systems', 'OGPE permit management', 'LUMA Energy interconnection'],
  },
  {
    icon: Battery,
    title: 'Battery Backup Systems',
    desc: 'The solution for total energy independence during LUMA Energy outages. Up to 24 hours of backup power for your home or business\'s essential appliances.',
    href: '/en/services/battery-backup-systems',
    features: ['Up to 24 hours of backup', 'Automatic grid disconnect during outages', 'Compatible with existing panels', 'Remote system monitoring'],
  },
  {
    icon: Home,
    title: 'Roof Sealing',
    desc: 'Before installing panels, we evaluate and waterproof your roof. A sealed roof protects your home from water damage and ensures your solar installation is safe and long-lasting.',
    href: '/en/services/roof-sealing',
    features: ['Structural roof evaluation', 'Professional waterproofing', '2-year workmanship warranty', 'Compatible with all roof types'],
  },
  {
    icon: Wrench,
    title: 'Maintenance & Cleaning',
    desc: 'Keep your panels operating at peak efficiency. Saharan dust, sea salt, and tropical debris can reduce solar production by up to 25% without regular maintenance.',
    href: '/en/services/maintenance',
    features: ['Purified water cleaning', 'Visual inspection of panels and inverters', 'Production report', 'Custom maintenance plan'],
  },
]

export default function ServicesPage() {
  return (
    <>
      <section className="bg-navy-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Solar Services in <span className="text-solar-yellow">Puerto Rico</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Complete renewable energy solutions for homes and businesses. From
            installation to maintenance, we handle everything.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {services.map((svc, i) => (
              <div
                key={svc.href}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div>
                  <div className="w-14 h-14 bg-solar-yellow/10 rounded-xl flex items-center justify-center mb-4">
                    <svc.icon className="text-solar-yellow" size={28} />
                  </div>
                  <h2 className="text-2xl font-bold text-navy-dark mb-3">{svc.title}</h2>
                  <p className="text-gray-600 leading-relaxed mb-5">{svc.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {svc.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="text-solar-yellow font-bold">&#10003;</span> {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={svc.href}
                    className="inline-flex items-center gap-2 text-solar-yellow font-semibold hover:gap-3 transition-all"
                  >
                    Learn more <ArrowRight size={18} />
                  </Link>
                </div>
                <div className="bg-gray-100 rounded-2xl h-64 flex items-center justify-center">
                  <svc.icon className="text-gray-300" size={80} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Solar System Packages</h2>
            <p className="section-subtitle mx-auto">Find the ideal system for your home or business.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Self-Consumption Solar',
                size: '4kW\u20138kW PV + 10\u201330 kWh Battery',
                desc: 'Generate and store your own energy without depending on LUMA. Ideal for homes that want energy independence without net metering.',
                features: ['High-efficiency solar panels', '10\u201330 kWh backup battery', 'No net metering paperwork', 'Blackout protection', '25-year panel warranty'],
                cta: 'Quote Self-Consumption',
              },
              {
                name: 'Net Metering',
                size: '4kW\u201325kW PV + 15\u201364 kWh Battery',
                desc: 'The complete system: generate energy, store it, and sell the excess to LUMA. Maximize your savings with credits on your electric bill.',
                features: ['Solar system up to 25kW', '15\u201364 kWh backup battery', 'Full net metering management', 'Bidirectional meter included', 'Remote monitoring', '25-year panel warranty'],
                cta: 'Quote Net Metering',
                featured: true,
              },
              {
                name: 'Commercial & Industrial Solar',
                size: 'Custom Design',
                desc: 'Engineering-designed systems for businesses, schools, hospitals, and commercial buildings. Immediate reduction in operating costs.',
                features: ['Custom load analysis', 'Full PE engineering design', 'Commercial financing available', 'Post-installation support'],
                cta: 'Quote Commercial System',
              },
            ].map((pkg) => (
              <div
                key={pkg.name}
                className={`card relative ${pkg.featured ? 'border-2 border-solar-yellow' : ''}`}
              >
                {pkg.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-solar-yellow text-navy-dark text-xs font-bold px-3 py-1 rounded-full">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="font-bold text-xl text-navy-dark mb-1">{pkg.name}</h3>
                <p className="text-solar-yellow font-semibold mb-3">{pkg.size}</p>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{pkg.desc}</p>
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-solar-yellow font-bold">&#10003;</span> {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/17874312275"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full text-center block py-3 rounded-lg font-bold transition-colors ${pkg.featured ? 'bg-solar-yellow text-navy-dark hover:bg-solar-gold' : 'bg-navy-dark text-white hover:bg-navy'}`}
                >
                  {pkg.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
