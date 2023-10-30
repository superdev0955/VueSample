import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/login/login',
    method: 'post',
    data
  })
}
export function getSystemInfo(data) {
  return request({
    url: '/login/system',
    method: 'post',
    data
  })
}

export function getUserBalance() {
  return request({
    url: '/user/getBalance',
    method: 'get',
    hideLoading: true
  })
}

export function getInfo() {
  return request({
    url: '/user/info',
    method: 'get'
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'get'
  })
}

export function setUserInfo(data) {
  return request({
    url: '/user/setUserInfo',
    method: 'post',
    data
  })
}

export function getAccounts(data) {
  return request({
    url: '/user/getAccounts',
    method: 'post',
    data
  })
}

export function bindPhone(data) {
  return request({
    url: '/user/bindPhone',
    method: 'post',
    data
  })
}
