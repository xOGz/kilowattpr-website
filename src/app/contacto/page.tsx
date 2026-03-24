import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contacto — Cotización Gratis de Paneles Solares',
  description:
    'Contacta a Kilowatt PR para tu cotización gratis de paneles solares en Puerto Rico. WhatsApp, teléfono, email. Servicio en todo Puerto Rico.',
  alternates: { canonical: 'https://www.kilowattpr.com/contacto' },
}

const municipiosList = [
  'Aguada', 'Aguadilla', 'Arecibo', 'Bayamón', 'Cabo Rojo', 'Caguas',
  'Camuy', 'Carolina', 'Fajardo', 'Guaynabo', 'Hatillo', 'Humacao',
  'Isabela', 'Manatí', 'Mayagüez', 'Ponce', 'Rincón', 'San Juan',
  'Toa Alta', 'Toa Baja', 'Yauco', 'Otro municipio',
]

const serviciosList = [
  'Instalación de paneles solares',
  'Sistema solar con batería',
  'Sellado de techo',
  'Mantenimiento y lavado',
  'Consulta general',
]

export default function ContactoPage() {
  return (
    <>
      <section className="bg-navy-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contacto — <span className="text-solar-yellow">Cotización Gratis</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Estamos listos para ayudarte. La consulta y cotización no tienen costo ni
            compromiso. Escríbenos por WhatsApp para una respuesta más rápida.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <div>
              <h2 className="text-2xl font-bold text-navy-dark mb-6">Información de Contacto</h2>

              <div className="space-y-5 mb-8">
                {[
                  { icon: Phone, label: 'Teléfono', value: '+1-787-431-2275', href: 'tel:+17874312275' },
                  { icon: MessageCircle, label: 'WhatsApp (preferido)', value: '+1-787-431-2275', href: 'https://wa.me/17874312275' },
                  { icon: Mail, label: 'Email', value: 'kilowattpr@gmail.com', href: 'mailto:kilowattpr@gmail.com' },
                  { icon: MapPin, label: 'Dirección', value: 'HC 3 Box 31767, Aguada, PR 00602', href: '#mapa' },
                  { icon: Clock, label: 'Horario', value: 'Lunes–Viernes, 8:00 AM – 5:00 PM', href: null },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-solar-yellow/10 rounded-lg flex items-center justify-center shrink-0">
                      <item.icon className="text-solar-yellow" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="font-semibold text-navy-dark hover:text-solar-yellow transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-semibold text-navy-dark">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="https://wa.me/17874312275"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full justify-center text-lg py-4"
              >
                <MessageCircle size={22} />
                Escribir por WhatsApp — Respuesta Inmediata
              </a>

              {/* Map */}
              <div id="mapa" className="mt-8 rounded-xl overflow-hidden">
                <iframe
                  title="Ubicación de Kilowatt PR en Aguada, Puerto Rico"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30292.5!2d-66.1057!3d18.4655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c0291c1f0000001%3A0x1!2sAguada%2C+Puerto+Rico!5e0!3m2!1ses!2sus!4v1"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold text-navy-dark mb-6">Envíanos un Mensaje</h2>
              <form
                action="https://formsubmit.co/kilowattpr@gmail.com"
                method="POST"
                className="space-y-5"
              >
                <input type="hidden" name="_subject" value="Nueva consulta desde kilowattpr.com" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://www.kilowattpr.com/gracias" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-solar-yellow focus:ring-1 focus:ring-solar-yellow"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  <div>
                    <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-1">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-solar-yellow focus:ring-1 focus:ring-solar-yellow"
                      placeholder="787-000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-solar-yellow focus:ring-1 focus:ring-solar-yellow"
                    placeholder="tucorreo@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="municipio" className="block text-sm font-medium text-gray-700 mb-1">
                    Municipio *
                  </label>
                  <select
                    id="municipio"
                    name="municipio"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-solar-yellow focus:ring-1 focus:ring-solar-yellow bg-white"
                  >
                    <option value="">Selecciona tu municipio</option>
                    {municipiosList.map((m) => (
                      <option key={m} value={m}>{m}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="servicio" className="block text-sm font-medium text-gray-700 mb-1">
                    Servicio de Interés
                  </label>
                  <select
                    id="servicio"
                    name="servicio"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-solar-yellow focus:ring-1 focus:ring-solar-yellow bg-white"
                  >
                    <option value="">Selecciona un servicio</option>
                    {serviciosList.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={4}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-solar-yellow focus:ring-1 focus:ring-solar-yellow resize-none"
                    placeholder="Cuéntanos sobre tu propiedad y necesidades de energía solar..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full justify-center text-base py-4"
                >
                  Enviar Mensaje
                </button>

                <p className="text-xs text-gray-400 text-center">
                  Para una respuesta más rápida, escríbenos directamente por WhatsApp al{' '}
                  <a href="https://wa.me/17874312275" className="text-solar-yellow font-medium">
                    787-431-2275
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
