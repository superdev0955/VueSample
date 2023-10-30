import request from '@/utils/request'

export function getList(data) {
  return request({
    url: '/msg/getList',
    method: 'post',
    data
  })
}