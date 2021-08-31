<template>
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
                  <a class="step-content-wrapper" href="" @click.prevent="activeStep='1'">
                    <span class="step-icon step-icon-soft-dark">1</span>
                    <div class="step-content">
                      <span class="step-title">Getting started</span>
                      <span class="step-title-description step-text font-size-1">General info about company</span>
                    </div>
                  </a>
                </li>

                <li class="step-item">
                  <a class="step-content-wrapper" href="" @click.prevent="activeStep='2'">
                    <span class="step-icon step-icon-soft-dark">2</span>
                    <div class="step-content">
                      <span class="step-title">Address</span>
                      <span class="step-title-description step-text font-size-1">Company location address</span>
                    </div>
                  </a>
                </li>

                <li class="step-item">
                  <a class="step-content-wrapper" href="" @click.prevent="activeStep='3'">
                    <span class="step-icon step-icon-soft-dark">3</span>
                    <div class="step-content">
                      <span class="step-title">Job details</span>
                      <span class="step-title-description step-text font-size-1">Job type details and more</span>
                    </div>
                  </a>
                </li>

                <li class="step-item">
                  <a class="step-content-wrapper" href="" @click.prevent="activeStep='4'">
                    <span class="step-icon step-icon-soft-dark">4</span>
                    <div class="step-content">
                      <span class="step-title">Payment</span>
                      <span class="step-title-description step-text font-size-1">Pay and receive options</span>
                    </div>
                  </a>
                </li>

                <li class="step-item">
                  <a class="step-content-wrapper" href="" @click.prevent="activeStep='5'">
                    <span class="step-icon step-icon-soft-dark">5</span>
                    <div class="step-content">
                      <span class="step-title">Additional job details</span>
                      <span class="step-title-description step-text font-size-1">Job schedule</span>
                    </div>
                  </a>
                </li>

                <li class="step-item">
                  <a class="step-content-wrapper" href="" @click.prevent="activeStep='6'">
                    <span class="step-icon step-icon-soft-dark">6</span>
                    <div class="step-content">
                      <span class="step-title">Job description</span>
                      <span class="step-title-description step-text font-size-1">Describe the responsibilities of this job</span>
                    </div>
                  </a>
                </li>

              </ul>
              <!-- End Step -->
            </div>
            <!-- End Sticky Block -->
          </div>

          <div id="formContainer" class="col-lg-8">
            <!-- Content Step Form -->
            <div id="postJobStepFormContent">
                <StepFormCard :active="activeStep === '1'" id="step-1">
                        <template v-slot:cardheader>Getting Started</template>
                        <template v-slot:cardbody>

                            <!-- Form Group -->
                            <div class="form-group">
                                <label for="jobTitleLabel" class="input-label">Job title</label>

                                <input v-model.lazy="jobTitle" type="text" class="form-control" name="jobTitleName" id="jobTitleLabel" aria-label="Job Title">
                            </div>
                            <!-- End Form Group -->

                        </template>
                        <template v-slot:cardfooter>
                             <button type="button" class="btn btn-primary" id="step-1-button" @click="nextStep">
                                Save and continue <i class="fas fa-angle-right ml-1"> </i>
                                </button>
                        </template>
                </StepFormCard>

                <StepFormCard :active="activeStep === '2'" id="step-2">
                    <template v-slot:cardheader>Address</template>
                    <template v-slot:cardbody>
                        <!-- Form Group -->
                        <div class="form-group">
                            <label for="streetAddressLabel" class="input-label">Enter a street address</label>
                            <p class="small mt-n2">We won't share your street address. We use your location to find candidates in your area.</p>

                            <input v-model.lazy="streetAddress" type="text" class="form-control" name="streetAddress" id="streetAddressLabel" placeholder="123 Street Avenue" aria-label="Street Address">
                        </div>
                        <!-- End Form Group -->

                        <div class="row mx-n2">
                            <div class="col-sm-6 px-2">
                            <!-- Form Group -->
                            <div class="form-group">
                                <label for="cityLabel" class="input-label">City</label>
                                <input v-model.lazy="city" type="text" class="form-control" name="cityName" id="cityLabel" placeholder="Cleveland" aria-label="City">
                            </div>
                            <!-- End Form Group -->
                            </div>

                            <div class="col-6 col-sm-3 px-2">
                            <!-- Form Group -->
                            <div class="form-group">
                                <label for="stateLabel" class="input-label">State</label>
                                <input v-model.lazy="state" type="text" class="form-control" name="stateName" id="stateLabel" placeholder="Ohio" aria-label="State">
                            </div>
                            <!-- End Form Group -->
                            </div>

                            <div class="col-6 col-sm-3 px-2">
                            <!-- Form Group -->
                            <div class="form-group">
                                <label for="zipCodeLabel" class="input-label">ZIP code</label>
                                <input v-model.lazy="zipcode" type="text" class="js-masked-input form-control" name="zipCodeName" id="zipCodeLabel" placeholder="xxxxx" aria-label="xxxxx">
                            </div>
                            <!-- End Form Group -->
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
                </StepFormCard>

                <StepFormCard :active="activeStep === '3'" id="step-3">
                        <template v-slot:cardheader>Job details</template>
                        <template v-slot:cardbody>
                               <!-- Form Group -->
                  <div class="form-group">
                    <label class="input-label">What type of job is it?</label>
                    
                    <!-- Custom Radio -->
                    <div class="form-control mb-2">
                      <div class="custom-control custom-radio">
                        <input v-model.lazy="jobType" type="radio" class="custom-control-input" name="jobTypeRadioName" id="jobTypeRadio1" value="full-time" checked>
                        <label class="custom-control-label" for="jobTypeRadio1">Full time</label>
                      </div>
                    </div>
                    <!-- End Custom Radio -->

                    <!-- Custom Radio -->
                    <div class="form-control mb-2">
                      <div class="custom-control custom-radio">
                        <input v-model.lazy="jobType" type="radio" class="custom-control-input" name="jobTypeRadioName" id="jobTypeRadio2" value="part-time">
                        <label class="custom-control-label" for="jobTypeRadio2">Part time</label>
                      </div>
                    </div>
                    <!-- End Custom Radio -->

                    <!-- Custom Radio -->
                    <div class="form-control mb-2">
                      <div class="custom-control custom-radio">
                        <input v-model.lazy="jobType" type="radio" class="custom-control-input" name="jobTypeRadioName" id="jobTypeRadio3" value="temporary">
                        <label class="custom-control-label" for="jobTypeRadio3">Temporary</label>
                      </div>
                    </div>
                    <!-- End Custom Radio -->
                    
                    <!-- Custom Radio -->
                    <div class="form-control mb-2">
                      <div class="custom-control custom-radio">
                        <input v-model.lazy="jobType" type="radio" class="custom-control-input" name="jobTypeRadioName" id="jobTypeRadio4" value="contract">
                        <label class="custom-control-label" for="jobTypeRadio4">Contract</label>
                      </div>
                    </div>
                    <!-- End Custom Radio -->
                    
                    <!-- Custom Radio -->
                    <div class="form-control mb-2">
                      <div class="custom-control custom-radio">
                        <input v-model.lazy="jobType" type="radio" class="custom-control-input" name="jobTypeRadioName" id="jobTypeRadio5" value="internship">
                        <label class="custom-control-label" for="jobTypeRadio5">Internship</label>
                      </div>
                    </div>
                    <!-- End Custom Radio -->
                    
                    <!-- Custom Radio -->
                    <div class="form-control mb-2">
                      <div class="custom-control custom-radio">
                        <input v-model.lazy="jobType" type="radio" class="custom-control-input" name="jobTypeRadioName" id="jobTypeRadio6" value="commission-only">
                        <label class="custom-control-label" for="jobTypeRadio6">Commission only</label>
                      </div>
                    </div>
                    <!-- End Custom Radio -->
                  </div>
                  <!-- End Form Group -->


                        </template>
                        <template v-slot:cardfooter>
                    
                            <button type="button" class="btn btn-ghost-secondary" id="step-3-button-previous"  @click="previousStep">
                                <i class="fas fa-angle-left mr-1" ></i> Previous step
                            </button>

                            <div class="ml-auto">
            
                                <button type="button" class="btn btn-primary" id="step-3-button" @click="nextStep">
                                Save and continue <i class="fas fa-angle-right ml-1"> </i>
                                </button>
                            </div>
                        </template>
                </StepFormCard>

                <StepFormCard :active="activeStep === '4'" id="step-4">
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
                        <input v-model.lazy="salaryFrom" type="text" class="form-control" name="salaryFromName" id="salaryFromLabel" placeholder="0$" aria-label="0">
                      </div>
                      <!-- End Form Group -->
                    </div>

                    <div class="col-6 col-sm-4 px-2">
                      <!-- Form Group -->
                      <div class="form-group">
                        <label for="salaryToLabel" class="input-label">To</label>
                        <input v-model.lazy="salaryTo" type="text" class="form-control" name="salaryToName" id="salaryToLabel" placeholder="0$" aria-label="0">
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
                          <option value="Per Hour">per hour</option>
                          <option value="Per Day">per day</option>
                          <option value="Per Week">per week</option>
                          <option value="Per Month">per month</option>
                          <option value="Per Year" selected>per year</option>
                        </select>
                        <!-- End Select -->
                      </div>
                      <!-- End Form Group -->
                    </div>
                  </div>
                  <!-- End Row -->

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
                </StepFormCard>

                 <StepFormCard :active="activeStep === '5'" id="step-5">
                    <template v-slot:cardheader>Job description</template>
                    <template v-slot:cardbody>
                        <!-- Form Group -->
                  <div class="form-group">
                    <label class="input-label">Describe the responsibilities of this job, required work experience, skills, or education.</label>
                    <!-- TipTap -->
                    <TipTap v-model="jobDescription"></TipTap>
                    <!-- End TipTap -->
                  </div>
                  <!-- End Form Group -->

                  <!-- Form Group -->
                  <div class="form-group">
                    <div class="row mb-2">
                      <div class="col">
                        <label for="additionalCovid19PrecautionsLabel" class="input-label">Are you taking any COVID-19 precautions?</label>
                        <p class="small mt-n2 mb-0">Let job seekers know how you’re responding to COVID-19.</p>
                      </div>

                      <div class="col-auto align-self-end">
                        <span id="additionalCovid19PrecautionsCountCharacters" class="text-muted"></span>
                      </div>
                    </div>
                    <!-- End Row -->
                    
                    <TipTap v-model="covidPrecautions"></TipTap>
                  </div>
                  <!-- End Form Group -->
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
                </StepFormCard>

                <StepFormCard :active="activeStep === '6'" id="step-6">
                    <template v-slot:cardheader>Preview job</template>
                    <template v-slot:cardbody>
                        <p>By pressing confirm, you agree that this job will be posted and applications will be processed in accordance with BiT Job's <a href="#">Cookie Policy</a>, <a href="#">Privacy Policy</a> and <a href="#">Terms of Service</a>. You consent to BiT Job informing a user that you have opened, viewed or made a decision regarding the user's application.</p>

                  <hr class="my-4">

                  <!-- Info -->
                  <div class="border-bottom pb-4 mb-4">
                    <div class="row">
                      <div class="col-sm-8 mb-3 mb-sm-0">
                        <h5>Job Title</h5>
                        <span class="d-block">{{jobTitle}}</span>
                      </div>

                    </div>
                    <!-- End Row -->
                  </div>
                  <!-- End Info -->

                  <!-- Info -->
                  <div class="border-bottom pb-4 mb-4">
                    <div class="row">
                      <div class="col-sm-8 mb-3 mb-sm-0">
                        <h5>Company</h5>
                        <span class="d-block">{{companyName}}</span>
                      </div>
                    </div>
                    <!-- End Row -->
                  </div>
                  <!-- End Info -->


                  <!-- Info -->
                  <div class="border-bottom pb-4 mb-4">
                    <div class="row">
                      <div class="col-sm-8 mb-3 mb-sm-0">
                        <h5>Street Address</h5>
                        <span class="d-block">{{streetAddress}} <span v-if="streetAddress != '' ">,</span> {{city}} <span v-if="city != ''">,</span> {{state}} {{zipcode}}</span>
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
                        <span class="d-block mb-2">{{salaryFrom}} <span v-if="salaryTo != ''">-</span> {{salaryTo}} per {{payPeriod}}</span>
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

                  <p class="small">By clicking "Confirm", you agree to candidates appearing in your dashboard based on the preferences you've selected above. You also agree to our <a href="#">Front Jobs Terms of Service</a>.</p>
                
                    </template>
                    <template v-slot:cardfooter>
                
                        <button type="button" class="btn btn-ghost-secondary" id="step-6-button-previous" @click="previousStep">
                            <i class="fas fa-angle-left mr-1"  ></i> Previous step
                        </button>

                        <div class="ml-auto">
        
                            <button type="button" class="btn btn-primary" id="step-6-button" @click="nextStep">
                            Confirm <i class="fas fa-angle-right ml-1"> </i>
                            </button>
                        </div>
                    </template>
                </StepFormCard>

            </div>
            <!-- End Content Step Form -->

            <!-- Message Body -->
            <div id="successMessageContent" style="display: none;">
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
                  <a class="btn btn-primary" href="#" @click.prevent="submitForm">
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
    import StepFormCard from '../../components/ui/step-form/StepFormCard.vue'
    import TipTap from '../../components/ui/TipTap.vue'

    export default{

        data(){
            return {
                steps:["1","2","3","4","5","6","7"],
                activeStep:"1",
                jobTitle:"",
                streetAddress:"",
                state:"",
                city:"",
                zipcode:"",
                jobType:"",
                jobDescription:"",
                covidPrecautions:"",
                salaryTo:"",
                salaryFrom:"",
                payPeriod:""
            }
        },
        components:{
            StepFormCard,
            TipTap
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
            async submitForm(e){
                 
                //   let job = await fetch(process.env.VUE_APP_BIT_API_PATH + "/employer/create/job",
                //       {
                //           method: "POST",
                //           headers: {
                //               "Content-Type": "application/json",
                //               Authorization: "Bearer " + process.env.VUE_APP_JWT
                //           },
                //           credentials: "include",
                //           body: JSON.stringify({ 
                //               title:this.jobTitle, 
                //               streetaddress:this.streetAddress, 
                //               city:this.city,
                //               zipcode:this.zipCode,
                //               tags:this.jobType,
                //               description:this.stripHTML(this.jobDescription),
                //               covidprecautions: this.stripHTML(this.covidPrecautions),
                //               salary:[this.salaryFrom, this.salaryTo].join("-"),
                //               payperiod:this.payPeriod})
                //       }
                //   ).then(result =>{

                //       if(!result.ok){
                //         console.log(result)
                //         return result
                //       }

                //       return result.json()

                //   })

                //   if(job){
                //       console.log(job)
                //     //   this.$router.go()
                //   }
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
           strippedCovidPrecautions(){
             return this.stripHTML(this.covidPrecautions)
           }
         }
    }
</script>

<style>
  @import url("../../../public/assets/css/theme.css");
  @import url("../../../public/assets/vendor/fontawesome/css/all.min.css");
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap");

  div.card-header{
      background-color:#377DFF;
      
  }

  div.card-header h3{
      color:white;
  }
</style>