<template>
  <div>
    <button :class="{checked}" @click="onToggle"><span></span></button>
  </div>
</template>

<script lang="ts">
  import { ref } from 'vue';

  export default {
    name: 'Switch.vue',
    setup() {
      const checked = ref(false);
      const onToggle = () => {
        checked.value = !checked.value;
      };
      return {
        checked,
        onToggle
      };
    }
  };
</script>

<style scoped lang="scss">
  $h: 22px;
  $h2: $h - 4px;
  button {
    height: $h;
    width: $h*2;
    border: none;
    background-color: rgba(0, 0, 0, .25);
    border-radius: $h/2;
    position: relative;
    cursor: pointer;

    span {
      position: absolute;
      top: 2px;
      left: 2px;
      height: $h2;
      width: $h2;
      background: white;
      border-radius: $h2 / 2;
      transition: all .2s ease-in-out;
    }

    &.checked {
      background-color: #1890ff;

      > span {
        left: calc(100% - #{$h} + 2px);
      }
    }
  }
</style>