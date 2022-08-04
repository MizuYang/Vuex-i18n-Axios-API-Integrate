const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Vuex-i18n-Axios-API-Integrate/' //* 儲存庫名稱
    : '/'
})
