module.exports = function() {
  this.extendBuild(config => {
    const loader = config.module.rules.find(
      rule => rule.loader === 'vue-loader'
    )

    loader.options.cssModules = {
      localIdentName: '[name]__[local]_[hash:hex:5]',
      camelCase: 'only'
    }
  })
}
