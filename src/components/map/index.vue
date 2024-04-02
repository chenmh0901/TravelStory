<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { drawChinaMap } from './chinamap';

const svgMap = ref();
onMounted(() => drawChinaMap(svgMap.value));
</script>

<template>
  <svg ref="svgMap" />
</template>

<style scoped></style>
