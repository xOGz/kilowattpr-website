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
    return municipios.map((slug) => ({
      loc: `/municipios/${slug}/`,
      changefreq: 'monthly',
      priority: 0.6,
    }))
  },
}
