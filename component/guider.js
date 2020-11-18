// component/guider.js
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

  },

  attached() {

  },

  queryMultipleNodes() {
    const query = wx.createSelectorQuery();
    query.selectAll(`#${this.id} >>> .usermotto`).boundingClientRect(function(res){
      res.top;
      console.log('res:', res);
    }).exec()
  },

  /**
   * 组件的方法列表
   */
  methods: {
    queryMultipleNodes(context) {
      const query = wx.createSelectorQuery().in(context);
      query.select('.usermotto').boundingClientRect(function(res){
        console.log('res:', res);
      }).exec()
    },
  }
})
