module.exports = {
  stringTime:stringTime,
  beforeTime:beforeTime,
}
  //time为传入的时间戳 ，type为传入希望返回的值
  // 这里定义：已传入的值为截至日期
  // Y返回年
  // M返回年月
  // D返回年月日
  // h返回年月日时
  // m返回年月日时分
  // s返回年月日时分秒
function stringTime(time,type) {
  var len;
  if (time == null) return 0;
  if (typeof time != "string") time += "";
  len = time.replace(/[^x00-xff]/g,"01").length;
  var date = new Date();
  var Y = date.getFullYear();
  var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
  var D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate());
  var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours());
  var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes());
  var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
  return 'Y' == type ? Y :
          'M' == type ?  Y + '-' + M :
            'D' == type ? Y + '-' + M + '-' + D :
              'h' == type ? Y + '-' + M + '-' + D + ' ' + h :
                'm' == type ? Y + '-' + M + '-' + D + ' ' + h + ':' + m :
                  Y + '-' + M + '-' + D + ' ' + h + ':' + m + ':' + s;
}
// 时间处理，传入时间戳
function beforeTime(timestamp){
  var mistiming = Math.round(new Date() / 1000)-timestamp;
  var postfix = mistiming>0 ? '前' : '后';
  mistiming = Math.abs(mistiming)
  var arrr = ['年','个月','星期','天','小时','分钟','秒'];
  var arrn = [31536000,2592000,604800,86400,3600,60,1];

  for(var i=0; i<7; i++){
    var inm = Math.floor(mistiming/arrn[i])
    if(inm!=0){
      return inm+arrr[i] + postfix
    }
  }
}