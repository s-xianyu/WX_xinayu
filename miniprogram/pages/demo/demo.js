import util from '../../public/util';
import common from '../../public/util';
let vm;
Page({
  data:{
    userInfo:'',
  },
  onLoad:function () {
    vm = this;
    var time = 1552878152000;
    console.log(util.stringTime(1552878152000/1000,'D'));
    console.log(util.beforeTime(time/1000));
  },
  ok:()=>{
    console.log('成功')
  },
  onGetUserInfo:(e)=>{
    console.log(e.detail.userInfo)
    vm.setData({
      userInfo:e.detail.userInfo
    })
  }
})