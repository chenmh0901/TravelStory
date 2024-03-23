import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/home/index.vue';
import Upload from '@/pages/upload/index.vue';
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/upload',
    name: 'Upload',
    component: Upload
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
