import axios from 'axios'

const authorization = 'Authorization=CWB-195F56AD-9C94-459C-8C06-55DA964337F9'
const weatherReaquest = axios.create({
  baseURL: '',
  headers: { 'Content-Type': 'application/json' }
})
export const getTaipei = data => weatherReaquest.get(`https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?${authorization}&locationName=臺北市`, data)
export const getNewTaipei = data => weatherReaquest.get(`https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?${authorization}&locationName=新北市`, data)
