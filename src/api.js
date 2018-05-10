// import NebPay from './lib/nebPay'
import { network } from './config'
import NebPay from './lib/nebPay'
import request from 'superagent'
const nebPay = new NebPay()

export async function upload (photo) {
  const to = network.testnet.address
  const resp = await nebPay.call(to, 0, 'save', JSON.stringify([photo]), { listener: undefined })
  return resp
}

export const asyncGetAddr = () => new Promise((resolve, reject) => {
  window.postMessage({
    'target': 'contentscript',
    'data': {
    },
    'method': 'getAccount'
  }, '*')
  window.addEventListener('message', function (e) {
    // e.detail contains the transferred data (can
    if (e.data.data.account) {
      resolve(
        e.data.data.account
      )
    }
  })
})

// const getCurrentWalletAddr = () => {
//   window.postMessage({
//     'target': 'contentscript',
//     'data': {
//     },
//     'method': 'getAccount'
//   }, '*')
//   window.addEventListener('message', function (e) {
//     // e.detail contains the transferred data (can
//     console.log('recived by page:' + e + ', e.data:' + JSON.stringify(e.data))
//     if (e.data.data.account) {
//       e.data.data.account
//     }
//   })
// }

export async function get (from) {
  const to = network.testnet.address
  const other = {
    'value': '0',
    'nonce': 0,
    'gasPrice': '1000000',
    'gasLimit': '2000000',
    'contract': { 'function': 'get', 'args': '[""]' }
  }
  const { body } = await request
    .post('https://testnet.nebulas.io/v1/user/call')
    .send(Object.assign({ from, to }, other))

  const { result } = body.result
  const { value } = JSON.parse(result)
  return value
}
