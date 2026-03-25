/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.kilowattpr.com',
  generateRobotsTxt: false,
  outDir: './public',
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/privacidad'],
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
      { loc: '/en/blog/how-much-does-solar-cost-puerto-rico-2026/', changefreq: 'monthly', priority: 0.7 },
    ]
    const authorPaths = [
      { loc: '/equipo/julio-santiago-perez/', changefreq: 'monthly', priority: 0.6 },
    ]
    return [...municipioPaths, ...englishPaths, ...authorPaths]
  },
}
