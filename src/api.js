// import NebPay from './lib/nebPay'
import { network } from './config'
import NebPay from './lib/nebPay'

const nebPay = new NebPay()

export async function upload (photo) {
  const to = network.testnet.address
  const resp = await nebPay.call(to, 0, 'save', JSON.stringify([photo]), { listener: undefined })
  return resp
}

export async function get () {
  const to = network.testnet.address
  const resp = await nebPay.call(to, 0, 'get', JSON.stringify([]), { listener: undefined })
  return resp
}
