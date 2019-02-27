// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import { Table,TableColumn,Pagination,Form,FormItem,DatePicker,Button} from 'element-ui';
/*Axios*/
import Axios from 'axios'
import qs from 'qs';
import router from './router'

Vue.prototype.$axios=Axios;
Vue.prototype.$qs = qs;
Vue.prototype.HOST='/api';	//前端配置接口跨域
// Axios.defaults.baseURL = 'http://192.168.22.126:8080';
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Pagination);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(DatePicker);
Vue.use(Button);
Vue.config.productionTip = false

//改变mian.js
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
