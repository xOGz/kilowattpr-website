import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin } from 'lucide-react'
import { municipios } from '@/data/municipios'

export const metadata: Metadata = {
  title: 'Instalación Solar en Todos los Municipios de Puerto Rico',
  description:
    'Kilowatt PR instala paneles solares en todos los municipios de Puerto Rico. Selecciona tu municipio para más información sobre el servicio en tu área.',
  alternates: { canonical: 'https://www.kilowattpr.com/municipios' },
}

export default function MunicipiosPage() {
  return (
    <>
      <section className="bg-navy-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Instalación Solar en Todo <span className="text-solar-yellow">Puerto Rico</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Servicio completo en los 78 municipios de Puerto Rico. Selecciona tu municipio
            para información específica sobre el servicio en tu área.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {municipios.map((m) => (
              <Link
                key={m.slug}
                href={`/municipios/${m.slug}`}
                className="card group flex items-start gap-3 hover:border-solar-yellow border-2 border-transparent"
              >
                <MapPin className="text-solar-yellow mt-1 shrink-0" size={18} />
                <div>
                  <p className="font-bold text-navy-dark group-hover:text-solar-yellow transition-colors">
                    {m.name}
                  </p>
                  <p className="text-xs text-gray-400">Población: {m.population}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
