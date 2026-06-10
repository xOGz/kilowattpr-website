import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, User } from 'lucide-react'
import { ArticleSchema, FAQSchema } from '@/components/SchemaOrg'
import FAQSection from '@/components/FAQSection'

export const metadata: Metadata = {
  title: 'How Net Metering Works in Puerto Rico',
  description:
    'Complete explanation of net metering in Puerto Rico. How the bidirectional meter works, credits on your LUMA bill, PREB requirements, and the interconnection process.',
  alternates: {
    canonical: 'https://www.kilowattpr.com/en/blog/how-net-metering-works-puerto-rico/',
    languages: {
      'es': 'https://www.kilowattpr.com/blog/como-funciona-net-metering-puerto-rico/',
      'en': 'https://www.kilowattpr.com/en/blog/how-net-metering-works-puerto-rico/',
    },
  },
  openGraph: {
    title: 'How Net Metering Works in Puerto Rico',
    description: 'Bidirectional meter, credits on your LUMA bill, PREB requirements, and the interconnection process.',
    url: 'https://www.kilowattpr.com/en/blog/how-net-metering-works-puerto-rico/',
    locale: 'en_US',
    type: 'article',
    images: ['https://www.kilowattpr.com/gallery/inversor-solark.webp'],
  },
}

const faqs = [
  {
    question: 'What is net metering in Puerto Rico?',
    answer: 'Net metering is a mechanism regulated by the Puerto Rico Energy Bureau (PREB) that allows solar system owners to send the energy they do not consume back to the LUMA grid. A bidirectional meter records both the energy you draw from the grid and the energy you export. At the end of the month, you only pay the net difference: if you exported more than you consumed, you receive a credit on your next bill.',
  },
  {
    question: 'How much does LUMA pay me for the energy I export with net metering?',
    answer: 'Under the net metering program in Puerto Rico, LUMA credits the exported energy at a rate set by PREB, which is typically lower than the rate you pay for consumption. This means it is in your interest to consume as much of your own solar energy as possible in real time and export only the surplus. The credit appears as a discount on your monthly LUMA bill.',
  },
  {
    question: 'What happens to my net metering credits at the end of the year?',
    answer: 'Net metering credits in Puerto Rico accumulate month to month. If in a given month you export more than you consume, the credit carries over to the next month. At the end of the annual settlement period, any accumulated credits that have not been used are generally settled according to current PREB rules. That is why it is important to size your system correctly so that annual production is close to your annual consumption.',
  },
  {
    question: 'Do I need a special meter for net metering in Puerto Rico?',
    answer: 'Yes. To participate in the net metering program you need a bidirectional meter that records the flow of energy in both directions: the energy you draw from the grid and the energy you export from your solar system. LUMA installs this meter as part of the interconnection process. The cost of the meter and its installation are included in the interconnection process. At Kilowatt PR we manage the entire interconnection process with LUMA so you do not have to deal with paperwork.',
  },
]

