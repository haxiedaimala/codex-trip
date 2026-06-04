<template>
  <div class="section-title">
    <component :is="tag">{{ title }}</component>
    <span v-if="hint">{{ hint }}</span>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  hint: {
    type: String,
    default: ""
  },
  tag: {
    type: String,
    default: "h2"
  }
});
</script>
