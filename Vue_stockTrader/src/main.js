import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import axios from 'axios';

import { routes } from './routes';
import store from './store/store';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes
});

// global filter
Vue.filter('currency', value => {
  if (value) {
    return '$' + value.toLocaleString();
  }
});

// axios baseURL
axios.defaults.baseURL = 'https://vue-stock-trader-31a41.firebaseio.com/';

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
