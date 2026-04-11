"use client";

import Link from "next/link";
import { Sun, MessageCircle, ArrowRight } from "lucide-react";
import { TextRotate } from "@/components/ui/text-rotate";
import { GridGlowBackground } from "@/components/ui/grid-glow-background";

export default function HeroWithTextRotate() {
  return (
    <GridGlowBackground
      className="min-h-[90vh]"
      backgroundColor="#121240"
      gridColor="rgba(245, 166, 35, 0.05)"
      gridSize={60}
      glowColors={["#F5A623", "#E09500", "#3DD8F5", "#F5A623"]}
      glowCount={8}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 pt-40">
        <div className="max-w-4xl">
          <div className="chip-gold inline-flex items-center gap-2 mb-8">
            <Sun size={12} />
            LA EMPRESA SOLAR #1 DE CONFIANZA EN LA ISLA
          </div>
          <h1 className="font-display text-display-lg mb-6 text-on-surface">
            Reduce Tu Factura de LUMA Hasta un 95% con Energía Solar para{" "}
            <span className="inline-flex">
              <TextRotate
                texts={[
                  "Tu Hogar",
                  "Tu Negocio",
                  "Tu Familia",
                  "Puerto Rico",
                ]}
                mainClassName="text-primary-container overflow-hidden h-[1.2em] inline-flex"
                staggerFrom="last"
                staggerDuration={0.025}
                rotationInterval={3000}
                transition={{ type: "spring", damping: 30, stiffness: 200 }}
              />
            </span>
          </h1>
          <p className="text-xl text-on-surface-variant mb-10 leading-relaxed max-w-2xl font-body">
            Diseño e instalación por ingeniero eléctrico licenciado con más de 50 años de
            experiencia en Puerto Rico. Familias protegidas contra los apagones de LUMA en toda la isla.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/17874312275"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base px-8 py-4"
            >
              <MessageCircle size={20} />
              Cotización Gratis — Respuesta en 2 Horas
            </a>
            <Link href="/servicios" className="btn-secondary text-base px-8 py-4">
              Ver Servicios <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </GridGlowBackground>
  );
}
