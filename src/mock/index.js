import Mock from 'mockjs'

const baseUrl = 'http://localhost:8082/'
//
const Random = Mock.Random
let data = {
  models: [],
  Count: 0,
  countpage: 0,
  success: true
}
for (let i = 0; i < 10; i++) {
  let template = {
    'id': Random.guid(),
    'SYS_FLD_DOI': Random.guid(),
    'NAME': Mock.mock('@name'),
    'REALNAME': Mock.mock('@name'),
    'TIME': Mock.mock('@date'),
    'ROLE|1-2': true,
    'ISORG|1-2': true,
    'USERTYPE|1-2': true,
    'ISLOCK|1-2': true,
    'check|1-2': true
  }
  data.models.push(template)
}
data.Count = 36
data.countpage = 4
// Mock.mock(/\/UserList/,'get',data)

export default Mock
