import util from '../utils/util'
import config from '../constants/config'

const serverURL = config.SERVER_URL
const request = util.wxPromisify(wx.request)

function getLawTypes() {
  return request({url: serverURL + '/law/types'})
}

function getLawsByType(typeId) {
  return request({url: serverURL + '/law/list', data: {typeId: typeId}})
}

function getLawsBySearch(searchText) {
  return request({url: serverURL + '/law/list', data: {search: searchText}})
}

function getLawById(id) {
  return request({url: serverURL + '/law/details', data: {id: id}})
}

module.exports = {
  getLawTypes: getLawTypes,
  getLawsByType: getLawsByType,
  getLawsBySearch: getLawsBySearch,
  getLawById: getLawById
}
