const StylelintWebpackPlugin = require('stylelint-webpack-plugin')

module.exports = {
  build: {
    analyze: true,
    extractCSS: true,
    plugins: [
      new StylelintWebpackPlugin({
        files: ['**/*.{vue,html,css}']
      })
    ]
  },
  head: {
    /* prettier-ignore */
    meta: [{
      charset: 'utf-8'
    }, {
      name: 'viewport',
      content: 'width=device-width, minimum-scale=1, initial-scale=1, user-scalable=yes'
    }]
  },
  loading: {
    color: 'blue',
    failedColor: 'orange'
  },
  modules: ['~/modules/loaders/vue-loader', '~/modules/loaders/eslint-loader'],
  router: {
    linkActiveClass: 'linkActive',
    linkExactActiveClass: 'linkActiveExact'
  }
}
