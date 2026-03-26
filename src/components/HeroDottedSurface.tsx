'use client';

import dynamic from 'next/dynamic';

const SolarEnergyField = dynamic(
  () => import('@/components/ui/solar-energy-field'),
  { ssr: false }
);

export default function HeroDottedSurface() {
  return <SolarEnergyField />;
}
