<demo>
  一键打开
</demo>
<template>
  <Button level="primary" @click="showDialog">show dialog</Button>
</template>

<script>
  import Button from '../../lib/Button.vue'
  import {openDialog} from "../../lib"

  export default {
    name: 'Dialog2.Demo.vue',
    components: {
      Button
    },
    setup() {
      const showDialog = () => {
        openDialog({
          title: 'Title',
          content: 'Content of the modal',
          ok: () => {
            console.log('ok')
          },
          cancel: () => {
            console.log('cancel')
          },
          overlayClosable: true
        })
      }
      return {
        showDialog,
      }
    }
  }
</script>