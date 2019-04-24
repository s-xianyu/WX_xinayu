import util from '../../public/util'
let vm;
const WxParse = require('../wxParse/wxParse.js');
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    content:{},// 数据列表
    more:true,
    status:true,
    IPX: getApp().G.IPX ? true : false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    vm = this;

    wx.request({
      url:`${app.G.HOST}/asimov/p/${options.id}`,
      data:{},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
        'from':'miniprogram'
      }, // 设置请求的 header
      success:function (res) {
        vm.data.content = res.data;

        // 利用wxParse转换富文本
        let article = res.data.free_content;
        WxParse.wxParse('article', 'html', article, vm);

        // 时间转换
        vm.data.content.first_shared_at = util.stringTime(vm.data.content.first_shared_at);

        vm.setData({
          content:res.data,
        });

      }
    })
  },
  downFile:function(){
    console.log(1)
    wx.downloadFile({
      url:'http://upload-images.jianshu.io/upload_images/573708-3139c00b0d571cd9.jpg',
      success(res){
        if(res.statusCode === 200){
          wx.playVoice({
            filePath: res.tempFilePath
          })
        }
      }
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
    let id = this.data.id;
    return {
      title:'来咸鱼，给你好看',
      path:'../content/content?id='+id,
      imageUrl:''
    }
  }
})