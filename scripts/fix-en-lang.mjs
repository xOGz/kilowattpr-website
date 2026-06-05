#!/usr/bin/env node
/**
 * Post-build: rewrite the server-rendered <html lang> on the English tree.
 *
 * Why: the App Router allows a single root <html>, and `output: 'export'` has no
 * runtime middleware, so the root layout hardcodes lang="es-PR". Pages under
 * /en correct it only via a client-side LangSetter that crawlers never execute,
 * leaving English content tagged Spanish in the static HTML (hurts EN-query AI
 * citability). This walks out/en/**.html and sets lang="en" at build time.
 *
 * Idempotent and safe: only touches files under out/en/, only the <html ...> tag.
 */
import { readdir, readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

const EN_DIR = join(process.cwd(), 'out', 'en')

async function* htmlFiles(dir) {
  let entries
  try {
    entries = await readdir(dir, { withFileTypes: true })
  } catch {
    return // out/en/ may not exist if the EN tree was removed
  }
  for (const entry of entries) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) yield* htmlFiles(full)
    else if (entry.name.endsWith('.html')) yield full
  }
}

let changed = 0
let scanned = 0
for await (const file of htmlFiles(EN_DIR)) {
  scanned++
  const html = await readFile(file, 'utf8')
  // Match the opening <html ...> tag and force lang="en" (covers es-PR/es/any).
  const next = html.replace(/<html([^>]*?)\slang="[^"]*"/i, '<html$1 lang="en"')
  if (next !== html) {
    await writeFile(file, next, 'utf8')
    changed++
  }
}

console.log(`fix-en-lang: set lang="en" on ${changed}/${scanned} EN HTML files`)
