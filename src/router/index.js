import { createRouter, createWebHistory } from 'vue-router'
import Cookies from 'js-cookie'
import Home from '../views/Home.vue'
import Dashboard from '../views/employer/Dashboard.vue'
import JobPackagePurchase from '../views/employer/JobPackagePurchase.vue'
import JobView from '../views/employer/JobView.vue'
import AccountView from '../views/employer/AccountView.vue'
import JobList from '../views/JobList.vue'
import EmployerLogin from '../views/employer/EmployerLogin.vue'
import EmployerSignUp from '../views/employer/EmployerSignUp.vue'
import EmployerCompleteRegistration from '../views/employer/EmployerCompleteRegistration.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/employer/login',
    name: 'Employer Login',
    component: EmployerLogin,
    beforeEnter:(to, from, next)=>{
      // const { $cookies } = router.app.config.globalProperties;
      // const token = $cookies.get('com.bitjobs');

      // if(token){
      //   next('/employer/dashboard')
      // }
      next()
    }
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
    path: '/employer/buy-job-package',
    name: 'Buy A Job Package',
    component: JobPackagePurchase
  },
  {
    path: '/employer/dashboard',
    name: 'Employer Dashboard',
    component:Dashboard
    
  },
  {
    path: '/employer/account',
    name: 'Account',
    component: AccountView,
    beforeEnter:(to, from, next)=>{
      //  console.log(Vue.$cookies)
       next()
    }
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

router.beforeEach( async (to,from, next) =>{
  // const { $cookies } = router.app.config.globalProperties;
  const token = Cookies.get('com.bitjobs');

  if(to.fullPath.includes("employer")){
    // var result = await fetch(process.env.VUE_APP_BIT_API_PATH + "/employer/get",
    //   {
    //         method: "GET",
    //         headers: {
    //             "Content-Type": "application/json",
    //             Authorization: "Bearer " + token
    //         }
    //     }
    //   ).then(result =>{

    //       if(!result.ok){
    //           console.log(result)
    //           return result
    //       }
    //       return result

    //   })
      // if(result.ok){
      //   const employer = result.json()
      //   if(employer){
      //     if(employer.registrationstep != "registration-complete" && !to.fullPath.includes('registration')){
      //       next('/employer/registration')
      //     } else { 
      //       if(to.fullPath.includes('login')){
      //         next('/employer/dashboard')
      //       }
      //       next()
      //     }
      // } else { 
      //   next('/employer/login')
      // }

      // }

      
  }
  
    next()
  // if(to.fullPath === ''){

  // }
})
export default router
