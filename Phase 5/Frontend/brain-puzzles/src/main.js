// import { createApp, VueElement } from 'vue'
import {createApp} from 'vue'
import App from './App.vue'

import {createRouter, createWebHistory} from 'vue-router'
 import LogInComponent from './components/LogInComponent.vue'
import RegistrationComponent from './components/RegistrationComponent.vue'
import DashboardComponent from './components/DashboardComponent.vue'
import MainScreenComponent  from './components/MainScreenComponent.vue'
import AddAdminComponent  from './components/AddAdminComponent.vue'
import AddThemeComponent  from './components/AddThemeComponent.vue'
import AddQuestionComponent  from './components/AddQuestionComponent.vue'
// const Home = { template: '<div>Veljko</div>' }

const routes =  [
  { path: '/', component: MainScreenComponent },
  { path: '/register', component: RegistrationComponent, name:'registration'},
  { path: '/login', component: LogInComponent, name:'login'},
  { path: '/dashboard', component: DashboardComponent, name:'dashboard'},
  { path: '/mainscreen', component: MainScreenComponent, name:'mainscreen'},
  { path: '/addadmin', component: AddAdminComponent, name:'addadmin'},
  { path: '/addtheme', component: AddThemeComponent, name:'addtheme'},
  { path: '/addquestion', component: AddQuestionComponent, name:'addquestion'}

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