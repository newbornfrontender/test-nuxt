<template>
  <div>
    <div>{{ msg }}</div>
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
    list: [{
      text: '1'
    }, {
      text: '2'
    }]
  })
}
</script>
