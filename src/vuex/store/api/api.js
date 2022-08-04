//* 整合其他支 API
import { getTaipei, getNewTaipei } from '@/vuex/store/api/weather.js'
import { getEarthquake, getReport } from '@/vuex/store/api/natural.js'

//* 將這些 API 匯出，在要用該 API 的檔案中用解構方式匯入
//* 台北、新北天氣
export const apiGetTaipei = getTaipei
export const apiGetNewTaipei = getNewTaipei
//* 天災
export const apiGetEarthquake = getEarthquake
export const apiGetReport = getReport
