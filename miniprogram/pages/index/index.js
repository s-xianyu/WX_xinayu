//index.js
const app = getApp();
const fileData = require('../../GetData/mData')
Page({
  data: {
    hot:fileData.Hot(),
    list:fileData.List(),
    rotate:false,
    hoverImg:false,
    num:0
  },
  onLoad:function(){
    console.log(fileData.List())
  },
  randomNum:function(){
    let Mathnum = Math.floor(Math.random()*5);
    console.log(Mathnum)
    this.setData({
      num: Mathnum,
      rotate:true
    },function(){
      setTimeout(function(){
        this.setData({
          rotate:false
        })
      },500)
    })
  }
})
