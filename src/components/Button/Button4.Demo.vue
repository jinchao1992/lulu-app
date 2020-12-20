<demo>
  禁用状态
</demo>
<template>
  <div>
    <Button disabled>禁用按钮</Button>
    <Button theme="link" disabled>禁用 Link</Button>
    <Button theme="text" disabled>禁用 Text</Button>
  </div>
</template>

<script>
  import Button from '../../lib/Button.vue'

  export default {
    name: 'Button4.Demo.vue',
    components: {
      Button
    }
  }
</script>