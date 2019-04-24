import util from '../../public/util';
import common from '../../public/util';
const  host = getApp().G.HOST;
const list = host+'/asimov/trending/now';
let vm;
Page({
  data:{
    list:[],
  },
  onLoad:function () {
    vm = this;
    vm.getData();
  },
  getData:function(){
    wx.request({
      url:list,
      data:{
        currPage:1
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
        'from':'miniprogram'
      }, // 设置请求的 header
      success:function (res) {
        vm.setData({
          list:res.data
        })
      }
    })
  },
})