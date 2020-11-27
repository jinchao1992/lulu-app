import { createRouter, createWebHashHistory } from 'vue-router';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import SwitchDemo from './components/SwitchDemo.vue';
import ButtonDemo from './components/ButtonDemo.vue';
import DiglogDemo from './components/DiglogDemo.vue';
import TabsDemo from './components/TabsDemo.vue';

const history = createWebHashHistory();

const router = createRouter({
  history,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/doc',
      component: Doc,
      children: [
        {
          path: '/doc/switch',
          component: SwitchDemo
        },
        {
          path: '/doc/button',
          component: ButtonDemo
        },
        {
          path: '/doc/diglog',
          component: DiglogDemo
        },
        {
          path: '/doc/tabs',
          component: TabsDemo
        }
      ]
    }
  ]
});

export default router;