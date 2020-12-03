<template>
  <div>
    <h1>示例1</h1>
    <Button level="primary" @click="toggle">Dialog</Button>
    <Dialog v-model:visible="visible" overlayClosable :ok="ok" :cancel="cancel">
      <p>这是一行内容</p>
      <p>这是第二行内容</p>
    </Dialog>
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
      const ok = () => {
        console.log('ok');
        return false;
      };
      const cancel = () => {
        console.log('cancel');
      };
      return {
        visible,
        toggle,
        ok,
        cancel
      };
    }
  };
</script>

<style scoped>

</style>