<template>
  <div class="lulu-tabs">
    <div class="lulu-tabs-nav" ref="container">
      <div
        class="lulu-tabs-nav-item"
        :class="{selected: selected === n.key}"
        v-for="(n,index) in navs"
        :key="index"
        @click="() => select(n.key)"
        :ref="el => { if (el) navItems[index] = el }"
      >
        {{n.title}}
      </div>
      <div class="lulu-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="lulu-tabs-content">
      <component class="lulu-tabs-content-item" :is="current"/>
    </div>
  </div>
</template>

<script lang="ts">
  import { computed, onMounted, onUpdated, ref } from 'vue';
  import Tab from './Tab.vue';

  export default {
    name: 'Tabs',
    props: {
      selected: String
    },
    setup(props, context) {
      const navItems = ref<HTMLDivElement[]>([]);
      const indicator = ref<HTMLDivElement>(null);
      const container = ref<HTMLDivElement>(null);
      const indicatorAnimate = () => {
        const divs = navItems.value;
        const result = divs.find(div => div.classList.contains('selected'));
        const { width, left: leftItem } = result.getBoundingClientRect();
        indicator.value.style.width = width + 'px';
        const { left: leftContainer } = container.value.getBoundingClientRect();
        indicator.value.style.left = leftItem - leftContainer + 'px';
      };
      onMounted(indicatorAnimate);
      onUpdated(indicatorAnimate);
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
        select,
        navItems,
        indicator,
        container
      };
    }
  };
</script>

<style lang="scss">
  $blue: #40a9ff;
  $color: #333;
  $border-color: #d9d9d9;
  .lulu-tabs {
    &-nav {
      position: relative;
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

      &-indicator {
        position: absolute;
        bottom: -1px;
        left: 0;
        z-index: 1;
        box-sizing: border-box;
        width: 0;
        height: 3px;
        background-color: #1890ff;
        transform-origin: 0 0;
        transition: width .3s cubic-bezier(.645, .045, .355, 1),
        left .3s cubic-bezier(.645, .045, .355, 1);
      }
    }

    &-content {
      padding: 8px 0;
    }
  }
</style>