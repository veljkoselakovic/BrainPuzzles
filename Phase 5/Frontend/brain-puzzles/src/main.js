import {createApp}                        from 'vue'
import {createRouter, createWebHistory}   from 'vue-router'

import App                                from './App.vue'
import LogInComponent                     from './components/LogInComponent.vue'
import RegistrationComponent              from './components/RegistrationComponent.vue'
import DashboardComponent                 from './components/DashboardComponent.vue'
import MainScreenComponent                from './components/MainScreenComponent.vue'
import AddAdminComponent                  from './components/AddAdminComponent.vue'
import AddThemeComponent                  from './components/AddThemeComponent.vue'
import AddQuestionComponent               from './components/AddQuestionComponent.vue'
import FightListComponent                 from './components/GameComponents/FightListComponents/FightListComponent.vue'
import MozgicComponent                    from './components/GameComponents/MozgicComponents/MozgicComponent.vue'
import KZZComponent                       from './components/GameComponents/KZZComponents/KZZComponent.vue'
import RankingComponent                   from './components/RankingComponent.vue'


const routes =  [
  { path: '/',            component: LogInComponent                             },
  { path: '/register',    component: RegistrationComponent, name:'registration' },
  { path: '/login',       component: LogInComponent,        name:'login'        },
  { path: '/dashboard',   component: DashboardComponent,    name:'dashboard'    },
  { path: '/mainscreen',  component: MainScreenComponent,   name:'mainscreen'   },
  { path: '/addadmin',    component: AddAdminComponent,     name:'addadmin'     },
  { path: '/addtheme',    component: AddThemeComponent,     name:'addtheme'     },
  { path: '/addquestion', component: AddQuestionComponent,  name:'addquestion'  },
  { path: '/fightlist',   component: FightListComponent,    name:'fightlist'    },
  { path: '/mozgic',      component: MozgicComponent,       name:'mozgic'       },
  { path: '/kzz',         component: KZZComponent,          name:'kzz'          },
  { path: '/ranking',     component: RankingComponent,      name:'ranking'      }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app');