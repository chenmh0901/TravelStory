<script setup lang="ts">
import Header from '@/components/header.vue';
</script>

<template>
  <a-layout>
    <Header />
    <a-layout-content class="content">
      <router-view />
    </a-layout-content>
  </a-layout>
</template>
<style scoped>
.content {
  @apply mt-[64px] h-[1000px] py-2 flex items-center justify-center;
}
</style>
