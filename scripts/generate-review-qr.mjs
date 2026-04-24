import QRCode from 'qrcode'
import { writeFile, mkdir } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const outDir = resolve(__dirname, '..', '..', 'brand', 'qr')

// Use the direct Google review form link. On a printed invoice the user
// won't visit /dejar-resena/ first — they just want the review form.
const URL_DIRECT = 'https://g.page/r/CTlRehNeXdFFEBM/review'

// Secondary link: the landing on kilowattpr.com. Useful for QRs in
// contexts where we also want to show the "what to include" guidance.
const URL_LANDING = 'https://www.kilowattpr.com/dejar-resena/'

const BRAND_AMBER = '#F5A623'
const NAVY = '#121240'

const PRESETS = [
  {
    name: 'review-direct-amber-navy.png',
    data: URL_DIRECT,
    type: 'png',
    opts: {
      errorCorrectionLevel: 'H', // High — survives small logos overlays & wear
      margin: 2,
      scale: 20, // ~1200x1200 px
      color: { dark: NAVY, light: '#FFFFFF' },
    },
  },
  {
    name: 'review-direct-amber-navy.svg',
    data: URL_DIRECT,
    type: 'svg',
    opts: {
      errorCorrectionLevel: 'H',
      margin: 2,
      color: { dark: NAVY, light: '#FFFFFF' },
    },
  },
  {
    name: 'review-landing-amber-navy.png',
    data: URL_LANDING,
    type: 'png',
    opts: {
      errorCorrectionLevel: 'H',
      margin: 2,
      scale: 20,
      color: { dark: NAVY, light: '#FFFFFF' },
    },
  },
  {
    name: 'review-landing-amber-navy.svg',
    data: URL_LANDING,
    type: 'svg',
    opts: {
      errorCorrectionLevel: 'H',
      margin: 2,
      color: { dark: NAVY, light: '#FFFFFF' },
    },
  },
  {
    name: 'review-direct-plain-bw.png',
    data: URL_DIRECT,
    type: 'png',
    opts: {
      errorCorrectionLevel: 'H',
      margin: 2,
      scale: 20,
      color: { dark: '#000000', light: '#FFFFFF' },
    },
  },
]

await mkdir(outDir, { recursive: true })

for (const preset of PRESETS) {
  const outPath = resolve(outDir, preset.name)
  if (preset.type === 'png') {
    await QRCode.toFile(outPath, preset.data, preset.opts)
  } else {
    const svg = await QRCode.toString(preset.data, { ...preset.opts, type: 'svg' })
    await writeFile(outPath, svg)
  }
  console.log(`✓ ${preset.name} → ${preset.data}`)
}

console.log(`\nAll QR codes written to: ${outDir}`)
console.log('\nUsage:')
console.log('  • Invoice / work order    → review-direct-amber-navy.png  (scale to 2.5cm × 2.5cm min)')
console.log('  • Flyer / door hanger     → review-landing-amber-navy.svg (scales infinitely)')
console.log('  • B&W printers            → review-direct-plain-bw.png    (save toner)')
