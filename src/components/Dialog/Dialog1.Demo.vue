<demo>
  常规用法
</demo>
<template>
  <Button level="primary" @click="toggle">Dialog</Button>
  <Dialog v-model:visible="visible" overlayClosable :ok="ok" :cancel="cancel">
    <p>这是一行内容</p>
    <p>这是第二行内容</p>
  </Dialog>
</template>

<script>
  import Dialog from '../../lib/Dialog.vue'
  import Button from '../../lib/Button.vue'
  import { ref } from 'vue'

  export default {
    name: 'Dialog1.Demo',
    components: {
      Dialog,
      Button
    },
    setup() {
      const visible = ref(false)
      const toggle = () => {
        visible.value = true
      }
      const ok = () => {
        console.log('ok')
        return false
      }
      const cancel = () => {
        console.log('cancel')
      }

      return {
        visible,
        toggle,
        ok,
        cancel,
      }
    }
  }
</script>