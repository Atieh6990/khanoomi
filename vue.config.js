module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? ''
    : './',
  filenameHashing: false,
  pwa: {
    name: 'Geary Factory Lofts'
  },
  productionSourceMap: false,
  css: {
    extract: false
  },
  configureWebpack: {
    output: {
      filename: 'js/build.js'
    },
    optimization: {
      splitChunks: false
    }
  }
}
