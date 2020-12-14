<template>
  <div class="layout">
    <TabNav class="nav" toggle-menu-button-visible/>
    <div class="content">
      <aside v-if="asideVisible">
        <h2>文档</h2>
        <ol>
          <li>
            <router-link to="/doc/intro">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/install">安装</router-link>
          </li>
          <li>
            <router-link to="/doc/get-started">开始</router-link>
          </li>
        </ol>
        <h2>组件列表</h2>
        <ol>
          <li>
          </li>
          <li>
            <router-link to="/doc/switch">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/diglog">Diglog 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 组件</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view/>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
  import TabNav from './../components/TabNav.vue';
  import { inject, Ref } from 'vue';

  export default {
    name: 'Doc',
    components: {
      TabNav
    },
    setup() {
      const asideVisible = inject<Ref<boolean>>('asideVisible');
      return { asideVisible };
    }
  };
</script>

<style scoped lang="scss">
  $color: #1890ff;
  .layout {
    display: flex;
    flex-direction: column;
    height: 100vh;

    > .nav {
      flex-shrink: 0;
    }

    > .content {
      flex-grow: 1;
      padding-top: 6px;
      padding-left: 156px;
      @media (max-width: 500px) {
        padding-left: 0;
      }
    }
  }

  .content {
    display: flex;

    > aside {
      flex-shrink: 0;
    }

    > main {
      flex-grow: 1;
      padding: 16px;
    }
  }

  aside {
    width: 150px;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    padding: 70px 0 16px;
    z-index: 3;
    background: #fff;
    border-right: 1px solid #f0f0f0;

    > h2 {
      margin-bottom: 4px;
      padding: 0 16px;
    }

    > ol {
      > li {
        > a {
          display: block;
          padding: 8px 16px;
          text-decoration: none;
          font-size: 14px;
          transition: all .25s;

          &:hover {
            color: $color;
          }

          &.router-link-active {
            color: $color;
            background-color: #e6f7ff;
          }
        }

      }
    }
  }

  main {
    overflow: auto;
  }

  @media (max-width: 500px) {
    aside {
    }
  }
</style>