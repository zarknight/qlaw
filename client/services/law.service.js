import util from '../utils/util'

const request = util.wxPromisify(wx.request)
const host = 'http://localhost:1337'

function getLawTypes() {
  return request({url: host + '/law/types'})
}

function getLawsByType(typeId) {
  return request({url: host + '/law/list', data: {typeId: typeId}})
}

function getLawsBySearch(searchText) {
  return request({url: host + '/law/list', data: {search: searchText}})
}

function getLawById(id) {
  return request({url: host + '/law/details', data: {id: id}})
}

module.exports = {
  getLawTypes: getLawTypes,
  getLawsByType: getLawsByType,
  getLawsBySearch: getLawsBySearch,
  getLawById: getLawById
}
