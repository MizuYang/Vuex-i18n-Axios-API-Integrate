<template>
<div class="container p-5">
  <h1>多國語系</h1>

  <button type="button" class="btn btn-primary btn-sm mx-1" :class="{btnActive: lang==='zh-TW'}" @click="changeLang('zh-TW')">中文</button>
  <button type="button" class="btn btn-primary btn-sm mx-1" :class="{btnActive: lang==='en-US'}" @click="changeLang('en-US')">EN</button>
  <button type="button" class="btn btn-primary btn-sm mx-1" :class="{btnActive: lang==='ja-JP'}" @click="changeLang('ja-JP')">日本語</button>

  <br><br>

  <router-link to="/i18n/item1">頁面一</router-link> |
  <router-link to="/i18n/item2">頁面二</router-link>

  <router-view></router-view>
</div>

</template>
<script>
export default {

  watch: {
    $route: {
      handler (o, n) {
        if (o.path === '/i18n') this.$router.push('/i18n/item1')
      },
      immediate: true
    }
  },

  data () {
    return {
      lang: this.$i18n.locale
    }
  },

  methods: {
    changeLang (lang) {
      this.$i18n.locale = lang
      this.lang = lang
      //* 將語言儲存到 localStorage
      localStorage.setItem('lang', lang)
    }
  },

  mounted () {
    // console.log(navigator.language) //* 取得瀏覽器使用語言
  }

}
</script>

<style lang='scss' scope>
.btnActive {
  background: red;
  &:focus {
    background: red;
  }
}
</style>
