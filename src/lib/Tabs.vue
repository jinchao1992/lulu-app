<template>
  <div>
    <div v-for="(t,index) in titles" :key="index">{{t}}</div>
    <component v-for="(c, index) in defaults" :is="c" :key="index"/>
  </div>
</template>

<script lang="ts">
  import Tab from './Tab.vue';

  export default {
    name: 'Tabs',
    setup(props, context) {
      const defaults = context.slots.default();
      defaults.forEach(node => {
        if (node.type !== Tab) {
          throw new Error('标签名称不对，请更换');
        }
      });
      const titles = defaults.map(node => {
        return node.props.title;
      });
      return {
        defaults,
        titles
      };
    }
  };
</script>

<style scoped>

</style>