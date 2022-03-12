const {
  miniProgram
} = wx.getAccountInfoSync();

const hosts = {
  // 开发版本
  'develop': 'https://www.shuicaotujian.com',
  // 体验版本
  'trial': 'https://www.shuicaotujian.com',
  // 整事版本
  'release': 'https://www.shuicaotujian.com',
}

function request(url, data = {}, method = "GET") {
  return new Promise(function (resolve, reject) {
    wx.showLoading({
      title: '加载中',
    })
    wx.request({
      url: hosts[miniProgram.envVersion] + url,
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