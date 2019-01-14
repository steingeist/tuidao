module.exports = {
  title: "退岛幽灵社",
  base: "/tuidao/",
  markdown: {
    toc: {
      includeLevel: [1, 2, 3]
    }
  },
  description: "Have a nice day",
  themeConfig: {
    nav: [{
        text: "Home",
        link: "/"
      },
      {
        text: "About us",
        link: "/about/"
      }
    ],
    sidebar: [
      "/",
      "/about/",
      "/storyline/",
      {
        title: '冒险岛英雄',
        children: [
          '/character/aran/',
          '/character/evan/',
          '/character/luminous/',
          '/character/mercedes/',
          '/character/phantom/',
          '/character/eunwol/'
        ]
      },
      {
        title: "其它角色",
        children: [
          "/character/sengoku/",
          "/character/kaiser/",
          "/character/xenon/",
          "/character/demon/"
        ]
      },
      {
        title: "黑魔法师军团",
        children: [
          "/majorboss/blackmega/",
          "/majorboss/magnus/",
          "/majorboss/vonLeon/"
        ]
      },
      {
        title: "世界旅行",
        children: [
          "/map/ellinia/",
          "/map/perion/",
          "/map/secretGarden/",
          "/map/kemingCity/",
          "/map/santRenia/",
          "/map/elNath/",
          "/map/ellinForest/",
          "/map/lionCastle/"
        ]
      }
    ],
    lastUpdated: 'Last Updated'
  }
};
