<script setup lang="ts">
import { UserOutlined, SearchOutlined } from '@ant-design/icons-vue';
import logo from '@/assets/logo.png';
const onSearch = () => {
  console.log('search');
};
</script>

<template>
  <header class="navigator">
    <router-link to="/">
      <div class="logo">
        <img :src="logo" alt="logo" class="w-[30px] h-[30px]" />
        <h1 class="text-black text-xl">旅行日记</h1>
      </div>
    </router-link>
    <a-input class="w-[250px] mx-4 text-start" placeholder="Search">
      <template #prefix><SearchOutlined @click="onSearch" /></template>
    </a-input>
    <div class="menu">
      <router-link :to="{ path: '/', query: { v: 'stories' } }">
        <a-button class="menu_btn" type="text">日记</a-button></router-link
      >
      <router-link :to="{ path: '/upload' }"
        ><a-button class="menu_btn" type="text">上传</a-button>
      </router-link>
    </div>
    <a-avatar :size="36">
      <template #icon><UserOutlined /></template>
    </a-avatar>
  </header>
</template>

<style scoped>
.navigator {
  @apply fixed top-0 w-full z-10 flex gap-12 items-center justify-center text-white  bg-white;
}
.menu {
  @apply h-[50px] flex items-center gap-6 mr-5;
}
.menu_btn {
  @apply text-black font-bold h-[35px] border-0 rounded-full hover:bg-gray-300;
}
.logo {
  @apply flex flex-row gap-3 mr-1.5;
}
</style>