export default function NetMeteringPuertoRicoPage() {
  const publishDate = '2026-03-17'
  const modifyDate = '2026-03-17'
  const url = 'https://www.kilowattpr.com/en/blog/how-net-metering-works-puerto-rico/'

  return (
    <>
      <ArticleSchema
        title="How Net Metering Works in Puerto Rico"
        description="Complete explanation of net metering in Puerto Rico. Bidirectional meter, credits on your LUMA bill, PREB requirements, and the interconnection process."
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
              Process & Permits
            </span>
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <time dateTime={publishDate}>March 17, 2026</time>
            </div>
            <div className="flex items-center gap-1">
              <User size={14} />
              <Link href="/equipo/julio-santiago-perez" className="hover:text-solar-yellow transition-colors">Eng. Julio A. Santiago Pérez, PE</Link>
            </div>
          </div>

          {/* Language switcher */}
          <div className="flex items-center gap-3 text-sm text-on-surface-variant mb-4">
            <Link href="/blog/como-funciona-net-metering-puerto-rico" className="hover:text-primary-container transition-colors">
              Leer en Español
            </Link>
            <span className="text-outline">|</span>
            <span className="text-primary-container font-semibold">English</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">
            How Net Metering Works in Puerto Rico
          </h1>

          <p className="article-intro text-xl text-gray-600 leading-relaxed">
            If you have solar panels or are considering installing them, you have probably
            heard the term &quot;net metering.&quot; It is the mechanism that allows the energy
            your panels produce and you do not use to be sent to the LUMA grid and credited to
            your bill. It sounds simple, but the details matter. Here we explain exactly how it
            works in Puerto Rico.
          </p>
        </div>

        <div className="prose prose-lg max-w-none text-gray-600">
          <h2>What Is Net Metering?</h2>

          <p>
            Net metering is a policy regulated by the{' '}
            <a
              href="https://energia.pr.gov/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-solar-yellow hover:underline"
            >
              Puerto Rico Energy Bureau (PREB)
            </a>{' '}
            that allows solar system owners to exchange energy with the electrical grid. In
            simple terms: when your panels produce more energy than you use, the surplus goes
            to the grid and you receive a credit. When you need more energy than you produce
            (for example, at night), you draw it from the grid.
          </p>

          <p>
            At the end of each billing period, you only pay the net difference between what you
            consumed from the grid and what you exported. Hence the name: <em>net</em> metering.
          </p>

          <h2>How the Bidirectional Meter Works</h2>

          <p>
            The heart of net metering is the bidirectional meter. Unlike the traditional meter
            that only measures the energy you consume, the bidirectional meter records the flow
            of energy in both directions:
          </p>

          <div className="not-prose bg-gray-50 rounded-xl p-6 my-6">
            <h3 className="font-bold text-navy-dark mb-4">Energy Flow with Net Metering</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="bg-green-100 text-green-700 font-bold px-3 py-1 rounded-full text-sm shrink-0">Day</span>
                <div>
                  <p className="font-medium text-navy-dark">Your panels produce more than you consume</p>
                  <p className="text-sm text-gray-600">The surplus flows to the LUMA grid. The meter runs &quot;backward,&quot; accumulating credit in your favor.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-blue-100 text-blue-700 font-bold px-3 py-1 rounded-full text-sm shrink-0">Night</span>
                <div>
                  <p className="font-medium text-navy-dark">No solar production, you consume from the grid</p>
                  <p className="text-sm text-gray-600">The meter runs &quot;forward&quot; normally, but first uses the credits accumulated during the day.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-amber-100 text-amber-700 font-bold px-3 py-1 rounded-full text-sm shrink-0">Bill</span>
                <div>
                  <p className="font-medium text-navy-dark">You only pay the net difference</p>
                  <p className="text-sm text-gray-600">If you exported 400 kWh and consumed 600 kWh from the grid, you only pay for 200 net kWh.</p>
                </div>
              </div>
            </div>
          </div>

          <h2>A Typical Day with Net Metering in Puerto Rico</h2>

          <p>
            To better understand how it works in practice, let&apos;s look at a typical day for
            a home with solar panels and net metering in Puerto Rico:
          </p>

          <ul>
            <li><strong>6:00 AM – 8:00 AM:</strong> The panels start producing but do not yet cover all the morning consumption (water heater, stove, lights). You partially consume from the grid.</li>
            <li><strong>8:00 AM – 4:00 PM:</strong> Peak solar production hours. The panels produce significantly more than you consume (the house is empty or has low consumption). The surplus goes to the grid and you accumulate credit.</li>
            <li><strong>4:00 PM – 6:00 PM:</strong> Production drops while consumption rises (the family comes home, the A/C turns on). You start using accumulated credit.</li>
            <li><strong>6:00 PM – 6:00 AM:</strong> No solar production. You consume from the grid, but the day&apos;s credits reduce your net consumption.</li>
          </ul>

          <h2>Monthly Credits on Your LUMA Bill</h2>

          <p>
            Net metering credits appear on your LUMA bill as a direct discount. There are
            several possible scenarios each month:
          </p>

          <div className="not-prose bg-gray-50 rounded-xl p-6 my-6">
            <h3 className="font-bold text-navy-dark mb-4">Monthly Billing Scenarios</h3>
            <div className="space-y-3">
              {[
                {
                  scenario: 'You consumed more than you exported',
                  result: 'You pay the net difference (significantly reduced)',
                  example: 'Consumption: 800 kWh | Export: 500 kWh | You pay: 300 kWh',
                },
                {
                  scenario: 'You exported more than you consumed',
                  result: 'You receive credit that carries over to the next month',
                  example: 'Consumption: 400 kWh | Export: 600 kWh | Credit: 200 kWh',
                },
                {
                  scenario: 'Balanced production and consumption',
                  result: 'LUMA bill close to $0 (only minimum fixed charges)',
                  example: 'Consumption: 600 kWh | Export: 580 kWh | You pay: 20 kWh',
                },
              ].map((row) => (
                <div key={row.scenario} className="border-b border-gray-200 last:border-0 pb-3 last:pb-0">
                  <p className="font-bold text-navy-dark">{row.scenario}</p>
                  <p className="text-sm text-gray-700">{row.result}</p>
                  <p className="text-xs text-gray-500 italic">{row.example}</p>
                </div>
              ))}
            </div>
          </div>

          <p>
            It is important to note that even with net metering, your LUMA bill never reaches
            exactly $0 because there are minimum fixed charges that apply regardless of your net
            consumption. However, it is possible to reduce your monthly bill from $300–$400 to
            $20–$50. This magnitude of savings is possible because Puerto Rico has one of the
            highest residential electricity rates in the entire United States according to data
            published by the{' '}
            <a
              href="https://www.eia.gov/state/?sid=RQ"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-solar-yellow hover:underline"
            >
              U.S. Energy Information Administration (EIA)
            </a>
            , which increases the value of each kWh you replace with your solar production.
          </p>

          <h2>Annual Credit Settlement</h2>

          <p>
            The credits you accumulate carry over month to month. This is beneficial because
            solar production varies depending on the time of year: in summer you produce more
            and in the rainy months a little less. The credits from high-production months
            offset the lower-production months.
          </p>

          <p>
            At the end of the annual settlement period, the accumulated credits are handled
            according to current PREB rules. That is why sizing your system correctly is
            essential: we want your annual production to be as close as possible to your annual
            consumption to maximize the benefit and minimize the credits lost at settlement.
          </p>

          <h2>The Role of PREB and LUMA in Net Metering</h2>

          <h3>PREB (Puerto Rico Energy Bureau)</h3>
          <p>
            PREB is the regulator that establishes the rules of net metering in Puerto Rico. It
            defines the credit rates, the technical requirements to participate, the system
            capacity limits, and the rights and obligations of both the customer and LUMA. PREB
            also handles complaints if disputes arise with LUMA over net metering credits.
          </p>

          <h3>LUMA Energy</h3>
          <p>
            LUMA is the entity that operates the grid and runs the net metering program day to
            day. Its responsibilities include:
          </p>
          <ul>
            <li>Processing the interconnection request</li>
            <li>Installing the bidirectional meter</li>
            <li>Conducting the interconnection inspection</li>
            <li>Calculating and applying the monthly credits on your bill</li>
            <li>Handling the annual settlement</li>
          </ul>

          <h2>Interconnection Requirements for Net Metering</h2>

          <p>
            To participate in the net metering program in Puerto Rico, your solar system must
            meet LUMA&apos;s interconnection requirements:
          </p>

          <ol>
            <li><strong>Authorized installer:</strong> The system must be installed by an installer with a valid license in Puerto Rico</li>
            <li><strong>Electrical inspection:</strong> The system must pass the electrical inspection by the licensed electrical contractor</li>
            <li><strong>Interconnection request:</strong> The formal request is submitted to LUMA with the system plans</li>
            <li><strong>LUMA inspection:</strong> LUMA inspects the system before authorizing interconnection</li>
            <li><strong>Meter installation:</strong> LUMA installs the bidirectional meter</li>
            <li><strong>Permission to operate (PTO):</strong> LUMA issues the final permit so your system can export to the grid</li>
          </ol>

          <p>
            This process can take between 4 and 12 weeks depending on the workload of{' '}
            <a
              href="https://lumapr.com/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-solar-yellow hover:underline"
            >
              LUMA Energy
            </a>{' '}
            and the complexity of the system. At Kilowatt PR we manage this entire process for
            you: from the initial request until your system is producing and exporting to the
            grid.
          </p>

          <h2>How to Maximize Your Benefits with Net Metering</h2>

          <p>
            To get the most benefit from net metering in Puerto Rico, follow these
            recommendations:
          </p>

          <ul>
            <li><strong>Size your system correctly:</strong> An oversized system generates credits you may lose at the annual settlement. An undersized system does not maximize your savings. The ideal point is for your annual production to match your annual consumption.</li>
            <li><strong>Shift consumption to the day:</strong> Schedule large appliances (washer, dryer, water heater) to run during sunlight hours when your panels produce surplus.</li>
            <li><strong>Monitor your production:</strong> Use your inverter&apos;s monitoring app to verify that your system is producing as expected. An unexpected drop may indicate dirt or a technical problem.</li>
            <li><strong>Consider a battery:</strong> With a battery you can store surplus for nighttime use instead of sending it to the grid, maximizing self-consumption and reducing dependence on net metering credits.</li>
          </ul>

          <h2>Net Metering vs. Battery: Are They Complementary?</h2>

          <p>
            Net metering and a battery are not mutually exclusive: they are complementary. Net
            metering lets you &quot;use the grid as a virtual battery&quot; during the day, while
            a physical battery protects you during outages when the grid is not available. The
            ideal combination for many homes in Puerto Rico is to have both: net metering to
            maximize monthly savings and a battery for backup during LUMA&apos;s frequent
            outages.
          </p>

          <h2>Conclusion: Net Metering Is Key to Your Return on Investment</h2>

          <p>
            Net metering is what turns your solar investment from a self-consumption system
            limited to daytime hours into a 24-hour savings solution. Without net metering, the
            energy you produce and do not use during the day is wasted. With net metering, every
            kilowatt-hour you produce has value, whether you consume it directly or send it to
            the grid as a credit.
          </p>

          <p>
            At Kilowatt PR, with technicians and crews with over a decade of experience in
            Puerto Rico, we size your system to maximize the benefit of net metering and manage
            the entire interconnection process with LUMA so you only have to worry about
            enjoying the savings.
          </p>
        </div>

        <div className="mt-12 bg-solar-yellow/10 border border-solar-yellow/30 rounded-xl p-6 text-center">
          <p className="text-navy-dark font-bold text-lg mb-4">
            Want to know how much you can save with net metering? Free quote.
          </p>
          <a
            href="https://wa.me/17874312275?text=Hi%2C%20I%27m%20interested%20in%20learning%20how%20net%20metering%20works%20and%20how%20much%20I%20can%20save."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Ask on WhatsApp
          </a>
        </div>
      </article>

      <FAQSection faqs={faqs} title="Questions About Net Metering in Puerto Rico" />

      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-bold text-navy-dark mb-4">Related Articles</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/en/blog/solar-battery-vs-gas-generator', label: 'Battery vs Generator' },
              { href: '/en/blog/how-much-does-solar-cost-puerto-rico-2026', label: 'Solar Energy Costs 2026' },
              { href: '/en/blog/home-battery-backup-guide-puerto-rico', label: 'Battery Backup Guide' },
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
