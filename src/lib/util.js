import Cookies from 'js-cookie'

export const setTitle = (title) => {
  window.document.title = title || 'admin'
}

export const setToken = (token, tokenName = 'token') => {
  Cookies.set(tokenName, token)
}

export const getToken = (tokenName = 'token') => {
  return Cookies.get(tokenName)
}

export const setRtnavs = (token, tokenName = 'Rtnavs') => {
  Cookies.set(tokenName, token)
}

export const getRtnavs = (tokenName = 'Rtnavs') => {
  return Cookies.get(tokenName)
}

export const localSave = (name, value) => {
  localStorage.setItem(name, value)
}

export const localRead = (name) => {
  return localStorage.getItem(name)
}

export const unixEpoch = () => {
  return new Date().getTime()
}

export const scrollback = () => {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}

export const addurl = function (method, requesturl) {
  return requesturl + method
}
