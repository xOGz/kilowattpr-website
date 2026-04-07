import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact — Free Solar Panel Quote',
  description:
    'Contact Kilowatt PR for your free solar panel quote in Puerto Rico. WhatsApp, phone, email. Service across all of Puerto Rico.',
  alternates: {
    canonical: 'https://www.kilowattpr.com/en/contact',
    languages: {
      'es': 'https://www.kilowattpr.com/contacto',
      'en': 'https://www.kilowattpr.com/en/contact',
    },
  },
}

const municipiosList = [
  'Aguada', 'Aguadilla', 'Arecibo', 'Bayam\u00F3n', 'Cabo Rojo', 'Caguas',
  'Camuy', 'Carolina', 'Fajardo', 'Guaynabo', 'Hatillo', 'Humacao',
  'Isabela', 'Manat\u00ED', 'Mayag\u00FCez', 'Ponce', 'Rinc\u00F3n', 'San Juan',
  'Toa Alta', 'Toa Baja', 'Yauco', 'Other municipality',
]

const servicesList = [
  'Solar panel installation',
  'Solar system with battery',
  'Maintenance & cleaning',
  'General consultation',
]

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contact — <span className="text-solar-yellow">Free Quote</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            We&apos;re ready to help. The consultation and quote are free with no
            obligation. Message us on WhatsApp for the fastest response.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <div>
              <h2 className="text-2xl font-bold text-navy-dark mb-6">Contact Information</h2>

              <div className="space-y-5 mb-8">
                {[
                  { icon: Phone, label: 'Phone', value: '+1-787-431-2275', href: 'tel:+17874312275' },
                  { icon: MessageCircle, label: 'WhatsApp (preferred)', value: '+1-787-431-2275', href: 'https://wa.me/17874312275' },
                  { icon: Mail, label: 'Email', value: 'info@kilowattpr.com', href: 'mailto:info@kilowattpr.com' },
                  { icon: MapPin, label: 'Address', value: 'HC 3 Box 31767, Aguada, PR 00602', href: '#map' },
                  { icon: Clock, label: 'Hours', value: 'Monday\u2013Friday, 8:00 AM \u2013 5:00 PM', href: null },
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
                Message on WhatsApp — Instant Response
              </a>

              {/* Map */}
              <div id="map" className="mt-8 rounded-xl overflow-hidden">
                <iframe
                  title="Kilowatt PR location in Aguada, Puerto Rico"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30292.5!2d-66.1057!3d18.4655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c0291c1f0000001%3A0x1!2sAguada%2C+Puerto+Rico!5e0!3m2!1sen!2sus!4v1"
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
              <h2 className="text-2xl font-bold text-navy-dark mb-6">Send Us a Message</h2>
              <form
                action="https://formsubmit.co/info@kilowattpr.com"
                method="POST"
                className="space-y-5"
              >
                <input type="hidden" name="_subject" value="New inquiry from kilowattpr.com (English)" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://www.kilowattpr.com/en/contact" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="nombre"
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-solar-yellow focus:ring-1 focus:ring-solar-yellow"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
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
                    placeholder="youremail@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="municipality" className="block text-sm font-medium text-gray-700 mb-1">
                    Municipality *
                  </label>
                  <select
                    id="municipality"
                    name="municipio"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-solar-yellow focus:ring-1 focus:ring-solar-yellow bg-white"
                  >
                    <option value="">Select your municipality</option>
                    {municipiosList.map((m) => (
                      <option key={m} value={m}>{m}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    name="servicio"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-solar-yellow focus:ring-1 focus:ring-solar-yellow bg-white"
                  >
                    <option value="">Select a service</option>
                    {servicesList.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="mensaje"
                    rows={4}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-solar-yellow focus:ring-1 focus:ring-solar-yellow resize-none"
                    placeholder="Tell us about your property and solar energy needs..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full justify-center text-base py-4"
                >
                  Send Message
                </button>

                <p className="text-xs text-gray-400 text-center">
                  For a faster response, message us directly on WhatsApp at{' '}
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
