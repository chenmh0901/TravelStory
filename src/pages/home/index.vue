<script lang="ts" setup>
import LayoutBase from '@/layout/layout-base.vue';
import CardList from '@/views/card-list/index.vue';
import MapView from '@/views/map-view/index.vue';
import { useToggle } from '@/composables/use-toggle';

const { val, toggle } = useToggle(['CardList', 'MapView']);
</script>

<template>
  <LayoutBase @change-page="toggle">
    <CardList v-if="val == 'CardList'" />
    <MapView v-if="val == 'MapView'" />
  </LayoutBase>
</template>
<style scoped></style>
