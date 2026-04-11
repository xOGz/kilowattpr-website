export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness', 'Electrician'],
    '@id': 'https://www.kilowattpr.com/#organization',
    name: 'Kilowatt PR LLC',
    alternateName: ['Kilowatt PR', 'Kilowatt Puerto Rico'],
    url: 'https://www.kilowattpr.com',
    logo: { '@type': 'ImageObject', url: 'https://www.kilowattpr.com/logo_transparent.png' },
    description:
      'Kilowatt PR LLC is a solar panel installation company and licensed electrical contractor in Puerto Rico (PR stands for Puerto Rico, not Public Relations). Over 30 years of experience installing residential and commercial solar energy systems, battery backup, and electrical services across all 78 municipalities of Puerto Rico.',
    knowsAbout: [
      'Solar panel installation',
      'Solar energy systems',
      'Battery backup systems',
      'Electrical contracting',
      'Puerto Rico energy grid',
      'LUMA Energy',
      'Net metering Puerto Rico',
    ],
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
      'https://www.facebook.com/kilowattprllc',
      'https://www.instagram.com/kilowatt_pr',
      'https://www.bbb.org/us/pr/aguada/profile/solar-energy-contractors/kilowatt-pr-llc-0633-92054804',
    ],
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Accreditation',
      name: 'BBB Accredited Business',
      recognizedBy: {
        '@type': 'Organization',
        name: 'Better Business Bureau',
        url: 'https://www.bbb.org',
      },
    },
    areaServed: {
      '@type': 'State',
      name: 'Puerto Rico',
      containedInPlace: { '@type': 'Country', name: 'United States' },
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios de Kilowatt PR',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Instalación de Paneles Solares',
            description: 'Sistemas fotovoltaicos residenciales y comerciales desde $13,000',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Sistemas de Batería de Respaldo',
            description: 'Independencia energética durante apagones de LUMA Energy',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Contratista Eléctrico',
            description: 'Servicios eléctricos residenciales y comerciales, reparación de bases de medidores con certificaciones LUMA',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Mantenimiento y Lavado de Paneles',
            description: 'Limpieza profesional cada 6-8 meses para máxima eficiencia',
          },
        },
      ],
    },
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
    '@id': 'https://www.kilowattpr.com/#website',
    url: 'https://www.kilowattpr.com',
    name: 'Kilowatt PR',
    publisher: { '@id': 'https://www.kilowattpr.com/#organization' },
    inLanguage: ['es', 'en'],
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://www.kilowattpr.com/?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
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
    '@type': ['LocalBusiness', 'Electrician'],
    '@id': 'https://www.kilowattpr.com/#localbusiness',
    name: 'Kilowatt PR LLC',
    description:
      'Contratista eléctrico e instalador de paneles solares #1 en Puerto Rico. Sistemas solares desde $13,000, baterías de respaldo, reparación de bases de medidores. 4.9★ en Google.',
    url: 'https://www.kilowattpr.com',
    telephone: '+1-787-431-2275',
    email: 'info@kilowattpr.com',
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
      latitude: 18.3809,
      longitude: -67.1886,
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
    currenciesAccepted: 'USD',
    paymentAccepted: 'Cash, Credit Card, Financing',
    areaServed: {
      '@type': 'State',
      name: 'Puerto Rico',
      containedInPlace: { '@type': 'Country', name: 'United States' },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: 4.9,
      reviewCount: 10,
      bestRating: 5,
      worstRating: 1,
    },
    slogan: 'Professional solar engineering for Puerto Rico — 50+ years of experience, families protected across the island',
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
    '@id': 'https://www.kilowattpr.com/#julio-santiago-perez',
    name: authorData.name,
    jobTitle: 'Ingeniero Electricista Licenciado / Licensed Electrical Engineer',
    description: authorData.bio.es,
    url: authorData.url,
    worksFor: { '@id': 'https://www.kilowattpr.com/#organization' },
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

export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; url: string }[]
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
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
  dateModified,
  url,
}: {
  title: string
  description: string
  datePublished: string
  dateModified?: string
  url: string
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    datePublished,
    ...(dateModified ? { dateModified } : {}),
    author: {
      '@type': 'Person',
      '@id': 'https://www.kilowattpr.com/#julio-santiago-perez',
      name: authorData.name,
      jobTitle: 'Ingeniero Electricista Licenciado (PE #6083)',
      url: authorData.url,
    },
    publisher: { '@id': 'https://www.kilowattpr.com/#organization' },
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
