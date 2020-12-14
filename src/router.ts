import { createRouter, createWebHashHistory } from 'vue-router';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import SwitchDemo from './components/SwitchDemo.vue';
import ButtonDemo from './components/ButtonDemo.vue';
import DiglogDemo from './components/DialogDemo.vue';
import TabsDemo from './components/TabsDemo.vue';
import Intro from './views/Intro.vue';
import GetStarted from './views/GetStarted.vue';
import Install from './views/Install.vue';

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
          path: 'intro',
          component: Intro
        },
        {
          path: 'get-started',
          component: GetStarted
        },
        {
          path: 'install',
          component: Install
        },
        {
          path: 'switch',
          component: SwitchDemo
        },
        {
          path: 'button',
          component: ButtonDemo
        },
        {
          path: 'diglog',
          component: DiglogDemo
        },
        {
          path: 'tabs',
          component: TabsDemo
        }
      ]
    }
  ]
});

export default router;