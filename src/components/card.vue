<script setup lang="ts">
import image from '@/assets/image.png';
import { computed } from 'vue';

const mockRandomAvatar = computed(() => {
  if (Math.random() > 0.5) {
    console.log(`123`);
    return image;
  }
  return `https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png`;
});
</script>

<template>
  <a-card hoverable style="width: 300px">
    <template #cover>
      <img alt="example" :src="mockRandomAvatar" />
    </template>
    <a-card-meta title="杭州 - 东京" description="2024/3/26 - 2024/4/1">
      <template #avatar>
        <a-avatar src="https://joeschmoe.io/api/v1/random" />
      </template>
    </a-card-meta>
  </a-card>
</template>

<style scoped></style>
