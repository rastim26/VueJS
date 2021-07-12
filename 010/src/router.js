import { createRouter, createWebHistory } from 'vue-router'
import Login from './views/Login'
import Forget from './views/Forget'
import Dashboard from './views/Dashboard'
import Mail from './views/Mail'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/login', component: Login, alias: '/' },
    { path: '/forget', component: Forget },
    { path: '/dashboard', component: Dashboard },
    { path: '/mail/:mailId?', component: Mail }
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})
