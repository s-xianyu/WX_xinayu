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
    this.data.content = fileData.getNavCon(options.id,'详情');
    this.data.content.first_shared_at = this.changeGetTime(this.data.content.first_shared_at);
    this.data.content.free_content = this.convertHtmlToText(this.data.content.free_content);
    this.setData({
      id:options.id,
      content:this.data.content
    });
  },
  changeGetTime:function(t){
    let d = new Date(t)
    let Y = d.getFullYear(),
        M = (d.getMonth()+1),
        D = d.getDate() < 10 ? '0'+d.getDate() : d.getDate(),
        h = d.getHours() < 10 ? '0'+d.getHours() : d.getHours(),
        m = d.getMinutes() < 10 ? '0'+d.getMinutes() : d.getMinutes();
    return Y+'-'+M+'-'+D+' '+h+':'+m
  },
  convertHtmlToText:function(inputText){
    console.log(inputText)
    var returnText = "" + inputText;
    returnText = returnText.replace(/<\/div>/ig, '\r\n');
    returnText = returnText.replace(/<\/li>/ig, '\r\n');
    returnText = returnText.replace(/<li>/ig, ' * ');
    returnText = returnText.replace(/<\/ul>/ig, '\r\n');
    //-- remove BR tags and replace them with line break
    returnText = returnText.replace(/<br\s*[\/]?>/gi, "\r\n");

    //-- remove P and A tags but preserve what's inside of them
    returnText=returnText.replace(/<p.*?>/gi, "\r\n");
    returnText=returnText.replace(/<a.*href="(.*?)".*>(.*?)<\/a>/gi, " $2 ($1)");

    //-- remove all inside SCRIPT and STYLE tags
    returnText=returnText.replace(/<script.*>[\w\W]{1,}(.*?)[\w\W]{1,}<\/script>/gi, "");
    returnText=returnText.replace(/<style.*>[\w\W]{1,}(.*?)[\w\W]{1,}<\/style>/gi, "");
    //-- remove all else
    returnText=returnText.replace(/<(?:.|\s)*?>/g, "");

    //-- get rid of more than 2 multiple line breaks:
    returnText=returnText.replace(/(?:(?:\r\n|\r|\n)\s*){2,}/gim, "\r\n\r\n");

    //-- get rid of more than 2 spaces:
    returnText = returnText.replace(/ +(?= )/g,'');

    //-- get rid of html-encoded characters:
    returnText=returnText.replace(/ /gi," ");
    returnText=returnText.replace(/&/gi,"&");
    returnText=returnText.replace(/"/gi,'"');
    returnText=returnText.replace(/</gi,'<');
    returnText=returnText.replace(/>/gi,'>');
    console.log(returnText)
    return returnText;
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

  }
})