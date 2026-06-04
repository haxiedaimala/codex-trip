<template>
  <div class="page">
    <div v-if="loading" class="panel loading-state">正在加载路线详情...</div>
    <div v-else-if="!routeDetail" class="panel empty-state">路线不存在或数据未找到。</div>
    <template v-else>
      <section class="panel detail-hero">
        <img class="detail-cover" :src="routeDetail.cover" :alt="routeDetail.name" />
        <div class="detail-overlay">
          <small>{{ routeDetail.days }} 日安排</small>
          <h1>{{ routeDetail.name }}</h1>
          <p>{{ routeDetail.summary }}</p>
        </div>
      </section>

      <section class="panel section">
        <SectionTitle title="路线概览" hint="适合快速确认节奏" />
        <div class="meta-grid">
          <div class="meta-item">
            <label>适合人群</label>
            <strong>{{ routeDetail.suitable }}</strong>
          </div>
          <div class="meta-item">
            <label>建议出发</label>
            <strong>{{ routeDetail.startTime }}</strong>
          </div>
        </div>
      </section>

      <section class="panel section">
        <SectionTitle title="行程节点" hint="按时间顺序浏览" />
        <ul class="bullet-list">
          <li v-for="item in routeDetail.plan" :key="item">{{ item }}</li>
        </ul>
      </section>

      <section v-if="routeSpots.length" class="panel section">
        <SectionTitle title="路线包含景点" hint="可继续进入详情页" />
        <div class="list-stack">
          <SpotCard v-for="spot in routeSpots" :key="spot.id" :spot="spot" />
        </div>
      </section>
    </template>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { getRouteDetail, getSpots } from "../api/travel";
import SectionTitle from "../components/SectionTitle.vue";
import SpotCard from "../components/SpotCard.vue";

const route = useRoute();
const routeDetail = ref(null);
const routeSpots = ref([]);
const loading = ref(true);

onMounted(async () => {
  routeDetail.value = await getRouteDetail(route.params.id);

  if (routeDetail.value) {
    const allSpots = await getSpots();
    routeSpots.value = allSpots.filter((item) => routeDetail.value.spots.includes(item.id));
  }

  loading.value = false;
});
</script>

<style scoped>
.detail-hero {
  overflow: hidden;
  position: relative;
  min-height: 260px;
}

.detail-cover {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.detail-overlay {
  position: relative;
  min-height: 260px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 10px;
  padding: 22px;
  color: #fffaf4;
  background: linear-gradient(180deg, rgba(48, 29, 18, 0.08), rgba(48, 29, 18, 0.82));
}

.detail-overlay h1,
.detail-overlay p {
  margin: 0;
}

.detail-overlay small {
  width: fit-content;
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(255, 250, 244, 0.16);
}
</style>
