<template>
  <h1>代码演示</h1>
  <div>
    <Demo :component="Dialog1Demo"/>
    <Demo :component="Dialog2Demo"/>
  </div>
</template>

<script lang="ts">
  import Demo from '../Demo.vue';
  import Dialog1Demo from './Dialog1.Demo.vue';
  import Dialog2Demo from './Dialog2.Demo.vue';

  export default {
    name: 'DiglogDemo',
    components: {
      Demo,
    },
    setup() {
      return {
        Dialog1Demo,
        Dialog2Demo
      };
    }
  };
</script>

<style scoped>

</style>