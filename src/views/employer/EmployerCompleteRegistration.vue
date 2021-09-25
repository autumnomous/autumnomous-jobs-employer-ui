<template>
   
   
    <main id="content" role="main">
    <!-- Step Section -->
    <div class="container space-top-1 space-top-lg-2 space-bottom-2 space-bottom-lg-3">
      <!-- Step Form -->
      <form class="js-step-form" enctype="multipart/form-data">
        <div class="row">
          <div id="stickyBlockStartPoint" class="col-lg-4">
            <!-- Sticky Block -->
            <div class="js-sticky-block">
              <!-- Step -->
              <ul id="postJobStepFormProgress" class="js-step-progress step step-icon-xs step-border-last-0 mt-5">
                <li class="step-item">
                  <div class="step-content-wrapper" href="">
                    <span class="step-icon step-icon-soft-dark">1</span>
                    <div class="step-content">
                      <span class="step-title">Update Password</span>
                      <span class="step-title-description step-text font-size-1">For your security, change your password.</span>
                    </div>
                  </div>
                </li>

                <li class="step-item">
                  <div class="step-content-wrapper" href="">
                    <span class="step-icon step-icon-soft-dark">2</span>
                    <div class="step-content">
                      <span class="step-title">Enter your personal information</span>
                      <span class="step-title-description step-text font-size-1">Enter your email, phone number, etc.</span>
                    </div>
                  </div>
                </li>

                <li class="step-item">
                  <div class="step-content-wrapper" href="">
                    <span class="step-icon step-icon-soft-dark">3</span>
                    <div class="step-content">
                      <span class="step-title">Enter Company Details</span>
                      <span class="step-title-description step-text font-size-1"></span>
                    </div>
                  </div>
                </li>

                <li class="step-item">
                  <div class="step-content-wrapper" href="">
                    <span class="step-icon step-icon-soft-dark">4</span>
                    <div class="step-content">
                      <span class="step-title">Select Payment Method</span>
                      <span class="step-title-description step-text font-size-1"></span>
                    </div>
                  </div>
                </li>

                <li class="step-item" >
                  <div class="step-content-wrapper" href="">
                    <span class="step-icon step-icon-soft-dark">5</span>
                    <div class="step-content">
                      <span class="step-title">Enter Payment Method Details</span>
                      <span class="step-title-description step-text font-size-1"></span>
                    </div>
                  </div>
                </li>

              </ul>
              <!-- End Step -->
            </div>
            <!-- End Sticky Block -->
          </div>

          <div id="formContainer" class="col-lg-8" v-show="!formSubmitted">
            <!-- Content Step Form -->
            <div id="postJobStepFormContent">

                <component :is="activeStep" @next-step="nextStep" :employer="employer"></component>

            </div>
            <!-- End Content Step Form -->

            <!-- Message Body -->
            <div id="successMessageContent" v-show="formSubmitted">
              <div class="text-center">
                <img class="img-fluid mb-3" src="../../../public/assets/svg/illustrations/medal.svg" alt="Image Description" style="max-width: 15rem;">

                <div class="mb-4">
                  <h2>Successful!</h2>
                  <p>New <span class="font-weight-bold text-dark">UI/UX Designer</span> job has been successfully created.</p>
                </div>

                <div class="d-flex justify-content-center">
                  <a class="btn btn-white mr-3" href="employer.html">
                    Go to profile <i class="fas fa-angle-right mr-1 ml-2"></i>
                  </a>
                  <a class="btn btn-primary" href="#" >
                    <i class="fas fa-briefcase mr-1"></i> Create new job
                  </a>
                </div>
              </div>
            </div>
            <!-- End Message Body -->

            <!-- Sticky Block End Point -->
            <div id="stickyBlockEndPoint"></div>
          </div>
        </div>
        <!-- End Row -->
      </form>
      <!-- End Step Form -->
    </div>
    <!-- End Step Section -->
    </main>
 

</template>

