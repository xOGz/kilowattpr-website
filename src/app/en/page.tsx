import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  Sun, Battery, Home, Wrench, Star, CheckCircle, Phone, MessageCircle,
  ArrowRight, Shield, MapPin, Zap,
} from 'lucide-react'
import QuoteForm from '@/components/QuoteForm'
import { LocalBusinessSchema, FAQSchema } from '@/components/SchemaOrg'
import FAQSection from '@/components/FAQSection'

export const metadata: Metadata = {
  title: 'Solar Panel Installation in Puerto Rico',
  description:
    'Kilowatt PR LLC: #1 solar panel installation company in Puerto Rico. Certified technicians with over a decade of experience. Free quote today.',
  alternates: {
    canonical: 'https://www.kilowattpr.com/en',
    languages: {
      'es': 'https://www.kilowattpr.com',
      'en': 'https://www.kilowattpr.com/en',
    },
  },
  openGraph: {
    title: 'Solar Panel Installation in Puerto Rico | Kilowatt PR',
    description:
      '#1 solar panel installation company in Puerto Rico. Certified technicians, 25-year warranty, free consultation.',
    url: 'https://www.kilowattpr.com/en',
    locale: 'en_US',
  },
}

const services = [
  {
    icon: Sun,
    title: 'Solar Panel Installation',
    desc: 'Residential and commercial photovoltaic systems designed for Puerto Rico\'s climate conditions.',
    href: '/servicios/instalacion-paneles-solares',
  },
  {
    icon: Battery,
    title: 'Battery Backup Systems',
    desc: 'Full energy independence during LUMA Energy outages. Up to 24 hours of backup power.',
    href: '/servicios/sistemas-con-bateria',
  },
  {
    icon: Home,
    title: 'Roof Sealing',
    desc: 'Professional roof waterproofing before installation. 2-year workmanship warranty.',
    href: '/servicios/sellado-de-techo',
  },
  {
    icon: Wrench,
    title: 'Maintenance & Cleaning',
    desc: 'Professional cleaning every 6-8 months to maintain maximum solar panel efficiency.',
    href: '/servicios/mantenimiento-lavado',
  },
]

const differentiators = [
  {
    icon: CheckCircle,
    title: 'Over a Decade of Experience',
    desc: 'Our certified technicians with over a decade of hands-on experience in Puerto Rico know the climate conditions, ARPE permit requirements, and LUMA Energy interconnection process like no one else.',
  },
  {
    icon: Shield,
    title: '25-Year Panel Warranty',
    desc: 'We work with the most reliable manufacturers in the market. Your panels are backed by a 25-year warranty, plus 2 years of workmanship warranty on roof sealing.',
  },
  {
    icon: Zap,
    title: 'Designed for Puerto Rico',
    desc: 'Every system we install is optimized for Puerto Rico\'s conditions: hurricanes, tropical heat, Saharan dust, and LUMA Energy\'s infrastructure.',
  },
  {
    icon: Star,
    title: '4.9 Stars / 147 Reviews',
    desc: 'Our reputation is built by our customers. With 4.9 stars across 147 verified reviews, we are the most trusted solar company in Puerto Rico.',
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
    desc: 'We handle all permitting with ARPE and the interconnection request with LUMA Energy. You don\'t have to do anything.',
  },
  {
    num: '03',
    title: 'Installation & Activation',
    desc: 'Our team installs your system in 1-2 days. From contract to production: 6-10 weeks. You start saving from month one.',
  },
]

const faqs = [
  {
    question: 'How much does a solar system cost in Puerto Rico?',
    answer:
      'A residential solar system in Puerto Rico costs between $15,000 and $35,000 on average, depending on your home\'s electricity consumption and the system size required. The most popular systems range from 5kW to 10kW with or without battery backup. We offer financing options that allow many families to start saving from month one without a large upfront payment. During the free consultation, we present a detailed analysis of the cost and projected savings over 25 years.',
  },
  {
    question: 'How long does solar installation take in Puerto Rico?',
    answer:
      'The complete process from contract signing to your system producing energy takes between 6 and 10 weeks. This includes obtaining permits from ARPE (Administration of Regulations and Permits), interconnection approval with LUMA Energy, equipment delivery, and physical installation. The installation itself typically takes 1 to 2 days. We handle the entire permitting process for you — you don\'t have to do anything.',
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
      'The solar panels we install come with a manufacturer warranty of 25 years covering both performance and manufacturing defects. Additionally, we offer a 2-year workmanship warranty on all roof sealing work. Inverters and batteries have specific warranties depending on the manufacturer, generally between 5 and 10 years. We explain all these details clearly during the initial consultation.',
  },
  {
    question: 'What does Kilowatt PR\'s free consultation include?',
    answer:
      'Our free consultation includes: a complete analysis of your current electricity consumption, a personalized 3D solar system design for your specific roof, a 25-year savings projection based on current LUMA Energy rates, roof condition assessment and recommendations, and a detailed installation estimate with financing options. There is no purchase obligation and all the information is yours to make the best decision.',
  },
]

