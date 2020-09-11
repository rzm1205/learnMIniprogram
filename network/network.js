//封装的request请求
export default function request(options) {
  return new Promise((resolve,reject) => {
    wx.request({
      method: options.method,
      url: options.url,
      data: options.data,
      header:{ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
      success: (res) =>{
        // 调用接口成功
        resolve(res)
      },
      fail: (err) => {
        // 调用接口失败
        reject(err)
      }
    })
  })
}
