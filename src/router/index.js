import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import AllSharesView from '../views/AllSharesView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { LoginCallback } from '@okta/okta-vue'
import LoginComponent from '../views/Login.vue'
import ProfileComponent from '../views/Profile.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/AllShares',
    name: 'AllShares',
    component: AllSharesView
  },
  {
    path: '/login',
    component: LoginComponent
  },
  {
    path: '/login/callback',
    component: LoginCallback
  },
  {
    path: '/profile',
    component: ProfileComponent,
    meta: {
      requiresAuth: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  routes
})

export default router
