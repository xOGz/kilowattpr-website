"use client";

import { Star, MessageCircle, ArrowRight, Phone } from "lucide-react";
import Link from "next/link";

// 21st.dev components (keepers)
import { TextRotate } from "@/components/ui/text-rotate";
import { TextEffect } from "@/components/ui/text-effect";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { TestimonialsColumn } from "@/components/blocks/testimonials-columns-1";

// ─── Testimonials data ───────────────────────────────────────────────
const testimonials = [
  {
    text: "Excelente servicio de principio a fin. Mi factura bajó un 90% desde el primer mes. 100% recomendados.",
    image: "https://api.dicebear.com/7.x/initials/svg?seed=CM&backgroundColor=F5A623&textColor=3A2400",
    name: "Carlos M.",
    role: "Aguada, PR",
  },
  {
    text: "Después de los apagones decidí instalar el sistema con batería. Ahora tengo paz mental total.",
    image: "https://api.dicebear.com/7.x/initials/svg?seed=ML&backgroundColor=3DD8F5&textColor=003545",
    name: "María L.",
    role: "San Juan, PR",
  },
  {
    text: "Contraté para mi negocio. Ya van 8 meses y cero problemas. El ahorro mensual es real.",
    image: "https://api.dicebear.com/7.x/initials/svg?seed=RV&backgroundColor=F5A623&textColor=3A2400",
    name: "Roberto V.",
    role: "Ponce, PR",
  },
  {
    text: "Kilowatt PR manejó todo — permisos, ARPE, interconexión con LUMA. Yo no tuve que hacer nada.",
    image: "https://api.dicebear.com/7.x/initials/svg?seed=AG&backgroundColor=3DD8F5&textColor=003545",
    name: "Ana G.",
    role: "Mayagüez, PR",
  },
  {
    text: "Profesionales desde el primer contacto. La instalación fue rápida y el sistema funciona perfecto.",
    image: "https://api.dicebear.com/7.x/initials/svg?seed=JR&backgroundColor=F5A623&textColor=3A2400",
    name: "José R.",
    role: "Caguas, PR",
  },
  {
    text: "La mejor inversión que he hecho. Con la batería ya no me preocupo por los apagones de LUMA.",
    image: "https://api.dicebear.com/7.x/initials/svg?seed=LP&backgroundColor=3DD8F5&textColor=003545",
    name: "Laura P.",
    role: "Bayamón, PR",
  },
];

const firstColumn = testimonials.slice(0, 2);
const secondColumn = testimonials.slice(2, 4);
const thirdColumn = testimonials.slice(4, 6);

export default function TestComponentsPage() {
  return (
    <div className="overflow-hidden">
      {/* ═══════════════════════════════════════════════════════════════
          COMPONENT 1: TextRotate — Hero with cycling phrases
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-32 bg-surface relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="chip-gold inline-flex items-center gap-2 mb-8">
            <Star size={12} />
            LA EMPRESA #1 EN SOLAR
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-on-surface mb-4">
            Energía Solar para{" "}
          </h2>
          <div className="flex items-center justify-center">
            <TextRotate
              texts={[
                "Tu Hogar",
                "Tu Negocio",
                "Tu Familia",
                "Puerto Rico",
                "Tu Futuro",
              ]}
              mainClassName="text-4xl sm:text-5xl md:text-7xl font-bold font-display text-primary-container overflow-hidden h-[1.2em]"
              staggerFrom="last"
              staggerDuration={0.025}
              rotationInterval={3000}
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
            />
          </div>
          <p className="text-xl text-on-surface-variant mt-8 max-w-2xl mx-auto leading-relaxed">
            Técnicos y jornaleros con más de una década de experiencia en Puerto Rico.
            Independencia energética real.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <a
              href="https://wa.me/17874312275"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base px-8 py-4"
            >
              <MessageCircle size={20} />
              Cotización Gratis
            </a>
            <Link href="/servicios" className="btn-secondary text-base px-8 py-4">
              Ver Servicios <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          COMPONENT 2: TextEffect — Blur-in section headings
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <TextEffect
            preset="blur"
            as="h2"
            className="font-display text-display-md text-on-surface"
          >
            ¿Por Qué Elegir Kilowatt PR?
          </TextEffect>
          <TextEffect
            preset="blur"
            delay={0.3}
            as="p"
            className="text-on-surface-variant text-body-lg mt-6 max-w-2xl mx-auto"
          >
            Somos la empresa solar de mayor confianza en Puerto Rico. 4.9 estrellas en 147 reseñas verificadas.
          </TextEffect>

          <AnimatedGroup
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
            variants={{
              container: {
                visible: { transition: { staggerChildren: 0.15 } },
              },
              item: {
                hidden: { opacity: 0, filter: "blur(12px)", y: 20 },
                visible: { opacity: 1, filter: "blur(0px)", y: 0, transition: { duration: 0.8 } },
              },
            }}
          >
            {[
              { num: "01", title: "Consulta Gratis", desc: "Analizamos tu consumo eléctrico y diseñamos tu sistema en 3D." },
              { num: "02", title: "Diseño y Permisos", desc: "Manejamos ARPE y la interconexión con LUMA Energy por ti." },
              { num: "03", title: "Instalación", desc: "1–2 días de instalación. Empiezas a ahorrar desde el primer mes." },
            ].map((step) => (
              <div key={step.num} className="text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-display font-black mx-auto mb-5"
                  style={{ background: "linear-gradient(135deg, #E09500, #F5A623)", color: "#3A2400" }}
                >
                  {step.num}
                </div>
                <h3 className="font-headline text-headline-md text-on-surface mb-3">{step.title}</h3>
                <p className="text-on-surface-variant text-body-lg leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </AnimatedGroup>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          COMPONENT 3: TestimonialsColumn — Auto-scrolling reviews
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <TextEffect preset="blur" as="h2" className="font-display text-display-md text-on-surface">
              Lo Que Dicen Nuestros Clientes
            </TextEffect>
            <div className="flex items-center justify-center gap-2 mt-5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-primary-container fill-primary-container" size={24} />
              ))}
              <span className="text-2xl font-display font-bold text-on-surface ml-2">4.9</span>
              <span className="text-on-surface-variant">/ 147 reseñas</span>
            </div>
          </div>
          <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[600px] overflow-hidden">
            <TestimonialsColumn testimonials={firstColumn} duration={15} className="hidden md:block" />
            <TestimonialsColumn testimonials={secondColumn} duration={19} />
            <TestimonialsColumn testimonials={thirdColumn} duration={17} className="hidden lg:block" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-surface-container-low">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <TextEffect preset="blur" as="h2" className="font-display text-3xl md:text-4xl font-bold text-on-surface mb-5">
            ¿Listo para la Independencia Energética?
          </TextEffect>
          <p className="text-lg text-on-surface-variant mb-10 leading-relaxed max-w-2xl mx-auto">
            Cotización gratis, sin compromiso. Respuesta en menos de 24 horas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/17874312275" target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-base px-8 py-4">
              <MessageCircle size={20} />
              WhatsApp — Respuesta Inmediata
            </a>
            <a href="tel:+17874312275" className="btn-secondary text-base px-8 py-4">
              <Phone size={20} />
              787-431-2275
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
