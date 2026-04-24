const BASE = 'https://www.kilowattpr.com'

export interface BreadcrumbItem {
  /** Visible name of the crumb, e.g. "Servicios" or "Instalación de Paneles Solares" */
  name: string
  /** Path relative to BASE with leading slash, e.g. "/servicios" */
  path: string
}

interface BreadcrumbSchemaProps {
  /**
   * Ordered list of crumbs from Inicio downward. Do NOT include Inicio yourself —
   * this component prepends it automatically. Example for /servicios/instalacion-paneles-solares:
   *   items={[
   *     { name: 'Servicios', path: '/servicios' },
   *     { name: 'Instalación de Paneles Solares', path: '/servicios/instalacion-paneles-solares' },
   *   ]}
   */
  items: BreadcrumbItem[]
  /** Label for the root breadcrumb. Defaults to 'Inicio' (Spanish). Pass 'Home' for EN pages. */
  rootLabel?: string
}

export default function BreadcrumbSchema({ items, rootLabel = 'Inicio' }: BreadcrumbSchemaProps) {
  const fullItems: BreadcrumbItem[] = [{ name: rootLabel, path: '/' }, ...items]

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: fullItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.path === '/' ? BASE : `${BASE}${item.path}`,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
