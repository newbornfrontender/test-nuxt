module.exports = function() {
  this.extendBuild((ctx, config) => {
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
