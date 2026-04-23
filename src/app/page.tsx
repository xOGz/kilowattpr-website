import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  Sun, Battery, Wrench, Star, CheckCircle, Phone, MessageCircle,
  ArrowRight, Shield, Zap, DollarSign,
} from 'lucide-react'
import QuoteForm from '@/components/QuoteForm'
import SolarCalculator from '@/components/SolarCalculator'
import { LocalBusinessSchema, FAQSchema } from '@/components/SchemaOrg'
import FAQSection from '@/components/FAQSection'
import HeroWithTextRotate from '@/components/HeroWithTextRotate'
import TestimonialsSection from '@/components/TestimonialsSection'
import TrustBar from '@/components/TrustBar'
import CTAHeading from '@/components/CTAHeading'

export const metadata: Metadata = {
  title: 'Paneles Solares y Contratista Eléctrico en Puerto Rico',
  description:
    'Instalación de paneles solares desde $13,000 en Puerto Rico. Contratista eléctrico con 30+ años. 4.9★ en Google — 10+ reseñas verificadas. Cotización gratis.',
  alternates: {
    canonical: 'https://www.kilowattpr.com',
    languages: {
      'es': 'https://www.kilowattpr.com',
      'en': 'https://www.kilowattpr.com/en',
      'x-default': 'https://www.kilowattpr.com',
    },
  },
  openGraph: {
    title: 'Kilowatt PR | Paneles Solares desde $13,000 en Puerto Rico',
    description:
      'Peritos electricistas con 30+ años. Instalación solar, baterías, contratista eléctrico. 4.9★ en Google. Cotización gratis hoy.',
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
    title: 'Ingeniero PE con 50+ Años',
    desc: 'Cada sistema es diseñado por el Ing. Julio A. Santiago Pérez (PE #6083), ingeniero eléctrico licenciado con más de 50 años de experiencia, ex ingeniero de NASA y ex profesor de la UPR Mayagüez. No vendedores — ingeniería real.',
  },
  {
    icon: Shield,
    title: 'Resistente a Huracanes',
    desc: 'Sistemas diseñados para las condiciones extremas de Puerto Rico: huracanes, calor tropical y polvo del Sahara. Paneles con garantía de 25 años, inversores y baterías con 5 a 10 años de garantía local.',
  },
  {
    icon: Zap,
    title: 'Independencia de LUMA',
    desc: 'Batería de respaldo incluida en nuestros sistemas más populares. Hasta 24 horas de electricidad durante apagones de LUMA Energy. Tu familia protegida cuando la red falla.',
  },
  {
    icon: Star,
    title: '4.9 Estrellas en Google',
    desc: 'Nuestra reputación la construyen nuestros clientes. Con 4.9 estrellas en Google, somos la empresa solar de mayor confianza en Puerto Rico.',
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
      'Un sistema solar residencial en Puerto Rico tiene un costo promedio de $13,000 en adelante, dependiendo del consumo eléctrico del hogar y el tamaño del sistema requerido o deseado. Los sistemas más populares comienzan en 4 kW de solar y 10 kWh en batería, y para residencial hemos trabajado hasta 25 kW en solar y 64+ kWh. Durante la consulta gratis te presentamos un análisis detallado del costo y los ahorros proyectados a 7 años.',
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
      'Los paneles solares que instalamos cuentan con una garantía del fabricante de 25 años que cubre tanto el rendimiento como los defectos de fabricación. Los inversores y baterías tienen garantías mayormente locales generalmente entre 5 y 10 años. Además, incluimos una inspección de calidad a los 3 meses sin costo adicional para verificar que tu sistema está operando al máximo rendimiento. También ofrecemos un plan de servicio extendido opcional para quienes desean cobertura adicional.',
  },
  {
    question: '¿Qué incluye la consulta gratis de Kilowatt PR?',
    answer:
      'Nuestra consulta gratis incluye: análisis completo de tu consumo eléctrico actual, diseño 3D personalizado del sistema solar para tu techo específico, proyección de ahorros a 7 años basada en las tarifas actuales de LUMA Energy, evaluación del estado del techo y recomendaciones, y un estimado detallado de la instalación. No hay compromiso de compra y toda la información es tuya para tomar la mejor decisión.',
  },
]

