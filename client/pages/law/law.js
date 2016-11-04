import lawService from '../../services/law.service'

Page({

  onLoad: function (params) {
    lawService.getLawById(params.id).then((res) => {
      this.setData({law: res.data})
    })
  }

})
