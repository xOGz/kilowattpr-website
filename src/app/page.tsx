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
  title: 'Instalación de Paneles Solares en Puerto Rico',
  description:
    'Kilowatt PR LLC: empresa #1 en instalación de paneles solares en Puerto Rico. Técnicos y jornaleros con más de una década de experiencia. Cotización gratis hoy.',
  alternates: { canonical: 'https://www.kilowattpr.com' },
  openGraph: {
    title: 'Instalación de Paneles Solares en Puerto Rico | Kilowatt PR',
    description:
      'Empresa #1 en instalación de paneles solares en Puerto Rico. Técnicos certificados, garantía de 25 años, consulta gratis.',
    url: 'https://www.kilowattpr.com',
  },
}

const services = [
  {
    icon: Sun,
    title: 'Instalación de Paneles Solares',
    desc: 'Sistemas fotovoltaicos residenciales y comerciales diseñados para las condiciones climáticas de Puerto Rico.',
    href: '/servicios/instalacion-paneles-solares',
  },
  {
    icon: Battery,
    title: 'Sistemas con Batería',
    desc: 'Independencia energética total durante los apagones de LUMA Energy. Hasta 24 horas de respaldo.',
    href: '/servicios/sistemas-con-bateria',
  },
  {
    icon: Home,
    title: 'Sellado de Techo',
    desc: 'Impermeabilización profesional del techo antes de la instalación. Garantía de 2 años de mano de obra.',
    href: '/servicios/sellado-de-techo',
  },
  {
    icon: Wrench,
    title: 'Mantenimiento y Lavado',
    desc: 'Limpieza profesional cada 6–8 meses para mantener la máxima eficiencia de tus paneles solares.',
    href: '/servicios/mantenimiento-lavado',
  },
]

const differentiators = [
  {
    icon: CheckCircle,
    title: 'Más de una Década de Experiencia',
    desc: 'Nuestros técnicos y jornaleros con más de una década de experiencia en Puerto Rico conocen las condiciones climáticas, los requisitos de ARPE y el proceso de interconexión con LUMA Energy como nadie.',
  },
  {
    icon: Shield,
    title: 'Garantía de 25 Años en Paneles',
    desc: 'Trabajamos con los fabricantes más confiables del mercado. Tus paneles están respaldados por una garantía de 25 años, más 2 años de garantía de mano de obra en sellado de techo.',
  },
  {
    icon: Zap,
    title: 'Diseñado para Puerto Rico',
    desc: 'Cada sistema que instalamos está optimizado para las condiciones de Puerto Rico: huracanes, calor tropical, polvo del Sahara y la infraestructura de LUMA Energy.',
  },
  {
    icon: Star,
    title: '4.9 Estrellas / 147 Reseñas',
    desc: 'Nuestra reputación la construyen nuestros clientes. Con 4.9 estrellas en 147 reseñas verificadas, somos la empresa solar de mayor confianza en Puerto Rico.',
  },
]

const steps = [
  {
    num: '01',
    title: 'Consulta Gratis',
    desc: 'Analizamos tu consumo eléctrico, diseñamos tu sistema en 3D y te presentamos una proyección de ahorro a 25 años, sin costo y sin compromiso.',
  },
  {
    num: '02',
    title: 'Diseño y Permisos',
    desc: 'Manejamos todo el proceso de permisología con ARPE y la solicitud de interconexión con LUMA Energy. Tú no tienes que hacer nada.',
  },
  {
    num: '03',
    title: 'Instalación y Activación',
    desc: 'Nuestro equipo instala tu sistema en 1–2 días. Del contrato a producción: 6–10 semanas. Empiezas a ahorrar desde el primer mes.',
  },
]