<script>
import CoverRow from '../../components/ui/auth/CoverRow.vue'
import AlertError from '../../components/ui/AlertError.vue'
import RegistrationLayout from '../../layouts/RegistrationLayout.vue'
import StepFormCard from '../../components/ui/step-form/StepFormCard.vue'
import ChangePassword from '../../components/employer/registration/ChangePassword.vue'
import PersonalInformation from '../../components/employer/registration/PersonalInformation.vue'
import CompanyDetails from '../../components/employer/registration/CompanyDetails.vue'
import CKEditor from '@ckeditor/ckeditor5-vue'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import useVuelidate from '@vuelidate/core'
import { helpers, required, minLength, sameAs, url } from '@vuelidate/validators'

    export default {
        async created() {
            this.$emit('update:layout', RegistrationLayout);

           
            this.token = this.$cookies.get('com.bitjobs');
            
            this.employer = await fetch(process.env.VUE_APP_BIT_API_PATH + "/employer/get",
              {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + this.token
                    }
                }
              ).then(result =>{

                  if(!result.ok){
                      console.log(result)
                      return result
                  }
                  return result.json()

              })


            if(this.employer){
              this.activeStep = this.$store.getters.getRegistrationStep || this.employer.registrationstep;
            }

        },

        setup(){
            return {
                 v$: useVuelidate()
            }
        },
        components:{
            CoverRow,
            AlertError,
            StepFormCard,
            ChangePassword,
            PersonalInformation,
            CompanyDetails, 
            ckeditor: CKEditor.component,
        }, 
        data(){
            return {
                steps:["change-password","personal-information","company-details","4","5","6","7"],
                activeStep:"change-password",
                editor: ClassicEditor,
                paymentMethod:{
                    method:"",
                    details:""
                },
                employer:{},
                token:"",
                errorMessage:"",
                submissionError:false,
                formSubmitted:false,
                
            }
        },
        validations(){
            return {
                paymentMethod:{
                    method:{required},
                    details:{}
                },
                 companyDetails:{
                    companyName:{required},
                    location:{},
                    url:{required, url},
                    socials:{
                        facebook:{},
                        twitter:{},
                        instagram:{},
                    },
                    bio:{},
                    logo:{},
                    otherDetails:{}

                },
                personalInformation:{
                    firstname:{required},
                    lastname:{required},
                    email:{required},
                    phoneNumber:{required},
                    mobileNumber:{required},
                    role:{required}
                },
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
                        sameAs: helpers.withMessage('Must match the New Password field.',sameAs(this.newpassword))
                    }
                }
                
            }
        },
        methods:{
            nextStep(next_step){

                this.activeStep = this.steps.find((el)=>{ el == next_step})

                // var current_step = Number(e.target.id.split("-")[1]);
                

                // var next_step =current_step + 1;

                
                // if(next_step <= Object.keys(this.steps).length){
                    
                //     this.activeStep = String(next_step);

                // }
            
            },
            onFileChange(e){
                var file = e.target.files || e.dataTransfer.files;

                if(!file.length){
                    return;
                }
                //  upload image to server
            },
            async formSubmit(){
                
                if (this.v$.$invalid){
                    this.errorMessage = "Form has errors.";
                    this.submissionError = true;
                } else { 
                      const result = await fetch(process.env.VUE_APP_BIT_API_PATH + "/employer/update-password",
                      {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: "Bearer " + this.$store.getters.getToken
                            },
                            credentials: "include",
                            body: JSON.stringify({ 
                                newpassword:this.v$.newpassword.$model,
                                password:this.v$.currentpassword.$model})
                        }
                    ).then(result =>{
                        return result

                    })
                    
                    if(result.ok){
                        this.submissionError = false;
                        this.$router.replace('/employer/dashboard')
                    } else{
                        this.submissionError = true;
                        this.errorMessage = "An error occurred while processing your request. Make sure your current password is correct!"
                    }
                }
              

            if(this.token){
                console.log(this.token)
                this.$cookies.set('com.bitjobs', this.token.token);
                
                if(!this.token.initialpasswordchanged){
                    this.$router.replace('/employer/change-password')
                } else{
                    this.$router.replace('/employer/dashboard')
                }

            }
            }
        },
        
    }
</script>

<style scoped>

</style>