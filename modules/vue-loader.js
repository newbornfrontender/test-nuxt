module.exports = function() {
  this.extendBuild(config => {
    const vueLoader = config.module.rules.find(
      rule => rule.loader === 'vue-loader'
    )

    vueLoader.options.cssModules = {
      localIdentName: '[path]-[name]__[local]_[hash:base64:5]',
      camelCase: 'only'
    }
  })
}
