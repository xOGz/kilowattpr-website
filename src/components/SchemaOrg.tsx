export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://kilowattpr.com/#organization',
    name: 'Kilowatt PR LLC',
    alternateName: 'Kilowatt PR',
    url: 'https://kilowattpr.com',
    logo: { '@type': 'ImageObject', url: 'https://kilowattpr.com/logo.png' },
    description:
      'Kilowatt PR LLC instala sistemas de paneles solares residenciales y comerciales en toda Puerto Rico. Técnicos certificados con más de una década de experiencia.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'HC 3 Box 31767',
      addressLocality: 'Aguada',
      addressRegion: 'PR',
      postalCode: '00602',
      addressCountry: 'US',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-787-431-2275',
      contactType: 'customer service',
      availableLanguage: ['Spanish', 'English'],
    },
    sameAs: [
      'https://www.facebook.com/kilowattpr',
      'https://www.instagram.com/kilowattpr',
    ],
    areaServed: { '@type': 'State', name: 'Puerto Rico' },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function WebSiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://kilowattpr.com/#website',
    url: 'https://kilowattpr.com',
    name: 'Kilowatt PR',
    publisher: { '@id': 'https://kilowattpr.com/#organization' },
    inLanguage: ['es', 'en'],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://kilowattpr.com/#localbusiness',
    name: 'Kilowatt PR LLC',
    description:
      'Empresa #1 en instalación de placas solares en Puerto Rico. Sistemas solares con batería, sellado de techo, lavado y mantenimiento.',
    url: 'https://kilowattpr.com',
    telephone: '+1-787-431-2275',
    email: 'kilowattpr@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'HC 3 Box 31767',
      addressLocality: 'Aguada',
      addressRegion: 'PR',
      postalCode: '00602',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 18.4655,
      longitude: -66.1057,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00',
      },
    ],
    priceRange: '$$',
    areaServed: { '@type': 'State', name: 'Puerto Rico' },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: 4.9,
      reviewCount: 147,
      bestRating: 5,
      worstRating: 1,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function FAQSchema({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function ArticleSchema({
  title,
  description,
  datePublished,
  url,
}: {
  title: string
  description: string
  datePublished: string
  url: string
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    datePublished,
    author: {
      '@type': 'Organization',
      name: 'Equipo Kilowatt PR',
      url: 'https://kilowattpr.com',
    },
    publisher: { '@id': 'https://kilowattpr.com/#organization' },
    url,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '.article-intro'],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
