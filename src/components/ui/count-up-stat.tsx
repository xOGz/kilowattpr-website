"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useSpring, useTransform, useInView } from "framer-motion";

interface CountUpStatProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  icon?: React.ReactNode;
  decimals?: number;
  duration?: number;
}

function formatValue(
  latest: number,
  prefix: string,
  suffix: string,
  decimals: number
): string {
  if (decimals > 0) {
    return `${prefix}${latest.toFixed(decimals)}${suffix}`;
  }
  return `${prefix}${Math.round(latest)}${suffix}`;
}

export function CountUpStat({
  value,
  suffix = "",
  prefix = "",
  label,
  icon,
  decimals = 0,
  duration = 2,
}: CountUpStatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [hasAnimated, setHasAnimated] = useState(false);

  const spring = useSpring(value, {
    stiffness: 50,
    damping: 20,
    duration: duration * 1000,
  });

  const display = useTransform(spring, (latest) =>
    formatValue(latest, prefix, suffix, decimals)
  );

  useEffect(() => {
    setIsMounted(true);
    spring.jump(0);
  }, [spring]);

  useEffect(() => {
    if (isMounted && isInView && !hasAnimated) {
      spring.set(value);
      setHasAnimated(true);
    }
  }, [isMounted, isInView, hasAnimated, spring, value]);

  const staticText = formatValue(value, prefix, suffix, decimals);

  return (
    <div
      ref={ref}
      className="flex items-center justify-center gap-2 font-label text-label-lg text-[#4A4A6A] py-2"
    >
      {icon && <span className="text-[#E09500]">{icon}</span>}
      <motion.span className="font-display font-bold text-[#121240] tabular-nums">
        {isMounted ? display : staticText}
      </motion.span>
      <span>{label}</span>
    </div>
  );
}
