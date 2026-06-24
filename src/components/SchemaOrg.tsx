export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness', 'Electrician', 'SolarEnergyContractor'],
    '@id': 'https://www.kilowattpr.com/#organization',
    name: 'Kilowatt PR LLC',
    alternateName: ['Kilowatt PR', 'Kilowatt Puerto Rico'],
    url: 'https://www.kilowattpr.com',
    logo: { '@type': 'ImageObject', url: 'https://www.kilowattpr.com/logo_transparent.png' },
    description:
      'Kilowatt PR LLC is a solar panel installation company and licensed electrical contractor in Puerto Rico (PR stands for Puerto Rico, not Public Relations). Engineering led by a licensed PE with over 30 years of experience; install team with over a decade of on-the-ground installation experience across all 78 municipalities of Puerto Rico. Services include residential and commercial solar energy systems, battery backup, and electrical contracting.',
    priceRange: '$$',
    knowsAbout: [
      'Micro inverter solar installation',
      'Hybrid solar systems with battery backup',
      'Roof sealing pre-solar installation',
      'Solar panel maintenance and cleaning',
      'Transfer switch (manual and ATS) installation',
      'EV charger installation (Level 2 and Level 3)',
      'Diesel electric plants (residential and commercial)',
      'Residential and commercial electrical contracting',
      'Meter base repair and installation',
      'LUMA Energy electrical certifications',
      'Forensic electrical services (perito)',
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
      'https://www.linkedin.com/company/kilowatt-pr-llc/',
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
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: 4.9,
      reviewCount: 10,
      bestRating: 5,
      worstRating: 1,
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios de Kilowatt PR',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Instalación de Micro Inversores',
            description: 'Sistemas solares con micro inversores residenciales y comerciales desde $11,950',
            areaServed: { '@type': 'State', name: 'Puerto Rico' },
            provider: { '@id': 'https://www.kilowattpr.com/#organization' },
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Sistemas Solares Híbridos con Batería de Respaldo',
            description: 'Sistemas híbridos con batería de respaldo (EG4, Solark, Fortress, Sunbeat) para independencia energética durante apagones de LUMA',
            areaServed: { '@type': 'State', name: 'Puerto Rico' },
            provider: { '@id': 'https://www.kilowattpr.com/#organization' },
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Sellado de Techo Previo a Instalación',
            description: 'Impermeabilización profesional de techo antes de la instalación solar. Garantía de 2 años de mano de obra',
            areaServed: { '@type': 'State', name: 'Puerto Rico' },
            provider: { '@id': 'https://www.kilowattpr.com/#organization' },
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Mantenimiento y Lavado de Paneles Solares',
            description: 'Limpieza profesional con agua purificada e inspección para máxima eficiencia',
            areaServed: { '@type': 'State', name: 'Puerto Rico' },
            provider: { '@id': 'https://www.kilowattpr.com/#organization' },
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Transfer Switch Manual / ATS',
            description: 'Instalación de transfer switch manual o automático (ATS) para integrar generadores o sistemas solares al panel eléctrico',
            areaServed: { '@type': 'State', name: 'Puerto Rico' },
            provider: { '@id': 'https://www.kilowattpr.com/#organization' },
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Cargadores para Vehículos Eléctricos (EV)',
            description: 'Instalación de cargadores EV Level 2 y Level 3 para residencias y comercios',
            areaServed: { '@type': 'State', name: 'Puerto Rico' },
            provider: { '@id': 'https://www.kilowattpr.com/#organization' },
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Plantas Eléctricas Diesel',
            description: 'Venta, instalación y servicio de plantas eléctricas diesel residenciales y comerciales',
            areaServed: { '@type': 'State', name: 'Puerto Rico' },
            provider: { '@id': 'https://www.kilowattpr.com/#organization' },
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Contratista Eléctrico Residencial y Comercial',
            description: 'Servicios eléctricos generales con perito electricista licenciado #21309: paneles, cableado, mejoras de servicio',
            areaServed: { '@type': 'State', name: 'Puerto Rico' },
            provider: { '@id': 'https://www.kilowattpr.com/#organization' },
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Reparación/Instalación de Base de Contador',
            description: 'Reparación e instalación de bases de medidor coordinada con LUMA Energy',
            areaServed: { '@type': 'State', name: 'Puerto Rico' },
            provider: { '@id': 'https://www.kilowattpr.com/#organization' },
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Certificaciones Eléctricas para LUMA Energy',
            description: 'Emisión de certificaciones eléctricas requeridas por LUMA Energy para reconexiones, mejoras de servicio y permisos',
            areaServed: { '@type': 'State', name: 'Puerto Rico' },
            provider: { '@id': 'https://www.kilowattpr.com/#organization' },
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Servicios Periciales Eléctricos',
            description: 'Informes, inspecciones y dictámenes de perito electricista licenciado para casos legales, seguros y certificaciones técnicas',
            areaServed: { '@type': 'State', name: 'Puerto Rico' },
            provider: { '@id': 'https://www.kilowattpr.com/#organization' },
          },
        },
      ],
    },
    founder: { '@id': 'https://www.kilowattpr.com/#xavier-acevedo' },
    employee: [
      { '@id': 'https://www.kilowattpr.com/#xavier-acevedo' },
      { '@id': 'https://www.kilowattpr.com/#julio-santiago-perez' },
      { '@id': 'https://www.kilowattpr.com/#kristen-roman' },
    ],
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
    '@id': 'https://www.kilowattpr.com/#organization',
    name: 'Kilowatt PR LLC',
    description:
      'Contratista eléctrico e instalador de paneles solares #1 en Puerto Rico. Sistemas solares desde $11,950, baterías de respaldo, reparación de bases de medidores. 4.9★ en Google.',
    url: 'https://www.kilowattpr.com',
    image: [
      'https://www.kilowattpr.com/logo_transparent.png',
      'https://www.kilowattpr.com/og-image.jpg',
    ],
    logo: 'https://www.kilowattpr.com/logo_transparent.png',
    telephone: '+1-787-431-2275',
    email: 'ventas@kilowattpr.com',
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
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '08:00',
        closes: '17:00',
      },
    ],
    priceRange: '$$',
    currenciesAccepted: 'USD',
    paymentAccepted: 'Cash, Check, Credit Card, Bank/Coop Financing (client-managed)',
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
    review: [
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Hector Viera' },
        datePublished: '2026-03-19',
        reviewRating: { '@type': 'Rating', ratingValue: 5, bestRating: 5 },
        reviewBody:
          'Javier es tremendo profesional y hace un excelente trabajo. Trabaja completamente organizado y es bien honesto con lo que ve que se necesite y como se pueden resolver los problemas. Recomendado al 100%.',
        inLanguage: 'es',
        itemReviewed: { '@id': 'https://www.kilowattpr.com/#organization' },
        publisher: { '@type': 'Organization', name: 'Google' },
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Richard Nohe' },
        datePublished: '2026-03-05',
        reviewRating: { '@type': 'Rating', ratingValue: 5, bestRating: 5 },
        reviewBody:
          'Kilowatt PR is excellent! We had a great experience and highly recommend them. They are knowledgeable, professional, punctual, and reasonably priced. They replaced an inverter for us and had to redo a lot of the work that the previous electrician did. If you need a good electrician, you can’t go wrong with them.',
        inLanguage: 'en',
        itemReviewed: { '@id': 'https://www.kilowattpr.com/#organization' },
        publisher: { '@type': 'Organization', name: 'Google' },
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Vanessa Bonilla' },
        datePublished: '2026-02-19',
        reviewRating: { '@type': 'Rating', ratingValue: 5, bestRating: 5 },
        reviewBody:
          'Excelente servicio, respondió rápido, trabajo limpio y muy profesional.',
        inLanguage: 'es',
        itemReviewed: { '@id': 'https://www.kilowattpr.com/#organization' },
        publisher: { '@type': 'Organization', name: 'Google' },
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Enrique Santiago' },
        datePublished: '2026-01-22',
        reviewRating: { '@type': 'Rating', ratingValue: 5, bestRating: 5 },
        reviewBody:
          'Excelente experiencia con Kilowatt PR. Desde el primer día fueron claros, responsables y bien profesionales. Me explicaron todo el proceso sin rodeos y cumplieron exactamente con lo prometido. La instalación del sistema solar quedó limpia, bien hecha y dentro del tiempo acordado. Se nota la experiencia y el conocimiento técnico del equipo. Además, me ayudaron con todo el proceso de medición neta sin complicaciones. Desde que el sistema está funcionando, todo corre perfecto. Los recomiendo 100% si buscas un trabajo serio, bien hecho y sin sorpresas.',
        inLanguage: 'es',
        itemReviewed: { '@id': 'https://www.kilowattpr.com/#organization' },
        publisher: { '@type': 'Organization', name: 'Google' },
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Wilfredo Acevedo' },
        datePublished: '2025-11-01',
        reviewRating: { '@type': 'Rating', ratingValue: 5, bestRating: 5 },
        reviewBody:
          '¡Muy profesional! Tremendo servicio. 100% recomendado. ¡Los duros del oeste!',
        inLanguage: 'es',
        itemReviewed: { '@id': 'https://www.kilowattpr.com/#organization' },
        publisher: { '@type': 'Organization', name: 'Google' },
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Rosie Torres De Calderón' },
        datePublished: '2025-10-11',
        reviewRating: { '@type': 'Rating', ratingValue: 5, bestRating: 5 },
        reviewBody:
          'Excelente trabajo de electricidad, muy acertado, rápido, confiable, profesional y con costos muy adecuados. Rosie Calderón, clienta agradecida.',
        inLanguage: 'es',
        itemReviewed: { '@id': 'https://www.kilowattpr.com/#organization' },
        publisher: { '@type': 'Organization', name: 'Google' },
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Jean Carlos Vélez' },
        datePublished: '2024-11-17',
        reviewRating: { '@type': 'Rating', ratingValue: 5, bestRating: 5 },
        reviewBody:
          'Excelente electricista, responsable y presta un servicio de calidad.',
        inLanguage: 'es',
        itemReviewed: { '@id': 'https://www.kilowattpr.com/#organization' },
        publisher: { '@type': 'Organization', name: 'Google' },
      },
    ],
    slogan: 'Professional solar engineering for Puerto Rico — 30+ years of experience, families protected across the island',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', 'h2', '.faq-answer', '[itemprop="description"]'],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function FAQSchema({
  faqs,
  inLanguage = 'es',
}: {
  faqs: { question: string; answer: string }[]
  inLanguage?: 'es' | 'en'
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage,
    publisher: { '@id': 'https://www.kilowattpr.com/#organization' },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['.faq-question', '.faq-answer'],
    },
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
        inLanguage,
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

