import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import { router } from './router';
import { store } from './store';
// import '@unocss/reset/tailwind.css';
import 'uno.css';
import './styles/index.scss';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

new Vue({
  router,
  pinia: store,
  render: (h) => h(App),
}).$mount('#app');
