<template>
  <div class="app-shell">
    <main class="app-main">
      <RouterView />
    </main>
    <BottomNav />
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import BottomNav from "./components/BottomNav.vue";
</script>
