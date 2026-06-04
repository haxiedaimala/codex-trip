<template>
  <RouterLink class="route-card panel" :to="`/routes/${routeItem.id}`">
    <img class="route-cover" :src="routeItem.cover" :alt="routeItem.name" />
    <div class="route-overlay">
      <small>{{ routeItem.days }}日路线</small>
      <h3>{{ routeItem.name }}</h3>
      <p>{{ routeItem.summary }}</p>
      <div class="route-footer">
        <span>{{ routeItem.suitable }}</span>
        <strong>{{ routeItem.startTime }} 出发</strong>
      </div>
    </div>
  </RouterLink>
</template>

<script setup>
defineProps({
  routeItem: {
    type: Object,
    required: true
  }
});
</script>

<style scoped>
.route-card {
  overflow: hidden;
  position: relative;
  min-height: 210px;
}

.route-cover {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.route-overlay {
  position: relative;
  min-height: 210px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 10px;
  padding: 18px;
  color: #fffaf4;
  background: linear-gradient(180deg, rgba(35, 22, 15, 0.05), rgba(35, 22, 15, 0.82));
}

.route-overlay h3,
.route-overlay p {
  margin: 0;
}

.route-overlay small {
  width: fit-content;
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(255, 250, 244, 0.16);
}

.route-footer {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  font-size: 0.85rem;
}
</style>