export default function HomePage() {
  return (
    <>
      <LocalBusinessSchema />
      <FAQSchema faqs={faqs} />

      {/* Hero — Enhanced with 21st.dev TextRotate + Three.js dotted surface */}
      <HeroWithTextRotate />

      {/* Trust bar — LIGHT */}
      <TrustBar />

      {/* Services grid — LIGHT */}
      <section className="py-20 section-light-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-display-md leading-tight text-[#121240]">Nuestros Servicios</h2>
            <p className="font-body text-body-lg mt-4 max-w-2xl mx-auto text-[#4A4A6A]">
              Soluciones completas de energía solar para hogares y negocios en toda la isla.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            {services.map((svc) => (
              <Link
                key={svc.href}
                href={svc.href}
                className="card-light group text-center flex flex-col items-center"
              >
                <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-5 transition-colors duration-300"
                  style={{ background: 'rgba(245, 166, 35, 0.1)' }}
                >
                  <svc.icon className="text-[#E09500]" size={28} />
                </div>
                <h3 className="font-headline font-semibold text-[#121240] mb-3">{svc.title}</h3>
                <p className="text-body-md text-[#4A4A6A] leading-relaxed mb-5">{svc.desc}</p>
                <span className="text-[#E09500] font-label text-label-lg flex items-center gap-1 mt-auto group-hover:gap-2 transition-all duration-200">
                  Ver más <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery — Instalaciones Reales — LIGHT WHITE */}
      <section className="py-20 section-light-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="chip-gold inline-flex items-center gap-2 mb-5">
              <Sun size={12} />
              TRABAJO REAL, NO RENDERS
            </span>
            <h2 className="font-display text-display-md leading-tight text-[#121240]">
              Instalaciones Recientes en Puerto Rico
            </h2>
            <p className="font-body text-body-lg mt-4 max-w-2xl mx-auto text-[#4A4A6A]">
              Cada sistema es diseñado por ingeniería y ejecutado por peritos electricistas
              licenciados con más de una década de experiencia en Puerto Rico.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            <div className="relative lg:col-span-2 lg:row-span-2 h-64 md:h-80 lg:h-full rounded-2xl overflow-hidden group shadow-xl">
              <Image
                src="/gallery/instalacion-panoramica.webp"
                alt="Vista panorámica de paneles solares instalados sobre techo en Puerto Rico por Kilowatt PR"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/70 via-navy-dark/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <span className="text-xs font-label uppercase tracking-wider text-solar-yellow">
                  Sistema Residencial
                </span>
                <h3 className="font-display text-2xl md:text-3xl font-bold mt-1 drop-shadow-lg">
                  Paneles de alta eficiencia sobre techo sellado
                </h3>
              </div>
            </div>

            <div className="relative h-64 rounded-2xl overflow-hidden group shadow-lg">
              <Image
                src="/gallery/inversor-solark.webp"
                alt="Inversor híbrido Sol-Ark instalado por Kilowatt PR"
                fill
                sizes="(max-width: 1024px) 100vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/75 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <span className="text-xs font-label uppercase tracking-wider text-solar-yellow">
                  Inversor Híbrido
                </span>
                <h3 className="font-headline text-lg font-semibold mt-1 drop-shadow-lg">
                  Sol-Ark — respaldo total
                </h3>
              </div>
            </div>

            <div className="relative h-64 rounded-2xl overflow-hidden group shadow-lg">
              <Image
                src="/gallery/paneles-residencial.webp"
                alt="Paneles solares residenciales instalados por Kilowatt PR en Puerto Rico"
                fill
                sizes="(max-width: 1024px) 100vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/75 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <span className="text-xs font-label uppercase tracking-wider text-solar-yellow">
                  Residencial
                </span>
                <h3 className="font-headline text-lg font-semibold mt-1 drop-shadow-lg">
                  Listo para la próxima factura
                </h3>
              </div>
            </div>

            <div className="relative h-64 md:col-span-2 rounded-2xl overflow-hidden group shadow-lg">
              <Image
                src="/gallery/tecnico-trabajando.webp"
                alt="Perito electricista licenciado de Kilowatt PR trabajando en instalación en Puerto Rico"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/75 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <span className="text-xs font-label uppercase tracking-wider text-solar-yellow">
                  Equipo Licenciado
                </span>
                <h3 className="font-headline text-xl font-semibold mt-1 drop-shadow-lg">
                  Peritos electricistas — Más de una década en Puerto Rico
                </h3>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/proyectos"
              className="btn-secondary-light text-base px-6 py-3 inline-flex"
            >
              Ver todos los proyectos <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Solar Calculator — LIGHT */}
      <section className="py-20 section-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-display text-display-md leading-tight text-[#121240] mb-4">
                ¿Cuánto Puedes Ahorrar con Energía Solar?
              </h2>
              <p className="font-body text-body-lg text-[#4A4A6A] mb-6 leading-relaxed">
                Ingresa tu factura mensual de LUMA Energy y descubre cuánto puedes ahorrar
                con un sistema solar diseñado por un ingeniero PE licenciado.
              </p>
              <div className="flex items-center gap-4 text-sm text-[#4A4A6A]">
                <span className="flex items-center gap-1.5">
                  <CheckCircle size={14} className="text-[#E09500]" /> Estimado gratuito
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle size={14} className="text-[#E09500]" /> Sin compromiso
                </span>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <SolarCalculator />
            </div>
          </div>
        </div>
      </section>

      {/* Why Kilowatt — DARK */}
      <section className="py-20 bg-surface">
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
            Diseño e instalación solar por ingeniero PE licenciado con más de 50 años de experiencia en Puerto Rico
          </p>
        </div>
      </section>

      {/* Reviews — LIGHT (moved up for social proof before process/FAQ) */}
      <TestimonialsSection />

      {/* How it works — LIGHT */}
      <section className="py-20 section-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-display-md leading-tight text-[#121240]">¿Cómo Funciona el Proceso?</h2>
            <p className="font-body text-body-lg mt-4 max-w-2xl mx-auto text-[#4A4A6A]">De la consulta a la producción en 3 pasos.</p>
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
                <h3 className="font-headline text-headline-md text-[#121240] mb-3">{step.title}</h3>
                <p className="text-[#4A4A6A] text-body-lg leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ — LIGHT WHITE */}
      <FAQSection faqs={faqs} title="Preguntas Frecuentes sobre Energía Solar en Puerto Rico" />

      {/* Quote Form + CTA — AMBER GRADIENT */}
      <section className="py-20 section-cta">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#3A2400] mb-5">
                ¿Listo para la Independencia Energética?
              </h2>
              <p className="text-lg text-[#6B4400] mb-6 leading-relaxed">
                Completa el formulario y te contactamos en menos de 2 horas con tu cotización
                gratis. Sin compromiso, sin costo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="https://wa.me/17874312275"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp text-base px-6 py-4"
                >
                  <MessageCircle size={20} />
                  WhatsApp — Respuesta en 2 Horas
                </a>
                <a
                  href="tel:+17874312275"
                  className="btn-secondary-light text-base px-6 py-4"
                >
                  <Phone size={20} />
                  787-431-2275
                </a>
              </div>
              {/* Trust badges near CTA */}
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-1.5 bg-[#3A2400]/10 rounded-full px-4 py-2 text-sm font-label text-[#3A2400]">
                  <Shield size={14} /> PE #6083
                </span>
                <span className="inline-flex items-center gap-1.5 bg-[#3A2400]/10 rounded-full px-4 py-2 text-sm font-label text-[#3A2400]">
                  <Star size={14} /> 4.9★ / 10+ Reseñas
                </span>
                <span className="inline-flex items-center gap-1.5 bg-[#3A2400]/10 rounded-full px-4 py-2 text-sm font-label text-[#3A2400]">
                  <CheckCircle size={14} /> Garantía 25 Años
                </span>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="font-headline font-semibold text-[#121240] text-lg mb-5">
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
