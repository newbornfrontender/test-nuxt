<template>
  <div v-bind:class="$style.container">
    <p>Привет {{ name }}!</p>
    <button v-bind:click="goToHome">На главную</button>
  </div>
</template>

<script>
export default {
  asyncData() {
    return new Promise(resolve => {
      setTimeout(function() {
        resolve({
          name: 'мир!'
        })
      }, 1000)
    })
  },

  mounted() {
    setTimeout(() => {
      this.$nuxt.$loading.finish()
    }, 5000)
  },

  methods: {
    goToHome() {
      this.$nuxt.$loading.start()

      setTimeout(() => {
        this.$router.push('/')
      }, 5000)
    }
  }
}
</script>

<style lang="postcss" module>
.container {
  font-size: 20px;
  text-align: center;
  padding-top: 100px;
}
</style>
