// pages/contentHome/contentHome.js
const fileData = require('../../GetData/mData')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:'',
    contentHome:{},//主页内容
    list:{},//评论、热门内容
    upDown:false,
    Html: '',
    introShow:true,
    listLi:[
        {name:'最新收录',id:'0'},
        {name:'最新评论',id:'1'},
        {name:'热门',id:'2'}
      ],
    activeIndex:1,
    attention:true,
    page:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.contentHome = fileData.getNavCon(options.id,'主页')
    this.data.list = fileData.getNavCon(this.data.activeIndex,'评论').obj
    this.data.Html = fileData.getNavCon(options.id,'主页').content_without_html
    this.data.contentHome.notes_count = this.millionth(this.data.contentHome.notes_count)
    this.data.contentHome.subscribers_count = this.millionth(this.data.contentHome.subscribers_count)
    this.data.list.public_comments_count = this.millesimal(this.data.public_comments_count)
    this.data.list.likes_coun = this.millesimal(this.data.likes_coun)
    this.data.contentHome.content_without_html = this.withoutHtml(this.data.Html,this.data.upDown)
    this.setData({
      id:options.id,
      contentHome:this.data.contentHome,
      list:this.data.list,
      page:this.data.list.length
    });
    console.log(this.data.list)
  },
  millionth:function(num){//万分计算
    let numText;
    if(num>10000){
        numText = (num/10000).toFixed(2)+'万'
    }else{
        numText = num
    }
    return numText
  },
  millesimal:function(num){ //千分计算
    let numtext;
    if(num>1000){
      numtext = (num/1000).toFixed(1)+'k'
    }else{
      numtext=num;
    }
    return numtext
  },
  withoutHtml:function(html,isUp){
    console.log(isUp)
    if(isUp){
        return html
    }else{
        return html.substr(0,55)
    }
},
  intro:function(){
    this.data.contentHome.content_without_html = this.withoutHtml(this.data.Html,!this.data.upDown,this.introShow)
    this.data.introShow = !this.data.introShow
    this.setData({
        contentHome:this.data.contentHome,
        upDown:!this.data.upDown,
        introShow:this.data.introShow
    })
  },
  toggleCur:function(e){
    let id = e.currentTarget.dataset.id
    this.data.activeIndex = id
    this.data.list = fileData.getNavCon(id,'评论').obj
    this.setData({
      activeIndex:this.data.activeIndex,
      list:this.data.list
    })
    console.log(this.data.list)
  },
  attention:function(){
    this.data.attention = !this.data.attention
    this.setData({
      attention:this.data.attention
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