import type { Metadata } from 'next'
import Link from 'next/link'
import { FAQSchema } from '@/components/SchemaOrg'
import FAQSection from '@/components/FAQSection'
import QuoteForm from '@/components/QuoteForm'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import { CheckCircle, ArrowRight } from 'lucide-react'
import { buildEnAlternates } from '@/lib/alternates'

export const metadata: Metadata = {
  title: 'Commercial Solar Energy in Puerto Rico: Systems for Businesses',
  description:
    'Commercial solar systems for businesses in PR. Restaurants, pharmacies, warehouses, hotels. ROI in 4 to 7 years. Free consultation: 787-431-2275.',
  ...buildEnAlternates({
    es: '/servicios/energia-solar-comercial',
    en: '/en/services/commercial-solar',
  }),
  openGraph: {
    title: 'Commercial Solar Energy in Puerto Rico: Systems for Businesses',
    description:
      'Commercial solar systems for businesses in PR. Restaurants, pharmacies, warehouses, hotels. ROI in 4 to 7 years.',
    url: 'https://www.kilowattpr.com/en/services/commercial-solar/',
    locale: 'en_US',
    images: [
      {
        url: 'https://www.kilowattpr.com/servicios/solar-comercial.webp',
        width: 1200,
        height: 630,
        alt: 'Commercial solar energy system in Puerto Rico',
      },
    ],
  },
}

const faqs = [
  {
    question: 'What size solar system does my business need in Puerto Rico?',
    answer: 'The size depends on your commercial electricity consumption. A small restaurant may need 10-15 kW, a pharmacy 15-25 kW, a warehouse 25-50 kW, and a hotel or supermarket 50-100 kW or more. During the free consultation, we analyze your last 12 LUMA Energy bills to design a system that covers between 80% and 100% of your consumption.',
  },
  {
    question: 'What is the return on investment (ROI) of a commercial solar system?',
    answer: 'Most businesses in Puerto Rico recover their solar energy investment in 4 to 7 years, depending on the system size and electricity consumption. With LUMA Energy rates among the highest in the United States, a commercial solar system can generate savings of thousands of dollars per month. After the payback period, the electricity your system produces is essentially free for the next 20+ years.',
  },
  {
    question: 'How does net metering work for businesses in Puerto Rico?',
    answer: 'Net metering allows your business to send excess solar energy back to the LUMA Energy grid and receive credit on your bill. If your system produces more energy than you consume during the day, that surplus reduces your bill. It is especially beneficial for businesses that operate primarily during daytime hours, when solar production is at its peak.',
  },
  {
    question: 'Can you install solar panels without interrupting my business operations?',
    answer: 'Yes. We plan every commercial installation to minimize the impact on your operations. Most of the work is done on the roof and in the electrical area, without affecting the interior of the business. The final connection to the electrical panel may require a brief interruption of 1 to 2 hours, which we coordinate for the time of lowest activity for your business.',
  },
]

