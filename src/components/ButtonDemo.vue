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
        <Button size="large">Large</Button>
        <Button>Default</Button>
        <Button size="small">Small</Button>
      </div>
      <div>
        <Button theme="link" size="large">Link Large</Button>
        <Button theme="link">Link</Button>
        <Button size="small" theme="link">Link Small</Button>
      </div>
      <div>
        <Button theme="text" size="large">Text Large</Button>
        <Button theme="text">Text</Button>
        <Button theme="text" size="small">Text Small</Button>
      </div>
    </div>
    <h1>按钮类型</h1>
    <div>
      <div>
        <Button level="primary">主要按钮</Button>
        <Button level="info">信息按钮</Button>
        <Button>默认按钮</Button>
        <Button level="danger">危险按钮</Button>
        <Button level="warning">警告按钮</Button>
      </div>
      <div>
        <Button level="primary" theme="link">主要 Link</Button>
        <Button level="info" theme="link">信息 Link</Button>
        <Button theme="link">默认 Link</Button>
        <Button level="danger" theme="link">危险 Link</Button>
        <Button level="warning" theme="link">警告 Link</Button>
      </div>
      <div>
        <Button level="primary" theme="text">主要 Text</Button>
        <Button level="info" theme="text">信息 Text</Button>
        <Button theme="text">默认 Text</Button>
        <Button level="danger" theme="text">危险 Text</Button>
        <Button level="warning" theme="text">警告 Text</Button>
      </div>
    </div>
    <h1>禁用状态</h1>
    <div>
      <Button disabled>禁用按钮</Button>
      <Button theme="link" disabled>禁用 Link</Button>
      <Button theme="text" disabled>禁用 Text</Button>
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