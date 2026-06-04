<template>
  <nav class="bottom-nav panel">
    <RouterLink
      v-for="item in navItems"
      :key="item.to"
      :to="item.to"
      class="bottom-link"
      :class="{ active: route.path === item.to || route.path.startsWith(`${item.to}/`) }"
    >
      <span class="icon">{{ item.icon }}</span>
      <span>{{ item.label }}</span>
    </RouterLink>
  </nav>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();

const navItems = [
  { to: "/", label: "首页", icon: "京" },
  { to: "/spots", label: "景点", icon: "景" },
  { to: "/routes", label: "路线", icon: "行" },
  { to: "/tips", label: "贴士", icon: "贴" }
];
</script>

<style scoped>
.bottom-nav {
  position: fixed;
  left: 50%;
  bottom: 14px;
  z-index: 20;
  transform: translateX(-50%);
  width: min(calc(100% - 20px), 390px);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 10px;
  border-radius: 24px;
}

.bottom-link {
  min-height: 52px;
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  color: var(--muted);
  font-size: 0.78rem;
}

.bottom-link.active {
  background: rgba(179, 58, 47, 0.12);
  color: var(--primary-strong);
  font-weight: 700;
}

.icon {
  font-size: 0.9rem;
}
</style>
