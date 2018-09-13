module.exports = {
  build: {
    analyze: true,
    extractCSS: true
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
  modules: ['~/modules/vue-loader', '~/modules/eslint-loader'],
  router: {
    linkActiveClass: 'linkActive',
    linkExactActiveClass: 'linkActiveExact'
  }
}