export default function EnglishHomePage() {
  return (
    <>
      <LocalBusinessSchema />
      <FAQSchema faqs={faqs} />

      {/* Hero */}
      <section className="relative bg-surface overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1600&q=80"
            alt="Solar panels installed on a roof in Puerto Rico"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-surface/80 via-surface/60 to-surface" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 pt-40">
          <div className="max-w-4xl">
            <div className="chip-gold inline-flex items-center gap-2 mb-8">
              <Star size={12} />
              4.9★ — 147 VERIFIED REVIEWS
            </div>
            <h1 className="font-display text-display-lg mb-6 text-on-surface">
              Cutting-Edge{' '}
              <span className="text-primary-container">Solar Energy</span>
              <br />
              in Puerto Rico
            </h1>
            <p className="text-xl text-on-surface-variant mb-10 leading-relaxed max-w-2xl font-body">
              Certified technicians with over a decade of hands-on experience in Puerto Rico.
              Real energy independence for your home or business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/17874312275"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base px-8 py-4"
              >
                <MessageCircle size={20} />
                Free Quote via WhatsApp
              </a>
              <Link href="/servicios" className="btn-secondary text-base px-8 py-4">
                View Services <ArrowRight size={18} />
              </Link>
            </div>

            {/* Language switcher */}
            <div className="mt-8 flex items-center gap-3 text-sm text-on-surface-variant">
              <Link href="/" className="hover:text-primary-container transition-colors">
                Español
              </Link>
              <span className="text-outline">|</span>
              <span className="text-primary-container font-semibold">English</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Star, label: '4.9★ / 147 Reviews' },
              { icon: Shield, label: '25-Year Warranty' },
              { icon: CheckCircle, label: '10+ Years Experience' },
              { icon: MapPin, label: 'All of Puerto Rico' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center justify-center gap-2 font-label text-label-lg text-on-surface-variant py-2">
                <Icon size={16} className="text-primary-container" />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle mx-auto mt-4">
              Complete solar energy solutions for homes and businesses across the island.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            {services.map((svc) => (
              <Link
                key={svc.href}
                href={svc.href}
                className="card group text-center flex flex-col items-center"
              >
                <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-5 transition-colors duration-300"
                  style={{ background: 'rgba(245, 166, 35, 0.12)' }}
                >
                  <svc.icon className="text-primary-container" size={28} />
                </div>
                <h3 className="font-headline font-semibold text-on-surface mb-3">{svc.title}</h3>
                <p className="text-body-md text-on-surface-variant leading-relaxed mb-5">{svc.desc}</p>
                <span className="text-primary-container font-label text-label-lg flex items-center gap-1 mt-auto group-hover:gap-2 transition-all duration-200">
                  Learn more <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Kilowatt */}
      <section className="py-20 bg-surface-container-low">
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
            Certified technicians with over a decade of hands-on experience in Puerto Rico
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">How Does the Process Work?</h2>
            <p className="section-subtitle mx-auto">From consultation to production in 3 steps.</p>
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
                <h3 className="font-headline text-headline-md text-on-surface mb-3">{step.title}</h3>
                <p className="text-on-surface-variant text-body-lg leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={faqs} title="Frequently Asked Questions About Solar Energy in Puerto Rico" />

      {/* Reviews */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">What Our Customers Say</h2>
            <div className="flex items-center justify-center gap-2 mt-5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-primary-container fill-primary-container" size={24} />
              ))}
              <span className="text-2xl font-display font-bold text-on-surface ml-2">4.9</span>
              <span className="text-on-surface-variant">/ 147 reviews</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Carlos M.',
                location: 'Aguada, PR',
                text: 'Excellent service from start to finish. The Kilowatt PR team handled all the permits and the LUMA interconnection. My bill dropped 90% from month one. 100% recommended.',
              },
              {
                name: 'Maria L.',
                location: 'San Juan, PR',
                text: 'After last year\'s blackouts I decided to install the battery system. Kilowatt PR explained everything clearly, the price was fair, and the installation was fast. Now I have peace of mind.',
              },
              {
                name: 'Roberto V.',
                location: 'Ponce, PR',
                text: 'I hired them for my business. The team was very professional, arrived on time, and the system works perfectly. It\'s been 8 months with zero issues. The monthly savings are real.',
              },
            ].map((review) => (
              <div key={review.name} className="card">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-primary-container fill-primary-container" size={16} />
                  ))}
                </div>
                <p className="text-on-surface-variant text-body-md leading-relaxed mb-5">&ldquo;{review.text}&rdquo;</p>
                <div>
                  <p className="font-headline font-semibold text-on-surface">{review.name}</p>
                  <p className="text-label-md text-on-surface-variant font-label">{review.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form + CTA */}
      <section className="py-20 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-on-surface mb-5">
                Ready for Energy Independence?
              </h2>
              <p className="text-lg text-on-surface-variant mb-6 leading-relaxed">
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
                  className="btn-secondary text-base px-6 py-4"
                >
                  <Phone size={20} />
                  787-431-2275
                </a>
              </div>
            </div>
            <div className="card">
              <h3 className="font-headline font-semibold text-on-surface text-lg mb-5">
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
