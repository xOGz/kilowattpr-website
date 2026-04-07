import type { Metadata } from 'next'
import Link from 'next/link'
import { FAQSchema } from '@/components/SchemaOrg'
import FAQSection from '@/components/FAQSection'
import QuoteForm from '@/components/QuoteForm'
import { Battery, CheckCircle, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Solar Battery Backup Systems in Puerto Rico',
  description:
    'Total energy independence during LUMA Energy outages. Solar battery backup systems installed by Kilowatt PR across Puerto Rico. Up to 24 hours of backup power.',
  alternates: {
    canonical: 'https://www.kilowattpr.com/en/services/battery-backup-systems',
    languages: {
      'es': 'https://www.kilowattpr.com/servicios/sistemas-con-bateria',
      'en': 'https://www.kilowattpr.com/en/services/battery-backup-systems',
    },
  },
}

const faqs = [
  {
    question: 'How long does the battery last during a LUMA Energy outage?',
    answer: 'A standard battery system can provide between 10 and 24 hours of electricity for essential home appliances, depending on consumption. During the day, solar panels recharge the battery while you use energy simultaneously. At night or on cloudy days, the battery uses stored energy. We design each system according to your specific backup needs.',
  },
  {
    question: 'Can I add a battery to my existing solar system in Puerto Rico?',
    answer: 'In many cases, yes, it is possible to add battery storage to an existing solar system in Puerto Rico. It depends on the type of inverter you currently have installed. If you have a grid-tie inverter, it may require replacing it with a hybrid inverter. During the evaluation, our team analyzes your current system and presents the available options and their costs.',
  },
  {
    question: 'What appliances can a solar battery power during an outage?',
    answer: 'A properly sized battery system can power refrigerators, LED lights, fans, televisions, essential medical devices, phone chargers, and internet routers. High-consumption appliances like window air conditioners and dryers require larger capacity batteries. We help you prioritize based on your needs and choose the right battery size.',
  },
  {
    question: 'Do solar batteries require maintenance in Puerto Rico?',
    answer: 'Modern lithium batteries require very little maintenance. The integrated monitoring system constantly checks the battery status and alerts us to any irregularities. We recommend including a battery system review in the semi-annual panel maintenance. Puerto Rico\'s tropical heat can affect battery lifespan, so we install with proper ventilation.',
  },
]

export default function BatteryBackupSystemsPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />

      <section className="bg-navy-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 bg-solar-yellow/20 rounded-xl flex items-center justify-center">
              <Battery className="text-solar-yellow" size={28} />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Solar Battery Backup Systems in{' '}
            <span className="text-solar-yellow">Puerto Rico</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Real energy independence during LUMA Energy outages. Specifically designed
            for Puerto Rico&apos;s conditions.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              Puerto Rico has one of the highest outage rates of any US territory.
              After Hurricane Maria, many families and businesses were without electricity
              for weeks or months. Solar battery backup systems are the ultimate solution
              for energy independence in Puerto Rico.
            </p>
            <p>
              A solar system with battery storage works differently from a conventional
              grid-connected solar system. When panels produce more energy than you
              consume, the excess is stored in the battery instead of being exported
              to LUMA Energy. When panels don&apos;t produce enough (at night or during
              an outage), the battery provides the necessary energy.
            </p>
            <p>
              At Kilowatt PR, we install state-of-the-art lithium battery systems
              with the most reliable technology available on the market. Our licensed
              electricians and electrical engineers with over 3 decades of experience
              in Puerto Rico know exactly how to size and configure these systems for
              local conditions.
            </p>
            <p>
              A standard battery system can provide up to 24 hours of electricity
              for essential appliances: refrigeration, lighting, fans, medical devices,
              and communications. For homes or businesses with higher demand, we design
              multi-battery systems that extend autonomy even further.
            </p>
            <p>
              The installation includes a hybrid inverter that intelligently manages
              energy between the panels, battery, home consumption, and the LUMA Energy
              grid. The system automatically disconnects from the grid when it detects
              an outage, protecting LUMA technicians working on the lines, and
              automatically reconnects when service is restored.
            </p>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-bold text-navy-dark mb-6">What&apos;s Included in the Battery System?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'High-efficiency solar panels',
                'High-capacity lithium battery',
                'Intelligent hybrid inverter',
                'Real-time monitoring system',
                'Automatic disconnect during outages',
                'OGPE permit management',
                'LUMA Energy interconnection',
                'Installation with proper ventilation',
                'Load priority configuration',
                'Full equipment warranty',
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
              The next LUMA Energy outage won&apos;t affect you
            </h3>
            <QuoteForm defaultService="Solar battery backup system" />
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title="Questions About Battery Backup Systems in Puerto Rico" />

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-bold text-navy-dark mb-4">Related Services</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/en/services/solar-panel-installation', label: 'Solar Panel Installation' },
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
