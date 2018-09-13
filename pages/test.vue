<template>
  <section>
    <h1>{{ msg }}</h1>
  </section>
</template>

<script>
export default {
  data: () => ({
    msg: 'Тестовая страница'
  }),

  head() {
    return {
      title: this.msg,
      /* prettier-ignore */
      meta: [{
        hid: 'test-description',
        name: 'description',
        content: this.msg
      }]
    }
  }
}
</script>
