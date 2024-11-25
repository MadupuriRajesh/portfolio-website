const path = require('path')

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
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
    unoptimized: true,
  },
  basePath: isProd ? '/portfolio-website' : '', 
  assetPrefix: isProd ? '/portfolio-website/' : '', 
  output: 'export',
}