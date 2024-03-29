<script setup lang="ts">
import Nav from '@/components/navigator.vue';
</script>

<template>
  <a-layout>
    <Nav />
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
