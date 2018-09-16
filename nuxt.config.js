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
  loading: '~/components/loading.vue',
  modules: ['~/modules/loaders/vue-loader'],
  router: {
    linkActiveClass: 'linkActive',
    linkExactActiveClass: 'linkActiveExact'
  }
}
