import type { Metadata } from 'next'
import Image from 'next/image'
import { CheckCircle, Award, Users, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sobre Nosotros',
  description:
    'Conoce a Kilowatt PR LLC: peritos electricistas e ingenieros eléctricos con más de 3 décadas de experiencia instalando sistemas solares en Puerto Rico. Nuestra misión es tu independencia energética.',
  alternates: { canonical: 'https://www.kilowattpr.com/sobre-nosotros' },
  openGraph: {
    title: 'Sobre Nosotros | Kilowatt PR',
    description:
      'Conoce al equipo detrás de la empresa #1 en instalación de paneles solares en Puerto Rico.',
    url: 'https://www.kilowattpr.com/sobre-nosotros',
  },
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sobre <span className="text-solar-yellow">Kilowatt PR</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Somos una empresa puertorriqueña comprometida con llevar la independencia
              energética a cada hogar y negocio de la isla. Nuestro equipo de{' '}
              <strong className="text-white">
                peritos electricistas e ingenieros eléctricos con más de 3 décadas de experiencia en Puerto Rico
              </strong>{' '}
              está con usted en cada paso del camino.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-navy-dark mb-6">Nuestra Historia</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Kilowatt PR nació con una misión clara: darle a las familias y negocios de Puerto
                  Rico la independencia energética que merecen. Vimos de primera mano cómo los
                  apagones prolongados, especialmente tras eventos como el huracán María,
                  afectaron profundamente la calidad de vida en toda la isla.
                </p>
                <p>
                  Nuestra empresa está compuesta por peritos electricistas e ingenieros eléctricos certificados con más
                  de 3 décadas de experiencia instalando sistemas solares en Puerto Rico. Conocemos
                  el clima tropical, los requisitos del proceso de interconexión con LUMA Energy,
                  la permisología de OGPE y las condiciones únicas de cada región de la isla.
                </p>
                <p>
                  Hoy, con más de 147 reseñas verificadas y una calificación de 4.9 estrellas,
                  seguimos comprometidos con la misma misión: instalar sistemas solares de calidad,
                  manejando todo el proceso por el cliente, y respaldando cada instalación con
                  garantías reales.
                </p>
                <p>
                  Desde nuestra sede en Aguada, servimos a todos los municipios de Puerto Rico,
                  desde Rincón hasta Fajardo, desde San Juan hasta Ponce.
                </p>
              </div>
            </div>
            <div className="relative h-80 lg:h-full rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80"
                alt="Equipo de técnicos solares de Kilowatt PR instalando paneles en Puerto Rico"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              {
                icon: CheckCircle,
                title: 'Nuestra Misión',
                desc: 'Proveer independencia energética a las familias y negocios de Puerto Rico mediante sistemas solares de alta calidad, instalados por técnicos certificados con experiencia real en la isla.',
              },
              {
                icon: Award,
                title: 'Nuestro Compromiso',
                desc: 'Cada instalación viene respaldada por garantía de 25 años en paneles y 2 años de mano de obra en sellado de techo. No terminamos el trabajo hasta que el sistema está funcionando perfectamente.',
              },
              {
                icon: MapPin,
                title: 'Nuestra Isla',
                desc: 'Servimos a todos los 78 municipios de Puerto Rico. Entendemos las diferencias climáticas entre el norte y el sur, el este y el oeste, y diseñamos cada sistema según las condiciones locales.',
              },
            ].map((item) => (
              <div key={item.title} className="card">
                <div className="w-14 h-14 bg-solar-yellow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="text-solar-yellow" size={28} />
                </div>
                <h3 className="text-xl font-bold text-navy-dark mb-3">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Nuestro Equipo</h2>
            <p className="section-subtitle mx-auto">
              Técnicos certificados con experiencia real instalando en Puerto Rico.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                role: 'Instalador Principal',
                name: 'Xavier J. Acevedo',
                desc: 'Perito electricista e ingeniero eléctrico con más de 3 décadas de experiencia en instalación de sistemas fotovoltaicos residenciales y comerciales en Puerto Rico.',
              },
              {
                role: 'Gerente de Proyectos',
                name: 'Julio A. Santiago',
                desc: 'Responsable de coordinar permisos de OGPE, interconexión con LUMA Energy y la experiencia de cada cliente desde la consulta hasta la activación.',
              },
              {
                role: 'Servicio al Cliente',
                name: 'Kristen S. Román',
                desc: 'Tu punto de contacto principal durante todo el proceso. Disponible para responder preguntas y asegurar que cada cliente quede completamente satisfecho.',
              },
            ].map((member) => (
              <div key={member.role} className="card text-center">
                <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="text-gray-400" size={32} />
                </div>
                <h3 className="font-bold text-navy-dark text-lg">{member.name}</h3>
                <p className="text-solar-yellow font-medium text-sm mb-3">{member.role}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-navy-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-8">Certificaciones y Licencias</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="bg-white/10 rounded-xl px-8 py-4 flex items-center gap-3">
              <Award className="text-solar-yellow" size={28} />
              <div className="text-left">
                <p className="font-bold">NABCEP Certified</p>
                <p className="text-gray-400 text-sm">North American Board of Certified Energy Practitioners</p>
              </div>
            </div>
            <div className="bg-white/10 rounded-xl px-8 py-4 flex items-center gap-3">
              <CheckCircle className="text-solar-yellow" size={28} />
              <div className="text-left">
                <p className="font-bold">Licencia Contratista</p>
                <p className="text-gray-400 text-sm">Núm. PPPE-PV-1809</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
