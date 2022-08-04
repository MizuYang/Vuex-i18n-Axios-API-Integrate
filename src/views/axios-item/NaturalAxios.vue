<template>
  天災、氣象特報

  <br><br><br>

  <button type="button" class="btn btn-primary" @click="getNatural">取得天災資訊</button>

  <br><br><br>
  {{ natural }}
</template>

<script>
import { apiGetEarthquake, apiGetReport } from '@/vuex/store/api/api.js'
import { mapState } from 'vuex'
export default {
  components: {
  },

  computed: {
    ...mapState(['natural'])
  },

  methods: {
    async getNatural () {
      const obj = {}
      try {
        //* 取得地震資訊
        const getEarthquake = await apiGetEarthquake()
        obj.earthquake = getEarthquake.data.records.datasetDescription

        //* 取得氣象特報
        const getReport = await apiGetReport() // eslint-disable-line
        obj.report = '氣象特報'
      } catch (err) {
        console.log('程式錯誤', err)
      }

      //* 非同步資料回來後呼叫 Actions
      this.$store.dispatch('getNatural', obj)
    }
  }

}
</script>
