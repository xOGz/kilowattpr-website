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

export const authorData = {
  name: 'Julio A. Santiago Pérez',
  slug: 'julio-santiago-perez',
  title: {
    es: 'Ingeniero Electricista Licenciado',
    en: 'Licensed Electrical Engineer',
  },
  credentials: {
    peLicense: '6083',
    peLicenseExpires: '2028-04-12',
    pvCertification: 'PPPE-PV-1809',
    certifyingBody: 'DDEC — Departamento de Desarrollo Económico y Comercio de Puerto Rico',
  },
  experience: '50+ años',
  bio: {
    es: 'Ingeniero electricista licenciado con más de 50 años de experiencia. Ex ingeniero de NASA y ex profesor de la Universidad de Puerto Rico, Recinto de Mayagüez (RUM). Certificado como instalador de sistemas fotovoltaicos por el Programa de Política Pública Energética de Puerto Rico.',
    en: 'Licensed electrical engineer with over 50 years of experience. Former NASA engineer and former professor at the University of Puerto Rico, Mayagüez Campus (RUM). Certified photovoltaic systems installer by Puerto Rico\'s Public Energy Policy Program.',
  },
  url: 'https://www.kilowattpr.com/equipo/julio-santiago-perez',
}

export function PersonSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': 'https://kilowattpr.com/#julio-santiago-perez',
    name: authorData.name,
    jobTitle: 'Ingeniero Electricista Licenciado / Licensed Electrical Engineer',
    description: authorData.bio.es,
    url: authorData.url,
    worksFor: { '@id': 'https://kilowattpr.com/#organization' },
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Professional License',
        name: 'Ingeniero Licenciado — Licensed Engineer',
        recognizedBy: {
          '@type': 'Organization',
          name: 'Junta Examinadora de Ingenieros y Agrimensores de Puerto Rico',
        },
        validFrom: '2023-04-13',
        validUntil: '2028-04-12',
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Professional Certification',
        name: 'Instalador Certificado de Sistemas PV (Fotovoltaicos)',
        recognizedBy: {
          '@type': 'Organization',
          name: 'Programa de Política Pública Energética — DDEC Puerto Rico',
        },
        identifier: 'PPPE-PV-1809',
      },
    ],
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Universidad de Puerto Rico, Recinto Universitario de Mayagüez (RUM)',
    },
    knowsAbout: [
      'Solar Energy',
      'Photovoltaic Systems',
      'Electrical Engineering',
      'Battery Storage Systems',
      'LUMA Energy Interconnection',
    ],
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
      '@type': 'Person',
      '@id': 'https://kilowattpr.com/#julio-santiago-perez',
      name: authorData.name,
      jobTitle: 'Ingeniero Electricista Licenciado (PE #6083)',
      url: authorData.url,
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
