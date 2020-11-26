<template>
  <div>
    <TabNav/>
    <div class="banner">
      <h1>轱辘UI</h1>
      <h2>一个厉害的UI</h2>
      <p class="actions">
        <a href="#">GitHub</a>
        <a href="#">开始</a>
      </p>
    </div>
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

</style>