import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, User } from 'lucide-react'
import { ArticleSchema, FAQSchema } from '@/components/SchemaOrg'
import FAQSection from '@/components/FAQSection'

export const metadata: Metadata = {
  title: 'Complete Guide: Solar Backup Batteries for the Home in Puerto Rico',
  description:
    'Everything about solar storage systems in Puerto Rico: types, capacity, cost, and how to choose. Designed for homes that suffer LUMA Energy outages.',
  alternates: {
    canonical: 'https://www.kilowattpr.com/en/blog/home-battery-backup-guide-puerto-rico/',
    languages: {
      'es': 'https://www.kilowattpr.com/blog/guia-bateria-respaldo-hogar-puerto-rico/',
      'en': 'https://www.kilowattpr.com/en/blog/home-battery-backup-guide-puerto-rico/',
    },
  },
  openGraph: {
    title: 'Complete Guide: Solar Backup Batteries for the Home in Puerto Rico',
    description: 'Everything about solar storage systems in Puerto Rico: types of batteries, capacity, cost, and how to choose.',
    url: 'https://www.kilowattpr.com/en/blog/home-battery-backup-guide-puerto-rico/',
    locale: 'en_US',
    type: 'article',
    images: ['https://www.kilowattpr.com/gallery/inversor-solark.webp'],
  },
}

const faqs = [
  {
    question: 'How much battery capacity does an average home in Puerto Rico need?',
    answer: 'An average home in Puerto Rico that consumes between 500 and 800 kWh per month needs between 10 kWh and 20 kWh of battery capacity to cover essential loads during an 8 to 12 hour outage. For 24-hour independence or for additional loads such as air conditioning, 20 kWh or more is recommended. The exact sizing depends on which appliances you want to cover during the outage.',
  },
  {
    question: 'How much does a solar battery cost in Puerto Rico?',
    answer: 'The cost of a solar battery in Puerto Rico ranges between $8,000 and $15,000 for a standard 10–13.5 kWh unit installed. Higher-capacity batteries or multiple units have a proportional cost. Financing options are available to reduce the upfront outlay.',
  },
  {
    question: 'Which battery brands are best for Puerto Rico?',
    answer: 'For Puerto Rico’s conditions, we recommend lithium batteries from reputable brands with solid warranties and support available on the island. The tropical heat and humidity require batteries designed to operate across wide temperature ranges. At Kilowatt PR we select the equipment based on the specific conditions of your installation and present the options with their cost-benefit analysis.',
  },
  {
    question: 'Do solar batteries require special maintenance in the tropical climate?',
    answer: 'Modern lithium batteries are low-maintenance, but Puerto Rico’s tropical heat can affect their longevity if they are not installed with adequate ventilation. We recommend installing the batteries in indoor spaces protected from direct heat and extreme humidity. We include a battery system check in our semiannual maintenance service.',
  },
]

