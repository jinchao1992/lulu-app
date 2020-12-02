<template>
  <div>
    <h1>示例1</h1>
    <Button level="primary" @click="toggle">Dialog</Button>
    <Dialog :visible="visible"/>
  </div>
</template>

<script lang="ts">
  import { ref } from 'vue';
  import Dialog from '../lib/Dialog.vue';
  import Button from '../lib/Button.vue';

  export default {
    name: 'DiglogDemo',
    components: {
      Dialog,
      Button
    },
    setup() {
      const visible = ref(false);
      const toggle = () => {
        visible.value = true;
      };
      return {
        visible,
        toggle
      };
    }
  };
</script>

<style scoped>

</style>