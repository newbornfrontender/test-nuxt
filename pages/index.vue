<template>
  <div>
    <h1 v-bind:class="[$style.title, $style.titleBig]">{{ msg }}</h1>
    <ul>
      <li
        v-for="item of list"
        v-bind:key="item.id"
      >{{ item.text }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => ({
    msg: 'Message',
    /* prettier-ignore */
    list: [{
      text: '1'
    }, {
      text: '2'
    }]
  })
}
</script>

<style module>
.title {
  color: red;
}

.titleBig {
  font-size: 30px;
}
</style>
