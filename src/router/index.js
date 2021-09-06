import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import JobListView from '../views/employer/JobListView.vue'
import CreateJobView from '../views/employer/CreateJobView.vue'
import JobView from '../views/employer/JobView.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/employer/create-job',
    name: 'Create A Job',
    component: CreateJobView
  },
  {
    path: '/employer/job-list',
    name: 'Job List',
    component: JobListView
  },
  {
    path:'/employer/job-list/:slug',
    name:'job',
    component: JobView
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
