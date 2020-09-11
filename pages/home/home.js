// pages/home/home.js
import request from '../../network/network.js'
//获取app实例
var app = getApp();
Page({

  /**
   * 1.页面的初始数据
   */
  data: {
    name:app.globalData.userInfo.name
  },

  /**
   * 2.生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(app.globalData.userInfo.name);
    //获取接口数据，也写在onLoad生命周期中
    request({
      method:'post',
      url:'http://kf.ibenrobot.com/dfController/getDFAreaDetails',
      data:{
        robotUuid:'76e9193bab69421d96f77b102a38a939',
        sceneId:6787,
        robId:773,
        dfaId:69
      }
    }).then( res => {
        console.log(res)
    }).catch( err => {
      console.log(err)
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
   * 4.页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('刷新了')
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  //3.监听页面上的事件元素
  handclick () {
    console.log('获取授权被点击了')
  },
  //从子组件获取到的数据
  querydataFormchild(event){
    console.log(event.detail.index,event.detail.item)
  },
  //父级给子级传值,修改子级中的值
  sum () {
    //获取子组件的id,通过id调用子组件方法
    this.selectComponent("#sumNun").modifyNum();
  },
  //轻提示
  showToast(){
    wx.showToast({
      title: '成功',
      duration:2000,
      mask:true//点击不了别的元素了就
    })
  },
  showModal(){
    wx.showModal({
      title:'我是标题呀',
      content:'hello world',
      cancelText:'退出',
      success: res =>{
        console.log('成功了')
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      },
      fail: res =>{
        console.log('失败了')
      }
    })
  },
  showLoading(){
    wx.showLoading({
      title: 'loading',
    }),
    //模拟关闭
    setTimeout( () => {
      wx.hideLoading({
        success: (res) => {
          console.log('关闭了showLoading')
        },
      })
    },3000)
  },
  showActionSheet(){
    wx.showActionSheet({
      itemList: ['喜欢','不喜欢'],
      // itemColor:"red",
      success: (res) =>{
        console.log('成功选择',res.tapIndex)
      },
      fail (res) {
        console.log('点击了取消',res.errMsg)
      }
    })
  },
  //小程序分享操作。调用onShareAppMessage
  onShareAppMessage(){
    // let url = encodeURIComponent('/packageNews/pages/news_detail/news_detail?news_id=' + this.data.news_id);
    return {
      title: "首页显示",
      // path:`/pages/index/index?url=${url}` 
      path:'/pages/home/home'
    }
  },
  //页面跳转
  switchTabToProfile(){
    wx.navigateTo({
      url: '/pages/detail/detail?name='+'rzm'+'&age='+18,
    })
  }
})