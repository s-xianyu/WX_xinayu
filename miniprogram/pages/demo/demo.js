import util from '../../public/util';
import common from '../../public/util';
let vm;
Page({
  data:{
    userInfo:'',
    content:[
      {id:'a1',text:'111',top:'175'},
      {id:'a2',text:'222',top:'350'},
      {id:'a3',text:'333',top:'525'},
      {id:'a4',text:'444',top:'700'},
      {id:'a5',text:'555',top:'875'},
      {id:'a6',text:'666',top:'1050'},
      {id:'a7',text:'777',top:'1225'},
      {id:'a8',text:'888',top:'1440'},
      {id:'a9',text:'999',top:'1575'},
      {id:'a10',text:'000',top:'1750'},
      {id:'a11',text:'111',top:'1925'},
      {id:'a12',text:'222',top:'2100'},
      {id:'a13',text:'333',top:'2275'},
      {id:'a14',text:'4444',top:'2450'},
      {id:'a15',text:'555',top:'2650'},
    ],
    geuHeight:'',
    cur:'a1',
  },
  onLoad:function () {
    vm = this;
    var time = 1552878152000;
    console.log(util.stringTime(1552878152000/1000,'D'));
    console.log(util.beforeTime(time/1000));
    let res = wx.getSystemInfoSync();
    this.setData({
      geuHeight:res.windowHeight+'px'
    })
  },
  toggle:function(e){
    let id = e.currentTarget.dataset.m;
    this.setData({
      cur:id,
    })
  },
  // 右侧滚动事件
  scroll:function(e){
    let arr = vm.data.content,
      top = e.detail.scrollTop;
    console.log(e.detail);
  },
})