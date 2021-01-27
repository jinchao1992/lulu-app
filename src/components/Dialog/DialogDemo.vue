<template>
  <h1>代码演示</h1>
  <div>
    <Demo :component="Dialog1Demo">
      <template v-slot:demo-description>
        <p>第一个对话框。</p>
      </template>
    </Demo>
    <Demo :component="Dialog2Demo">
      <template v-slot:demo-description>
        <p>点击按钮直接打开。</p>
      </template>
    </Demo>
  </div>
</template>

<script lang="ts">
  import Demo from '../Demo.vue';
  import Dialog1Demo from './Dialog1.Demo.vue';
  import Dialog2Demo from './Dialog2.Demo.vue';

  export default {
    name: 'DialogDemo',
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