<template>
  台北市、新北市天氣
  <br><br><br>

  <button type="button" class="btn btn-primary" @click="getWeather">取得天氣資訊</button>

  <br><br><br>
  {{ weather }}
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {

  computed: {
    ...mapState(['weather'])
  },

  methods: {
    //* 嘗試將資料放在 Store 寫，但實務上會看該方法是否應用在多個地方
    //* 若用在多個地方，則可拉至 Store 方便匯入複用
    ...mapActions(['getWeather'])
  }

}
</script>
