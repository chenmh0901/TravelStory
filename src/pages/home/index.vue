<script lang="ts" setup>
import CardList from '@/views/card-list/index.vue';
import MapView from '@/views/map-view/index.vue';
import { useRouteQuery } from '@vueuse/router';

enum ViewType {
  Cards = 'cards',
  Map = 'map'
}

const viewType = useRouteQuery<ViewType>('v');
</script>

<template>
  <CardList v-if="viewType === ViewType.Cards || !viewType" />
  <MapView v-if="viewType === ViewType.Map" />
</template>
<style scoped></style>
