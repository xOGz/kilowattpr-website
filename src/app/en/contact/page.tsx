import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'
import ContactForm, { type ContactFormLabels } from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact — Free Solar Panel Quote',
  description:
    'Contact Kilowatt PR for your free solar panel quote in Puerto Rico. WhatsApp, phone, email. Service across all of Puerto Rico.',
  alternates: {
    canonical: 'https://www.kilowattpr.com/en/contact/',
    languages: {
      'es': 'https://www.kilowattpr.com/contacto/',
      'en': 'https://www.kilowattpr.com/en/contact/',
    },
  },
}

const municipiosList = [
  { value: 'Aguada', label: 'Aguada' },
  { value: 'Aguadilla', label: 'Aguadilla' },
  { value: 'Arecibo', label: 'Arecibo' },
  { value: 'Bayam\u00F3n', label: 'Bayam\u00F3n' },
  { value: 'Cabo Rojo', label: 'Cabo Rojo' },
  { value: 'Caguas', label: 'Caguas' },
  { value: 'Camuy', label: 'Camuy' },
  { value: 'Carolina', label: 'Carolina' },
  { value: 'Fajardo', label: 'Fajardo' },
  { value: 'Guaynabo', label: 'Guaynabo' },
  { value: 'Hatillo', label: 'Hatillo' },
  { value: 'Humacao', label: 'Humacao' },
  { value: 'Isabela', label: 'Isabela' },
  { value: 'Manat\u00ED', label: 'Manat\u00ED' },
  { value: 'Mayag\u00FCez', label: 'Mayag\u00FCez' },
  { value: 'Ponce', label: 'Ponce' },
  { value: 'Rinc\u00F3n', label: 'Rinc\u00F3n' },
  { value: 'San Juan', label: 'San Juan' },
  { value: 'Toa Alta', label: 'Toa Alta' },
  { value: 'Toa Baja', label: 'Toa Baja' },
  { value: 'Yauco', label: 'Yauco' },
  { value: 'Otro municipio', label: 'Other municipality' },
]

const servicesList = [
  { value: 'Instalaci\u00F3n solar (micro inversores)', label: 'Solar installation (microinverters)' },
  { value: 'Sistema solar h\u00EDbrido con bater\u00EDa', label: 'Hybrid solar system with battery backup' },
  { value: 'Sellado de techo', label: 'Roof sealing' },
  { value: 'Mantenimiento y lavado', label: 'Maintenance & cleaning' },
  { value: 'Transfer Switch / ATS', label: 'Transfer switch / ATS' },
  { value: 'Cargador EV', label: 'EV charger installation' },
  { value: 'Planta el\u00E9ctrica diesel', label: 'Diesel electric generator' },
  { value: 'Contratista el\u00E9ctrico', label: 'Electrical contractor' },
  { value: 'Base de contador', label: 'Meter base repair/installation' },
  { value: 'Certificaci\u00F3n el\u00E9ctrica LUMA', label: 'LUMA electrical certification' },
  { value: 'Servicios periciales el\u00E9ctricos', label: 'Forensic electrical services' },
  { value: 'Consulta general', label: 'General consultation' },
]

const formLabelsEn: ContactFormLabels = {
  name: 'Name',
  namePlaceholder: 'Your full name',
  phone: 'Phone',
  phonePlaceholder: '787-000-0000',
  email: 'Email',
  emailPlaceholder: 'youremail@email.com',
  municipio: 'Municipality',
  municipioPlaceholder: 'Select your municipality',
  service: 'Service of Interest',
  servicePlaceholder: 'Select a service',
  message: 'Message',
  messagePlaceholder: 'Tell us about your property and solar energy needs...',
  submit: 'Send Message',
  submitting: 'Sending...',
  successTitle: 'Message received!',
  successBody: 'We will contact you during business hours. For an immediate response, message us on WhatsApp.',
  errorTitle: 'We could not send your message',
  errorBody: 'Something went wrong on our end. Please message us on WhatsApp.',
  whatsappFallback: 'Message us directly on WhatsApp at',
  whatsappCta: 'Continue on WhatsApp',
  fasterResponse: 'For a faster response, message us directly on WhatsApp at',
  fasterResponseSuffix: '',
  validationGeneric: 'We could not process your message. Please message us on WhatsApp.',
}

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
                  { icon: MessageCircle, label: 'Phone / WhatsApp (preferred)', value: '+1-787-431-2275', href: 'https://wa.me/17874312275' },
                  { icon: Mail, label: 'Email', value: 'ventas@kilowattpr.com', href: 'mailto:ventas@kilowattpr.com' },
                  { icon: MapPin, label: 'Address', value: 'HC 3 Box 31767, Aguada, PR 00602', href: '#map' },
                  { icon: Clock, label: 'Hours', value: 'Monday\u2013Saturday, 8:00 AM \u2013 5:00 PM', href: null },
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
              <ContactForm
                locale="en"
                labels={formLabelsEn}
                municipios={municipiosList}
                services={servicesList}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
