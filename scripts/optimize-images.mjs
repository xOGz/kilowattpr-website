import sharp from 'sharp'
import { readdir, stat } from 'node:fs/promises'
import { join, parse } from 'node:path'

const ROOTS = [
  new URL('../public/gallery/', import.meta.url).pathname,
  new URL('../public/servicios/', import.meta.url).pathname,
]

const MAX_WIDTH = 1920
const WEBP_QUALITY = 82

const formatKB = (bytes) => `${(bytes / 1024).toFixed(1)} KB`
const formatMB = (bytes) => `${(bytes / 1024 / 1024).toFixed(2)} MB`

async function optimizeDir(dir) {
  let entries
  try {
    entries = await readdir(dir)
  } catch {
    console.warn(`skip ${dir} (not found)`)
    return { before: 0, after: 0 }
  }

  let totalBefore = 0
  let totalAfter = 0

  for (const file of entries) {
    if (!/\.(jpe?g|png)$/i.test(file)) continue

    const srcPath = join(dir, file)
    const { name } = parse(file)
    const outPath = join(dir, `${name}.webp`)

    const srcStat = await stat(srcPath)
    const image = sharp(srcPath).rotate()
    const meta = await image.metadata()

    const resized =
      meta.width && meta.width > MAX_WIDTH
        ? image.resize({ width: MAX_WIDTH, withoutEnlargement: true, kernel: 'lanczos3' })
        : image

    await resized.webp({ quality: WEBP_QUALITY, effort: 6 }).toFile(outPath)
    const outStat = await stat(outPath)

    totalBefore += srcStat.size
    totalAfter += outStat.size

    const pct = (((srcStat.size - outStat.size) / srcStat.size) * 100).toFixed(0)
    console.log(
      `  ${file.padEnd(32)} ${formatKB(srcStat.size).padStart(10)} → ${formatKB(outStat.size).padStart(10)}  (-${pct}%)`,
    )
  }

  return { before: totalBefore, after: totalAfter }
}

let grandBefore = 0
let grandAfter = 0

for (const root of ROOTS) {
  console.log(`\n📦 ${root.replace(process.cwd(), '.')}`)
  const { before, after } = await optimizeDir(root)
  grandBefore += before
  grandAfter += after
}

console.log(
  `\n✅ Total: ${formatMB(grandBefore)} → ${formatMB(grandAfter)} ` +
    `(-${(((grandBefore - grandAfter) / grandBefore) * 100).toFixed(0)}%)`,
)
