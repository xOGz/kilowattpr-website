import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MapPin, Phone, MessageCircle, CheckCircle } from 'lucide-react'
import { municipios } from '@/data/municipios'
import FAQSection from '@/components/FAQSection'

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
    description: `Kilowatt PR instala paneles solares en ${municipio.name}, Puerto Rico. Técnicos certificados, consulta gratis, garantía de 25 años. Servicio completo incluyendo permisos y LUMA.`,
    alternates: { canonical: `https://www.kilowattpr.com/municipios/${municipio.slug}` },
    openGraph: {
      title: `Paneles Solares en ${municipio.name} PR | Kilowatt PR`,
      description: `Instalación de sistemas solares residenciales y comerciales en ${municipio.name}, Puerto Rico.`,
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
    description: `Instalación de paneles solares en ${municipio.name}, Puerto Rico. Peritos electricistas e ingenieros eléctricos con más de 3 décadas de experiencia.`,
    url: `https://www.kilowattpr.com/municipios/${municipio.slug}`,
    telephone: '+1-787-431-2275',
    areaServed: {
      '@type': 'City',
      name: municipio.name,
      containedInPlace: { '@type': 'State', name: 'Puerto Rico' },
    },
  }

  const faqs = [
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* Hero */}
      <section className="bg-navy-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
            <Link href="/" className="hover:text-solar-yellow">Inicio</Link>
            <span>/</span>
            <Link href="/servicios" className="hover:text-solar-yellow">Servicios</Link>
            <span>/</span>
            <span className="text-solar-yellow">{municipio.name}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Instalación de Paneles Solares en{' '}
            <span className="text-solar-yellow">{municipio.name}, Puerto Rico</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mb-8">
            Peritos electricistas e ingenieros eléctricos con más de 3 décadas de experiencia instalando sistemas
            solares en Puerto Rico. Servicio completo en {municipio.name} y municipios
            circundantes.
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

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-gray-500 mb-6">
            <MapPin size={16} className="text-solar-yellow" />
            <span>
              {municipio.name}, Puerto Rico — Población estimada: {municipio.population}
            </span>
          </div>

          <div className="prose prose-lg max-w-none text-gray-600 mb-10">
            <p>{municipio.description}</p>
            <p>{municipio.geography}</p>
            <p>{municipio.lumaContext}</p>
            <p>
              Kilowatt PR ofrece instalación completa de sistemas solares residenciales y
              comerciales en {municipio.name}. Nuestro servicio incluye consulta y análisis
              de consumo, diseño 3D personalizado del sistema, gestión de todos los permisos
              con OGPE, tramitación de la interconexión con LUMA Energy, instalación por
              técnicos certificados y garantía de 25 años en los paneles.
            </p>
            <p>
              Con peritos electricistas e ingenieros eléctricos con más de 3 décadas de experiencia en Puerto Rico,
              conocemos las condiciones climáticas, las regulaciones locales y los requisitos
              específicos de LUMA Energy en {municipio.name} y la región. Cada sistema que
              instalamos está diseñado para maximizar la producción solar y la vida útil del
              equipo en las condiciones específicas de tu área.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {[
              `Instalación residencial en ${municipio.name}`,
              'Sistemas con batería de respaldo',
              'Gestión completa de permisos OGPE',
              'Interconexión con LUMA Energy',
              'Sellado de techo previo a instalación',
              'Mantenimiento y lavado periódico',
              'Consulta y diseño 3D gratis',
              'Garantía de 25 años en paneles',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle className="text-solar-yellow shrink-0" size={16} />
                {item}
              </div>
            ))}
          </div>

          <div className="bg-navy-dark text-white rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-3">
              Cotización Gratis en {municipio.name}
            </h2>
            <p className="text-gray-300 mb-6">
              Análisis de consumo, diseño 3D y proyección de ahorros a 7 años.
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

      <FAQSection
        faqs={faqs}
        title={`Preguntas sobre Energía Solar en ${municipio.name}`}
      />

      {/* Other municipalities */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-bold text-navy-dark mb-4">También Servimos</h3>
          <div className="flex flex-wrap gap-2">
            {municipios
              .filter((m) => m.slug !== municipio.slug)
              .slice(0, 10)
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
