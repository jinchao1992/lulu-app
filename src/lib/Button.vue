<template>
  <button class="lulu-button" :class="`lulu-theme-${theme}`">
    <slot/>
  </button>
</template>

<script lang="ts">
  export default {
    name: 'Button',
    props: {
      theme: {
        type: String,
        default: 'default'
      }
    }
  };
</script>

<style lang="scss">
  $h: 32px;
  $border-color: #d9d9d9;
  $color: #333;
  $blue: #40a9ff;
  $radius: 4px;
  .lulu-button {
    box-sizing: border-box;
    height: $h;
    padding: 0 12px;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    background: #fff;
    color: $color;
    border: 1px solid $border-color;
    border-radius: $radius;
    box-shadow: 0 1px 0 fade-out(black, 0.95);

    & + & {
      margin-left: 8px;
    }

    &:hover,
    &:focus {
      color: $blue;
      border-color: $blue;
    }

    &:focus {
      outline: none;
    }

    &::-moz-focus-inner {
      border: 0;
    }

    &.lulu-theme-link {
      border-color: transparent;
      box-shadow: none;
      color: $blue;

      &:hover, &:focus {
        color: lighten($blue, 10%);
      }
    }

    &.lulu-theme-text {
      border-color: transparent;
      box-shadow: none;
      color: inherit;

      &:hover, &:focus {
        background: darken(white, 5%);;
      }
    }

    &.lulu-theme-dashed {
      color: $color;
      background: #fff;
      border-color: $border-color;
      border-style: dashed;

      &:hover, &:focus {
        color: $blue;
        background: #fff;
        border-color: $blue
      }
    }
  }
</style>