"use client";

import { Star } from "lucide-react";
import { TestimonialsColumn } from "@/components/blocks/testimonials-columns-1";

const testimonials = [
  {
    text: "Excellent service from start to finish. The Kilowatt PR team handled all the permits and the LUMA interconnection. My bill dropped 90% from month one. 100% recommended.",
    image: "https://api.dicebear.com/7.x/initials/svg?seed=CM&backgroundColor=F5A623&textColor=3A2400",
    name: "Carlos M.",
    role: "Aguada, PR",
  },
  {
    text: "After last year's blackouts I decided to install the battery system. Kilowatt PR explained everything clearly, the price was fair, and the installation was fast. Now I have peace of mind.",
    image: "https://api.dicebear.com/7.x/initials/svg?seed=ML&backgroundColor=3DD8F5&textColor=003545",
    name: "Maria L.",
    role: "San Juan, PR",
  },
  {
    text: "I hired them for my business. The team was very professional, arrived on time, and the system works perfectly. It's been 8 months with zero issues. The monthly savings are real.",
    image: "https://api.dicebear.com/7.x/initials/svg?seed=RV&backgroundColor=F5A623&textColor=3A2400",
    name: "Roberto V.",
    role: "Ponce, PR",
  },
  {
    text: "Kilowatt PR handled everything — permits, OGPE, LUMA interconnection. I didn't have to do anything. The service was flawless from start to finish.",
    image: "https://api.dicebear.com/7.x/initials/svg?seed=AG&backgroundColor=3DD8F5&textColor=003545",
    name: "Ana G.",
    role: "Mayagüez, PR",
  },
  {
    text: "Professional from the first contact. The installation was quick and the system works perfectly. Totally recommended.",
    image: "https://api.dicebear.com/7.x/initials/svg?seed=JR&backgroundColor=F5A623&textColor=3A2400",
    name: "José R.",
    role: "Caguas, PR",
  },
  {
    text: "The best investment I've ever made. With the battery I no longer worry about LUMA outages. My family is at peace.",
    image: "https://api.dicebear.com/7.x/initials/svg?seed=LP&backgroundColor=3DD8F5&textColor=003545",
    name: "Laura P.",
    role: "Bayamón, PR",
  },
];

const firstColumn = testimonials.slice(0, 2);
const secondColumn = testimonials.slice(2, 4);
const thirdColumn = testimonials.slice(4, 6);

export default function EnglishTestimonialsSection() {
  return (
    <section className="py-20 section-light-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-display-md leading-tight text-[#121240]">What Our Customers Say</h2>
          <div className="flex items-center justify-center gap-2 mt-5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="text-primary-container fill-primary-container" size={24} />
            ))}
            <span className="text-2xl font-display font-bold text-[#121240] ml-2">4.9</span>
            <span className="text-[#4A4A6A]">/ 147 reviews</span>
          </div>
        </div>
        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[550px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} className="hidden md:block" />
          <TestimonialsColumn testimonials={secondColumn} duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} duration={17} className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
}
