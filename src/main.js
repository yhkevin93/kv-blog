// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css'; 
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';
import 'iview/dist/styles/iview.css'; 

Vue.component(CollapseTransition.name, CollapseTransition)
Vue.config.productionTip = false
Vue.use(iView);
Vue.use(ElementUI);

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
