<template>
  <nav class="container p-5">
    <router-link to="/">Vuex API 練習</router-link> |
    <router-link to="/about">共用 Store state</router-link> |
    <router-link to="/axios">Axios</router-link> |
    <router-link to="/i18n">I18n</router-link>
  </nav>
  <router-view />
</template>

<style lang="scss">
@import "@/assets/stylesheets/all.scss";
.active {
  background: rgba(154, 53, 53, 0.264);
}
</style>
