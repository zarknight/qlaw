App({
  
  globalData: {
    userInfo: null
  },

  onLaunch: function () {

  },

  getUserInfo: function (cb) {
    if (this.globalData.userInfo) {
      typeof cb === "function" && cb(this.globalData.userInfo)
    } else {
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.globalData.userInfo = res.userInfo
              typeof cb === "function" && cb(this.globalData.userInfo)
            }
          })
        }
      })
    }
  }

})