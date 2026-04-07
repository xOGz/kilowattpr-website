import type { Metadata } from 'next'
import Link from 'next/link'
import { FAQSchema } from '@/components/SchemaOrg'
import FAQSection from '@/components/FAQSection'
import QuoteForm from '@/components/QuoteForm'
import { Wrench, CheckCircle, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Solar Panel Maintenance & Cleaning in Puerto Rico',
  description:
    'Solar panel maintenance and cleaning service in Puerto Rico. Kilowatt PR: every 6\u20138 months standard, every 4\u20136 months in coastal areas. Certified technicians.',
  alternates: {
    canonical: 'https://www.kilowattpr.com/en/services/maintenance',
    languages: {
      'es': 'https://www.kilowattpr.com/servicios/mantenimiento-lavado',
      'en': 'https://www.kilowattpr.com/en/services/maintenance',
    },
  },
}

const faqs = [
  {
    question: 'How often should solar panels be cleaned in Puerto Rico?',
    answer: 'In Puerto Rico, we recommend maintenance and cleaning every 6 to 8 months for systems in the island\'s interior. For properties in coastal areas, the ideal frequency is every 4 to 6 months, as the accumulation of salt, Saharan dust, and humidity is significantly higher. Storms and rainy seasons also increase the need for preventive maintenance. A dirty panel can lose between 15% and 25% of its efficiency.',
  },
  {
    question: 'What does the preventive maintenance service include?',
    answer: 'Our service includes professional panel cleaning with purified water and specialized solutions, visual inspection of solar cells to detect cracks or damage, inverter and electrical connection review, monitoring system verification, and a written report on the system\'s condition with recommendations. If we detect any issue during the inspection, we communicate it to you immediately with solution options.',
  },
  {
    question: 'Can I clean the solar panels myself?',
    answer: 'Technically it is possible, but we don\'t recommend it for several reasons. Climbing onto the roof without proper safety equipment represents a real risk. Using incorrect cleaning products can damage the anti-reflective coating on the panels and void the warranty. Additionally, without access to the monitoring system and technical knowledge, you wouldn\'t be able to detect electrical or degradation issues that can only be identified with a professional inspection.',
  },
  {
    question: 'Is maintenance necessary if my panels look clean?',
    answer: 'Yes, even though panels may look clean to the naked eye, they accumulate a thin layer of dust, salt, bird droppings, and biofilm that reduces light transmission. Saharan dust, which regularly reaches Puerto Rico between May and August, forms an especially hard-to-see but very effective layer at reducing production. Additionally, internal visual inspection and electrical component review is only possible with a professional visit.',
  },
]

export default function MaintenancePage() {
  return (
    <>
      <FAQSchema faqs={faqs} />

      <section className="bg-navy-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 bg-solar-yellow/20 rounded-xl flex items-center justify-center">
              <Wrench className="text-solar-yellow" size={28} />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Solar Panel Maintenance &amp; Cleaning in{' '}
            <span className="text-solar-yellow">Puerto Rico</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Keep your solar system at 100% efficiency. Maintenance programs designed
            for Puerto Rico&apos;s unique climate conditions.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              Installing a solar system is just the beginning. For your investment to
              produce the maximum return over the system&apos;s 25-year lifespan, regular
              maintenance is essential. Puerto Rico presents unique climate conditions that
              make maintenance especially important: Saharan dust, sea salt, high tropical
              humidity, bird droppings, and vegetation that reduces light from certain
              orientations.
            </p>
            <p>
              A dirty solar panel can lose between 15% and 25% of its efficiency, depending
              on the type and amount of contamination. On a 10kW system, that represents a
              significant production loss that translates into more money paid to LUMA Energy
              than necessary. Regular maintenance prevents this loss and protects your
              panel warranty.
            </p>
            <p>
              Our team of licensed electricians and electrical engineers with over 3 decades
              of experience in Puerto Rico performs maintenance with purified water and
              cleaning solutions specifically formulated for solar panels. We don&apos;t use
              mineral-laden water that leaves stains or abrasive products that damage panel
              coatings. Every cleaning follows manufacturer-recommended protocols.
            </p>
            <p>
              We recommend maintenance every 6 to 8 months for most properties in Puerto Rico.
              For properties in coastal areas, we increase the frequency to every 4 to 6 months
              due to salt buildup and greater exposure to sea breezes carrying Saharan dust.
              We help you establish a customized maintenance schedule based on your location
              and system type.
            </p>
            <p>
              In addition to cleaning, every maintenance visit includes a complete technical
              inspection of the system. We check the inverter, electrical connections,
              physical condition of the panels, and the monitoring system. If we detect
              any anomaly, we inform you immediately with available solution options.
            </p>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-bold text-navy-dark mb-6">What&apos;s Included in Maintenance?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Purified water cleaning',
                'Panel-specific cleaning solutions',
                'Visual inspection of solar cells',
                'Inverter and connection review',
                'Monitoring system verification',
                'Mount and structure inspection',
                'New shade detection',
                'Written system status report',
                'Preventive recommendations',
                'Next service coordination',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="text-solar-yellow shrink-0" size={16} />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="font-bold text-navy-dark mb-2">Interior / General</h3>
              <p className="text-3xl font-black text-solar-yellow mb-1">6&ndash;8 months</p>
              <p className="text-sm text-gray-600">Recommended frequency for properties in the interior and non-coastal areas of Puerto Rico.</p>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
              <h3 className="font-bold text-navy-dark mb-2">Coastal Areas</h3>
              <p className="text-3xl font-black text-solar-yellow mb-1">4&ndash;6 months</p>
              <p className="text-sm text-gray-600">Higher frequency due to salt buildup, sea breeze, and Saharan dust along the coast.</p>
            </div>
          </div>

          <div className="mt-12 bg-solar-yellow/10 border border-solar-yellow/30 rounded-xl p-8">
            <h3 className="text-navy-dark font-bold text-lg mb-5 text-center">
              When was the last time your panels were cleaned?
            </h3>
            <QuoteForm defaultService="Maintenance and cleaning" />
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title="Questions About Solar Maintenance in Puerto Rico" />

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-bold text-navy-dark mb-4">Related Services</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/en/services/solar-panel-installation', label: 'Solar Panel Installation' },
              { href: '/en/services/battery-backup-systems', label: 'Battery Backup Systems' },
              { href: '/en/services/roof-sealing', label: 'Roof Sealing' },
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
