<template>
  <div>
    <h1>Tabs 示例1</h1>
    <Tabs :selected="defaultSelected" @update:selected=" defaultSelected = $event">
      <Tab title="导航1" key="1">
        内容1
      </Tab>
      <Tab title="导航2" key="2">
        内容2
      </Tab>
    </Tabs>
  </div>
</template>

<script lang="ts">
  import Tabs from '../lib/Tabs.vue';
  import Tab from '../lib/Tab.vue';
  import { ref } from 'vue';

  export default {
    name: 'TabsDemo',
    components: { Tabs, Tab },
    setup() {
      const defaultSelected = ref('1');
      return {
        defaultSelected
      };
    }
  };
</script>

<style scoped>

</style>