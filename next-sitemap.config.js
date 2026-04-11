/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.kilowattpr.com',
  generateRobotsTxt: false,
  outDir: './public',
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/privacidad', '/gracias', '/test-components', '/municipios/*', '/en', '/en/*', '/equipo/*', '/en/privacy', '/en/thank-you'],
  additionalPaths: async (config) => {
    const municipios = [
      'aguada','san-juan','ponce','mayaguez','aguadilla','arecibo',
      'bayamon','carolina','caguas','humacao','fajardo','guaynabo',
      'toa-baja','toa-alta','manati','hatillo','camuy','isabela',
      'rincon','cabo-rojo','yauco'
    ]
    const municipioPaths = municipios.map((slug) => ({
      loc: `/municipios/${slug}/`,
      changefreq: 'monthly',
      priority: 0.6,
    }))
    const englishPaths = [
      { loc: '/en/', changefreq: 'weekly', priority: 0.8 },
      { loc: '/en/about/', changefreq: 'monthly', priority: 0.6 },
      { loc: '/en/services/', changefreq: 'monthly', priority: 0.7 },
      { loc: '/en/services/solar-panel-installation/', changefreq: 'monthly', priority: 0.7 },
      { loc: '/en/services/battery-backup-systems/', changefreq: 'monthly', priority: 0.7 },
      { loc: '/en/services/roof-sealing/', changefreq: 'monthly', priority: 0.5 },
      { loc: '/en/services/maintenance/', changefreq: 'monthly', priority: 0.5 },
      { loc: '/en/blog/', changefreq: 'weekly', priority: 0.7 },
      { loc: '/en/blog/how-much-does-solar-cost-puerto-rico-2026/', changefreq: 'monthly', priority: 0.7 },
      { loc: '/en/contact/', changefreq: 'monthly', priority: 0.6 },
      { loc: '/en/projects/', changefreq: 'monthly', priority: 0.5 },
      { loc: '/en/reviews/', changefreq: 'monthly', priority: 0.6 },
      { loc: '/en/solar-calculator/', changefreq: 'monthly', priority: 0.6 },
      { loc: '/en/solar-guide/', changefreq: 'monthly', priority: 0.6 },
      { loc: '/en/referral-program/', changefreq: 'monthly', priority: 0.5 },
      { loc: '/en/comparison/why-kilowatt-pr/', changefreq: 'monthly', priority: 0.6 },
    ]
    const authorPaths = [
      { loc: '/equipo/julio-santiago-perez/', changefreq: 'monthly', priority: 0.6 },
    ]
    return [...municipioPaths, ...englishPaths, ...authorPaths]
  },
}
