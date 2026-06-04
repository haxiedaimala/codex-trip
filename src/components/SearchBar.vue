<template>
  <label class="search-bar panel">
    <span>搜索景点</span>
    <input :value="modelValue" type="text" :placeholder="placeholder" @input="onInput" />
  </label>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    default: ""
  },
  placeholder: {
    type: String,
    default: "输入景点名称，如故宫"
  }
});

const emit = defineEmits(["update:modelValue"]);

function onInput(event) {
  emit("update:modelValue", event.target.value);
}
</script>

<style scoped>
.search-bar {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 14px 16px;
}

.search-bar span {
  color: var(--muted);
  font-size: 0.82rem;
}

.search-bar input {
  width: 100%;
  min-height: 44px;
  padding: 0 14px;
  border: 1px solid var(--line);
  border-radius: 14px;
  outline: none;
  background: #fffdf9;
  color: var(--text);
}

.search-bar input:focus {
  border-color: rgba(179, 58, 47, 0.4);
}
</style>
