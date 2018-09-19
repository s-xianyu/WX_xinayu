// pages/content/content.js
const fileData = require('../../GetData/mData')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:'', // 传参ID
    content:{},// 数据列表
    more:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.content = fileData.getNavCon(options.id);
    let times = this.data.content.first_shared_at;
    let d = new Date(times)
    times =
        d.getFullYear() + '-' +
        (d.getMonth() + 1) + '-' +
        d.getDate() + ' ' +
        d.getHours() + ':' +
        d.getMinutes() + ':' +
        d.getSeconds();
    this.data.content.first_shared_at = times;
    this.setData({
      id:options.id,
      content:this.data.content
    });
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