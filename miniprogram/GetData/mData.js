module.exports = {
  Hot:Hot,
  List:List,
  navCon:navCon,
  getNavCon:getNavCon
}
function Hot(){
  let arr = [
    [{
      "id": 14,
      "image_url": "http://upload.jianshu.io/collections/images/14/6249340_194140034135_2.jpg",
      "title": "@IT·互联网",
      "slug": "V2CqjW"
    }, {
      "id": 95,
      "image_url": "http://upload.jianshu.io/collections/images/95/1.jpg",
      "title": "故事",
      "slug": "fcd7a62be697"
    }, {
      "id": 283250,
      "image_url": "http://upload.jianshu.io/collections/images/283250/漫画专题.jpg",
      "title": "手绘",
      "slug": "8c92f845cd4d"
    }, {
      "id": 4,
      "image_url": "http://upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg",
      "title": "读书",
      "slug": "yD9GAd"
    }, {
      "id": 21,
      "image_url": "http://upload.jianshu.io/collections/images/21/20120316041115481.jpg",
      "title": "简书电影",
      "slug": "1hjajt"
    }, {
      "id": 76,
      "image_url": "http://upload.jianshu.io/collections/images/76/12.jpg",
      "title": "自然科普",
      "slug": "cc7808b775b4"
    }, {
      "id": 83,
      "image_url": "http://upload.jianshu.io/collections/images/83/1.jpg",
      "title": "摄影",
      "slug": "7b2be866f564"
    }],
    [
      {
        "id": 13,
        "image_url": "http://upload.jianshu.io/collections/images/13/%E5%95%8A.png",
        "title": "旅行·在路上",
        "slug": "5AUzod"
      },
      {
        "id": 105,
        "image_url": "http://upload.jianshu.io/collections/images/105/2.jpg",
        "title": "国学与传统文化",
        "slug": "742422443ad3"
      },
      {
        "id": 38,
        "image_url": "http://upload.jianshu.io/collections/images/38/android.graphics.Bitmap_f3edcb1.jpeg",
        "title": "诗",
        "slug": "vHz3Uc"
      },
      {
        "id": 256739,
        "image_url": "http://upload.jianshu.io/collections/images/256739/461792731394569594.jpg",
        "title": "婚姻育儿",
        "slug": "70b8514fb442"
      },
      {
        "id": 16,
        "image_url": "http://upload.jianshu.io/collections/images/16/computer_guy.jpg",
        "title": "程序员",
        "slug": "NEt52a"
      },
      {
        "id": 509834,
        "image_url": "http://upload.jianshu.io/collections/images/509834/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20170810142951.jpg",
        "title": "简书交友",
        "slug": "bd38bd199ec6"
      },
      {
        "id": 1628248,
        "image_url": "http://upload.jianshu.io/collections/images/1628248/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20180529152808.jpg",
        "title": "简书脱单",
        "slug": "accb04610749"
      }
    ],
    [
      {
        "id": 11,
        "image_url": "http://upload.jianshu.io/collections/images/11/20100120161805563.jpg",
        "title": "短篇小说",
        "slug": "dqfRwQ"
      },
      {
        "id": 30,
        "image_url": "http://upload.jianshu.io/collections/images/30/image_2226.jpg",
        "title": "美食",
        "slug": "qqfxgN"
      },
      {
        "id": 61,
        "image_url": "http://upload.jianshu.io/collections/images/61/0__15815600_401_00.jpg",
        "title": "连载小说",
        "slug": "xYuZYD"
      },
      {
        "id": 540903,
        "image_url": "http://upload.jianshu.io/collections/images/540903/1f2936a662509e7d64528466be5546f4_r.jpg",
        "title": "漫画",
        "slug": "263e0ef8c3c3"
      },
      {
        "id": 514184,
        "image_url": "http://upload.jianshu.io/collections/images/514184/Wechatimage959.jpeg",
        "title": " 原创儿童文学",
        "slug": "6fba5273f339"
      },
      {
        "id": 264569,
        "image_url": "http://upload.jianshu.io/collections/images/264569/2.pic.jpg",
        "title": "@产品",
        "slug": "ad41ba5abc09"
      },
      {
        "id": 25920,
        "image_url": "http://upload.jianshu.io/collections/images/25920/enhanced-buzz-wide-16461-1372163238-8.jpg",
        "title": "生活家",
        "slug": "f6b4ca4bb891"
      }
    ],
    [
      {
        "id": 277031,
        "image_url": "http://upload.jianshu.io/collections/images/277031/645317897236768460.png",
        "title": "娱乐圈",
        "slug": "e50258a6a44b"
      },
      {
        "id": 28,
        "image_url": "http://upload.jianshu.io/collections/images/28/%E4%B8%8A%E7%8F%AD%E8%BF%99%E7%82%B9%E4%BA%8B%E5%84%BF.jpeg",
        "title": "上班这点事儿",
        "slug": "Jgq3Wc"
      },
      {
        "id": 26,
        "image_url": "http://upload.jianshu.io/collections/images/26/android.graphics.Bitmap_34d0eb2.jpeg",
        "title": "创业",
        "slug": "LLCyGH"
      }
    ],
    [
      {
        "id": 21,
        "image_url": "http://upload.jianshu.io/collections/images/21/20120316041115481.jpg",
        "title": "简书电影",
        "slug": "1hjajt"
      },
      {
        "id": 28,
        "image_url": "http://upload.jianshu.io/collections/images/28/%E4%B8%8A%E7%8F%AD%E8%BF%99%E7%82%B9%E4%BA%8B%E5%84%BF.jpeg",
        "title": "上班这点事儿",
        "slug": "Jgq3Wc"
      },
      {
        "id": 61,
        "image_url": "http://upload.jianshu.io/collections/images/61/0__15815600_401_00.jpg",
        "title": "连载小说",
        "slug": "xYuZYD"
      },
      {
        "id": 514184,
        "image_url": "http://upload.jianshu.io/collections/images/514184/Wechatimage959.jpeg",
        "title": " 原创儿童文学",
        "slug": "6fba5273f339"
      },
      {
        "id": 38,
        "image_url": "http://upload.jianshu.io/collections/images/38/android.graphics.Bitmap_f3edcb1.jpeg",
        "title": "诗",
        "slug": "vHz3Uc"
      },
      {
        "id": 16,
        "image_url": "http://upload.jianshu.io/collections/images/16/computer_guy.jpg",
        "title": "程序员",
        "slug": "NEt52a"
      },
      {
        "id": 264569,
        "image_url": "http://upload.jianshu.io/collections/images/264569/2.pic.jpg",
        "title": "@产品",
        "slug": "ad41ba5abc09"
      }
    ]
  ]
  return arr;
}
function List(){
  let arr = [
    {
      "object": {
        "type": 1,
        "data": {
          "id": 33815066,
          "title": "吃鸡|140字微小说",
          "slug": "a087b62b17c0",
          "list_image_url": "http://upload-images.jianshu.io/upload_images/12649257-3f24845215b5ca1a",
          "public_abbr": "儿子，在干啥呢？ 他的窗口弹出一条微信消息 他不耐烦的点开：爸，别烦我，吃鸡呢！ 儿子，吃鸡是啥？ 爸，你不懂就别问了 他关掉微信，目光聚焦到手机上的虚拟战场 啧，今晚又没吃...",
          "commentable": true,
          "important_collection": null,
          "user": {
            "id": 12649257,
            "nickname": "919b0c54458f",
            "slug": "919b0c54458f",
            "avatar": "http://upload.jianshu.io/users/upload_avatars/12649257/bd37d79c-2b5f-48c2-997f-fc4dca9577ef"
          },
          "public_comments_count": 0,
          "total_rewards_count": 0,
          "likes_count": 23
        }
      }
    },
    {
      "object": {
        "type": 1,
        "data": {
          "id": 33815064,
          "title": "天凉好个秋",
          "slug": "a087b62b17c0",
          "list_image_url": "http://upload-images.jianshu.io/upload_images/7090831-7ba34cf3aa6fc9d6.jpeg",
          "public_abbr": "儿子，在干啥呢？ 他的窗口弹出一条微信消息 他不耐烦的点开：爸，别烦我，吃鸡呢！ 儿子，吃鸡是啥？ 爸，你不懂就别问了 他关掉微信，目光聚焦到手机上的虚拟战场 啧，今晚又没吃...",
          "commentable": true,
          "important_collection": null,
          "user": {
            "id": 12649257,
            "nickname": "919b0c54458f",
            "slug": "919b0c54458f",
            "avatar": "http://upload.jianshu.io/users/upload_avatars/12649257/bd37d79c-2b5f-48c2-997f-fc4dca9577ef"
          },
          "public_comments_count": 0,
          "total_rewards_count": 0,
          "likes_count": 23
        }
      }
    },
    {
      "object": {
        "type": 1,
        "data": {
          "id": 32824017,
          "title": "张韶涵用10年戒糖脸部成驻颜少女，那么身材抗衰保持就要靠骨筋小颜",
          "slug": "a087b62b17c0",
          "list_image_url": "http://upload-images.jianshu.io/upload_images/7303861-f48bae3393eaf0f0",
          "public_abbr": "知道吗，不好的饮食习惯不仅可能会让你变胖 还会让你长斑、长皱纹、肤色暗沉 尤其是糖吃的姑娘们，真的会变丑 36岁的年龄 18岁颜龄的娃娃脸张韶涵 除了天生丽质 饱满有光泽的驻...",
          "commentable": true,
          "important_collection": null,
          "user": {
            "id": 12649257,
            "nickname": "919b0c54458f",
            "slug": "919b0c54458f",
            "avatar": "http://upload.jianshu.io/users/upload_avatars/12649257/bd37d79c-2b5f-48c2-997f-fc4dca9577ef"
          },
          "public_comments_count": 0,
          "total_rewards_count": 0,
          "likes_count": 23
        }
      }
    }
  ]
  return arr;
};

