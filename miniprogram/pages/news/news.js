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
        {name:'科技',id:'3'},
        {name:'本地',id:'4'},
        {name:'时尚',id:'5'},
        {name:'互联网',id:'6'},
        {name:'社会',id:'7'},
        {name:'搞笑',id:'8'},
        {name:'生活',id:'9'},
        {name:'国际',id:'10'},
        {name:'国内',id:'11'},
        {name:'汽车',id:'12'},
        {name:'财经',id:'13'},
        {name:'房产',id:'14'},
        {name:'图片',id:'15'}
      ],
      activeIndex:0,
      newsList:{},
      menuToggle:false

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
      console.log(e.currentTarget.dataset.id)
    this.data.activeIndex = e.currentTarget.dataset.id
    this.data.newsList = baiduData.getBaiD(this.data.activeIndex,'news').obj;
    this.setData({
      activeIndex:this.data.activeIndex,
      newsList:this.data.newsList
    })
  },
    newListMenu:function(e){
    console.log(e.currentTarget.dataset.id)
        this.data.activeIndex = e.currentTarget.dataset.id
        this.data.menuToggle = !this.data.menuToggle
        this.data.newsList = baiduData.getBaiD(this.data.activeIndex,'news').obj;
        this.setData({
            menuToggle:this.data.menuToggle,
            activeIndex:this.data.activeIndex,
            newsList:this.data.newsList
        })

    },
    menuShow:function(){
      this.data.menuToggle = !this.data.menuToggle
        this.setData({
            menuToggle:this.data.menuToggle
        })
    },
    hideAll:function(){
    console.log(1)
      this.data.menuToggle =false
        this.setData({
            menuToggle:this.data.menuToggle
        })
    },
  onReachBottom:function(e){
    debugger
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