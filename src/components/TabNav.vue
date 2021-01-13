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
    <a v-if="toggleMenuButtonVisible" class="menuButton" @click="toggleAside">
      <svg class="icon" v-if="!asideVisible">
        <use xlink:href="#icon-menu"></use>
      </svg>
      <svg class="icon" v-else>
        <use xlink:href="#icon-close"></use>
      </svg>
    </a>
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
        toggleAside,
        asideVisible
      };
    }
  };
</script>

<style scoped lang="scss">
  $color: #40a9ff;
  .topNav {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    width: 100%;
    padding: 16px;
    background: #fff;
    z-index: 10;
    color: $color;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.25);

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
      display: none;

      .icon {
        color: rgba(0, 0, 0, .65);
        font-size: 24px;
      }
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