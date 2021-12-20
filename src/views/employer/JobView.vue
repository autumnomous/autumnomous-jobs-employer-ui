<template>

    <main id="content" role="main">
        <div class="container space-top-1 space-top-lg-2 space-bottom-2 space-bottom-lg-3"> 

                <the-card :active="true">
                    <template v-slot:cardheader>Edit Job</template>
                    <template v-slot:cardbody>
                        <alert-error v-if="submitError" :message="submitErrorMessage"></alert-error>
                        <div>
                            
                            <form action="">

    
                                    
                    <!-- Form Group -->
                    <div class="form-group" >
                        <label for="titleLabel" class="input-label">Job title</label>

                        <input v-model="v$.title.$model" type="text" class="form-control" name="titleName" id="titleLabel" aria-label="Job Title" :class="{ 'is-invalid': v$.title.$errors.length }">
                            <div class="input-errors" v-for="error of v$.title.$errors" :key="error.$uid">
                                <div class="error-msg">{{ error.$message }}</div>
                            </div>
                    </div>
                    <!-- End Form Group -->

                      <label for="titleLabel" class="input-label">Visible Date</label>
                        <div class="row mx-n2">
                        
                        <div class="col-8 col-sm-6 px-2">
                          <!-- Form Group -->
                          <div class="form-group">
                            <input v-model="visibleDate" type="date" class="form-control" name="visibleDateName" id="visibleDateLabel" aria-label="Job Visible Date" :class="{ 'is-invalid': v$.visibleDate.$errors.length}">

                            <div class="input-errors" v-for="error of v$.visibleDate.$errors" :key="error.$uid">
                                <div class="error-msg">{{ error.$message }}</div>
                            </div>
                            </div>
                          <!-- End Form Group -->
                        </div>
                      </div>
                      <!-- End Row -->

                     <div class="row mx-n2">
                    <div class="col-6 col-sm-4 px-2">
                      <!-- Form Group -->
                      <div class="form-group">
                        <label for="salaryFromLabel" class="input-label">Minimum Salary</label>
                        <input v-model.lazy="minSalary" type="text" class="form-control" name="salaryFromName" id="salaryFromLabel" placeholder="0$" aria-label="0">
                      </div>
                      <!-- End Form Group -->
                    </div>

                    <div class="col-6 col-sm-4 px-2">
                      <!-- Form Group -->
                      <div class="form-group">
                        <label for="salaryToLabel" class="input-label">Maximum Salary</label>
                        <input v-model.lazy="maxSalary" type="text" class="form-control" name="salaryToName" id="salaryToLabel" placeholder="0$" aria-label="0">
                      </div>
                      <!-- End Form Group -->
                    </div>

                    <div class="col-12 col-sm-4 px-2">
                      <!-- Form Group -->
                      <div class="form-group">
                        <label for="jobSalaryPeriodLabel" class="input-label">Pay Period</label>
                        
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


                <div class="form-group">
                <label class="input-label" for="job-category">Category</label>
                <select v-model="v$.jobCategory.$model" name="job-category" id="job-category-select" class="js-custom-select custom-select dropdown-toggle">
                    <option value="">Select One</option>
                    <option value="full-stack">Full Stack</option>
                    <option value="front-end">Front End</option>
                    <option value="back-end">Back End</option>
                    <option value="design">Design</option>
                    <option value="support">Customer Support</option>
                    <option value="product">Product</option>
                    <option value="management-finance">Management & Finance</option>
                    <option value="sales-marketing">Sales & Marketing</option>
                    <option value="devops-sysadmin">DevOps & Sys Admin</option>
                    <option value="other">All Other</option>
                </select>
                <div class="input-errors" v-for="error of v$.jobCategory.$errors" :key="error.$uid">
                    <div class="error-msg">{{ error.$message }}</div>
                </div>
                </div>
                <!-- End Form Group -->

                <div class="form-group">
                    <label class="input-label" for="job-type">Job Type</label>
                    <div class="row">
                        <div class="col-sm mb-2 mb-sm-0">
                            <!-- Form Radio -->
                            <label class="form-control" for="job-type">
                            <span class="form-check">
                                <input type="radio" class="form-check-input" name="job-type" v-model="v$.jobType.$model" value="full-time" >
                                <span class="form-check-label">Full-Time</span>
                            </span>
                            </label>
                            <!-- End Form Radio -->
                        </div>

                        <div class="col-sm mb-2 mb-sm-0">
                            <!-- Form Radio -->
                            <label class="form-control" for="job-type2">
                            <span class="form-check">
                                <input type="radio" class="form-check-input" name="job-type2" v-model="v$.jobType.$model" value="contract">
                                <span class="form-check-label">Contract</span>
                            </span>
                            </label>
                            <!-- End Form Radio -->
                        </div>

                    </div>
                    <!-- End Row -->

                    <div class="input-errors" v-for="error of v$.jobType.$errors" :key="error.$uid">
                        <div class="error-msg">{{ error.$message }}</div>
                    </div>
                </div>
                

                <div class="form-group">
                    <label class="input-label" for="job-type">Is This Role Fully Remote?</label>
                    <div class="row">
                        <div class="col-sm mb-2 mb-sm-0">
                            <!-- Form Radio -->
                            <label class="form-control" for="remote">
                            <span class="form-check">
                                <input type="radio" class="form-check-input" name="remote" v-model="v$.remote.$model" value="1" >
                                <span class="form-check-label">Yes</span>
                            </span>
                            </label>
                            <!-- End Form Radio -->
                        </div>

                        <div class="col-sm mb-2 mb-sm-0">
                            <!-- Form Radio -->
                            <label class="form-control" for="remote2">
                            <span class="form-check">
                                <input type="radio" class="form-check-input" name="remote2" v-model="v$.remote.$model" value="0">
                                <span class="form-check-label">No</span>
                            </span>
                            </label>
                            <!-- End Form Radio -->
                        </div>

                    </div>
                    <!-- End Row -->
                    <div class="input-errors" v-for="error of v$.remote.$errors" :key="error.$uid">
                        <div class="error-msg">{{ error.$message }}</div>
                    </div>
                </div>
                  

                <!-- Form Group -->
                <div class="form-group">
                <label class="input-label">Job Description</label>
                
                <ckeditor :editor="editor" v-model="v$.jobDescription.$model"></ckeditor>

                <!-- <textarea v-model="v$.jobDescription.$model" name="jobDescription" id="" cols="30" rows="10" class="form-control" :class="{ 'is-invalid': v$.jobDescription.$errors.length}" ></textarea> -->
                
                
                    <div class="input-errors" v-for="error of v$.jobDescription.$errors" :key="error.$uid">
                    <div class="error-msg">{{ error.$message }}</div>
                    </div>
                </div>
                <!-- End Form Group -->

                </form>
                        </div>
                    </template>
                    <template v-slot:cardfooter>
                        <div class="ml-auto">
                            <a class="btn btn-white" @click="cancel">Cancel</a>
                            <span class="mx-2"></span>
                            <button class="btn btn-primary" @click="formSubmit">Submit</button>
                        </div>
                    </template>
                    
                </the-card>

        </div>
    </main>
    
