/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://viralvisions.live',
    generateRobotsTxt: true,
    changefreq: 'daily',
    priority: 0.7,
    exclude: ['/api/*'],
    robotsTxtOptions: {
      additionalSitemaps: [
        'https://viralvisions.live/sitemap.xml',
      ],
    },
  }