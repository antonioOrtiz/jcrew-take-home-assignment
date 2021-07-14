const path = require('path')

module.exports = {
  images: {
    domains: ['j.crew.com'],
    path: `https://www.jcrew.com/s7-img-facade/`
  },
  reactStrictMode: true,
  trailingSlash: true,
  webpackDevMiddleware: config => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300
    }
    return config
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },

}
