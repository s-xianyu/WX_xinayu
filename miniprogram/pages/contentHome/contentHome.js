// pages/contentHome/contentHome.js
const fileData = require('../../GetData/mData')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:'',
    contentHome:{},
    upDown:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.contentHome = fileData.getNavCon(options.id,false)
    this.data.contentHome.notes_count = this.DigitalInteger(this.data.contentHome.notes_count)
    this.data.contentHome.subscribers_count = this.DigitalInteger(this.data.contentHome.subscribers_count)
    this.data.contentHome.content_without_html = this.withoutHtml(this.data.contentHome.content_without_html,this.data.upDown)
    this.setData({
      id:options.id,
      contentHome:this.data.contentHome
    });
    console.log(this.data.contentHome)
  },
  DigitalInteger:function(num){
    console.log(num)
    let numText;
    if(num>10000){
      numText = (num/10000).toFixed(2)+'万'
    }else{
      numText = num
    }
    return numText
  },
  withoutHtml:function(html,isUp){
    console.log(isUp)
    if(!isUp){
      return html.substr(0,55)
    }else{
      return html
    }
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