<template>
  <RouterLink class="spot-card panel" :to="`/spots/${spot.id}`">
    <img class="spot-cover" :src="spot.cover" :alt="spot.name" />
    <div class="spot-body">
      <div class="spot-top">
        <strong>{{ spot.name }}</strong>
        <span>{{ spot.score.toFixed(1) }}</span>
      </div>
      <p>{{ spot.summary }}</p>
      <div class="chip-row">
        <span v-for="tag in spot.tags.slice(0, 2)" :key="tag" class="chip">{{ tag }}</span>
      </div>
      <div class="spot-meta">
        <span>{{ spot.price }}</span>
        <span>{{ spot.playTime }}</span>
      </div>
    </div>
  </RouterLink>
</template>

<script setup>
defineProps({
  spot: {
    type: Object,
    required: true
  }
});
</script>

<style scoped>
.spot-card {
  overflow: hidden;
  display: grid;
  grid-template-columns: 112px 1fr;
}

.spot-cover {
  width: 100%;
  height: 100%;
  min-height: 156px;
  object-fit: cover;
}

.spot-body {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 14px;
}

.spot-top {
  display: flex;
  justify-content: space-between;
  gap: 12px;
}

.spot-top strong {
  font-size: 1rem;
}

.spot-top span {
  color: var(--primary);
  font-weight: 700;
}

.spot-body p {
  margin: 0;
  color: var(--muted);
  font-size: 0.88rem;
}

.spot-meta {
  display: flex;
  justify-content: space-between;
  gap: 8px;
  color: var(--primary-strong);
  font-size: 0.85rem;
}
</style>
