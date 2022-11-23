module.exports = {
  dest: "blog",
  theme: "reco",
  title: "SugarysBlog",
  description: "Life and record",
  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
  ],
  themeConfig: {
    type: "blog",
    huawei: false,
    nav: [
      { text: "首页", link: "/", icon: "reco-home" },
      { text: "笔记", link: "/note/", icon: "reco-document" },
      { text: "时间轴", link: "/timeline/", icon: "reco-date" },
      {
        text: "相册",
        link: "https://photo.smallsunnyfox.com/",
        icon: "reco-blog",
      },
      { text: "关于", link: "/about/", icon: "reco-account" },
    ],
    friendLink: [
      {
        title: "午后南杂",
        desc: "Enjoy when you can, and endure when you must.",
        logo: "https://photo.smallsunnyfox.com/images/blog/friendlink/reco.png",
        link: "https://www.recoluan.com",
      },
      {
        title: "vuepress-theme-reco",
        desc: "A simple and beautiful vuepress Blog & Doc theme.",
        logo:
          "https://photo.smallsunnyfox.com/images/blog/friendlink/theme_reco.png",
        link: "https://vuepress-theme-reco.recoluan.com",
      },
      {
        title: "L1nSn0w’s Blog",
        desc: "一名热爱计算机与iOS的高中生",
        logo:
          "https://photo.smallsunnyfox.com/images/blog/friendlink/lin_snow.png",
        link: "https://l1nsn0w.gitee.io",
      },
      {
        title: "ImCao",
        desc: "NUAA大佬",
        logo: "https://www.imcao.cn/avatar.png",
        link: "https://www.imcao.cn/",
      },
    ],
    // 博客设置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: "分类", // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: "标签", // 默认 “标签”
      },
    },
    logo: "http://files.sugarys.top/img/logo.png",
    // 搜索设置
    search: true,
    searchMaxSuggestions: 9,
    // 自动形成侧边导航
    subSidebar: "auto",
    sidebarDepth: 1,
    displayAllHeaders: false,
    sidebar: {
      "/note/": [
        {
          title: "HTML5",
          collapsable: true,
          children: [
            "html5/HTML5的语义元素",
            "html5/HTML5多媒体标签",
            "html5/HTML5表单元素",
            "html5/HTML5中的API",
            "html5/Canvas",
          ],
        },
        {
          title: "CSS",
          collapsable: true,
          children: ["css/css3新特性", "css/css3Flip"],
        },
        {
          title: "JS",
          collapsable: true,
          children: [
            "js/js数据类型",
            "js/js对象",
            "js/js继承",
            "js/js原型链、闭包",
            "js/js函数的四种调用方式",
          ],
        },
        {
          title: "Vue.js",
          collapsable: true,
          children: ["Vue/Vue基础笔记", "Vue/Vue组件"],
        },
        {
          title: "前端单元测试",
          collapsable: true,
          children: [
            "fe-unit-test/chai",
            "fe-unit-test/mocha",
            "fe-unit-test/vueTestUtils",
          ],
        },
        {
          title: "微信小程序",
          collapsable: true,
          children: ["wechat-mini-program/初识微信小程序"],
        },
      ],
    },
    // 最后更新时间
    lastUpdated: "上次更新",
    // 作者
    author: "兜里有糖",
    authorAvatar: "http://files.sugarys.top/img/author.png",
    // 备案号
    record: "Copyright © 2021-2022 | Sugarys",
    recordLink: "http://www.sugarys.top/",
    // cyberSecurityRecord: '',
    // cyberSecurityLink: '',
    // 项目开始时间
    startYear: "2021",
  },
  markdown: {
    lineNumbers: true,
  },
  plugins: [
    [
      require("./plugins/BgMusic"),
      {
        audios: [
          {
            name: "夜、萤火虫和你",
            artist: "ALisa",
            url:
              "http://files.sugarys.top/music/01.mp3",
            cover: "http://files.sugarys.top/img/music01.png",
          },
          {
            name: "城南花已开",
            artist: "三亩地",
            url:
              "http://files.sugarys.top/music/02.mp3",
            cover: "http://files.sugarys.top/img/music02.png",
          },
          {
            name: "一直很安静",
            artist: "阿桑",
            url:
              "http://files.sugarys.top/music/05.mp3",
            cover: "http://files.sugarys.top/img/music05.png",
          },
          {
            name: "日不落",
            artist: "张大黄",
            url:
              "http://files.sugarys.top/music/06.mp3",
            cover: "http://files.sugarys.top/img/music06.png",
          },
        ],
      },
    ],
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: {
          message: "发现新内容可用",
          buttonText: "刷新",
        },
      },
    ],
    [
      "permalink-pinyin",
      {
        lowercase: true,
        separator: "-",
      },
    ],
    [
      "ribbon-animation",
      {
        size: 90, // 默认数据
        opacity: 0.3, //  透明度
        zIndex: -1, //  层级
        opt: {
          // 色带HSL饱和度
          colorSaturation: "80%",
          // 色带HSL亮度量
          colorBrightness: "60%",
          // 带状颜色不透明度
          colorAlpha: 0.6,
          // 在HSL颜色空间中循环显示颜色的速度有多快
          colorCycleSpeed: 6,
          // 从哪一侧开始Y轴 (top|min, middle|center, bottom|max, random)
          verticalPosition: "center",
          // 到达屏幕另一侧的速度有多快
          horizontalSpeed: 200,
          // 在任何给定时间，屏幕上会保留多少条带
          ribbonCount: 2,
          // 添加笔划以及色带填充颜色
          strokeSize: 0,
          // 通过页面滚动上的因子垂直移动色带
          parallaxAmount: -0.5,
          // 随着时间的推移，为每个功能区添加动画效果
          animateSections: true,
        },
        ribbonShow: false, //点击彩带true显示false为不显示
        ribbonAnimationShow: true, //滑动彩带
      },
    ],
    ["cursor-effects"],
    [
      "sakura",
      {
        num: 20,
        show: true,
        zIndex: -1,
        img: {
          replace: false,
          httpUrl: "...",
        },
      },
    ],
    [
      require('./plugins/KanBanNiang'),
      {
        theme: ['blackCat'],
        width: 200,
        height: 270,
        modelStyle: {
          position: 'fixed',
          right: '90px',
          bottom: '-20px',
          opacity: '0.9'
        },
        messageStyle: {
          position: 'fixed',
          right: '100px',
          bottom: '220px'
        },
        btnStyle: {
          bottom: '50px',
          right: '110px'
        }
      }
    ],
    [
      "vuepress-plugin-nuggets-style-copy",
      {
        copyText: "复制代码",
        tip: {
          content: "复制成功",
        },
      },
    ],
  ],
};
