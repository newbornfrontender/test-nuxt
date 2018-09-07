module.exports = {
  mode: 'universal',
  analyze: true,
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
    color: '#000'
  },
  modules: ['~/modules/vue-loader', '~/modules/eslint-loader']
}
