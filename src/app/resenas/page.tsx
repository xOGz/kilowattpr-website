import type { Metadata } from 'next'
import Image from 'next/image'
import { Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Reseñas y Testimonios — 4.9★ / 147 Reseñas Verificadas',
  description:
    'Lee las experiencias reales de familias y negocios en Puerto Rico que confiaron en Kilowatt PR para su sistema solar. 4.9★ promedio en 147 reseñas verificadas en Google.',
  alternates: { canonical: 'https://www.kilowattpr.com/resenas' },
  openGraph: {
    title: 'Reseñas y Testimonios | Kilowatt PR',
    description:
      '4.9★ promedio en 147 reseñas verificadas. Familias y negocios en Puerto Rico comparten su experiencia con Kilowatt PR.',
    url: 'https://www.kilowattpr.com/resenas',
  },
}

interface Testimonial {
  name: string
  municipio: string
  rating: number
  text: string
  initials: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Carlos M.',
    municipio: 'Aguada',
    rating: 5,
    initials: 'CM',
    text: 'Desde que Kilowatt PR me instaló los paneles, mi factura de LUMA bajó un 90%. El equipo fue profesional desde el primer día — Xavier mismo vino a evaluar mi techo. No me arrepiento de nada.',
  },
  {
    name: 'María L.',
    municipio: 'San Juan',
    rating: 5,
    initials: 'ML',
    text: 'Instalé paneles con batería de respaldo y la tranquilidad que tengo ahora no tiene precio. Cuando se va la luz en el vecindario, mi casa sigue funcionando como si nada. Excelente servicio.',
  },
  {
    name: 'Roberto V.',
    municipio: 'Ponce',
    rating: 5,
    initials: 'RV',
    text: 'Tengo un negocio comercial y los costos de energía me estaban matando. Kilowatt PR diseñó un sistema que se ajustó perfectamente a mi consumo. En seis meses ya estoy viendo el retorno de la inversión.',
  },
  {
    name: 'Ana G.',
    municipio: 'Mayagüez',
    rating: 5,
    initials: 'AG',
    text: 'Lo que más me impresionó fue que se encargaron de todo el proceso — permisos de OGPE, interconexión con LUMA, inspecciones. Yo no tuve que hacer nada más que firmar. Súper recomendados.',
  },
  {
    name: 'José R.',
    municipio: 'Caguas',
    rating: 5,
    initials: 'JR',
    text: 'La instalación fue rapidísima. Me dijeron una fecha y cumplieron. En menos de dos semanas ya tenía el sistema produciendo. El seguimiento después de la instalación también fue excelente.',
  },
  {
    name: 'Laura P.',
    municipio: 'Bayamón',
    rating: 5,
    initials: 'LP',
    text: 'Después del último apagón que duró tres días, decidí invertir en solar con batería. Kilowatt PR me explicó todo claramente y ahora mi familia está protegida. No más depender de LUMA.',
  },
  {
    name: 'Fernando D.',
    municipio: 'Aguadilla',
    rating: 5,
    initials: 'FD',
    text: 'Vivimos cerca de la costa y me preocupaba el salitre. Xavier me explicó qué equipos resisten mejor las condiciones costeras y diseñaron un sistema pensado para nuestro ambiente. Llevan meses funcionando perfecto.',
  },
  {
    name: 'Carmen T.',
    municipio: 'Rincón',
    rating: 5,
    initials: 'CT',
    text: 'Después de María estuvimos cinco meses sin luz. Juré que nunca más pasaríamos por eso. Kilowatt PR nos instaló paneles con batería y ahora dormimos tranquilos cuando viene un huracán. Son gente seria.',
  },
  {
    name: 'David S.',
    municipio: 'Carolina',
    rating: 5,
    initials: 'DS',
    text: 'Mi vecino me recomendó a Kilowatt PR y fue la mejor decisión. Desde la cotización hasta la instalación, todo fue transparente. Ahora yo también los recomiendo a todo el mundo.',
  },
  {
    name: 'Patricia N.',
    municipio: 'Humacao',
    rating: 5,
    initials: 'PN',
    text: 'Tengo un restaurante en Humacao y los apagones me costaban miles en inventario perdido. Kilowatt PR me diseñó un sistema comercial con respaldo que mantiene los neveras funcionando aunque se vaya la luz. Inversión que se paga sola.',
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={16} className="fill-[#F5A623] text-[#F5A623]" />
      ))}
    </div>
  )
}

function RatingDisplay() {
  return (
    <div className="flex items-center gap-3">
      <span className="font-display text-5xl md:text-6xl font-bold text-[#F5A623]">4.9</span>
      <div>
        <div className="flex gap-0.5 mb-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={24} className="fill-[#F5A623] text-[#F5A623]" />
          ))}
        </div>
        <p className="text-on-surface-variant text-sm">Promedio de 147 reseñas</p>
      </div>
    </div>
  )
}

export default function ResenasPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-surface text-on-surface py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-on-surface">
              Lo Que Dicen{' '}
              <span className="text-primary-container">Nuestros Clientes</span>
            </h1>
            <p className="text-xl text-on-surface-variant leading-relaxed mb-8">
              No lo decimos nosotros — lo dicen las familias y negocios que confiaron en
              Kilowatt PR para protegerse de los apagones y las tarifas abusivas de LUMA.
            </p>
            <RatingDisplay />
            <a
              href="https://www.google.com/maps/place/Kilowatt+PR+LLC"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-[#E09500] font-label text-label-lg hover:underline"
            >
              147 Reseñas Verificadas en Google →
            </a>
          </div>
        </div>
      </section>

      {/* Testimonial Grid */}
      <section className="py-20 section-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="card-light flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0">
                    <Image
                      src={`https://api.dicebear.com/9.x/initials/svg?seed=${testimonial.initials}&backgroundColor=F5A623&textColor=ffffff&fontSize=40`}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-headline font-semibold text-[#121240]">
                      {testimonial.name}
                    </p>
                    <p className="text-[#4A4A6A] text-sm">{testimonial.municipio}</p>
                  </div>
                </div>
                <StarRating count={testimonial.rating} />
                <p className="text-[#4A4A6A] text-body-md leading-relaxed mt-3 flex-grow">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — Leave a Review */}
      <section className="py-16 section-light-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-[#121240] mb-4">
            ¿Ya Eres Cliente de Kilowatt PR?
          </h2>
          <p className="text-lg text-[#4A4A6A] mb-8 leading-relaxed">
            Tu experiencia ayuda a otras familias a tomar la decisión correcta.
            Déjanos tu reseña en Google — solo toma un minuto.
          </p>
          <a
            href="https://www.google.com/maps/place/Kilowatt+PR+LLC"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base px-8 py-4 inline-flex"
          >
            Deja Tu Reseña en Google
          </a>
        </div>
      </section>

      {/* CTA — New Customers */}
      <section className="py-16 section-cta">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-[#3A2400] mb-4">
            ¿Listo para Unirte a Nuestros 147 Clientes Satisfechos?
          </h2>
          <p className="text-lg text-[#6B4400] mb-8 leading-relaxed">
            Consulta y cotización gratis, sin compromiso. Habla directamente con nuestro
            equipo — respuesta en menos de 2 horas.
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
