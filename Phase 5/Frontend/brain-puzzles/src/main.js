// import { createApp, VueElement } from 'vue'
import {createApp} from 'vue'
import App from './App.vue'

import {createRouter, createWebHistory} from 'vue-router'
import LogInComponent from './components/LogInComponent'
import FancyButton from './components/FancyButton.vue'
// const Home = { template: '<div>Veljko</div>' }

const routes =  [
  { path: '/', component: LogInComponent },
  { path: '/demo', component: FancyButton },

]
// Vue.use(Router)
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
})




const app = createApp(App)
app.use(router)
app.mount('#app')