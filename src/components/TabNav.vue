<template>
  <div class="topNav">
    <div class="logo">
      <router-link to="/">Logo</router-link>
    </div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
    <a class="menuButton" @click="toggleAside"></a>
  </div>
</template>

<script lang="ts">
  import { inject, Ref } from 'vue';

  export default {
    name: 'TabNav',
    setup() {
      const asideVisible = inject<Ref<boolean>>('asideVisible');
      const toggleAside = () => {
        asideVisible.value = !asideVisible.value;
      };
      return {
        toggleAside
      };
    }
  };
</script>

<style scoped lang="scss">
  .topNav {
    background: pink;
    display: flex;
    padding: 16px;
    position: relative;
    z-index: 10;

    > .logo {
      max-width: 6em;
      margin-right: auto;
    }

    > .menu {
      display: flex;
      white-space: nowrap;
      flex-wrap: nowrap;

      > li {
        margin: 0 1em;
      }
    }

    .menuButton {
      position: absolute;
      width: 24px;
      height: 24px;
      top: 14px;
      left: 14px;
      background: url("../assets/menu.png") center center no-repeat;
      background-size: 24px;
      display: none;
    }
  }

  @media screen and (max-width: 500px) {
    .topNav {
      .menu {
        display: none;
      }

      .logo {
        margin: 0 auto;
      }

      .menuButton {
        display: block;

        &:hover {
          border: none;
        }
      }
    }
  }
</style>