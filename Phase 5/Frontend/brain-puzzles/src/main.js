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
// import FightListComponent from './components/GameComponents/FightListComponent.vue'
import KZZComponent from './components/GameComponents/KZZComponent.vue'
import RankingComponent  from './components/RankingComponent.vue'
// const Home = { template: '<div>Veljko</div>' }
import MozgicComponent from './components/GameComponents/MozgicComponent.vue'

const routes =  [
  { path: '/', component: MozgicComponent},
  { path: '/register', component: RegistrationComponent, name:'registration'},
  { path: '/login', component: LogInComponent, name:'login'},
  { path: '/dashboard', component: DashboardComponent, name:'dashboard'},
  { path: '/mainscreen', component: MainScreenComponent, name:'mainscreen'},
  { path: '/addadmin', component: AddAdminComponent, name:'addadmin'},
  { path: '/addtheme', component: AddThemeComponent, name:'addtheme'},
  { path: '/addquestion', component: AddQuestionComponent, name:'addquestion'},
  { path: '/ranking', component: RankingComponent, name:'ranking'},
  { path: '/kzz', component: KZZComponent, name:'kzz'},
  { path: '/mozgic', component: MozgicComponent, name:'mozgic'},

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