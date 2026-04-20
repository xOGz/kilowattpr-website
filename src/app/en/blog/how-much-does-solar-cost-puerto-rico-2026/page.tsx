import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, User } from 'lucide-react'
import { ArticleSchema, FAQSchema } from '@/components/SchemaOrg'
import FAQSection from '@/components/FAQSection'

export const metadata: Metadata = {
  title: 'How Much Does Solar Energy Cost in Puerto Rico in 2026?',
  description:
    'Complete guide to solar energy costs in Puerto Rico 2026. Residential systems from $13,000 and up, commercial, with and without battery. Financing available.',
  alternates: {
    canonical: 'https://www.kilowattpr.com/en/blog/how-much-does-solar-cost-puerto-rico-2026',
    languages: {
      'es': 'https://www.kilowattpr.com/blog/cuanto-cuesta-energia-solar-puerto-rico-2026',
      'en': 'https://www.kilowattpr.com/en/blog/how-much-does-solar-cost-puerto-rico-2026',
    },
  },
  openGraph: {
    title: 'How Much Does Solar Energy Cost in Puerto Rico in 2026?',
    description: 'Complete guide to solar energy costs in Puerto Rico 2026. Residential systems, commercial, with and without battery.',
    url: 'https://www.kilowattpr.com/en/blog/how-much-does-solar-cost-puerto-rico-2026',
    locale: 'en_US',
    type: 'article',
  },
}

const faqs = [
  {
    question: 'How much does a solar system cost in Puerto Rico?',
    answer: 'A residential solar system with 4 kW solar and 10 kWh battery in Puerto Rico costs from $13,000 and up installed, including permits and LUMA Energy interconnection. Financing options are available to reduce the upfront cost.',
  },
  {
    question: 'Is it worth installing solar panels in Puerto Rico in 2026?',
    answer: 'Yes, installing solar panels in Puerto Rico in 2026 remains one of the best investments available. LUMA Energy rates continue to be among the highest in the entire United States, system prices have dropped significantly, and the need for energy independence from frequent outages is greater than ever. Most systems pay for themselves in 5 to 8 years, with a 25-year warranty.',
  },
  {
    question: 'Is financing available for solar panels in Puerto Rico?',
    answer: 'Yes, there are multiple financing options: personal loans, specialized solar loans, power purchase agreements (PPAs), and financing through credit unions. Many financial institutions in Puerto Rico offer preferential rates for renewable energy projects. At Kilowatt PR we present all available options during the consultation.',
  },
  {
    question: 'How long does it take for a solar system to pay for itself in Puerto Rico?',
    answer: 'With current LUMA Energy rates, most residential solar systems in Puerto Rico pay for themselves in 5 to 8 years through monthly electricity bill savings. After that period, the electricity your system generates is essentially free for the remaining 17 to 20 years of the panel warranty.',
  },
]

