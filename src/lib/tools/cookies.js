export const getCookie = function (name) {
  var c = document.cookie
  if (!c) {
    return ''
  }
  var r = ''
  var a = c.split(';')
  a.forEach(function (o) {
    var p = o.replace(' ', '').split('=')
    if (p.length == 2 && p[0] == name) {
      r = p[1]
    }
  })
  return r.toLowerCase()
}
