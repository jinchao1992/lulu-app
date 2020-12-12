<template>
  <div class="homeWrapper">
    <TabNav/>
    <div class="banner">
      <h1>轱辘UI</h1>
      <h2>一个厉害的UI</h2>
      <p class="actions">
        <a href="https://github.com">GitHub</a>
        <router-link to="/doc">开始</router-link>
      </p>
    </div>
  </div>
  <div class="features">
    <svg class="icon">
      <use xlink:href="#icon-vue"></use>
    </svg>
    <svg class="icon">
      <use xlink:href="#icon-ts"></use>
    </svg>
    <svg class="icon">
      <use xlink:href="#icon-deng"></use>
    </svg>
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

  .features {
    > svg {
      width: 64px;
      height: 64px;
    }
  }
</style>