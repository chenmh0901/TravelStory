import { createRouter, createWebHistory } from 'vue-router';
import Stories from '@/pages/stories/index.vue';
import Upload from '@/pages/upload/index.vue';
import Detail from '@/pages/detail/index.vue';
import NotFound from '@/pages/404/index.vue';
const routes = [
  {
    path: '/',
    redirect: '/stories'
  },
  {
    path: '/stories',
    name: 'Stories',
    component: Stories
  },
  {
    path: '/detail/:id/:type?',
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
    name:'NotFound',
    component:NotFound
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
