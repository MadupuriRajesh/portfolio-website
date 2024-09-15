const path = require('path')
 
module.exports = {

  output: 'export',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio-website/' : '',
  basePath: '/portfolio-website',
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'media.dev.to',
        pathname: '**',
      },
    ],
  },
}