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
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [hasAnimated, setHasAnimated] = useState(false);

  const spring = useSpring(0, {
    stiffness: 50,
    damping: 20,
    duration: duration * 1000,
  });

  const display = useTransform(spring, (latest) => {
    if (decimals > 0) {
      return `${prefix}${latest.toFixed(decimals)}${suffix}`;
    }
    return `${prefix}${Math.round(latest)}${suffix}`;
  });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      spring.set(value);
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated, spring, value]);

  return (
    <div
      ref={ref}
      className="flex items-center justify-center gap-2 font-label text-label-lg text-on-surface-variant py-2"
    >
      {icon && (
        <span className="text-primary-container">{icon}</span>
      )}
      <motion.span className="font-display font-bold text-on-surface tabular-nums">
        {display}
      </motion.span>
      <span>{label}</span>
    </div>
  );
}
