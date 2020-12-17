<template>
  <div class="topNav">
    <div class="logo">
      <router-link to="/" class="logo-link">
        <svg class="icon">
          <use xlink:href="#icon-chao"></use>
        </svg>
        <span>LuLu-Ui</span>
      </router-link>
    </div>
    <ul class="menu">
      <li>
        <router-link to="/doc/intro">文档</router-link>
      </li>
    </ul>
    <a v-if="toggleMenuButtonVisible" class="menuButton" @click="toggleAside"></a>
  </div>
</template>

<script lang="ts">
  import { inject, Ref } from 'vue';

  export default {
    name: 'TabNav',
    props: {
      toggleMenuButtonVisible: {
        type: Boolean,
        default: false
      }
    },
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
  $color: #007974;
  .topNav {
    display: flex;
    padding: 16px;
    position: relative;
    z-index: 10;
    color: $color;

    .logo {
      max-width: 6em;
      margin-right: auto;

      &-link {
        display: flex;
        align-items: center;
        text-decoration: none;
      }

      svg {
        width: 28px;
        height: 28px;
        margin-right: 4px;
      }
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

  @media (max-width: 500px) {
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