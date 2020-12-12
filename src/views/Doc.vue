<template>
  <div class="layout">
    <TabNav class="nav" toggle-menu-button-visible/>
    <div class="content">
      <aside v-if="asideVisible">
        <h1>组件列表</h1>
        <ol>
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
        <h3>封装的小组件</h3>
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
    padding: 70px 16px 16px;
    z-index: 3;
    background: lightblue;

    > h2 {
      margin-bottom: 4px;
    }

    > ol {
      > li {
        padding: 4px 0;
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