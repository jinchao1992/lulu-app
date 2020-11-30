<template>
  <div>
    <h1>Switch 示例</h1>
    <Switch v-model:value="checked"/>
  </div>
</template>

<script lang="ts">
  import Switch from '../lib/Switch.vue';
  import { ref } from 'vue';

  export default {
    name: 'SwitchDemo',
    components: { Switch },
    setup() {
      const checked = ref(false);
      return {
        checked
      };
    }
  };
</script>

<style scoped>

</style>