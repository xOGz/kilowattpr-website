"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { Sun, MessageCircle, ArrowRight } from "lucide-react";
import { TextRotate } from "@/components/ui/text-rotate";

const HeroDottedSurface = dynamic(() => import("@/components/HeroDottedSurface"), { ssr: false });

export default function EnglishHero() {
  return (
    <section className="relative bg-surface overflow-hidden min-h-[90vh] flex items-center">
      <HeroDottedSurface />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-surface pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 pt-40">
        <div className="max-w-4xl">
          <div className="chip-gold inline-flex items-center gap-2 mb-8">
            <Sun size={12} />
            THE #1 TRUSTED SOLAR COMPANY IN THE ISLAND
          </div>
          <h1 className="font-display text-display-lg mb-6 text-on-surface">
            Solar Energy for{" "}
            <span className="inline-flex">
              <TextRotate
                texts={[
                  "Your Home",
                  "Your Business",
                  "Your Family",
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
            Licensed electricians and electrical engineers with over 3 decades of experience in Puerto Rico.
            Real energy independence for your home or business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/17874312275"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base px-8 py-4"
            >
              <MessageCircle size={20} />
              Free Quote via WhatsApp
            </a>
            <Link href="/servicios" className="btn-secondary text-base px-8 py-4">
              View Services <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
