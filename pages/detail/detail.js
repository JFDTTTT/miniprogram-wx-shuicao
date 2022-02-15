const request = require('../../utils/request')

// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    request('/c/plant/' + options.id).then(res => {
      this.setData({
        detail: res.data
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage () {
    request('/c/plant/shard',{id: this.data.detail.id}, "POST")
  },
  onShareTimeline(){},
  clickBack(){
    wx.navigateBack()
  },
  toImageList(event){
    wx.navigateTo({
      url: '/pages/detailPicList/detailPicList?id='+ this.data.detail.id,
    })
  },
  preview(event) {
    let currentUrl = event.currentTarget.dataset.src
    wx.previewImage({
      current: currentUrl, // 当前显示图片的http链接
      urls: this.data.detail.pictures.slice(0,3) // 需要预览的图片http链接列表
    })
  }
})