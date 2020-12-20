<demo>
  按钮尺寸
</demo>
<template>
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
</template>

<script>
  import Button from '../../lib/Button.vue'

  export default {
    name: 'Button2.Demo.vue',
    components: {
      Button
    }
  }

</script>