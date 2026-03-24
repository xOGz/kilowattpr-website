import type { Metadata } from 'next'
import Link from 'next/link'
import { Sun, Battery, Home, Wrench, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Servicios de Energía Solar en Puerto Rico',
  description:
    'Kilowatt PR ofrece instalación de paneles solares, sistemas con batería, sellado de techo y mantenimiento en toda Puerto Rico. Técnicos certificados, garantía 25 años.',
  alternates: { canonical: 'https://www.kilowattpr.com/servicios' },
}

const services = [
  {
    icon: Sun,
    title: 'Instalación de Paneles Solares',
    desc: 'Instalamos sistemas fotovoltaicos residenciales y comerciales diseñados para las condiciones climáticas de Puerto Rico. Incluimos todo: consulta, diseño 3D, permisos ARPE, interconexión LUMA y instalación.',
    href: '/servicios/instalacion-paneles-solares',
    features: ['Sistemas residenciales 5kW–10kW', 'Sistemas comerciales a medida', 'Gestión de permisos ARPE', 'Interconexión con LUMA Energy'],
  },
  {
    icon: Battery,
    title: 'Sistemas Solares con Batería',
    desc: 'La solución para la independencia energética total durante los apagones de LUMA Energy. Hasta 24 horas de respaldo para los electrodomésticos esenciales de tu hogar o negocio.',
    href: '/servicios/sistemas-con-bateria',
    features: ['Hasta 24 horas de respaldo', 'Desconexión automática en apagones', 'Compatible con paneles existentes', 'Monitoreo remoto del sistema'],
  },
  {
    icon: Home,
    title: 'Sellado de Techo',
    desc: 'Antes de instalar los paneles, evaluamos e impermeabilizamos tu techo. Un techo sellado protege tu hogar del agua y garantiza que la instalación solar sea segura y duradera.',
    href: '/servicios/sellado-de-techo',
    features: ['Evaluación estructural del techo', 'Impermeabilización profesional', 'Garantía de 2 años de mano de obra', 'Compatible con todos los tipos de techo'],
  },
  {
    icon: Wrench,
    title: 'Mantenimiento y Lavado',
    desc: 'Mantén tus paneles operando al máximo de su eficiencia. El polvo del Sahara, la sal marina y los residuos tropicales pueden reducir la producción solar hasta un 25% sin mantenimiento regular.',
    href: '/servicios/mantenimiento-lavado',
    features: ['Limpieza con agua purificada', 'Inspección visual de paneles e inversores', 'Reporte de producción', 'Plan de mantenimiento personalizado'],
  },
]

export default function ServicesPage() {
  return (
    <>
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
                <div className="bg-gray-100 rounded-2xl h-64 flex items-center justify-center">
                  <svc.icon className="text-gray-300" size={80} />
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
                name: 'Sistema Solar Básico',
                size: '5kW Residencial',
                desc: 'Ideal para hogares con consumo mensual de hasta 500–700 kWh. Reduce tu factura de LUMA Energy significativamente.',
                features: ['Paneles solares de alta eficiencia', 'Inversor de string', 'Gestión de permisos', 'Garantía 25 años paneles'],
                cta: 'Cotizar Sistema Básico',
              },
              {
                name: 'Sistema Solar Premium',
                size: '10kW + Batería',
                desc: 'El sistema completo para hogares grandes. Incluye batería de respaldo para independencia total durante apagones de LUMA.',
                features: ['10kW de capacidad', 'Batería de respaldo incluida', '24 horas de independencia', 'Monitoreo remoto', 'Garantía 25 años paneles'],
                cta: 'Cotizar Sistema Premium',
                featured: true,
              },
              {
                name: 'Sistema Solar Comercial',
                size: 'Tamaño Personalizado',
                desc: 'Diseñado a medida para negocios, escuelas, hospitales y edificios comerciales. Consulta nuestro equipo para dimensionamiento.',
                features: ['Análisis de carga personalizado', 'Diseño de ingeniería completo', 'Financiamiento comercial disponible', 'Soporte post-instalación'],
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
