<demo>
  支持 disable
</demo>

<template>
  <Switch v-model:value="bool" disabled/>
</template>

<script>
  import Switch from '../lib/Switch.vue'
  import { ref } from 'vue'

  export default {
    name: 'Switch2.demo.vue',
    components: {
      Switch
    },
    setup() {
      const bool = ref(false)
      return {
        bool
      }
    }
  }
</script>

<style scoped>

</style>