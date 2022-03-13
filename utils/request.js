const {
  miniProgram
} = wx.getAccountInfoSync();

const host = 'https://www.shuicaotujian.com'

const env = {
  // 开发版本
  'develop': '/prod-api',
  // 体验版本
  'trial': '/prod-api',
  // 正式版本
  'release': '/prod-api',
}

function request(url, data = {}, method = "GET") {
  return new Promise(function (resolve, reject) {
    wx.showLoading({
      title: '加载中',
    })
    wx.request({
      url: host + env[miniProgram.envVersion] + url,
      data: data,
      method: method,
      header: {
        'Content-Type': 'application/json',
      },
      success: function (res) {
        if (res.statusCode == 200) {
          resolve(res.data);
        } else {
          reject(res.errMsg);
        }
        wx.hideLoading()
      },
      fail: function (err) {
        reject(err)
        wx.hideLoading()
      }
    })
  });
}


module.exports = request