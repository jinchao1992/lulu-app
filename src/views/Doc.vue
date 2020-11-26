<template>
  <div>
    <TabNav/>
    <div class="content">
      <aside>
        <h1>菜单列表</h1>
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
      <main>主体</main>
    </div>
  </div>
</template>

<script lang="ts">
  import TabNav from './../components/TabNav.vue';

  export default {
    name: 'Doc',
    components: {
      TabNav
    }
  };
</script>

<style scoped lang="scss">
  aside {
    background: lightblue;
    width: 150px;
    position: fixed;
    top: 0;
    left: 0;
    padding: 70px 16px 16px;

    > h2 {
      margin-bottom: 4px;
    }

    > ol {
      > li {
        padding: 4px 0;
      }
    }
  }
</style>