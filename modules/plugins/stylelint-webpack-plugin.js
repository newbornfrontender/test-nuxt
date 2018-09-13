const StylelintWebpackPlugin = require('stylelint-webpack-plugin')

module.exports = function() {
  this.extendBuild(config => {
    config.plugins.push([
      new StylelintWebpackPlugin({
        files: ['**/*.{vue,html,css}']
      })
    ])
  })
}
