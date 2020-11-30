<template>
  <div>
    <button :class="{'lulu-checked': value}" class="lulu-switch" @click="onToggle">
      <span></span>
    </button>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'Switch.vue',
    props: {
      value: Boolean
    },
    setup(props, context) {
      const onToggle = () => {
        context.emit('update:value', !props.value);
      };
      return {
        onToggle
      };
    }
  };
</script>

<style lang="scss">
  $h: 22px;
  $h2: $h - 4px;
  .lulu-switch {
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

    &.lulu-checked {
      background-color: #1890ff;

      > span {
        left: calc(100% - #{$h} + 2px);
      }
    }

    &.lulu-checked:active {
      > span {
        width: $h2 + 4px;
        margin-left: -4px;
      }
    }

    &:active {
      > span {
        width: $h2 + 4px;
      }
    }
  }
</style>