export default [
  {
    id: 1,
    name: "北京经典一日游",
    days: 1,
    cover:
      "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1200&q=80",
    summary: "适合首次来北京的游客，一天内集中体验中轴线和胡同氛围。",
    suitable: "首次来京、时间有限游客",
    startTime: "08:00",
    spots: [2, 1, 6, 7],
    plan: [
      "08:00 天安门广场感受北京城市地标氛围",
      "09:00 故宫博物院游览核心建筑群",
      "14:30 南锣鼓巷轻松逛吃休息",
      "18:30 什刹海夜游收尾"
    ]
  },
  {
    id: 2,
    name: "北京精华两日游",
    days: 2,
    cover:
      "https://images.unsplash.com/photo-1547981609-4b6bf67db7ce?auto=format&fit=crop&w=1200&q=80",
    summary: "兼顾历史文化与城市地标，适合周末两天行程。",
    suitable: "周末短途游客",
    startTime: "09:00",
    spots: [1, 5, 4, 8],
    plan: [
      "Day1 09:00 故宫博物院深度游览",
      "Day1 15:00 天坛公园慢游，感受皇家祭祀空间",
      "Day2 09:30 颐和园漫步湖岸和长廊",
      "Day2 18:00 前往鸟巢片区看夜景"
    ]
  }
];
