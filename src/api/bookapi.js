import httpaxios from '@/lib/axios.js'
import { addurl } from '@/lib/util.js'

const requesturl = '/Book/'
export const bookdetail = function (id) {
  return httpaxios.request({
    url: addurl('Detail', requesturl),
    method: 'get',
    params: {
      id: id
    }
  })
}
