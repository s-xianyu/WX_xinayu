module.exports = {
  Hot:Hot,
  List:List,
  getNavCon:getNavCon,
  comment:comment
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
// 主页
function hotCon(){
  let arr = [
    {
      "id": 14,
      "title": "@IT·互联网",
      "slug": "V2CqjW",
      "newly_added_at": 1537334530,
      "image": "http://upload.jianshu.io/collections/images/14/6249340_194140034135_2.jpg",
      "content_without_html": "欢迎关注公众号简宝玉( 公众号ID : jianshu4321 )后台回复“指南”获取玩转简书绝密珍贵资料汇总；有问题，找宝玉。简宝玉同志会专程为你答疑解惑关于简书的一切。\r\n\r\nHi，很高兴在@IT·互联网专题遇见你。\r\n收录范围：收录IT&互联网行业观察与思考，数码产品极客体验分析等类型文章\r\n投稿须知：https://www.jianshu.com/p/4edc76104c27\r\n专题主编：@若锦 https://www.jianshu.com/u/e4c63b354a77\r\n\r\n官方社群：可联系添加 @若锦 加入专题官方社群交流、学习，添加时备注简书ID。\r\n",
      "content_in_full": "<p>欢迎关注公众号简宝玉( 公众号ID : jianshu4321 )后台回复“指南”获取玩转简书绝密珍贵资料汇总；有问题，找宝玉。简宝玉同志会专程为你答疑解惑关于简书的一切。</p>\n\n<p>Hi，很高兴在@IT·互联网专题遇见你。\n<br />收录范围：收录IT&amp;互联网行业观察与思考，数码产品极客体验分析等类型文章\n<br />投稿须知：<a href=\"https://www.jianshu.com/p/4edc76104c27\" class=\"blue-link\">https://www.jianshu.com/p/4edc76104c27</a>\n<br />专题主编：@若锦 <a href=\"https://www.jianshu.com/u/e4c63b354a77\" class=\"blue-link\">https://www.jianshu.com/u/e4c63b354a77</a></p>\n\n<p>官方社群：可联系添加 @若锦 加入专题官方社群交流、学习，添加时备注简书ID。\n</p>",
      "owner": {
        "id": 259,
        "nickname": "简书",
        "slug": "yZq3ZV"
      },
      "subscribers_count": 1544020,
      "notes_count": 48632,
      "is_subscribed": false
    },
    {
      "id": 95,
      "title": "故事",
      "slug": "fcd7a62be697",
      "newly_added_at": 1537338192,
      "image": "http://upload.jianshu.io/collections/images/95/1.jpg",
      "content_without_html": "故事专题，不论是旅行生活中亲身经历的真实故事，还是童话玄幻遐想的虚构故事，这里记录你的每个故事。\r\n\r\n欢迎向我们投稿你的故事！\r\n\r\n所投稿件必须是一个完整的故事，故事包括但不限于：小说、世间故事、叙事散文、以叙事为主的回忆录……\r\n\r\n投稿前，请阅读简书史上最有趣的投稿指南： \r\nhttp://www.jianshu.com/p/9da8500a57f0\r\n\r\n投稿须知：\r\n1.建议题材：有情节的小说、身边的故事、叙事游记、以叙事为主的回忆录、职业故事等。\r\n2.不建议题材：连载、只有大道理的鸡汤、成功学、工具文、诗歌、观点时评类文章等。\r\n3.文章在一千字以上，排版合理，不影响阅读体验。\r\n4.禁止外链宣传。不得有个人微信、微信公众号、微博、豆瓣链接。\r\n\r\n专题主编：似舞 https://www.jianshu.com/u/021585ebd561\r\n\r\n目前【故事】专题已建有专题社群，私信主编暗号“我爱故事”，即可获得入群链接。任何投稿疑惑，写作问题，感情困难，都可以进群进行申诉，会有专人解决你的问题。\r\n\r\n关注简书故事类公众号“茶点故事”（ jianshu_teahouse ），及时阅读简书好故事。\r\n\r\n\r\n欢迎关注公众号简宝玉( 公众号ID : jianshu4321 )后台回复“指南”获取玩转简书绝密珍贵资料汇总；有问题，找宝玉。简宝玉同志会专程为你答疑解惑关于简书的一切。",
      "content_in_full": "<p>故事专题，不论是旅行生活中亲身经历的真实故事，还是童话玄幻遐想的虚构故事，这里记录你的每个故事。</p>\n\n<p>欢迎向我们投稿你的故事！</p>\n\n<p>所投稿件必须是一个完整的故事，故事包括但不限于：小说、世间故事、叙事散文、以叙事为主的回忆录……</p>\n\n<p>投稿前，请阅读简书史上最有趣的投稿指南： \n<br /><a href=\"http://www.jianshu.com/p/9da8500a57f0\" class=\"blue-link\">http://www.jianshu.com/p/9da8500a57f0</a></p>\n\n<p>投稿须知：\n<br />1.建议题材：有情节的小说、身边的故事、叙事游记、以叙事为主的回忆录、职业故事等。\n<br />2.不建议题材：连载、只有大道理的鸡汤、成功学、工具文、诗歌、观点时评类文章等。\n<br />3.文章在一千字以上，排版合理，不影响阅读体验。\n<br />4.禁止外链宣传。不得有个人微信、微信公众号、微博、豆瓣链接。</p>\n\n<p>专题主编：似舞 <a href=\"https://www.jianshu.com/u/021585ebd561\" class=\"blue-link\">https://www.jianshu.com/u/021585ebd561</a></p>\n\n<p>目前【故事】专题已建有专题社群，私信主编暗号“我爱故事”，即可获得入群链接。任何投稿疑惑，写作问题，感情困难，都可以进群进行申诉，会有专人解决你的问题。</p>\n\n<p>关注简书故事类公众号“茶点故事”（ jianshu_teahouse ），及时阅读简书好故事。</p>\n\n<p>欢迎关注公众号简宝玉( 公众号ID : jianshu4321 )后台回复“指南”获取玩转简书绝密珍贵资料汇总；有问题，找宝玉。简宝玉同志会专程为你答疑解惑关于简书的一切。</p>",
      "owner": {
        "id": 259,
        "nickname": "简书",
        "slug": "yZq3ZV"
      },
      "subscribers_count": 1240683,
      "notes_count": 193395,
      "is_subscribed": false
    },
    {
      "id": 283250,
      "title": "手绘",
      "slug": "8c92f845cd4d",
      "newly_added_at": 1537331035,
      "image": "http://upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg",
      "content_without_html": "欢迎关注公众号简宝玉( 公众号ID : jianshu4321 )后台回复“指南”获取玩转简书绝密珍贵资料汇总；有问题，找宝玉。简宝玉同志会专程为你答疑解惑关于简书的一切。\r\n\r\n本专题是绘画爱好者的乐园，欢迎互相分享学习;\r\n关于专题投稿要求详见https://www.jianshu.com/p/153408302566\r\n\r\n加入专题官方微信群，爱画画的小伙伴们都在这里！\r\n\r\n进群方式:添加主编微信: lzx_122520，验证申请注明来自简书，进群后改备注打招呼发作品;\r\n\r\n专题每周会有免费的绘画分享课，届时会邀请众多绘画高手来讲解互动，关注微信公众号:jianshubang即可了解。\r\n更多专题活动可关注子专题http://www.jianshu.com/c/8d32b933aabd\r\n\r\n投稿须知：欢迎大家来投递以下类型的稿件：1、原创手绘作品2、原创漫画3、绘画教程绘画工具没有限制，手绘、板绘、鼠绘都Ok，用大脚趾画画我也拦不住你啊！\r\n\r\n",
      "content_in_full": "<p>欢迎关注公众号简宝玉( 公众号ID : jianshu4321 )后台回复“指南”获取玩转简书绝密珍贵资料汇总；有问题，找宝玉。简宝玉同志会专程为你答疑解惑关于简书的一切。</p>\n\n<p>本专题是绘画爱好者的乐园，欢迎互相分享学习;\n<br />关于专题投稿要求详见<a href=\"https://www.jianshu.com/p/153408302566\" class=\"blue-link\">https://www.jianshu.com/p/153408302566</a></p>\n\n<p>加入专题官方微信群，爱画画的小伙伴们都在这里！</p>\n\n<p>进群方式:添加主编微信: lzx_122520，验证申请注明来自简书，进群后改备注打招呼发作品;</p>\n\n<p>专题每周会有免费的绘画分享课，届时会邀请众多绘画高手来讲解互动，关注微信公众号:jianshubang即可了解。\n<br />更多专题活动可关注子专题<a href=\"http://www.jianshu.com/c/8d32b933aabd\" class=\"blue-link\">http://www.jianshu.com/c/8d32b933aabd</a></p>\n\n<p>投稿须知：欢迎大家来投递以下类型的稿件：1、原创手绘作品2、原创漫画3、绘画教程绘画工具没有限制，手绘、板绘、鼠绘都Ok，用大脚趾画画我也拦不住你啊！</p>",
      "owner": {
        "id": 259,
        "nickname": "简书",
        "slug": "yZq3ZV"
      },
      "subscribers_count": 1576510,
      "notes_count": 125423,
      "is_subscribed": false
    },
    {
      "id": 4,
      "title": "读书",
      "slug": "yD9GAd",
      "newly_added_at": 1537331282,
      "image": "http://upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg",
      "content_without_html": "\r\n  投稿须知:\r\n    读书专题仅收录与读书有关的书评、读书笔记、阅读方法、读书清单等文章。\r\n    文中不得出现非简书的链接;包括但不限于公众号、二维码、头条号、微博、一点资源等带有广告性质的信息; 配图不能带有水印。\r\n      文章收录字数1000字起( 大神请忽略此限制)，请不要直接摘抄原文的话就来投稿。请注意排版美观、请不要密集投稿。\r\n投稿请查看投稿须知：https://www.jianshu.com/p/2a4cc9232f37\r\n进群请添加主编微信: MYH5619175, 记得备注I简书昵称+读书]。\r\n\r\n欢迎关注公众号茶点故事（Jianshu_teahouse）每周一篇编委精心推荐精彩书评。\r\n  ",
      "content_in_full": "<p>\n  投稿须知:\n<br />    读书专题仅收录与读书有关的书评、读书笔记、阅读方法、读书清单等文章。\n<br />    文中不得出现非简书的链接;包括但不限于公众号、二维码、头条号、微博、一点资源等带有广告性质的信息; 配图不能带有水印。\n<br />      文章收录字数1000字起( 大神请忽略此限制)，请不要直接摘抄原文的话就来投稿。请注意排版美观、请不要密集投稿。\n<br />投稿请查看投稿须知：<a href=\"https://www.jianshu.com/p/2a4cc9232f37\" class=\"blue-link\">https://www.jianshu.com/p/2a4cc9232f37</a>\n<br />进群请添加主编微信: MYH5619175, 记得备注I简书昵称+读书]。</p>\n\n<p>欢迎关注公众号茶点故事（Jianshu_teahouse）每周一篇编委精心推荐精彩书评。\n<br />  </p>",
      "owner": {
        "id": 259,
        "nickname": "简书",
        "slug": "yZq3ZV"
      },
      "subscribers_count": 3381745,
      "notes_count": 180187,
      "is_subscribed": false
    },
    {
      "id": 21,
      "title": "简书电影",
      "slug": "1hjajt",
      "newly_added_at": 1537333221,
      "image": "http://upload.jianshu.io/collections/images/21/20120316041115481.jpg",
      "content_without_html": "欢迎关注公众号简宝玉( 公众号ID : jianshu4321 )后台回复“指南”获取玩转简书绝密珍贵资料汇总；有问题，找宝玉。简宝玉同志会专程为你答疑解惑关于简书的一切。\r\n\r\n和简书一起探索电影世界，欢迎订阅官方公众号：简书电影（jianshuyingyin）\r\n\r\n本专题收录电影相关文章。要求文内不得带有公众号信息等推广内容。 \r\n详细规定、推荐首页、联系主编事宜请阅读专题须知： https://www.jianshu.com/p/400ae26fd3d7\r\n\r\n专题主编：魔鬼的赞歌 http://www.jianshu.com/users/680ea2b754fc/ \r\n\r\n关注公众号 “简书电影” （jianshuyingyin），简书电影更多福利等着你！",
      "content_in_full": "<p>欢迎关注公众号简宝玉( 公众号ID : jianshu4321 )后台回复“指南”获取玩转简书绝密珍贵资料汇总；有问题，找宝玉。简宝玉同志会专程为你答疑解惑关于简书的一切。</p>\n\n<p>和简书一起探索电影世界，欢迎订阅官方公众号：简书电影（jianshuyingyin）</p>\n\n<p>本专题收录电影相关文章。要求文内不得带有公众号信息等推广内容。 \n<br />详细规定、推荐首页、联系主编事宜请阅读专题须知： <a href=\"https://www.jianshu.com/p/400ae26fd3d7\" class=\"blue-link\">https://www.jianshu.com/p/400ae26fd3d7</a></p>\n\n<p>专题主编：魔鬼的赞歌 <a href=\"http://www.jianshu.com/users/680ea2b754fc/\" class=\"blue-link\">http://www.jianshu.com/users/680ea2b754fc/</a> </p>\n\n<p>关注公众号 “简书电影” （jianshuyingyin），简书电影更多福利等着你！</p>",
      "owner": {
        "id": 259,
        "nickname": "简书",
        "slug": "yZq3ZV"
      },
      "subscribers_count": 1790589,
      "notes_count": 87830,
      "is_subscribed": false
    },
    {
      "id": 83,
      "title": "摄影",
      "slug": "7b2be866f564",
      "newly_added_at": 1537335928,
      "image": "http://upload.jianshu.io/collections/images/83/1.jpg",
      "content_without_html": "欢迎关注公众号简宝玉( 公众号ID : jianshu4321 )后台回复“指南”获取玩转简书绝密珍贵资料汇总；有问题，找宝玉。简宝玉同志会专程为你答疑解惑关于简书的一切。\r\n\r\n生活本无趣  \r\n光影挽留年\r\n用图片 说故事 \r\n记录生活 记录美好 \r\n \r\n每个人都是独特的艺术家\r\n用快门捕捉你双眼所见，心有所感的一切\r\n \r\n专题投稿，首页推荐，摄影爱好交流详见：\r\nhttp://www.jianshu.com/p/062ba44b90ed\r\n \r\n专题主编:小久英\r\nhttps://www.jianshu.com/u/aa73c6c31eb1\r\n\r\n\r\n\r\n\r\n\r\n\r\n",
      "content_in_full": "<p>欢迎关注公众号简宝玉( 公众号ID : jianshu4321 )后台回复“指南”获取玩转简书绝密珍贵资料汇总；有问题，找宝玉。简宝玉同志会专程为你答疑解惑关于简书的一切。</p>\n\n<p>生活本无趣  \n<br />光影挽留年\n<br />用图片 说故事 \n<br />记录生活 记录美好 \n<br /> \n<br />每个人都是独特的艺术家\n<br />用快门捕捉你双眼所见，心有所感的一切\n<br /> \n<br />专题投稿，首页推荐，摄影爱好交流详见：\n<br /><a href=\"http://www.jianshu.com/p/062ba44b90ed\" class=\"blue-link\">http://www.jianshu.com/p/062ba44b90ed</a>\n<br /> \n<br />专题主编:小久英\n<br /><a href=\"https://www.jianshu.com/u/aa73c6c31eb1\" class=\"blue-link\">https://www.jianshu.com/u/aa73c6c31eb1</a></p>",
      "owner": {
        "id": 259,
        "nickname": "简书",
        "slug": "yZq3ZV"
      },
      "subscribers_count": 1880570,
      "notes_count": 68021,
      "is_subscribed": false
    }
  ]
  return arr
};

// 列表
function List(){
  let arr = [
    {
      "object": {
        "type": 1,
        "data": {
          "id": 33815066,
          "title": "吃鸡|140字微小说",
          "slug": "a087b62b17c0",
          "list_image_url": "http://upload-images.jianshu.io/upload_images/7090831-7ba34cf3aa6fc9d6.jpeg",
          "public_abbr": "儿子，在干啥呢？ 他的窗口弹出一条微信消息 他不耐烦的点开：爸，别烦我，吃鸡呢！ 儿子，吃鸡是啥？ 爸，你不懂就别问了 他关掉微信，目光聚焦到手机上的虚拟战场 啧，今晚又没吃...",
          "commentable": true,
          "important_collection": null,
          "user": {
            "id": 12649257,
            "nickname": "阁下A",
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
          "list_image_url": "",
          "public_abbr": "儿子，在干啥呢？ 他的窗口弹出一条微信消息 他不耐烦的点开：爸，别烦我，吃鸡呢！ 儿子，吃鸡是啥？ 爸，你不懂就别问了 他关掉微信，目光聚焦到手机上的虚拟战场 啧，今晚又没吃...",
          "commentable": true,
          "important_collection": null,
          "user": {
            "id": 12649257,
            "nickname": "碧漪",
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
            "nickname": "骨筋小颜",
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
          "id": 30166493,
          "title": "出租屋大改造 ｜ 提升幸福感的实用家居单品（上）",
          "slug": "a087b62b17c0",
          "list_image_url": "http://upload-images.jianshu.io/upload_images/7167123-d82671b200a58438.jpg",
          "public_abbr": "最近桑塔搬家了，换了座新的城市，也换了个新的小窝。虽然是租来的房子，但看着空荡荡的新家，爱折腾的桑塔哪里闲得住。 在跑了三趟宜家，收了二十个快递包裹，收拾了一周之后... 桑..",
          "commentable": true,
          "important_collection": null,
          "user": {
            "id": 12649257,
            "nickname": "桑塔露露的礼物盒",
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
          "id": 31955776,
          "title": "看了让你爱不释手的5家店铺",
          "slug": "a087b62b17c0",
          "list_image_url": "http://upload-images.jianshu.io/upload_images/2718584-961bf021e17ab75b.jpg",
          "public_abbr": "1 欣云户外专营店 这三款产品平时出差或者旅行，用来装我们那一堆化妆品非常合适，简单方便，便于携带。 这款一次性压缩洗脸巾，不管是户外旅行还是在家，用起来非常方便，比我们的毛...",
          "commentable": true,
          "important_collection": null,
          "user": {
            "id": 12649257,
            "nickname": "参差百态是生活",
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
          "id": 3588441,
          "title": "单身是最好的升值期",
          "slug": "a087b62b17c0",
          "list_image_url": "http://upload-images.jianshu.io/upload_images/573708-3139c00b0d571cd9.jpg",
          "public_abbr": "- 1 - 为什么单身？因为想变成更好的自己啊 昨晚在微信后台发起了一个话题“你单身吗？单身多久了？在你单身的这段时间里，最大的改变是什么？”收到了成千上百条回复。 本来我以...",
          "commentable": true,
          "important_collection": null,
          "user": {
            "id": 12649257,
            "nickname": "叶上清之宿雨",
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
          "id": 43815066,
          "title": "吃鸡|140字微小说",
          "slug": "a087b62b17c0",
          "list_image_url": "http://upload-images.jianshu.io/upload_images/7090831-7ba34cf3aa6fc9d6.jpeg",
          "public_abbr": "儿子，在干啥呢？ 他的窗口弹出一条微信消息 他不耐烦的点开：爸，别烦我，吃鸡呢！ 儿子，吃鸡是啥？ 爸，你不懂就别问了 他关掉微信，目光聚焦到手机上的虚拟战场 啧，今晚又没吃...",
          "commentable": true,
          "important_collection": null,
          "user": {
            "id": 12649257,
            "nickname": "阁下A",
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
          "id": 43815064,
          "title": "天凉好个秋",
          "slug": "a087b62b17c0",
          "list_image_url": "",
          "public_abbr": "儿子，在干啥呢？ 他的窗口弹出一条微信消息 他不耐烦的点开：爸，别烦我，吃鸡呢！ 儿子，吃鸡是啥？ 爸，你不懂就别问了 他关掉微信，目光聚焦到手机上的虚拟战场 啧，今晚又没吃...",
          "commentable": true,
          "important_collection": null,
          "user": {
            "id": 12649257,
            "nickname": "碧漪",
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
          "id": 42824017,
          "title": "张韶涵用10年戒糖脸部成驻颜少女，那么身材抗衰保持就要靠骨筋小颜",
          "slug": "a087b62b17c0",
          "list_image_url": "http://upload-images.jianshu.io/upload_images/7303861-f48bae3393eaf0f0",
          "public_abbr": "知道吗，不好的饮食习惯不仅可能会让你变胖 还会让你长斑、长皱纹、肤色暗沉 尤其是糖吃的姑娘们，真的会变丑 36岁的年龄 18岁颜龄的娃娃脸张韶涵 除了天生丽质 饱满有光泽的驻...",
          "commentable": true,
          "important_collection": null,
          "user": {
            "id": 12649257,
            "nickname": "骨筋小颜",
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
          "id": 40166493,
          "title": "出租屋大改造 ｜ 提升幸福感的实用家居单品（上）",
          "slug": "a087b62b17c0",
          "list_image_url": "http://upload-images.jianshu.io/upload_images/7167123-d82671b200a58438.jpg",
          "public_abbr": "最近桑塔搬家了，换了座新的城市，也换了个新的小窝。虽然是租来的房子，但看着空荡荡的新家，爱折腾的桑塔哪里闲得住。 在跑了三趟宜家，收了二十个快递包裹，收拾了一周之后... 桑..",
          "commentable": true,
          "important_collection": null,
          "user": {
            "id": 12649257,
            "nickname": "桑塔露露的礼物盒",
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
          "id": 41955776,
          "title": "看了让你爱不释手的5家店铺",
          "slug": "a087b62b17c0",
          "list_image_url": "http://upload-images.jianshu.io/upload_images/2718584-961bf021e17ab75b.jpg",
          "public_abbr": "1 欣云户外专营店 这三款产品平时出差或者旅行，用来装我们那一堆化妆品非常合适，简单方便，便于携带。 这款一次性压缩洗脸巾，不管是户外旅行还是在家，用起来非常方便，比我们的毛...",
          "commentable": true,
          "important_collection": null,
          "user": {
            "id": 12649257,
            "nickname": "参差百态是生活",
            "slug": "参差百态是生活",
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
          "id": 4588441,
          "title": "单身是最好的升值期",
          "slug": "a087b62b17c0",
          "list_image_url": "http://upload-images.jianshu.io/upload_images/573708-3139c00b0d571cd9.jpg",
          "public_abbr": "- 1 - 为什么单身？因为想变成更好的自己啊 昨晚在微信后台发起了一个话题“你单身吗？单身多久了？在你单身的这段时间里，最大的改变是什么？”收到了成千上百条回复。 本来我以...",
          "commentable": true,
          "important_collection": null,
          "user": {
            "id": 12649257,
            "nickname": "叶上清之宿雨",
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
// 详情
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
    },
    {
      "is_author": false,
      "liked_note": false,
      "public_comment_count": 11,
      "featured_comments_count": 0,
      "likes_count": 46,
      "trial_open": false,
      "description": "最近桑塔搬家了，换了座新的城市，也换了个新的小窝。虽然是租来的房子，但看着空荡荡的新家，爱折腾的桑塔哪里闲得住。 在跑了三趟宜家，收了二十个快递包裹，收拾了一周之后... 桑...",
      "id": 30166493,
      "slug": "497a01b22680",
      "public_title": "出租屋大改造 ｜ 提升幸福感的实用家居单品（上）",
      "free_content": "<div class=\"image-package\">\n<div class=\"image-container\" style=\"max-width: 700px; max-height: 510px;\">\n<div class=\"image-container-fill\" style=\"padding-bottom: 72.98%;\"></div>\n<div class=\"image-view\" data-width=\"3264\" data-height=\"2382\"><img data-original-src=\"//upload-images.jianshu.io/upload_images/7167123-d82671b200a58438.jpg\" data-original-width=\"3264\" data-original-height=\"2382\" data-original-format=\"image/jpeg\" data-original-filesize=\"9383225\"></div>\n</div>\n<div class=\"image-caption\"></div>\n</div><p>最近桑塔搬家了，换了座新的城市，也换了个新的小窝。虽然是租来的房子，但看着空荡荡的新家，爱折腾的桑塔哪里闲得住。<br></p><p>在跑了三趟宜家，收了二十个快递包裹，收拾了一周之后... 桑塔的新家终于有些模样了！<br></p><div class=\"image-package\">\n<div class=\"image-container\" style=\"max-width: 700px; max-height: 531px;\">\n<div class=\"image-container-fill\" style=\"padding-bottom: 75.94999999999999%;\"></div>\n<div class=\"image-view\" data-width=\"3223\" data-height=\"2448\"><img data-original-src=\"//upload-images.jianshu.io/upload_images/7167123-34a1b1e494d448f6.jpg\" data-original-width=\"3223\" data-original-height=\"2448\" data-original-format=\"image/jpeg\" data-original-filesize=\"8209225\"></div>\n</div>\n<div class=\"image-caption\"></div>\n</div><p>PS:  因为是租房，而且房东房子新装修不久，这次的改造基本就是各种平价家居小物的买买买～<br></p><p>想借此机会把淘来的一些好物分享给大家，无论是出租屋还是自己家，只要用心装饰，幸福真的不贵！</p><p> 今天先分享客厅和餐厅部分的装饰，下周会给大家带来家里其他角落的装饰，请大家多多关注！</p><hr><p>【客厅篇】<br></p><p>客厅是桑塔花了最多心思的地方，因为房子刚拿到时，客厅里只有孤零零一个沙发… 非常凄凉… <br></p><div class=\"image-package\">\n<div class=\"image-container\" style=\"max-width: 700px; max-height: 477px;\">\n<div class=\"image-container-fill\" style=\"padding-bottom: 68.2%;\"></div>\n<div class=\"image-view\" data-width=\"1374\" data-height=\"937\"><img data-original-src=\"//upload-images.jianshu.io/upload_images/7167123-0544b0f8b79e03cd.jpg\" data-original-width=\"1374\" data-original-height=\"937\" data-original-format=\"image/jpeg\" data-original-filesize=\"250133\"></div>\n</div>\n<div class=\"image-caption\"></div>\n</div><h4>客厅挂画</h4><p>考虑到客厅的总体风格，这次桑塔选择了“沙漠旅行”系列，远离时间和城市的喧嚣，想要一段逃离桎梏的难忘旅行。<br></p><div class=\"image-package\">\n<div class=\"image-container\" style=\"max-width: 700px; max-height: 711px;\">\n<div class=\"image-container-fill\" style=\"padding-bottom: 101.63%;\"></div>\n<div class=\"image-view\" data-width=\"800\" data-height=\"813\"><img data-original-src=\"//upload-images.jianshu.io/upload_images/7167123-c0e0a1b1258eaa99.jpg\" data-original-width=\"800\" data-original-height=\"813\" data-original-format=\"image/jpeg\" data-original-filesize=\"183606\"></div>\n</div>\n<div class=\"image-caption\"></div>\n</div><p>这个系列总共三幅挂画，桑塔选了其中两幅，如果客厅够大的朋友可以买三幅，效果也会更好～ </p><p>挂画采用油画布质地，有多种尺寸和画框颜色可选，痴迷北欧风的桑塔选择了暗金色的框，实物挂起来很是洋气。</p><p>当然，家里的各个房间都可以用上挂画，下图是桑塔过去出租屋的房间图，挂上画也感觉温馨了。<br></p><div class=\"image-package\">\n<div class=\"image-container\" style=\"max-width: 700px; max-height: 525px;\">\n<div class=\"image-container-fill\" style=\"padding-bottom: 75.01%;\"></div>\n<div class=\"image-view\" data-width=\"2553\" data-height=\"1915\"><img data-original-src=\"//upload-images.jianshu.io/upload_images/7167123-24c1f4aafa3ce6ce.jpg\" data-original-width=\"2553\" data-original-height=\"1915\" data-original-format=\"image/jpeg\" data-original-filesize=\"1312065\"></div>\n</div>\n<div class=\"image-caption\"></div>\n</div><p><br></p><p></p><h4>宜家套桌</h4><p>这次茶几选择的是宜家的纳瓦斯塔套桌，两件套的设计，可拼可拆。</p><div class=\"image-package\">\n<div class=\"image-container\" style=\"max-width: 700px; max-height: 550px;\">\n<div class=\"image-container-fill\" style=\"padding-bottom: 73.33%;\"></div>\n<div class=\"image-view\" data-width=\"750\" data-height=\"550\"><img data-original-src=\"//upload-images.jianshu.io/upload_images/7167123-93de39928b6183fc.jpg\" data-original-width=\"750\" data-original-height=\"550\" data-original-format=\"image/jpeg\" data-original-filesize=\"29780\"></div>\n</div>\n<div class=\"image-caption\"></div>\n</div><p>一般情况下，桑塔都把它放在客厅里当茶几，有需要时也会搬着小桌到阳台上当飘窗桌，简单又实用～</p><p>桌子颜色有黑、白和原木色三种可选，大家可以根据自己的家装风格来选择，拼装起来也非常容易，10分钟easy搞定～</p><p><br></p><h4>落地灯</h4><p>家装感觉温馨的小心机，一定是各种光源的运用～ 大的灯源房东已经装好了，最后决定在客厅再添一盏落地灯。<br></p><div class=\"image-package\">\n<div class=\"image-container\" style=\"max-width: 700px; max-height: 933px;\">\n<div class=\"image-container-fill\" style=\"padding-bottom: 133.32999999999998%;\"></div>\n<div class=\"image-view\" data-width=\"3024\" data-height=\"4032\"><img data-original-src=\"//upload-images.jianshu.io/upload_images/7167123-49092cca51f06281.jpg\" data-original-width=\"3024\" data-original-height=\"4032\" data-original-format=\"image/jpeg\" data-original-filesize=\"2015051\"></div>\n</div>\n<div class=\"image-caption\"></div>\n</div><p>翻了很多店铺找到这一款，白色灯罩配上原木支架，样式简单而百搭。<br></p><div class=\"image-package\">\n<div class=\"image-container\" style=\"max-width: 700px; max-height: 716px;\">\n<div class=\"image-container-fill\" style=\"padding-bottom: 102.41%;\"></div>\n<div class=\"image-view\" data-width=\"790\" data-height=\"809\"><img data-original-src=\"//upload-images.jianshu.io/upload_images/7167123-36b32b36c94a6fe5.jpg\" data-original-width=\"790\" data-original-height=\"809\" data-original-format=\"image/jpeg\" data-original-filesize=\"162970\"></div>\n</div>\n<div class=\"image-caption\"></div>\n</div><p>自带的遥控可以随时调控白光、中性光和暖光三种LED光源，符合不同场景的使用需求。<br></p><p>有时晚上在客厅看书，桑塔会选择把大灯关掉，再把落地灯调到暖光模式，温馨的同时还有一丝莫名的浪漫感哈哈。</p><p></p><h4>抱枕＋蒲团垫</h4><p>抱枕和坐垫，淘宝上真是挑花眼的节奏，逛了很多店，每一个都超想要～<br></p><div class=\"image-package\">\n<div class=\"image-container\" style=\"max-width: 453px; max-height: 272px;\">\n<div class=\"image-container-fill\" style=\"padding-bottom: 60.040000000000006%;\"></div>\n<div class=\"image-view\" data-width=\"453\" data-height=\"272\"><img data-original-src=\"//upload-images.jianshu.io/upload_images/7167123-d7eb9b89e2cad209.jpg\" data-original-width=\"453\" data-original-height=\"272\" data-original-format=\"image/png\" data-original-filesize=\"203258\"></div>\n</div>\n<div class=\"image-caption\"></div>\n</div><p>平时在沙发上靠着软软的抱枕，看电视时手里再抱一个，严重拉长我待在沙发上的时间！<br></p><p>如果喜欢经常换风格的朋友，也可以选择多买几个枕套，偶尔换一换，让家里保持新鲜感～<br></p><div class=\"image-package\">\n<div class=\"image-container\" style=\"max-width: 400px; max-height: 400px;\">\n<div class=\"image-container-fill\" style=\"padding-bottom: 100.0%;\"></div>\n<div class=\"image-view\" data-width=\"400\" data-height=\"400\"><img data-original-src=\"//upload-images.jianshu.io/upload_images/7167123-99abf3a66920c6fd.jpg\" data-original-width=\"400\" data-original-height=\"400\" data-original-format=\"image/jpeg\" data-original-filesize=\"70907\"></div>\n</div>\n<div class=\"image-caption\"></div>\n</div><p>因为房东自购的沙发比较迷你，这次还挑选了三个蒲团垫放在地毯上，偶尔家里来了客人，大家可以坐在一起聊天、喝酒、谈人生。</p><p></p><h3>【餐厅篇】</h3><p>这次房子的餐厅区域比较大，所以桑塔把它划分成了两个功能区，一块是正常的就餐区，一边则充当了书房的作用。<br></p><div class=\"image-package\">\n<div class=\"image-container\" style=\"max-width: 700px; max-height: 430px;\">\n<div class=\"image-container-fill\" style=\"padding-bottom: 61.519999999999996%;\"></div>\n<div class=\"image-view\" data-width=\"3264\" data-height=\"2008\"><img data-original-src=\"//upload-images.jianshu.io/upload_images/7167123-ff19bdf1cf47dd37.jpg\" data-original-width=\"3264\" data-original-height=\"2008\" data-original-format=\"image/jpeg\" data-original-filesize=\"8124428\"></div>\n</div>\n<div class=\"image-caption\">图片发自简书App</div>\n</div><p>平时不是吃饭时间，桑塔也习惯在餐桌上码字或办公，既方便从书架上拿东西，也可以享受客厅的视野和中央空调！<br></p><p></p><h4>世界地图画板</h4><p>从小一直对世界地图有着莫名的好感，所以在宜家逛到这幅环球旅行的黑板就立马搬回了家。<br></p><div class=\"image-package\">\n<div class=\"image-container\" style=\"max-width: 700px; max-height: 700px;\">\n<div class=\"image-container-fill\" style=\"padding-bottom: 100.14%;\"></div>\n<div class=\"image-view\" data-width=\"709\" data-height=\"710\"><img data-original-src=\"//upload-images.jianshu.io/upload_images/7167123-3665047671b711c0.jpg\" data-original-width=\"709\" data-original-height=\"710\" data-original-format=\"image/jpeg\" data-original-filesize=\"99707\"></div>\n</div>\n<div class=\"image-caption\"></div>\n</div><p>本来想挂在餐厅的墙上，怎奈敲无痕钉时才发现那面墙无法挂画，无奈只能放在书柜上，竟然意外地很合适。<br></p><p>除了装饰作用，它也是一块便捷的黑板，大家可以用粉笔在上面留言，或者计划下一次的旅行目的地～</p><p></p><h4>小鹿门帘</h4><p>书柜的旁边是客卧兼书房，但房东并没有在这个位置装门。为了增强隐私性，方便朋友来家里玩时小住，我在淘宝找到了这款门帘。<br></p><div class=\"image-package\">\n<div class=\"image-container\" style=\"max-width: 700px; max-height: 700px;\">\n<div class=\"image-container-fill\" style=\"padding-bottom: 100.0%;\"></div>\n<div class=\"image-view\" data-width=\"800\" data-height=\"800\"><img data-original-src=\"//upload-images.jianshu.io/upload_images/7167123-9e9ec9c59c535a4c.jpg\" data-original-width=\"800\" data-original-height=\"800\" data-original-format=\"image/jpeg\" data-original-filesize=\"133885\"></div>\n</div>\n<div class=\"image-caption\"></div>\n</div><p>浅绿的配色加上可爱的雪花鹿，给家里增添了一丝活泼信息。门帘自带悬挂杆，挂上后刚好可以挡掉一半的门，好看又实用。<br></p><p>如果家里没有需要隔断的空间，门帘也可以挂在门上，接下来桑塔打算给家里的厨房门也配一块！</p><p></p><h4>田园餐桌布</h4><p>搬家前，桑塔也给家里买过白色格子的餐布，可惜好看不耐用。<br></p><div class=\"image-package\">\n<div class=\"image-container\" style=\"max-width: 700px; max-height: 540px;\">\n<div class=\"image-container-fill\" style=\"padding-bottom: 77.21000000000001%;\"></div>\n<div class=\"image-view\" data-width=\"3264\" data-height=\"2520\"><img data-original-src=\"//upload-images.jianshu.io/upload_images/7167123-e5d7d3db23b2d8b8.jpg\" data-original-width=\"3264\" data-original-height=\"2520\" data-original-format=\"image/jpeg\" data-original-filesize=\"9383550\"></div>\n</div>\n<div class=\"image-caption\"></div>\n</div><p>每次不小心掉上油渍或者果汁，就很难再洗干净，直到朋友给我推荐了这款PVC桌布… 竟然还有这样的操作！<br></p><div class=\"image-package\">\n<div class=\"image-container\" style=\"max-width: 700px; max-height: 700px;\">\n<div class=\"image-container-fill\" style=\"padding-bottom: 100.0%;\"></div>\n<div class=\"image-view\" data-width=\"800\" data-height=\"800\"><img data-original-src=\"//upload-images.jianshu.io/upload_images/7167123-791d581944c210f8.jpg\" data-original-width=\"800\" data-original-height=\"800\" data-original-format=\"image/jpeg\" data-original-filesize=\"173460\"></div>\n</div>\n<div class=\"image-caption\"></div>\n</div><p>同样的款式，比起传统布艺桌布，PVC材质可以有效防水、防油和防烫，大大增加桌布的使用寿命，也不用再担心桌布洗不干净了～</p><p></p><h4>Ins风花束</h4><p>北欧风必备的摆拍神器，当然是各种Ins风的花配宽口瓶。一直很喜欢尤加利的颜色和味道，摆在家里显得沉稳和安静。<br></p><div class=\"image-package\">\n<div class=\"image-container\" style=\"max-width: 700px; max-height: 933px;\">\n<div class=\"image-container-fill\" style=\"padding-bottom: 133.32999999999998%;\"></div>\n<div class=\"image-view\" data-width=\"2448\" data-height=\"3264\"><img data-original-src=\"//upload-images.jianshu.io/upload_images/7167123-5c216346080e05b4.jpg\" data-original-width=\"2448\" data-original-height=\"3264\" data-original-format=\"image/jpeg\" data-original-filesize=\"7266723\"></div>\n</div>\n<div class=\"image-caption\"></div>\n</div><p>这次买的是永生型的尤加利，比自然风干的叶片保存时间更长，也不容易凋谢和掉落。<br></p><p>除了单独买尤加利，也可以配上白色的木棉花，花语是珍惜身边人，自带一种岁月静好的美感。</p><p></p><h4>电表箱装饰画</h4><p>房子餐厅的位置本身有一个外露的电表箱，很不好看。如果买一副普通的挂画，又担心平时检查电表箱不方便。<br></p><div class=\"image-package\">\n<div class=\"image-container\" style=\"max-width: 700px; max-height: 525px;\">\n<div class=\"image-container-fill\" style=\"padding-bottom: 75.0%;\"></div>\n<div class=\"image-view\" data-width=\"3264\" data-height=\"2448\"><img data-original-src=\"//upload-images.jianshu.io/upload_images/7167123-4941548c8778e3e3.jpg\" data-original-width=\"3264\" data-original-height=\"2448\" data-original-format=\"image/jpeg\" data-original-filesize=\"6343727\"></div>\n</div>\n<div class=\"image-caption\"></div>\n</div><p>淘宝上搜索时发现了这款贴心的装饰画，掀盖式的设计，可以随时打开，也可以自由定制画面和尺寸，非常实用。</p><hr><p>下周我们会讲到家里其他空间的装饰～<br></p><p>很适合送给刚搬家的朋友做乔迁礼物</p><p>感兴趣的朋友请多多关注桑塔露露的礼物盒</p>",
      "paid_type": "free",
      "first_shared_at": "2018-06-30T11:25:11.000+08:00",
      "notebook_id": 14940152,
      "commentable": true,
      "wordage": 1775,
      "paid_content_accessible": false,
      "share_image_url": "http://upload-images.jianshu.io/upload_images/7167123-34a1b1e494d448f6.jpg",
      "show_paid_comment_tips": false,
      "user": {
        "id": 7167123,
        "slug": "ef3c7b0b9216",
        "nickname": "桑塔露露的礼物盒",
        "gender": 2,
        "avatar": "http://upload.jianshu.io/users/upload_avatars/7167123/fdb7360b-9ce9-499d-a1d9-2d5a970bf431.jpeg",
        "intro": "欢迎关注公众号桑塔露露的礼物盒。您安心上学、上班，贡献GDP，让我们来为您挑！礼！物！\r",
        "wordage": 199362,
        "likes_count": 1271,
        "badges": [
          {
            "text": "生活达人",
            "intro_url": "http://www.jianshu.com/p/d1d89ed69098",
            "image_url": "http://upload.jianshu.io/user_badge/ac944899-bf5f-40df-b265-7d947fadd946",
            "icon": "other"
          }
        ],
        "vip": null,
        "liked_by_user": false,
        "liked_user": false
      },
      "distribution_more_earn_percent": 24
    },
    {
      "is_author": false,
      "liked_note": false,
      "public_comment_count": 3,
      "featured_comments_count": 0,
      "likes_count": 21,
      "trial_open": false,
      "description": "1 欣云户外专营店 这三款产品平时出差或者旅行，用来装我们那一堆化妆品非常合适，简单方便，便于携带。 这款一次性压缩洗脸巾，不管是户外旅行还是在家，用起来非常方便，比我们的毛...",
      "id": 31955776,
      "slug": "c1064e8b0300",
      "public_title": "看了让你爱不释手的5家店铺",
      "free_content": "<h3>1 欣云户外专营店</h3><p></p><div class=\"image-package\">\n<div class=\"image-container\" style=\"max-width: 700px; max-height: 700px;\">\n<div class=\"image-container-fill\" style=\"padding-bottom: 100.0%;\"></div>\n<div class=\"image-view\" data-width=\"800\" data-height=\"800\"><img data-original-src=\"//upload-images.jianshu.io/upload_images/2718584-961bf021e17ab75b.jpg\" data-original-width=\"800\" data-original-height=\"800\" data-original-format=\"image/jpeg\" data-original-filesize=\"51921\"></div>\n</div>\n<div class=\"image-caption\">图片发自简书App</div>\n</div><p></p><div class=\"image-package\">\n<div class=\"image-container\" style=\"max-width: 700px; max-height: 933px;\">\n<div class=\"image-container-fill\" style=\"padding-bottom: 133.32999999999998%;\"></div>\n<div class=\"image-view\" data-width=\"720\" data-height=\"960\"><img data-original-src=\"//upload-images.jianshu.io/upload_images/2718584-0670d08af903afb9.jpg\" data-original-width=\"720\" data-original-height=\"960\" data-original-format=\"image/jpeg\" data-original-filesize=\"54376\"></div>\n</div>\n<div class=\"image-caption\">图片发自简书App</div>\n</div><div class=\"image-package\">\n<div class=\"image-container\" style=\"max-width: 700px; max-height: 933px;\">\n<div class=\"image-container-fill\" style=\"padding-bottom: 133.32999999999998%;\"></div>\n<div class=\"image-view\" data-width=\"720\" data-height=\"960\"><img data-original-src=\"//upload-images.jianshu.io/upload_images/2718584-233abe9d4c2db4a7.jpg\" data-original-width=\"720\" data-original-height=\"960\" data-original-format=\"image/jpeg\" data-original-filesize=\"44038\"></div>\n</div>\n<div class=\"image-caption\">图片发自简书App</div>\n</div><br><p>这三款产品平时出差或者旅行，用来装我们那一堆化妆品非常合适，简单方便，便于携带。</p><p></p><div class=\"image-package\">\n<div class=\"image-container\" style=\"max-width: 700px; max-height: 933px;\">\n<div class=\"image-container-fill\" style=\"padding-bottom: 133.32999999999998%;\"></div>\n<div class=\"image-view\" data-width=\"720\" data-height=\"960\"><img data-original-src=\"//upload-images.jianshu.io/upload_images/2718584-4d3b7a5e3db4dd9f.jpg\" data-original-width=\"720\" data-original-height=\"960\" data-original-format=\"image/jpeg\" data-original-filesize=\"282331\"></div>\n</div>\n<div class=\"image-caption\">图片发自简书App</div>\n</div><p>这款一次性压缩洗脸巾，不管是户外旅行还是在家，用起来非常方便，比我们的毛巾干净，保持脸部清洁。</p><p></p><div class=\"image-package\">\n<div class=\"image-container\" style=\"max-width: 700px; max-height: 933px;\">\n<div class=\"image-container-fill\" style=\"padding-bottom: 133.32999999999998%;\"></div>\n<div class=\"image-view\" data-width=\"720\" data-height=\"960\"><img data-original-src=\"//upload-images.jianshu.io/upload_images/2718584-dee459f72047571b.jpg\" data-original-width=\"720\" data-original-height=\"960\" data-original-format=\"image/jpeg\" data-original-filesize=\"51889\"></div>\n</div>\n<div class=\"image-caption\">图片发自简书App</div>\n</div><p>这款马桶垫可谓是洁癖人群的福利，平时去公共场所，出差在外，带一包，再也不用担心想上厕所又怕脏的问题啦。</p><p></p><div class=\"image-package\">\n<div class=\"image-container\" style=\"max-width: 700px; max-height: 933px;\">\n<div class=\"image-container-fill\" style=\"padding-bottom: 133.32999999999998%;\"></div>\n<div class=\"image-view\" data-width=\"720\" data-height=\"960\"><img data-original-src=\"//upload-images.jianshu.io/upload_images/2718584-018e4e8c69f34375.jpg\" data-original-width=\"720\" data-original-height=\"960\" data-original-format=\"image/jpeg\" data-original-filesize=\"281277\"></div>\n</div>\n<div class=\"image-caption\">图片发自简书App</div>\n</div><p>这个隔脏睡袋拯救了我，平时出门在外总带着自己的床单，睡觉不敢脱衣服，哪怕是告诉我已经消毒过，睡完浑身都不舒服，有了它，再也不用担心啦。</p><p>附上链接:【欣云户外专营店】，復·制这段描述€I5tcb1Y4XQc€后咑閞手机淘宝或者用浏览器咑閞http://m.tb.cn/h.33YL65U?sm=239155查看</p><h2>2 安娜女王镜梳网</h2><p></p><div class=\"image-package\">\n<div class=\"image-container\" style=\"max-width: 700px; max-height: 700px;\">\n<div class=\"image-container-fill\" style=\"padding-bottom: 100.0%;\"></div>\n<div class=\"image-view\" data-width=\"714\" data-height=\"714\"><img data-original-src=\"//upload-images.jianshu.io/upload_images/2718584-317d456888b4537e.jpg\" data-original-width=\"714\" data-original-height=\"714\" data-original-format=\"image/jpeg\" data-original-filesize=\"238451\"></div>\n</div>\n<div class=\"image-caption\">图片发自简书App</div>\n</div><p></p><div class=\"image-package\">\n<div class=\"image-container\" style=\"max-width: 700px; max-height: 700px;\">\n<div class=\"image-container-fill\" style=\"padding-bottom: 100.0%;\"></div>\n<div class=\"image-view\" data-width=\"800\" data-height=\"800\"><img data-original-src=\"//upload-images.jianshu.io/upload_images/2718584-35b1818cba980967.jpg\" data-original-width=\"800\" data-original-height=\"800\" data-original-format=\"image/jpeg\" data-original-filesize=\"478242\"></div>\n</div>\n<div class=\"image-caption\">图片发自简书App</div>\n</div><p></p><div class=\"image-package\">\n<div class=\"image-container\" style=\"max-width: 700px; max-height: 700px;\">\n<div class=\"image-container-fill\" style=\"padding-bottom: 100.0%;\"></div>\n<div class=\"image-view\" data-width=\"800\" data-height=\"800\"><img data-original-src=\"//upload-images.jianshu.io/upload_images/2718584-ccb647813005c258.jpg\" data-original-width=\"800\" data-original-height=\"800\" data-original-format=\"image/jpeg\" data-original-filesize=\"407810\"></div>\n</div>\n<div class=\"image-caption\">图片发自简书App</div>\n</div><p>败家娘们，还在担心你们的气垫，口红无处安放吗？自从发现了这家店，我的化妆桌从此井井有条，再也没人敢说我一天不收拾啦！更多的好东西的打开方式自己去探索吧。</p><p>附上链接:【安娜女王镜梳网批发店】，復·制这段描述€8nb7b1YRqwc€后咑閞手机淘宝或者用浏览器咑閞http://m.tb.cn/h.330HvV9?sm=38be20查看</p><h2>3 一纸花约旗舰店</h2><p></p><div class=\"image-package\">\n<div class=\"image-container\" style=\"max-width: 700px; max-height: 700px;\">\n<div class=\"image-container-fill\" style=\"padding-bottom: 100.0%;\"></div>\n<div class=\"image-view\" data-width=\"800\" data-height=\"800\"><img data-original-src=\"//upload-images.jianshu.io/upload_images/2718584-2582e9a1abed4469.jpg\" data-original-width=\"800\" data-original-height=\"800\" data-original-format=\"image/jpeg\" data-original-filesize=\"54391\"></div>\n</div>\n<div class=\"image-caption\">图片发自简书App</div>\n</div><p></p><div class=\"image-package\">\n<div class=\"image-container\" style=\"max-width: 700px; max-height: 700px;\">\n<div class=\"image-container-fill\" style=\"padding-bottom: 100.0%;\"></div>\n<div class=\"image-view\" data-width=\"800\" data-height=\"800\"><img data-original-src=\"//upload-images.jianshu.io/upload_images/2718584-b6c2d4ce4d19cdc3.jpg\" data-original-width=\"800\" data-original-height=\"800\" data-original-format=\"image/jpeg\" data-original-filesize=\"131935\"></div>\n</div>\n<div class=\"image-caption\">图片发自简书App</div>\n</div><p></p><div class=\"image-package\">\n<div class=\"image-container\" style=\"max-width: 700px; max-height: 700px;\">\n<div class=\"image-container-fill\" style=\"padding-bottom: 100.0%;\"></div>\n<div class=\"image-view\" data-width=\"800\" data-height=\"800\"><img data-original-src=\"//upload-images.jianshu.io/upload_images/2718584-0ec0bd061bc24961.jpg\" data-original-width=\"800\" data-original-height=\"800\" data-original-format=\"image/jpeg\" data-original-filesize=\"47502\"></div>\n</div>\n<div class=\"image-caption\">图片发自简书App</div>\n</div><p>小样，我不告诉你你知道这是啥嘛，咳咳，快到七夕啦，礼物都准备好了吗？这家的巧克力和糖果都很有情调，买上送给心仪的他(她)，可能她不再爱你，从此就爱上这家店啦。</p><p>附上链接:【一纸花约旗舰店】，復·制这段描述€ikXMb1Y9Czz€后咑閞手机淘宝或者用浏览器咑閞http://m.tb.cn/h.33YE1uv?sm=f4e47f查看</p><h2>4 MISyy永远</h2><p></p><div class=\"image-package\">\n<div class=\"image-container\" style=\"max-width: 628px; max-height: 636px;\">\n<div class=\"image-container-fill\" style=\"padding-bottom: 101.27%;\"></div>\n<div class=\"image-view\" data-width=\"628\" data-height=\"636\"><img data-original-src=\"//upload-images.jianshu.io/upload_images/2718584-e63051c8a861f61b.jpg\" data-original-width=\"628\" data-original-height=\"636\" data-original-format=\"image/jpeg\" data-original-filesize=\"153136\"></div>\n</div>\n<div class=\"image-caption\">图片发自简书App</div>\n</div><p></p><div class=\"image-package\">\n<div class=\"image-container\" style=\"max-width: 700px; max-height: 700px;\">\n<div class=\"image-container-fill\" style=\"padding-bottom: 100.0%;\"></div>\n<div class=\"image-view\" data-width=\"700\" data-height=\"700\"><img data-original-src=\"//upload-images.jianshu.io/upload_images/2718584-02d28593bbc36f85.jpg\" data-original-width=\"700\" data-original-height=\"700\" data-original-format=\"image/jpeg\" data-original-filesize=\"54863\"></div>\n</div>\n<div class=\"image-caption\">图片发自简书App</div>\n</div><p></p><div class=\"image-package\">\n<div class=\"image-container\" style=\"max-width: 700px; max-height: 700px;\">\n<div class=\"image-container-fill\" style=\"padding-bottom: 100.0%;\"></div>\n<div class=\"image-view\" data-width=\"800\" data-height=\"800\"><img data-original-src=\"//upload-images.jianshu.io/upload_images/2718584-57336a5b62d518e6.jpg\" data-original-width=\"800\" data-original-height=\"800\" data-original-format=\"image/jpeg\" data-original-filesize=\"42757\"></div>\n</div>\n<div class=\"image-caption\">图片发自简书App</div>\n</div><p>这些好看的贴纸和胶带平时用来做手账简直美得不要不要的，当然，他们家还有很多好看的爱，礼物袋，喜欢的自己随意买，反正不花我的钱。</p><p>附上链接:【MISyy永远】，復·制这段描述€OIIJb1YmTC6€后咑閞手机淘宝或者用浏览器咑閞http://m.tb.cn/h.3WEdmD1?sm=e56b69查看</p><h2>5 大花饰物店</h2><p></p><div class=\"image-package\">\n<div class=\"image-container\" style=\"max-width: 700px; max-height: 700px;\">\n<div class=\"image-container-fill\" style=\"padding-bottom: 100.0%;\"></div>\n<div class=\"image-view\" data-width=\"800\" data-height=\"800\"><img data-original-src=\"//upload-images.jianshu.io/upload_images/2718584-9cdc2657893c82a4.jpg\" data-original-width=\"800\" data-original-height=\"800\" data-original-format=\"image/jpeg\" data-original-filesize=\"47568\"></div>\n</div>\n<div class=\"image-caption\">图片发自简书App</div>\n</div><p></p><div class=\"image-package\">\n<div class=\"image-container\" style=\"max-width: 700px; max-height: 700px;\">\n<div class=\"image-container-fill\" style=\"padding-bottom: 100.0%;\"></div>\n<div class=\"image-view\" data-width=\"800\" data-height=\"800\"><img data-original-src=\"//upload-images.jianshu.io/upload_images/2718584-d27eab1e8229751a.jpg\" data-original-width=\"800\" data-original-height=\"800\" data-original-format=\"image/jpeg\" data-original-filesize=\"151732\"></div>\n</div>\n<div class=\"image-caption\">图片发自简书App</div>\n</div><p></p><div class=\"image-package\">\n<div class=\"image-container\" style=\"max-width: 700px; max-height: 700px;\">\n<div class=\"image-container-fill\" style=\"padding-bottom: 100.0%;\"></div>\n<div class=\"image-view\" data-width=\"800\" data-height=\"800\"><img data-original-src=\"//upload-images.jianshu.io/upload_images/2718584-c9b44c307c475a0e.jpg\" data-original-width=\"800\" data-original-height=\"800\" data-original-format=\"image/jpeg\" data-original-filesize=\"47437\"></div>\n</div>\n<div class=\"image-caption\">图片发自简书App</div>\n</div><p>这些好看的耳钉银家就想自己藏着，但看在你们这么可爱的份上我就分享给你们吧，嘿嘿，不知道你们喜欢不，我是很喜欢啦！</p><p>附上链接:【「大花」饰物店】，復·制这段描述€7YHDb1YpVtU€后咑閞手机淘宝或者用浏览器咑閞http://m.tb.cn/h.331Zf4r?sm=a91131查看</p><p>各位宝宝，今天的分享就这么多，喜欢的就关注我吧，以后挖到便宜又好用的东西还会给大家继续分享呢！</p>",
      "paid_type": "free",
      "first_shared_at": "2018-08-07T15:05:34.000+08:00",
      "notebook_id": 5622265,
      "commentable": true,
      "wordage": 817,
      "paid_content_accessible": false,
      "share_image_url": "http://upload-images.jianshu.io/upload_images/2718584-961bf021e17ab75b.jpg",
      "show_paid_comment_tips": false,
      "user": {
        "id": 2718584,
        "slug": "2d495e5fd605",
        "nickname": "参差百态是生活",
        "gender": 0,
        "avatar": "http://upload.jianshu.io/users/upload_avatars/2718584/421b11d1-2b6e-436e-a9de-f54fe492166c.jpg",
        "intro": "hello✨大家好 我是一枚90后在校生🎓\n爱写作 爱摄影 更热爱生活 \n愿意与你们分享我的故...",
        "wordage": 9876,
        "likes_count": 150,
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
      "public_comment_count": 1890,
      "featured_comments_count": 5,
      "likes_count": 7901,
      "trial_open": false,
      "description": "- 1 - 为什么单身？因为想变成更好的自己啊 昨晚在微信后台发起了一个话题“你单身吗？单身多久了？在你单身的这段时间里，最大的改变是什么？”收到了成千上百条回复。 本来我以...",
      "id": 3588441,
      "slug": "1e4891ab59d8",
      "public_title": "单身是最好的升值期",
      "free_content": "<div class=\"image-package\">\n<div class=\"image-container\" style=\"max-width: 620px; max-height: 387px;\">\n<div class=\"image-container-fill\" style=\"padding-bottom: 62.419999999999995%;\"></div>\n<div class=\"image-view\" data-width=\"620\" data-height=\"387\"><img data-original-src=\"//upload-images.jianshu.io/upload_images/573708-3139c00b0d571cd9.jpg\" data-original-width=\"620\" data-original-height=\"387\" data-original-format=\"image/jpeg\" data-original-filesize=\"145400\"></div>\n</div>\n<div class=\"image-caption\"></div>\n</div><p><b>- 1 -</b><br></p><p><b>为什么单身？</b><b>因为想变成更好的自己啊</b></p><p><b></b></p><p>昨晚在微信后台发起了一个话题“你单身吗？单身多久了？在你单身的这段时间里，最大的改变是什么？”收到了成千上百条回复。</p><p>本来我以为，绝大多数人会觉得单身是件悲伤的事情，会因为单身直接或间接地给自己带去很多负面情绪，觉得自己孤独寂寞，心无所依。</p><p>但事实却恰恰相反。</p><p>九成以上的留言都是积极向上的，而且都是在非常明确地阐述，自己如何通过努力开始了新的生活，变成了更好的人。</p><p>老实说，有些留言真的让我眼眶温热。</p><p>有个女生跟我说，今年她29岁，毕业后在广州工作了8年，一直是单身。在这期间，她坚持锻炼，工作之余还经常给自己充电。爱时尚爱漂亮，一个人去过整个东南亚、台湾、欧洲。不是为了招蜂引蝶，只是为了成全更好的自己。</p><p>去年8月，她顺利拿到了墨尔本大学的offer，现在准备辞职滚去读书。</p><p>正当我钦佩她的勇气与果断时，她又向我爆料说，自己曾是一名专科生，在广州一边工作一边念中山大学的本科。考取本科文凭后，又考了学位证，然后申请读研，一路披荆斩棘。</p><p>她给我发来她健身时的照片——身材曼妙，气质不凡。我一下就喜欢上了这个姑娘。</p><p><b>谁说单身就一定非得和寂寞沾边？</b><b>单身恰恰是一个人最好的升值期。</b></p><p>有段话，她说得特别好，也彻彻底底地打动了我。</p><p>她说，“这些年来，我一直有个小小的梦想，就是有朝一日能够屌丝逆袭。为此我自学了日语，还学了古筝、爵士鼓。小时候家里条件只够读书，没钱培养兴趣，所以我想自己挣钱，一点一点去实现。也许现在是90后横行的时代，但我仍旧可以自信地说，从我现在的气质里，能够看到我读过的书，走过的路，还有我爱过的人。”</p><div class=\"image-package\">\n<div class=\"image-container\" style=\"max-width: 510px; max-height: 1054px;\">\n<div class=\"image-container-fill\" style=\"padding-bottom: 150.59%;\"></div>\n<div class=\"image-view\" data-width=\"510\" data-height=\"768\"><img data-original-src=\"//upload-images.jianshu.io/upload_images/573708-9457b1ce3677d386.jpg\" data-original-width=\"510\" data-original-height=\"768\" data-original-format=\"image/jpeg\" data-original-filesize=\"269065\"></div>\n</div>\n<div class=\"image-caption\"></div>\n</div><p><b>- 2 -</b><b></b></p><p><b>发现没有？</b><b>其实你也可以是自己的靠山</b></p><p><b></b></p><p>很多读者在留言里都提到了<b>独立</b>。</p><p>有人说，单身一年半了，这段时间最大的改变就是变得独立有个性了。</p><p>有人说，这几年我最大的改变是变得外在很独立。一个人吃饭，一个人逛街，一个人上课，一个人旅行，一个人追剧。很习以为常，也不觉得有什么。</p><p>有人说，单身了两年多，不再依赖谁，独立很多，有更多的时间去思考和学习。</p><p>也有人说，单身的日子里，学到最多的是能够独立面对一些人一些事，学会了一个人静处，学会了享受寂寞。</p><p>突然想起自己也曾有过很长一段时间的单身期，独来独往，做什么都是一个人。</p><p>刚开始确实有些不适应，身边没有几个能够说得上话的人，觉得不习惯，觉得心中有股落寞像颜料般晕染开来，渐渐侵蚀了整个胸腔，闷得透不过气。</p><p><b>后来，我调整了自己的心态，看淡了很多事，变得释然，也学会了反省。</b>尝试着与孤独对话，尝试着去做出一点改变。</p><p><b>我愈发清楚地知道自己想要什么了，并且愈发渴望让自己变得优秀。</b>于是我一个人学习、锻炼、思考，把更多的时间花在提升自我价值上。</p><p>我开始录电台，每个月看一本书，并坚持写作。</p><p>当我把注意力集中到某件我十分感兴趣，或是我十分想要去做好的事情上后，我发现我再也没有理由去愤慨，去忧伤或是去哀怨了。</p><p>因为想要把生活过的更精致，我养成了许多从前不曾有过的好习惯。</p><p>因为坚持与投入，使我迅速在新兴领域崭露头角，拓宽了人脉，也因此获得了众多机遇。</p><p>很多事情都是相辅相成的，没有付出就没有回报，没有耕耘又谈何收获？</p><p><b>你要把孤独转化成一种动力，一种去开疆辟土的信心与勇气，而不是呆在原地无所作为，让自卑与空洞肆意生长。</b></p><p>由于生活变得愈发精彩与充实，我在不知不觉中变得自信、乐观、开朗。</p><p><b>单身，让我学会了与自己相处。</b>许多从前需要依赖别人的事，最后都由自己解决。从“习惯依赖他人”到“凡事靠自己”，我渐渐变成了一个思想独立，行为独立，能够成为自己靠山的人。这是单身带给我的成长，也是成长带给我的蜕变。我开始真正走向成熟，不再是昨天那个一直站在原地揉眼睛的孩子。</p><div class=\"image-package\">\n<div class=\"image-container\" style=\"max-width: 700px; max-height: 788px;\">\n<div class=\"image-container-fill\" style=\"padding-bottom: 112.57%;\"></div>\n<div class=\"image-view\" data-width=\"700\" data-height=\"788\"><img data-original-src=\"//upload-images.jianshu.io/upload_images/573708-1d1d99ee20529499.jpeg\" data-original-width=\"700\" data-original-height=\"788\" data-original-format=\"image/jpeg\" data-original-filesize=\"102761\"></div>\n</div>\n<div class=\"image-caption\"></div>\n</div><p><b>- 3 -</b><b><br></b></p><p><b>即使单身，</b><b>你一样可以过得很好</b></p><p><b></b></p><p><b></b></p><p>我有个朋友，单身快五年了。</p><p>刚和前男友分手的时候痛不欲生，觉得天都要塌下来了。她说她从没想过他会离开，她说她没了他会活不下去。</p><p>可是后来呢？她照样一个人活得好好的。</p><p>她减肥瘦身，配了隐形眼镜，学习化妆，把自己打扮得美美的；她爱上了夜跑，发现原来夜跑那么有趣，从前对跑步恨之入骨的她也能在操场开心地跑两三公里了；她去了那个原来说好要一起去的地方，才发现，没有他风景可以一样美好；她开始看一些以前吵着要看的书，开始着手做比赛，开始参加字幕组……</p><p><b>“</b><b>一个人并没有多可怜，也习惯了走夜路。没有他，我一样可以很好。</b><b>”</b>她说。</p><p>周围陆陆续续有人夸她是白富美，只有她自己知道，曾经的她不过是只丑小鸭。但如今，她早已不是当年的她。</p><p>“恢复单身后才发现，自己从前可真是矫情啊。尽管还是单身，但却是有底气且不将就的单身了吧。”</p><p><b>单身是一种生活状态，</b><b>信奉单身也可以过得很幸福。</b></p><p>你可以每年给自己安排一次旅行，想去哪儿就去哪儿，想去多久就去多久；你可以把原来煲电话粥的时间放在夜读上，在一次次思想的碰撞中提高自己的涵养；你可以有更多的时间用来陪伴家人，与朋友叙旧；你可以自由自在，尝试新的事物，做自己喜欢做的事。<br></p><p>总之，<b>即使是一个人，你一样可以把日子过得精彩丰呈。</b></p><p>这世上没有谁离了谁是活不下去的，上天在为你关上门的同时必定会为你打开一扇窗。而这扇窗，就是一个契机，一个让你去丰富自我，完善自我的机会。</p><blockquote><p>《巴黎假期》中，古天乐饰演的角色林俊杰有句很经典的台词：“七年的时间，就可以把我们全身的细胞都更换一遍，一个旧细胞都没有。所有不开心的事，都会忘得干干净净。”</p></blockquote><p>是啊，即使你曾在感情中受过伤，那又怎么样呢？时间是块橡皮擦，总有一天会帮你擦去那些伤疤。<b>单身不可怕，可怕的是一直放不下。能够伤害你的，从来不是伤害本身，而是你自己。</b></p><p><b></b></p><p>要想告别过去那个懦弱的你，失败的你，就必须学会及时斩仓。好好爱自己，学会坚强、独立，学会自己制造阳光。生活不止只有苟且，还有诗和远方。一个人的日子里，你要放下，你要沉淀，还要懂得体谅。</p><div class=\"image-package\">\n<div class=\"image-container\" style=\"max-width: 500px; max-height: 331px;\">\n<div class=\"image-container-fill\" style=\"padding-bottom: 66.2%;\"></div>\n<div class=\"image-view\" data-width=\"500\" data-height=\"331\"><img data-original-src=\"//upload-images.jianshu.io/upload_images/573708-ff48aa15175c6092.jpg\" data-original-width=\"500\" data-original-height=\"331\" data-original-format=\"image/jpeg\" data-original-filesize=\"121561\"></div>\n</div>\n<div class=\"image-caption\"></div>\n</div><p><b>- 4 -</b><b><br></b></p><p><b>变成更好的自己，</b><b>再去遇见更好的人</b></p><p><b></b></p><p><b></b></p><p>昨晚和妈妈一起散步，走着走着，她突然发起各种感叹。</p><p>“你没发现这些年你变了好多吗？”妈妈说，“毕业后的这几年，你发展得尤其迅速。”</p><p>我愣了一下，想了想，还真是。</p><p>四五年前，我哪是今天这番摸样。</p><p>那时的我怯弱、焦虑、不自信，常常被一丁点儿的困难所打倒。我不敢想以后，不敢向前迈出那一步，总渴望能有个人拉我一把。</p><p>现如今，我能驾轻就熟地开着车去我想去的地方，能在业余时间经营起自己的兴趣爱好，能有机会将文字铅印成册，能在对的时间遇上对的人，这都是我始料未及的。</p><p><b></b></p><p><b>许多事情发生在白衣苍狗间，</b><b>一眨眼，你我都变了。</b></p><p><b></b></p><p>我何尝不曾单身，何尝不曾孤独。只是，<b>在那大片大片空白的时光里，我始终没有放弃自己。</b></p><p><b></b></p><blockquote><p>刘瑜说过，适应孤独，就像适应一种残疾。</p></blockquote><p>单身，也是一种孤独，也是一种残疾，你要学会去适应。</p><p>有人说，你之所以会单身，是因为上天想要让你遇见更好的人。可是，<b>如果你自己都没有变成更好的人，你又怎么能够去遇见更好的人呢？</b></p><p>单身是最好的升值期，毋庸置疑。</p><p>在这段一个人的岁月里，请你学会独处，学会与自己对话，学会为自己的世界添砖加瓦。</p><p><b></b></p><p><b>尽早提升自己的价值，你将会有无限的可能。</b></p><p><b><b>fin.</b></b></p><p>最后有一点是要特别提醒你的：永远不要放弃独立。</p><p>即便今后你不再是一个人，也要时刻保持独立。</p><p>因为，没人喜欢一个过分依赖别人的人。</p>",
      "paid_type": "free",
      "first_shared_at": "2016-04-15T10:15:09.000+08:00",
      "notebook_id": 1164146,
      "commentable": true,
      "wordage": 2875,
      "paid_content_accessible": false,
      "share_image_url": "http://upload-images.jianshu.io/upload_images/573708-3139c00b0d571cd9.jpg",
      "show_paid_comment_tips": false,
      "user": {
        "id": 573708,
        "slug": "72f7e8a56495",
        "nickname": "叶上清之宿雨",
        "gender": 0,
        "avatar": "http://upload.jianshu.io/users/upload_avatars/573708/6fe11c7a1c5f.jpg",
        "intro": "简书签约作者，情感主播\r\n文章首发在微信公众号：遇见宿雨（meetsuyu）\r\n微博@NJ宿雨...",
        "wordage": 226926,
        "likes_count": 45083,
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
      "public_comment_count": 16,
      "featured_comments_count": 1,
      "likes_count": 15,
      "trial_open": false,
      "description": "写字\n只为遇见另一个自己",
      "id": 43815066,
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
      "id": 43815064,
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
      "id": 42824017,
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
    },
    {
      "is_author": false,
      "liked_note": false,
      "public_comment_count": 11,
      "featured_comments_count": 0,
      "likes_count": 46,
      "trial_open": false,
      "description": "最近桑塔搬家了，换了座新的城市，也换了个新的小窝。虽然是租来的房子，但看着空荡荡的新家，爱折腾的桑塔哪里闲得住。 在跑了三趟宜家，收了二十个快递包裹，收拾了一周之后... 桑...",
      "id": 40166493,
      "slug": "497a01b22680",
      "public_title": "出租屋大改造 ｜ 提升幸福感的实用家居单品（上）",
      "free_content": "<div class=\"image-package\">\n<div class=\"image-container\" style=\"max-width: 700px; max-height: 510px;\">\n<div class=\"image-container-fill\" style=\"padding-bottom: 72.98%;\"></div>\n<div class=\"image-view\" data-width=\"3264\" data-height=\"2382\"><img data-original-src=\"//upload-images.jianshu.io/upload_images/7167123-d82671b200a58438.jpg\" data-original-width=\"3264\" data-original-height=\"2382\" data-original-format=\"image/jpeg\" data-original-filesize=\"9383225\"></div>\n</div>\n<div class=\"image-caption\"></div>\n</div><p>最近桑塔搬家了，换了座新的城市，也换了个新的小窝。虽然是租来的房子，但看着空荡荡的新家，爱折腾的桑塔哪里闲得住。<br></p><p>在跑了三趟宜家，收了二十个快递包裹，收拾了一周之后... 桑塔的新家终于有些模样了！<br></p><div class=\"image-package\">\n<div class=\"image-container\" style=\"max-width: 700px; max-height: 531px;\">\n<div class=\"image-container-fill\" style=\"padding-bottom: 75.94999999999999%;\"></div>\n<div class=\"image-view\" data-width=\"3223\" data-height=\"2448\"><img data-original-src=\"//upload-images.jianshu.io/upload_images/7167123-34a1b1e494d448f6.jpg\" data-original-width=\"3223\" data-original-height=\"2448\" data-original-format=\"image/jpeg\" data-original-filesize=\"8209225\"></div>\n</div>\n<div class=\"image-caption\"></div>\n</div><p>PS:  因为是租房，而且房东房子新装修不久，这次的改造基本就是各种平价家居小物的买买买～<br></p><p>想借此机会把淘来的一些好物分享给大家，无论是出租屋还是自己家，只要用心装饰，幸福真的不贵！</p><p> 今天先分享客厅和餐厅部分的装饰，下周会给大家带来家里其他角落的装饰，请大家多多关注！</p><hr><p>【客厅篇】<br></p><p>客厅是桑塔花了最多心思的地方，因为房子刚拿到时，客厅里只有孤零零一个沙发… 非常凄凉… <br></p><div class=\"image-package\">\n<div class=\"image-container\" style=\"max-width: 700px; max-height: 477px;\">\n<div class=\"image-container-fill\" style=\"padding-bottom: 68.2%;\"></div>\n<div class=\"image-view\" data-width=\"1374\" data-height=\"937\"><img data-original-src=\"//upload-images.jianshu.io/upload_images/7167123-0544b0f8b79e03cd.jpg\" data-original-width=\"1374\" data-original-height=\"937\" data-original-format=\"image/jpeg\" data-original-filesize=\"250133\"></div>\n</div>\n<div class=\"image-caption\"></div>\n</div><h4>客厅挂画</h4><p>考虑到客厅的总体风格，这次桑塔选择了“沙漠旅行”系列，远离时间和城市的喧嚣，想要一段逃离桎梏的难忘旅行。<br></p><div class=\"image-package\">\n<div class=\"image-container\" style=\"max-width: 700px; max-height: 711px;\">\n<div class=\"image-container-fill\" style=\"padding-bottom: 101.63%;\"></div>\n<div class=\"image-view\" data-width=\"800\" data-height=\"813\"><img data-original-src=\"//upload-images.jianshu.io/upload_images/7167123-c0e0a1b1258eaa99.jpg\" data-original-width=\"800\" data-original-height=\"813\" data-original-format=\"image/jpeg\" data-original-filesize=\"183606\"></div>\n</div>\n<div class=\"image-caption\"></div>\n</div><p>这个系列总共三幅挂画，桑塔选了其中两幅，如果客厅够大的朋友可以买三幅，效果也会更好～ </p><p>挂画采用油画布质地，有多种尺寸和画框颜色可选，痴迷北欧风的桑塔选择了暗金色的框，实物挂起来很是洋气。</p><p>当然，家里的各个房间都可以用上挂画，下图是桑塔过去出租屋的房间图，挂上画也感觉温馨了。<br></p><div class=\"image-package\">\n<div class=\"image-container\" style=\"max-width: 700px; max-height: 525px;\">\n<div class=\"image-container-fill\" style=\"padding-bottom: 75.01%;\"></div>\n<div class=\"image-view\" data-width=\"2553\" data-height=\"1915\"><img data-original-src=\"//upload-images.jianshu.io/upload_images/7167123-24c1f4aafa3ce6ce.jpg\" data-original-width=\"2553\" data-original-height=\"1915\" data-original-format=\"image/jpeg\" data-original-filesize=\"1312065\"></div>\n</div>\n<div class=\"image-caption\"></div>\n</div><p><br></p><p></p><h4>宜家套桌</h4><p>这次茶几选择的是宜家的纳瓦斯塔套桌，两件套的设计，可拼可拆。</p><div class=\"image-package\">\n<div class=\"image-container\" style=\"max-width: 700px; max-height: 550px;\">\n<div class=\"image-container-fill\" style=\"padding-bottom: 73.33%;\"></div>\n<div class=\"image-view\" data-width=\"750\" data-height=\"550\"><img data-original-src=\"//upload-images.jianshu.io/upload_images/7167123-93de39928b6183fc.jpg\" data-original-width=\"750\" data-original-height=\"550\" data-original-format=\"image/jpeg\" data-original-filesize=\"29780\"></div>\n</div>\n<div class=\"image-caption\"></div>\n</div><p>一般情况下，桑塔都把它放在客厅里当茶几，有需要时也会搬着小桌到阳台上当飘窗桌，简单又实用～</p><p>桌子颜色有黑、白和原木色三种可选，大家可以根据自己的家装风格来选择，拼装起来也非常容易，10分钟easy搞定～</p><p><br></p><h4>落地灯</h4><p>家装感觉温馨的小心机，一定是各种光源的运用～ 大的灯源房东已经装好了，最后决定在客厅再添一盏落地灯。<br></p><div class=\"image-package\">\n<div class=\"image-container\" style=\"max-width: 700px; max-height: 933px;\">\n<div class=\"image-container-fill\" style=\"padding-bottom: 133.32999999999998%;\"></div>\n<div class=\"image-view\" data-width=\"3024\" data-height=\"4032\"><img data-original-src=\"//upload-images.jianshu.io/upload_images/7167123-49092cca51f06281.jpg\" data-original-width=\"3024\" data-original-height=\"4032\" data-original-format=\"image/jpeg\" data-original-filesize=\"2015051\"></div>\n</div>\n<div class=\"image-caption\"></div>\n</div><p>翻了很多店铺找到这一款，白色灯罩配上原木支架，样式简单而百搭。<br></p><div class=\"image-package\">\n<div class=\"image-container\" style=\"max-width: 700px; max-height: 716px;\">\n<div class=\"image-container-fill\" style=\"padding-bottom: 102.41%;\"></div>\n<div class=\"image-view\" data-width=\"790\" data-height=\"809\"><img data-original-src=\"//upload-images.jianshu.io/upload_images/7167123-36b32b36c94a6fe5.jpg\" data-original-width=\"790\" data-original-height=\"809\" data-original-format=\"image/jpeg\" data-original-filesize=\"162970\"></div>\n</div>\n<div class=\"image-caption\"></div>\n</div><p>自带的遥控可以随时调控白光、中性光和暖光三种LED光源，符合不同场景的使用需求。<br></p><p>有时晚上在客厅看书，桑塔会选择把大灯关掉，再把落地灯调到暖光模式，温馨的同时还有一丝莫名的浪漫感哈哈。</p><p></p><h4>抱枕＋蒲团垫</h4><p>抱枕和坐垫，淘宝上真是挑花眼的节奏，逛了很多店，每一个都超想要～<br></p><div class=\"image-package\">\n<div class=\"image-container\" style=\"max-width: 453px; max-height: 272px;\">\n<div class=\"image-container-fill\" style=\"padding-bottom: 60.040000000000006%;\"></div>\n<div class=\"image-view\" data-width=\"453\" data-height=\"272\"><img data-original-src=\"//upload-images.jianshu.io/upload_images/7167123-d7eb9b89e2cad209.jpg\" data-original-width=\"453\" data-original-height=\"272\" data-original-format=\"image/png\" data-original-filesize=\"203258\"></div>\n</div>\n<div class=\"image-caption\"></div>\n</div><p>平时在沙发上靠着软软的抱枕，看电视时手里再抱一个，严重拉长我待在沙发上的时间！<br></p><p>如果喜欢经常换风格的朋友，也可以选择多买几个枕套，偶尔换一换，让家里保持新鲜感～<br></p><div class=\"image-package\">\n<div class=\"image-container\" style=\"max-width: 400px; max-height: 400px;\">\n<div class=\"image-container-fill\" style=\"padding-bottom: 100.0%;\"></div>\n<div class=\"image-view\" data-width=\"400\" data-height=\"400\"><img data-original-src=\"//upload-images.jianshu.io/upload_images/7167123-99abf3a66920c6fd.jpg\" data-original-width=\"400\" data-original-height=\"400\" data-original-format=\"image/jpeg\" data-original-filesize=\"70907\"></div>\n</div>\n<div class=\"image-caption\"></div>\n</div><p>因为房东自购的沙发比较迷你，这次还挑选了三个蒲团垫放在地毯上，偶尔家里来了客人，大家可以坐在一起聊天、喝酒、谈人生。</p><p></p><h3>【餐厅篇】</h3><p>这次房子的餐厅区域比较大，所以桑塔把它划分成了两个功能区，一块是正常的就餐区，一边则充当了书房的作用。<br></p><div class=\"image-package\">\n<div class=\"image-container\" style=\"max-width: 700px; max-height: 430px;\">\n<div class=\"image-container-fill\" style=\"padding-bottom: 61.519999999999996%;\"></div>\n<div class=\"image-view\" data-width=\"3264\" data-height=\"2008\"><img data-original-src=\"//upload-images.jianshu.io/upload_images/7167123-ff19bdf1cf47dd37.jpg\" data-original-width=\"3264\" data-original-height=\"2008\" data-original-format=\"image/jpeg\" data-original-filesize=\"8124428\"></div>\n</div>\n<div class=\"image-caption\">图片发自简书App</div>\n</div><p>平时不是吃饭时间，桑塔也习惯在餐桌上码字或办公，既方便从书架上拿东西，也可以享受客厅的视野和中央空调！<br></p><p></p><h4>世界地图画板</h4><p>从小一直对世界地图有着莫名的好感，所以在宜家逛到这幅环球旅行的黑板就立马搬回了家。<br></p><div class=\"image-package\">\n<div class=\"image-container\" style=\"max-width: 700px; max-height: 700px;\">\n<div class=\"image-container-fill\" style=\"padding-bottom: 100.14%;\"></div>\n<div class=\"image-view\" data-width=\"709\" data-height=\"710\"><img data-original-src=\"//upload-images.jianshu.io/upload_images/7167123-3665047671b711c0.jpg\" data-original-width=\"709\" data-original-height=\"710\" data-original-format=\"image/jpeg\" data-original-filesize=\"99707\"></div>\n</div>\n<div class=\"image-caption\"></div>\n</div><p>本来想挂在餐厅的墙上，怎奈敲无痕钉时才发现那面墙无法挂画，无奈只能放在书柜上，竟然意外地很合适。<br></p><p>除了装饰作用，它也是一块便捷的黑板，大家可以用粉笔在上面留言，或者计划下一次的旅行目的地～</p><p></p><h4>小鹿门帘</h4><p>书柜的旁边是客卧兼书房，但房东并没有在这个位置装门。为了增强隐私性，方便朋友来家里玩时小住，我在淘宝找到了这款门帘。<br></p><div class=\"image-package\">\n<div class=\"image-container\" style=\"max-width: 700px; max-height: 700px;\">\n<div class=\"image-container-fill\" style=\"padding-bottom: 100.0%;\"></div>\n<div class=\"image-view\" data-width=\"800\" data-height=\"800\"><img data-original-src=\"//upload-images.jianshu.io/upload_images/7167123-9e9ec9c59c535a4c.jpg\" data-original-width=\"800\" data-original-height=\"800\" data-original-format=\"image/jpeg\" data-original-filesize=\"133885\"></div>\n</div>\n<div class=\"image-caption\"></div>\n</div><p>浅绿的配色加上可爱的雪花鹿，给家里增添了一丝活泼信息。门帘自带悬挂杆，挂上后刚好可以挡掉一半的门，好看又实用。<br></p><p>如果家里没有需要隔断的空间，门帘也可以挂在门上，接下来桑塔打算给家里的厨房门也配一块！</p><p></p><h4>田园餐桌布</h4><p>搬家前，桑塔也给家里买过白色格子的餐布，可惜好看不耐用。<br></p><div class=\"image-package\">\n<div class=\"image-container\" style=\"max-width: 700px; max-height: 540px;\">\n<div class=\"image-container-fill\" style=\"padding-bottom: 77.21000000000001%;\"></div>\n<div class=\"image-view\" data-width=\"3264\" data-height=\"2520\"><img data-original-src=\"//upload-images.jianshu.io/upload_images/7167123-e5d7d3db23b2d8b8.jpg\" data-original-width=\"3264\" data-original-height=\"2520\" data-original-format=\"image/jpeg\" data-original-filesize=\"9383550\"></div>\n</div>\n<div class=\"image-caption\"></div>\n</div><p>每次不小心掉上油渍或者果汁，就很难再洗干净，直到朋友给我推荐了这款PVC桌布… 竟然还有这样的操作！<br></p><div class=\"image-package\">\n<div class=\"image-container\" style=\"max-width: 700px; max-height: 700px;\">\n<div class=\"image-container-fill\" style=\"padding-bottom: 100.0%;\"></div>\n<div class=\"image-view\" data-width=\"800\" data-height=\"800\"><img data-original-src=\"//upload-images.jianshu.io/upload_images/7167123-791d581944c210f8.jpg\" data-original-width=\"800\" data-original-height=\"800\" data-original-format=\"image/jpeg\" data-original-filesize=\"173460\"></div>\n</div>\n<div class=\"image-caption\"></div>\n</div><p>同样的款式，比起传统布艺桌布，PVC材质可以有效防水、防油和防烫，大大增加桌布的使用寿命，也不用再担心桌布洗不干净了～</p><p></p><h4>Ins风花束</h4><p>北欧风必备的摆拍神器，当然是各种Ins风的花配宽口瓶。一直很喜欢尤加利的颜色和味道，摆在家里显得沉稳和安静。<br></p><div class=\"image-package\">\n<div class=\"image-container\" style=\"max-width: 700px; max-height: 933px;\">\n<div class=\"image-container-fill\" style=\"padding-bottom: 133.32999999999998%;\"></div>\n<div class=\"image-view\" data-width=\"2448\" data-height=\"3264\"><img data-original-src=\"//upload-images.jianshu.io/upload_images/7167123-5c216346080e05b4.jpg\" data-original-width=\"2448\" data-original-height=\"3264\" data-original-format=\"image/jpeg\" data-original-filesize=\"7266723\"></div>\n</div>\n<div class=\"image-caption\"></div>\n</div><p>这次买的是永生型的尤加利，比自然风干的叶片保存时间更长，也不容易凋谢和掉落。<br></p><p>除了单独买尤加利，也可以配上白色的木棉花，花语是珍惜身边人，自带一种岁月静好的美感。</p><p></p><h4>电表箱装饰画</h4><p>房子餐厅的位置本身有一个外露的电表箱，很不好看。如果买一副普通的挂画，又担心平时检查电表箱不方便。<br></p><div class=\"image-package\">\n<div class=\"image-container\" style=\"max-width: 700px; max-height: 525px;\">\n<div class=\"image-container-fill\" style=\"padding-bottom: 75.0%;\"></div>\n<div class=\"image-view\" data-width=\"3264\" data-height=\"2448\"><img data-original-src=\"//upload-images.jianshu.io/upload_images/7167123-4941548c8778e3e3.jpg\" data-original-width=\"3264\" data-original-height=\"2448\" data-original-format=\"image/jpeg\" data-original-filesize=\"6343727\"></div>\n</div>\n<div class=\"image-caption\"></div>\n</div><p>淘宝上搜索时发现了这款贴心的装饰画，掀盖式的设计，可以随时打开，也可以自由定制画面和尺寸，非常实用。</p><hr><p>下周我们会讲到家里其他空间的装饰～<br></p><p>很适合送给刚搬家的朋友做乔迁礼物</p><p>感兴趣的朋友请多多关注桑塔露露的礼物盒</p>",
      "paid_type": "free",
      "first_shared_at": "2018-06-30T11:25:11.000+08:00",
      "notebook_id": 14940152,
      "commentable": true,
      "wordage": 1775,
      "paid_content_accessible": false,
      "share_image_url": "http://upload-images.jianshu.io/upload_images/7167123-34a1b1e494d448f6.jpg",
      "show_paid_comment_tips": false,
      "user": {
        "id": 7167123,
        "slug": "ef3c7b0b9216",
        "nickname": "桑塔露露的礼物盒",
        "gender": 2,
        "avatar": "http://upload.jianshu.io/users/upload_avatars/7167123/fdb7360b-9ce9-499d-a1d9-2d5a970bf431.jpeg",
        "intro": "欢迎关注公众号桑塔露露的礼物盒。您安心上学、上班，贡献GDP，让我们来为您挑！礼！物！\r",
        "wordage": 199362,
        "likes_count": 1271,
        "badges": [
          {
            "text": "生活达人",
            "intro_url": "http://www.jianshu.com/p/d1d89ed69098",
            "image_url": "http://upload.jianshu.io/user_badge/ac944899-bf5f-40df-b265-7d947fadd946",
            "icon": "other"
          }
        ],
        "vip": null,
        "liked_by_user": false,
        "liked_user": false
      },
      "distribution_more_earn_percent": 24
    },
    {
      "is_author": false,
      "liked_note": false,
      "public_comment_count": 3,
      "featured_comments_count": 0,
      "likes_count": 21,
      "trial_open": false,
      "description": "1 欣云户外专营店 这三款产品平时出差或者旅行，用来装我们那一堆化妆品非常合适，简单方便，便于携带。 这款一次性压缩洗脸巾，不管是户外旅行还是在家，用起来非常方便，比我们的毛...",
      "id": 41955776,
      "slug": "c1064e8b0300",
      "public_title": "看了让你爱不释手的5家店铺",
      "free_content": "<h3>1 欣云户外专营店</h3><p></p><div class=\"image-package\">\n<div class=\"image-container\" style=\"max-width: 700px; max-height: 700px;\">\n<div class=\"image-container-fill\" style=\"padding-bottom: 100.0%;\"></div>\n<div class=\"image-view\" data-width=\"800\" data-height=\"800\"><img data-original-src=\"//upload-images.jianshu.io/upload_images/2718584-961bf021e17ab75b.jpg\" data-original-width=\"800\" data-original-height=\"800\" data-original-format=\"image/jpeg\" data-original-filesize=\"51921\"></div>\n</div>\n<div class=\"image-caption\">图片发自简书App</div>\n</div><p></p><div class=\"image-package\">\n<div class=\"image-container\" style=\"max-width: 700px; max-height: 933px;\">\n<div class=\"image-container-fill\" style=\"padding-bottom: 133.32999999999998%;\"></div>\n<div class=\"image-view\" data-width=\"720\" data-height=\"960\"><img data-original-src=\"//upload-images.jianshu.io/upload_images/2718584-0670d08af903afb9.jpg\" data-original-width=\"720\" data-original-height=\"960\" data-original-format=\"image/jpeg\" data-original-filesize=\"54376\"></div>\n</div>\n<div class=\"image-caption\">图片发自简书App</div>\n</div><div class=\"image-package\">\n<div class=\"image-container\" style=\"max-width: 700px; max-height: 933px;\">\n<div class=\"image-container-fill\" style=\"padding-bottom: 133.32999999999998%;\"></div>\n<div class=\"image-view\" data-width=\"720\" data-height=\"960\"><img data-original-src=\"//upload-images.jianshu.io/upload_images/2718584-233abe9d4c2db4a7.jpg\" data-original-width=\"720\" data-original-height=\"960\" data-original-format=\"image/jpeg\" data-original-filesize=\"44038\"></div>\n</div>\n<div class=\"image-caption\">图片发自简书App</div>\n</div><br><p>这三款产品平时出差或者旅行，用来装我们那一堆化妆品非常合适，简单方便，便于携带。</p><p></p><div class=\"image-package\">\n<div class=\"image-container\" style=\"max-width: 700px; max-height: 933px;\">\n<div class=\"image-container-fill\" style=\"padding-bottom: 133.32999999999998%;\"></div>\n<div class=\"image-view\" data-width=\"720\" data-height=\"960\"><img data-original-src=\"//upload-images.jianshu.io/upload_images/2718584-4d3b7a5e3db4dd9f.jpg\" data-original-width=\"720\" data-original-height=\"960\" data-original-format=\"image/jpeg\" data-original-filesize=\"282331\"></div>\n</div>\n<div class=\"image-caption\">图片发自简书App</div>\n</div><p>这款一次性压缩洗脸巾，不管是户外旅行还是在家，用起来非常方便，比我们的毛巾干净，保持脸部清洁。</p><p></p><div class=\"image-package\">\n<div class=\"image-container\" style=\"max-width: 700px; max-height: 933px;\">\n<div class=\"image-container-fill\" style=\"padding-bottom: 133.32999999999998%;\"></div>\n<div class=\"image-view\" data-width=\"720\" data-height=\"960\"><img data-original-src=\"//upload-images.jianshu.io/upload_images/2718584-dee459f72047571b.jpg\" data-original-width=\"720\" data-original-height=\"960\" data-original-format=\"image/jpeg\" data-original-filesize=\"51889\"></div>\n</div>\n<div class=\"image-caption\">图片发自简书App</div>\n</div><p>这款马桶垫可谓是洁癖人群的福利，平时去公共场所，出差在外，带一包，再也不用担心想上厕所又怕脏的问题啦。</p><p></p><div class=\"image-package\">\n<div class=\"image-container\" style=\"max-width: 700px; max-height: 933px;\">\n<div class=\"image-container-fill\" style=\"padding-bottom: 133.32999999999998%;\"></div>\n<div class=\"image-view\" data-width=\"720\" data-height=\"960\"><img data-original-src=\"//upload-images.jianshu.io/upload_images/2718584-018e4e8c69f34375.jpg\" data-original-width=\"720\" data-original-height=\"960\" data-original-format=\"image/jpeg\" data-original-filesize=\"281277\"></div>\n</div>\n<div class=\"image-caption\">图片发自简书App</div>\n</div><p>这个隔脏睡袋拯救了我，平时出门在外总带着自己的床单，睡觉不敢脱衣服，哪怕是告诉我已经消毒过，睡完浑身都不舒服，有了它，再也不用担心啦。</p><p>附上链接:【欣云户外专营店】，復·制这段描述€I5tcb1Y4XQc€后咑閞手机淘宝或者用浏览器咑閞http://m.tb.cn/h.33YL65U?sm=239155查看</p><h2>2 安娜女王镜梳网</h2><p></p><div class=\"image-package\">\n<div class=\"image-container\" style=\"max-width: 700px; max-height: 700px;\">\n<div class=\"image-container-fill\" style=\"padding-bottom: 100.0%;\"></div>\n<div class=\"image-view\" data-width=\"714\" data-height=\"714\"><img data-original-src=\"//upload-images.jianshu.io/upload_images/2718584-317d456888b4537e.jpg\" data-original-width=\"714\" data-original-height=\"714\" data-original-format=\"image/jpeg\" data-original-filesize=\"238451\"></div>\n</div>\n<div class=\"image-caption\">图片发自简书App</div>\n</div><p></p><div class=\"image-package\">\n<div class=\"image-container\" style=\"max-width: 700px; max-height: 700px;\">\n<div class=\"image-container-fill\" style=\"padding-bottom: 100.0%;\"></div>\n<div class=\"image-view\" data-width=\"800\" data-height=\"800\"><img data-original-src=\"//upload-images.jianshu.io/upload_images/2718584-35b1818cba980967.jpg\" data-original-width=\"800\" data-original-height=\"800\" data-original-format=\"image/jpeg\" data-original-filesize=\"478242\"></div>\n</div>\n<div class=\"image-caption\">图片发自简书App</div>\n</div><p></p><div class=\"image-package\">\n<div class=\"image-container\" style=\"max-width: 700px; max-height: 700px;\">\n<div class=\"image-container-fill\" style=\"padding-bottom: 100.0%;\"></div>\n<div class=\"image-view\" data-width=\"800\" data-height=\"800\"><img data-original-src=\"//upload-images.jianshu.io/upload_images/2718584-ccb647813005c258.jpg\" data-original-width=\"800\" data-original-height=\"800\" data-original-format=\"image/jpeg\" data-original-filesize=\"407810\"></div>\n</div>\n<div class=\"image-caption\">图片发自简书App</div>\n</div><p>败家娘们，还在担心你们的气垫，口红无处安放吗？自从发现了这家店，我的化妆桌从此井井有条，再也没人敢说我一天不收拾啦！更多的好东西的打开方式自己去探索吧。</p><p>附上链接:【安娜女王镜梳网批发店】，復·制这段描述€8nb7b1YRqwc€后咑閞手机淘宝或者用浏览器咑閞http://m.tb.cn/h.330HvV9?sm=38be20查看</p><h2>3 一纸花约旗舰店</h2><p></p><div class=\"image-package\">\n<div class=\"image-container\" style=\"max-width: 700px; max-height: 700px;\">\n<div class=\"image-container-fill\" style=\"padding-bottom: 100.0%;\"></div>\n<div class=\"image-view\" data-width=\"800\" data-height=\"800\"><img data-original-src=\"//upload-images.jianshu.io/upload_images/2718584-2582e9a1abed4469.jpg\" data-original-width=\"800\" data-original-height=\"800\" data-original-format=\"image/jpeg\" data-original-filesize=\"54391\"></div>\n</div>\n<div class=\"image-caption\">图片发自简书App</div>\n</div><p></p><div class=\"image-package\">\n<div class=\"image-container\" style=\"max-width: 700px; max-height: 700px;\">\n<div class=\"image-container-fill\" style=\"padding-bottom: 100.0%;\"></div>\n<div class=\"image-view\" data-width=\"800\" data-height=\"800\"><img data-original-src=\"//upload-images.jianshu.io/upload_images/2718584-b6c2d4ce4d19cdc3.jpg\" data-original-width=\"800\" data-original-height=\"800\" data-original-format=\"image/jpeg\" data-original-filesize=\"131935\"></div>\n</div>\n<div class=\"image-caption\">图片发自简书App</div>\n</div><p></p><div class=\"image-package\">\n<div class=\"image-container\" style=\"max-width: 700px; max-height: 700px;\">\n<div class=\"image-container-fill\" style=\"padding-bottom: 100.0%;\"></div>\n<div class=\"image-view\" data-width=\"800\" data-height=\"800\"><img data-original-src=\"//upload-images.jianshu.io/upload_images/2718584-0ec0bd061bc24961.jpg\" data-original-width=\"800\" data-original-height=\"800\" data-original-format=\"image/jpeg\" data-original-filesize=\"47502\"></div>\n</div>\n<div class=\"image-caption\">图片发自简书App</div>\n</div><p>小样，我不告诉你你知道这是啥嘛，咳咳，快到七夕啦，礼物都准备好了吗？这家的巧克力和糖果都很有情调，买上送给心仪的他(她)，可能她不再爱你，从此就爱上这家店啦。</p><p>附上链接:【一纸花约旗舰店】，復·制这段描述€ikXMb1Y9Czz€后咑閞手机淘宝或者用浏览器咑閞http://m.tb.cn/h.33YE1uv?sm=f4e47f查看</p><h2>4 MISyy永远</h2><p></p><div class=\"image-package\">\n<div class=\"image-container\" style=\"max-width: 628px; max-height: 636px;\">\n<div class=\"image-container-fill\" style=\"padding-bottom: 101.27%;\"></div>\n<div class=\"image-view\" data-width=\"628\" data-height=\"636\"><img data-original-src=\"//upload-images.jianshu.io/upload_images/2718584-e63051c8a861f61b.jpg\" data-original-width=\"628\" data-original-height=\"636\" data-original-format=\"image/jpeg\" data-original-filesize=\"153136\"></div>\n</div>\n<div class=\"image-caption\">图片发自简书App</div>\n</div><p></p><div class=\"image-package\">\n<div class=\"image-container\" style=\"max-width: 700px; max-height: 700px;\">\n<div class=\"image-container-fill\" style=\"padding-bottom: 100.0%;\"></div>\n<div class=\"image-view\" data-width=\"700\" data-height=\"700\"><img data-original-src=\"//upload-images.jianshu.io/upload_images/2718584-02d28593bbc36f85.jpg\" data-original-width=\"700\" data-original-height=\"700\" data-original-format=\"image/jpeg\" data-original-filesize=\"54863\"></div>\n</div>\n<div class=\"image-caption\">图片发自简书App</div>\n</div><p></p><div class=\"image-package\">\n<div class=\"image-container\" style=\"max-width: 700px; max-height: 700px;\">\n<div class=\"image-container-fill\" style=\"padding-bottom: 100.0%;\"></div>\n<div class=\"image-view\" data-width=\"800\" data-height=\"800\"><img data-original-src=\"//upload-images.jianshu.io/upload_images/2718584-57336a5b62d518e6.jpg\" data-original-width=\"800\" data-original-height=\"800\" data-original-format=\"image/jpeg\" data-original-filesize=\"42757\"></div>\n</div>\n<div class=\"image-caption\">图片发自简书App</div>\n</div><p>这些好看的贴纸和胶带平时用来做手账简直美得不要不要的，当然，他们家还有很多好看的爱，礼物袋，喜欢的自己随意买，反正不花我的钱。</p><p>附上链接:【MISyy永远】，復·制这段描述€OIIJb1YmTC6€后咑閞手机淘宝或者用浏览器咑閞http://m.tb.cn/h.3WEdmD1?sm=e56b69查看</p><h2>5 大花饰物店</h2><p></p><div class=\"image-package\">\n<div class=\"image-container\" style=\"max-width: 700px; max-height: 700px;\">\n<div class=\"image-container-fill\" style=\"padding-bottom: 100.0%;\"></div>\n<div class=\"image-view\" data-width=\"800\" data-height=\"800\"><img data-original-src=\"//upload-images.jianshu.io/upload_images/2718584-9cdc2657893c82a4.jpg\" data-original-width=\"800\" data-original-height=\"800\" data-original-format=\"image/jpeg\" data-original-filesize=\"47568\"></div>\n</div>\n<div class=\"image-caption\">图片发自简书App</div>\n</div><p></p><div class=\"image-package\">\n<div class=\"image-container\" style=\"max-width: 700px; max-height: 700px;\">\n<div class=\"image-container-fill\" style=\"padding-bottom: 100.0%;\"></div>\n<div class=\"image-view\" data-width=\"800\" data-height=\"800\"><img data-original-src=\"//upload-images.jianshu.io/upload_images/2718584-d27eab1e8229751a.jpg\" data-original-width=\"800\" data-original-height=\"800\" data-original-format=\"image/jpeg\" data-original-filesize=\"151732\"></div>\n</div>\n<div class=\"image-caption\">图片发自简书App</div>\n</div><p></p><div class=\"image-package\">\n<div class=\"image-container\" style=\"max-width: 700px; max-height: 700px;\">\n<div class=\"image-container-fill\" style=\"padding-bottom: 100.0%;\"></div>\n<div class=\"image-view\" data-width=\"800\" data-height=\"800\"><img data-original-src=\"//upload-images.jianshu.io/upload_images/2718584-c9b44c307c475a0e.jpg\" data-original-width=\"800\" data-original-height=\"800\" data-original-format=\"image/jpeg\" data-original-filesize=\"47437\"></div>\n</div>\n<div class=\"image-caption\">图片发自简书App</div>\n</div><p>这些好看的耳钉银家就想自己藏着，但看在你们这么可爱的份上我就分享给你们吧，嘿嘿，不知道你们喜欢不，我是很喜欢啦！</p><p>附上链接:【「大花」饰物店】，復·制这段描述€7YHDb1YpVtU€后咑閞手机淘宝或者用浏览器咑閞http://m.tb.cn/h.331Zf4r?sm=a91131查看</p><p>各位宝宝，今天的分享就这么多，喜欢的就关注我吧，以后挖到便宜又好用的东西还会给大家继续分享呢！</p>",
      "paid_type": "free",
      "first_shared_at": "2018-08-07T15:05:34.000+08:00",
      "notebook_id": 5622265,
      "commentable": true,
      "wordage": 817,
      "paid_content_accessible": false,
      "share_image_url": "http://upload-images.jianshu.io/upload_images/2718584-961bf021e17ab75b.jpg",
      "show_paid_comment_tips": false,
      "user": {
        "id": 2718584,
        "slug": "2d495e5fd605",
        "nickname": "参差百态是生活",
        "gender": 0,
        "avatar": "http://upload.jianshu.io/users/upload_avatars/2718584/421b11d1-2b6e-436e-a9de-f54fe492166c.jpg",
        "intro": "hello✨大家好 我是一枚90后在校生🎓\n爱写作 爱摄影 更热爱生活 \n愿意与你们分享我的故...",
        "wordage": 9876,
        "likes_count": 150,
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
      "public_comment_count": 1890,
      "featured_comments_count": 5,
      "likes_count": 7901,
      "trial_open": false,
      "description": "- 1 - 为什么单身？因为想变成更好的自己啊 昨晚在微信后台发起了一个话题“你单身吗？单身多久了？在你单身的这段时间里，最大的改变是什么？”收到了成千上百条回复。 本来我以...",
      "id": 4588441,
      "slug": "1e4891ab59d8",
      "public_title": "单身是最好的升值期",
      "free_content": "<div class=\"image-package\">\n<div class=\"image-container\" style=\"max-width: 620px; max-height: 387px;\">\n<div class=\"image-container-fill\" style=\"padding-bottom: 62.419999999999995%;\"></div>\n<div class=\"image-view\" data-width=\"620\" data-height=\"387\"><img data-original-src=\"//upload-images.jianshu.io/upload_images/573708-3139c00b0d571cd9.jpg\" data-original-width=\"620\" data-original-height=\"387\" data-original-format=\"image/jpeg\" data-original-filesize=\"145400\"></div>\n</div>\n<div class=\"image-caption\"></div>\n</div><p><b>- 1 -</b><br></p><p><b>为什么单身？</b><b>因为想变成更好的自己啊</b></p><p><b></b></p><p>昨晚在微信后台发起了一个话题“你单身吗？单身多久了？在你单身的这段时间里，最大的改变是什么？”收到了成千上百条回复。</p><p>本来我以为，绝大多数人会觉得单身是件悲伤的事情，会因为单身直接或间接地给自己带去很多负面情绪，觉得自己孤独寂寞，心无所依。</p><p>但事实却恰恰相反。</p><p>九成以上的留言都是积极向上的，而且都是在非常明确地阐述，自己如何通过努力开始了新的生活，变成了更好的人。</p><p>老实说，有些留言真的让我眼眶温热。</p><p>有个女生跟我说，今年她29岁，毕业后在广州工作了8年，一直是单身。在这期间，她坚持锻炼，工作之余还经常给自己充电。爱时尚爱漂亮，一个人去过整个东南亚、台湾、欧洲。不是为了招蜂引蝶，只是为了成全更好的自己。</p><p>去年8月，她顺利拿到了墨尔本大学的offer，现在准备辞职滚去读书。</p><p>正当我钦佩她的勇气与果断时，她又向我爆料说，自己曾是一名专科生，在广州一边工作一边念中山大学的本科。考取本科文凭后，又考了学位证，然后申请读研，一路披荆斩棘。</p><p>她给我发来她健身时的照片——身材曼妙，气质不凡。我一下就喜欢上了这个姑娘。</p><p><b>谁说单身就一定非得和寂寞沾边？</b><b>单身恰恰是一个人最好的升值期。</b></p><p>有段话，她说得特别好，也彻彻底底地打动了我。</p><p>她说，“这些年来，我一直有个小小的梦想，就是有朝一日能够屌丝逆袭。为此我自学了日语，还学了古筝、爵士鼓。小时候家里条件只够读书，没钱培养兴趣，所以我想自己挣钱，一点一点去实现。也许现在是90后横行的时代，但我仍旧可以自信地说，从我现在的气质里，能够看到我读过的书，走过的路，还有我爱过的人。”</p><div class=\"image-package\">\n<div class=\"image-container\" style=\"max-width: 510px; max-height: 1054px;\">\n<div class=\"image-container-fill\" style=\"padding-bottom: 150.59%;\"></div>\n<div class=\"image-view\" data-width=\"510\" data-height=\"768\"><img data-original-src=\"//upload-images.jianshu.io/upload_images/573708-9457b1ce3677d386.jpg\" data-original-width=\"510\" data-original-height=\"768\" data-original-format=\"image/jpeg\" data-original-filesize=\"269065\"></div>\n</div>\n<div class=\"image-caption\"></div>\n</div><p><b>- 2 -</b><b></b></p><p><b>发现没有？</b><b>其实你也可以是自己的靠山</b></p><p><b></b></p><p>很多读者在留言里都提到了<b>独立</b>。</p><p>有人说，单身一年半了，这段时间最大的改变就是变得独立有个性了。</p><p>有人说，这几年我最大的改变是变得外在很独立。一个人吃饭，一个人逛街，一个人上课，一个人旅行，一个人追剧。很习以为常，也不觉得有什么。</p><p>有人说，单身了两年多，不再依赖谁，独立很多，有更多的时间去思考和学习。</p><p>也有人说，单身的日子里，学到最多的是能够独立面对一些人一些事，学会了一个人静处，学会了享受寂寞。</p><p>突然想起自己也曾有过很长一段时间的单身期，独来独往，做什么都是一个人。</p><p>刚开始确实有些不适应，身边没有几个能够说得上话的人，觉得不习惯，觉得心中有股落寞像颜料般晕染开来，渐渐侵蚀了整个胸腔，闷得透不过气。</p><p><b>后来，我调整了自己的心态，看淡了很多事，变得释然，也学会了反省。</b>尝试着与孤独对话，尝试着去做出一点改变。</p><p><b>我愈发清楚地知道自己想要什么了，并且愈发渴望让自己变得优秀。</b>于是我一个人学习、锻炼、思考，把更多的时间花在提升自我价值上。</p><p>我开始录电台，每个月看一本书，并坚持写作。</p><p>当我把注意力集中到某件我十分感兴趣，或是我十分想要去做好的事情上后，我发现我再也没有理由去愤慨，去忧伤或是去哀怨了。</p><p>因为想要把生活过的更精致，我养成了许多从前不曾有过的好习惯。</p><p>因为坚持与投入，使我迅速在新兴领域崭露头角，拓宽了人脉，也因此获得了众多机遇。</p><p>很多事情都是相辅相成的，没有付出就没有回报，没有耕耘又谈何收获？</p><p><b>你要把孤独转化成一种动力，一种去开疆辟土的信心与勇气，而不是呆在原地无所作为，让自卑与空洞肆意生长。</b></p><p>由于生活变得愈发精彩与充实，我在不知不觉中变得自信、乐观、开朗。</p><p><b>单身，让我学会了与自己相处。</b>许多从前需要依赖别人的事，最后都由自己解决。从“习惯依赖他人”到“凡事靠自己”，我渐渐变成了一个思想独立，行为独立，能够成为自己靠山的人。这是单身带给我的成长，也是成长带给我的蜕变。我开始真正走向成熟，不再是昨天那个一直站在原地揉眼睛的孩子。</p><div class=\"image-package\">\n<div class=\"image-container\" style=\"max-width: 700px; max-height: 788px;\">\n<div class=\"image-container-fill\" style=\"padding-bottom: 112.57%;\"></div>\n<div class=\"image-view\" data-width=\"700\" data-height=\"788\"><img data-original-src=\"//upload-images.jianshu.io/upload_images/573708-1d1d99ee20529499.jpeg\" data-original-width=\"700\" data-original-height=\"788\" data-original-format=\"image/jpeg\" data-original-filesize=\"102761\"></div>\n</div>\n<div class=\"image-caption\"></div>\n</div><p><b>- 3 -</b><b><br></b></p><p><b>即使单身，</b><b>你一样可以过得很好</b></p><p><b></b></p><p><b></b></p><p>我有个朋友，单身快五年了。</p><p>刚和前男友分手的时候痛不欲生，觉得天都要塌下来了。她说她从没想过他会离开，她说她没了他会活不下去。</p><p>可是后来呢？她照样一个人活得好好的。</p><p>她减肥瘦身，配了隐形眼镜，学习化妆，把自己打扮得美美的；她爱上了夜跑，发现原来夜跑那么有趣，从前对跑步恨之入骨的她也能在操场开心地跑两三公里了；她去了那个原来说好要一起去的地方，才发现，没有他风景可以一样美好；她开始看一些以前吵着要看的书，开始着手做比赛，开始参加字幕组……</p><p><b>“</b><b>一个人并没有多可怜，也习惯了走夜路。没有他，我一样可以很好。</b><b>”</b>她说。</p><p>周围陆陆续续有人夸她是白富美，只有她自己知道，曾经的她不过是只丑小鸭。但如今，她早已不是当年的她。</p><p>“恢复单身后才发现，自己从前可真是矫情啊。尽管还是单身，但却是有底气且不将就的单身了吧。”</p><p><b>单身是一种生活状态，</b><b>信奉单身也可以过得很幸福。</b></p><p>你可以每年给自己安排一次旅行，想去哪儿就去哪儿，想去多久就去多久；你可以把原来煲电话粥的时间放在夜读上，在一次次思想的碰撞中提高自己的涵养；你可以有更多的时间用来陪伴家人，与朋友叙旧；你可以自由自在，尝试新的事物，做自己喜欢做的事。<br></p><p>总之，<b>即使是一个人，你一样可以把日子过得精彩丰呈。</b></p><p>这世上没有谁离了谁是活不下去的，上天在为你关上门的同时必定会为你打开一扇窗。而这扇窗，就是一个契机，一个让你去丰富自我，完善自我的机会。</p><blockquote><p>《巴黎假期》中，古天乐饰演的角色林俊杰有句很经典的台词：“七年的时间，就可以把我们全身的细胞都更换一遍，一个旧细胞都没有。所有不开心的事，都会忘得干干净净。”</p></blockquote><p>是啊，即使你曾在感情中受过伤，那又怎么样呢？时间是块橡皮擦，总有一天会帮你擦去那些伤疤。<b>单身不可怕，可怕的是一直放不下。能够伤害你的，从来不是伤害本身，而是你自己。</b></p><p><b></b></p><p>要想告别过去那个懦弱的你，失败的你，就必须学会及时斩仓。好好爱自己，学会坚强、独立，学会自己制造阳光。生活不止只有苟且，还有诗和远方。一个人的日子里，你要放下，你要沉淀，还要懂得体谅。</p><div class=\"image-package\">\n<div class=\"image-container\" style=\"max-width: 500px; max-height: 331px;\">\n<div class=\"image-container-fill\" style=\"padding-bottom: 66.2%;\"></div>\n<div class=\"image-view\" data-width=\"500\" data-height=\"331\"><img data-original-src=\"//upload-images.jianshu.io/upload_images/573708-ff48aa15175c6092.jpg\" data-original-width=\"500\" data-original-height=\"331\" data-original-format=\"image/jpeg\" data-original-filesize=\"121561\"></div>\n</div>\n<div class=\"image-caption\"></div>\n</div><p><b>- 4 -</b><b><br></b></p><p><b>变成更好的自己，</b><b>再去遇见更好的人</b></p><p><b></b></p><p><b></b></p><p>昨晚和妈妈一起散步，走着走着，她突然发起各种感叹。</p><p>“你没发现这些年你变了好多吗？”妈妈说，“毕业后的这几年，你发展得尤其迅速。”</p><p>我愣了一下，想了想，还真是。</p><p>四五年前，我哪是今天这番摸样。</p><p>那时的我怯弱、焦虑、不自信，常常被一丁点儿的困难所打倒。我不敢想以后，不敢向前迈出那一步，总渴望能有个人拉我一把。</p><p>现如今，我能驾轻就熟地开着车去我想去的地方，能在业余时间经营起自己的兴趣爱好，能有机会将文字铅印成册，能在对的时间遇上对的人，这都是我始料未及的。</p><p><b></b></p><p><b>许多事情发生在白衣苍狗间，</b><b>一眨眼，你我都变了。</b></p><p><b></b></p><p>我何尝不曾单身，何尝不曾孤独。只是，<b>在那大片大片空白的时光里，我始终没有放弃自己。</b></p><p><b></b></p><blockquote><p>刘瑜说过，适应孤独，就像适应一种残疾。</p></blockquote><p>单身，也是一种孤独，也是一种残疾，你要学会去适应。</p><p>有人说，你之所以会单身，是因为上天想要让你遇见更好的人。可是，<b>如果你自己都没有变成更好的人，你又怎么能够去遇见更好的人呢？</b></p><p>单身是最好的升值期，毋庸置疑。</p><p>在这段一个人的岁月里，请你学会独处，学会与自己对话，学会为自己的世界添砖加瓦。</p><p><b></b></p><p><b>尽早提升自己的价值，你将会有无限的可能。</b></p><p><b><b>fin.</b></b></p><p>最后有一点是要特别提醒你的：永远不要放弃独立。</p><p>即便今后你不再是一个人，也要时刻保持独立。</p><p>因为，没人喜欢一个过分依赖别人的人。</p>",
      "paid_type": "free",
      "first_shared_at": "2016-04-15T10:15:09.000+08:00",
      "notebook_id": 1164146,
      "commentable": true,
      "wordage": 2875,
      "paid_content_accessible": false,
      "share_image_url": "http://upload-images.jianshu.io/upload_images/573708-3139c00b0d571cd9.jpg",
      "show_paid_comment_tips": false,
      "user": {
        "id": 573708,
        "slug": "72f7e8a56495",
        "nickname": "叶上清之宿雨",
        "gender": 0,
        "avatar": "http://upload.jianshu.io/users/upload_avatars/573708/6fe11c7a1c5f.jpg",
        "intro": "简书签约作者，情感主播\r\n文章首发在微信公众号：遇见宿雨（meetsuyu）\r\n微博@NJ宿雨...",
        "wordage": 226926,
        "likes_count": 45083,
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
// 评论
function comment(){
  let arr = [
    {
      "id":0,
      'obj':[
        {
          "object": {
            "type": 1,
            "data": {
              "id": 33714670,
              "title": "死心塌地嫁给你，是我错了！",
              "slug": "c18f4b1aa6a7",
              "first_shared_at": "2018-09-20T10:42:37.000+08:00",
              "list_image_url": "http://upload-images.jianshu.io/upload_images/13967861-2e8169faadcc4c06",
              "public_abbr": "以下故事为保护当事人，用了化名并且做了适当的调整。 希望你能从中学到点什么，人生太短，不要让自己在痛苦里挣扎到结束...",
              "paid": false,
              "commentable": true,
              "user": {
                "id": 13967861,
                "nickname": "职场经验成长记",
                "slug": "2f26872d4a8f",
                "avatar": "http://upload.jianshu.io/users/upload_avatars/13967861/ef6dde47-aeb5-4e97-b576-5ecad88a5849.png"
              },
              "public_comments_count": 1,
              "total_rewards_count": 0,
              "likes_count": 0,
              "views_count": 11
            }
          }
        },
        {
          "object": {
            "type": 1,
            "data": {
              "id": 34194059,
              "title": "儿女越活越是宝，父母越活越像草",
              "slug": "64a0dd0b721b",
              "first_shared_at": "2018-09-20T10:42:47.000+08:00",
              "list_image_url": "",
              "public_abbr": "1 那天，她像往常一样出现在胡同口，看着我和母亲来了，脸上绽出笑容。母亲远远的叫了声“娘”！ 姥姥经常站在胡同口等...",
              "paid": false,
              "commentable": true,
              "user": {
                "id": 12515130,
                "nickname": "蜗牛赴水",
                "slug": "20e695b248a1",
                "avatar": "http://upload.jianshu.io/users/upload_avatars/12515130/e6b56e12-c1a6-4b89-9ca4-218f3e63ad33.jpg"
              },
              "public_comments_count": 0,
              "total_rewards_count": 0,
              "likes_count": 0,
              "views_count": 3
            }
          }
        },
        {
          "object": {
            "type": 1,
            "data": {
              "id": 34194913,
              "title": "午夜蓝的天空",
              "slug": "37a7dcfa9563",
              "first_shared_at": "2018-09-20T10:37:23.000+08:00",
              "list_image_url": "",
              "public_abbr": "午夜蓝的颜色 21岁那年，她开始穿蓝色。 那一年她大学毕业，那一年流行一种颜色：午夜蓝。不是午夜十分的蓝，而是天空...",
              "paid": false,
              "commentable": true,
              "user": {
                "id": 14110021,
                "nickname": "宝石stone",
                "slug": "1908398b42e1",
                "avatar": "http://cdn2.jianshu.io/assets/default_avatar/9-cceda3cf5072bcdd77e8ca4f21c40998.jpg"
              },
              "public_comments_count": 0,
              "total_rewards_count": 0,
              "likes_count": 0,
              "views_count": 1
            }
          }
        },
        {
          "object": {
            "type": 1,
            "data": {
              "id": 34094347,
              "title": "怀念，不如相见！",
              "slug": "a5050a924b0a",
              "first_shared_at": "2018-09-18T16:53:47.000+08:00",
              "list_image_url": "",
              "public_abbr": "1. 刘夏从未想过，会以这种方式与他相见。 两条平行的直线，无法相交，似是注定的结局。 两个毫无相干的人，红尘偶遇...",
              "paid": false,
              "commentable": true,
              "user": {
                "id": 10466299,
                "nickname": "心有灵犀若叔夜",
                "slug": "90b2402e5652",
                "avatar": "http://upload.jianshu.io/users/upload_avatars/10466299/76abef2b-a9ca-4243-be37-a2ea592a08a7.jpg"
              },
              "public_comments_count": 0,
              "total_rewards_count": 0,
              "likes_count": 1,
              "views_count": 13
            }
          }
        },
        {
          "object": {
            "type": 1,
            "data": {
              "id": 34194727,
              "title": "后宫",
              "slug": "0571b84ac7fe",
              "first_shared_at": "2018-09-20T10:28:07.000+08:00",
              "list_image_url": "",
              "public_abbr": "我是个冒险者，孜然一身，漂泊数年。 有天我遇到了一位精灵女性，她愿意与我一同上路。 我很开心。 酒馆的老板娘说，我...",
              "paid": false,
              "commentable": true,
              "user": {
                "id": 14117867,
                "nickname": "叔歧",
                "slug": "9494a6d5e82d",
                "avatar": "http://upload.jianshu.io/users/upload_avatars/14117867/ad6ce34c-3885-4ed2-8387-79fb92be942e.jpg"
              },
              "public_comments_count": 0,
              "total_rewards_count": 0,
              "likes_count": 0,
              "views_count": 2
            }
          }
        },
        {
          "object": {
            "type": 1,
            "data": {
              "id": 34193343,
              "title": "回家",
              "slug": "8860441669fd",
              "first_shared_at": "2018-09-20T10:19:38.000+08:00",
              "list_image_url": "",
              "public_abbr": "  今年已经是柱子服刑的第三年，也是最后一年，还有两个月就刑满了。明天是柱子二十五岁生日。三年来，柱子每年生日母亲...",
              "paid": false,
              "commentable": true,
              "user": {
                "id": 14120079,
                "nickname": "mufo",
                "slug": "bb92defdcd45",
                "avatar": "http://upload.jianshu.io/users/upload_avatars/14120079/ccff757e-4efd-4422-9a9f-2e270c0a5491"
              },
              "public_comments_count": 0,
              "total_rewards_count": 0,
              "likes_count": 0,
              "views_count": 3
            }
          }
        },
        {
          "object": {
            "type": 1,
            "data": {
              "id": 34194077,
              "title": "养私生子十八年，原配捅开惊天秘密",
              "slug": "375e7d9c64c8",
              "first_shared_at": "2018-09-20T10:17:29.000+08:00",
              "list_image_url": "",
              "public_abbr": "来源微信公众号：瓶里有故事，如需转载请联系该公众号，谢谢。 01 姑妈病重，我们一家开车回老家看她。 老公付勋开车...",
              "paid": false,
              "commentable": true,
              "user": {
                "id": 8665897,
                "nickname": "木木爱电影",
                "slug": "65bd0564dcee",
                "avatar": "http://upload.jianshu.io/users/upload_avatars/8665897/13bc7e1c-a081-41c0-a384-c2546e82d8e5.jpg"
              },
              "public_comments_count": 0,
              "total_rewards_count": 0,
              "likes_count": 0,
              "views_count": 3
            }
          }
        },
        {
          "object": {
            "type": 1,
            "data": {
              "id": 34191682,
              "title": "荤酒令|短篇小说",
              "slug": "eeaffdb592a7",
              "first_shared_at": "2018-09-20T09:55:57.000+08:00",
              "list_image_url": "http://upload-images.jianshu.io/upload_images/11680122-432325b1653103c5.jpg",
              "public_abbr": "晓影，高挑、漂亮，性格柔顺。 杨帆，高大、帅气，喜欢沾花惹草。 二人结婚后，杨帆安分了两年，新鲜劲一过，又回复了本...",
              "paid": false,
              "commentable": true,
              "user": {
                "id": 11680122,
                "nickname": "机息心远",
                "slug": "0b5f5f12b844",
                "avatar": "http://upload.jianshu.io/users/upload_avatars/11680122/a0b67a54-ef9a-4e1d-834d-12b3788cfda0.jpg"
              },
              "public_comments_count": 0,
              "total_rewards_count": 0,
              "likes_count": 0,
              "views_count": 2
            }
          }
        },
        {
          "object": {
            "type": 1,
            "data": {
              "id": 31748783,
              "title": "元和三年：李贺的少年心事",
              "slug": "42ec0e6cd3fd",
              "first_shared_at": "2018-08-02T22:53:02.000+08:00",
              "list_image_url": "",
              "public_abbr": "元和三年（808）,李贺18岁。 一年前，他应河南府试，凭着出众的才华，取得了“乡贡进士”的资格。元和三年的正月，...",
              "paid": false,
              "commentable": true,
              "user": {
                "id": 1475293,
                "nickname": "清水煮诗",
                "slug": "349138260a0b",
                "avatar": "http://upload.jianshu.io/users/upload_avatars/1475293/64a264df-3a0b-4f21-95ec-f53084c76021.jpg"
              },
              "public_comments_count": 0,
              "total_rewards_count": 0,
              "likes_count": 0,
              "views_count": 10
            }
          }
        },
        {
          "object": {
            "type": 1,
            "data": {
              "id": 34180347,
              "title": "柴门·犬吠",
              "slug": "6c2ab875f2a8",
              "first_shared_at": "2018-09-19T22:53:56.000+08:00",
              "list_image_url": "",
              "public_abbr": "（一） 山村宁静，夜的篝火刚刚燃起，夕阳撒下的帷幕正好遮至边际。迷迷蒙蒙的夜是空气中堆积的黑色墨水，稀稀疏疏的几户...",
              "paid": false,
              "commentable": true,
              "user": {
                "id": 12047090,
                "nickname": "向向丫",
                "slug": "ee5b8822754e",
                "avatar": "http://upload.jianshu.io/users/upload_avatars/12047090/fe54bb4d-0faf-4e35-b86b-a8df35129f1b.jpg"
              },
              "public_comments_count": 0,
              "total_rewards_count": 0,
              "likes_count": 1,
              "views_count": 7
            }
          }
        }
      ]
    },
    {
      "id":1,
      'obj':[
        {
          "object": {
            "type": 1,
            "data": {
              "id": 31523937,
              "title": "消逝的民俗——作者：李冰倩",
              "slug": "da9a2d181360",
              "first_shared_at": "2018-07-29T12:17:34.000+08:00",
              "list_image_url": "http://upload-images.jianshu.io/upload_images/9835749-97c93f7020ebd6f9.jpg",
              "public_abbr": "1 热字当头，烈日当空。这样的日子里，炎热的喘息，早早躲进在冰凉舒适的空调房里，渡过须臾。热浪滚滚，似乎晓东则对于...",
              "paid": false,
              "commentable": true,
              "user": {
                "id": 9835749,
                "nickname": "bollonmaster",
                "slug": "2c5a9afb90d8",
                "avatar": "http://upload.jianshu.io/users/upload_avatars/9835749/3fb45a2f-c739-415d-af69-9b49ca5dfb65.jpg"
              },
              "public_comments_count": 62,
              "total_rewards_count": 6,
              "likes_count": 76,
              "views_count": 2431
            }
          }
        },
        {
          "object": {
            "type": 1,
            "data": {
              "id": 34119311,
              "title": "意外",
              "slug": "decebf6c2806",
              "first_shared_at": "2018-09-19T21:43:18.000+08:00",
              "list_image_url": "http://upload-images.jianshu.io/upload_images/7805492-06807db2cb683acf.jpg",
              "public_abbr": "早晨九点钟刚过，这家单位就开启了一天紧张而忙碌的工作程序。 噔……噔噔……一阵阵儿急促上楼的脚步声此起彼伏，互相之...",
              "paid": false,
              "commentable": true,
              "user": {
                "id": 7805492,
                "nickname": "风铃草_",
                "slug": "7ee860ee7b12",
                "avatar": "http://upload.jianshu.io/users/upload_avatars/7805492/a503926f-8f90-4f39-8eea-bd12decf3087"
              },
              "public_comments_count": 16,
              "total_rewards_count": 0,
              "likes_count": 21,
              "views_count": 208
            }
          }
        },
        {
          "object": {
            "type": 1,
            "data": {
              "id": 34151802,
              "title": "瑶城诡事",
              "slug": "9d9da63c86c3",
              "first_shared_at": "2018-09-19T12:37:02.000+08:00",
              "list_image_url": "http://upload-images.jianshu.io/upload_images/3192203-8009104a6e457b4d.jpg",
              "public_abbr": "我的灵异事件薄26（瑶城诡事） 本故事由真实事件改编，由真人讲述。 作者：绿萝讲述：付美钧 （你说恐惧不过是你不敢...",
              "paid": false,
              "commentable": true,
              "user": {
                "id": 3192203,
                "nickname": "SN绿萝",
                "slug": "6df61a793cd4",
                "avatar": "http://upload.jianshu.io/users/upload_avatars/3192203/324e6453-b496-407c-af48-08b51c69e5bf.jpg"
              },
              "public_comments_count": 3,
              "total_rewards_count": 0,
              "likes_count": 2,
              "views_count": 40
            }
          }
        },
        {
          "object": {
            "type": 1,
            "data": {
              "id": 24133567,
              "title": "我最终没能熬过异地恋",
              "slug": "24e0e81fd282",
              "first_shared_at": "2018-02-20T10:52:45.000+08:00",
              "list_image_url": "http://upload-images.jianshu.io/upload_images/7802175-e268ea69e7189c99.jpeg",
              "public_abbr": "1 昨晚刷微博，看到有人说，当坚持之苦大过放弃之痛，就是该放手的时候了。 我瞬间湿了眼眶，因为我觉得这句话好像是说...",
              "paid": false,
              "commentable": true,
              "user": {
                "id": 7802175,
                "nickname": "落篱子",
                "slug": "4e51be50dfca",
                "avatar": "http://upload.jianshu.io/users/upload_avatars/7802175/de871404-8fd9-416e-8c5b-87d22e52659f.jpg"
              },
              "public_comments_count": 52,
              "total_rewards_count": 0,
              "likes_count": 61,
              "views_count": 1198
            }
          }
        },
        {
          "object": {
            "type": 1,
            "data": {
              "id": 34157144,
              "title": "高明的黄太太",
              "slug": "f7049b3d4457",
              "first_shared_at": "2018-09-19T14:52:02.000+08:00",
              "list_image_url": "",
              "public_abbr": "屋外大雨倾盆，屋内春光乍泄。 张莹穿着黑色的镂空蕾丝内衣，曼妙的身材一览无遗，黑色如瀑的长发倾泻下来，小脸微仰，俏...",
              "paid": false,
              "commentable": true,
              "user": {
                "id": 14029783,
                "nickname": "帘卷微风起",
                "slug": "9c88be11873d",
                "avatar": "http://upload.jianshu.io/users/upload_avatars/14029783/a4dd3579-5a03-475c-b124-79064486d378.jpg"
              },
              "public_comments_count": 6,
              "total_rewards_count": 0,
              "likes_count": 6,
              "views_count": 185
            }
          }
        },
        {
          "object": {
            "type": 1,
            "data": {
              "id": 32990202,
              "title": "舞之魂，心之动",
              "slug": "62e4977ecdd2",
              "first_shared_at": "2018-09-14T14:00:20.000+08:00",
              "list_image_url": "http://upload-images.jianshu.io/upload_images/10910113-a09809b6daf6151d.jpg",
              "public_abbr": "“旋转，跳跃，踢腿，好，转身，弯腰，好，注意，手与脚的配合。停！知羽，注意你的表情，你这是干什么？跳舞是一件愉悦的...",
              "paid": false,
              "commentable": true,
              "user": {
                "id": 10910113,
                "nickname": "人海中的沙子",
                "slug": "985b82764dbc",
                "avatar": "http://upload.jianshu.io/users/upload_avatars/10910113/e29f1eb3-6777-4b65-b30f-7036961893f7.jpg"
              },
              "public_comments_count": 3,
              "total_rewards_count": 0,
              "likes_count": 14,
              "views_count": 225
            }
          }
        },
        {
          "object": {
            "type": 1,
            "data": {
              "id": 33762306,
              "title": "因女儿远嫁不能尽孝老人跳楼——被理解的陪伴才是最长情的告白",
              "slug": "08486761fd65",
              "first_shared_at": "2018-09-14T11:00:53.000+08:00",
              "list_image_url": "",
              "public_abbr": "1 最近，这则新闻火了，只因女儿在外地工作并交了男朋友，怕女儿不能留在自己身边尽孝，老人将家里的东西从七楼逐一抛下...",
              "paid": false,
              "commentable": true,
              "user": {
                "id": 6548400,
                "nickname": "矫情小白菜",
                "slug": "da6ed4878134",
                "avatar": "http://upload.jianshu.io/users/upload_avatars/6548400/224b0d91-bdae-47c5-abd1-26b7df049b04.jpg"
              },
              "public_comments_count": 12,
              "total_rewards_count": 0,
              "likes_count": 8,
              "views_count": 593
            }
          }
        },
        {
          "object": {
            "type": 1,
            "data": {
              "id": 29208708,
              "title": "这样的女孩，真的很酷很漂亮",
              "slug": "c28b3e8de0d4",
              "first_shared_at": "2018-06-08T11:33:34.000+08:00",
              "list_image_url": "http://upload-images.jianshu.io/upload_images/2090254-598af4e2f6ed53cf",
              "public_abbr": "01 最近看了一档何炅主持的《儿行千里》节目，被其中一个22岁女孩谢仁慈的故事打动了。 四岁时，她跟着妈妈去朋友的...",
              "paid": false,
              "commentable": true,
              "user": {
                "id": 2090254,
                "nickname": "漫漫Chan",
                "slug": "6e176873807c",
                "avatar": "http://upload.jianshu.io/users/upload_avatars/2090254/d933b60b-4056-4fc4-9a78-4d1223c91900.jpg"
              },
              "public_comments_count": 36,
              "total_rewards_count": 0,
              "likes_count": 296,
              "views_count": 11819
            }
          }
        },
        {
          "object": {
            "type": 1,
            "data": {
              "id": 31155803,
              "title": "我想睡你，与你的身体无关",
              "slug": "cad89903ed1f",
              "first_shared_at": "2018-07-26T09:35:19.000+08:00",
              "list_image_url": "http://upload-images.jianshu.io/upload_images/4247381-b4bb9f3024b7baff.jpeg",
              "public_abbr": "1. 我叫思嘉，是一个白领丽人，白天是写字楼里身穿高级定制套装的部门经理，做事利落干练，说一不二。 夜晚，我是妩媚...",
              "paid": false,
              "commentable": true,
              "user": {
                "id": 4247381,
                "nickname": "佳人如玉",
                "slug": "2469d71783ba",
                "avatar": "http://upload.jianshu.io/users/upload_avatars/4247381/57049157-4f13-40cd-8f90-d82f2626b7e5.jpg"
              },
              "public_comments_count": 63,
              "total_rewards_count": 0,
              "likes_count": 157,
              "views_count": 10484
            }
          }
        },
        {
          "object": {
            "type": 1,
            "data": {
              "id": 34187009,
              "title": "愿你前程似锦，愿你有人陪伴",
              "slug": "8e805f1af34c",
              "first_shared_at": "2018-09-20T06:25:41.000+08:00",
              "list_image_url": "http://upload-images.jianshu.io/upload_images/6326949-b3e8b72421036452.png",
              "public_abbr": "文 | 彼怀 2018/09/20     星期四     天气晴 -1- 我们在世间兜兜转转，跑个不停，好像是弄...",
              "paid": false,
              "commentable": true,
              "user": {
                "id": 6326949,
                "nickname": "彼怀",
                "slug": "6ab6a4f9242b",
                "avatar": "http://upload.jianshu.io/users/upload_avatars/6326949/7aa6a8d5-d1eb-4a43-9eba-c4f6289029c0.jpg"
              },
              "public_comments_count": 2,
              "total_rewards_count": 0,
              "likes_count": 5,
              "views_count": 47
            }
          }
        }
      ]
    },
    {
      "id":2,
      'obj':[
        {
          "object": {
            "type": 1,
            "data": {
              "id": 3201298,
              "title": "对啊，就是嫌你穷才分手的啊",
              "slug": "5b37403f6ba6",
              "first_shared_at": "2016-03-09T19:34:16.000+08:00",
              "list_image_url": "http://upload-images.jianshu.io/upload_images/103920-4d118b7a8f23dfba.png",
              "public_abbr": "文/七毛               -1- “饿。” 发完这条状态三小时后，我就成了杨哥的女友。 他把饥肠辘辘的...",
              "paid": false,
              "commentable": true,
              "user": {
                "id": 103920,
                "nickname": "七毛是我",
                "slug": "7b9d83da9052",
                "avatar": "http://upload.jianshu.io/users/upload_avatars/103920/3ecd35742333.jpg"
              },
              "public_comments_count": 4149,
              "total_rewards_count": 193,
              "likes_count": 11343,
              "views_count": 289504
            }
          }
        },
        {
          "object": {
            "type": 1,
            "data": {
              "id": 2584312,
              "title": "其实也可以，先结婚再恋爱",
              "slug": "cf6a27b72f1e",
              "first_shared_at": "2015-12-22T17:09:49.000+08:00",
              "list_image_url": "http://upload-images.jianshu.io/upload_images/1161272-5f4ebcab5c47fe60.jpg",
              "public_abbr": "1 人家说，一个男人智商没有200就不要想着出轨了。可顾青智商可能连20都没到，居然也出轨了。 我当时准备跟顾青结...",
              "paid": false,
              "commentable": true,
              "user": {
                "id": 1161272,
                "nickname": "听说阿念",
                "slug": "18cb7688181e",
                "avatar": "http://upload.jianshu.io/users/upload_avatars/1161272/759f8e2fbc0b"
              },
              "public_comments_count": 2227,
              "total_rewards_count": 80,
              "likes_count": 9576,
              "views_count": 182611
            }
          }
        },
        {
          "object": {
            "type": 1,
            "data": {
              "id": 2769714,
              "title": "分开以后我变成了你喜欢的样子",
              "slug": "a78fd58f2943",
              "first_shared_at": "2016-01-06T10:57:56.000+08:00",
              "list_image_url": "http://upload-images.jianshu.io/upload_images/1297994-7d9f0e1fff6e9861.jpeg",
              "public_abbr": "2016年的跨年夜，我没有看各大卫视的晚会，只是一个人看完了五月天2012年诺亚方舟演唱会的视频。 十一点半的时候...",
              "paid": false,
              "commentable": true,
              "user": {
                "id": 1297994,
                "nickname": "Josie乔",
                "slug": "3fdcc04b7bd7",
                "avatar": "http://upload.jianshu.io/users/upload_avatars/1297994/fea8ebc19947.jpg"
              },
              "public_comments_count": 2222,
              "total_rewards_count": 31,
              "likes_count": 8909,
              "views_count": 186378
            }
          }
        },
        {
          "object": {
            "type": 1,
            "data": {
              "id": 3588441,
              "title": "单身是最好的升值期",
              "slug": "1e4891ab59d8",
              "first_shared_at": "2016-04-15T10:15:09.000+08:00",
              "list_image_url": "http://upload-images.jianshu.io/upload_images/573708-3139c00b0d571cd9.jpg",
              "public_abbr": "- 1 - 为什么单身？因为想变成更好的自己啊 昨晚在微信后台发起了一个话题“你单身吗？单身多久了？在你单身的这段...",
              "paid": false,
              "commentable": true,
              "user": {
                "id": 573708,
                "nickname": "叶上清之宿雨",
                "slug": "72f7e8a56495",
                "avatar": "http://upload.jianshu.io/users/upload_avatars/573708/6fe11c7a1c5f.jpg"
              },
              "public_comments_count": 1890,
              "total_rewards_count": 55,
              "likes_count": 7901,
              "views_count": 139876
            }
          }
        },
        {
          "object": {
            "type": 1,
            "data": {
              "id": 3592039,
              "title": "你真的在努力吗？别骗自己了",
              "slug": "9eb3f3368faa",
              "first_shared_at": "2016-04-15T14:43:28.000+08:00",
              "list_image_url": "http://upload-images.jianshu.io/upload_images/569985-f89e713d1eb9a026.png",
              "public_abbr": "这世界上所有的东西都是等价的，你不努力就想着一步登天，别做梦了，好吗？ （一） 每次打开微博，都是几十条未关注人私...",
              "paid": false,
              "commentable": true,
              "user": {
                "id": 569985,
                "nickname": "安梳颜",
                "slug": "d90828191ace",
                "avatar": "http://upload.jianshu.io/users/upload_avatars/569985/0b0cd539-7b8c-457c-acc7-7ed941bb0a69.jpg"
              },
              "public_comments_count": 1341,
              "total_rewards_count": 44,
              "likes_count": 7759,
              "views_count": 126004
            }
          }
        },
        {
          "object": {
            "type": 1,
            "data": {
              "id": 3496651,
              "title": "我所亲历的穷学生思维",
              "slug": "6dafbf77ddcc",
              "first_shared_at": "2016-04-07T17:27:33.000+08:00",
              "list_image_url": "http://upload-images.jianshu.io/upload_images/1798462-33f98739d0a0efda.jpg",
              "public_abbr": "老是被同事说学生气浓重，也经常有学生问，老师你是不是还没毕业？ 我猜想可能是因为经常背双肩包吧。 后来我斗胆微信上...",
              "paid": false,
              "commentable": true,
              "user": {
                "id": 1798462,
                "nickname": "傻狍子豆",
                "slug": "9f821ca9a902",
                "avatar": "http://upload.jianshu.io/users/upload_avatars/1798462/2a1d2961b439.jpg"
              },
              "public_comments_count": 1367,
              "total_rewards_count": 76,
              "likes_count": 7462,
              "views_count": 149963
            }
          }
        },
        {
          "object": {
            "type": 1,
            "data": {
              "id": 5179784,
              "title": "有的人年纪轻轻就不行了",
              "slug": "e7775e6c425c",
              "first_shared_at": "2016-08-10T14:00:32.000+08:00",
              "list_image_url": "http://upload-images.jianshu.io/upload_images/1053779-2242edbc5fc087a4.jpg",
              "public_abbr": "01 坚持从来无关意志力，只是你不够重视而已。 2016年8月10日，对我来说是一个值得纪念的日子。今天是我连续吃...",
              "paid": false,
              "commentable": true,
              "user": {
                "id": 1053779,
                "nickname": "悠南Alisa",
                "slug": "24fd97d2fb87",
                "avatar": "http://upload.jianshu.io/users/upload_avatars/1053779/7586cce4-3b20-4554-8ed3-c8cda1420b3d.jpg"
              },
              "public_comments_count": 1415,
              "total_rewards_count": 37,
              "likes_count": 6374,
              "views_count": 134203
            }
          }
        },
        {
          "object": {
            "type": 1,
            "data": {
              "id": 1301270,
              "title": "初恋教会我们爱",
              "slug": "860b2d77ced1",
              "first_shared_at": "2015-05-09T15:57:49.000+08:00",
              "list_image_url": "",
              "public_abbr": "文/宋小君 青春期，两件事能影响男人的一辈子——梦遗，初恋。 梦遗，让男人知道了世界上原来还有一件比玩具更好玩的事...",
              "paid": false,
              "commentable": true,
              "user": {
                "id": 396509,
                "nickname": "宋小君",
                "slug": "2870cb3c6f77",
                "avatar": "http://upload.jianshu.io/users/upload_avatars/396509/8af1fe9bb4da"
              },
              "public_comments_count": 1130,
              "total_rewards_count": 14,
              "likes_count": 5439,
              "views_count": 301591
            }
          }
        },
        {
          "object": {
            "type": 1,
            "data": {
              "id": 5298022,
              "title": "20岁以后，你要学会富养自己",
              "slug": "4b3606fae060",
              "first_shared_at": "2016-08-16T12:58:48.000+08:00",
              "list_image_url": "http://upload-images.jianshu.io/upload_images/1537594-721361a03e183669.JPG",
              "public_abbr": "一 我会对自己说，阿夜，如果你不能改变目前的生存现状，那么，你要学会改变自己，只有改变了自己，生存状态也才会随之改...",
              "paid": false,
              "commentable": true,
              "user": {
                "id": 1537594,
                "nickname": "十三夜",
                "slug": "bfe4c3547845",
                "avatar": "http://upload.jianshu.io/users/upload_avatars/1537594/4c696d93-c011-4f06-87ef-5ae70de3511f.jpg"
              },
              "public_comments_count": 1259,
              "total_rewards_count": 76,
              "likes_count": 5192,
              "views_count": 117249
            }
          }
        }
      ]
    }
  ]
  return arr
};
function getNavCon(id,ify){
  let len, res,i=0;
  if(ify == '详情'){
    len = navCon()
  }else if(ify == '主页'){
    len = hotCon()
  }else{
    len = comment()
  }
  len.forEach(function(i){
    if(id == i.id){
      res=i
    }
  })
  return res || {}
}