import util from '../../public/util';
import common from '../../public/util';
Page({
  data:{
    userInfo:'',
  },
  onLoad:function () {
    var time = 1552878152000;
    console.log(util.stringTime(1552878152000/1000,'D'));
    console.log(util.beforeTime(time/1000));
  },
  ok:()=>{
    console.log('成功')
  }
})