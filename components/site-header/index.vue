<template>
  <header>
    <div v-bind:class="$style.logo">
      <span v-bind:class="$style.logoInner">Logo</span>
    </div>

    <site-nav />
  </header>
</template>

<script>
export default {
  components: {
    'site-nav': () => import('./site-nav')
  }
}
</script>

<style lang="postcss" module>
.logo {
  background-color: green;

  &Inner {
    color: orange;
  }
}
</style>
