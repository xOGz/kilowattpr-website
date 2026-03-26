"use client";

import Link from "next/link";
import { Sun, MessageCircle, ArrowRight } from "lucide-react";
import { TextRotate } from "@/components/ui/text-rotate";
import { GradientBackground } from "@/components/ui/gradient-background";

export default function EnglishHero() {
  return (
    <GradientBackground
      className="min-h-[90vh]"
      gradients={[
        "linear-gradient(135deg, #0A0A2E 0%, #1B1B5E 40%, #121240 100%)",
        "linear-gradient(135deg, #121240 0%, #2D2D75 30%, #0E0E35 100%)",
        "linear-gradient(135deg, #0E0E35 0%, #1B1B5E 50%, #121240 100%)",
        "linear-gradient(135deg, #1B1B5E 0%, #121240 40%, #0A0A2E 100%)",
        "linear-gradient(135deg, #0A0A2E 0%, #1B1B5E 40%, #121240 100%)",
      ]}
      animationDuration={12}
      overlay={true}
      overlayOpacity={0.15}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 pt-40">
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
    </GradientBackground>
  );
}
