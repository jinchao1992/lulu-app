import { createRouter, createWebHashHistory } from 'vue-router';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import SwitchDemo from './components/Switch/SwitchDemo.vue';
import ButtonDemo from './components/Button/ButtonDemo.vue';
import DiglogDemo from './components/Dialog/DialogDemo.vue';
import TabsDemo from './components/Tabs/TabsDemo.vue';
import { h } from 'vue';
import Markdown from './components/Markdown.vue';
import intro from './md/intro.md';
import getStarted from './md/get-started.md';
import install from './md/install.md';

const markdown = (string, key) => h(Markdown, { content: string, key });

/*
*  注：h 函数用来创建虚拟节点，接收三个参数：type props children
*  其中：type 可以为组件或者 HTML 标签名，
*  props 则是传的属性值
* children 是子级内容
* */

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
          component: markdown(intro, '1')
        },
        {
          path: 'get-started',
          component: markdown(getStarted, '2')
        },
        {
          path: 'install',
          component: markdown(install, '3')
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
          path: 'dialog',
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