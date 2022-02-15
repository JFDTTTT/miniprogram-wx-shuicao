// pages/index/list/list-item/list-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    detail: Object
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onClick(event){
      const id = event.currentTarget.dataset.id
      wx.navigateTo({
        url: '/pages/detail/detail?id=' + id
      })
    },
  }
})
