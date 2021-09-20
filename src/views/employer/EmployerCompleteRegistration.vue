<template>
   
   <alert-error v-if="submissionError" :message="errorMessage"></alert-error>
    <main id="content" role="main">
    <!-- Step Section -->
    <div class="container space-top-1 space-top-lg-2 space-bottom-2 space-bottom-lg-3">
      <!-- Step Form -->
      <form class="js-step-form">
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
                <step-form-card :active="activeStep === '1'" id="step-1" >
                  <template v-slot:cardheader>Update Password</template>
                    <template v-slot:cardbody>

                          <div class="form-group" >
                                <label for="titleLabel" class="input-label">Current Password</label>

                                <input v-model.lazy="v$.password.current.$model" type="password" class="form-control" name="titleName" id="titleLabel" aria-label="Job Title" :class="{ 'is-invalid': v$.password.current.$error}">
                                
                                  <div class="input-errors" v-for="error of v$.password.current.$errors" :key="error.$uid">
                                    <div class="error-msg">{{ error.$message }}</div>
                                  </div>
                            </div>
                            <!-- End Form Group -->
                              <div class="form-group" >
                                <label for="titleLabel" class="input-label">New Password</label>

                                <input v-model.lazy="v$.password.new.$model" type="password" class="form-control" name="titleName" id="titleLabel" aria-label="Job Title" :class="{ 'is-invalid': v$.password.new.$error }">
                                <span class="text-muted font-size-1">Password should be at least 6 characters long and contain a mix of letters, numbers, and special characters.</span>
                                  <div class="input-errors" v-for="error of v$.password.new.$errors" :key="error.$uid">
                                    <div class="error-msg">{{ error.$message }}</div>
                                  </div>
                            </div>
                            <!-- End Form Group -->
                              <div class="form-group" >
                                <label for="titleLabel" class="input-label">Confirm New Password</label>

                                <input v-model.lazy="v$.password.confirm.$model" type="password" class="form-control" name="titleName" id="titleLabel" aria-label="Job Title" :class="{ 'is-invalid': v$.password.confirm.$error }">
                                  <div class="input-errors" v-for="error of v$.password.confirm.$errors" :key="error.$uid">
                                    <div class="error-msg">{{ error.$message }}</div>
                                  </div>
                            </div>
                            <!-- End Form Group -->
                         

                    </template>

                    <template v-slot:cardfooter>

                            <div class="ml-auto">
                                <button type="button" class="btn btn-primary" id="step-1-button" @click="nextStep">
                                Save and continue <i class="fas fa-angle-right ml-1"> </i>
                                </button>
                            </div>
                    </template>
                </step-form-card>

                <step-form-card :active="activeStep === '2'" id="step-2">
                    <template v-slot:cardheader>Enter Your Personal Information</template>
                    <template v-slot:cardbody>
                            <div class="form-group" >
                                <label for="titleLabel" class="input-label">First Name</label>

                                <input v-model.lazy="v$.personalInformation.firstname.$model" type="text" class="form-control" name="firstname" id="firstname" aria-label="First Name" :class="{ 'is-invalid': v$.personalInformation.firstname.$error}">
                                
                                  <div class="input-errors" v-for="error of v$.personalInformation.firstname.$errors" :key="error.$uid">
                                    <div class="error-msg">{{ error.$message }}</div>
                                  </div>
                            </div>

                            <div class="form-group" >
                                <label for="titleLabel" class="input-label">Last Name</label>

                                <input v-model.lazy="v$.personalInformation.lastname.$model" type="text" class="form-control" name="lastname" id="lastname" aria-label="Last Name" :class="{ 'is-invalid': v$.personalInformation.lastname.$error}">
                                
                                  <div class="input-errors" v-for="error of v$.personalInformation.lastname.$errors" :key="error.$uid">
                                    <div class="error-msg">{{ error.$message }}</div>
                                  </div>
                            </div>

                            <div class="form-group" >
                                <label for="titleLabel" class="input-label">Email</label>

                                <input v-model.lazy="v$.personalInformation.email.$model" type="text" class="form-control" name="email" id="email" aria-label="Email" :class="{ 'is-invalid': v$.personalInformation.email.$error}">
                                
                                  <div class="input-errors" v-for="error of v$.personalInformation.email.$errors" :key="error.$uid">
                                    <div class="error-msg">{{ error.$message }}</div>
                                  </div>
                            </div>

                            <div class="form-group" >
                                <label for="titleLabel" class="input-label">Phone Number</label>

                                <input v-model.lazy="v$.personalInformation.phoneNumber.$model" type="text" class="form-control" name="phonenumber" id="phonenumber" aria-label="Phone Number" :class="{ 'is-invalid': v$.personalInformation.phoneNumber.$error}">
                                
                                  <div class="input-errors" v-for="error of v$.personalInformation.phoneNumber.$errors" :key="error.$uid">
                                    <div class="error-msg">{{ error.$message }}</div>
                                  </div>
                            </div>

                            <div class="form-group" >
                                <label for="titleLabel" class="input-label">Mobile Number</label>

                                <input v-model.lazy="v$.personalInformation.mobileNumber.$model" type="text" class="form-control" name="mobilenumber" id="mobilenumber" aria-label="Mobile Number" :class="{ 'is-invalid': v$.personalInformation.mobileNumber.$error}">
                                
                                  <div class="input-errors" v-for="error of v$.personalInformation.mobileNumber.$errors" :key="error.$uid">
                                    <div class="error-msg">{{ error.$message }}</div>
                                  </div>
                            </div>

                            <div class="form-group" >
                                <label for="titleLabel" class="input-label">Role</label>

                                <input v-model.lazy="v$.personalInformation.role.$model" type="text" class="form-control" name="role" id="role" aria-label="Role" :class="{ 'is-invalid': v$.personalInformation.role.$error}">
                                
                                  <div class="input-errors" v-for="error of v$.personalInformation.role.$errors" :key="error.$uid">
                                    <div class="error-msg">{{ error.$message }}</div>
                                  </div>
                            </div>


                    </template>

                    <template v-slot:cardfooter>

                          <button type="button" class="btn btn-ghost-secondary" id="step-2-button-previous" @click="previousStep">
                            <i class="fas fa-angle-left mr-1"  ></i> Previous step
                        </button>

                            <div class="ml-auto">
                                <button type="button" class="btn btn-primary" id="step-2-button" @click="nextStep">
                                Save and continue <i class="fas fa-angle-right ml-1"> </i>
                                </button>
                            </div>
                    </template>
                </step-form-card>

                <step-form-card :active="activeStep === '3'" id="step-3">

                    <template v-slot:cardheader>Enter Company Details</template>
                    <template v-slot:cardbody>
                            <div class="form-group" >
                                <label for="titleLabel" class="input-label">Company Name</label>

                                <input v-model.lazy="v$.companyDetails.companyName.$model" type="text" class="form-control" name="companyname" id="companyname" aria-label="Company Name" :class="{ 'is-invalid': v$.companyDetails.companyName.$error}">
                                
                                    <div class="input-errors" v-for="error of v$.companyDetails.companyName.$errors" :key="error.$uid">
                                    <div class="error-msg">{{ error.$message }}</div>
                                    </div>
                            </div>

                            <div class="form-group" >
                                <label for="titleLabel" class="input-label">Location</label>

                                <input v-model.lazy="v$.companyDetails.location.$model" type="text" class="form-control" name="location" id="location" aria-label="Location" :class="{ 'is-invalid': v$.companyDetails.location.$error}">
                                
                                    <div class="input-errors" v-for="error of v$.companyDetails.location.$errors" :key="error.$uid">
                                    <div class="error-msg">{{ error.$message }}</div>
                                    </div>
                            </div>

                            <div class="form-group" >
                                <label for="titleLabel" class="input-label">URL</label>

                                <input v-model.lazy="v$.companyDetails.url.$model" type="text" class="form-control" name="location" id="location" aria-label="Location" :class="{ 'is-invalid': v$.companyDetails.url.$error}">
                                
                                    <div class="input-errors" v-for="error of v$.companyDetails.url.$errors" :key="error.$uid">
                                    <div class="error-msg">{{ error.$message }}</div>
                                    </div>
                            </div>

                            <div class="form-group" >
                                <label for="titleLabel" class="input-label">Facebook</label>

                                <input v-model.lazy="v$.companyDetails.socials.facebook.$model" type="text" class="form-control" name="location" id="location" aria-label="Location" :class="{ 'is-invalid': v$.companyDetails.socials.facebook.$error}">
                                
                                    <div class="input-errors" v-for="error of v$.companyDetails.socials.facebook.$errors" :key="error.$uid">
                                    <div class="error-msg">{{ error.$message }}</div>
                                    </div>
                            </div>

                            <div class="form-group" >
                                <label for="titleLabel" class="input-label">Twitter</label>

                                <input v-model.lazy="v$.companyDetails.socials.twitter.$model" type="text" class="form-control" name="location" id="location" aria-label="Location" :class="{ 'is-invalid': v$.companyDetails.socials.twitter.$error}">
                                
                                    <div class="input-errors" v-for="error of v$.companyDetails.socials.twitter.$errors" :key="error.$uid">
                                    <div class="error-msg">{{ error.$message }}</div>
                                    </div>
                            </div>

                            <div class="form-group" >
                                <label for="titleLabel" class="input-label">Instagram</label>

                                <input v-model.lazy="v$.companyDetails.socials.instagram.$model" type="text" class="form-control" name="location" id="location" aria-label="Location" :class="{ 'is-invalid': v$.companyDetails.socials.instagram.$error}">
                                
                                    <div class="input-errors" v-for="error of v$.companyDetails.socials.instagram.$errors" :key="error.$uid">
                                    <div class="error-msg">{{ error.$message }}</div>
                                    </div>
                            </div>

                              <div class="form-group" >
                                <label for="logo" class="input-label">Logo</label>

                                <input type="file" class="form-control" name="logo" id="logo" aria-label="Logo" @change="onFileChange">
                                
                                
                            </div>

                             <div class="form-group">
                                <label class="input-label">Describe your company.</label>
                                
                                <ckeditor :editor="editor" v-model="v$.companyDetails.bio.$model"></ckeditor>

                                <div class="input-errors" v-for="error of v$.companyDetails.bio.$errors" :key="error.$uid">
                                    <div class="error-msg">{{ error.$message }}</div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="input-label">Any other details about your company that applicants should know about?</label>
                                
                                <ckeditor :editor="editor" v-model="v$.companyDetails.otherDetails.$model"></ckeditor>
                            
                                <div class="input-errors" v-for="error of v$.companyDetails.otherDetails.$errors" :key="error.$uid">
                                    <div class="error-msg">{{ error.$message }}</div>
                                </div>
                            </div>



                    </template>

                    <template v-slot:cardfooter>


                          <button type="button" class="btn btn-ghost-secondary" id="step-3-button-previous" @click="previousStep">
                            <i class="fas fa-angle-left mr-1"  ></i> Previous step
                        </button>

                            <div class="ml-auto">
                                <button type="button" class="btn btn-primary" id="step-3-button" @click="nextStep">
                                Save and continue <i class="fas fa-angle-right ml-1"> </i>
                                </button>
                            </div>
                    </template>

                </step-form-card>

                <step-form-card :active="activeStep === '4'" id="step-4">

                    <template v-slot:cardheader> Select Payment Method</template>
                    <template v-slot:cardbody>
                         <!-- Form Group -->
                      <div class="form-group">
                        <label for="paymentmethod" class="input-label">Payment Method</label>
                        
                        <!-- Select -->
                        <select v-model="v$.paymentMethod.method" id="paymentmethod" class="js-custom-select custom-select dropdown-toggle" size="1" style="opacity: 1;" name="paymentmethod" :class="{ 'is-invalid': v$.paymentMethod.method.$error}">
                          <option value="ach">ACH</option>
                          <option value="credit">Credit Card</option>
                          <option value="paypal">Paypal</option>
                        </select>
                        <!-- End Select -->

                         <div class="input-errors" v-for="error of v$.paymentMethod.method.$errors" :key="error.$uid">
                                    <div class="error-msg">{{ error.$message }}</div>
                                    </div>
                      </div>
                      <!-- End Form Group -->
                    </template>

                    <template v-slot:cardfooter>
                          <button type="button" class="btn btn-ghost-secondary" id="step-4-button-previous" @click="previousStep">
                            <i class="fas fa-angle-left mr-1"  ></i> Previous step
                        </button>

                            <div class="ml-auto">
                                <button type="button" class="btn btn-primary" id="step-4-button" @click="nextStep">
                                Save and continue <i class="fas fa-angle-right ml-1"> </i>
                                </button>
                            </div>
                    </template>

                </step-form-card>

                 <step-form-card :active="activeStep === '5'" id="step-5">

                    <template v-slot:cardheader> Enter Payment Method Details</template>
                    <template v-slot:cardbody>
                        TODO: PAYMENT METHOD DETAILS
                    </template>

                    <template v-slot:cardfooter>
                          <button type="button" class="btn btn-ghost-secondary" id="step-5-button-previous" @click="previousStep">
                            <i class="fas fa-angle-left mr-1"  ></i> Previous step
                        </button>

                            <div class="ml-auto">
                                <button type="button" class="btn btn-primary" id="step-5-button" @click="nextStep">
                                Save and continue <i class="fas fa-angle-right ml-1"> </i>
                                </button>
                            </div>
                    </template>

                </step-form-card>


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
import CKEditor from '@ckeditor/ckeditor5-vue'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import useVuelidate from '@vuelidate/core'
import { helpers, required, minLength, sameAs, url } from '@vuelidate/validators'

    export default {
        async created() {
            this.$emit('update:layout', RegistrationLayout);
            this.token = this.$cookies.get('com.bitjobs');
            
            // this.employer = await fetch(process.env.VUE_APP_BIT_API_PATH + "/employer/get",
            //           {
            //                 method: "GET",
            //                 headers: {
            //                     "Content-Type": "application/json",
            //                     Authorization: "Bearer " + this.token
            //                 },
            //                 credentials: "include"
            //             }
            //         ).then(result =>{

            //             if(!result.ok){
            //                 console.log(result)
            //                 return result
            //             }
            //             return result.json

            //         })


            // if(this.employer){
            //     console.log(this.employer)
            // }


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
            ckeditor: CKEditor.component,
        }, 
        data(){
            return {
                steps:["1","2","3","4","5","6","7"],
                activeStep:"1",
                editor: ClassicEditor,
                password:{
                    current:"",
                    new:"",
                    confirm:"",
                },
                personalInformation:{
                    firstname:"",
                    lastname:"",
                    email:"",
                    phoneNumber:"",
                    mobileNumber:"",
                    role:""
                },
                companyDetails:{
                    companyName:"",
                    location:"",
                    url:"",
                    socials:{
                        facebook:"",
                        twitter:"",
                        instagram:"",
                    },
                    bio:"",
                    logo:"",
                    otherDetails:""

                },
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
            previousStep(e){
                var current_step = e.target.id.split("-")[1];
                console.log(current_step)
                var previous_step = Number(current_step) - 1;

                if(previous_step >= 0){
                    this.activeStep = String(previous_step);
                }
            },
            nextStep(e){
                var current_step = Number(e.target.id.split("-")[1]);
                

                var next_step =current_step + 1;

                
                if(next_step <= Object.keys(this.steps).length){
                    
                    this.activeStep = String(next_step);

                }
            
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
                                Authorization: "Bearer " + this.token
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
              

            // if(this.token){
            //     console.log(this.token)
            //     this.$cookies.set('com.bitjobs', this.token.token);
                
            //     if(!this.token.initialpasswordchanged){
            //         this.$router.replace('/employer/change-password')
            //     } else{
            //         this.$router.replace('/employer/dashboard')
            //     }

            // }
            }
        },
        
    }
</script>

<style scoped>

</style>