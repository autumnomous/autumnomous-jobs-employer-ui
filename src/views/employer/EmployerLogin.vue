<template>
    <CoverRow>
        
        <template v-slot:sidecontent>
            
        </template>
        
        <!-- Form -->
        <form class="js-validate" @submit.prevent="formSubmit">
            <!-- Title -->
            <div class="mb-5 mb-md-7">
            <h1 class="h2">Welcome back</h1>
            <p>Login to manage your account.</p>
            </div>
            <!-- End Title -->

            <!-- Form Group -->
            <div class="js-form-message form-group">
            <label class="input-label" for="signinSrEmail">Email address</label>
            <input type="email" v-model="v$.login.email.$model" class="form-control" name="email" id="signinSrEmail" tabindex="1" placeholder="Email address" aria-label="Email address" required
                    data-msg="Please enter a valid email address." :class="{ 'is-invalid': v$.login.email.$errors.length }">
                    <div class="input-errors" v-for="error of v$.login.email.$errors" :key="error.$uid">
                        <div class="error-msg">{{ error.$message }}</div>
                    </div>

            </div>
            <!-- End Form Group -->

            <!-- Form Group -->
            <div class="js-form-message form-group">
            <label class="input-label" for="signinSrPassword" tabindex="0">
                <span class="d-flex justify-content-between align-items-center">
                Password
                <a class="link-underline text-capitalize font-weight-normal" href="page-recover-account.html">Forgot Password?</a>
                </span>
            </label>
            <input type="password" v-model="v$.login.password.$model" class="form-control" name="password" id="signinSrPassword" tabindex="2" placeholder="********" aria-label="********" required
                    data-msg="Your password is invalid. Please try again.">
            </div>
            <!-- End Form Group -->

            <!-- Button -->
            <div class="row align-items-center mb-5">
            <div class="col-sm-6 mb-3 mb-sm-0">
                <span class="font-size-1 text-muted">Don't have an account?</span>
                <router-link class="font-size-1 font-weight-bold" to="/employer/signup">Signup</router-link>
            </div>

            <div class="col-sm-6 text-sm-right">
                <button type="submit" class="btn btn-primary transition-3d-hover">Get Started</button>
            </div>
            </div>
            <!-- End Button -->
        </form>
        <!-- End Form -->
    </CoverRow>
</template>

<script>

import CoverRow from '../../components/ui/auth/CoverRow.vue'
import AuthLayout from '../../layouts/AuthLayout.vue'
import useVuelidate from '@vuelidate/core'
import { required, minLength, email } from '@vuelidate/validators'

export default {
    
    setup () {
        return { v$: useVuelidate() }
    },
    components:{
        CoverRow
    },
    data(){
        return {
            login:{
                email:"",
                password:"",
            },
            token:""
        }
    },
    validations(){

        return {
            login:{
                email:{required, email},
                password:{required},
            }
        }
    },

    methods:{

        async formSubmit(e){

            this.token = await fetch(process.env.VUE_APP_BIT_API_PATH + "/employer/login",
                      {
                          method: "POST",
                          headers: {
                              "Content-Type": "application/json",
                              Authorization: "Bearer " + process.env.VUE_APP_BIT_API_KEY
                          },
                          credentials: "include",
                          body: JSON.stringify({ 
                              email:this.login.email,
                              password:this.login.password})
                      }
                  ).then(result =>{

                      if(!result.ok){
                        console.log(result)
                        return result
                      }

                      return result.json()

                  })

            if(this.token){
                this.$cookies.set('com.bitjobs', this.token.token);
                
                if(!this.token.initialpasswordchanged){
                    this.$router.replace('/employer/registration')
                } else{
                    this.$router.replace('/employer/dashboard')
                }

            }
        }
    },
    created() {
        this.$emit('update:layout', AuthLayout);
    },
}
</script>

<style>

</style>