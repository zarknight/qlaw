import lawService from '../../services/law.service'

Page({

  onLoad: function (params) {
    let searchText = params.search
    let type = params.type

    if (searchText) {
      this.setData({search: searchText})
      this.search(searchText)
    } else {
      lawService.getLawsByType(type).then((res) => {
        this.setData({list: res.data.laws})
      })
    }
  },

  searchboxChange: function (event) {
    let searchText = event.detail.value
    this.search(searchText)
  },

  search: function (searchText) {
    lawService.getLawsBySearch(searchText).then((res) => {
      this.setData({list: res.data.laws})
    })
  }

})
