import Dialog from './Dialog.vue';
import { createApp, h } from 'vue';

export const openDialog = (options) => {
  const { title, content, overlayClosable } = options;
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
        'onUpdate:visible': (newVisible) => {
          if (!newVisible) {
            close();
          }
        },
        'onOk': (e) => {
          console.log(e);
          // 点击ok后的回调
          app.unmount(div)
          div.remove()
        },
        'onCancel': () => {
          console.log('cancel');
        },
      }, {
        default: () => content
      });
    }
  });
  app.mount(div);
};