const faqs = [
  {
    question: '¿Cuánto cuesta un sistema solar en Puerto Rico?',
    answer:
      'Un sistema solar residencial en Puerto Rico tiene un costo promedio de $15,000 a $35,000, dependiendo del consumo eléctrico del hogar y el tamaño del sistema requerido. Los sistemas más populares van de 5kW a 10kW con o sin batería. Ofrecemos opciones de financiamiento que permiten que muchas familias comiencen a ahorrar desde el primer mes sin un desembolso total inicial. Durante la consulta gratis te presentamos un análisis detallado del costo y los ahorros proyectados a 25 años.',
  },
  {
    question: '¿Cuánto tiempo tarda la instalación solar en Puerto Rico?',
    answer:
      'El proceso completo desde la firma del contrato hasta que tu sistema esté produciendo energía toma entre 6 y 10 semanas. Este tiempo incluye la obtención de permisos con ARPE (Administración de Reglamentos y Permisos), la aprobación de interconexión con LUMA Energy, la llegada del equipo y la instalación física. La instalación en sí toma generalmente 1 a 2 días. Manejamos todo el proceso de permisos por ti, sin que tengas que hacer nada.',
  },
  {
    question: '¿Con qué frecuencia se deben limpiar los paneles solares?',
    answer:
      'Recomendamos mantenimiento y lavado cada 6 a 8 meses para sistemas en el interior y central de Puerto Rico. Para propiedades en zonas costeras, la frecuencia ideal es cada 4 a 6 meses debido a la acumulación de salitre y polvo del Sahara que reducen la eficiencia de los paneles. Puerto Rico tiene condiciones ambientales únicas que exigen un mantenimiento especializado. Un panel sucio puede perder hasta un 25% de su eficiencia, por lo que el mantenimiento regular protege tu inversión.',
  },
  {
    question: '¿Funciona la batería solar durante los apagones de LUMA Energy?',
    answer:
      'Sí, los sistemas solares con batería están diseñados específicamente para proporcionar independencia energética durante los apagones de LUMA Energy. Un sistema de batería estándar puede proporcionar hasta 24 horas de electricidad para los electrodomésticos esenciales del hogar. Nuestros sistemas están configurados para desconectarse automáticamente de la red cuando detectan un apagón y reconectarse cuando LUMA Energy restaura el servicio. Esto protege tanto a tu familia como a los técnicos de LUMA que trabajan en las líneas.',
  },
  {
    question: '¿Qué garantías ofrecen en los sistemas solares?',
    answer:
      'Los paneles solares que instalamos cuentan con una garantía del fabricante de 25 años que cubre tanto el rendimiento como los defectos de fabricación. Adicionalmente, ofrecemos una garantía de 2 años de mano de obra en todos los trabajos de sellado de techo. Los inversores y baterías tienen garantías específicas según el fabricante, generalmente entre 5 y 10 años. Todos estos detalles te los explicamos con claridad durante la consulta inicial.',
  },
  {
    question: '¿Qué incluye la consulta gratis de Kilowatt PR?',
    answer:
      'Nuestra consulta gratis incluye: análisis completo de tu consumo eléctrico actual, diseño 3D personalizado del sistema solar para tu techo específico, proyección de ahorros a 25 años basada en las tarifas actuales de LUMA Energy, evaluación del estado del techo y recomendaciones, y un estimado detallado de la instalación con opciones de financiamiento. No hay compromiso de compra y toda la información es tuya para tomar la mejor decisión.',
  },
]

