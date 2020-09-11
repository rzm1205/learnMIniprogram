//app.js
App({
  // app生命周期
  onLaunch: function () {
    console.log('初始化小程序')
  },
  onShow: function () {
    console.log('显示')
  },
  onHide:function (){
    console.log('隐藏')
  },
  onError (msg) {
    console.log(msg)
  },
  getUserInfo:function(options){
   console.log(options)
  },
  globalData:{//全局的变量
    userInfo:{'name':'rzm','age':18}
  }
})