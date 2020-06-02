import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Home from './Home.vue'
import Contact from './Contact.vue'

import Katy from './cities/Katy.vue'
import Chicago from './cities/Chicago.vue'
import Minneapolis from './cities/Minneapolis.vue'
import Madison from './cities/Madison.vue'

import Element from 'element-ui'
// didn't download import 'element-ui/lib/theme-chalk/reset.css'
import 'element-theme-chalk'

Vue.use(VueRouter)
Vue.config.productionTip = false
Vue.use(Element, { size: 'small', zIndex: 3000 })

//Set up Routes
const routes = [
  { path: '/', component: Home },
  { path: '/katy', component: Katy },
  { path: '/contact', component: Contact },
  { path: '/chicago', component: Chicago },
  { path: '/minneapolis', component: Minneapolis },
  { path: '/madison', component: Madison}
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
