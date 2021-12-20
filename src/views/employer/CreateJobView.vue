<template>

  <main id="content" role="main">
    <!-- Step Section -->
    <div class="container space-top-1 space-top-lg-2 space-bottom-2 space-bottom-lg-3">
      <!-- Step Form -->
      <form class="js-step-form">
        <div class="row">
          <sticky-block @click-step-item="handleStickyBlockClick"></sticky-block>
          
          <div id="formContainer" class="col-lg-8" v-show="!formSubmitted">
            <!-- Content Step Form -->
            <div id="postJobStepFormContent">
                <step-form-card :active="activeStep === '1'" id="step-1" >
                  <template v-slot:cardheader>Choose a Package</template>
                    <template v-slot:cardbody>

                          <package-purchase @package-chosen="handlePackageChosen"></package-purchase>

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
                        <template v-slot:cardheader>Job details</template>
                        <template v-slot:cardbody>
                               <!-- Form Group -->
                  <div class="form-group">
                    <!-- Form Group -->
                            <div class="form-group" >
                                <label for="titleLabel" class="input-label">Job title</label>

                                <input v-model.lazy="v$.title.$model" type="text" class="form-control" name="titleName" id="titleLabel" aria-label="Job Title" :class="{ 'is-invalid': v$.title.$errors.length }">
                                  <div class="input-errors" v-for="error of v$.title.$errors" :key="error.$uid">
                                    <div class="error-msg">{{ error.$message }}</div>
                                  </div>
                            </div>
                            <!-- End Form Group -->


                    <label class="input-label" for="job-type">What type of job is it?</label>
                    <select v-model="jobType" name="job-type" id="job-type-select" class="js-custom-select custom-select dropdown-toggle">
                      <option value="full-time">Full Time</option>
                      <option value="part-time">Part Time</option>
                      <option value="temporary">Temporary</option>
                      <option value="contract">Contract</option>
                      <option value="internship">Internship</option>
                      <option value="commission-only">Commission Only</option>
                    </select>
                  </div>

                  <div class="form-group">
                    <label class="input-label" for="job-category">What category of job is it?</label>
                    <select v-model="jobCategory" name="job-category" id="job-category-select" class="js-custom-select custom-select dropdown-toggle">
                      <option value="full-stack">Full Stack</option>
                      <option value="front-end">Front End</option>
                      <option value="back-end">Back End</option>
                      <option value="design">Design</option>
                      <option value="support">Support</option>
                      <option value="product">Product</option>
                      <option value="management-finance">Management & Finance</option>
                      <option value="sales-marketing">Sales & Marketing</option>
                      <option value="devops-sysadmin">DevOps & Sys Admin</option>
                    </select>
                  </div>
                  <!-- End Form Group -->


                        </template>
                        <template v-slot:cardfooter>
                    
                            <button type="button" class="btn btn-ghost-secondary" id="step-2-button-previous"  @click="previousStep">
                                <i class="fas fa-angle-left mr-1" ></i> Previous step
                            </button>

                            <div class="ml-auto">
            
                                <button type="button" class="btn btn-primary" id="step-2-button" @click="nextStep">
                                Save and continue <i class="fas fa-angle-right ml-1"> </i>
                                </button>
                            </div>
                        </template>
                </step-form-card>

                <step-form-card :active="activeStep === '3'" id="step-3">
                    <template v-slot:cardheader>What's the pay?</template>
                    <template v-slot:cardbody>
                          <div class="row mx-n2">
                    <div class="col-sm-6 px-2">
                      <!-- Form Group -->
                      <div class="form-group">
                        <label for="jobSalaryTypeLabel" class="input-label">What is the pay range for this job?</label>
                      </div>
                      <!-- End Form Group -->
                    </div>
                  </div>
                  <!-- End Row -->

                  <div class="row mx-n2">
                    <div class="col-6 col-sm-4 px-2">
                      <!-- Form Group -->
                      <div class="form-group">
                        <label for="salaryFromLabel" class="input-label">From</label>
                        <input v-model.lazy="minSalary" type="text" class="form-control" name="salaryFromName" id="salaryFromLabel" placeholder="0$" aria-label="0">
                      </div>
                      <!-- End Form Group -->
                    </div>

                    <div class="col-6 col-sm-4 px-2">
                      <!-- Form Group -->
                      <div class="form-group">
                        <label for="salaryToLabel" class="input-label">To</label>
                        <input v-model.lazy="maxSalary" type="text" class="form-control" name="salaryToName" id="salaryToLabel" placeholder="0$" aria-label="0">
                      </div>
                      <!-- End Form Group -->
                    </div>

                    <div class="col-12 col-sm-4 px-2">
                      <!-- Form Group -->
                      <div class="form-group">
                        <label for="jobSalaryPeriodLabel" class="input-label">Period</label>
                        
                        <!-- Select -->
                        <select v-model.lazy="payPeriod" id="jobSalaryPeriodLabel" class="js-custom-select custom-select dropdown-toggle" size="1" style="opacity: 1;" name="jobSalaryPeriodSelect">
                          <option label="empty"></option>
                          <option value="hour">per hour</option>
                          <option value="day">per day</option>
                          <option value="week">per week</option>
                          <option value="month">per month</option>
                          <option value="year" selected>per year</option>
                        </select>
                        <!-- End Select -->
                      </div>
                      <!-- End Form Group -->
                    </div>
                  </div>
                  <!-- End Row -->

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
                    <template v-slot:cardheader>Job description</template>
                    <template v-slot:cardbody>
                        <!-- Form Group -->
                  <div class="form-group">
                    <label class="input-label">Describe the responsibilities of this job, required work experience, skills, or education.</label>
                    
                    <ckeditor :editor="editor" v-model="v$.jobDescription.$model"></ckeditor>

                    <!-- <textarea v-model="v$.jobDescription.$model" name="jobDescription" id="" cols="30" rows="10" class="form-control" :class="{ 'is-invalid': v$.jobDescription.$errors.length}" ></textarea> -->
                   
                  
                     <div class="input-errors" v-for="error of v$.jobDescription.$errors" :key="error.$uid">
                        <div class="error-msg">{{ error.$message }}</div>
                      </div>
                  </div>
                  <!-- End Form Group -->

                  <!-- Form Group -->


                      <label for="titleLabel" class="input-label">When should this be posted? Leave empty to decide later!</label>
                        <div class="row mx-n2">
                        
                        <div class="col-8 col-sm-6 px-2">
                          <!-- Form Group -->
                          <div class="form-group">
                            <label for="jobDurationStartLabel" class="input-label">On</label>
                            <input v-model.lazy="jobDurationStart" type="date" class="form-control" name="jobDurationStartName" id="jobDurationStartLabel" aria-label="Job Duration Start" :class="{ 'is-invalid': v$.jobDurationStart.$errors.length}">

                                
                            </div>
                          <!-- End Form Group -->
                        </div>
                      </div>
                      <!-- End Row -->

                  <!-- End Form Group -->
                    </template>
                    <template v-slot:cardfooter>
                
                        <button type="button" class="btn btn-ghost-secondary" id="step-4-button-previous" @click="previousStep">
                            <i class="fas fa-angle-left mr-1"  ></i> Previous step
                        </button>

                        <div class="ml-auto">
        
                            <button type="button" class="btn btn-primary" id="step-4-button" @click="nextStep" v-if="requirementsMet">
                            Save and continue <i class="fas fa-angle-right ml-1"> </i>
                            </button>
                        </div>
                    </template>
                </step-form-card>

                <step-form-card :active="activeStep === '5'" id="step-5">
                    <template v-slot:cardheader>Preview job</template>
                    <template v-slot:cardbody>
                        <p>By pressing confirm, you agree that this job will be posted and applications will be processed in accordance with BiT Job's <a href="#">Cookie Policy</a>, <a href="#">Privacy Policy</a> and <a href="#">Terms of Service</a>. You consent to BiT Job informing a user that you have opened, viewed or made a decision regarding the user's application.</p>

                  <hr class="my-4">

                  <!-- Info -->
                  <div class="border-bottom pb-4 mb-4">
                    <div class="row">
                      <div class="col-sm-8 mb-3 mb-sm-0">
                        <h5>Job Title</h5>
                        <span class="d-block">{{title}}</span>
                      </div>

                    </div>
                    <!-- End Row -->
                  </div>
                  <!-- End Info -->


                  <!-- Info -->
                  <div class="border-bottom pb-4 mb-4">
                    <div class="row">
                      <div class="col-sm-8 mb-3 mb-sm-0">
                        <h5>Pay</h5>
                        <span class="d-block mb-2">{{minSalary}} <span v-if="maxSalary != ''">-</span> {{maxSalary}} <span v-if="payPeriod != ''">per</span> {{payPeriod}}</span>
                      </div>

                    </div>
                    <!-- End Row -->
                  </div>
                  <!-- End Info -->

                  <!-- Info -->
                  <div class="border-bottom pb-4 mb-4">
                    <div class="row">
                      <div class="col-sm-8 mb-3 mb-sm-0">
                        <h5>Job Type</h5>
                        <span class="d-block">{{jobType}}</span>
                      </div>

                    </div>
                    <!-- End Row -->
                  </div>
                  <!-- End Info -->

                  <!-- Info -->
                  <div class="border-bottom pb-4 mb-4">
                    <div class="row">
                      <div class="col-sm-8 mb-3 mb-sm-0">
                        <h5>Job Description</h5>
                            <p>{{strippedDescription}}</p>
                      </div>

                    </div>
                    <!-- End Row -->
                  </div>
                  <!-- End Info -->

                       <!-- Info -->
                  <div class="border-bottom pb-4 mb-4">
                    <div class="row">
                      <div class="col-sm-8 mb-3 mb-sm-0">
                        <h5>Job Posting Duration</h5>
                            <span v-if="jobDurationStart">{{jobDurationStart}}</span> - <span>{{ jobDurationEnd }}</span>
                      </div>

                    </div>
                    <!-- End Row -->
                  </div>
                  <!-- End Info -->

                  <p class="small">By clicking "Confirm", you agree to candidates appearing in your dashboard based on the preferences you've selected above. You also agree to our <a href="#">Front Jobs Terms of Service</a>.</p>
                
                    </template>
                    <template v-slot:cardfooter>
                
                        <button type="button" class="btn btn-ghost-secondary" id="step-6-button-previous" @click="previousStep">
                            <i class="fas fa-angle-left mr-1"  ></i> Previous step
                        </button>

                        <div class="ml-auto">
        
                            <button type="button" class="btn btn-primary" id="step-6-button" @click.prevent="submitForm">
                            Confirm <i class="fas fa-angle-right ml-1"> </i>
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
    import StickyBlock from '@/components/employer/create-job/StickyBlock.vue';
    import PackagePurchase from '@/components/employer/PackagePurchase.vue';
    import StepFormCard from '../../components/ui/step-form/StepFormCard.vue'
    import LayoutDefault from '../../layouts/LayoutDefault.vue'
    import CKEditor from '@ckeditor/ckeditor5-vue'
    import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
    import useVuelidate from '@vuelidate/core'
    import { required, minLength, email } from '@vuelidate/validators'
    import Cookies from 'js-cookie'

    export default{
        setup () {
          return { v$: useVuelidate() }
        },
        data(){
            return {
               
                steps:["1","2","3","4","5"],
                activeStep:"1",
                editor: ClassicEditor,
                packageChosen:"",
                title:"",
                jobType:"",
                jobCategory:"",
                jobDescription:"",
                minSalary:"",
                maxSalary:"",
                payPeriod:"",
                jobDurationStart:"",
                formSubmitted:false,
                token:"",
                jobsData:{},
            }
        },
        validations(){
          return{
            
                title:{required, min:minLength(10)},
                employerEmail:{required, email},
                jobType:{},
                jobCategory:{},
                jobDescription:{required,min:minLength(10)},
                minSalary:{},
                maxSalary:{},
                payPeriod:{},
                jobDurationStart:{required},
                // jobDurationEnd:{required},
          }
        },
        components:{
          StickyBlock,
            StepFormCard,
            ckeditor: CKEditor.component,
            PackagePurchase,
        },
         methods:{
           handlePackageChosen(packageChosen){
             this.packageChosen = packageChosen
           },
           handleStickyBlockClick(stepID){
             this.activeStep = stepID;
           },
            previousStep(e){
            var current_step = e.target.id.split("-")[1];

            var previous_step = Number(current_step) - 1;

            if(previous_step >= 0){
                this.activeStep = String(previous_step);
            }
            },
            nextStep(e){
            var current_step = Number(e.target.id.split("-")[1]);
            

            var next_step =current_step + 1;

            
            if(next_step <= this.steps.length){
                
                this.activeStep = String(next_step);

            }
            
            },
            async submitForm(e){
                // if(this.emitEvent == false){
                  this.token = Cookies.get('com.bitjobs');
                  let job = await fetch(process.env.VUE_APP_BIT_API_PATH + "/employer/create/job",
                      {
                          method: "POST",
                          headers: {
                              "Content-Type": "application/json",
                              Authorization: "Bearer " + this.token
                          },
                          // credentials: "include",
                          body: JSON.stringify({ 
                              title:this.title,
                              jobtype:this.jobType,
                              category:this.jobCategory,
                              description:this.stripHTML(this.jobDescription),
                              minsalary:Number(this.minSalary),
                              maxsalary:Number(this.maxSalary),
                              payperiod:this.payPeriod,
                              poststartdatetime:this.jobDurationStart})
                      }
                  ).then(result =>{

                      if(!result.ok){
                        console.log(result)
                        return result
                      }

                      return result.json()

                  })

                  if(job){
                      this.formSubmitted = !this.formSubmitted
                    //   this.$router.go()
                  }
                // } else{
                //   this.$emit("submitform",{ 
                //               title:this.title, 
                //               streetaddress:this.streetAddress, 
                //               city:this.city,
                //               zipcode:this.zipcode,
                //               tags:this.jobType,
                //               description:this.stripHTML(this.jobDescription),
                //               minsalary:Number(this.minSalary),
                //               maxsalary:Number(this.maxSalary),
                //               payperiod:this.payPeriod,
                //               poststartdatetime:this.jobDurationStart,
                //               postenddatetime: this.jobDurationEnd})
                // }
                  
            },
            stripHTML(html){
              let parsed = new DOMParser().parseFromString(html, 'text/html');
              return parsed.body.textContent || "";
            }
         },
         computed:{
           strippedDescription(){
             return this.stripHTML(this.jobDescription)
           },
           requirementsMet(){
              return this.v$.$invalid
           }
         },
         async created() {
          this.$emit('update:layout', LayoutDefault);
          this.token = Cookies.get('com.bitjobs');

          // if(this.token){
          //     var jobsData = await fetch(process.env.VUE_APP_BIT_API_PATH + "/employer/get/jobs",
          //       {
          //           method: "GET",
          //           headers: {
          //               "Content-Type": "application/json",
          //               Authorization: "Bearer " + this.token
          //           },
          //           credentials: "include"
          //       }
          //     ).then(result =>{

          //         if(!result.ok){
          //           console.log(result)
          //           return result
          //         }

          //         return result.json()

          //     })

          //   if(jobsData){
          //       if(jobsData.totalpostsbought == 0){
          //         this.activeStep = "1";
          //       }
          //   }
          // } else{
          //   this.activeStep = "1";
          // }
                   
         


        },
    }
</script>

<style scoped>
  @import url("../../../public/assets/css/theme.css");
  @import url("../../../public/assets/vendor/fontawesome/css/all.min.css");
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap");


  .error{
    border-color:red;
  }
</style>