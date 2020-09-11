// components/tabcompoent/tab.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabArr:{
      type:Array,
      value:['流行','时尚','潮流']
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
      curIndex:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleTapItem (event) {
      //点击时可以获取到event对象，从页面上data-index获取到下标值；再赋值给curIndex
      console.log(event)
      const dataset = event.currentTarget.dataset;
      this.setData({
        curIndex:dataset.index
      })
      // 子传父
      this.triggerEvent('querydataFormchild',dataset)
    }
  }
})