</template>

<script>
    import AlertError from '../../components/ui/AlertError.vue'
    import TheCard from '../../components/ui/TheCard.vue';
    import CKEditor from '@ckeditor/ckeditor5-vue'
    import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
    import useVuelidate from '@vuelidate/core'
    import { required, minLength, helpers } from '@vuelidate/validators'
    import LayoutDefault from '../../layouts/LayoutDefault.vue'
    import Cookies from 'js-cookie'

    export default {
        setup () {
            return { v$: useVuelidate() }
            },
        components:{
            TheCard,
            ckeditor: CKEditor.component,
            AlertError
        },
        data(){
            return {
                job:{},
                dataReady:false,
                submitError:false,
                submitErrorMessage:"",
                editor: ClassicEditor,
                title:"",
                jobType:"",
                jobCategory:"",
                jobDescription:"",
                visibleDate:"",
                remote:"",
                minSalary:0,
                maxSalary:0,
                payPeriod:""
            }
        },
        validations(){
            return{
                
                    title:{required:helpers.withMessage('This field cannot be empty', required), min:helpers.withMessage('This field must be at least 10 characters long', minLength(10))},
                    jobType:{},
                    jobCategory:{},
                    jobDescription:{required:helpers.withMessage('This field cannot be empty', required),min:helpers.withMessage('This field must be at least 10 characters long', minLength(10))},
                    visibleDate:{required:helpers.withMessage('This field cannot be empty', required)},
                    remote:{required:helpers.withMessage('This field cannot be empty', required)},
                    minSalary:{required:helpers.withMessage('This field cannot be empty', required)},
                    maxSalary:{required:helpers.withMessage('This field cannot be empty', required)},
                    payPeriod:{required:helpers.withMessage('This field cannot be empty', required)}
                    // jobDurationEnd:{required},
            }
            },
        methods:{
            async getJob(){
                let token = Cookies.get('com.bitjobs');
                this.job = await fetch(process.env.VUE_APP_BIT_API_PATH + "/employer/get/job",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + token
                    },
                    // credentials: "include",
                    body: JSON.stringify({ 
                        publicid:this.$route.params.slug})
                    }
                ).then(result =>{

                    if(!result.ok){
                    console.log(result)
                    return result
                    }

                    return result.json()

                })

                if(this.job){
                    this.dataReady = true;
                    this.title = this.job.title;
                    this.jobType = this.job.jobtype;
                    this.jobCategory = this.job.category;
                    this.jobDescription = this.job.description;
                    this.visibleDate = this.formatDate(this.job.visibledate);
                    this.remote = String(Number(this.job.remote));
                    this.minSalary = Number(this.job.minsalary);
                    this.maxSalary = Number(this.job.maxsalary);
                    this.payPeriod = this.job.payperiod;
                    console.log(this.remote)

                    // this.
                }
                

            },
            cancel(){
                this.$router.replace("/employer/dashboard")
            },
            formatDate(dateStr){
                const date = new Date(dateStr);
                return date.toISOString().split('T')[0]
            },
            async formSubmit(e){
                let token = Cookies.get('com.bitjobs');

                if(!this.v$.$invalid){
                    let job = await fetch(process.env.VUE_APP_BIT_API_PATH + "/employer/edit/job",
                        {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: "Bearer " + token
                            },
                            //   credentials: "include",
                            body: JSON.stringify({
                                title:this.v$.title.$model,
                                jobtype:this.v$.jobType.$model,
                                category:this.v$.jobCategory.$model,
                                description:this.v$.jobDescription.$model,
                                visibledate:this.v$.visibleDate.$model,
                                remote:!!Number(this.v$.remote.$model),
                                publicid: this.$route.params.slug,
                                minsalary: this.v$.minSalary.$model,
                                maxsalary: this.v$.maxSalary.$model, 
                                payperiod: this.v$.payPeriod.$model

                            })
                        }
                    ).then(result =>{

                        if(!result.ok){
                            console.log(result)
                            return result
                        }

                        return result.json()

                    })

                    if(job){

                    
                        // this.title = job.title
                        
                        this.$router.replace("/employer/dashboard")
                    }
                }
                
            }
        
        },
        watch:{
            visibleDate: function(newVal, oldVal){
                this.visibleDate = this.formatDate(this.visibleDate)

            }
        },
        computed:{

        
        },

        created(){
            this.$emit('update:layout', LayoutDefault);
            this.getJob()
        }
    }
</script>

<style>

</style>