<template>
  <div class="lulu-tabs">
    <div class="lulu-tabs-nav">
      <div class="lulu-tabs-nav-item" v-for="(t,index) in titles" :key="index">{{t}}</div>
    </div>
    <div class="lulu-tabs-content">
      <component class="lulu-tabs-content-item" v-for="(c, index) in defaults" :is="c" :key="index"/>
    </div>
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

<style scoped lang="scss">
  $blue: #40a9ff;
  $color: #333;
  $border-color: #d9d9d9;
  .lulu-tabs {
    &-nav {
      display: flex;
      color: $color;
      border-bottom: 1px solid $border-color;

      &-item {
        padding: 8px 0;
        margin: 0 16px;
        cursor: pointer;

        &:first-child {
          margin-left: 0;
        }

        &.selected {
          color: $blue;
        }
      }
    }

    &-content {
      padding: 8px 0;
    }
  }
</style>