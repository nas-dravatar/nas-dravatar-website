'use strict'

export const isChrome = function () {
  if (typeof window !== 'undefined') {
    var userAgent = navigator.userAgent.toLowerCase()
    // eslint-disable-next-line
    if (userAgent.match(/chrome\/([\d\.]+)/)) {
      return true
    }
  }
  return false
}

export const randomCode = function (len) {
  var d, e
  var b = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  var c = ''
  for (d = 0; len > d; d += 1) {
    e = Math.random() * b.length
    e = Math.floor(e)
    c += b.charAt(e)
  }
  return c
}
