<template>
  <div class="page">
    <TopBanner v-if="banner" :banner="banner" />

    <SearchBar v-model="keyword" />

    <section class="panel section">
      <SectionTitle title="热门景点" hint="北京初次旅行优先看这些" />
      <div v-if="loadingSpots" class="loading-state">正在加载景点...</div>
      <div v-else class="list-stack">
        <SpotCard v-for="spot in filteredHotSpots" :key="spot.id" :spot="spot" />
      </div>
      <RouterLink class="soft-link" to="/spots">查看全部景点</RouterLink>
    </section>

    <section class="panel section">
      <SectionTitle title="推荐路线" hint="控制节奏，轻松安排" />
      <div v-if="loadingRoutes" class="loading-state">正在加载路线...</div>
      <div v-else class="list-stack">
        <RouteCard v-for="routeItem in routes" :key="routeItem.id" :route-item="routeItem" />
      </div>
    </section>

    <section class="panel section">
      <SectionTitle title="出行提醒" hint="先看这几条会更省心" />
      <ul v-if="tips" class="bullet-list">
        <li v-for="notice in tips.notices.slice(0, 3)" :key="notice">{{ notice }}</li>
      </ul>
      <RouterLink class="soft-link" to="/tips">查看完整旅行贴士</RouterLink>
    </section>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { RouterLink } from "vue-router";
import { getBanners, getRoutes, getSpots, getTips } from "../api/travel";
import RouteCard from "../components/RouteCard.vue";
import SearchBar from "../components/SearchBar.vue";
import SectionTitle from "../components/SectionTitle.vue";
import SpotCard from "../components/SpotCard.vue";
import TopBanner from "../components/TopBanner.vue";

const banner = ref(null);
const routes = ref([]);
const tips = ref(null);
const hotSpots = ref([]);
const keyword = ref("");
const loadingRoutes = ref(true);
const loadingSpots = ref(true);

const filteredHotSpots = computed(() =>
  hotSpots.value.filter((item) => item.name.includes(keyword.value.trim()))
);

onMounted(async () => {
  const [bannerList, routeList, tipData, spotList] = await Promise.all([
    getBanners(),
    getRoutes(),
    getTips(),
    getSpots({ limit: 4 })
  ]);

  banner.value = bannerList[0] || null;
  routes.value = routeList;
  tips.value = tipData;
  hotSpots.value = spotList;
  loadingRoutes.value = false;
  loadingSpots.value = false;
});
</script>
