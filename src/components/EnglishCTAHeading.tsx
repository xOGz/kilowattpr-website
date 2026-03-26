"use client";

import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";

export default function EnglishCTAHeading() {
  return (
    <AnimatedShinyText
      text="Ready for Energy Independence?"
      textClassName="text-3xl md:text-4xl"
      className="justify-start mb-5"
      gradientColors="linear-gradient(90deg, #E09500, #F5A623, #FFBC42, #3DD8F5, #FFBC42, #F5A623, #E09500)"
      gradientAnimationDuration={3}
    />
  );
}
