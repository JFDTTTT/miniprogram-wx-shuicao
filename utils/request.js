
function request(url, data = {}, method = "GET") {
  return new Promise(function(resolve, reject) {
    wx.showLoading({
      title: '加载中',
    })
    wx.request({
      url: "https://www.shuicaotujian.com" + url,
      data: data,
      method: method,
      header: {
        'Content-Type': 'application/json',
      },
      success: function(res) {
        if (res.statusCode == 200) {
          resolve(res.data);
        } else {
          reject(res.errMsg);
        }
        wx.hideLoading()
      },
      fail: function(err) {
        reject(err)
        wx.hideLoading()
      }
    })
  });
}


module.exports = request