import type { Metadata } from 'next'
import { FAQSchema } from '@/components/SchemaOrg'
import SolarCalculator from '@/components/SolarCalculator'
import FAQSection from '@/components/FAQSection'

export const metadata: Metadata = {
  title: 'Solar Calculator — How Much Can You Save with Solar Energy?',
  description:
    'Calculate your solar savings in Puerto Rico. Enter your LUMA bill and discover the recommended system size, estimated cost, and return on investment.',
  alternates: {
    canonical: 'https://www.kilowattpr.com/en/solar-calculator',
    languages: {
      'es': 'https://www.kilowattpr.com/calculadora-solar',
      'en': 'https://www.kilowattpr.com/en/solar-calculator',
    },
  },
  openGraph: {
    title: 'Solar Calculator | Kilowatt PR',
    description:
      'How much can you save with solar energy in Puerto Rico? Calculate your savings based on your LUMA bill.',
    url: 'https://www.kilowattpr.com/en/solar-calculator',
    locale: 'en_US',
  },
}

const faqs = [
  {
    question: 'How accurate is this calculator?',
    answer:
      'This calculator provides an estimate based on average LUMA Energy rates and typical solar production in Puerto Rico (1,600 kWh/kW/year). Your final quote will be more precise because it includes a 3D design of your specific roof, shade analysis, and your actual consumption over the last 12 months.',
  },
  {
    question: 'Does the estimated cost include a battery?',
    answer:
      'Systems starting at $13,000 include a basic backup battery. Larger systems may require additional batteries. During the free consultation, we present options with different backup capacities (12, 24, or 48 hours).',
  },
  {
    question: 'How is the return on investment calculated?',
    answer:
      'The return on investment divides the system cost by your estimated annual savings. We also factor in a 3% annual increase in LUMA rates, which makes your 25-year savings significantly higher than a simple calculation. Historically, LUMA has increased rates by more than 3% per year.',
  },
  {
    question: 'Can I reduce my LUMA bill by 95%?',
    answer:
      'Yes. With a solar system properly sized for your consumption, you can reduce your LUMA bill by up to 95%. The remaining 5% corresponds to fixed grid charges that LUMA bills regardless of your consumption. Some of our customers report LUMA bills of less than $15 per month.',
  },
]

export default function SolarCalculatorPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />

      {/* Hero */}
      <section className="bg-surface text-on-surface py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-on-surface">
              How Much Can You <span className="text-primary-container">Save</span> with Solar Energy?
            </h1>
            <p className="text-xl text-on-surface-variant leading-relaxed">
              Enter your monthly LUMA Energy bill and discover the recommended system
              size, how much you&apos;d save per month, and how many years it takes to recover your investment.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16 section-light-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <SolarCalculator />
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 section-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-[#121240] text-center mb-10">
            How Does the Calculation Work?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-display font-black mx-auto mb-4"
                style={{ background: 'linear-gradient(135deg, #E09500, #F5A623)', color: '#3A2400' }}
              >
                1
              </div>
              <h3 className="font-headline font-semibold text-[#121240] mb-2">Your LUMA Bill</h3>
              <p className="text-[#4A4A6A] text-sm leading-relaxed">
                We use your monthly bill to estimate your annual electricity consumption in kWh.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-display font-black mx-auto mb-4"
                style={{ background: 'linear-gradient(135deg, #E09500, #F5A623)', color: '#3A2400' }}
              >
                2
              </div>
              <h3 className="font-headline font-semibold text-[#121240] mb-2">System Size</h3>
              <p className="text-[#4A4A6A] text-sm leading-relaxed">
                We calculate the kW needed based on typical solar production in Puerto Rico
                (1,600 kWh per kW per year).
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-display font-black mx-auto mb-4"
                style={{ background: 'linear-gradient(135deg, #E09500, #F5A623)', color: '#3A2400' }}
              >
                3
              </div>
              <h3 className="font-headline font-semibold text-[#121240] mb-2">Your Savings</h3>
              <p className="text-[#4A4A6A] text-sm leading-relaxed">
                We project your monthly savings, return on investment, and total savings over 25 years
                including rate increases.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={faqs} title="Frequently Asked Questions About the Solar Calculator" />
    </>
  )
}
