import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PersonalWorkOut from '../views/PersonalWorkOut.vue';
import HeroWorkOut from '../views/Heroes.vue';
import Konten from '../views/Konten.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: "Fitness App",
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/personal-workout',
    name: 'Personal Workout',
    component: PersonalWorkOut
  },
  {
    path: '/hero-workout',
    name: 'Hero Workout',
    component: HeroWorkOut
  },
  {
    path: '/konten',
    name: 'Hero Workout',
    component: Konten
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
