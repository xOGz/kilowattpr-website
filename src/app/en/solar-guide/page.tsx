import type { Metadata } from 'next'
import { BookOpen, CheckCircle, Sun, Battery, Shield, Zap } from 'lucide-react'
import LeadCaptureForm from '@/components/LeadCaptureForm'

export const metadata: Metadata = {
  title: 'Complete Guide: Solar Energy in Puerto Rico 2026 — Free Download',
  description:
    'Download the free definitive guide to solar energy in Puerto Rico. Costs, process, batteries, LUMA, maintenance, and more. All in one document.',
  alternates: {
    canonical: 'https://www.kilowattpr.com/en/solar-guide',
    languages: {
      'es': 'https://www.kilowattpr.com/guia-solar',
      'en': 'https://www.kilowattpr.com/en/solar-guide',
    },
  },
  openGraph: {
    title: 'Solar Guide Puerto Rico 2026 | Kilowatt PR',
    description:
      'Everything you need to know about solar energy in Puerto Rico in one document. Free download.',
    url: 'https://www.kilowattpr.com/en/solar-guide',
    locale: 'en_US',
  },
}

const chapters = [
  {
    icon: Sun,
    title: 'How Does Solar Energy Work?',
    desc: 'Simple explanation of the process: panels, inverter, battery, bidirectional meter, and LUMA.',
  },
  {
    icon: Zap,
    title: 'The Reality of LUMA Energy',
    desc: 'Why Puerto Rico has the highest electricity rates in the US and how solar protects you.',
  },
  {
    icon: Battery,
    title: 'Batteries: Do I Need One?',
    desc: 'Why a battery is essential in PR, how to size it, and what to expect during a blackout.',
  },
  {
    icon: Shield,
    title: 'Hurricanes and Resilience',
    desc: 'How modern solar systems withstand category 5 hurricanes and keep your home powered.',
  },
  {
    icon: CheckCircle,
    title: 'The Step-by-Step Process',
    desc: 'From the free consultation to activation: OGPE permits, LUMA interconnection, real timelines.',
  },
  {
    icon: BookOpen,
    title: 'Buyer\'s Checklist',
    desc: '10 questions you should ask before hiring a solar installer in Puerto Rico.',
  },
]

export default function SolarGuidePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-surface text-on-surface py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="chip-gold inline-flex items-center gap-2 mb-6">
                <BookOpen size={12} />
                FREE DOWNLOAD
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-on-surface">
                Complete Guide: Solar Energy in{' '}
                <span className="text-primary-container">Puerto Rico 2026</span>
              </h1>
              <p className="text-xl text-on-surface-variant leading-relaxed mb-6">
                Everything you need to know before installing solar panels — real costs,
                process, batteries, LUMA, hurricanes, and maintenance. In one document,
                written by our engineering team.
              </p>
              <div className="flex flex-wrap gap-3 text-sm text-on-surface-variant">
                <span className="flex items-center gap-1.5">
                  <CheckCircle size={14} className="text-primary-container" /> Free, no obligation
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle size={14} className="text-primary-container" /> Real PR data
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle size={14} className="text-primary-container" /> Written by a PE engineer
                </span>
              </div>
            </div>
            <div className="bg-surface-container-high rounded-2xl p-8">
              <h3 className="font-headline font-semibold text-on-surface text-lg mb-2">
                Download the Free Guide
              </h3>
              <p className="text-on-surface-variant text-sm mb-5">
                Enter your email and we&apos;ll send you the guide instantly.
              </p>
              <LeadCaptureForm source="solar-guide-en" buttonText="Download Free Guide" />
            </div>
          </div>
        </div>
      </section>

      {/* What's inside */}
      <section className="py-20 section-light-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-display-md leading-tight text-[#121240]">
              What&apos;s Inside the Guide?
            </h2>
            <p className="font-body text-body-lg mt-4 max-w-2xl mx-auto text-[#4A4A6A]">
              6 chapters with all the information you need to make the best decision.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {chapters.map((ch) => (
              <div key={ch.title} className="card-light">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: 'rgba(245, 166, 35, 0.1)' }}
                >
                  <ch.icon className="text-[#E09500]" size={24} />
                </div>
                <h3 className="font-headline font-semibold text-[#121240] mb-2">{ch.title}</h3>
                <p className="text-[#4A4A6A] text-body-md leading-relaxed">{ch.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 section-cta">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-[#3A2400] mb-4">
            Prefer a Personalized Consultation?
          </h2>
          <p className="text-lg text-[#6B4400] mb-8 leading-relaxed">
            The guide gives you the foundation. The free consultation gives you a 3D design
            of your roof, consumption analysis, and an exact quote. No obligation.
          </p>
          <a
            href="https://wa.me/17874312275"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base px-8 py-4 inline-flex"
          >
            Free Quote via WhatsApp
          </a>
        </div>
      </section>
    </>
  )
}
