<template>
  <div class="page">
    <div v-if="loading" class="panel loading-state">正在加载景点详情...</div>
    <div v-else-if="!spot" class="panel empty-state">景点不存在或数据未找到。</div>
    <template v-else>
      <section class="panel detail-hero">
        <img class="detail-cover" :src="spot.cover" :alt="spot.name" />
        <div class="detail-overlay">
          <small>{{ spot.category }}</small>
          <h1>{{ spot.name }}</h1>
          <p>{{ spot.summary }}</p>
          <div class="chip-row">
            <span v-for="tag in spot.tags" :key="tag" class="chip">{{ tag }}</span>
          </div>
        </div>
      </section>

      <section class="panel section">
        <SectionTitle title="基础信息" hint="适合出发前快速确认" />
        <div class="meta-grid">
          <div class="meta-item">
            <label>开放时间</label>
            <strong>{{ spot.openTime }}</strong>
          </div>
          <div class="meta-item">
            <label>参考门票</label>
            <strong>{{ spot.price }}</strong>
          </div>
          <div class="meta-item">
            <label>建议时长</label>
            <strong>{{ spot.playTime }}</strong>
          </div>
          <div class="meta-item">
            <label>推荐季节</label>
            <strong>{{ spot.season }}</strong>
          </div>
        </div>
      </section>

      <section class="panel section">
        <SectionTitle title="景点介绍" hint="适合决定是否纳入行程" />
        <p class="detail-text">{{ spot.intro }}</p>
        <h3>必看亮点</h3>
        <ul class="bullet-list">
          <li v-for="item in spot.highlights" :key="item">{{ item }}</li>
        </ul>
        <h3>游玩建议</h3>
        <ul class="bullet-list">
          <li v-for="item in spot.tips" :key="item">{{ item }}</li>
        </ul>
        <p class="detail-address">地址：{{ spot.address }}</p>
      </section>

      <section v-if="related.length" class="panel section">
        <SectionTitle title="相关景点" hint="顺路安排更顺畅" />
        <div class="list-stack">
          <SpotCard v-for="item in related" :key="item.id" :spot="item" />
        </div>
      </section>
    </template>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { getRelatedSpots, getSpotDetail } from "../api/travel";
import SectionTitle from "../components/SectionTitle.vue";
import SpotCard from "../components/SpotCard.vue";

const route = useRoute();
const spot = ref(null);
const related = ref([]);
const loading = ref(true);

onMounted(async () => {
  spot.value = await getSpotDetail(route.params.id);
  related.value = spot.value ? await getRelatedSpots(spot.value.relatedIds) : [];
  loading.value = false;
});
</script>

<style scoped>
.detail-hero {
  overflow: hidden;
  position: relative;
  min-height: 280px;
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
  min-height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 10px;
  padding: 22px;
  color: #fffaf4;
  background: linear-gradient(180deg, rgba(48, 29, 18, 0.1), rgba(48, 29, 18, 0.82));
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

.detail-text {
  margin: 0 0 16px;
  color: var(--text);
}

.detail-address {
  margin: 16px 0 0;
  color: var(--muted);
}
</style>
