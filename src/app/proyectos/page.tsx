import type { Metadata } from 'next'
import { MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Proyectos Solares en Puerto Rico',
  description:
    'Galería de proyectos de instalación de paneles solares en Puerto Rico completados por Kilowatt PR LLC. Residencial, comercial y sistemas con batería.',
  alternates: { canonical: 'https://www.kilowattpr.com/proyectos' },
}

const proyectos = [
  {
    title: 'Sistema Residencial 8kW',
    location: 'Aguada, PR',
    type: 'Residencial',
    desc: 'Sistema de 8kW instalado en residencia unifamiliar. Incluye inversor SolarEdge y sistema de monitoreo. Reducción del 95% en la factura de LUMA Energy.',
    tag: 'Sin Batería',
  },
  {
    title: 'Sistema Premium 10kW + Batería',
    location: 'San Juan, PR',
    type: 'Residencial Premium',
    desc: 'Sistema completo de 10kW con batería de almacenamiento. Independencia energética total durante apagones de LUMA. Cliente con dispositivos médicos en el hogar.',
    tag: 'Con Batería',
  },
  {
    title: 'Sistema Comercial 25kW',
    location: 'Mayagüez, PR',
    type: 'Comercial',
    desc: 'Instalación comercial en local de negocio con alta demanda eléctrica. Diseño personalizado para maximizar la producción con la orientación del techo disponible.',
    tag: 'Comercial',
  },
  {
    title: 'Sistema Residencial 6kW',
    location: 'Ponce, PR',
    type: 'Residencial',
    desc: 'Sistema de 6kW para hogar de 3 habitaciones. Incluye sellado de techo previo a la instalación. Proceso completo de 8 semanas desde contrato hasta activación.',
    tag: 'Con Sellado de Techo',
  },
  {
    title: 'Sistema 12kW + Batería Doble',
    location: 'Aguadilla, PR',
    type: 'Residencial Premium',
    desc: 'Sistema de alta capacidad con doble batería para una propiedad costera con alto consumo. Configuración especial para resistencia al ambiente marino.',
    tag: 'Zona Costera',
  },
  {
    title: 'Sistema Residencial 7kW',
    location: 'Caguas, PR',
    type: 'Residencial',
    desc: 'Instalación en urbanización del interior de Puerto Rico. Sistema diseñado para cubrir el 100% del consumo promedio del hogar.',
    tag: 'Sin Batería',
  },
]

export default function ProyectosPage() {
  return (
    <>
      <section className="bg-navy-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Proyectos Solares en <span className="text-solar-yellow">Puerto Rico</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Muestra de instalaciones residenciales y comerciales completadas por Kilowatt PR
            en toda Puerto Rico.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {proyectos.map((p) => (
              <div key={p.title} className="card group">
                <div className="bg-gray-100 rounded-xl h-48 mb-4 flex items-center justify-center relative overflow-hidden">
                  <div className="text-gray-300 text-center">
                    <div className="text-4xl mb-2">☀️</div>
                    <p className="text-sm font-medium text-gray-400">Foto del Proyecto</p>
                    <p className="text-xs text-gray-400">(Imágenes reales — próximamente)</p>
                  </div>
                  <div className="absolute top-3 left-3 bg-solar-yellow text-navy-dark text-xs font-bold px-2 py-1 rounded-full">
                    {p.tag}
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs text-gray-400 mb-2">
                  <MapPin size={12} />
                  {p.location}
                  <span className="ml-2 text-solar-yellow font-medium">{p.type}</span>
                </div>
                <h3 className="font-bold text-navy-dark mb-2">{p.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-navy-dark text-white rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-3">
              ¿Tu Proyecto Podría Ser el Próximo?
            </h2>
            <p className="text-gray-300 mb-6">
              Cotización gratis, sin compromiso. Análisis de consumo, diseño 3D y proyección
              de ahorros a 25 años.
            </p>
            <a
              href="https://wa.me/17874312275"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Solicitar Cotización Gratis
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
