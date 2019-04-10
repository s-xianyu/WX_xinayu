//app.js
let vm;
App({
  G: {
    host: 'https://www.xianyu.com',
    INFO: {}, //保存用户登录信息
    code: '',
    IPX: false, //全局添加iPhoneX判断
    WIN: '', //保存系统信息
  },
  onLaunch: function () {
    vm = this;

    wx.getSystemInfo({
      success: res => {
        vm.G.WIN = res;
        //获取手机信息是否为iPhone X
        let model = res.model.substring(0, res.model.indexOf('X')) + 'X'
        if (model == 'iPhone X') {
          vm.G.IPX = true;
        }
      }
    });
  },
  onShow: function () {
    //获取code
    wx.login({
      success: res => {
        vm.G.INFO = res.code;
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    });
    //获取storage ，如果存在，获取登录信息
    debugger
    let userInfo = wx.getStorageSync('INFO');
    if (userInfo != '') {
      wx.request({
        url: vm.G.host + 'mobile/userInfo.json',
        data: {
          mobile: userInfo.mobile,
          token: userInfo.token,
        },
        method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        header: {
          'from': 'miniprogram'
        }, // 设置请求的 header
        success: res => {
          if (res.data.message == '请先登录') {
            wx.removeStorageSync('INFO');
            vm.G.INFO = {};
            vm.onLaunch();
          } else if (res.data.message == 'success') {
            let loginInfo = {
              mobile: res.mobile,
              token: res.token,
              phone: res.phone,
            };
            //保存登录信息
            wx.setStorageSync('INFO', loginInfo);
          }
        },
        fail: function () {
          // fail
        },
        complete: function () {
          // complete
        }
      })
    } else {
      console.log('未登录状态')
    }
  }
})