import { createApp } from 'vue';
import './index.scss';
import './lib/lulu.scss';
import 'github-markdown-css';
import App from './App.vue';
import router from './router';
import Markdown from './components/Markdown.vue';

const app = createApp(App);
app.use(router);
app.mount('#app');
app.component('Markdown', Markdown);