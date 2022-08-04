<template>
  <div class="container p-5">
    <h2>Axios - 整合所有 API 集中管理</h2>
    <router-link to="/axios/weather">天氣</router-link> |
    <router-link to="/axios/natural">天災</router-link>
    <br>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  components: {
  },

  data () {
    return {
    }
  },

  watch: {
    $route: {
      handler (o, n) {
        //* 預設顯示天氣
        if (o.path === '/axios') this.$router.push('/axios/weather')
      },
      immediate: true
    }
  },

  methods: {
  },

  mounted () {
  }

}
</script>

<style lang='scss' scope></style>
