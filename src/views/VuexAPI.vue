<template>
  <div class="container p-5">
    <h1>Vuex API 練習</h1>
    <p><code>mapState</code>：{{ name }}</p>
    <p><code>mapGetters</code>：打招呼，{{ sayHi }}</p>
    <div>

      <hr>
      <code>mapMutations</code>
      <br>

      成員列表
      <ul>
        <li v-for="people in list" :key="people.id">{{ people.name }}</li>
      </ul>
      <button type="button" class="btn btn-primary mx-1" @click="reverse">反轉</button>
    </div>

    <br><hr>

    <ul>
      <li><code>dispatch > Actions(commit) > Mutations</code> <br></li>
      <li><code>commit > Mutations</code></li>
    </ul>

    <p>數字 {{ number }}</p>

    <button type="button" class="btn btn-primary mx-1" @click="addCount">+</button>
    <button type="button" class="btn btn-primary mx-1" @click="cutCount">-</button>
    <button type="button" class="btn btn-primary mx-1" @click="numberClear">歸零</button>
    <br><br>
    <div class="d-flex align-items-center text center">
      <input type="number" placeholder="輸入數字參數" v-model.number="number2">
      <button button type="button" class="btn btn-primary btn-sm mx-1" @click="addNumber({ addNumber: number2 })">將 number 加上此數字</button>
    </div>

    <br><br>

    <input type="number" placeholder="輸入數字參數" v-model.number="number3">
    <button type="button" class="btn btn-primary btn-sm mx-1" @click="oneSecLaterSetNum(number3)">一秒後設定數字為左側參數</button>

  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  data () {
    return {
      number2: '',
      number3: ''
    }
  },
  computed: {
    ...mapState(['name', 'list', 'number']),
    ...mapGetters(['sayHi'])
  },
  methods: {
    ...mapActions(['oneSecLaterSetNum']),
    ...mapMutations(['numberClear', 'reverse', 'addNumber']),
    addCount () {
      this.$store.dispatch('addCount', 1)
    },
    cutCount () {
      this.$store.commit('cutCount', 1) //* 跳過 actions 流程
    }
  },
  mounted () {
    console.log(this.$store)
  }
}
</script>
