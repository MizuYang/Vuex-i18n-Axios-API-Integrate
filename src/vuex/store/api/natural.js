import axios from 'axios'

const authorization = 'Authorization=CWB-195F56AD-9C94-459C-8C06-55DA964337F9'
const naturalReaquest = axios.create({
  baseURL: 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/',
  headers: { 'Content-Type': 'application/json' }
})

export const getReport = data => naturalReaquest.get(`W-C0033-002?${authorization}`, data)
export const getEarthquake = data => naturalReaquest.get(`E-A0016-001?${authorization}`, data)
