import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/vue-admin-template/table/list',
    method: 'get',
    params
  })
}

export function getChartData(sn) {
  return request({
    url: '/vue-admin-template/table/chart',
    method: 'get',
    sn
  })
}
