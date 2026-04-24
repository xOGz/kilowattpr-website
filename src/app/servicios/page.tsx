import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Sun, Battery, Home, Wrench, Zap, Car, Building, ArrowRight } from 'lucide-react'
import { buildAlternates } from '@/lib/alternates'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'

export const metadata: Metadata = {
  title: 'Servicios de Energía Solar en Puerto Rico',
  description:
    'Kilowatt PR ofrece instalación de paneles solares, sistemas con batería, sellado de techo y mantenimiento en toda Puerto Rico. Técnicos certificados, garantía 25 años.',
  ...buildAlternates({ es: '/servicios', en: '/en/services' }),
}

const services = [
  {
    icon: Sun,
    title: 'Instalación de Paneles Solares',
    desc: 'Instalamos sistemas fotovoltaicos residenciales y comerciales diseñados para las condiciones climáticas de Puerto Rico. Incluimos todo: consulta, diseño 3D, permisos OGPE, interconexión LUMA y instalación.',
    href: '/servicios/instalacion-paneles-solares',
    features: ['Sistemas residenciales 4kW–25kW', 'Sistemas comerciales a medida', 'Gestión de permisos OGPE', 'Interconexión con LUMA Energy'],
    image: '/servicios/instalacion-paneles.jpg',
    imageAlt: 'Sistema de paneles solares instalado sobre techo residencial en Puerto Rico por Kilowatt PR',
  },
  {
    icon: Battery,
    title: 'Sistemas Solares con Batería',
    desc: 'La solución para la independencia energética total durante los apagones de LUMA Energy. Hasta 24 horas de respaldo para los electrodomésticos esenciales de tu hogar o negocio.',
    href: '/servicios/sistemas-con-bateria',
    features: ['Hasta 24 horas de respaldo', 'Desconexión automática en apagones', 'Compatible con paneles existentes', 'Monitoreo remoto del sistema'],
    image: '/servicios/sistemas-bateria.webp',
    imageAlt: 'Inversor híbrido EG4 18KPV con batería de respaldo instalado por Kilowatt PR',
  },
  {
    icon: Home,
    title: 'Sellado de Techo',
    desc: 'Antes de instalar los paneles, evaluamos e impermeabilizamos tu techo. Un techo sellado protege tu hogar del agua y garantiza que la instalación solar sea segura y duradera.',
    href: '/servicios/sellado-de-techo',
    features: ['Evaluación estructural del techo', 'Impermeabilización profesional', 'Garantía de 2 años de mano de obra', 'Compatible con todos los tipos de techo'],
    image: '/servicios/sellado-techo.webp',
    imageAlt: 'Paneles solares instalados sobre techo sellado e impermeabilizado en Puerto Rico',
  },
  {
    icon: Wrench,
    title: 'Mantenimiento y Lavado',
    desc: 'Mantén tus paneles operando al máximo de su eficiencia. El polvo del Sahara, la sal marina y los residuos tropicales pueden reducir la producción solar hasta un 25% sin mantenimiento regular.',
    href: '/servicios/mantenimiento-lavado',
    features: ['Limpieza con agua purificada', 'Inspección visual de paneles e inversores', 'Reporte de producción', 'Plan de mantenimiento personalizado'],
    image: '/servicios/mantenimiento-lavado.webp',
    imageAlt: 'Paneles solares limpios y mantenidos para máxima eficiencia en Puerto Rico',
  },
  {
    icon: Zap,
    title: 'Contratista Eléctrico',
    desc: 'Servicios eléctricos residenciales y comerciales. Reparación de bases de medidores con certificaciones LUMA, mejoras de paneles eléctricos y cableado profesional.',
    href: '/servicios/contratista-electrico',
    features: ['Reparación de bases de medidores', 'Certificaciones LUMA', 'Mejoras de panel eléctrico', 'Cableado residencial y comercial'],
    image: '/servicios/contratista-electrico.webp',
    imageAlt: 'Paneles eléctricos y disconnects instalados por peritos electricistas licenciados en Puerto Rico',
  },
  {
    icon: Building,
    title: 'Energía Solar Comercial',
    desc: 'Sistemas solares para negocios: restaurantes, farmacias, almacenes, hoteles. Sistemas de 10kW a 100kW+ con retorno de inversión en 3 a 5 años.',
    href: '/servicios/energia-solar-comercial',
    features: ['Sistemas 10kW–100kW+', 'ROI en 3–5 años', 'Net metering comercial', 'Reducción de cargos por demanda'],
    image: '/servicios/solar-comercial.webp',
    imageAlt: 'Trabajo de servicio eléctrico comercial por Kilowatt PR en Puerto Rico',
  },
  {
    icon: Car,
    title: 'Cargadores de Vehículos Eléctricos',
    desc: 'Instalación de cargadores EV Level 2 y Level 3 para residencias y comercios. Combina solar + EV para máximo ahorro en combustible y electricidad.',
    href: '/servicios/cargadores-ev',
    features: ['Level 2 residencial', 'Level 3 comercial', 'Combo solar + EV', 'Evaluación de capacidad eléctrica'],
    image: '/servicios/cargadores-ev.webp',
    imageAlt: 'Técnico electricista licenciado de Kilowatt PR trabajando en instalación eléctrica',
  },
]

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Servicios', path: '/servicios' }]} />
      <section className="bg-navy-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Servicios Solares en <span className="text-solar-yellow">Puerto Rico</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Soluciones completas de energía renovable para hogares y negocios. Desde la
            instalación hasta el mantenimiento, lo manejamos todo.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {services.map((svc, i) => (
              <div
                key={svc.href}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div>
                  <div className="w-14 h-14 bg-solar-yellow/10 rounded-xl flex items-center justify-center mb-4">
                    <svc.icon className="text-solar-yellow" size={28} />
                  </div>
                  <h2 className="text-2xl font-bold text-navy-dark mb-3">{svc.title}</h2>
                  <p className="text-gray-600 leading-relaxed mb-5">{svc.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {svc.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="text-solar-yellow font-bold">✓</span> {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={svc.href}
                    className="inline-flex items-center gap-2 text-solar-yellow font-semibold hover:gap-3 transition-all"
                  >
                    Más información <ArrowRight size={18} />
                  </Link>
                </div>
                <div className="relative rounded-2xl h-72 md:h-96 overflow-hidden shadow-xl group">
                  <Image
                    src={svc.image}
                    alt={svc.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority={i < 2}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/40 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 text-white">
                    <div className="w-10 h-10 bg-solar-yellow rounded-lg flex items-center justify-center shadow-lg">
                      <svc.icon className="text-navy-dark" size={20} />
                    </div>
                    <span className="font-headline font-semibold text-sm drop-shadow-lg">
                      {svc.title}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Paquetes de Sistemas Solares</h2>
            <p className="section-subtitle mx-auto">Encuentra el sistema ideal para tu hogar o negocio.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Autoconsumo Solar',
                size: '4kW–8kW PV + 10–30 kWh Batería',
                desc: 'Genera y almacena tu propia energía sin depender de LUMA. Ideal para hogares que quieren independencia energética sin medición neta.',
                features: ['Paneles solares de alta eficiencia', 'Batería de respaldo 10–30 kWh', 'Sin trámites de medición neta', 'Protección contra apagones', 'Garantía 25 años paneles'],
                cta: 'Cotizar Autoconsumo',
              },
              {
                name: 'Medición Neta',
                size: '4kW–25kW PV + 15–64 kWh Batería',
                desc: 'El sistema completo: genera energía, almacénala y vende el exceso a LUMA. Maximiza tu ahorro con créditos en tu factura eléctrica.',
                features: ['Sistema solar hasta 25kW', 'Batería de respaldo 15–64 kWh', 'Gestión completa de medición neta', 'Medidor bidireccional incluido', 'Monitoreo remoto', 'Garantía 25 años paneles'],
                cta: 'Cotizar Medición Neta',
                featured: true,
              },
              {
                name: 'Solar Comercial e Industrial',
                size: 'Diseño a Medida',
                desc: 'Sistemas diseñados por ingeniería para negocios, escuelas, hospitales y edificios comerciales. Reducción inmediata de costos operativos.',
                features: ['Análisis de carga personalizado', 'Diseño de ingeniería PE completo', 'Financiamiento comercial disponible', 'Soporte post-instalación'],
                cta: 'Cotizar Sistema Comercial',
              },
            ].map((pkg) => (
              <div
                key={pkg.name}
                className={`card relative ${pkg.featured ? 'border-2 border-solar-yellow' : ''}`}
              >
                {pkg.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-solar-yellow text-navy-dark text-xs font-bold px-3 py-1 rounded-full">
                    MÁS POPULAR
                  </div>
                )}
                <h3 className="font-bold text-xl text-navy-dark mb-1">{pkg.name}</h3>
                <p className="text-solar-yellow font-semibold mb-3">{pkg.size}</p>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{pkg.desc}</p>
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-solar-yellow font-bold">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/17874312275"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full text-center block py-3 rounded-lg font-bold transition-colors ${pkg.featured ? 'bg-solar-yellow text-navy-dark hover:bg-solar-gold' : 'bg-navy-dark text-white hover:bg-navy'}`}
                >
                  {pkg.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
