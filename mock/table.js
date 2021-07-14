const Mock = require('mockjs')

const data = Mock.mock({
  'items|5': [{
    sn: '@increment',
    startTime: '@datetime',
    endTime: '@datetime',
    distance: '@integer(300, 5000)',
    errorCount: '@integer(300, 5000)'
  }]
})

const chartData = Mock.mock({
  'data': [
    { value: 320, name: '黑点异物' },
    { value: 240, name: '凹坑' },
    { value: 149, name: '鼓包' },
    { value: 100, name: '漏涂' },
    { value: 59, name: '蚊虫' }
  ]
})

module.exports = [
  {
    url: '/vue-admin-template/table/list',
    type: 'get',
    response: config => {
      const items = data.items
      return {
        code: 20000,
        data: {
          total: 15,
          items: items
        }
      }
    }
  },
  {
    url: '/vue-admin-template/table/chart',
    type: 'get',
    response: config => {
      const cd = chartData.data
      return {
        code: 20000,
        data: cd
      }
    }
  }
]
