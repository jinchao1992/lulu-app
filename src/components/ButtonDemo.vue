<template>
  <div>
    <h1>Button 示例</h1>
    <Button theme="default">Default Button</Button>
    <Button theme="dashed">Dashed Button</Button>
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