import request from '@/utils/request'

export function getQrcode(data) {
  return request({
    url: '/login/getQrcode',
    method: 'post',
    data
  })
}

export function loginCheck(data) {
  return request({
    url: '/login/check',
    method: 'post',
    data,
    hideLoading: true
  })
}

export function getCaptcha(data) {
  return request({
    url: '/login/getCaptcha',
    method: 'post',
    data,
    hideLoading: true
  })
}

export function sendSms(data) {
  return request({
    url: '/login/sendSms',
    method: 'post',
    data
  })
}

export function login(data) {
  return request({
    url: '/login/login',
    method: 'post',
    data
  })
}

export function reg(data) {
  return request({
    url: '/login/reg',
    method: 'post',
    data
  })
}

export function reset(data) {
  return request({
    url: '/login/reset',
    method: 'post',
    data
  })
}
