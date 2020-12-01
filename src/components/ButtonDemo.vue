<template>
  <div>
    <h1>Button 示例</h1>
    <div>
      <Button>Default Button</Button>
      <Button theme="dashed">Dashed Button</Button>
      <Button theme="text">Text Button</Button>
      <Button theme="link">Link Button</Button>
    </div>
    <br>
    <h1>按钮尺寸</h1>
    <div>
      <div>
        <Button size="large">Default</Button>
        <Button>Default</Button>
        <Button size="small">Default</Button>
      </div>
      <div>
        <Button theme="link" size="large">link</Button>
        <Button theme="link">link</Button>
        <Button size="small" theme="link">link</Button>
      </div>
      <div>
        <Button theme="text" size="large">Text</Button>
        <Button theme="text">Text</Button>
        <Button theme="text" size="small">Text</Button>
      </div>
    </div>
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