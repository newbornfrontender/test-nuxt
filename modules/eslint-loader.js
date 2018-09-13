module.exports = function() {
  this.extendBuild((config, ctx) => {
    if (ctx.isDev && ctx.isClient) {
      config.module.rules.push({
        enforce: 'pre',
        test: /\.(jsx?|vue)$/,
        use: 'eslint-loader',
        exclude: /node_modules/
      })
    }
  })
}
