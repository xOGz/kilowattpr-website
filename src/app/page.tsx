import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Sun, Battery, Wrench, Star, CheckCircle, Phone, MessageCircle,
  ArrowRight, Shield, Zap,
} from 'lucide-react'
import QuoteForm from '@/components/QuoteForm'
import { LocalBusinessSchema, FAQSchema } from '@/components/SchemaOrg'
import FAQSection from '@/components/FAQSection'
import HeroWithTextRotate from '@/components/HeroWithTextRotate'
import TestimonialsSection from '@/components/TestimonialsSection'
import TrustBar from '@/components/TrustBar'
import CTAHeading from '@/components/CTAHeading'

export const metadata: Metadata = {
  title: 'Instalación de Paneles Solares en Puerto Rico',
  description:
    'Kilowatt PR LLC: empresa #1 en instalación de paneles solares en Puerto Rico. Peritos electricistas e ingenieros eléctricos con más de 3 décadas de experiencia. Cotización gratis hoy.',
  alternates: {
    canonical: 'https://www.kilowattpr.com',
    languages: {
      'es': 'https://www.kilowattpr.com',
      'en': 'https://www.kilowattpr.com/en',
    },
  },
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
    icon: Zap,
    title: 'Contratista Eléctrico',
    desc: 'Servicios de contratista eléctrico residencial y comercial. Reparación de bases de medidores con certificaciones de LUMA.',
    href: '/servicios/contratista-electrico',
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
    desc: 'Nuestros peritos electricistas e ingenieros eléctricos con más de 3 décadas de experiencia en Puerto Rico conocen las condiciones climáticas, los requisitos de OGPE y el proceso de interconexión con LUMA Energy como nadie.',
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
    desc: 'Manejamos todo el proceso de permisología con OGPE y la solicitud de interconexión con LUMA Energy. Tú no tienes que hacer nada.',
  },
  {
    num: '03',
    title: 'Instalación y Activación',
    desc: 'Nuestro equipo instala tu sistema en 1–2 días. Del contrato a producción: 1–3 semanas. Empiezas a ahorrar desde el primer mes.',
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
      'El proceso completo desde la firma del contrato hasta que tu sistema esté produciendo energía toma entre 1 y 3 semanas. Este tiempo incluye la obtención de permisos con OGPE (Oficina de Gerencia de Permisos), la aprobación de interconexión con LUMA Energy, la llegada del equipo y la instalación física. La instalación en sí toma generalmente 1 a 2 días. Manejamos todo el proceso de permisos por ti, sin que tengas que hacer nada.',
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

      {/* Hero — Enhanced with 21st.dev TextRotate + Three.js dotted surface */}
      <HeroWithTextRotate />

      {/* Trust bar — Animated count-up stats */}
      <TrustBar />

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
            Peritos electricistas e ingenieros eléctricos con más de 3 décadas de experiencia en Puerto Rico
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

      {/* Reviews — 21st.dev Auto-scrolling Testimonials Columns */}
      <TestimonialsSection />

      {/* Quote Form + CTA */}
      <section className="py-20 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <CTAHeading />
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