function navCon(){
  let arr = [
    {
      "is_author": false,
      "liked_note": false,
      "public_comment_count": 16,
      "featured_comments_count": 1,
      "likes_count": 15,
      "trial_open": false,
      "description": "写字\n只为遇见另一个自己",
      "id": 33815066,
      "slug": "3e182c001ea6",
      "public_title": "吃鸡|140字微小说",
      "free_content": "<div class=\"image-package\">\n<div class=\"image-container\" style=\"max-width: 700px; max-height: 933px;\">\n<div class=\"image-container-fill\" style=\"padding-bottom: 133.32999999999998%;\"></div>\n<div class=\"image-view\" data-width=\"768\" data-height=\"1024\"><img data-original-src=\"//upload-images.jianshu.io/upload_images/13308528-774ecf005ae48f20.jpg\" data-original-width=\"768\" data-original-height=\"1024\" data-original-format=\"image/png\" data-original-filesize=\"841840\"></div>\n</div>\n<div class=\"image-caption\">图片发自简书App</div>\n</div><p><br></p><p><br></p><p>儿子，在干啥呢？</p><p>他的窗口弹出一条微信消息</p><p>他不耐烦的点开：爸，别烦我，吃鸡呢！</p><p>儿子，吃鸡是啥？</p><p>爸，你不懂就别问了</p><p>他关掉微信，目光聚焦到手机上的虚拟战场</p><p>啧，今晚又没吃着鸡。他随手发个朋友圈，翻身睡了</p><p>过了几天，他爸来校舍看他</p><p>手里提着一袋子山鸡：儿子你说吃不到鸡，我这给你送来了</p><p>他愣在原地</p>",
      "paid_type": "free",
      "first_shared_at": "2018-08-22T01:16:01.000+08:00",
      "notebook_id": 27893078,
      "commentable": true,
      "wordage": 140,
      "paid_content_accessible": false,
      "share_image_url": "http://upload-images.jianshu.io/upload_images/13308528-774ecf005ae48f20.jpg",
      "show_paid_comment_tips": false,
      "user": {
        "id": 13308528,
        "slug": "0bc398af47c2",
        "nickname": "阁下A",
        "gender": 1,
        "avatar": "http://upload.jianshu.io/users/upload_avatars/13308528/8c5f31f7-d7d1-4141-8228-41d406b1ae8b.jpg",
        "intro": "一个热爱写作的双鱼座男生，总喜欢天马行空的胡思乱想。阁下喜欢看小说，写故事，文笔虽然不好，但是...",
        "wordage": 38161,
        "likes_count": 95,
        "badges": [],
        "vip": null,
        "liked_by_user": false,
        "liked_user": false
      },
      "distribution_more_earn_percent": 24
    },
    {
      "is_author": false,
      "liked_note": false,
      "public_comment_count": 41,
      "featured_comments_count": 0,
      "likes_count": 44,
      "trial_open": false,
      "description": "",
      "id": 33815064,
      "slug": "c7b081108e45",
      "public_title": "天凉好个秋",
      "free_content": "<div class=\"image-package\">\n<div class=\"image-container\" style=\"max-width: 700px; max-height: 660px;\">\n<div class=\"image-container-fill\" style=\"padding-bottom: 94.32000000000001%;\"></div>\n<div class=\"image-view\" data-width=\"1145\" data-height=\"1080\"><img data-original-src=\"//upload-images.jianshu.io/upload_images/7090831-7ba34cf3aa6fc9d6.jpeg\" data-original-width=\"1145\" data-original-height=\"1080\" data-original-format=\"image/jpeg\" data-original-filesize=\"518376\"></div>\n</div>\n<div class=\"image-caption\"></div>\n</div>\n<div class=\"image-package\">\n<div class=\"image-container\" style=\"max-width: 700px; max-height: 707px;\">\n<div class=\"image-container-fill\" style=\"padding-bottom: 101.02%;\"></div>\n<div class=\"image-view\" data-width=\"1080\" data-height=\"1091\"><img data-original-src=\"//upload-images.jianshu.io/upload_images/7090831-8586df06588554a7.jpeg\" data-original-width=\"1080\" data-original-height=\"1091\" data-original-format=\"image/jpeg\" data-original-filesize=\"532440\"></div>\n</div>\n<div class=\"image-caption\"></div>\n</div>\n<div class=\"image-package\">\n<div class=\"image-container\" style=\"max-width: 700px; max-height: 684px;\">\n<div class=\"image-container-fill\" style=\"padding-bottom: 97.82%;\"></div>\n<div class=\"image-view\" data-width=\"2015\" data-height=\"1971\"><img data-original-src=\"//upload-images.jianshu.io/upload_images/7090831-3aae2020a368c323.jpg\" data-original-width=\"2015\" data-original-height=\"1971\" data-original-format=\"image/jpeg\" data-original-filesize=\"957028\"></div>\n</div>\n<div class=\"image-caption\">此词来自小简姐姐</div>\n</div>\n<div class=\"image-package\">\n<div class=\"image-container\" style=\"max-width: 700px; max-height: 581px;\">\n<div class=\"image-container-fill\" style=\"padding-bottom: 56.74%;\"></div>\n<div class=\"image-view\" data-width=\"1024\" data-height=\"581\"><img data-original-src=\"//upload-images.jianshu.io/upload_images/7090831-ff522f0a52c81d6c.jpg\" data-original-width=\"1024\" data-original-height=\"581\" data-original-format=\"image/jpeg\" data-original-filesize=\"303518\"></div>\n</div>\n<div class=\"image-caption\"></div>\n</div>\n",
      "paid_type": "free",
      "first_shared_at": "2018-09-15T14:19:49.000+08:00",
      "notebook_id": 23373435,
      "commentable": true,
      "wordage": 0,
      "paid_content_accessible": false,
      "share_image_url": "http://upload-images.jianshu.io/upload_images/7090831-7ba34cf3aa6fc9d6.jpeg",
      "show_paid_comment_tips": false,
      "user": {
        "id": 7090831,
        "slug": "05b27170fc2b",
        "nickname": "碧漪",
        "gender": 0,
        "avatar": "http://upload.jianshu.io/users/upload_avatars/7090831/47b9cd41-11e0-4f8b-af40-5df702c523ed.jpg",
        "intro": "              写字\n只为遇见另一个自己",
        "wordage": 82951,
        "likes_count": 23851,
        "badges": [],
        "vip": null,
        "liked_by_user": false,
        "liked_user": false
      },
      "distribution_more_earn_percent": 24
    },
    {
      "is_author": false,
      "liked_note": false,
      "public_comment_count": 1,
      "featured_comments_count": 0,
      "likes_count": 8,
      "trial_open": false,
      "description": "知道吗，不好的饮食习惯不仅可能会让你变胖 还会让你长斑、长皱纹、肤色暗沉 尤其是糖吃的姑娘们，真的会变丑 36岁的年龄 18岁颜龄的娃娃脸张韶涵 除了天生丽质 饱满有光泽的驻...",
      "id": 32824017,
      "slug": "77a056e55f6d",
      "public_title": "张韶涵用10年戒糖脸部成驻颜少女，那么身材抗衰保持就要靠骨筋小颜",
      "free_content": "<p>知道吗，不好的饮食习惯不仅可能会让你变胖</p><p>还会让你长斑、长皱纹、肤色暗沉</p><p>尤其是糖吃的姑娘们，真的会变丑</p><div class=\"image-package\">\n<div class=\"image-container\" style=\"max-width: 450px; max-height: 238px;\">\n<div class=\"image-container-fill\" style=\"padding-bottom: 52.89%;\"></div>\n<div class=\"image-view\" data-width=\"450\" data-height=\"238\"><img data-original-src=\"//upload-images.jianshu.io/upload_images/7303861-f48bae3393eaf0f0\" data-original-width=\"450\" data-original-height=\"238\" data-original-format=\"image/gif\" data-original-filesize=\"1441405\"></div>\n</div>\n<div class=\"image-caption\"></div>\n</div><p>36岁的年龄</p><p>18岁颜龄的娃娃脸张韶涵</p><p>除了天生丽质</p><p>饱满有光泽的驻颜技能也让人为之赞叹</p><div class=\"image-package\">\n<div class=\"image-container\" style=\"max-width: 600px; max-height: 599px;\">\n<div class=\"image-container-fill\" style=\"padding-bottom: 99.83%;\"></div>\n<div class=\"image-view\" data-width=\"600\" data-height=\"599\"><img data-original-src=\"//upload-images.jianshu.io/upload_images/7303861-31e99dee8237bfad\" data-original-width=\"600\" data-original-height=\"599\" data-original-format=\"image/jpeg\" data-original-filesize=\"70004\"></div>\n</div>\n<div class=\"image-caption\"></div>\n</div><p>而张韶涵的驻颜秘密就在“戒糖”</p><p>而且一戒就是10年的时间</p><p>之后她在微博分享了自己的戒糖心得</p><div class=\"image-package\">\n<div class=\"image-container\" style=\"max-width: 671px; max-height: 463px;\">\n<div class=\"image-container-fill\" style=\"padding-bottom: 69.0%;\"></div>\n<div class=\"image-view\" data-width=\"671\" data-height=\"463\"><img data-original-src=\"//upload-images.jianshu.io/upload_images/7303861-a84029d8e69dc225\" data-original-width=\"671\" data-original-height=\"463\" data-original-format=\"image/jpeg\" data-original-filesize=\"39843\"></div>\n</div>\n<div class=\"image-caption\"></div>\n</div><p>糖化到底是怎么回事？</p><p>人体摄入的糖分会随血液流动，伺机寻找并粘住某种蛋白，最容易受到攻击的蛋白就是胶原等保持弹性的蛋白，最后形成一种新的被糖化的分子——“蛋白质高度糖化终产物(AGEs)”。吃的糖越多，那么产生的蛋白质高度糖化终产物就越多，从而会攻击越来越多的蛋白。最终结果就是让我们的肤色变晦暗，皮肤松弛，皱纹变多，这就是糖化的原理。人体内的糖化与上面的类似，也就是说你体内的糖积累的越多（葡萄糖、果糖、半乳糖等）就越容易发生糖化反应，皮肤就越黄。</p><div class=\"image-package\">\n<div class=\"image-container\" style=\"max-width: 596px; max-height: 618px;\">\n<div class=\"image-container-fill\" style=\"padding-bottom: 103.69%;\"></div>\n<div class=\"image-view\" data-width=\"596\" data-height=\"618\"><img data-original-src=\"//upload-images.jianshu.io/upload_images/7303861-1ef8f646e1245803\" data-original-width=\"596\" data-original-height=\"618\" data-original-format=\"image/jpeg\" data-original-filesize=\"43485\"></div>\n</div>\n<div class=\"image-caption\"></div>\n</div><p>难道就告别含糖的食物了吗？ </p><p>看完什么是糖化，估计不少小仙女们愣住了，吓得把手里的奶茶、甜品都放下了，就差立誓了。 其实糖分是人体必需，必不可少的，而且我们体内的细胞会新陈代谢，糖化产物不多就不会沉积。世界卫生组织发布的营养指南建议，成年人每日摄入的糖要控制在25克到30克之间。所以糖还是可以吃一点的，奶茶、甜品还是可以拿起来吃的，不过一定要适量。</p><p>糖化其实不仅仅是来至于甜品和含糖的食物， 除了口感上“甜”的，含糖成分会比较高外，煎烤油炸类食物都要少吃，因为这些食物都经过高温加工，会加快糖化速度，形成AGEs。另外，随着年龄的增长，人的新陈代谢会变慢，抗糖化就得多做一些工作了。</p><p>如何科学的抗糖化...</p><p>戒糖风不仅仅让女明星们如痴如醉，连男明星都加入抗糖化阵营中了，罗志祥抗糖之后，42天减掉了16斤，不仅可以抗衰还可以减肥，很骚气的操作有木有。</p><div class=\"image-package\">\n<div class=\"image-container\" style=\"max-width: 570px; max-height: 473px;\">\n<div class=\"image-container-fill\" style=\"padding-bottom: 82.98%;\"></div>\n<div class=\"image-view\" data-width=\"570\" data-height=\"473\"><img data-original-src=\"//upload-images.jianshu.io/upload_images/7303861-083a869ca8883f3c\" data-original-width=\"570\" data-original-height=\"473\" data-original-format=\"image/jpeg\" data-original-filesize=\"50316\"></div>\n</div>\n<div class=\"image-caption\"></div>\n</div><p>那么为了逆龄、为了抗衰，如何科学的抗糖化呢？</p><p>1、<b>健康饮食</b>~还是把“吃”再强调一遍，毕竟我朝人民对食物的热爱是宇宙公认的，《舌尖上的中国》都可以出好几部，抗糖化的饮食守则还蛮简单，一句话概括：选择不会让血糖值快速上升的食物。①. 不吃精致的加工糖，不喝有糖的饮料（奶茶、罐装饮料）②. 不吃甜点（蛋糕、甜甜圈、马卡龙、冰激凌统统等）③. 少吃特别甜的水果和酸奶。</p><div class=\"image-package\">\n<div class=\"image-container\" style=\"max-width: 700px; max-height: 500px;\">\n<div class=\"image-container-fill\" style=\"padding-bottom: 64.85%;\"></div>\n<div class=\"image-view\" data-width=\"771\" data-height=\"500\"><img data-original-src=\"//upload-images.jianshu.io/upload_images/7303861-d041ce27b02471b3\" data-original-width=\"771\" data-original-height=\"500\" data-original-format=\"image/jpeg\" data-original-filesize=\"56908\"></div>\n</div>\n<div class=\"image-caption\"></div>\n</div><p>2、<b>科学护肤防晒</b>~紫外线不仅仅可以使肌肤光老化，除了光老化以外，要相信紫外线永远是这些坏事的推波助澜者，不求抗糖化，只求不要加速“糖化”就好了，好的防晒习惯，可以减少紫外线加速糖化过程。而且科学护肤及时补水和解决问题肌肤，也是为了可以加速新陈代谢，快速代谢掉糖化堆积物。</p><div class=\"image-package\">\n<div class=\"image-container\" style=\"max-width: 618px; max-height: 364px;\">\n<div class=\"image-container-fill\" style=\"padding-bottom: 58.9%;\"></div>\n<div class=\"image-view\" data-width=\"618\" data-height=\"364\"><img data-original-src=\"//upload-images.jianshu.io/upload_images/7303861-df306c8965957e26\" data-original-width=\"618\" data-original-height=\"364\" data-original-format=\"image/jpeg\" data-original-filesize=\"24656\"></div>\n</div>\n<div class=\"image-caption\"></div>\n</div><p>3、<b>适当的运动</b>~前面提到了，年龄增长新陈代谢变慢，就会造成AGEs的堆积，而适当的运动可以提高身体的糖脂代谢，延缓机体衰老，把多余的AGEs代谢出去。运动的好处真的不用我再多强调了吧，如果觉得高难度的健身很难坚持的话，从简单的饭后走一走开始吧。当然除了运动外，合理的作息也很重要哦~</p><div class=\"image-package\">\n<div class=\"image-container\" style=\"max-width: 653px; max-height: 512px;\">\n<div class=\"image-container-fill\" style=\"padding-bottom: 78.41%;\"></div>\n<div class=\"image-view\" data-width=\"653\" data-height=\"512\"><img data-original-src=\"//upload-images.jianshu.io/upload_images/7303861-b530cc6e91815c4f\" data-original-width=\"653\" data-original-height=\"512\" data-original-format=\"image/jpeg\" data-original-filesize=\"25551\"></div>\n</div>\n<div class=\"image-caption\"></div>\n</div><p>4、<b>解决筋膜沾黏</b>~当身体因为持续劳动与压力紧绷，或是受伤丶感染时，细胞的代谢物会逐渐累积在筋膜层，形成筋膜「沾黏」现象，当代谢物持续累积无法排除，而沾黏的部位又无法化解，沾黏的纤维就会越来越组织化，形同如同筋膜本身的结缔组织，最终黏着在一起。</p><div class=\"image-package\">\n<div class=\"image-container\" style=\"max-width: 628px; max-height: 184px;\">\n<div class=\"image-container-fill\" style=\"padding-bottom: 29.299999999999997%;\"></div>\n<div class=\"image-view\" data-width=\"628\" data-height=\"184\"><img data-original-src=\"//upload-images.jianshu.io/upload_images/7303861-faab541e1e3a102a\" data-original-width=\"628\" data-original-height=\"184\" data-original-format=\"image/jpeg\" data-original-filesize=\"21843\"></div>\n</div>\n<div class=\"image-caption\"></div>\n</div><p>筋膜沾黏除了会引起发身体病症还会造成身体变形（面部不对称、高低肩、骨盆倾斜等），另外还会减慢新陈代谢速度，让身体产生的一些废物没办法及时代谢出去，筋膜粘连致使糖化产物堆积，也会形成糖化肌肤，加速衰老。目前解决筋膜粘连的安全物理方式就是-骨筋小颜的筋膜SPA技术，筋膜SPA就是物理式改善筋膜沾黏的手段，如按、压、推、拉，疏通沾黏部位。透过力量疏通沾黏的原理，来回复筋膜的灵活状态。这种方法的好处就是安全无伤害，而且配合锻炼的话也会促使筋膜恢复原来不沾黏的状态。改变不良形体，恢复新陈代谢。</p><div class=\"image-package\">\n<div class=\"image-container\" style=\"max-width: 700px; max-height: 523px;\">\n<div class=\"image-container-fill\" style=\"padding-bottom: 74.81%;\"></div>\n<div class=\"image-view\" data-width=\"1080\" data-height=\"808\"><img data-original-src=\"//upload-images.jianshu.io/upload_images/7303861-fb8ba593bc19b970\" data-original-width=\"1080\" data-original-height=\"808\" data-original-format=\"image/jpeg\" data-original-filesize=\"82190\"></div>\n</div>\n<div class=\"image-caption\"></div>\n</div><div class=\"image-package\">\n<div class=\"image-container\" style=\"max-width: 700px; max-height: 523px;\">\n<div class=\"image-container-fill\" style=\"padding-bottom: 74.81%;\"></div>\n<div class=\"image-view\" data-width=\"1080\" data-height=\"808\"><img data-original-src=\"//upload-images.jianshu.io/upload_images/7303861-988eb1c62d3925b8\" data-original-width=\"1080\" data-original-height=\"808\" data-original-format=\"image/jpeg\" data-original-filesize=\"70389\"></div>\n</div>\n<div class=\"image-caption\"></div>\n</div><p>所以我们抗糖化和防晒、抗氧化、减肥、塑形一样，是延缓衰老保护形象非常必要的措施。如果想要比同龄人拥有更好的颜值和身材，不付出行动，光打嘴炮是不行的，跟心爱的甜品、可乐say goodbye！长期坚持确实是种考验，抵制诱惑更是磨练意志，这也是明星们为什么总是比同龄人年轻的原因！</p>",
      "paid_type": "free",
      "first_shared_at": "2018-08-25T17:07:34.000+08:00",
      "notebook_id": 15226633,
      "commentable": true,
      "wordage": 1629,
      "paid_content_accessible": false,
      "share_image_url": "http://upload-images.jianshu.io/upload_images/7303861-31e99dee8237bfad",
      "show_paid_comment_tips": false,
      "user": {
        "id": 7303861,
        "slug": "d4ecd1d31a5e",
        "nickname": "骨筋小颜",
        "gender": 1,
        "avatar": "http://upload.jianshu.io/users/upload_avatars/7303861/0dc720a7-daa3-432d-b029-7a0744c05831.png",
        "intro": "",
        "wordage": 79465,
        "likes_count": 33,
        "badges": [],
        "vip": null,
        "liked_by_user": false,
        "liked_user": false
      },
      "distribution_more_earn_percent": 24
    }
  ]
  return arr;
};
let len = navCon();
function getNavCon(id){
  let res
  for(var i=0;i<len.length;i++){
    console.log(id)
    let con = len[i]
    if(id == con.ids){
      res = con
    }
    return res || {}
  }
}