<template>
  <div>
    <button><span></span></button>
  </div>
</template>

<script>
  export default {
    name: 'Switch.vue'
  }
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

    &:hover {
      > span {
        left: calc(100% - #{$h} - 1px);
      }
    }
  }
</style>