export default function SolarCostPage() {
  const publishDate = '2026-01-15'
  const modifyDate = '2026-01-15'
  const url = 'https://www.kilowattpr.com/en/blog/how-much-does-solar-cost-puerto-rico-2026'

  return (
    <>
      <ArticleSchema
        title="How Much Does Solar Energy Cost in Puerto Rico in 2026?"
        description="Complete guide to solar energy costs in Puerto Rico 2026. Residential systems, commercial, with and without battery."
        datePublished={publishDate}
        dateModified={modifyDate}
        url={url}
      />
      <FAQSchema faqs={faqs} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <div className="flex items-center gap-3 text-sm text-gray-400 mb-4">
            <span className="bg-solar-yellow/10 text-solar-yellow font-medium px-3 py-1 rounded-full">
              Costs & Financing
            </span>
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <time dateTime={publishDate}>January 15, 2026</time>
            </div>
            <div className="flex items-center gap-1">
              <User size={14} />
              <Link href="/equipo/julio-santiago-perez" className="hover:text-solar-yellow transition-colors">Eng. Julio A. Santiago Pérez, PE</Link>
            </div>
          </div>

          {/* Language switcher */}
          <div className="flex items-center gap-3 text-sm text-on-surface-variant mb-4">
            <Link href="/blog/cuanto-cuesta-energia-solar-puerto-rico-2026" className="hover:text-primary-container transition-colors">
              Leer en Español
            </Link>
            <span className="text-outline">|</span>
            <span className="text-primary-container font-semibold">English</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">
            How Much Does Solar Energy Cost in Puerto Rico in 2026?
          </h1>

          <p className="article-intro text-xl text-gray-600 leading-relaxed">
            If you&apos;re considering installing solar panels in Puerto Rico, cost is probably
            your first question. In this complete guide we explain the real prices of
            residential and commercial solar systems in 2026, the factors that affect cost,
            and the financing options available.
          </p>
        </div>

        <div className="prose prose-lg max-w-none text-gray-600">
          <h2>Average Cost of a Residential Solar System in Puerto Rico</h2>

          <p>
            The cost of a residential solar system in Puerto Rico in 2026 starts from
            <strong> $13,000 and up</strong>, depending on the system size, equipment type,
            and whether it includes battery storage. According to the{' '}
            <a href="https://www.nrel.gov/solar/market-research-analysis.html" target="_blank" rel="noopener noreferrer">
              National Renewable Energy Laboratory (NREL)
            </a>, the average cost per installed watt has dropped consistently over the past
            decade. Financing options are available to reduce the upfront investment.
          </p>

          <div className="not-prose bg-gray-50 rounded-xl p-6 my-6">
            <h3 className="font-bold text-navy-dark mb-4">Price Ranges by System Type</h3>
            <div className="space-y-3">
              {[
                { sistema: '4 kW Solar + 10 kWh Battery System', precio: 'From $13,000' },
                { sistema: 'Mid-Size 8kW System + Battery', precio: 'From $20,000' },
                { sistema: 'Premium 10kW System + Battery', precio: 'From $28,000' },
                { sistema: 'Commercial 20kW+', precio: 'Custom quote' },
              ].map((row) => (
                <div key={row.sistema} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-0">
                  <span className="text-sm text-gray-700">{row.sistema}</span>
                  <span className="font-bold text-solar-yellow">{row.precio}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-3">
              * Reference prices. The exact cost depends on a property evaluation.
            </p>
          </div>

          <h2>What Factors Affect the Cost of a Solar System in Puerto Rico?</h2>

          <p>
            Not all solar systems cost the same. The main factors that determine the
            final price of your installation are:
          </p>

          <h3>1. Household Electricity Consumption</h3>
          <p>
            The most important factor is how much energy your home consumes monthly. A home
            that uses 400 kWh per month needs a smaller (and cheaper) system than one
            that uses 1,200 kWh. To determine your actual consumption, we analyze your
            last 12 LUMA Energy bills during the free consultation.
          </p>

          <h3>2. Roof Type and Orientation</h3>
          <p>
            South-facing roofs, free from shade, are the most efficient for solar energy
            in Puerto Rico. North-facing roofs or those with significant shade from trees
            or adjacent structures may require more panels to produce the same amount of
            energy, increasing the cost.
          </p>

          <h3>3. System With or Without Battery</h3>
          <p>
            A system with battery storage costs between $10,000 and $15,000 more than
            the same system without a battery. However, batteries are especially valuable
            in Puerto Rico due to the frequency of LUMA Energy outages. Many homeowners
            consider the additional investment worth it for the peace of mind and energy
            independence it provides.
          </p>

          <h3>4. Roof Condition</h3>
          <p>
            If your roof needs repairs or waterproofing before installing the panels,
            this adds cost to the project. At Kilowatt PR we evaluate the roof as part of
            the free consultation and inform you if any prior work is needed.
          </p>

          <h2>How Long Does It Take for a Solar System to Pay for Itself in Puerto Rico?</h2>

          <p>
            With current{' '}
            <a href="https://lumaenergy.com/tarifas/" target="_blank" rel="noopener noreferrer">
              LUMA Energy rates
            </a> — among the highest in the entire United States according to the{' '}
            <a href="https://www.eia.gov/electricity/monthly/epm_table_5_6_a.html" target="_blank" rel="noopener noreferrer">
              U.S. Energy Information Administration (EIA)
            </a> — most residential solar systems in Puerto Rico pay for themselves in{' '}
            <strong>5 to 8 years</strong>. After that period, all the energy you produce is
            effectively free for the remaining life of the system (25 years or more).
          </p>
          <p>
            For a $25,000 system with monthly savings of $300-$400 on your LUMA Energy
            bill, the payback period is approximately 6 to 7 years.
          </p>

          <h2>Financing Options in Puerto Rico</h2>

          <p>
            You don&apos;t need to have all the capital available to install solar panels.
            There are multiple financing options in Puerto Rico:
          </p>

          <ul>
            <li>Personal loans from credit unions (Cooperativas)</li>
            <li>Specialized solar loans with preferential rates</li>
            <li>Power purchase agreements (PPAs) with $0 down</li>
            <li>Financing through the vendor/installer</li>
            <li>Loans from the Economic Development Bank (BDE)</li>
          </ul>

          <p>
            At Kilowatt PR we present all available financing options during the
            consultation and help you choose the one that best fits your financial
            situation.
          </p>

          <h2>Conclusion: Is It Worth Installing Solar in Puerto Rico in 2026?</h2>

          <p>
            With electricity rates among the highest in the United States, frequent LUMA Energy
            outages, and high{' '}
            <a href="https://www.nrel.gov/gis/solar-resource-maps.html" target="_blank" rel="noopener noreferrer">
              solar irradiation
            </a>{' '}
            year-round, 2026 remains an excellent time to install solar energy in Puerto Rico.
            The investment pays for itself in a reasonable period and provides decades of clean,
            affordable, grid-independent energy.
          </p>
          <p>
            The best way to know exactly how much a system would cost for your specific
            property is through a free consultation. At Kilowatt PR, our licensed electricians
            and electrical engineers with over 3 decades of experience in Puerto Rico analyze your consumption,
            evaluate your roof, and present a detailed design with the exact cost and
            7-year savings projection — no cost, no obligation.
          </p>
        </div>

        <div className="mt-12 bg-solar-yellow/10 border border-solar-yellow/30 rounded-xl p-6 text-center">
          <p className="text-navy-dark font-bold text-lg mb-4">
            How much can you save with solar energy in Puerto Rico?
          </p>
          <a
            href="https://wa.me/17874312275"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Free Consultation — 7-Year Savings Projection
          </a>
        </div>
      </article>

      <FAQSection faqs={faqs} title="Questions About Solar Energy Costs in Puerto Rico" />

      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-bold text-navy-dark mb-4">Related Articles</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/blog/incentivos-solares-puerto-rico-2026', label: 'Hurricane Preparation' },
              { href: '/blog/guia-bateria-respaldo-hogar-puerto-rico', label: 'Battery Guide' },
              { href: '/blog/como-funciona-interconexion-luma-energia', label: 'LUMA Interconnection' },
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
