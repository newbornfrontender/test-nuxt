module.exports = function() {
  this.extendBuild(config => {
    const vueLoader = config.module.rules.find(
      rule => rule.loader === 'vue-loader'
    )

    vueLoader.options.cssModules = {
      localIdentName: '[path]-[name]--[local]__[hash:base64:5]_',
      camelCase: 'only'
    }
  })
}
