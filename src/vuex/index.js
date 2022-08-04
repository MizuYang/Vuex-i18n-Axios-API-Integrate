import Vuex from 'vuex'
import { apiGetTaipei, apiGetNewTaipei } from '@/vuex/store/api/api.js'

const store = new Vuex.Store({
  state: {
    lang: 'zh-TW',
    weather: {},
    natural: {},
    name: '阿三',
    number: 0,
    list: [
      { id: 1, name: '小李 1' },
      { id: 2, name: '老王 2' },
      { id: 3, name: '大張 3' }
    ]
  },
  actions: {
    addCount (store, params) {
      store.commit('addCount', params)
    },
    //* 一秒後變更值 (解構方式)
    // oneSecLaterSetNum ({ commit }, params) {
    //   return new Promise(resolve => {
    //     setTimeout(() => {
    //       commit('oneSecLaterSetNum', { number: params })
    //       resolve()
    //     }, 1000)
    //   })
    // }
    //* 一秒後變更值
    oneSecLaterSetNum (store, params) {
      return new Promise(resolve => {
        //* 模擬非同步，一秒後將數字變為 888
        setTimeout(() => {
          store.commit('oneSecLaterSetNum', { number: params })
          resolve()
        }, 1000)
      })
    },
    //* 取得天氣
    async getWeather ({ commit }) {
      const obj = {}
      try {
      //* 取得台北天氣
        const getTaipei = await apiGetTaipei()
        obj.taipei = getTaipei.data.records.locations[0].location[0].locationName

        //* 取得新北天氣
        const getNewTaipei = await apiGetNewTaipei()
        obj.newTaipei = getNewTaipei.data.records.locations[0].location[0].locationName
      } catch (err) {
        console.log(err)
      }

      //* 非同步資料回來後，呼叫 Actions
      commit('getWeather', { weather: obj })
    },
    //* 取得天災
    getNatural ({ commit }, params) {
      commit('getNatural', { natural: params })
    }
  },
  mutations: {
    addCount (state, params) {
      state.number += params
    },
    cutCount (state, params) {
      state.number -= params
    },
    numberClear (state) {
      state.number = 0
    },
    reverse (state) {
      state.list.reverse()
    },
    addNumber (state, number) {
      state.number += number.addNumber
    },
    oneSecLaterSetNum (state, params) {
      state.number = params.number
    },
    getWeather (state, params) {
      state.weather = params.weather
    },
    getNatural (state, params) {
      state.natural = params.natural
    }
  },
  getters: {
    sayHi: state => {
      return `Hello ${state.name}`
    }
  }
})

export default store
