module.exports = function() {
  this.extendBuild(config => {
    config.module.rules.find(
      rule => rule.loader === 'vue-loader'
    ).options.cssModules = {
      localIdentName: '[path]-[name]__[local]_[hash:base64:5]',
      camelCase: 'only'
    }
  })
}
