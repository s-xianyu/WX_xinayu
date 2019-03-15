//app.js
let that;
const [
  host,
] = [
  'https://www.xianyu.com'
]
App({
  G:{
    INFO: {}, //保存用户登录信息
    IPX:false, //全局添加iPhoneX判断
    WIN:'', //保存系统信息
  },
  onLaunch: function() {
    that = this;
    console.log(that.G)

    wx.getSystemInfo({
      success: res => {
        that.G.WIN = res;
        let model = res.model.substring(0,res.model.indexOf('X'))+'X' //获取手机信息是否为iPhone X
        if(model == 'iPhone X'){
          that.G.IPX = true;
        }
      }
    })
  },
  onShow:function () {
    let info = wx.getStorageSync('INFO');
    if(info != ''){
      debugger
    }
  }
})
