'use strict'

import BigNumber from 'bignumber.js'
import QRCode from 'qrcode'

import { randomCode } from './utils'
// var Config = require('./config')

import openExtension from './extensionUtils.js'

var Pay = function (appKey, appSecret) {
  // TODO: currently not use
  this.appKey = appKey
  this.appSecret = appSecret
}

Pay.prototype = {
  submit: function (currency, to, value, payload, options) {
    options.serialNumber = randomCode(32)
    value = value || '0'
    var amount = new BigNumber(value).times('1000000000000000000')// 10^18
    var params = {
      serialNumber: options.serialNumber,
      goods: options.goods,
      pay: {
        currency: currency,
        to: to,
        value: amount.toString(10),
        payload: payload
      },
      callback: options.callback,
      listener: options.listener,
      nrc20: options.nrc20
    }

    openExtension(params)
    openApp(params, options)

    return options.serialNumber
  }
}

function openApp (params, options) {
  // if (typeof window !== "undefined") {
  // params.callback = Config.payUrl;
  var appParams = {
    category: 'jump',
    des: 'confirmTransfer',
    pageParams: params
  }
  var url = 'openapp.NASnano://virtual?params=' + JSON.stringify(appParams)
  window.location.href = url

  if (options.qrcode.showQRCode) {
    showQRCode(JSON.stringify(appParams), options)
  }
  // }
}

function showQRCode (params, options) {
  QRCode.showQRCode(params, options.qrcode.container)
}

export default Pay