export function HowToSchema({
  name,
  steps,
  totalTime,
  inLanguage = 'es',
}: {
  name: string
  steps: { name: string; text: string }[]
  totalTime?: string
  inLanguage?: 'es' | 'en'
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    inLanguage,
    ...(totalTime ? { totalTime } : {}),
    provider: { '@id': 'https://www.kilowattpr.com/#organization' },
    step: steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.name,
      text: s.text,
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
  experience: '30+ años',
  bio: {
    es: 'Ingeniero electricista licenciado con más de 30 años de experiencia. Ex ingeniero de NASA y ex profesor de la Universidad de Puerto Rico, Recinto de Mayagüez (RUM). Certificado como instalador de sistemas fotovoltaicos por el Programa de Política Pública Energética de Puerto Rico.',
    en: 'Licensed electrical engineer with over 30 years of experience. Former NASA engineer and former professor at the University of Puerto Rico, Mayagüez Campus (RUM). Certified photovoltaic systems installer by Puerto Rico\'s Public Energy Policy Program.',
  },
  url: 'https://www.kilowattpr.com/equipo/julio-santiago-perez/',
}

export const xavierData = {
  name: 'Xavier Acevedo Santiago',
  slug: 'xavier-acevedo',
  title: {
    es: 'Fundador y CEO · Perito Electricista Licenciado',
    en: 'Founder and CEO · Licensed Electrical Contractor',
  },
  credentials: {
    electricianLicense: '21309',
    role: 'Founder / CEO',
  },
  experience: 'más de una década',
  bio: {
    es: 'Fundador y director ejecutivo de Kilowatt PR LLC. Perito electricista licenciado #21309 con más de una década de experiencia instalando sistemas solares residenciales y comerciales en Puerto Rico. Fundó la empresa después del huracán María con la misión de proveer energía confiable y resiliente a familias y negocios puertorriqueños frente a la crisis de LUMA Energy.',
    en: 'Founder and CEO of Kilowatt PR LLC. Licensed electrical contractor #21309 with over a decade of experience installing residential and commercial solar energy systems in Puerto Rico. Founded the company after Hurricane María with the mission of bringing reliable, resilient power to Puerto Rican families and businesses amid the LUMA Energy crisis.',
  },
  url: 'https://www.kilowattpr.com/equipo/xavier-acevedo/',
}

export const kristenData = {
  name: 'Kristen S. Román',
  slug: 'kristen-roman',
  title: {
    es: 'Coordinadora de Proyectos y Servicio al Cliente',
    en: 'Project Coordinator and Customer Service Lead',
  },
  credentials: {
    role: 'Project Coordinator',
  },
  experience: '',
  bio: {
    es: 'Coordinadora de proyectos y servicio al cliente en Kilowatt PR. Primer punto de contacto para cada lead, gestiona la agenda de consultas, coordinación con los técnicos de instalación y el seguimiento post-instalación. Responsable de que cada cliente reciba respuesta en menos de 2 horas durante horario laboral.',
    en: 'Project coordinator and customer service lead at Kilowatt PR. First point of contact for every lead, handling consultation scheduling, coordination with the install crew, and post-install follow-up. Responsible for ensuring every customer gets a response within 2 hours during business hours.',
  },
  url: 'https://www.kilowattpr.com/equipo/kristen-roman/',
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
    sameAs: [
      'https://www.wikidata.org/wiki/Q139769725',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function XavierPersonSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': 'https://www.kilowattpr.com/#xavier-acevedo',
    name: xavierData.name,
    jobTitle: 'Founder and CEO, Licensed Electrical Contractor',
    description: xavierData.bio.es,
    url: xavierData.url,
    worksFor: { '@id': 'https://www.kilowattpr.com/#organization' },
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Professional License',
        name: 'Perito Electricista Licenciado — Licensed Electrical Contractor',
        recognizedBy: {
          '@type': 'Organization',
          name: 'Junta Examinadora de Ingenieros y Agrimensores de Puerto Rico',
        },
        identifier: xavierData.credentials.electricianLicense,
      },
    ],
    knowsAbout: [
      'Solar Panel Installation',
      'Residential Solar Systems',
      'Commercial Solar Systems',
      'Electrical Contracting',
      'LUMA Energy Interconnection',
      'Net Metering with LUMA Energy',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function KristenPersonSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': 'https://www.kilowattpr.com/#kristen-roman',
    name: kristenData.name,
    jobTitle: 'Project Coordinator and Customer Service Lead',
    description: kristenData.bio.es,
    url: kristenData.url,
    worksFor: { '@id': 'https://www.kilowattpr.com/#organization' },
    knowsAbout: [
      'Customer Service',
      'Project Coordination',
      'Consultation Scheduling',
      'Post-Installation Follow-up',
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
  image = 'https://www.kilowattpr.com/og-image.jpg',
}: {
  title: string
  description: string
  datePublished: string
  dateModified?: string
  url: string
  /** Absolute URL of the article's representative image. Google requires
      `image` for Article rich results; defaults to the site OG image. */
  image?: string
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image,
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
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
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
