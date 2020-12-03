<template>
  <div>
    <h1>示例1</h1>
    <Button level="primary" @click="toggle">Dialog</Button>
    <Dialog v-model:visible="visible" overlayClosable :ok="ok" :cancel="cancel">
      <p>这是一行内容</p>
      <p>这是第二行内容</p>
    </Dialog>

    <h1>示例2</h1>
    <Button level="primary" @click="showDialog">show dialog</Button>
  </div>
</template>

<script lang="ts">
  import { ref } from 'vue';
  import Dialog from '../lib/Dialog.vue';
  import Button from '../lib/Button.vue';
  import { openDialog } from '../lib/openDialog';

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
      const showDialog = () => {
        openDialog({
          title: '测试',
          content: '122112',
          ok: () => {
            console.log('ok');
          },
          cancel: () => {
            console.log('cancel');
          },
          overlayClosable: true
        });
      };
      return {
        visible,
        toggle,
        ok,
        cancel,
        showDialog
      };
    }
  };
</script>

<style scoped>

</style>