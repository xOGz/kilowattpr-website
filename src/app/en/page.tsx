import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Sun, Battery, Wrench, Star, CheckCircle, Phone, MessageCircle,
  ArrowRight, Shield, Zap,
} from 'lucide-react'
import QuoteForm from '@/components/QuoteForm'
import { LocalBusinessSchema, FAQSchema } from '@/components/SchemaOrg'
import FAQSection from '@/components/FAQSection'
import EnglishHero from '@/components/EnglishHero'
import EnglishTrustBar from '@/components/EnglishTrustBar'
import EnglishTestimonialsSection from '@/components/EnglishTestimonialsSection'
import EnglishCTAHeading from '@/components/EnglishCTAHeading'

export const metadata: Metadata = {
  title: 'Solar Panels & Electrical Contractor in Puerto Rico',
  description:
    'Solar panel installation from $13,000 in Puerto Rico. Licensed electricians, battery backup, net metering. 4.9★ on Google — 10+ verified reviews. Free quote.',
  alternates: {
    canonical: 'https://www.kilowattpr.com/en',
    languages: {
      'es': 'https://www.kilowattpr.com',
      'en': 'https://www.kilowattpr.com/en',
    },
  },
  openGraph: {
    title: 'Kilowatt PR | Solar Panels from $13,000 in Puerto Rico',
    description:
      'Licensed electricians with 30+ years. Solar installation, batteries, electrical contractor. 4.9★ on Google. Free quote today.',
    url: 'https://www.kilowattpr.com/en',
    locale: 'en_US',
  },
}

const services = [
  {
    icon: Sun,
    title: 'Solar Panel Installation',
    desc: 'Residential and commercial photovoltaic systems designed for Puerto Rico\'s climate conditions.',
    href: '/en/services/solar-panel-installation',
  },
  {
    icon: Battery,
    title: 'Battery Backup Systems',
    desc: 'Full energy independence during LUMA Energy outages. Up to 24 hours of backup power.',
    href: '/en/services/battery-backup-systems',
  },
  {
    icon: Zap,
    title: 'Electrical Contractor',
    desc: 'Residential & commercial electrical contractor services. Meter base repairs with LUMA certifications.',
    href: '/servicios/contratista-electrico',
  },
  {
    icon: Wrench,
    title: 'Maintenance & Cleaning',
    desc: 'Professional cleaning every 6-8 months to maintain maximum solar panel efficiency.',
    href: '/en/services/maintenance',
  },
]

const differentiators = [
  {
    icon: CheckCircle,
    title: 'PE Engineer with 50+ Years',
    desc: 'Every system is designed by Eng. Julio A. Santiago Pérez (PE #6083), a licensed electrical engineer with 50+ years of experience, former NASA engineer and former professor at UPR Mayagüez. Real engineering, not salespeople.',
  },
  {
    icon: Shield,
    title: 'Hurricane Resistant',
    desc: 'Systems engineered for Puerto Rico\'s extreme conditions: hurricanes, tropical heat, and Saharan dust. Panels with 25-year warranty, inverters and batteries with 5 to 10-year local warranties.',
  },
  {
    icon: Zap,
    title: 'LUMA Independence',
    desc: 'Battery backup included in our most popular systems. Up to 24 hours of electricity during LUMA Energy outages. Your family protected when the grid fails.',
  },
  {
    icon: Star,
    title: '4.9 Stars on Google',
    desc: 'Our reputation is built by our customers. With 4.9 stars on Google, we are the most trusted solar company in Puerto Rico.',
  },
]

const steps = [
  {
    num: '01',
    title: 'Free Consultation',
    desc: 'We analyze your electricity consumption, design your system in 3D, and present a 25-year savings projection — no cost, no obligation.',
  },
  {
    num: '02',
    title: 'Design & Permits',
    desc: 'We handle all permitting with OGPE and the interconnection request with LUMA Energy. You don\'t have to do anything.',
  },
  {
    num: '03',
    title: 'Installation & Activation',
    desc: 'Our team installs your system in 1-2 days. From contract to production: 1-3 weeks. You start saving from month one.',
  },
]

