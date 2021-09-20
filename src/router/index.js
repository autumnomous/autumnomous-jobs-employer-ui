import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/employer/Dashboard.vue'
import CreateJobView from '../views/employer/CreateJobView.vue'
import JobView from '../views/employer/JobView.vue'
import AccountView from '../views/employer/AccountView.vue'
import JobList from '../views/JobList.vue'
import EmployerLogin from '../views/employer/EmployerLogin.vue'
import EmployerSignUp from '../views/employer/EmployerSignUp.vue'
import EmployerCompleteRegistration from '../views/employer/EmployerCompleteRegistration.vue';
import Vue from 'vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/employer/login',
    name: 'Employer Login',
    component: EmployerLogin
  },
  {
    path: '/employer/signup',
    name: 'Employer Sign Up',
    component: EmployerSignUp
  },
  {
    path: '/employer/registration',
    name: 'Employer Registration',
    component: EmployerCompleteRegistration
  },
  {
    path: '/listing',
    name: 'Job List',
    component: JobList
  },
  {
    path: '/employer/create-job',
    name: 'Create A Job',
    component: CreateJobView
  },
  {
    path: '/employer/dashboard',
    name: 'Employer Dashbaord',
    component:Dashboard,
    beforeEnter:(to, from, next)=>{
       console.log(Vue)
    }
  },
  {
    path: '/employer/account',
    name: 'Account',
    component: AccountView
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

// router.beforeEach((to,from, next) =>{
//   // var token = window.$cookies.get('com.bitjobs');
//   // if(to.fullPath === '/login'){

//   //   if(token){
//   //     next('/employer/dashboard')
//   //   }
//   // }

//   // if(to.fullPath === ''){

//   // }
// })
export default router
