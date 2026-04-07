import type { Metadata } from 'next'
import { Gift, MessageCircle, CheckCircle, Users, DollarSign, ArrowRight } from 'lucide-react'
import { FAQSchema } from '@/components/SchemaOrg'
import FAQSection from '@/components/FAQSection'

export const metadata: Metadata = {
  title: 'Referral Program — Earn $500 per Referral',
  description:
    'Refer a friend or family member to Kilowatt PR and earn $500 for each completed installation. No referral limit. Exclusive program for customers.',
  alternates: {
    canonical: 'https://www.kilowattpr.com/en/referral-program',
    languages: {
      es: 'https://www.kilowattpr.com/programa-de-referidos',
      en: 'https://www.kilowattpr.com/en/referral-program',
    },
  },
  openGraph: {
    title: 'Referral Program | Kilowatt PR — Earn $500',
    description:
      'Earn $500 for every person you refer to Kilowatt PR who completes their solar installation.',
    url: 'https://www.kilowattpr.com/en/referral-program',
  },
}

const faqs = [
  {
    question: 'Who can participate in the referral program?',
    answer: 'Any current Kilowatt PR customer can participate. You don\'t need to have completed your installation — if you\'ve already signed a contract with us, you can start referring right away.',
  },
  {
    question: 'How do I receive my $500 reward?',
    answer: 'Once the person you referred completes their installation and the system is active, we contact you to coordinate your reward. You can choose between: credit toward maintenance or a battery upgrade, or direct payment.',
  },
  {
    question: 'Is there a limit to how many people I can refer?',
    answer: 'There is no limit. Each referral who completes an installation earns you $500. We\'ve had customers who have referred 3, 4, and even 5 people from their community or family.',
  },
  {
    question: 'What does the person I refer receive?',
    answer: 'The person you refer receives the same free consultation, custom 3D design, and no-commitment quote that all our customers get. Plus, by mentioning your name, they know they come recommended by someone who already trusts our work.',
  },
]

const steps = [
  {
    num: '01',
    icon: Users,
    title: 'Refer Someone',
    desc: 'Share your experience with a friend, family member, or neighbor who is considering solar energy. Give them our WhatsApp number or send them the link to this page.',
  },
  {
    num: '02',
    icon: MessageCircle,
    title: 'They Contact Us',
    desc: 'Your referral contacts us via WhatsApp or phone and mentions your name. We take care of the rest: free consultation, 3D design, no-commitment quote.',
  },
  {
    num: '03',
    icon: Gift,
    title: 'You Earn $500',
    desc: 'When your referral completes their installation and the system is active, you receive $500. Choose maintenance credit, battery upgrade, or direct payment.',
  },
]

export default function ReferralPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />

      {/* Hero */}
      <section className="bg-surface text-on-surface py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="chip-gold inline-flex items-center gap-2 mb-6">
              <Gift size={12} />
              REFERRAL PROGRAM
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-on-surface">
              Earn <span className="text-primary-container">$500</span> for Every Person You Refer
            </h1>
            <p className="text-xl text-on-surface-variant leading-relaxed mb-8">
              You already enjoy solar energy. Now help your friends and family protect themselves
              from LUMA outages — and earn $500 for each completed installation. No limit.
            </p>
            <a
              href="https://wa.me/17874312275?text=Hi%2C%20I%20want%20to%20refer%20someone%20to%20the%20referral%20program."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base px-8 py-4 inline-flex"
            >
              <MessageCircle size={20} />
              Refer Someone via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 section-light-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-display-md leading-tight text-[#121240]">
              How Does It Work?
            </h2>
            <p className="font-body text-body-lg mt-4 max-w-2xl mx-auto text-[#4A4A6A]">
              3 simple steps. You refer, we install, you earn.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.num} className="card-light text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-display font-black mx-auto mb-5"
                  style={{
                    background: 'linear-gradient(135deg, #E09500, #F5A623)',
                    color: '#3A2400',
                  }}
                >
                  {step.num}
                </div>
                <h3 className="font-headline font-semibold text-[#121240] text-lg mb-3">{step.title}</h3>
                <p className="text-[#4A4A6A] text-body-md leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reward options */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Choose Your Reward</h2>
            <p className="section-subtitle mx-auto">
              $500 for each referral who completes their installation. You decide how to receive it.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: DollarSign,
                title: 'Direct Payment',
                desc: '$500 in cash or bank transfer. Simple and straightforward.',
              },
              {
                icon: Gift,
                title: 'Maintenance Credit',
                desc: '$500 applied toward washing and maintenance of your solar panels.',
              },
              {
                icon: ArrowRight,
                title: 'Battery Upgrade',
                desc: '$500 discount on an upgrade or addition of a battery to your system.',
              },
            ].map((option) => (
              <div key={option.title} className="p-6 rounded-lg text-center hover:bg-surface-container-high transition-all duration-300">
                <div className="w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-5"
                  style={{ background: 'rgba(245, 166, 35, 0.12)' }}
                >
                  <option.icon className="text-primary-container" size={28} />
                </div>
                <h3 className="font-headline font-semibold text-on-surface text-lg mb-2">{option.title}</h3>
                <p className="text-on-surface-variant text-body-md leading-relaxed">{option.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="py-16 section-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl font-bold text-[#121240] mb-4">
            Families Across the Island Already Trust Us
          </h2>
          <p className="text-[#4A4A6A] text-lg leading-relaxed mb-8">
            With 4.9 stars on Google, our customers are our
            best ambassadors. Every referral is one more family protected against
            LUMA outages.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/17874312275?text=Hi%2C%20I%20want%20to%20refer%20someone%20to%20the%20referral%20program."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base px-8 py-4"
            >
              <MessageCircle size={20} />
              Refer Now via WhatsApp
            </a>
            <a
              href="tel:+17874312275"
              className="inline-flex items-center justify-center gap-2 font-label font-semibold tracking-wide rounded-full px-8 py-4 text-base border border-[#121240]/20 text-[#121240] hover:bg-[#121240]/5 transition-all duration-200"
            >
              Call 787-431-2275
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={faqs} title="Referral Program FAQ" />
    </>
  )
}
