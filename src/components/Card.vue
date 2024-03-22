<script setup lang="ts">
import { Button } from 'ant-design-vue';
import { StepForwardOutlined } from '@ant-design/icons-vue';
import { Icon } from '@iconify/vue';
</script>

<template>
  <div class="w-[100px] h-[100px] bg-black"></div>
  <StepForwardOutlined />
  <Button>按钮</Button>
  <Icon icon="mdi:ab-testing" />
</template>

<style scoped></style>
