<script lang="ts" setup>
import { Button } from 'ant-design-vue';
import { UserOutlined } from '@ant-design/icons-vue';

type Page = 'CardList' | 'MapView';

const emit = defineEmits<{
  (e: 'change-page', val: Page): void;
}>();
</script>
<template>
  <a-layout>
    <a-layout-header class="header">
      <div class="logo" />
      <h1 class="text-white text-xl">TravelStories</h1>
      <a-input-search
        class="w-[600px] mx-4 text-start"
        placeholder="Search"
        size="large"
      />
      <div class="menu">
        <Button class="menu_btn" @click="emit('change-page', 'CardList')"
          >CardList</Button
        >
        <Button class="menu_btn" @click="emit('change-page', 'MapView')"
          >MapView</Button
        >
      </div>
      <a-avatar :size="36">
        <template #icon><UserOutlined /></template>
      </a-avatar>
    </a-layout-header>
    <a-layout-content :style="{ padding: '0 300px', marginTop: '64px' }">
      <slot />
    </a-layout-content>
  </a-layout>
</template>
<style scoped>
.header {
  @apply fixed top-0 w-full z-10 flex items-center bg-blue-500 text-white px-[140px];
}
.menu {
  @apply h-[50px] flex items-center gap-3 mx-4;
}
.menu_btn {
  @apply text-black;
}
.logo {
  @apply w-[120px] h-[31px] mr-1.5 float-left;
  background: rgba(255, 255, 255, 0.2);
}
.main {
  @apply mt-[64px] w-full h-full bg-gray-900;
}
.main__content {
  @apply w-full h-[600px] bg-slate-500;
}
.footer {
  @apply bg-blue-500 text-white absolute bottom-0 w-full text-center h-[64px];
}
</style>
