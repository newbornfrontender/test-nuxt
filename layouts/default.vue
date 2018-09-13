<template>
  <section>
    <site-header />

    <site-main />

    <site-footer />
  </section>
</template>

<script>
export default {
  components: {
    'site-header': () => import('~/components/site-header'),
    'site-main': () => import('~/components/site-main'),
    'site-footer': () => import('~/components/site-footer')
  }
}
</script>
