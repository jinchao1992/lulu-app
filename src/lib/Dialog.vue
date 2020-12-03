<template>
  <Teleport to="body">
    <template v-if="visible">
      <div class="lulu-dialog-overlay" @click="onClickOverlay"></div>
      <div class="lulu-dialog-wrapper">
        <div class="lulu-dialog">
          <header>{{title}} <span class="lulu-dialog-close" @click="close"></span></header>
          <main>
            <slot/>
          </main>
          <footer>
            <Button level="primary" @click="onOk">OK</Button>
            <Button @click="onCancel">Cancel</Button>
          </footer>
        </div>
      </div>
    </template>
  </Teleport>
</template>

<script lang="ts">
  import Button from './Button.vue';

  export default {
    name: 'Dialog',
    props: {
      visible: {
        type: Boolean,
        default: false
      },
      overlayClosable: {
        type: Boolean,
        default: true
      },
      title: {
        type: String,
        default: '提示'
      },
      ok: Function,
      cancel: Function
    },
    components: {
      Button
    },
    setup(props, context) {
      const close = () => {
        context.emit('update:visible', false);
      };
      const onClickOverlay = () => {
        if (props.overlayClosable) {
          close();
        }
      };
      const onOk = () => {
        if (props.ok && props.ok() !== false) {
          close();
        }
      };
      const onCancel = () => {
        props.cancel?.();
        close();
      };
      return { close, onClickOverlay, onOk, onCancel };
    }
  };
</script>

<style lang="scss">
  $radius: 4px;
  $border-color: #f0f0f0;
  .lulu-dialog {
    background: white;
    border-radius: $radius;
    box-shadow: 0 0 3px fade_out(black, 0.5);
    min-width: 30em;
    max-width: 90%;

    &-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: fade_out(black, 0.5);
      z-index: 10;
    }

    &-wrapper {
      position: fixed;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      z-index: 11;
    }

    > header {
      padding: 16px 24px;
      border-bottom: 1px solid $border-color;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 20px;
      color: rgba(0, 0, 0, .85);
    }

    > main {
      padding: 16px 24px;
    }

    > footer {
      border-top: 1px solid $border-color;
      padding: 16px 24px;
      text-align: right;
    }

    &-close {
      position: relative;
      display: inline-block;
      width: 16px;
      height: 16px;
      cursor: pointer;

      &::before,
      &::after {
        content: '';
        position: absolute;
        height: 1px;
        background: black;
        width: 100%;
        top: 50%;
        left: 50%;
      }

      &::before {
        transform: translate(-50%, -50%) rotate(-45deg);
      }

      &::after {
        transform: translate(-50%, -50%) rotate(45deg);
      }
    }
  }
</style>