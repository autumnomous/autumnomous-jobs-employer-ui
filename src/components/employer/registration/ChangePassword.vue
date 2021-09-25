<template>
    
    <step-form-card id="update-password" >
        <template v-slot:cardheader>Update Password</template>
        <template v-slot:cardbody>

                <alert-error v-if="submissionError" :message="errorMessage"></alert-error>

                <div class="form-group" >
                    <label for="currentpassword" class="input-label">Current Password</label>

                    <input v-model.lazy="v$.password.current.$model" type="password" class="form-control" name="currentpassword" id="currentpassword" aria-label="Current Password" :class="{ 'is-invalid': v$.password.current.$error}">
                    
                        <div class="input-errors" v-for="error of v$.password.current.$errors" :key="error.$uid">
                        <div class="error-msg">{{ error.$message }}</div>
                        </div>
                </div>
                <!-- End Form Group -->
                    <div class="form-group" >
                    <label for="newpassword" class="input-label">New Password</label>

                    <input v-model.lazy="v$.password.new.$model" type="password" class="form-control" name="newpassword" id="newpassword" aria-label="New Password" :class="{ 'is-invalid': v$.password.new.$error }">
                    <span class="text-muted font-size-1">Password should be at least 6 characters long and contain a mix of letters, numbers, and special characters.</span>
                        <div class="input-errors" v-for="error of v$.password.new.$errors" :key="error.$uid">
                        <div class="error-msg">{{ error.$message }}</div>
                        </div>
                </div>
                <!-- End Form Group -->
                    <div class="form-group" >
                    <label for="confirmpassword" class="input-label">Confirm New Password</label>

                    <input v-model.lazy="v$.password.confirm.$model" type="password" class="form-control" name="confirmpassword" id="confirmpassword" aria-label="Job Title" :class="{ 'is-invalid': v$.password.confirm.$error }">
                        <div class="input-errors" v-for="error of v$.password.confirm.$errors" :key="error.$uid">
                        <div class="error-msg">{{ error.$message }}</div>
                        </div>
                </div>
                <!-- End Form Group -->
                

        </template>

        <template v-slot:cardfooter>

                <div class="ml-auto">
                    <button type="button" class="btn btn-primary" id="change-password-button" @click="formSubmit">
                    Save and continue <i class="fas fa-angle-right ml-1"> </i>
                    </button>
                </div>
        </template>
    </step-form-card>
</template>

<script>

import AlertError from '../../ui/AlertError.vue'
import StepFormCard from '../../ui/step-form/StepFormCard.vue'
import useVuelidate from '@vuelidate/core'
import { helpers, required, minLength, sameAs, url } from '@vuelidate/validators'
    export default {
          setup(){
            return {
                 v$: useVuelidate()
            }
        },
        components:{
            StepFormCard,
            AlertError
        },
         data(){
            return {
               
                password:{
                    current:"",
                    new:"",
                    confirm:"",
                },
                errorMessage:"",
                submissionError:false,
                formSubmitted:false,
                
            }
        },
        validations(){
            return {
                password:{
                    current:{
                        required: helpers.withMessage('This field cannot be empty', required)
                    },
                    new:{
                        required: helpers.withMessage('This field cannot be empty', required),
                        minLength:helpers.withMessage('Password must be at least 6 characters long.', minLength(6)),

                        containsUppercase: helpers.withMessage('Password must contain at least 1 uppercase letter.',function(value) {
                        return /[A-Z]/.test(value)
                        }),
                        containsLowercase:helpers.withMessage('Password must contain at least 1 lowercase letter.',function(value) {
                        return /[a-z]/.test(value)
                        }),
                        containsNumber: helpers.withMessage('Password must contain at least 1 number.',function(value) {
                        return /[0-9]/.test(value)
                        }),
                        containsSpecial:helpers.withMessage('Password must contain at least one of the following: #?!@$%^&*- .',function(value) {
                        return /[#?!@$%^&*-]/.test(value)
                        })
                    },
                    confirm:{
                        required: helpers.withMessage('This field cannot be empty', required), 
                        sameAsPassword: helpers.withMessage('Must match the New Password field.',sameAs(this.password.new))
                    }
                }
                
            }
        },
        methods:{
            async formSubmit(){
                if (this.v$.$invalid){
                    this.errorMessage = "Form has errors or is missing input.";
                    this.submissionError = true;
                } else { 

                    var token = this.$store.getters.getToken || this.$cookies.get('com.bitjobs');
                      const result = await fetch(process.env.VUE_APP_BIT_API_PATH + "/employer/update-password",
                      {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: "Bearer " + token
                            },
                            // credentials: "include",
                            body: JSON.stringify({ 
                                newpassword:this.v$.password.new.$model,
                                password:this.v$.password.current.$model})
                        }
                    )

                    if(result.ok){
                        this.submissionError = false;
                        
                        this.$emit("next-step","personal-information")
                    } else { 
                        console.log("error")
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>