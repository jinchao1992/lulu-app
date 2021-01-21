<template>
  <h1>代码演示</h1>
  <div class="markdown-body">
    <Demo :component="Button1Demo">
      <template v-slot:demo-description>
        <p>按钮有四种类型：默认按钮、文本按钮、链接按钮、虚线按钮。</p>
      </template>
    </Demo>
    <Demo :component="Button2Demo">
      <template v-slot:demo-description>
        <p>按钮有大、中、小三种尺寸</p>
        <p>通过设置 <code>size</code> <code>large</code> 和 <code>small</code>
          分别为大尺寸和小尺寸 如果不写则默认为中尺寸</p>
      </template>
    </Demo>
    <Demo :component="Button3Demo">
      <template v-slot:demo-description>
        <p>按钮有五种等级类型：主要按钮、信息按钮、默认按钮、危险按钮、警告按钮等。</p>
      </template>
    </Demo>
    <Demo :component="Button4Demo">
      <template v-slot:demo-description>
        <p>按钮添加 <code>disabled</code> 属性后即为不可用状态</p>
      </template>
    </Demo>
    <Demo :component="Button5Demo">
      <template v-slot:demo-description>
        <p>按钮添加 <code>loading</code> 属性后即为加载中状态</p>
      </template>
    </Demo>
  </div>
</template>

<script lang="ts">
  import Demo from '../Demo.vue';
  import Button1Demo from './Button1.Demo.vue';
  import Button2Demo from './Button2.Demo.vue';
  import Button3Demo from './Button3.Demo.vue';
  import Button4Demo from './Button4.Demo.vue';
  import Button5Demo from './Button5.Demo.vue';

  export default {
    name: 'ButtonDemo',
    components: { Demo },
    setup() {
      return {
        Button1Demo,
        Button2Demo,
        Button3Demo,
        Button4Demo,
        Button5Demo
      };
    }
  };
</script>

<style scoped>

</style>