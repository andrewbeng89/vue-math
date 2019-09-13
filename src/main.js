import Vue from 'vue';
import App from './App.vue';
import CeMath from './components/CeMath';

Vue.config.productionTip = false;

CeMath.define();
CeMath.useWith.vue(Vue);

new Vue({
  render: h => h(App),
}).$mount('#app');
