import type { Metadata } from 'next'
import Link from 'next/link'
import { Check, X, Star, Shield, Clock, MapPin, Phone } from 'lucide-react'
import { ArticleSchema, FAQSchema } from '@/components/SchemaOrg'
import FAQSection from '@/components/FAQSection'

export const metadata: Metadata = {
  title: 'Why Choose Kilowatt PR? — Comparison with the Competition',
  description:
    'Compare Kilowatt PR with national chains and typical local installers. Licensed master electrician, PE engineer, transparent pricing from $13K, battery included, 4.9 stars on Google.',
  alternates: {
    canonical: 'https://www.kilowattpr.com/en/comparison/why-kilowatt-pr',
    languages: {
      es: 'https://www.kilowattpr.com/comparacion/por-que-kilowatt-pr',
      en: 'https://www.kilowattpr.com/en/comparison/why-kilowatt-pr',
    },
  },
}

const faqs = [
  {
    question: 'What credentials does Kilowatt PR have?',
    answer:
      'Kilowatt PR has Xavier Acevedo Santiago, founder and licensed master electrician (#21309), who supervises every installation. Eng. Julio A. Santiago Perez (PE #6083), COO and engineering advisor, backs the technical design of every system with over 50 years of professional experience.',
  },
  {
    question: 'Why do you include battery in all systems?',
    answer:
      'In Puerto Rico, battery backup is not a luxury — it is a necessity. With the instability of the LUMA Energy grid and hurricane season, a solar system without a battery leaves you without power during outages. That is why all our systems starting at $13,000 include battery backup.',
  },
  {
    question: 'What does "free 3-month inspection" mean?',
    answer:
      'Three months after installation, our team returns to your home to inspect the complete system at no additional cost. We verify panel performance, electrical connections, battery status, and actual production vs. projected. This follow-up ensures everything is working at 100%.',
  },
  {
    question: 'Do you cover all of Puerto Rico?',
    answer:
      'Yes. Kilowatt PR serves all 78 municipalities in Puerto Rico. Our operations base in Aguada allows us to efficiently cover the entire west coast, and our team regularly travels to all regions of the island.',
  },
]

interface ComparisonFeature {
  readonly label: string
  readonly kilowatt: boolean
  readonly nationalChain: boolean
  readonly localInstaller: boolean
}

const features: readonly ComparisonFeature[] = [
  {
    label: 'Licensed master electrician',
    kilowatt: true,
    nationalChain: false,
    localInstaller: false,
  },
  {
    label: 'PE engineering advisor',
    kilowatt: true,
    nationalChain: false,
    localInstaller: false,
  },
  {
    label: 'Direct installation (no subcontractors)',
    kilowatt: true,
    nationalChain: false,
    localInstaller: true,
  },
  {
    label: 'Transparent pricing from $13K',
    kilowatt: true,
    nationalChain: false,
    localInstaller: false,
  },
  {
    label: 'Battery included',
    kilowatt: true,
    nationalChain: false,
    localInstaller: false,
  },
  {
    label: 'Hurricane-rated design',
    kilowatt: true,
    nationalChain: false,
    localInstaller: false,
  },
  {
    label: 'OGPE/LUMA experience',
    kilowatt: true,
    nationalChain: false,
    localInstaller: true,
  },
  {
    label: 'Response time < 2 hours',
    kilowatt: true,
    nationalChain: false,
    localInstaller: false,
  },
  {
    label: '25-year panel warranty',
    kilowatt: true,
    nationalChain: true,
    localInstaller: false,
  },
  {
    label: 'Free 3-month inspection',
    kilowatt: true,
    nationalChain: false,
    localInstaller: false,
  },
  {
    label: 'Verified reviews (4.9 stars on Google)',
    kilowatt: true,
    nationalChain: false,
    localInstaller: false,
  },
]

