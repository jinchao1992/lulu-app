<template>
  <h1>代码演示</h1>
  <Demo :component="Tabs1Demo">
    <template v-slot:demo-description>
      <p>默认选中第一项</p>
    </template>
  </Demo>
</template>

<script lang="ts">
  import Tabs1Demo from './Tabs1.Demo.vue';
  import Demo from '../Demo.vue';

  export default {
    name: 'TabsDemo',
    components: { Demo },
    setup() {
      return {
        Tabs1Demo
      };
    }
  };
</script>

<style scoped>

</style>