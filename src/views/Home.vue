<template>
  <div class="homeWrapper">
    <TabNav/>
    <div class="banner">
      <h1>辘辘UI</h1>
      <h2>闲暇无聊，造轮子玩</h2>
      <p class="actions">
        <a href="https://gitee.com/webjinchao/lulu-app.git">码云</a>
        <a href="https://github.com/jinchao1992/lulu-app">GitHub</a>
        <router-link to="/doc/intro">开始</router-link>
      </p>
    </div>
  </div>
  <div class="features-wrapper">
    <ul class="features">
      <li class="features-item">
        <svg class="icon">
          <use xlink:href="#icon-vue"></use>
        </svg>
        <div class="features-item-info">
          <h3>基于 Vue3</h3>
          <p>使用了 Vue 3 Composition API</p>
        </div>
      </li>
      <li class="features-item">
        <svg class="icon">
          <use xlink:href="#icon-ts"></use>
        </svg>
        <div class="features-item-info">
          <h3>基于 TypeScript</h3>
          <p>源代码采用 TypeScript 书写（非严格检查）</p>
        </div>
      </li>
      <li class="features-item">
        <svg class="icon">
          <use xlink:href="#icon-deng"></use>
        </svg>
        <div class="features-item-info">
          <h3>代码易读</h3>
          <p>每个组件的源代码都极其简洁</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import TabNav from '../components/TabNav.vue';

  export default {
    name: 'Home',
    components: {
      TabNav
    }
  };
</script>

<style lang="scss" scoped>
  $color: #007974;
  $border-radius: 2px;
  .homeWrapper {
    background: linear-gradient(145deg, rgba(227, 255, 253, 1) 0%, rgba(183, 233, 230, 1) 100%);
    clip-path: ellipse(80% 60% at 50% 40%);
  }

  .banner {
    padding: 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: $color;

    > .actions {
      padding: 8px 0;

      a {
        margin: 0 8px;
        background: #02bcb0;
        color: #fff;
        display: inline-block;
        border-radius: $border-radius;
        padding: 8px 24px;
      }
    }
  }

  .features-wrapper {
    margin: 64px auto;
  }

  .features {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 16px;

    &-item {
      display: flex;
      align-items: center;
      margin-top: 16px;
      margin-bottom: 16px;

      > svg {
        width: 64px;
        height: 64px;
      }

      &-info {
        margin-left: 10px;

        > h3 {
          font-size: 28px;
        }
      }
    }
  }

  @media (min-width: 800px) {
    .features-wrapper {
      width: 800px;

      > ul {
        > li {
          width: 50%;
        }
      }
    }
  }

  @media (min-width: 1200px) {
    .features-wrapper {
      width: 1200px;

      > ul {
        > li {
          width: 33.33333%;
        }
      }
    }
  }
</style>