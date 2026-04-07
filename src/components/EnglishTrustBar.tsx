"use client";

import { Star, Shield, CheckCircle, Award } from "lucide-react";
import { CountUpStat } from "@/components/ui/count-up-stat";

export default function EnglishTrustBar() {
  return (
    <section className="bg-[#F8F7F4] border-b border-[#E8E5E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Reviews — linked to Google Business Profile */}
          <a
            href="https://www.google.com/maps/place/Kilowatt+PR+LLC"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 font-label text-label-lg text-[#4A4A6A] py-2 hover:text-[#E09500] transition-colors duration-200 group"
            title="See our reviews on Google"
          >
            <span className="text-[#E09500]"><Star size={16} /></span>
            <span className="font-display font-bold text-[#121240] group-hover:text-[#E09500] transition-colors duration-200">4.9★</span>
            <span>/ 10+ Reviews</span>
          </a>

          {/* PE License */}
          <div className="flex items-center justify-center gap-2 font-label text-label-lg text-[#4A4A6A] py-2">
            <span className="text-[#E09500]"><Award size={16} /></span>
            <span className="font-display font-bold text-[#121240]">PE #6083</span>
            <span>Licensed Eng.</span>
          </div>

          <CountUpStat
            value={50}
            prefix="+"
            suffix=" Years"
            label="Experience"
            icon={<CheckCircle size={16} />}
          />
          <a
            href="https://www.bbb.org/us/pr/aguada/profile/solar-energy-contractors/kilowatt-pr-llc-0633-92054804"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 font-label text-label-lg text-[#4A4A6A] py-2 hover:text-[#E09500] transition-colors duration-200 group"
            title="View our BBB profile"
          >
            <span className="text-[#E09500]"><Shield size={16} /></span>
            <span className="font-display font-bold text-[#121240] group-hover:text-[#E09500] transition-colors duration-200">BBB</span>
            <span>Accredited</span>
          </a>
        </div>
      </div>
    </section>
  );
}
