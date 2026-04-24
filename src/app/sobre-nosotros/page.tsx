import type { Metadata } from 'next'
import Image from 'next/image'
import { CheckCircle, Award, Users, MapPin, Shield, Zap } from 'lucide-react'
import { PersonSchema } from '@/components/SchemaOrg'
import { buildAlternates } from '@/lib/alternates'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'

export const metadata: Metadata = {
  title: 'Sobre Nosotros — Perito Electricista Licenciado con Década de Experiencia',
  description:
    'Kilowatt PR: fundada por Xavier Acevedo Santiago, perito electricista lic. #21309. Asesoría PE #6083. 4.9★ en Google en Puerto Rico.',
  ...buildAlternates({ es: '/sobre-nosotros', en: '/en/about' }),
  openGraph: {
    title: 'Sobre Nosotros | Kilowatt PR',
    description:
      'Fundada por Xavier Acevedo Santiago, perito electricista licenciado #21309. Asesoría de ingeniería PE #6083. Familias protegidas en toda la isla.',
    url: 'https://www.kilowattpr.com/sobre-nosotros',
  },
}

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Sobre Nosotros', path: '/sobre-nosotros' }]} />
      <PersonSchema />

      {/* Hero */}
      <section className="bg-surface text-on-surface py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="chip-gold inline-flex items-center gap-2 mb-6">
              <Award size={12} />
              PERITO ELECTRICISTA LICENCIADO #21309
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-on-surface">
              Energía Solar Instalada por{' '}
              <span className="text-primary-container">Electricistas con Experiencia Real en Puerto Rico</span>
            </h1>
            <p className="text-xl text-on-surface-variant leading-relaxed">
              Kilowatt PR no es otra empresa solar más. Fundada por electricistas con
              experiencia real en el campo, y asesorada por un ingeniero eléctrico PE con
              más de 50 años de trayectoria profesional — incluyendo NASA y la Universidad
              de Puerto Rico en Mayagüez.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-20 section-light-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl font-bold text-[#121240] mb-6">
                Conoce al Fundador: Xavier Acevedo Santiago
              </h2>
              <div className="space-y-4 text-[#4A4A6A] leading-relaxed">
                <p>
                  Xavier Acevedo Santiago tiene más de una década de experiencia instalando
                  sistemas solares en Puerto Rico. Conoce de primera mano las condiciones
                  climáticas de la isla, los requisitos de OGPE, y el proceso de interconexión
                  con LUMA Energy.
                </p>
                <p>
                  Tras ver cómo Puerto Rico sufría con una infraestructura eléctrica
                  frágil — agravada por el huracán María en 2017 y el huracán Fiona en 2022 —
                  fundó Kilowatt PR con una misión clara:{' '}
                  <strong className="text-[#121240]">proteger a las familias puertorriqueñas de los apagones
                  con sistemas solares instalados por electricistas con experiencia real, no por vendedores</strong>.
                </p>
                <p>
                  Xavier cuenta con la asesoría del Ing. Julio A. Santiago Pérez (PE #6083),
                  ingeniero eléctrico licenciado con más de 50 años de experiencia, ex ingeniero
                  de NASA y ex profesor de la UPR Mayagüez, quien sirve como COO y asesor de
                  ingeniería de la empresa.
                </p>
              </div>

              {/* Credentials grid */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-[#F8F7F4] rounded-lg p-4">
                  <p className="font-display font-bold text-[#121240]">Lic. #21309</p>
                  <p className="text-sm text-[#4A4A6A]">Perito Electricista</p>
                </div>
                <div className="bg-[#F8F7F4] rounded-lg p-4">
                  <p className="font-display font-bold text-[#121240]">PE #6083</p>
                  <p className="text-sm text-[#4A4A6A]">Asesor de Ingeniería</p>
                </div>
                <div className="bg-[#F8F7F4] rounded-lg p-4">
                  <p className="font-display font-bold text-[#121240]">10+ Años</p>
                  <p className="text-sm text-[#4A4A6A]">Experiencia en Campo</p>
                </div>
                <div className="bg-[#F8F7F4] rounded-lg p-4">
                  <p className="font-display font-bold text-[#121240]">PPPE-PV-1809</p>
                  <p className="text-sm text-[#4A4A6A]">Instalador PV Certificado</p>
                </div>
              </div>
            </div>
            <div className="relative h-80 lg:h-full min-h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="/team/xavier-acevedo.png"
                alt="Xavier Acevedo Santiago, fundador de Kilowatt PR, perito electricista licenciado #21309"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Carta del Fundador */}
      <section className="py-20 section-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-[#121240] mb-8 text-center">
              Carta del Fundador
            </h2>
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-[#E8E6E1]">
              <div className="space-y-5 text-[#4A4A6A] text-body-md leading-relaxed italic">
                <p>
                  Crecí en Puerto Rico, y como todo puertorriqueño, conozco lo que es quedarse
                  sin luz. Pero nada me preparó para lo que vimos después del huracán María.
                  Familias enteras — meses sin electricidad. Personas mayores sin poder refrigerar
                  sus medicamentos. Negocios que cerraron para siempre.
                </p>
                <p>
                  Yo llevaba años trabajando como electricista. Conocía cada cable, cada panel,
                  cada código eléctrico de esta isla. Y me preguntaba: ¿por qué seguimos
                  dependiendo de un sistema que nos falla una y otra vez?
                </p>
                <p>
                  Ahí nació Kilowatt PR. No en una oficina corporativa ni en una reunión de
                  inversionistas — nació en los techos de Puerto Rico, con las manos sucias
                  de grasa y el sol en la espalda. Decidí combinar lo que sé hacer — electricidad —
                  con la tecnología solar, para que ninguna familia tenga que pasar por lo que
                  pasamos después de María.
                </p>
                <p>
                  Cada sistema que instalamos lo trato como si fuera para mi propia familia.
                  Porque al final del día, somos vecinos. Vivimos en la misma isla, sufrimos
                  los mismos apagones, y merecemos la misma tranquilidad.
                </p>
                <p>
                  Si estás leyendo esto, probablemente ya estás cansado de depender de LUMA.
                  Yo también. Por eso hago lo que hago.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-[#E8E6E1]">
                <p className="font-headline font-semibold text-[#121240] text-lg">
                  Xavier Acevedo Santiago
                </p>
                <p className="text-[#E09500] font-label text-label-lg">
                  Fundador y CEO, Kilowatt PR
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Exist — Hurricane / LUMA narrative */}
      <section className="py-20 section-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-display text-3xl font-bold text-[#121240] mb-4">
              Por Qué Existimos
            </h2>
            <p className="text-[#4A4A6A] text-lg leading-relaxed">
              Puerto Rico merece algo mejor que depender de una red eléctrica que falla
              cuando más la necesitas.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: 'La Crisis de LUMA',
                desc: 'Puerto Rico tiene una de las tarifas eléctricas más altas de Estados Unidos y una red que deja a familias sin luz durante horas — o días. Cada apagón es un recordatorio de que la independencia energética no es un lujo, es una necesidad.',
              },
              {
                icon: Shield,
                title: 'Lecciones de María y Fiona',
                desc: 'Los huracanes María (2017) y Fiona (2022) destruyeron la infraestructura eléctrica de la isla. Vimos familias sin electricidad por meses. Esa experiencia nos motivó a crear sistemas solares diseñados específicamente para resistir las condiciones extremas de Puerto Rico.',
              },
              {
                icon: CheckCircle,
                title: 'Ingeniería, No Ventas',
                desc: 'A diferencia de otras empresas solares que envían vendedores a tu puerta, en Kilowatt PR cada sistema es diseñado por un ingeniero eléctrico licenciado. No vendemos kits genéricos — diseñamos soluciones basadas en tu consumo real, tu techo específico y las condiciones de tu municipio.',
              },
            ].map((item) => (
              <div key={item.title} className="card-light text-center">
                <div className="w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-5"
                  style={{ background: 'rgba(245, 166, 35, 0.1)' }}
                >
                  <item.icon className="text-[#E09500]" size={28} />
                </div>
                <h3 className="font-headline font-semibold text-[#121240] text-lg mb-3">{item.title}</h3>
                <p className="text-[#4A4A6A] text-body-md leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              {
                icon: CheckCircle,
                title: 'Nuestra Misión',
                desc: 'Proteger a las familias y negocios de Puerto Rico de los apagones y las tarifas abusivas mediante sistemas solares de ingeniería profesional — diseñados, instalados y respaldados por un equipo con más de 50 años de experiencia.',
              },
              {
                icon: Award,
                title: 'Nuestro Compromiso',
                desc: 'Cada instalación viene respaldada por garantía de 25 años en paneles, garantías de 5 a 10 años en inversores y baterías, e inspección de calidad a los 3 meses sin costo adicional. No terminamos hasta que tu sistema está produciendo.',
              },
              {
                icon: MapPin,
                title: 'Nuestra Isla',
                desc: 'Desde Aguada servimos a toda la isla — de San Juan a Mayagüez, de Ponce a Fajardo. Conocemos las diferencias climáticas y de infraestructura entre cada región y diseñamos cada sistema según las condiciones locales de tu municipio.',
              },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-lg transition-all duration-300 hover:bg-surface-container-high">
                <div className="w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-5"
                  style={{ background: 'rgba(245, 166, 35, 0.12)' }}
                >
                  <item.icon className="text-primary-container" size={28} />
                </div>
                <h3 className="font-headline font-semibold text-on-surface text-lg mb-3">{item.title}</h3>
                <p className="text-on-surface-variant text-body-md leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 section-light-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-[#121240]">Nuestro Equipo</h2>
            <p className="font-body text-body-lg mt-4 max-w-2xl mx-auto text-[#4A4A6A]">
              Profesionales certificados con experiencia real instalando sistemas solares en Puerto Rico.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                role: 'Fundador y CEO',
                name: 'Xavier Acevedo Santiago',
                credentials: 'Perito Electricista Lic. #21309',
                desc: 'Más de una década instalando sistemas fotovoltaicos residenciales y comerciales en Puerto Rico. Fundó Kilowatt PR para proteger a las familias puertorriqueñas de los apagones de LUMA.',
                photo: '/team/xavier-acevedo.png',
              },
              {
                role: 'COO y Asesor de Ingeniería',
                name: 'Julio A. Santiago Pérez, PE',
                credentials: 'PE #6083 · PPPE-PV-1809',
                desc: 'Ingeniero eléctrico licenciado con 50+ años de experiencia. Ex ingeniero de NASA y ex profesor de la UPR Mayagüez. Asesora en el diseño de ingeniería de cada sistema solar.',
                photo: '/team/julio-santiago.png',
              },
              {
                role: 'Servicio al Cliente',
                name: 'Kristen S. Román',
                credentials: 'Coordinadora de Proyectos',
                desc: 'Tu punto de contacto durante todo el proceso. Coordina permisos de OGPE, interconexión con LUMA Energy, y se asegura de que cada cliente quede completamente satisfecho.',
                photo: '/team/kristen-roman.png',
              },
            ].map((member) => (
              <div key={member.name} className="card-light text-center">
                {member.photo ? (
                  <div className="w-28 h-28 rounded-full mx-auto mb-4 p-1 bg-gradient-to-br from-[#E09500] to-[#F5A623]">
                    <div className="w-full h-full rounded-full overflow-hidden relative bg-white">
                      <Image
                        src={member.photo}
                        alt={member.name}
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="w-24 h-24 bg-[#F8F7F4] rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="text-[#E09500]" size={32} />
                  </div>
                )}
                <h3 className="font-headline font-semibold text-[#121240] text-lg">{member.name}</h3>
                <p className="text-[#E09500] font-label text-label-lg mb-1">{member.role}</p>
                <p className="text-[#4A4A6A] text-xs font-label mb-3">{member.credentials}</p>
                <p className="text-[#4A4A6A] text-body-md leading-relaxed">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl font-bold text-on-surface mb-8">Certificaciones y Licencias</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-surface-container-high rounded-xl px-6 py-5 flex items-center gap-3">
              <Award className="text-primary-container shrink-0" size={28} />
              <div className="text-left">
                <p className="font-headline font-semibold text-on-surface">Ingeniero Licenciado</p>
                <p className="text-on-surface-variant text-sm">PE #6083 — Junta Examinadora de PR</p>
              </div>
            </div>
            <div className="bg-surface-container-high rounded-xl px-6 py-5 flex items-center gap-3">
              <CheckCircle className="text-primary-container shrink-0" size={28} />
              <div className="text-left">
                <p className="font-headline font-semibold text-on-surface">Instalador PV Certificado</p>
                <p className="text-on-surface-variant text-sm">PPPE-PV-1809 — DDEC Puerto Rico</p>
              </div>
            </div>
            <div className="bg-surface-container-high rounded-xl px-6 py-5 flex items-center gap-3">
              <Shield className="text-primary-container shrink-0" size={28} />
              <div className="text-left">
                <p className="font-headline font-semibold text-on-surface">4.9★ / 10+ Reseñas</p>
                <p className="text-on-surface-variant text-sm">Verificadas en Google Business</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 section-cta">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-[#3A2400] mb-4">
            ¿Listo para la Independencia Energética?
          </h2>
          <p className="text-lg text-[#6B4400] mb-8 leading-relaxed">
            Habla directamente con nuestro equipo. Consulta y cotización gratis, sin compromiso.
            Respuesta en menos de 2 horas.
          </p>
          <a
            href="https://wa.me/17874312275"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base px-8 py-4 inline-flex"
          >
            Cotización Gratis por WhatsApp
          </a>
        </div>
      </section>
    </>
  )
}
