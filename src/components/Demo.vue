<template>
  <div class="demo">
    <section class="demo-component">
      <component :is="component"/>
    </section>
    <section class="demo-meta">
      <div class="demo-meta-title">{{component.__sourceCodeTitle}}</div>
      <div class="demo-meta-description">
        <slot name="demo-description"></slot>
      </div>
      <div class="demo-meta-actions">
        <span class="demo-actions-icon" v-if="!codeVisible" title="显示代码" @click="showCode">
          <svg class="icon">
          <use xlink:href="#icon-code1"></use>
        </svg>
        </span>
        <span class="demo-actions-icon" v-else title="收起代码" @click="hideCode">
          <svg class="icon">
            <use xlink:href="#icon-code"></use>
          </svg>
        </span>
      </div>
    </section>
    <div v-if="codeVisible">
      <pre
        v-html="html"
        class="demo-code"
      />
    </div>
  </div>
</template>

<script lang="ts">
  import { computed, ref } from 'vue';
  import 'prismjs';
  import 'prismjs/themes/prism.css';

  const Prism = (window as any).Prism;

  export default {
    name: 'Demo',
    props: {
      component: Object
    },
    setup(props) {
      const codeVisible = ref(false);
      const html = computed(() => {
        return Prism.highlight(props.component.__sourceCode, Prism.languages.html, 'html');
      });
      const showCode = () => {
        return codeVisible.value = true;
      };
      const hideCode = () => {
        return codeVisible.value = false;
      };
      return {
        Prism,
        html,
        showCode,
        hideCode,
        codeVisible,
      };
    }
  };
</script>

<style lang="scss">
  $border-color: #f0f0f0;
  $colorFloat85: rgba(0, 0, 0, .85);
  $colorFloat45: rgba(0, 0, 0, .45);

  .demo {
    border: 1px solid $border-color;
    margin: 16px 0 32px;
    border-radius: 2px;

    > h2 {
      font-size: 20px;
      padding: 8px 16px;
      border-bottom: 1px solid $border-color;
    }

    &-component {
      padding: 42px 16px 50px;
      border-bottom: 1px solid $border-color;

      .lulu-button {
        margin-right: 8px;
        margin-bottom: 12px;
      }
    }

    &-meta {
      display: flex;
      flex-direction: column;
      position: relative;
      font-size: 14px;
      color: $colorFloat85;

      &-title {
        position: absolute;
        top: -10px;
        left: 16px;
        font-weight: 500;
        background-color: #fff;
      }

      &-description {
        padding: 24px 16px;
      }

      &-actions {
        display: flex;
        align-items: center;
        padding: 8px 16px;
        border-top: 1px dashed $border-color;
        color: $colorFloat45;

        .demo-actions-icon {
          display: block;
          cursor: pointer;
          font-size: 16px;
          transition: all .25s;

          &:hover {
            color: $colorFloat85;
          }
        }
      }
    }

    &-code {
      padding: 8px 16px;
      border-top: 1px dashed $border-color;
      overflow: auto;

      > pre {
        line-height: 1.1;
        font-family: Consolas, 'Courier New', Courier, monospace;
        margin: 0;
      }
    }
  }
</style>