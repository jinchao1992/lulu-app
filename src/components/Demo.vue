<template>
  <div class="demo">
    <h2>{{component.__sourceCodeTitle}}</h2>
    <div class="demo-component">
      <component :is="component"/>
    </div>
    <div class="demo-actions">
      <Button level="primary" @click="hideCode" v-if="codeVisible">隐藏代码</Button>
      <Button level="primary" @click="showCode" v-else>查看代码</Button>
    </div>
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
  import Button from '../lib/Button.vue';

  const Prism = (window as any).Prism;

  export default {
    name: 'Demo',
    props: {
      component: Object
    },
    components: {
      Button
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
        codeVisible
      };
    }
  };
</script>

<style lang="scss">
  $border-color: #d9d9d9;
  .demo {
    border: 1px solid $border-color;
    margin: 16px 0 32px;

    > h2 {
      font-size: 20px;
      padding: 8px 16px;
      border-bottom: 1px solid $border-color;
    }

    &-component {
      padding: 16px;

      .lulu-button {
        margin-right: 8px;
        margin-bottom: 12px;
      }
    }

    &-actions {
      padding: 8px 16px;
      border-top: 1px dashed $border-color;
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