import type { Metadata } from 'next'
import Link from 'next/link'
import { FAQSchema } from '@/components/SchemaOrg'
import FAQSection from '@/components/FAQSection'
import QuoteForm from '@/components/QuoteForm'
import { CheckCircle, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Solar Panel Installation in Puerto Rico',
  description:
    'Kilowatt PR installs residential and commercial solar panel systems across Puerto Rico. Certified technicians, OGPE and LUMA permit management. Free quote.',
  alternates: {
    canonical: 'https://www.kilowattpr.com/en/services/solar-panel-installation',
    languages: {
      'es': 'https://www.kilowattpr.com/servicios/instalacion-paneles-solares',
      'en': 'https://www.kilowattpr.com/en/services/solar-panel-installation',
    },
  },
}

const faqs = [
  {
    question: 'What size solar system do I need in Puerto Rico?',
    answer: 'The size of your solar system depends on your monthly electricity consumption measured in kWh. Residential homes in Puerto Rico typically need between 4kW and 25kW. To determine this accurately, we analyze your last 12 LUMA Energy bills during the free consultation. A properly sized system can eliminate between 80% and 100% of your electric bill.',
  },
  {
    question: 'How does interconnection with LUMA Energy work in Puerto Rico?',
    answer: 'Interconnection with LUMA Energy is the official process to connect your solar system to the electrical grid. Kilowatt PR handles this entire process for you: we prepare the interconnection application, coordinate the LUMA inspection, and ensure your bidirectional meter is installed correctly. This process can take an additional 3 to 6 weeks after installation.',
  },
  {
    question: 'Do I need an OGPE permit to install solar panels in Puerto Rico?',
    answer: 'Yes, solar panel installation in Puerto Rico requires permits from OGPE (Office of Permit Management). This process includes submitting structural and electrical plans. Kilowatt PR manages all these permits as part of the installation service, at no additional cost to the customer.',
  },
  {
    question: 'Can solar panels withstand hurricanes in Puerto Rico?',
    answer: 'The solar panels we install are certified to withstand winds of up to 130\u2013140 mph according to island standards. We install the mounts with stainless steel materials and reinforced fastening systems designed for Puerto Rico\'s hurricane conditions. Additionally, the panels come with a 25-year manufacturer warranty.',
  },
]

export default function SolarPanelInstallationPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />

      <section className="bg-navy-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Solar Panel Installation in{' '}
            <span className="text-solar-yellow">Puerto Rico</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Residential and commercial photovoltaic systems installed by licensed
            electricians and electrical engineers with over 3 decades of experience
            in Puerto Rico.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              Installing solar panels in Puerto Rico is one of the smartest financial
              decisions you can make today. With electricity rates among the highest in
              the United States and a LUMA Energy infrastructure that experiences frequent
              outages, photovoltaic systems offer real independence and measurable savings
              from the very first month.
            </p>
            <p>
              At Kilowatt PR, every installation begins with a complete analysis of your
              electricity consumption and a roof evaluation. We design the system in 3D to
              optimize solar capture based on your property&apos;s specific orientation and
              tilt. Then we manage all OGPE permits and the LUMA Energy interconnection
              process, so you don&apos;t have to do anything.
            </p>
            <p>
              We work with the highest quality solar panels available on the market,
              with 25-year performance warranties. Our inverters and monitoring systems
              let you see in real time how much energy you&apos;re producing, how much
              you&apos;re consuming, and how much you&apos;re saving.
            </p>
            <p>
              The complete process from contract signing to system activation takes
              between 1 and 3 weeks. Physical installation is typically completed in
              1 to 2 days. Throughout the process, your Kilowatt PR project manager
              will be available to answer any questions.
            </p>
            <p>
              The systems we install are specifically designed for Puerto Rico&apos;s
              conditions: hurricane-force wind resistance, tropical heat, high humidity,
              Saharan dust, and coastal saltwater environments. Each system comes with a
              full workmanship warranty in addition to the equipment manufacturer warranties.
            </p>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-bold text-navy-dark mb-6">
              How Does the Installation Process Work?
            </h2>
            <div className="space-y-4">
              {[
                { step: '1', title: 'Free Consultation', desc: 'Consumption analysis, 3D system design, and 25-year savings projection. No cost, no obligation.' },
                { step: '2', title: 'Contract Signing', desc: 'We review all system details, cost, available financing, and work schedule.' },
                { step: '3', title: 'Permits & Final Design', desc: 'We manage OGPE permits and submit the interconnection request to LUMA Energy.' },
                { step: '4', title: 'Installation', desc: 'Our team installs the system in 1\u20132 days with minimal disruption to your daily routine.' },
                { step: '5', title: 'Inspections & Activation', desc: 'We coordinate required inspections and bidirectional meter activation with LUMA Energy.' },
                { step: '6', title: 'Follow-Up', desc: 'We teach you how to monitor your system and remain available for any post-installation questions.' },
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
            <h2 className="text-2xl font-bold text-navy-dark mb-6">What&apos;s Included in Our Installation?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'High-efficiency solar panels',
                'String inverter or microinverters',
                'Stainless steel mounting structure',
                'Wiring and electrical protections',
                'Real-time monitoring system',
                'Full OGPE permit management',
                'LUMA interconnection request',
                '25-year panel warranty',
                'Customer orientation',
                'Post-installation support',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="text-solar-yellow shrink-0" size={16} />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 bg-solar-yellow/10 border border-solar-yellow/30 rounded-xl p-8">
            <h3 className="text-navy-dark font-bold text-lg mb-5 text-center">
              Ready to stop overpaying LUMA Energy?
            </h3>
            <QuoteForm defaultService="Solar panel installation" />
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title="Questions About Solar Installation in Puerto Rico" />

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-bold text-navy-dark mb-4">Related Services</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/en/services/battery-backup-systems', label: 'Battery Backup Systems' },
              { href: '/en/services/roof-sealing', label: 'Roof Sealing' },
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
