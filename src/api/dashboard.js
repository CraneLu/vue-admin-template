import request from '@/utils/request'

export function getList(sn) {
  return request({
    url: '/realdata/frontend/getInfoBySN',
    method: 'get',
    params: { sn }
  })
}
