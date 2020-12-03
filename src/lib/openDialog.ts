import Dialog from './Dialog.vue';
import { createApp, h } from 'vue';

export const openDialog = (options) => {
  const { title, content, ok, cancel, overlayClosable } = options;
  const div = document.createElement('div');
  document.body.appendChild(div);
  const close = () => {
    // 卸载
    app.unmount(div);
    div.remove();
  };
  const app = createApp({
    render() {
      return h(Dialog, {
        visible: true,
        title,
        overlayClosable,
        ok,
        cancel,
        'onUpdate:visible': (newVisible) => {
          if (!newVisible) {
            close();
          }
        }
      }, {
        default: () => content
      });
    }
  });
  app.mount(div);
};