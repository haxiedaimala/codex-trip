<template>
  <div class="page">
    <header class="page-header">
      <h1>旅行贴士</h1>
      <p>用最少的信息解决用户出发前最常见的问题。</p>
    </header>

    <div v-if="loading" class="panel loading-state">正在加载贴士...</div>
    <template v-else-if="tips">
      <section class="panel section">
        <SectionTitle :title="tips.season.title" hint="适合决定出行时间" />
        <p>{{ tips.season.content }}</p>
      </section>

      <section class="panel section">
        <SectionTitle :title="tips.dress.title" hint="减少出行准备成本" />
        <p>{{ tips.dress.content }}</p>
      </section>

      <section class="panel section">
        <SectionTitle title="交通建议" hint="优先考虑地铁和时间成本" />
        <div class="list-stack">
          <article v-for="item in tips.traffic" :key="item.title" class="tip-card">
            <strong>{{ item.title }}</strong>
            <p>{{ item.content }}</p>
          </article>
        </div>
      </section>

      <section class="panel section">
        <SectionTitle title="美食建议" hint="按轻量体验来安排" />
        <div class="list-stack">
          <article v-for="item in tips.food" :key="item.name" class="tip-card">
            <strong>{{ item.name }}</strong>
            <p>{{ item.desc }}</p>
          </article>
        </div>
      </section>

      <section class="panel section">
        <SectionTitle title="注意事项" hint="这些最容易影响体验" />
        <ul class="bullet-list">
          <li v-for="item in tips.notices" :key="item">{{ item }}</li>
        </ul>
      </section>
    </template>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { getTips } from "../api/travel";
import SectionTitle from "../components/SectionTitle.vue";

const tips = ref(null);
const loading = ref(true);

onMounted(async () => {
  tips.value = await getTips();
  loading.value = false;
});
</script>

<style scoped>
p {
  margin: 0;
  color: var(--text);
}

.tip-card {
  padding: 16px;
  border-radius: var(--radius-md);
  background: rgba(255, 253, 249, 0.88);
  border: 1px solid rgba(179, 58, 47, 0.08);
}

.tip-card strong {
  display: block;
  margin-bottom: 8px;
}

.tip-card p {
  color: var(--muted);
}
</style>
