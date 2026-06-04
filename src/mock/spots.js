export default [
  {
    id: 1,
    name: "故宫博物院",
    category: "历史文化",
    cover:
      "https://images.unsplash.com/photo-1547981609-4b6bf67db7ce?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1547981609-4b6bf67db7ce?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&q=80"
    ],
    score: 4.9,
    price: "60元起",
    openTime: "08:30-17:00",
    playTime: "3-4小时",
    season: "春秋最佳",
    address: "北京市东城区景山前街4号",
    tags: ["世界文化遗产", "皇家宫殿", "热门景点"],
    summary: "北京必打卡地标，明清两代皇家宫殿。",
    intro:
      "故宫是中国明清两代皇家宫殿，适合用半天以上时间沿中轴线慢慢看建筑、展陈和院落秩序。",
    highlights: ["太和殿与三大殿", "珍宝馆与钟表馆", "中轴线建筑群"],
    tips: ["建议提前预约门票", "节假日尽量早入园，避开高峰时段"],
    relatedIds: [2, 5, 6]
  },
  {
    id: 2,
    name: "天安门广场",
    category: "历史文化",
    cover:
      "https://images.unsplash.com/photo-1513026705753-bc3fffca8bf4?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1513026705753-bc3fffca8bf4?auto=format&fit=crop&w=1200&q=80"
    ],
    score: 4.8,
    price: "免费",
    openTime: "全天开放",
    playTime: "1-2小时",
    season: "四季皆宜",
    address: "北京市东城区东长安街",
    tags: ["地标广场", "升旗", "城市名片"],
    summary: "北京代表性城市空间，适合作为经典行程起点。",
    intro: "适合清晨看升旗或白天与故宫连线游览，是游客感受北京城市仪式感的重要地点。",
    highlights: ["广场视野开阔", "适合串联故宫行程", "城市核心地标"],
    tips: ["留意预约及安检要求", "节假日人流较大，提前规划到达时间"],
    relatedIds: [1, 5, 8]
  },
  {
    id: 3,
    name: "八达岭长城",
    category: "历史文化",
    cover:
      "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1200&q=80"
    ],
    score: 4.8,
    price: "40元起",
    openTime: "07:30-16:30",
    playTime: "4-5小时",
    season: "春秋最佳",
    address: "北京市延庆区军都山关沟古道北口",
    tags: ["世界文化遗产", "长城", "经典远郊"],
    summary: "最知名的长城段落之一，适合首次体验长城。",
    intro: "交通成熟、设施完善，是大多数游客首次登长城的优先选择，但旺季人流也相对集中。",
    highlights: ["经典长城视野", "适合拍照留念", "交通较成熟"],
    tips: ["建议预留往返交通时间", "舒适运动鞋更合适攀登"],
    relatedIds: [4, 8]
  },
  {
    id: 4,
    name: "颐和园",
    category: "皇家园林",
    cover:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1200&q=80"
    ],
    score: 4.9,
    price: "30元起",
    openTime: "06:00-20:00",
    playTime: "3-5小时",
    season: "春夏秋皆宜",
    address: "北京市海淀区新建宫门路19号",
    tags: ["皇家园林", "昆明湖", "长廊"],
    summary: "湖景与园林结合的经典皇家园林，适合悠闲慢游。",
    intro: "以昆明湖和万寿山为核心，既可步行赏景，也适合拍照和轻量休闲游。",
    highlights: ["长廊与佛香阁", "昆明湖游船视角", "适合慢节奏游览"],
    tips: ["园区较大，建议穿舒适鞋", "晴天注意防晒和补水"],
    relatedIds: [3, 8, 5]
  },
  {
    id: 5,
    name: "天坛公园",
    category: "历史文化",
    cover:
      "https://images.unsplash.com/photo-1555400113-4961f04d0ca4?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1555400113-4961f04d0ca4?auto=format&fit=crop&w=1200&q=80"
    ],
    score: 4.7,
    price: "15元起",
    openTime: "06:00-21:00",
    playTime: "2-3小时",
    season: "春秋最佳",
    address: "北京市东城区天坛东里甲1号",
    tags: ["祈年殿", "皇家祭祀", "文化景观"],
    summary: "兼具仪式感与园林空间的代表性景区。",
    intro: "天坛适合和故宫、天安门组合安排，既有地标建筑也有较舒缓的公园氛围。",
    highlights: ["祈年殿", "回音壁", "古树与中轴景观"],
    tips: ["可安排在上午或傍晚游览", "适合与周边经典景点串联"],
    relatedIds: [1, 2, 4]
  },
  {
    id: 6,
    name: "南锣鼓巷",
    category: "胡同街区",
    cover:
      "https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&w=1200&q=80"
    ],
    score: 4.5,
    price: "免费",
    openTime: "全天开放",
    playTime: "1-2小时",
    season: "四季皆宜",
    address: "北京市东城区南锣鼓巷胡同",
    tags: ["胡同", "美食", "城市漫游"],
    summary: "适合轻松逛吃和感受老北京街区氛围。",
    intro: "适合安排在下午或晚上，节奏轻松，适合拍照、喝咖啡、顺路体验胡同生活感。",
    highlights: ["胡同肌理", "小店与咖啡馆", "夜间氛围轻松"],
    tips: ["高峰时段较拥挤", "可和什刹海安排同一天游玩"],
    relatedIds: [7, 1, 2]
  },
  {
    id: 7,
    name: "什刹海",
    category: "胡同街区",
    cover:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
    ],
    score: 4.6,
    price: "免费",
    openTime: "全天开放",
    playTime: "2小时",
    season: "春夏秋皆宜",
    address: "北京市西城区羊房胡同23号附近",
    tags: ["湖区夜景", "休闲散步", "胡同周边"],
    summary: "适合傍晚散步、夜游和体验北京休闲氛围。",
    intro: "湖边散步体验较好，可和南锣鼓巷、鼓楼片区联动，形成轻松的城市夜游路线。",
    highlights: ["环湖散步", "夜景氛围", "酒吧与文艺街区"],
    tips: ["建议傍晚以后前往", "冬季注意湖边体感温度偏低"],
    relatedIds: [6, 2, 8]
  },
  {
    id: 8,
    name: "鸟巢",
    category: "现代地标",
    cover:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
    ],
    score: 4.6,
    price: "50元起",
    openTime: "10:00-22:00",
    playTime: "1-2小时",
    season: "四季皆宜",
    address: "北京市朝阳区国家体育场南路1号",
    tags: ["现代建筑", "奥运地标", "夜景"],
    summary: "北京现代城市地标之一，适合夜景打卡。",
    intro: "与水立方片区适合联动游览，夜间灯光氛围较强，适合城市摄影和轻量打卡。",
    highlights: ["奥运建筑外观", "夜景灯光", "适合与奥林匹克公园联动"],
    tips: ["傍晚前后到达更适合拍照", "可与颐和园安排同一日但注意距离"],
    relatedIds: [4, 2, 7]
  }
];
