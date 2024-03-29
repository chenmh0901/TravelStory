<script setup lang="ts">
import { UserOutlined, SearchOutlined } from '@ant-design/icons-vue';
const onSearch = () => {
  console.log('search');
};
</script>

<template>
  <header class="header">
    <div class="logo" />
    <h1 class="text-black text-xl">TravelStories</h1>
    <a-input class="w-[250px] mx-4 text-start" placeholder="Search">
      <template #prefix><SearchOutlined @click="onSearch" /></template>
    </a-input>
    <div class="menu">
      <router-link :to="{ path: '/', query: { v: 'cards' } }">
        <a-button class="menu_btn" type="text">Cards</a-button></router-link
      >
      <router-link :to="{ path: '/', query: { v: 'map' } }">
        <a-button class="menu_btn" type="text">Map</a-button></router-link
      >
      <router-link :to="{ path: '/upload' }"
        ><a-button class="menu_btn" type="text">Upload</a-button>
      </router-link>
    </div>
    <a-avatar :size="36">
      <template #icon><UserOutlined /></template>
    </a-avatar>
  </header>
</template>

<style scoped>
.header {
  @apply fixed top-0 w-full z-10 flex gap-6 items-center justify-center text-white  bg-white;
}
.menu {
  @apply h-[50px] flex items-center gap-6 ml-20 mr-5;
}
.menu_btn {
  @apply text-black font-bold h-[35px] border-0 rounded-full hover:bg-gray-300;
}
.logo {
  @apply w-[120px] h-[31px] mr-1.5;
  background: rgba(110, 110, 255, 0.2);
}
</style>
