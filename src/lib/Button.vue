<template>
  <button class="lulu-button" :class="className" :disabled="disabled">
    <slot/>
  </button>
</template>

<script lang="ts">
  import { computed } from 'vue';

  export default {
    name: 'Button',
    props: {
      theme: {
        type: String,
        default: 'default'
      },
      size: {
        type: String,
        default: 'normal'
      },
      level: {
        type: String,
        default: 'normal'
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    setup(props) {
      const className = computed(() => {
        return {
          [`lulu-theme-${props.theme}`]: props.theme,
          [`lulu-size-${props.size}`]: props.size,
          [`lulu-level-${props.level}`]: props.level
        };
      });
      return {
        className
      };
    }
  };
</script>

<style lang="scss">
  $h: 32px;
  $border-color: #d9d9d9;
  $color: #333;
  $blue: #40a9ff;
  $radius: 4px;
  $green: #07c160;
  $red: #ee0a24;
  $yellow: #ff976a;

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
    transition: background 250ms;

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

    &.lulu-theme-default {
      &.lulu-level-primary {
        background: $blue;
        color: white;
        border-color: $blue;

        &:hover,
        &:focus {
          background: darken($blue, 10%);
          border-color: darken($blue, 10%);
        }
      }

      &.lulu-level-info {
        background: $green;
        color: white;
        border-color: $green;

        &:hover,
        &:focus {
          background: darken($green, 10%);
          border-color: darken($green, 10%);
        }
      }

      &.lulu-level-danger {
        background: $red;
        color: white;
        border-color: $red;

        &:hover,
        &:focus {
          background: darken($red, 10%);
          border-color: darken($red, 10%);
        }
      }

      &.lulu-level-warning {
        background: $yellow;
        color: white;
        border-color: $yellow;

        &:hover,
        &:focus {
          background: darken($yellow, 10%);
          border-color: darken($yellow, 10%);
        }
      }

      &[disabled] {
        cursor: not-allowed;
        color: rgba(0, 0, 0, .25);
        background: #f5f5f5;
        border-color: #d9d9d9;
        text-shadow: none;
        -webkit-box-shadow: none;
        box-shadow: none;
      }
    }

    &.lulu-theme-link {
      border-color: transparent;
      box-shadow: none;
      color: $blue;

      &:hover, &:focus {
        color: lighten($blue, 10%);
      }

      &.lulu-level-primary {
        color: $blue;

        &:hover,
        &:focus {
          color: darken($blue, 10%);
        }
      }

      &.lulu-level-info {
        color: $green;

        &:hover,
        &:focus {
          color: darken($green, 10%);
        }
      }

      &.lulu-level-danger {
        color: $red;

        &:hover,
        &:focus {
          color: darken($red, 10%);
        }
      }

      &.lulu-level-warning {
        color: $yellow;

        &:hover,
        &:focus {
          color: darken($yellow, 10%);
        }
      }
    }

    &.lulu-theme-text {
      border-color: transparent;
      box-shadow: none;
      color: inherit;

      &:hover, &:focus {
        background: darken(white, 5%);;
      }

      &.lulu-level-primary {
        color: $blue;

        &:hover,
        &:focus {
          color: darken($blue, 10%);
        }
      }

      &.lulu-level-info {
        color: $green;

        &:hover,
        &:focus {
          color: darken($green, 10%);
        }
      }

      &.lulu-level-danger {
        color: $red;

        &:hover,
        &:focus {
          color: darken($red, 10%);
        }
      }

      &.lulu-level-warning {
        color: $yellow;

        &:hover,
        &:focus {
          color: darken($yellow, 10%);
        }
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

    &.lulu-size-large {
      height: 40px;
      padding: 6.4px 15px;
      font-size: 16px;
    }

    &.lulu-size-small {
      height: 24px;
      padding: 0 7px;
      font-size: 14px;
    }

    &.lulu-theme-link, &.lulu-theme-text {
      &[disabled] {
        cursor: not-allowed;
        color: rgba(0, 0, 0, .25);
        background: 0 0;
        border-color: transparent;
        text-shadow: none;
        -webkit-box-shadow: none;
        box-shadow: none;
      }
    }
  }
</style>