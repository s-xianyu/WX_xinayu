import util from '../../public/util';
Page({
  data:{

  },
  onLoad:function () {
    var time = 1552878152000;
    console.log(util.stringTime(1552878152000/1000,'D'));
    console.log(util.beforeTime(time/1000));
  }
})