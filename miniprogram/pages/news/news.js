// pages/news/news.js
const baiduData = require('../../GetData/baiduData')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list:[
        {name:'推荐',id:'0'},
        {name:'军事',id:'1'},
        {name:'娱乐',id:'2'},
        {name:'互联网',id:'3'},
        {name:'社会',id:'4'},
        {name:'搞笑',id:'5'},
        {name:'生活',id:'6'},
        {name:'国际',id:'7'},
        {name:'国内',id:'8'}
      ],
      activeIndex:0,
      newsList:{}

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.newsList = baiduData.getBaiD(this.data.activeIndex,'news').obj;
    this.setData({
      newsList:this.data.newsList
    })
    console.log(this.data.newsList)
  },
  // 新闻加载
  newsList:function(e){
    this.data.activeIndex = e.currentTarget.dataset.id
    this.data.newsList = baiduData.getBaiD(this.data.activeIndex,'news').obj;
    this.setData({
      activeIndex:this.data.activeIndex,
      newsList:this.data.newsList
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
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

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

  }
})