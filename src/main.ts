import Vue from 'vue';
import VueAsyncManager from 'vue-async-manager';
import App from './App.vue';
import router from './router';
import './assets/css/main.scss';

Vue.config.productionTip = false;
Vue.use(VueAsyncManager);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
