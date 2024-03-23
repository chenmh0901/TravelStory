<script setup lang="ts">
import Header from '@/components/header.vue';
</script>

<template>
  <a-layout>
    <Header />
    <a-layout-content :style="{ padding: '0 300px', marginTop: '64px' }">
      <router-view />
    </a-layout-content>
  </a-layout>
</template>
