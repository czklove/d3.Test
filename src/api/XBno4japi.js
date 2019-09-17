import httpaxios from '@/lib/axios.js'
import { addurl } from '@/lib/util.js'

const requesturl = '/Search/'
export const no4jdata = function (params) {
  console.log(11111111)
  return httpaxios.request({
    url: addurl('GetXBNeoResource', requesturl),
    method: 'get',
    params: {
      keyword: params.keyword,
      level: params.level,
      guid: params.guid
    }
  })
}
