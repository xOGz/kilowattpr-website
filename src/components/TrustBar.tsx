"use client";

import { Star, Shield, CheckCircle, MapPin } from "lucide-react";
import { CountUpStat } from "@/components/ui/count-up-stat";

export default function TrustBar() {
  return (
    <section className="bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <CountUpStat
            value={4.9}
            decimals={1}
            suffix="★"
            label="/ 147 Reseñas"
            icon={<Star size={16} />}
          />
          <CountUpStat
            value={25}
            suffix=" Años"
            label="Garantía"
            icon={<Shield size={16} />}
          />
          <CountUpStat
            value={10}
            prefix="+"
            suffix=" Años"
            label="Experiencia"
            icon={<CheckCircle size={16} />}
          />
          <CountUpStat
            value={21}
            suffix=""
            label="Municipios PR"
            icon={<MapPin size={16} />}
          />
        </div>
      </div>
    </section>
  );
}
