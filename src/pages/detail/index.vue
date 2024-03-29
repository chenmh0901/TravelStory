<script setup lang="ts">
import Map from '@/components/map/index.vue';
import { useRouteParams } from '@vueuse/router';

const routeParams = useRouteParams('type');
</script>

<template>
  <Map />
  <div>{{ routeParams }}</div>
</template>

<style scoped></style>
