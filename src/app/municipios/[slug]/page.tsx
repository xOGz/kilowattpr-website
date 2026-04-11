import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MapPin, Phone, MessageCircle, CheckCircle, Sun, Home, AlertTriangle } from 'lucide-react'
import { municipios } from '@/data/municipios'
import FAQSection from '@/components/FAQSection'
import { BreadcrumbSchema } from '@/components/SchemaOrg'

export async function generateStaticParams() {
  return municipios.map((m) => ({ slug: m.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const municipio = municipios.find((m) => m.slug === params.slug)
  if (!municipio) return {}
  return {
    title: `Instalación de Paneles Solares en ${municipio.name}, Puerto Rico`,
    description: `Kilowatt PR instala paneles solares en ${municipio.name}, Puerto Rico. ${municipio.averageSunHours} de sol diarias, técnicos certificados, consulta gratis, garantía de 25 años. Servicio completo incluyendo permisos y LUMA.`,
    alternates: { canonical: `https://www.kilowattpr.com/municipios/${municipio.slug}` },
    openGraph: {
      title: `Paneles Solares en ${municipio.name} PR | Kilowatt PR`,
      description: `Instalación de sistemas solares residenciales y comerciales en ${municipio.name}, Puerto Rico. ${municipio.averageSunHours} de sol diarias.`,
      url: `https://www.kilowattpr.com/municipios/${municipio.slug}`,
    },
  }
}

export default function MunicipioPage({ params }: { params: { slug: string } }) {
  const municipio = municipios.find((m) => m.slug === params.slug)
  if (!municipio) notFound()

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Kilowatt PR LLC',
    description: `Instalación de paneles solares en ${municipio.name}, Puerto Rico. Peritos electricistas e ingenieros eléctricos con más de 3 décadas de experiencia. ${municipio.averageSunHours} de sol diarias.`,
    url: `https://www.kilowattpr.com/municipios/${municipio.slug}`,
    telephone: '+1-787-431-2275',
    areaServed: {
      '@type': 'City',
      name: municipio.name,
      containedInPlace: { '@type': 'State', name: 'Puerto Rico' },
    },
  }

  const baseFaqs = [
    {
      question: `¿Ofrecen instalación de paneles solares en ${municipio.name}?`,
      answer: `Sí, Kilowatt PR ofrece servicio completo de instalación de paneles solares en ${municipio.name} y todos los municipios circundantes. Nuestro equipo de peritos electricistas e ingenieros eléctricos con más de 3 décadas de experiencia en Puerto Rico atiende proyectos residenciales y comerciales en toda la isla. Contáctanos hoy para una consulta gratis sin compromiso.`,
    },
    {
      question: `¿Cuánto cuesta instalar paneles solares en ${municipio.name}?`,
      answer: `El costo de un sistema solar en ${municipio.name} comienza desde $13,000 en adelante para instalaciones residenciales, dependiendo del tamaño del sistema y el consumo eléctrico del hogar. El precio exacto se determina durante la consulta gratis, donde analizamos tu consumo y diseñamos el sistema ideal. Ofrecemos opciones de financiamiento para que puedas empezar a ahorrar desde el primer mes.`,
    },
    {
      question: `¿Cuánto tiempo tarda la instalación en ${municipio.name}?`,
      answer: `El proceso completo desde la firma del contrato hasta la activación del sistema en ${municipio.name} toma entre 1 y 3 semanas. Este tiempo incluye la tramitación de permisos con OGPE y la aprobación de interconexión con LUMA Energy. La instalación física se realiza en 1 a 2 días. Manejamos todos los trámites por ti.`,
    },
    {
      question: `¿Trabajan con la interconexión de LUMA Energy en ${municipio.name}?`,
      answer: `Sí, manejamos todo el proceso de interconexión con LUMA Energy como parte de cada instalación en ${municipio.name}. Preparamos la solicitud de interconexión, coordinamos la inspección y nos aseguramos de que tu medidor bidireccional esté operativo. Tenemos experiencia con el proceso en toda Puerto Rico y conocemos los tiempos y requisitos específicos.`,
    },
  ]

  const allFaqs = [...municipio.uniqueFAQs, ...baseFaqs]

  const nearbyMunicipioData = municipio.nearbyMunicipios
    .map((slug) => municipios.find((m) => m.slug === slug))
    .filter(Boolean)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Inicio', url: 'https://www.kilowattpr.com' },
          { name: 'Municipios', url: 'https://www.kilowattpr.com/municipios' },
          { name: municipio.name, url: `https://www.kilowattpr.com/municipios/${municipio.slug}` },
        ]}
      />

      {/* Hero */}
      <section className="bg-navy-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
            <Link href="/" className="hover:text-solar-yellow">Inicio</Link>
            <span>/</span>
            <Link href="/municipios" className="hover:text-solar-yellow">Municipios</Link>
            <span>/</span>
            <span className="text-solar-yellow">{municipio.name}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Instalación de Paneles Solares en{' '}
            <span className="text-solar-yellow">{municipio.name}, Puerto Rico</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mb-8">
            {municipio.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/17874312275"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <MessageCircle size={18} />
              Cotización Gratis — {municipio.name}
            </a>
            <a href="tel:+17874312275" className="btn-secondary">
              <Phone size={18} />
              787-431-2275
            </a>
          </div>
        </div>
      </section>

      {/* Solar Conditions Card */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Condiciones Solares en {municipio.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-gray-50 rounded-xl p-5">
              <div className="flex items-center gap-2 text-solar-yellow mb-2">
                <Sun size={18} />
                <span className="text-sm font-semibold text-gray-500">Sol Diario</span>
              </div>
              <p className="text-xl font-bold text-gray-900">{municipio.averageSunHours}</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-5">
              <div className="flex items-center gap-2 text-solar-yellow mb-2">
                <Home size={18} />
                <span className="text-sm font-semibold text-gray-500">Techo Típico</span>
              </div>
              <p className="text-sm font-semibold text-gray-900">{municipio.commonRoofType}</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-5">
              <div className="flex items-center gap-2 text-solar-yellow mb-2">
                <AlertTriangle size={18} />
                <span className="text-sm font-semibold text-gray-500">Consideración</span>
              </div>
              <p className="text-sm font-semibold text-gray-900">{municipio.topConcern}</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-5">
              <div className="flex items-center gap-2 text-solar-yellow mb-2">
                <MapPin size={18} />
                <span className="text-sm font-semibold text-gray-500">Población</span>
              </div>
              <p className="text-xl font-bold text-gray-900">{municipio.population}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Notes — Unique Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Instalación Solar en {municipio.name} — Lo Que Debes Saber
          </h2>

          <div className="prose prose-lg max-w-none text-gray-600 mb-10">
            <p>{municipio.installationNotes}</p>
            <p>{municipio.geography} {municipio.lumaContext}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {[
              `Instalación residencial y comercial en ${municipio.name}`,
              'Sistemas con batería de respaldo para apagones',
              'Gestión completa de permisos OGPE',
              'Interconexión con LUMA Energy incluida',
              'Sellado de techo previo cuando es necesario',
              'Mantenimiento y lavado periódico',
              'Diseño 3D personalizado gratuito',
              'Garantía de 25 años en paneles',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle className="text-solar-yellow shrink-0" size={16} />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Local */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Por Qué Elegir un Instalador Local en {municipio.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Conocemos Tu Área</h3>
              <p className="text-gray-600 text-sm">
                {municipio.localLandmark}. Conocemos las condiciones climáticas, los tipos de techo
                y los patrones de consumo eléctrico específicos de {municipio.name}.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Servicio Rápido</h3>
              <p className="text-gray-600 text-sm">
                Como empresa local con sede en Aguada, ofrecemos tiempos de respuesta rápidos
                para cotizaciones, instalación y mantenimiento en {municipio.name} y municipios cercanos.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Ingeniero PE Licenciado</h3>
              <p className="text-gray-600 text-sm">
                Cada sistema es diseñado por el Ing. Julio A. Santiago Pérez (PE #6083),
                con más de 50 años de experiencia, ex ingeniero de NASA y ex profesor de la UPR Mayagüez.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">4.9★ en Google</h3>
              <p className="text-gray-600 text-sm">
                Nuestros clientes nos califican 4.9 estrellas en Google. Instalamos con la misma
                calidad y compromiso en {municipio.name} que en cualquier parte de Puerto Rico.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy-dark text-white rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-3">
              Cotización Gratis en {municipio.name}
            </h2>
            <p className="text-gray-300 mb-6">
              Análisis de consumo, diseño 3D y proyección de ahorros a 25 años.
              Sin costo y sin compromiso.
            </p>
            <a
              href="https://wa.me/17874312275"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <MessageCircle size={18} />
              Escribir por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* FAQs — unique + base */}
      <FAQSection
        faqs={allFaqs}
        title={`Preguntas sobre Energía Solar en ${municipio.name}`}
      />

      {/* Nearby municipalities */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-bold text-gray-900 mb-4">Municipios Cercanos</h3>
          <div className="flex flex-wrap gap-2 mb-6">
            {nearbyMunicipioData.map((m) =>
              m ? (
                <Link
                  key={m.slug}
                  href={`/municipios/${m.slug}`}
                  className="text-sm bg-gray-100 hover:bg-solar-yellow hover:text-gray-900 text-gray-700 px-3 py-1.5 rounded-full transition-colors"
                >
                  {m.name}
                </Link>
              ) : null
            )}
          </div>

          <h3 className="font-bold text-gray-900 mb-4">Todos los Municipios</h3>
          <div className="flex flex-wrap gap-2">
            {municipios
              .filter((m) => m.slug !== municipio.slug)
              .map((m) => (
                <Link
                  key={m.slug}
                  href={`/municipios/${m.slug}`}
                  className="text-sm text-solar-yellow hover:underline"
                >
                  {m.name}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  )
}
