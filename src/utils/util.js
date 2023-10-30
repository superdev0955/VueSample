import { getSiteCode } from '@/utils/auth'

export function toDoc(type) {
  let url = ''
  let sitecode = getSiteCode()
  if (sitecode) {
    url = '/web?' + sitecode + '#/doc?type=' + type
  } else {
    url = '/web/#/doc?type=' + type
  }
  window.open(url, '_blank')
}
