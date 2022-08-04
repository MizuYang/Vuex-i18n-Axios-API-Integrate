<template>
  <div class="container p-5">
    <h1>共用 Store 的 state(響應式)</h1>
    <p>{{ name }}</p>
    <p>打招呼，{{ sayHi }}</p>
    <p>數字 {{ number }}</p>
    <div>
      成員列表
      <ul>
        <li v-for="people in list" :key="people.id">{{ people.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapState(['name', 'list', 'number']),
    ...mapGetters(['sayHi'])
  }
}
</script>
