import { createRouter, createWebHashHistory } from 'vue-router';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import SwitchDemo from './components/Switch/SwitchDemo.vue';
import ButtonDemo from './components/Button/ButtonDemo.vue';
import DiglogDemo from './components/DialogDemo.vue';
import TabsDemo from './components/TabsDemo.vue';
import { h } from 'vue';
import Markdown from './components/Markdown.vue';

const markdown = (fileName) => h(Markdown, { path: `../md/${fileName}.md`, key: fileName });

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
          component: markdown('intro')
        },
        {
          path: 'get-started',
          component: markdown('get-started')
        },
        {
          path: 'install',
          component: markdown('install')
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