<template>
  <section>
    <h1 v-if="checkStatusCode(404)">{{ msg }}</h1>
    <h1 v-else>Ошибка в коде</h1>

    <nuxt-link to="/">Перейти на главную страницу</nuxt-link>
  </section>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: () => {}
    }
  },

  data: () => ({
    msg: 'Страница не найдена'
  }),

  methods: {
    checkStatusCode(num) {
      return this.error.statusCode === num
    }
  },

  head() {
    return {
      title: this.msg,
      /* prettier-ignore */
      meta: [{
        hid: 'error-description',
        name: 'description',
        content: this.msg
      }]
    }
  }
}
</script>
