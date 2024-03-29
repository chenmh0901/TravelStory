import { createRouter, createWebHistory } from 'vue-router';
import Stories from '@/pages/stories/index.vue';
import Upload from '@/pages/upload/index.vue';
import Detail from '@/pages/detail/index.vue';
const routes = [
  {
    path: '/',
    name: 'Stories',
    component: Stories
  },
  {
    path: '/detail/:id?/:type?',
    name: 'Detail',
    component: Detail
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
