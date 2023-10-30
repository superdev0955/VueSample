import request from '@/utils/request'

export function createOrder(data) {
  return request({
    url: '/order/createOrder',
    method: 'post',
    data
  })
}
export function checkPay(data) {
  return request({
    url: '/order/checkPay',
    method: 'post',
    data,
    hideLoading: true
  })
}
