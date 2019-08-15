//index.js
let vm;
const app = getApp();
const listHost = app.G.HOST+'/asimov/trending/now';
const collections = app.G.HOST+'/asimov/subscriptions/recommended_collections'
Page({
  data: {
    hot:[], //导航表
    list:[], //列表数据
    isScroll:true, //列表ID保存
    scroll:true, //滚动置顶
    loadMore:false, //加载显示
    loadMoreText: '加载中...',
    rotate:false,
    hoverimage:false,
    num:0,
    hideBottom:true,
  },

  onLoad:function(){
    vm = this;
    vm.setData({
      loadMore:true,
    });
    vm.getList(true);
    vm.getHotList();
  },

  // 加载更多
  onReachBottom:function(e){
    vm.getList()
  },
  getHotList(){
    // 请求导航
    wx.request({
      url:collections,
      data:{
        except_collection_ids:vm.data.num
      },
      method:'GET',
      header: {
        'from':'miniprogram'
      }, // 设置请求的 header
      success:(res)=>{
        console.log(res.data);
        vm.setData({
          hot:res.data
        })
      }
    })
  },
  // 请求数据
  getList:function(isTrue){
    if(vm.data.isScroll){

      vm.setData({
        isScroll:false,
        loadMore:true,
      })

      wx.request({
        url:listHost,
        data:{
          count:20,
        },
        method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        header: {
          'from':'miniprogram'
        }, // 设置请求的 header
        success:function (res) {
          let data;
          //滚动加载更多push数据到列表
          if(res.data.length > 0){
            data = isTrue ? res.data : vm.data.list.concat(res.data);
          }else{
            vm.setData({
              loadMoreData:`已全部加载`
            })
          }

          vm.setData({
            list:data,
            isScroll:true,
            loadMore:false,
          });

        }
      });
    }
  },
  randomNum:function(){
    let vm = this;
    let Mathnum = vm.data.num+=5;
    this.data.rotate = true
    this.setData({
      num: Mathnum,
      rotate:true
    },function(){
      setTimeout(function(){
        vm.data.rotate = false;
          vm.setData({
              rotate:vm.data.rotate
          })
      },300)
    })
    console.log(this.data.list)
    this.getHotList();
  },

  //跳转值详情页面
  routersGo:function(e){
    wx.navigateTo({
      url:"../content/content?id=" + e.currentTarget.dataset.slug
    })
  },
  contentHome:function(e){
    wx.navigateTo({
      url:'../contentHome/contentHome?id='+e.currentTarget.dataset.id
    })
  },
    searchWxml:function(){
    wx.navigateTo({
      url:'../search/search'
    })
  },
  // 滚动置顶导航
  scroll:function(e){
     let  top; top = e.detail.scrollTop > 120 ? false : true;
      this.setData({
        scroll:top
      })
  }
});





























