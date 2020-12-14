import { createApp } from 'vue';
import './index.scss';
import './lib/lulu.scss';
import 'github-markdown-css';
import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(router);
app.mount('#app');
