import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Home from './Home.vue'
import Katy from './Katy.vue'
import Contact from './Contact.vue'

Vue.use(VueRouter)
Vue.config.productionTip = false

//Set up Routes
const routes = [
  { path: '/', component: Home },
  { path: '/katy', component: Katy },
  { path: '/contact', component: Contact }
];

const router = new VueRouter({
  routes: routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App),
}).$mount('#app')