export default function HomePage() {
  return (
    <>
      <LocalBusinessSchema />
      <FAQSchema faqs={faqs} />

      {/* Hero — Dark canvas with editorial typography */}
      <section className="relative bg-surface overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1600&q=80"
            alt="Paneles solares instalados en techo en Puerto Rico"
            fill
            className="object-cover opacity-20"
            priority
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-surface/80 via-surface/60 to-surface" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 pt-40">
          <div className="max-w-4xl">
            <div className="chip-gold inline-flex items-center gap-2 mb-8">
              <Star size={12} />
              4.9★ — 147 RESEÑAS VERIFICADAS
            </div>
            <h1 className="font-display text-display-lg mb-6 text-on-surface">
              Energía Solar de{' '}
              <span className="text-primary-container">Vanguardia</span>
              <br />
              en Puerto Rico
            </h1>
            <p className="text-xl text-on-surface-variant mb-10 leading-relaxed max-w-2xl font-body">
              Técnicos y jornaleros con más de una década de experiencia en Puerto Rico.
              Independencia energética real para tu hogar o negocio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/17874312275"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base px-8 py-4"
              >
                <MessageCircle size={20} />
                Cotización Gratis por WhatsApp
              </a>
              <Link href="/servicios" className="btn-secondary text-base px-8 py-4">
                Ver Servicios <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar — Subtle tonal shift, no borders */}
      <section className="bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Star, label: '4.9★ / 147 Reseñas' },
              { icon: Shield, label: 'Garantía 25 Años' },
              { icon: CheckCircle, label: '+10 Años Experiencia' },
              { icon: MapPin, label: 'Todo Puerto Rico' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center justify-center gap-2 font-label text-label-lg text-on-surface-variant py-2">
                <Icon size={16} className="text-primary-container" />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services grid — Floating pane cards */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Nuestros Servicios</h2>
            <p className="section-subtitle mx-auto mt-4">
              Soluciones completas de energía solar para hogares y negocios en toda la isla.
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
                  Ver más <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Kilowatt — Elevated tonal section */}
      <section className="py-20 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">¿Por Qué Elegir Kilowatt PR?</h2>
            <p className="section-subtitle mx-auto">
              Somos la empresa solar de mayor confianza en Puerto Rico. Estos son nuestros
              compromisos con cada cliente.
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
            Técnicos y jornaleros con más de una década de experiencia en Puerto Rico
          </p>
        </div>
      </section>

      {/* How it works — Steps with editorial numbers */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">¿Cómo Funciona el Proceso?</h2>
            <p className="section-subtitle mx-auto">De la consulta a la producción en 3 pasos.</p>
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
      <FAQSection faqs={faqs} title="Preguntas Frecuentes sobre Energía Solar en Puerto Rico" />

      {/* Reviews — Glass cards */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Lo Que Dicen Nuestros Clientes</h2>
            <div className="flex items-center justify-center gap-2 mt-5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-primary-container fill-primary-container" size={24} />
              ))}
              <span className="text-2xl font-display font-bold text-on-surface ml-2">4.9</span>
              <span className="text-on-surface-variant">/ 147 reseñas</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Carlos M.',
                location: 'Aguada, PR',
                text: 'Excelente servicio de principio a fin. El equipo de Kilowatt PR manejó todos los permisos y la interconexión con LUMA. Mi factura bajó un 90% desde el primer mes. 100% recomendados.',
              },
              {
                name: 'María L.',
                location: 'San Juan, PR',
                text: 'Después de los apagones del año pasado decidí instalar el sistema con batería. Kilowatt PR me explicó todo claramente, el precio fue justo y la instalación fue rápida. Ahora tengo paz mental.',
              },
              {
                name: 'Roberto V.',
                location: 'Ponce, PR',
                text: 'Contraté para mi negocio. El equipo fue muy profesional, llegaron a tiempo y el sistema funciona perfectamente. Ya van 8 meses y cero problemas. El ahorro mensual es real.',
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
                ¿Listo para la Independencia Energética?
              </h2>
              <p className="text-lg text-on-surface-variant mb-6 leading-relaxed">
                Completa el formulario y te contactamos en menos de 24 horas con tu cotización
                gratis. Sin compromiso, sin costo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/17874312275"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp text-base px-6 py-4"
                >
                  <MessageCircle size={20} />
                  WhatsApp — Respuesta Inmediata
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
                Solicita Tu Cotización Gratis
              </h3>
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