const faqs = [
  {
    question: 'How much does a solar system cost in Puerto Rico?',
    answer:
      'A residential solar system in Puerto Rico starts at $13,000 and up, depending on your home\'s electricity consumption and the system size required or desired. The most popular systems start at 4 kW solar and 10 kWh battery, and for residential we\'ve worked up to 25 kW solar and 64+ kWh. During the free consultation, we present a detailed analysis of the cost and projected savings over 7 years.',
  },
  {
    question: 'How long does solar installation take in Puerto Rico?',
    answer:
      'The complete process from contract signing to your system producing energy takes between 1 and 3 weeks. This includes obtaining permits from OGPE (Office of Permit Management), interconnection approval with LUMA Energy, equipment delivery, and physical installation. The installation itself typically takes 1 to 2 days. We handle the entire permitting process for you — you don\'t have to do anything.',
  },
  {
    question: 'How often should solar panels be cleaned?',
    answer:
      'We recommend maintenance and cleaning every 6 to 8 months for systems in interior and central Puerto Rico. For properties in coastal areas, the ideal frequency is every 4 to 6 months due to salt buildup and Saharan dust that reduce panel efficiency. Puerto Rico has unique environmental conditions that require specialized maintenance. A dirty panel can lose up to 25% of its efficiency, so regular maintenance protects your investment.',
  },
  {
    question: 'Does the solar battery work during LUMA Energy outages?',
    answer:
      'Yes, solar systems with battery backup are specifically designed to provide energy independence during LUMA Energy outages. A standard battery system can provide up to 24 hours of electricity for essential home appliances. Our systems are configured to automatically disconnect from the grid when they detect an outage and reconnect when LUMA Energy restores service. This protects both your family and the LUMA technicians working on the lines.',
  },
  {
    question: 'What warranties do you offer on solar systems?',
    answer:
      'The solar panels we install come with a 25-year manufacturer warranty covering both performance and manufacturing defects. Inverters and batteries have mostly local warranties, generally between 5 and 10 years. We also include a complimentary 3-month quality inspection to verify your system is operating at peak performance. An optional extended service plan is available for those who want additional coverage.',
  },
  {
    question: 'What does Kilowatt PR\'s free consultation include?',
    answer:
      'Our free consultation includes: a complete analysis of your current electricity consumption, a personalized 3D solar system design for your specific roof, a 7-year savings projection based on current LUMA Energy rates, roof condition assessment and recommendations, and a detailed installation estimate. There is no purchase obligation and all the information is yours to make the best decision.',
  },
]

export default function EnglishHomePage() {
  return (
    <>
      <LocalBusinessSchema />
      <FAQSchema faqs={faqs} />

      {/* Hero — Enhanced with TextRotate + 3D background */}
      <EnglishHero />

      {/* Trust bar — LIGHT */}
      <EnglishTrustBar />

      {/* Services grid — LIGHT */}
      <section className="py-20 section-light-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-display-md leading-tight text-[#121240]">Our Services</h2>
            <p className="font-body text-body-lg mt-4 max-w-2xl mx-auto text-[#4A4A6A]">
              Complete solar energy solutions for homes and businesses across the island.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            {services.map((svc) => (
              <Link
                key={svc.href}
                href={svc.href}
                className="card-light group text-center flex flex-col items-center"
              >
                <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-5 transition-colors duration-300"
                  style={{ background: 'rgba(245, 166, 35, 0.1)' }}
                >
                  <svc.icon className="text-[#E09500]" size={28} />
                </div>
                <h3 className="font-headline font-semibold text-[#121240] mb-3">{svc.title}</h3>
                <p className="text-body-md text-[#4A4A6A] leading-relaxed mb-5">{svc.desc}</p>
                <span className="text-[#E09500] font-label text-label-lg flex items-center gap-1 mt-auto group-hover:gap-2 transition-all duration-200">
                  Learn more <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Kilowatt — DARK */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Why Choose Kilowatt PR?</h2>
            <p className="section-subtitle mx-auto">
              We are the most trusted solar company in Puerto Rico. These are our
              commitments to every customer.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {differentiators.map((d) => (
              <div key={d.title} className="flex gap-5 p-6 rounded-lg transition-all duration-300 hover:bg-surface-container-high">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(245, 166, 35, 0.12)' }}
                >
                  <d.icon className="text-primary-container" size={24} />
                </div>
                <div>
                  <h3 className="font-headline font-semibold text-on-surface text-lg mb-2">{d.title}</h3>
                  <p className="text-on-surface-variant text-body-md leading-relaxed">{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center mt-14 text-primary-container font-display font-semibold text-lg tracking-tight">
            Solar design and installation by a licensed PE engineer with 50+ years of experience in Puerto Rico
          </p>
        </div>
      </section>

      {/* How it works — LIGHT */}
      <section className="py-20 section-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-display-md leading-tight text-[#121240]">How Does the Process Work?</h2>
            <p className="font-body text-body-lg mt-4 max-w-2xl mx-auto text-[#4A4A6A]">From consultation to production in 3 steps.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.num} className="text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-display font-black mx-auto mb-5"
                  style={{
                    background: 'linear-gradient(135deg, #E09500, #F5A623)',
                    color: '#3A2400',
                  }}
                >
                  {step.num}
                </div>
                <h3 className="font-headline text-headline-md text-[#121240] mb-3">{step.title}</h3>
                <p className="text-[#4A4A6A] text-body-lg leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ — LIGHT */}
      <FAQSection faqs={faqs} title="Frequently Asked Questions About Solar Energy in Puerto Rico" />

      {/* Reviews — LIGHT */}
      <EnglishTestimonialsSection />

      {/* Quote Form + CTA — AMBER GRADIENT */}
      <section className="py-20 section-cta">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#3A2400] mb-5">
                Ready for Energy Independence?
              </h2>
              <p className="text-lg text-[#6B4400] mb-6 leading-relaxed">
                Fill out the form and we&apos;ll contact you within 24 hours with your
                free quote. No obligation, no cost.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/17874312275"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp text-base px-6 py-4"
                >
                  <MessageCircle size={20} />
                  WhatsApp — Instant Response
                </a>
                <a
                  href="tel:+17874312275"
                  className="btn-secondary-light text-base px-6 py-4"
                >
                  <Phone size={20} />
                  787-431-2275
                </a>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="font-headline font-semibold text-[#121240] text-lg mb-5">
                Request Your Free Quote
              </h3>
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
