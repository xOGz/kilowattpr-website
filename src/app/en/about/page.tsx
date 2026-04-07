import type { Metadata } from 'next'
import Image from 'next/image'
import { CheckCircle, Award, Users, MapPin, Shield, Zap } from 'lucide-react'
import { PersonSchema } from '@/components/SchemaOrg'

export const metadata: Metadata = {
  title: 'About Us — Licensed Electrician with a Decade of Experience',
  description:
    'Kilowatt PR: founded by Xavier Acevedo Santiago, licensed electrician #21309. PE #6083 engineering advisor. 4.9 stars on Google in Puerto Rico.',
  alternates: {
    canonical: 'https://www.kilowattpr.com/en/about',
    languages: {
      'es': 'https://www.kilowattpr.com/sobre-nosotros',
      'en': 'https://www.kilowattpr.com/en/about',
    },
  },
  openGraph: {
    title: 'About Us | Kilowatt PR',
    description:
      'Founded by Xavier Acevedo Santiago, licensed electrician #21309. PE #6083 engineering advisor. Families protected across the island.',
    url: 'https://www.kilowattpr.com/en/about',
    locale: 'en_US',
  },
}

export default function AboutPage() {
  return (
    <>
      <PersonSchema />

      {/* Hero */}
      <section className="bg-surface text-on-surface py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="chip-gold inline-flex items-center gap-2 mb-6">
              <Award size={12} />
              LICENSED ELECTRICIAN #21309
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-on-surface">
              Solar Energy Installed by{' '}
              <span className="text-primary-container">Electricians with Real Experience in Puerto Rico</span>
            </h1>
            <p className="text-xl text-on-surface-variant leading-relaxed">
              Kilowatt PR is not just another solar company. Founded by electricians with
              real field experience, and advised by a PE electrical engineer with
              over 50 years of professional experience — including NASA and the University
              of Puerto Rico at Mayag&uuml;ez.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-20 section-light-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl font-bold text-[#121240] mb-6">
                Meet the Founder: Xavier Acevedo Santiago
              </h2>
              <div className="space-y-4 text-[#4A4A6A] leading-relaxed">
                <p>
                  Xavier Acevedo Santiago has over a decade of experience installing
                  solar systems in Puerto Rico. He knows firsthand the island&apos;s climate
                  conditions, OGPE permitting requirements, and the interconnection process
                  with LUMA Energy.
                </p>
                <p>
                  After watching Puerto Rico suffer with a fragile electrical
                  infrastructure — worsened by Hurricane Mar&iacute;a in 2017 and Hurricane Fiona in 2022 —
                  he founded Kilowatt PR with a clear mission:{' '}
                  <strong className="text-[#121240]">protect Puerto Rican families from blackouts
                  with solar systems installed by electricians with real experience, not salespeople</strong>.
                </p>
                <p>
                  Xavier is advised by Eng. Julio A. Santiago P&eacute;rez (PE #6083),
                  a licensed electrical engineer with over 50 years of experience, former NASA
                  engineer and former professor at UPR Mayag&uuml;ez, who serves as COO and
                  engineering advisor for the company.
                </p>
              </div>

              {/* Credentials grid */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-[#F8F7F4] rounded-lg p-4">
                  <p className="font-display font-bold text-[#121240]">Lic. #21309</p>
                  <p className="text-sm text-[#4A4A6A]">Licensed Electrician</p>
                </div>
                <div className="bg-[#F8F7F4] rounded-lg p-4">
                  <p className="font-display font-bold text-[#121240]">PE #6083</p>
                  <p className="text-sm text-[#4A4A6A]">Engineering Advisor</p>
                </div>
                <div className="bg-[#F8F7F4] rounded-lg p-4">
                  <p className="font-display font-bold text-[#121240]">10+ Years</p>
                  <p className="text-sm text-[#4A4A6A]">Field Experience</p>
                </div>
                <div className="bg-[#F8F7F4] rounded-lg p-4">
                  <p className="font-display font-bold text-[#121240]">PPPE-PV-1809</p>
                  <p className="text-sm text-[#4A4A6A]">Certified PV Installer</p>
                </div>
              </div>
            </div>
            <div className="relative h-80 lg:h-full min-h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="/team/xavier-acevedo.png"
                alt="Xavier Acevedo Santiago, founder of Kilowatt PR, licensed electrician #21309"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Letter */}
      <section className="py-20 section-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-[#121240] mb-8 text-center">
              A Letter from the Founder
            </h2>
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-[#E8E6E1]">
              <div className="space-y-5 text-[#4A4A6A] text-body-md leading-relaxed italic">
                <p>
                  I grew up in Puerto Rico, and like every Puerto Rican, I know what it&apos;s like
                  to lose power. But nothing prepared me for what we saw after Hurricane Mar&iacute;a.
                  Entire families — months without electricity. Elderly people unable to refrigerate
                  their medications. Businesses that closed forever.
                </p>
                <p>
                  I had been working as an electrician for years. I knew every wire, every panel,
                  every electrical code on this island. And I kept asking myself: why do we keep
                  depending on a system that fails us over and over again?
                </p>
                <p>
                  That&apos;s where Kilowatt PR was born. Not in a corporate office or an investor
                  meeting — it was born on the rooftops of Puerto Rico, with hands covered in
                  grease and the sun on my back. I decided to combine what I know how to do — electricity —
                  with solar technology, so that no family has to go through what we went through
                  after Mar&iacute;a.
                </p>
                <p>
                  Every system we install, I treat it as if it were for my own family.
                  Because at the end of the day, we&apos;re neighbors. We live on the same island, we suffer
                  the same blackouts, and we deserve the same peace of mind.
                </p>
                <p>
                  If you&apos;re reading this, you&apos;re probably tired of depending on LUMA.
                  So am I. That&apos;s why I do what I do.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-[#E8E6E1]">
                <p className="font-headline font-semibold text-[#121240] text-lg">
                  Xavier Acevedo Santiago
                </p>
                <p className="text-[#E09500] font-label text-label-lg">
                  Founder and CEO, Kilowatt PR
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Exist — Hurricane / LUMA narrative */}
      <section className="py-20 section-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-display text-3xl font-bold text-[#121240] mb-4">
              Why We Exist
            </h2>
            <p className="text-[#4A4A6A] text-lg leading-relaxed">
              Puerto Rico deserves better than depending on a power grid that fails
              when you need it most.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: 'The LUMA Crisis',
                desc: 'Puerto Rico has some of the highest electricity rates in the United States and a grid that leaves families without power for hours — or days. Every blackout is a reminder that energy independence is not a luxury, it is a necessity.',
              },
              {
                icon: Shield,
                title: 'Lessons from Maria and Fiona',
                desc: 'Hurricanes Maria (2017) and Fiona (2022) destroyed the island\'s electrical infrastructure. We saw families without electricity for months. That experience motivated us to create solar systems specifically designed to withstand Puerto Rico\'s extreme conditions.',
              },
              {
                icon: CheckCircle,
                title: 'Engineering, Not Sales',
                desc: 'Unlike other solar companies that send salespeople to your door, at Kilowatt PR every system is designed by a licensed electrical engineer. We don\'t sell generic kits — we design solutions based on your real consumption, your specific roof, and the conditions of your municipality.',
              },
            ].map((item) => (
              <div key={item.title} className="card-light text-center">
                <div className="w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-5"
                  style={{ background: 'rgba(245, 166, 35, 0.1)' }}
                >
                  <item.icon className="text-[#E09500]" size={28} />
                </div>
                <h3 className="font-headline font-semibold text-[#121240] text-lg mb-3">{item.title}</h3>
                <p className="text-[#4A4A6A] text-body-md leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              {
                icon: CheckCircle,
                title: 'Our Mission',
                desc: 'Protect Puerto Rico\'s families and businesses from blackouts and abusive rates through professionally engineered solar systems — designed, installed, and backed by a team with over 50 years of experience.',
              },
              {
                icon: Award,
                title: 'Our Commitment',
                desc: 'Every installation is backed by a 25-year warranty on panels, 5 to 10-year warranties on inverters and batteries, and a complimentary 3-month quality inspection at no additional cost. We don\'t stop until your system is producing.',
              },
              {
                icon: MapPin,
                title: 'Our Island',
                desc: 'From Aguada we serve the entire island — from San Juan to Mayag\u00FCez, from Ponce to Fajardo. We know the climate and infrastructure differences between each region and design every system according to your municipality\'s local conditions.',
              },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-lg transition-all duration-300 hover:bg-surface-container-high">
                <div className="w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-5"
                  style={{ background: 'rgba(245, 166, 35, 0.12)' }}
                >
                  <item.icon className="text-primary-container" size={28} />
                </div>
                <h3 className="font-headline font-semibold text-on-surface text-lg mb-3">{item.title}</h3>
                <p className="text-on-surface-variant text-body-md leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 section-light-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-[#121240]">Our Team</h2>
            <p className="font-body text-body-lg mt-4 max-w-2xl mx-auto text-[#4A4A6A]">
              Certified professionals with real experience installing solar systems in Puerto Rico.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                role: 'Founder and CEO',
                name: 'Xavier Acevedo Santiago',
                credentials: 'Licensed Electrician Lic. #21309',
                desc: 'Over a decade installing residential and commercial photovoltaic systems in Puerto Rico. Founded Kilowatt PR to protect Puerto Rican families from LUMA blackouts.',
                photo: '/team/xavier-acevedo.png',
              },
              {
                role: 'COO and Engineering Advisor',
                name: 'Julio A. Santiago P\u00E9rez, PE',
                credentials: 'PE #6083 \u00B7 PPPE-PV-1809',
                desc: 'Licensed electrical engineer with 50+ years of experience. Former NASA engineer and former professor at UPR Mayag\u00FCez. Advises on the engineering design of every solar system.',
                photo: '/team/julio-santiago.png',
              },
              {
                role: 'Customer Service',
                name: 'Kristen S. Rom\u00E1n',
                credentials: 'Project Coordinator',
                desc: 'Your point of contact throughout the entire process. Coordinates OGPE permits, LUMA Energy interconnection, and ensures every customer is completely satisfied.',
                photo: '/team/kristen-roman.png',
              },
            ].map((member) => (
              <div key={member.name} className="card-light text-center">
                {member.photo ? (
                  <div className="w-28 h-28 rounded-full mx-auto mb-4 p-1 bg-gradient-to-br from-[#E09500] to-[#F5A623]">
                    <div className="w-full h-full rounded-full overflow-hidden relative bg-white">
                      <Image
                        src={member.photo}
                        alt={member.name}
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="w-24 h-24 bg-[#F8F7F4] rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="text-[#E09500]" size={32} />
                  </div>
                )}
                <h3 className="font-headline font-semibold text-[#121240] text-lg">{member.name}</h3>
                <p className="text-[#E09500] font-label text-label-lg mb-1">{member.role}</p>
                <p className="text-[#4A4A6A] text-xs font-label mb-3">{member.credentials}</p>
                <p className="text-[#4A4A6A] text-body-md leading-relaxed">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl font-bold text-on-surface mb-8">Certifications and Licenses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-surface-container-high rounded-xl px-6 py-5 flex items-center gap-3">
              <Award className="text-primary-container shrink-0" size={28} />
              <div className="text-left">
                <p className="font-headline font-semibold text-on-surface">Licensed Engineer</p>
                <p className="text-on-surface-variant text-sm">PE #6083 — PR Examining Board</p>
              </div>
            </div>
            <div className="bg-surface-container-high rounded-xl px-6 py-5 flex items-center gap-3">
              <CheckCircle className="text-primary-container shrink-0" size={28} />
              <div className="text-left">
                <p className="font-headline font-semibold text-on-surface">Certified PV Installer</p>
                <p className="text-on-surface-variant text-sm">PPPE-PV-1809 — DDEC Puerto Rico</p>
              </div>
            </div>
            <div className="bg-surface-container-high rounded-xl px-6 py-5 flex items-center gap-3">
              <Shield className="text-primary-container shrink-0" size={28} />
              <div className="text-left">
                <p className="font-headline font-semibold text-on-surface">4.9 Stars / 10+ Reviews</p>
                <p className="text-on-surface-variant text-sm">Verified on Google Business</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 section-cta">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-[#3A2400] mb-4">
            Ready for Energy Independence?
          </h2>
          <p className="text-lg text-[#6B4400] mb-8 leading-relaxed">
            Talk directly with our team. Free consultation and quote, no obligation.
            Response in less than 2 hours.
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
