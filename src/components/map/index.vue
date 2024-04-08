<script setup lang="ts">
import { onMounted } from 'vue';
import { mountMap } from 'traveler-map';

onMounted(() => mountMap('map'));
</script>

<template>
  <div id="map"></div>
</template>

<style scoped>
#map {
  width: 1500px;
  height: 1000px;
}
</style>
