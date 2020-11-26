<template>
  <div>
    <TabNav/>
    <div class="content">
      <aside>边栏</aside>
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

<style scoped>

</style>