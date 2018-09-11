module.exports = {
  build: {
    analyze: true,
    extractCSS: true,
    parallel: true,
    // cache: true,
    postcss: {
      preset: {
        stage: 0
      }
    }
  },
  head: {
    title: 'Test',
    /* prettier-ignore */
    meta: [{
      charset: 'utf-8'
    }, {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    }, {
      hid: 'main-description',
      name: 'description',
      content: 'Test'
    }]
  },
  loading: {
    color: 'blue',
    failedColor: 'orange',
    height: '3px'
  },
  modules: ['~/modules/vue-loader', '~/modules/eslint-loader'],
  router: {
    linkActiveClass: 'linkActive',
    linkExactActiveClass: 'linkActiveExact'
  }
}
