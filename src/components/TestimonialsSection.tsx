"use client";

import { Star } from "lucide-react";
import { TestimonialsColumn } from "@/components/blocks/testimonials-columns-1";

const testimonials = [
  {
    text: "Excelente servicio de principio a fin. El equipo de Kilowatt PR manejó todos los permisos y la interconexión con LUMA. Mi factura bajó un 90% desde el primer mes. 100% recomendados.",
    image: "https://api.dicebear.com/7.x/initials/svg?seed=CM&backgroundColor=F5A623&textColor=3A2400",
    name: "Carlos M.",
    role: "Aguada, PR",
  },
  {
    text: "Después de los apagones del año pasado decidí instalar el sistema con batería. Kilowatt PR me explicó todo claramente, el precio fue justo y la instalación fue rápida. Ahora tengo paz mental.",
    image: "https://api.dicebear.com/7.x/initials/svg?seed=ML&backgroundColor=3DD8F5&textColor=003545",
    name: "María L.",
    role: "San Juan, PR",
  },
  {
    text: "Contraté para mi negocio. El equipo fue muy profesional, llegaron a tiempo y el sistema funciona perfectamente. Ya van 8 meses y cero problemas. El ahorro mensual es real.",
    image: "https://api.dicebear.com/7.x/initials/svg?seed=RV&backgroundColor=F5A623&textColor=3A2400",
    name: "Roberto V.",
    role: "Ponce, PR",
  },
  {
    text: "Kilowatt PR manejó todo — permisos, OGPE, interconexión con LUMA. Yo no tuve que hacer nada. El servicio fue impecable de principio a fin.",
    image: "https://api.dicebear.com/7.x/initials/svg?seed=AG&backgroundColor=3DD8F5&textColor=003545",
    name: "Ana G.",
    role: "Mayagüez, PR",
  },
  {
    text: "Profesionales desde el primer contacto. La instalación fue rápida y el sistema funciona perfecto. Recomendados totalmente.",
    image: "https://api.dicebear.com/7.x/initials/svg?seed=JR&backgroundColor=F5A623&textColor=3A2400",
    name: "José R.",
    role: "Caguas, PR",
  },
  {
    text: "La mejor inversión que he hecho. Con la batería ya no me preocupo por los apagones de LUMA. Mi familia está tranquila.",
    image: "https://api.dicebear.com/7.x/initials/svg?seed=LP&backgroundColor=3DD8F5&textColor=003545",
    name: "Laura P.",
    role: "Bayamón, PR",
  },
];

const firstColumn = testimonials.slice(0, 2);
const secondColumn = testimonials.slice(2, 4);
const thirdColumn = testimonials.slice(4, 6);

export default function TestimonialsSection() {
  return (
    <section className="py-20 section-light-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-display-md leading-tight text-[#121240]">Lo Que Dicen Nuestros Clientes</h2>
          <div className="flex items-center justify-center gap-2 mt-5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="text-primary-container fill-primary-container" size={24} />
            ))}
            <span className="text-2xl font-display font-bold text-[#121240] ml-2">4.9</span>
            <span className="text-[#4A4A6A]">/ 10+ reseñas en Google</span>
          </div>
        </div>
        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[550px] overflow-hidden">
          <TestimonialsColumn
            testimonials={firstColumn}
            duration={15}
            className="hidden md:block"
          />
          <TestimonialsColumn
            testimonials={secondColumn}
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            duration={17}
            className="hidden lg:block"
          />
        </div>
      </div>
    </section>
  );
}
