import Promise from '../libs/bluebird.min'

function formatTime(date) {
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()

  let hour = date.getHours()
  let minute = date.getMinutes()
  let second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function wxPromisify(fn) {
  return function (obj = {}) {
    return new Promise((resolve, reject) => {
      obj.success = function (res) {
        resolve(res)
      }

      obj.fail = function (res) {
        reject(res)
      }

      fn(obj)
    })
  }
}

module.exports = {
  formatTime: formatTime,
  wxPromisify: wxPromisify
}
