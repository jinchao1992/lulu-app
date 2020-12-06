<template>
  <div class="lulu-tabs">
    <div class="lulu-tabs-nav">
      <div
        class="lulu-tabs-nav-item"
        :class="{selected: selected === n.key}"
        v-for="(n,index) in navs"
        :key="index"
        @click="() => select(n.key)"
      >{{n.title}}
      </div>
    </div>
    <div class="lulu-tabs-content">
      <component class="lulu-tabs-content-item" :is="current"/>
    </div>
  </div>
</template>

<script lang="ts">
  import { computed } from 'vue';
  import Tab from './Tab.vue';

  export default {
    name: 'Tabs',
    props: {
      selected: String
    },
    setup(props, context) {
      const defaults = context.slots.default();
      defaults.forEach(node => {
        if (node.type !== Tab) {
          throw new Error('标签名称不对，请更换');
        }
      });
      // current 是指的当前切换的内容
      const current = computed(() => {
        return defaults.find(node => {
          return node.key === props.selected;
        });
      });
      const navs = defaults.map(node => {
        return {
          title: node.props.title,
          key: node.props.key
        };
      });
      const select = (key: string) => {
        context.emit('update:selected', key);
      };
      return {
        defaults,
        navs,
        current,
        select
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