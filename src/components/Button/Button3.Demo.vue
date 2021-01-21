<demo>
  按钮等级
</demo>
<template>
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
</template>

<script>
  import Button from '../../lib/Button.vue'

  export default {
    name: 'Button3.Demo.vue',
    components: {
      Button
    }
  }
</script>