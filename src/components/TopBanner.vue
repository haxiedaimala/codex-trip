<template>
  <section class="hero-art">
    <small>{{ banner.label }}</small>
    <h1>{{ banner.title }}</h1>
    <p>{{ banner.description }}</p>
  </section>
</template>

<script setup>
defineProps({
  banner: {
    type: Object,
    required: true
  }
});
</script>
