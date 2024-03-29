<script lang="ts" setup>
import Story from '@/components/story.vue';
</script>

<template>
  <list class="flex gap-1 flex-wrap w-[1000px]">
    <router-link :to="{ name: 'Detail', params: { id: '1', type: 'map' } }">
      <story id="1" />
    </router-link>
    <router-link :to="{ name: 'Detail', params: { id: '2', type: 'map' } }">
      <story id="2" />
    </router-link>
    <story id="3" />
    <story id="4" />
    <story id="5" />
    <story id="6" />
  </list>
</template>
<style scoped></style>
