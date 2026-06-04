<template>
  <div class="page">
    <header class="page-header">
      <h1>北京知名景点</h1>
      <p>围绕经典地标、皇家园林和胡同街区做轻量浏览。</p>
    </header>

    <SearchBar v-model="keyword" />

    <section class="panel section">
      <SectionTitle title="分类筛选" hint="按行程偏好快速缩小范围" />
      <TabFilter v-model="category" :items="categories" />
    </section>

    <section class="panel section">
      <SectionTitle :title="`景点列表 · ${spots.length}`" hint="点击卡片进入详情" />
      <div v-if="loading" class="loading-state">正在加载景点...</div>
      <div v-else-if="spots.length === 0" class="empty-state">没有找到匹配景点，换个关键词试试。</div>
      <div v-else class="list-stack">
        <SpotCard v-for="spot in spots" :key="spot.id" :spot="spot" />
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import { getSpots } from "../api/travel";
import SearchBar from "../components/SearchBar.vue";
import SectionTitle from "../components/SectionTitle.vue";
import SpotCard from "../components/SpotCard.vue";
import TabFilter from "../components/TabFilter.vue";

const categories = ["全部", "历史文化", "皇家园林", "现代地标", "胡同街区"];
const keyword = ref("");
const category = ref("全部");
const spots = ref([]);
const loading = ref(true);

async function loadSpots() {
  loading.value = true;
  spots.value = await getSpots({
    keyword: keyword.value,
    category: category.value
  });
  loading.value = false;
}

onMounted(loadSpots);
watch([keyword, category], loadSpots);
</script>
