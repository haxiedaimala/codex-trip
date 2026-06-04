<template>
  <div class="tab-filter">
    <button
      v-for="item in items"
      :key="item"
      type="button"
      class="filter-chip"
      :class="{ active: item === modelValue }"
      @click="$emit('update:modelValue', item)"
    >
      {{ item }}
    </button>
  </div>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    default: () => []
  },
  modelValue: {
    type: String,
    default: ""
  }
});

defineEmits(["update:modelValue"]);
</script>

<style scoped>
.tab-filter {
  display: flex;
  gap: 8px;
  overflow-x: auto;
  padding-bottom: 2px;
}

.tab-filter::-webkit-scrollbar {
  display: none;
}

.filter-chip {
  flex: 0 0 auto;
  min-height: 40px;
  padding: 0 14px;
  border-radius: 999px;
  border: 1px solid rgba(179, 58, 47, 0.1);
  background: rgba(255, 253, 249, 0.9);
  color: var(--muted);
}

.filter-chip.active {
  background: var(--primary);
  color: #fff8f0;
  border-color: transparent;
}
</style>
