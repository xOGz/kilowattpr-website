import type { Metadata } from 'next'

const BASE = 'https://www.kilowattpr.com'

export interface BuildAlternatesInput {
  /** ES path relative to BASE, with leading slash. e.g. '/servicios' */
  es: string
  /** EN path relative to BASE with leading slash. e.g. '/en/services'. If omitted, only ES+x-default are emitted. */
  en?: string
}

/**
 * Build Next.js metadata.alternates for a page pair, including hreflang tags
 * that AI crawlers and search engines use for ES↔EN mapping.
 *
 * Pass this from a page's metadata export:
 *   export const metadata: Metadata = {
 *     title: '...',
 *     ...buildAlternates({ es: '/servicios', en: '/en/services' }),
 *   }
 */
function joinUrl(path: string): string {
  // Root path renders as bare origin (no trailing slash) to match existing canonical.
  if (path === '/' || path === '') return BASE
  return `${BASE}${path}`
}

export function buildAlternates(input: BuildAlternatesInput): Pick<Metadata, 'alternates'> {
  const esUrl = joinUrl(input.es)
  const enUrl = input.en ? joinUrl(input.en) : undefined

  const languages: Record<string, string> = {
    es: esUrl,
    'es-PR': esUrl,
    'x-default': esUrl,
  }
  if (enUrl) {
    languages.en = enUrl
  }

  // The `canonical` should point to the current page's language version.
  // Callers pass the ES path; for EN pages, they should pass { es: esEquivalent, en: currentEnPath }
  // and override canonical via metadata export directly if needed.
  return {
    alternates: {
      canonical: esUrl,
      languages,
    },
  }
}

/**
 * Same as buildAlternates but for pages that live under /en/. The canonical
 * points to the EN URL; languages still map both directions.
 */
export function buildEnAlternates(input: Required<BuildAlternatesInput>): Pick<Metadata, 'alternates'> {
  const esUrl = joinUrl(input.es)
  const enUrl = joinUrl(input.en)
  return {
    alternates: {
      canonical: enUrl,
      languages: {
        es: esUrl,
        'es-PR': esUrl,
        en: enUrl,
        'x-default': esUrl,
      },
    },
  }
}
