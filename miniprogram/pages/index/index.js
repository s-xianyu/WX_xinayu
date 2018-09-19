//index.js
const app = getApp();
const fileData = require('../../GetData/mData')
Page({
  data: {
    hot:fileData.Hot(),
    list:fileData.List(),
    rotate:false,
    hoverimage:false,
    num:0
  },
  onLoad:function(){
  },
  randomNum:function(){
    let Mathnum = Math.floor(Math.random()*5);
    this.setData({
      num: Mathnum,
      rotate:true
    },function(){
      setTimeout(function(){
        this.data.rotate = false
        this.setData({
          rotate:this.data.rotate
        })
      },500)
    })
  },
  routersGo:function(e){
    wx.navigateTo({
      url:"../content/content?id=" + e.currentTarget.dataset.id
    })
  },
  contentHome:function(e){
    wx.navigateTo({
      url:'../contentHome/contentHome?id='+e.currentTarget.dataset.id
    })
  },
  loginGetUrl:function(){
    wx.switchTab({
      url:'../home/home'
    })
  }
})
































