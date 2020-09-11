// components/increaseNum/sumNum.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:String,
    num:{
      type:Number,
      value:0
    }
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
    modifyNum () {
      console.log('调用了子组件方法')
      this.setData({
        num:this.data.num+2
      })
    }
  }
})
