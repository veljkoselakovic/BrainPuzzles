// import Vue from 'vue'
import {createRouter, createWebHashHistory} from 'vue-router'
import CanvasComponent from '../components/CanvasComponent.vue'
const Home = { template: '<div>Home</div>' }

const routes =  [
  { path: '/', component: CanvasComponent },
  { path: '/demo', component: Home },

]
// Vue.use(Router)
export const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})

