import { createApp } from 'vue'
import 'bootstrap'
import axios from 'axios'
import VueAxios from 'vue-axios'

import store from './vuex'

import i18n from '../i18n/lang'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(i18n)
app.use(store)
app.use(VueAxios, axios)
app.mount('#app')
