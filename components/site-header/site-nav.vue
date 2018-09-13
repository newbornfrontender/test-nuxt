<template>
  <nav>
    <ul>
      <li
        v-for="item of list"
        v-bind:key="item.id"
      >
        <nuxt-link v-bind:to="item.path">{{ item.title }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data: () => ({
    /* prettier-ignore */
    list: [{
      title: 'Главная',
      path: '/'
    }, {
      title: 'Тест',
      path: '/test'
    }]
  })
}
</script>
