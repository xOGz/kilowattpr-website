import type { Metadata } from 'next'
import Link from 'next/link'
import { FAQSchema } from '@/components/SchemaOrg'
import FAQSection from '@/components/FAQSection'
import QuoteForm from '@/components/QuoteForm'
import { Home, CheckCircle, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Roof Sealing in Puerto Rico',
  description:
    'Kilowatt PR offers professional roof sealing and waterproofing in Puerto Rico. 2-year workmanship warranty. Pre-solar installation service.',
  alternates: {
    canonical: 'https://www.kilowattpr.com/en/services/roof-sealing',
    languages: {
      'es': 'https://www.kilowattpr.com/servicios/sellado-de-techo',
      'en': 'https://www.kilowattpr.com/en/services/roof-sealing',
    },
  },
}

const faqs = [
  {
    question: 'Why is it important to seal the roof before installing solar panels?',
    answer: 'Sealing the roof before solar installation is essential for several reasons. First, it ensures that the perforations needed for panel mounts are fully waterproofed, preventing water leaks. Second, if your roof has existing leaks or damage, installing panels on top could worsen the problem and void warranties. A roof in good condition protects your home and ensures the solar installation lasts the projected 25 years.',
  },
  {
    question: 'What types of roofs do you work with for sealing?',
    answer: 'We work with all common roof types in Puerto Rico: flat concrete roofs, metal roofs (zinc), asphalt shingle roofs, and wood roofs. The sealing process varies by material, but in all cases we use high-quality products designed for Puerto Rico\'s tropical climate, resistant to UV, rain, salt air, and extreme temperatures.',
  },
  {
    question: 'How long does roof sealing last?',
    answer: 'A professional roof sealing with the materials we use has a lifespan of 5 to 10 years under normal conditions. We offer a 2-year workmanship warranty on all our sealing jobs. Periodic maintenance and regular inspection can significantly extend the lifespan of the waterproofing treatment.',
  },
  {
    question: 'Can I get roof sealing without installing solar panels?',
    answer: 'Absolutely yes. Our roof sealing and waterproofing service is available independently for any property in Puerto Rico that needs leak protection. Many families hire this service before rainy season or as preparation for a future solar installation. Contact us for a free evaluation of your roof\'s condition.',
  },
]

export default function RoofSealingPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />

      <section className="bg-navy-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 bg-solar-yellow/20 rounded-xl flex items-center justify-center">
              <Home className="text-solar-yellow" size={28} />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Roof Sealing in <span className="text-solar-yellow">Puerto Rico</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Professional waterproofing with a 2-year workmanship warranty. The first
            step toward a safe and long-lasting solar installation.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              In Puerto Rico, a property&apos;s roof faces extreme weather conditions:
              intense tropical rain, constant humidity, hurricane-force winds, UV radiation,
              salt air in coastal areas, and the accumulated weight of materials over time.
              A roof with leaks or structural damage not only compromises your home&apos;s
              health but can also void the warranties of any solar installation placed on it.
            </p>
            <p>
              At Kilowatt PR, we perform a complete roof evaluation before every solar
              panel installation. If we detect areas with damage, leaks, or vulnerabilities,
              we recommend sealing and waterproofing as a prerequisite. This process protects
              your long-term investment and ensures the roof structure adequately supports
              the weight and wind load of the solar system.
            </p>
            <p>
              We use industrial-grade waterproofing products specifically formulated for
              Puerto Rico&apos;s tropical climate. Our materials are resistant to the UV
              rays that deteriorate other products on the island, intense rains, and
              coastal salt air. The work is performed by our licensed electricians and
              electrical engineers with over 3 decades of experience in Puerto Rico,
              ensuring correct application at all times.
            </p>
            <p>
              In addition to pre-solar installation sealing, we offer this service
              independently for any property that needs waterproofing. Whether as
              preparation for the rainy season or to repair existing leaks, our team
              can help.
            </p>
            <p>
              All our roof sealing jobs include a 2-year workmanship warranty. If any
              issue related to our application arises during this period, we address it
              at no additional cost. This warranty is part of our commitment to quality
              in every project we complete.
            </p>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-bold text-navy-dark mb-6">What&apos;s Included in the Sealing Process?</h2>
            <div className="space-y-4">
              {[
                { step: '1', title: 'Roof Inspection', desc: 'Complete visual evaluation to identify cracks, leaks, structural damage, and vulnerable areas.' },
                { step: '2', title: 'Professional Cleaning', desc: 'Pressure washing of the roof to remove moss, mold, dirt, and loose materials that affect adhesion.' },
                { step: '3', title: 'Crack Repair', desc: 'Sealing of cracks, joints, and penetration points with specialized sealant before waterproofing application.' },
                { step: '4', title: 'Waterproofing Application', desc: 'Uniform application of the sealing product in layers according to manufacturer specifications and roof conditions.' },
                { step: '5', title: 'Final Inspection', desc: 'Review of the entire treated area to guarantee complete and uniform coverage before delivering the work to the customer.' },
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
            <h2 className="text-2xl font-bold text-navy-dark mb-6">Included in Every Sealing Job</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Structural roof inspection',
                'Pressure washing included',
                'Crack and joint repair',
                'High-quality waterproofing',
                'Professional layered application',
                'Penetration point treatment',
                '2-year workmanship warranty',
                'Roof condition report',
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
              Protect your roof before the next rainy season
            </h3>
            <QuoteForm defaultService="Roof sealing" />
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title="Questions About Roof Sealing in Puerto Rico" />

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-bold text-navy-dark mb-4">Related Services</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/en/services/solar-panel-installation', label: 'Solar Panel Installation' },
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