function FeatureCheck({ value }: { readonly value: boolean }) {
  return value ? (
    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-green-100">
      <Check className="text-green-600" size={16} strokeWidth={3} />
    </span>
  ) : (
    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-red-50">
      <X className="text-red-400" size={16} strokeWidth={3} />
    </span>
  )
}

export default function WhyKilowattPage() {
  const publishDate = '2026-03-28'
  const url = 'https://www.kilowattpr.com/en/comparison/why-kilowatt-pr'

  return (
    <>
      <ArticleSchema
        title="Why Choose Kilowatt PR? — Comparison with the Competition"
        description="Compare Kilowatt PR with national chains and typical local installers in Puerto Rico."
        datePublished={publishDate}
        url={url}
      />
      <FAQSchema faqs={faqs} />

      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="bg-solar-yellow/10 text-solar-yellow font-medium px-3 py-1 rounded-full text-sm">
            Full Comparison
          </span>

          <h1 className="text-3xl md:text-4xl font-bold text-navy-dark mt-4 mb-4">
            Why Choose Kilowatt PR?
          </h1>

          <p className="article-intro text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Not all solar installers are the same. Compare what Kilowatt PR offers
            against a typical national chain and a typical local installer in Puerto Rico.
          </p>
        </div>

        {/* 3-Column Comparison Chart — Desktop */}
        <div className="hidden md:block overflow-x-auto mb-14">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-navy-dark text-white">
                <th className="text-left px-5 py-4 font-semibold rounded-tl-lg w-[35%]">
                  Feature
                </th>
                <th className="text-center px-4 py-4 font-semibold w-[22%]">
                  <span className="flex items-center justify-center gap-2">
                    <Star className="text-solar-yellow" size={16} />
                    Kilowatt PR
                  </span>
                </th>
                <th className="text-center px-4 py-4 font-semibold w-[22%]">
                  Typical National Chain
                </th>
                <th className="text-center px-4 py-4 font-semibold rounded-tr-lg w-[21%]">
                  Typical Local Installer
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((row, i) => (
                <tr
                  key={row.label}
                  className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
                >
                  <td className="px-5 py-3.5 font-medium text-navy-dark text-sm border-b border-gray-100">
                    {row.label}
                  </td>
                  <td className="px-4 py-3.5 text-center border-b border-gray-100">
                    <span className="flex justify-center">
                      <FeatureCheck value={row.kilowatt} />
                    </span>
                  </td>
                  <td className="px-4 py-3.5 text-center border-b border-gray-100">
                    <span className="flex justify-center">
                      <FeatureCheck value={row.nationalChain} />
                    </span>
                  </td>
                  <td className="px-4 py-3.5 text-center border-b border-gray-100">
                    <span className="flex justify-center">
                      <FeatureCheck value={row.localInstaller} />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 3-Column Comparison — Mobile Cards */}
        <div className="md:hidden space-y-3 mb-14">
          {features.map((row) => (
            <div key={row.label} className="bg-gray-50 rounded-lg p-4">
              <p className="font-semibold text-navy-dark text-sm mb-3">{row.label}</p>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div>
                  <p className="text-xs font-semibold text-solar-yellow mb-1">Kilowatt PR</p>
                  <span className="flex justify-center">
                    <FeatureCheck value={row.kilowatt} />
                  </span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 mb-1">National Chain</p>
                  <span className="flex justify-center">
                    <FeatureCheck value={row.nationalChain} />
                  </span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 mb-1">Typical Local</p>
                  <span className="flex justify-center">
                    <FeatureCheck value={row.localInstaller} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Credentials section */}
        <div className="bg-navy-dark rounded-2xl p-8 md:p-10 mb-14 text-white">
          <h2 className="text-2xl font-bold mb-6 text-center">Our Credentials</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 rounded-xl p-6">
              <Shield className="text-solar-yellow mb-3" size={28} />
              <p className="font-bold text-lg mb-1">Xavier Acevedo Santiago</p>
              <p className="text-solar-yellow font-medium text-sm mb-2">
                Founder & Licensed Master Electrician
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                Master electrician license #21309. Personally supervises every
                installation. Over a decade of experience in solar systems in Puerto Rico.
              </p>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <Shield className="text-solar-yellow mb-3" size={28} />
              <p className="font-bold text-lg mb-1">Eng. Julio A. Santiago Perez</p>
              <p className="text-solar-yellow font-medium text-sm mb-2">
                COO & Engineering Advisor — PE #6083
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                Electrical engineer with 50+ years of experience. Former NASA engineer and
                former professor at the University of Puerto Rico, Mayaguez. Backs the technical
                design of every system.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/20">
            <div className="flex items-center justify-center gap-2 mb-1">
              <Star className="text-solar-yellow fill-solar-yellow" size={20} />
              <Star className="text-solar-yellow fill-solar-yellow" size={20} />
              <Star className="text-solar-yellow fill-solar-yellow" size={20} />
              <Star className="text-solar-yellow fill-solar-yellow" size={20} />
              <Star className="text-solar-yellow fill-solar-yellow" size={20} />
            </div>
            <p className="text-center text-gray-300 text-sm">
              4.9 stars on Google — verified reviews on Google Business Profile
            </p>
          </div>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          <div className="bg-solar-yellow/10 rounded-xl p-5 text-center">
            <Star className="text-solar-yellow mx-auto mb-2" size={24} />
            <p className="text-2xl font-bold text-navy-dark">4.9 ★</p>
            <p className="text-xs text-gray-500 mt-1">Verified reviews</p>
          </div>
          <div className="bg-solar-yellow/10 rounded-xl p-5 text-center">
            <Shield className="text-solar-yellow mx-auto mb-2" size={24} />
            <p className="text-2xl font-bold text-navy-dark">10+</p>
            <p className="text-xs text-gray-500 mt-1">Years of experience</p>
          </div>
          <div className="bg-solar-yellow/10 rounded-xl p-5 text-center">
            <MapPin className="text-solar-yellow mx-auto mb-2" size={24} />
            <p className="text-2xl font-bold text-navy-dark">78</p>
            <p className="text-xs text-gray-500 mt-1">Municipalities covered</p>
          </div>
          <div className="bg-solar-yellow/10 rounded-xl p-5 text-center">
            <Clock className="text-solar-yellow mx-auto mb-2" size={24} />
            <p className="text-2xl font-bold text-navy-dark">2 hrs</p>
            <p className="text-xs text-gray-500 mt-1">Response time</p>
          </div>
        </div>

        {/* WhatsApp CTA */}
        <div className="bg-solar-yellow/10 border border-solar-yellow/30 rounded-xl p-8 text-center mb-14">
          <h2 className="text-navy-dark font-bold text-xl mb-3">
            Ready for Solar Energy with a Team That Delivers?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Request a free quote with a complete cost breakdown. Solar systems
            with battery included starting at $13,000. No commitments, no fine print.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/17874312275?text=Hi%2C%20I%27m%20interested%20in%20a%20solar%20system%20quote%20with%20Kilowatt%20PR."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              <Phone size={18} />
              Free Quote via WhatsApp
            </a>
            <a
              href="tel:+17874312275"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-navy-dark text-navy-dark rounded-lg font-semibold hover:bg-navy-dark hover:text-white transition-colors"
            >
              Call 787-431-2275
            </a>
          </div>
        </div>
      </article>

      <FAQSection faqs={faqs} title="Frequently Asked Questions" />

      {/* Related links */}
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-bold text-navy-dark mb-4">Detailed Comparisons</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/comparacion/kilowatt-pr-vs-tesla-solar', label: 'Kilowatt PR vs Tesla Solar' },
              { href: '/comparacion/kilowatt-pr-vs-sunnova', label: 'Kilowatt PR vs Sunnova' },
              { href: '/comparacion/instalador-solar-local-vs-cadena-nacional', label: 'Local Installer vs National Chain' },
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
