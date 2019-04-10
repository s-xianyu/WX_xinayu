// pages/home/home.js
const order = ['red', 'yellow', 'blue', 'green', 'red'];
let that;
import util from '../../public/util' // 全局JS
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fs:['我发布的','我的浏览记录','我获得的打赏'],
    isLogin: false, //登录状态
    userInfo:'', //用户信息
    hidden: true, //自定义弹框显示
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    that = this;
    wx.getStorage({
      key: 'info',
      success: res => {
       if(res.data){
         that.setData({
           userInfo:res.data,
           isLogin:true,
         })
       }
      }
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

  },
  //获取用户信息并保存
  getUserInfo:(e)=>{
    let info;
    info = e.detail.userInfo;
    console.log(info)
    that.setData({
      userInfo:info,
      isLogin:true
    })
    wx.setStorageSync('info',info)
  },
  // 退出登录
  outLogin:()=>{
    that.setData({
      hidden: false
    });
  },
  cancel:()=>{
    that.setData({
      hidden: true
    });
  },
  confirm: ()=>{
    that.setData({
      userInfo:{},
      isLogin:false,
      hidden:true,
    });
    wx.clearStorage('info');
  },
  goNext:()=>{
    wx.navigateTo({
      url:'../demo/demo'
    })
  }
})