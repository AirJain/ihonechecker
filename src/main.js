// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'amfe-flexible'
import 'vant/lib/index.css';
import qs from 'qs'
import helper from "./utils/helper";
import user from "./utils/user";

import { Skeleton, Divider, Image as VanImage, Sticky, List, Empty, PullRefresh, Form, Field, Checkbox, Progress, Dialog, Toast, Col, Row, Swipe, SwipeItem, Button, Tabs, Tab, Cell, CellGroup, Icon, NavBar, Notify } from 'vant';
Vue.use(Sticky);
Vue.use(Col);
Vue.use(Row);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Button);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Icon);
Vue.use(NavBar);
Vue.use(Notify);
Vue.use(Toast);
Vue.use(Dialog);
Vue.use(Progress);
Vue.use(Checkbox);
Vue.use(Field);
Vue.use(Form);
Vue.use(PullRefresh);
Vue.use(Empty);
Vue.use(List);
Vue.use(VanImage);
Vue.use(Divider);
Vue.use(Skeleton);
import { VueAxios } from './utils/request'    
Vue.use(VueAxios)
Vue.config.productionTip = false
Vue.prototype.$qs = qs;
Vue.prototype.$user = user; 

Vue.prototype.$helper = helper;
Vue.prototype.$Jump = helper.Jump;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
