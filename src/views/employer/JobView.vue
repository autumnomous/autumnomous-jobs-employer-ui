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

                        <input v-model.lazy="v$.title.$model" type="text" class="form-control" name="titleName" id="titleLabel" aria-label="Job Title" :class="{ 'is-invalid': v$.title.$errors.length }">
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
                            <input v-model.lazy="jobDurationStart" type="date" class="form-control" name="jobDurationStartName" id="jobDurationStartLabel" aria-label="Job Duration Start" :class="{ 'is-invalid': v$.jobDurationStart.$errors.length}">

                            <div class="input-errors" v-for="error of v$.jobDurationStart.$errors" :key="error.$uid">
                                <div class="error-msg">{{ error.$message }}</div>
                            </div>
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
    import { required, minLength, email } from '@vuelidate/validators'
import LayoutDefault from '../../layouts/LayoutDefault.vue'
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
            jobDurationStart:"",
            remote:""
        }
    },
     validations(){
          return{
            
                title:{required, min:minLength(10)},
                jobType:{},
                jobCategory:{},
                jobDescription:{required,min:minLength(10)},
                jobDurationStart:{required},
                remote:{required}
                // jobDurationEnd:{required},
          }
        },
    methods:{
        async getJob(){
            let token = this.$cookies.get('com.bitjobs');
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
                this.jobDurationStart = this.job.poststartdatetime;
                // this.
            }
            

        },
        cancel(){
            
        },
        formatDate(dateStr){
            const date = new Date(dateStr);
            return date.toISOString().split('T')[0]
        },
        async formSubmit(e){
            let token = this.$cookies.get('com.bitjobs');

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
                              poststartdatetime:this.v$.jobDurationStart.$model,
                              remote:!!Number(this.v$.remote.$model),
                              publicid: this.$route.params.slug,

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
                      this.title = job.title
                    //   this.$router.go()
                  }
            }
             
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