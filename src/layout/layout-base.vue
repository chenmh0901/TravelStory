<template>
    <a-layout>
      <a-layout-header class="header">
        <div class="logo" />
        <h1 class="text-white text-xl">TravelStories</h1>
      </a-layout-header>
      <a-layout-content :style="{ padding: '0 300px', marginTop: '64px' }">
        <slot />
      </a-layout-content>
      <a-layout-footer class="footer"> Footer </a-layout-footer>
    </a-layout>
  </template>
  <script lang="ts" setup></script>
  <style scoped>
  .app {
    height: 100vh;
    width: 100vw;
  }
  .header {
    @apply fixed top-0 w-full z-10 flex items-center bg-blue-500 text-white;
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
  