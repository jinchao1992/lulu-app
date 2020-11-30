<template>
  <div>
    <h3>Button 按钮的使用</h3>
    <Button theme="default">Default Button</Button>
    <Button theme="text">Text Button</Button>
    <Button theme="link">Link Button</Button>
  </div>
</template>

<script lang="ts">
  import Button from '../lib/Button.vue';

  export default {
    name: 'ButtonDemo',
    components: { Button }
  };
</script>

<style scoped>

</style>