export default function CommercialSolarPage() {
  return (
    <>
      <FAQSchema faqs={faqs} inLanguage="en" />
      <BreadcrumbSchema
        items={[
          { name: 'Services', path: '/en/services' },
          { name: 'Commercial Solar', path: '/en/services/commercial-solar' },
        ]}
        rootLabel="Home"
      />

      <section className="bg-navy-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Commercial Solar Energy in{' '}
            <span className="text-solar-yellow">Puerto Rico</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Solar systems from 10 kW to 100 kW+ for businesses. ROI in 4-7 years, reduced demand
            charges, and protection against LUMA Energy rate increases.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              For businesses in Puerto Rico, electricity is one of the highest operating
              expenses. With LUMA Energy rates exceeding $0.25 per kWh and demand charges that
              can represent 30-40% of the commercial bill, a solar system is not just an
              environmental decision: it is a financial strategy that directly impacts your
              profitability.
            </p>
            <p>
              Kilowatt PR designs and installs commercial solar systems for restaurants,
              pharmacies, warehouses, hotels, offices, workshops, and all types of businesses
              in Puerto Rico. Our team, led by electrical engineer Julio Santiago Pérez
              (PE #6083), designs each system to maximize the return on investment specific to
              your operation.
            </p>
            <p>
              A properly sized commercial solar system can eliminate between 80% and 100% of
              your electric bill. It also reduces your demand charges, the most expensive
              component of commercial bills in Puerto Rico. The excess energy produced is
              credited to your account through net metering with LUMA Energy.
            </p>
            <p>
              Our commercial systems range from 10 kW for small businesses up to 100 kW or
              more for large commercial and industrial operations. We use high-efficiency
              panels with a direct manufacturer warranty and commercial inverters designed to
              maximize production in Puerto Rico&apos;s tropical conditions. In addition, we
              offer a 1 year Kilowatt PR workmanship warranty on the installation.
            </p>
            <p>
              The process includes a detailed consumption analysis, custom design, full OGPE
              permit management, interconnection request with LUMA Energy, and a maintenance
              plan to ensure optimal performance throughout the system&apos;s entire lifespan.
              Most of our commercial clients recover their investment in 4 to 7 years.
            </p>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-bold text-navy-dark mb-6">
              How Does the Process Work for Businesses?
            </h2>
            <div className="space-y-4">
              {[
                { step: '1', title: 'Free Commercial Analysis', desc: 'We study your LUMA Energy bills, consumption patterns, demand charges, and operating schedule to design the optimal system.' },
                { step: '2', title: 'Design & Proposal', desc: 'We present a custom design with a savings projection and estimated ROI. If your company is going to finance the project, we deliver the formal quote and technical documentation so you can present it to the bank or credit union of your choice. Kilowatt does not finance directly.' },
                { step: '3', title: 'Permits & Logistics', desc: 'We manage all OGPE permits and the interconnection request with LUMA Energy. We plan the installation so it does not affect your operations.' },
                { step: '4', title: 'Installation', desc: 'Our team installs the system in the shortest time possible, coordinating any necessary interruption during low-activity hours.' },
                { step: '5', title: 'Activation & Monitoring', desc: 'We activate the system, set up real-time monitoring, and give you dashboard access to see your production and savings.' },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="w-8 h-8 bg-solar-yellow text-navy-dark rounded-full flex items-center justify-center font-bold shrink-0 text-sm">
                    {item.step}
                  </div>
                  <div>
                    <p className="font-bold text-navy-dark">{item.title}</p>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-bold text-navy-dark mb-6">What Does Our Commercial Service Include?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Consumption and demand charge analysis',
                'Custom design with ROI projection',
                'High-efficiency commercial solar panels',
                'Commercial inverters with monitoring',
                'Mounting structure for commercial roofs',
                'Full OGPE permit management',
                'Interconnection request and net metering',
                '25-year panel warranty',
                'Preventive maintenance plan',
                'Post-installation technical support',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="text-solar-yellow shrink-0" size={16} />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 bg-solar-yellow/10 border border-solar-yellow/30 rounded-xl p-8">
            <h3 className="text-navy-dark font-bold text-lg mb-5 text-center">
              Want to reduce your business&apos;s electricity costs?
            </h3>
            <QuoteForm defaultService="Commercial solar energy" />
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title="Questions About Commercial Solar Energy in Puerto Rico" />

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-bold text-navy-dark mb-4">Related Services</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/en/services/solar-panel-installation', label: 'Residential Installation' },
              { href: '/en/services/battery-backup-systems', label: 'Battery Backup Systems' },
              { href: '/en/services/maintenance', label: 'Maintenance & Cleaning' },
            ].map((s) => (
              <Link key={s.href} href={s.href} className="flex items-center gap-1 text-solar-yellow font-medium hover:underline">
                {s.label} <ArrowRight size={14} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
