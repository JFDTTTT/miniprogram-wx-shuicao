// pages/search/head/head.js
const request = require('../../../utils/request')

Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    value: '',
    relatedList: [],
    historyList: [],
    historyKey: 'HISTORY_KEY',
    showSearchBody: true
  },
  attached() {
    wx.getStorage({
      key: this.data.historyKey,
      success: (res) => {
        this.setData({
          historyList: res.data,
        })
      },
    });
  },
  /**
   * 组件的方法列表
   */
  methods: {
    getInputValue(e) {
      const value = e.detail.value
      this.setData({
        value
      })
      request('/c/plant/search', {
        searchKey: value
      }, 'GET').then((res) => {
        this.setData({
          relatedList: res.data || []
        })
      })
    },
    searchHandler({
      target
    }) {
      const value = target.dataset.key || this.data.value
      if (!value) return
      if (this.data.historyList.length >= 12) {
        this.data.historyList.pop()
      }
      const index = this.data.historyList.indexOf(value)
      if (index >= 0) {
        this.data.historyList.splice(index, 1)
      }
      this.data.historyList.unshift(value)
      this.setData({
        historyList: this.data.historyList,
        showSearchBody: false,
        value
      })
      wx.setStorage({
        data: this.data.historyList,
        key: this.data.historyKey,
      })
      this.triggerEvent('searchEvent', value)
    },
    onBindfocus(){
      this.setData({
        showSearchBody: true
      })
    },
    onBindblur(){
      this.setData({
        showSearchBody: false
      })
    }
  }
})