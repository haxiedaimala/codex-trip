<template>
  <div class="page">
    <header class="page-header">
      <h1>推荐路线</h1>
      <p>控制复杂度，只保留适合北京短途出行的轻量路线建议。</p>
    </header>

    <section class="panel section">
      <SectionTitle title="路线列表" hint="点击进入查看节点安排" />
      <div v-if="loading" class="loading-state">正在加载路线...</div>
      <div v-else class="list-stack">
        <RouteCard v-for="routeItem in routes" :key="routeItem.id" :route-item="routeItem" />
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { getRoutes } from "../api/travel";
import RouteCard from "../components/RouteCard.vue";
import SectionTitle from "../components/SectionTitle.vue";

const routes = ref([]);
const loading = ref(true);

onMounted(async () => {
  routes.value = await getRoutes();
  loading.value = false;
});
</script>
