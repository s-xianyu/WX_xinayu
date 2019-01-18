module.exports = {
  getUserInfo:getUserInfo,
}; //抛出以供外部调用

const host = getApp().G.host; //获取全局定义host
function getUserInfo(){
  debugger
  wx.getUserInfo({
    success:res=>{
      that.setData({
        userInfo:res.userInfo,
        isLogin:true
      })
      console.log(res.userInfo)
    }
  })
}