<script setup lang="ts">
import { Button } from 'ant-design-vue';
import { UserOutlined } from '@ant-design/icons-vue';
</script>

<template>
  <a-layout-header class="header">
    <div class="logo" />
    <h1 class="text-white text-xl">TravelStories</h1>
    <a-input-search
      class="w-[600px] mx-4 text-start"
      placeholder="Search"
      size="large"
    />
    <div class="menu">
      <router-link to="/?home=cards"
        ><Button class="menu_btn">Cards</Button></router-link
      >
      <router-link to="/?home=map"
        ><Button class="menu_btn">Map</Button></router-link
      >
      <router-link to="/upload"
        ><Button class="menu_btn">Upload</Button>
      </router-link>
    </div>
    <a-avatar :size="36">
      <template #icon><UserOutlined /></template>
    </a-avatar>
  </a-layout-header>
</template>

<style scoped>
.header {
  @apply fixed top-0 w-full z-10 flex items-center bg-blue-500 text-white px-[140px];
}
.menu {
  @apply h-[50px] flex items-center gap-3 mx-4;
}
.menu_btn {
  @apply text-black h-[35px] hover:text-white bg-white hover:bg-blue-500;
}
.logo {
  @apply w-[120px] h-[31px] mr-1.5 float-left;
  background: rgba(255, 255, 255, 0.2);
}
</style>