export default function GuiaBateriaPage() {
  const publishDate = '2026-02-15'
  const modifyDate = '2026-02-15'
  const url = 'https://www.kilowattpr.com/en/blog/home-battery-backup-guide-puerto-rico/'

  return (
    <>
      <ArticleSchema
        title="Complete Guide: Solar Backup Batteries for the Home in Puerto Rico"
        description="Everything about solar storage systems in Puerto Rico. Types of batteries, capacity, cost, and how to choose."
        datePublished={publishDate}
        dateModified={modifyDate}
        url={url}
        image="https://www.kilowattpr.com/gallery/inversor-solark.webp"
      />
      <FAQSchema faqs={faqs} inLanguage="en" />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <div className="flex items-center gap-3 text-sm text-gray-400 mb-4">
            <span className="bg-solar-yellow/10 text-solar-yellow font-medium px-3 py-1 rounded-full">
              Batteries & Storage
            </span>
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <time dateTime={publishDate}>February 15, 2026</time>
            </div>
            <div className="flex items-center gap-1">
              <User size={14} />
              <Link href="/equipo/julio-santiago-perez" className="hover:text-solar-yellow transition-colors">Eng. Julio A. Santiago Pérez, PE</Link>
            </div>
          </div>

          {/* Language switcher */}
          <div className="flex items-center gap-3 text-sm text-on-surface-variant mb-4">
            <Link href="/blog/guia-bateria-respaldo-hogar-puerto-rico" className="hover:text-primary-container transition-colors">
              Leer en Español
            </Link>
            <span className="text-outline">|</span>
            <span className="text-primary-container font-semibold">English</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">
            Complete Guide: Solar Backup Batteries for the Home in Puerto Rico
          </h1>

          <p className="article-intro text-xl text-gray-600 leading-relaxed">
            LUMA Energy outages are an everyday reality in Puerto Rico. For many families, the
            question is not whether there will be an outage, but when. Solar systems with battery
            storage offer the definitive answer: real energy independence for hours or days
            without grid electricity.
          </p>
        </div>

        <div className="prose prose-lg max-w-none text-gray-600">
          <h2>Why Are Batteries Especially Important in Puerto Rico?</h2>
          <p>
            Puerto Rico has one of the lowest electrical reliability records in the United States.
            According to data from the{' '}
            <a href="https://www.eia.gov/electricity/monthly/epm_table_5_6_a.html" target="_blank" rel="noopener noreferrer">
              Energy Information Administration (EIA)
            </a>, LUMA Energy residential customers experience an average of more than 12 hours of
            outages per year, with significant spikes after tropical storms and hurricanes.
            According to the{' '}
            <a href="https://www.energy.gov/ceser/puerto-rico-grid-recovery-and-modernization" target="_blank" rel="noopener noreferrer">
              U.S. Department of Energy
            </a>, during Hurricane María in 2017, many communities were without electricity for
            weeks or months.
          </p>
          <p>
            Unlike gas generators, which require fuel, produce noise, and emit gases, solar
            batteries operate silently, automatically, and with no need for fuel. The system
            detects the outage in milliseconds and switches to battery power before you notice
            the difference.
          </p>

          <h2>Types of Batteries for Solar Energy</h2>

          <h3>Lithium-Ion Batteries (Recommended)</h3>
          <p>
            Lithium-ion batteries are today the industry standard for residential solar storage.
            According to the{' '}
            <a href="https://www.nrel.gov/docs/fy23osti/85332.pdf" target="_blank" rel="noopener noreferrer">
              NREL (National Renewable Energy Laboratory)
            </a>, they offer high energy density, life cycles of 4,000 to 10,000 cycles, and
            require little or no maintenance. They are more expensive than lead-acid
            alternatives, but their lifespan is significantly longer and they tolerate Puerto
            Rico&apos;s tropical heat better.
          </p>

          <h3>Lithium Iron Phosphate (LFP) Batteries</h3>
          <p>
            A variant of lithium-ion, LFP batteries offer greater thermal safety and an even
            longer lifespan (6,000–10,000 cycles). They are slightly larger and heavier, but they
            are especially suited for installations in warm climates like Puerto Rico, where the
            ambient temperature can affect battery degradation.
          </p>

          <h2>How to Size Your Battery System?</h2>
          <p>
            The right battery size depends on two factors: how many hours of backup you need and
            which loads you want to cover during the outage. Here is an example calculation for a
            typical home in Puerto Rico:
          </p>

          <div className="not-prose bg-gray-50 rounded-xl p-6 my-6">
            <h3 className="font-bold text-navy-dark mb-4">Example: Essential Loads of a Typical Home</h3>
            <div className="space-y-2 text-sm">
              {[
                { item: 'Refrigerator (200W × 12h)', usage: '2.4 kWh' },
                { item: 'LED lighting (100W × 8h)', usage: '0.8 kWh' },
                { item: 'Fans × 2 (150W × 8h)', usage: '1.2 kWh' },
                { item: 'TV and chargers (150W × 4h)', usage: '0.6 kWh' },
                { item: 'Internet router (20W × 24h)', usage: '0.5 kWh' },
              ].map((row) => (
                <div key={row.item} className="flex justify-between py-2 border-b border-gray-200 last:border-0">
                  <span className="text-gray-700">{row.item}</span>
                  <span className="font-semibold text-navy-dark">{row.usage}</span>
                </div>
              ))}
              <div className="flex justify-between py-2 font-bold text-solar-yellow">
                <span>Estimated total (12 hours)</span>
                <span>~5.5 kWh</span>
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-2">
              For this home, a 10–13.5 kWh battery provides approximately 24 hours of backup on essential loads.
            </p>
          </div>

          <h2>Correct Installation in Puerto Rico&apos;s Climate</h2>
          <p>
            According to the{' '}
            <a href="https://www.energy.gov/eere/solar/solar-energy-storage-basics" target="_blank" rel="noopener noreferrer">
              Department of Energy guides on solar storage
            </a>, lithium batteries operate best in temperature ranges of 15°C to 35°C. In Puerto
            Rico, temperatures in non-air-conditioned interiors can exceed 40°C in summer, which
            can accelerate battery degradation and reduce their lifespan. For this reason,
            Kilowatt PR installs the batteries in indoor spaces with adequate ventilation,
            protected from direct sun and away from heat sources.
          </p>

          <h2>Solar System + Battery vs. Gas Generator</h2>
          <p>
            Many homeowners in Puerto Rico compare solar batteries with gas generators. The{' '}
            <a href="https://www.nrel.gov/solar/market-research-analysis.html" target="_blank" rel="noopener noreferrer">
              NREL
            </a>{' '}
            has documented the drop in storage costs that makes this comparison increasingly
            favorable. The most honest comparison shows that:
          </p>
          <ul>
            <li>Batteries work automatically, with no human intervention</li>
            <li>They require no fuel or gasoline storage</li>
            <li>They produce no noise or carbon emissions</li>
            <li>They recharge for free with your own solar panels</li>
            <li>They have a lower maintenance cost in the long run</li>
            <li>The upfront cost is higher, but the total 10-year cost is generally lower</li>
          </ul>

          <h2>Next Steps: Quote Your System with a Battery</h2>
          <p>
            Every home in Puerto Rico has different needs. The number of panels required, the
            battery size, and the system configuration depend on your consumption, the size of
            your roof, and the loads you want to back up during outages. Our licensed electrical
            contractors and electrical engineers with over 3 decades of experience in Puerto Rico
            can design the exact system you need during a free, no-obligation consultation.
          </p>
        </div>

        <div className="mt-12 bg-solar-yellow/10 border border-solar-yellow/30 rounded-xl p-6 text-center">
          <p className="text-navy-dark font-bold text-lg mb-4">
            Design your system with a battery. Free consultation, no obligation.
          </p>
          <a
            href="https://wa.me/17874312275"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Quote a System with a Battery
          </a>
        </div>
      </article>

      <FAQSection faqs={faqs} title="Questions About Solar Batteries in Puerto Rico" />

      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-bold text-navy-dark mb-4">Related Articles</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/en/blog/how-much-does-solar-cost-puerto-rico-2026', label: 'Solar Energy Costs 2026' },
              { href: '/en/blog/solar-battery-vs-gas-generator', label: 'Battery vs Generator' },
              { href: '/en/blog/what-to-do-after-luma-outage', label: 'What to Do After an Outage' },
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
