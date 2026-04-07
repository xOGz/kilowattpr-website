import type { Metadata } from 'next'
import Image from 'next/image'
import { Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Reviews and Testimonials — 4.9 Stars on Google',
  description:
    'Read the real experiences of families and businesses in Puerto Rico who trusted Kilowatt PR for their solar system. 4.9 stars on Google — verified reviews from real customers.',
  alternates: {
    canonical: 'https://www.kilowattpr.com/en/reviews',
    languages: {
      'es': 'https://www.kilowattpr.com/resenas',
      'en': 'https://www.kilowattpr.com/en/reviews',
    },
  },
  openGraph: {
    title: 'Reviews and Testimonials | Kilowatt PR',
    description:
      '4.9 stars on Google. Families and businesses in Puerto Rico share their experience with Kilowatt PR.',
    url: 'https://www.kilowattpr.com/en/reviews',
    locale: 'en_US',
  },
}

interface Testimonial {
  name: string
  municipio: string
  rating: number
  text: string
  initials: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Carlos M.',
    municipio: 'Aguada',
    rating: 5,
    initials: 'CM',
    text: 'Since Kilowatt PR installed my panels, my LUMA bill dropped 90%. The team was professional from day one — Xavier himself came to evaluate my roof. I don\'t regret a thing.',
  },
  {
    name: 'Mar\u00EDa L.',
    municipio: 'San Juan',
    rating: 5,
    initials: 'ML',
    text: 'I installed panels with battery backup and the peace of mind I have now is priceless. When the power goes out in the neighborhood, my house keeps running like nothing happened. Excellent service.',
  },
  {
    name: 'Roberto V.',
    municipio: 'Ponce',
    rating: 5,
    initials: 'RV',
    text: 'I have a commercial business and the energy costs were killing me. Kilowatt PR designed a system that perfectly matched my consumption. In six months I\'m already seeing the return on investment.',
  },
  {
    name: 'Ana G.',
    municipio: 'Mayag\u00FCez',
    rating: 5,
    initials: 'AG',
    text: 'What impressed me the most was that they handled the entire process — OGPE permits, LUMA interconnection, inspections. I didn\'t have to do anything but sign. Highly recommended.',
  },
  {
    name: 'Jos\u00E9 R.',
    municipio: 'Caguas',
    rating: 5,
    initials: 'JR',
    text: 'The installation was incredibly fast. They gave me a date and they delivered. In less than two weeks my system was already producing. The follow-up after installation was also excellent.',
  },
  {
    name: 'Laura P.',
    municipio: 'Bayam\u00F3n',
    rating: 5,
    initials: 'LP',
    text: 'After the last blackout that lasted three days, I decided to invest in solar with battery. Kilowatt PR explained everything clearly and now my family is protected. No more depending on LUMA.',
  },
  {
    name: 'Fernando D.',
    municipio: 'Aguadilla',
    rating: 5,
    initials: 'FD',
    text: 'We live near the coast and I was worried about salt air. Xavier explained which equipment best withstands coastal conditions and they designed a system tailored to our environment. They\'ve been running perfectly for months.',
  },
  {
    name: 'Carmen T.',
    municipio: 'Rinc\u00F3n',
    rating: 5,
    initials: 'CT',
    text: 'After Maria we went five months without power. I swore we\'d never go through that again. Kilowatt PR installed panels with battery and now we sleep soundly when a hurricane comes. These are serious people.',
  },
  {
    name: 'David S.',
    municipio: 'Carolina',
    rating: 5,
    initials: 'DS',
    text: 'My neighbor recommended Kilowatt PR and it was the best decision. From the quote to the installation, everything was transparent. Now I recommend them to everyone too.',
  },
  {
    name: 'Patricia N.',
    municipio: 'Humacao',
    rating: 5,
    initials: 'PN',
    text: 'I have a restaurant in Humacao and the blackouts were costing me thousands in lost inventory. Kilowatt PR designed a commercial system with backup that keeps the refrigerators running even when the power goes out. An investment that pays for itself.',
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={16} className="fill-[#F5A623] text-[#F5A623]" />
      ))}
    </div>
  )
}

function RatingDisplay() {
  return (
    <div className="flex items-center gap-3">
      <span className="font-display text-5xl md:text-6xl font-bold text-[#F5A623]">4.9</span>
      <div>
        <div className="flex gap-0.5 mb-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={24} className="fill-[#F5A623] text-[#F5A623]" />
          ))}
        </div>
        <p className="text-on-surface-variant text-sm">Average across 10+ Google reviews</p>
      </div>
    </div>
  )
}

export default function ReviewsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-surface text-on-surface py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-on-surface">
              What Our{' '}
              <span className="text-primary-container">Customers Say</span>
            </h1>
            <p className="text-xl text-on-surface-variant leading-relaxed mb-8">
              We don&apos;t say it — the families and businesses who trusted
              Kilowatt PR to protect them from blackouts and LUMA&apos;s abusive rates say it.
            </p>
            <RatingDisplay />
            <a
              href="https://www.google.com/maps/place/Kilowatt+PR+LLC"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-[#E09500] font-label text-label-lg hover:underline"
            >
              See Our Reviews on Google &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Testimonial Grid */}
      <section className="py-20 section-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="card-light flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0">
                    <Image
                      src={`https://api.dicebear.com/9.x/initials/svg?seed=${testimonial.initials}&backgroundColor=F5A623&textColor=ffffff&fontSize=40`}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-headline font-semibold text-[#121240]">
                      {testimonial.name}
                    </p>
                    <p className="text-[#4A4A6A] text-sm">{testimonial.municipio}</p>
                  </div>
                </div>
                <StarRating count={testimonial.rating} />
                <p className="text-[#4A4A6A] text-body-md leading-relaxed mt-3 flex-grow">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — Leave a Review */}
      <section className="py-16 section-light-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-[#121240] mb-4">
            Already a Kilowatt PR Customer?
          </h2>
          <p className="text-lg text-[#4A4A6A] mb-8 leading-relaxed">
            Your experience helps other families make the right decision.
            Leave us a review on Google — it only takes a minute.
          </p>
          <a
            href="https://www.google.com/maps/place/Kilowatt+PR+LLC"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base px-8 py-4 inline-flex"
          >
            Leave Your Review on Google
          </a>
        </div>
      </section>

      {/* CTA — New Customers */}
      <section className="py-16 section-cta">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-[#3A2400] mb-4">
            Ready to Join Our Satisfied Customers?
          </h2>
          <p className="text-lg text-[#6B4400] mb-8 leading-relaxed">
            Free consultation and quote, no obligation. Talk directly with our
            team — response in less than 2 hours.
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
