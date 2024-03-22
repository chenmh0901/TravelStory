import { createApp } from 'vue';
import App from './App.vue';

/** include style*/
import './style.css';

import router from '@/router/index.ts';
const app = createApp(App);

app.use(router);
app.mount('#app');
