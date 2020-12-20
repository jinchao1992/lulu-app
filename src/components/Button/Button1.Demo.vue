<demo>
  常规写法
</demo>
<template>
  <div>
    <Button>Default Button</Button>
    <Button theme="dashed">Dashed Button</Button>
    <Button theme="text">Text Button</Button>
    <Button theme="link">Link Button</Button>
  </div>
</template>

<script>
  import Button from '../../lib/Button.vue'

  export default {
    name: 'Button1.Demo.vue',
    components: {
      Button
    }
  }
</script>