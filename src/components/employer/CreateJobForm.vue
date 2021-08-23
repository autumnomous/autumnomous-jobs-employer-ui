<template>
 <!-- Step Section -->
  <div class="container space-top-1 space-top-lg-4 space-bottom-2 space-bottom-lg-3 w-50">
    <!-- Step Form -->
    <form @submit.prevent="handleSubmit">
      <div class="row">

        <div id="formContainer" class="col-lg-12">
            <!-- Card -->
            <div class="card my-5">
              <!-- Header -->
              <div class="card-header bg-img-hero py-4" style="background-image: url(../../assets/svg/components/abstract-shapes-21.svg);">
                <div class="flex-grow-1">
              
                  <h3 class="card-header-title">Create a Job</h3>
                  
                </div>
              </div>
              <!-- End Header -->

              <!-- Body -->
              <div class="card-body">

                  <!-- Form Group -->
                <div class="form-group">
                  <label for="jobTitleLabel" class="input-label">Job title</label>

                  <input v-model="jobTitle" type="text" class="form-control" name="jobTitleName" id="jobTitleLabel" placeholder="UI/UX Designer">
                </div>
                <!-- End Form Group -->


                <!-- Form Group -->
                <div class="form-group">
                  <label for="streetAddressLabel" class="input-label">Enter a street address</label>
                  <p class="small mt-n2">We won't share your street address. We use your location to find candidates in your area.</p>

                  <input v-model="jobStreetAddress" type="text" class="form-control" name="streetAddress" id="streetAddressLabel" placeholder="Arch 294 Jewell Street" aria-label="Arch 294 Jewell Street">
                </div>
                <!-- End Form Group -->

                <div class="row mx-n2">
                  <div class="col-sm-6 px-2">
                    <!-- Form Group -->
                    <div class="form-group">
                      <label for="cityLabel" class="input-label">City</label>
                      <input v-model="jobCity" type="text" class="form-control" name="cityName" id="cityLabel" placeholder="London" aria-label="London">
                    </div>
                    <!-- End Form Group -->
                  </div>

                  <div class="col-6 col-sm-3 px-2">
                    <!-- Form Group -->
                    <div class="form-group">
                      <label for="stateLabel" class="input-label">State</label>
                      <input v-model="jobState" type="text" class="form-control" name="stateName" id="stateLabel" placeholder="Camberwell" aria-label="Camberwell">
                    </div>
                    <!-- End Form Group -->
                  </div>

                  <div class="col-6 col-sm-3 px-2">
                    <!-- Form Group -->
                    <div class="form-group">
                      <label for="zipCodeLabel" class="input-label">ZIP code</label>
                      <input v-model="jobZipCode" type="text" class="js-masked-input form-control" name="zipCodeName" id="zipCodeLabel" placeholder="xxx xxx" aria-label="xxx xxx"
                              data-hs-mask-options='{
                                "template": "AA0 0AA"
                              }'>
                    </div>
                    <!-- End Form Group -->
                  </div>
                </div>
                <!-- End Row -->

                <!-- Form Group -->
                <div class="form-group">
                  <label class="input-label">Can this job be performed remotely, meaning primarily from home? If so, we’ll add a "Remote" tag to your post</label>
                  
                  <!-- Custom Radio -->
                  <div class="form-control mb-2">
                    <div class="custom-control custom-radio">
                      <input v-model="jobRemoteFriendly" value='not-remote' type="radio" class="custom-control-input" name="remoteOccasionRadioName" id="remoteOccasionRadio1" >
                      <label class="custom-control-label" for="remoteOccasionRadio1">No</label>
                    </div>
                  </div>
                  <!-- End Custom Radio -->

                  <!-- Custom Radio -->
                  <div class="form-control mb-2">
                    <div class="custom-control custom-radio">
                      <input v-model="jobRemoteFriendly" value='full-remote' type="radio" class="custom-control-input" name="remoteOccasionRadioName" id="remoteOccasionRadio2">
                      <label class="custom-control-label" for="remoteOccasionRadio2">Yes, always</label>
                    </div>
                  </div>
                  <!-- End Custom Radio -->

                  <!-- Custom Radio -->
                  <div class="form-control mb-2">
                    <div class="custom-control custom-radio">
                      <input v-model="jobRemoteFriendly" value='occasionally-remote' type="radio" class="custom-control-input" name="remoteOccasionRadioName" id="remoteOccasionRadio3">
                      <label class="custom-control-label" for="remoteOccasionRadio3">Yes, occasionally</label>
                    </div>
                  </div>
                  <!-- End Custom Radio -->
                  
                  <!-- Custom Radio -->
                  <div class="form-control mb-2">
                    <div class="custom-control custom-radio">
                      <input v-model="jobRemoteFriendly" value='temporarily-covid' type="radio" class="custom-control-input" name="remoteOccasionRadioName" id="remoteOccasionRadio4">
                      <label class="custom-control-label" for="remoteOccasionRadio4">Yes, temporarily due to COVID-19</label>
                    </div>
                  </div>
                  <!-- End Custom Radio -->
                </div>
                <!-- End Form Group -->

                    <!-- Form Group -->
                <div class="form-group">
                  <label class="input-label">What type of job is it? You can select multiple options.</label>
                  
                  <select v-model='jobType' class="jobTypeSelect form-select" name="jobType[]" multiple>
                      <option value="full-time">Full Time</option>
                      <option value="part-time">Part Time</option>
                      <option value="temporary">Temporary</option>
                      <option value="contract">Contract</option>
                      <option value="internship">Internship</option>
                      <option value="freelance">Freelance</option>
                  </select>
      
                </div>
                <!-- End Form Group -->

                <div class="row mx-n3 w-90 m-5 text-center">
                  <!-- Form Group -->
                  <div class="form-group">
                    <label class="input-label">Describe the responsibilities of this job, required work experience, skills, or education.</label>


                    <textarea v-model="jobDescription" class="form-control" rows="4" cols="10"></textarea>

                    
                  </div>
                  <!-- End Form Group -->
                </div>

              </div>
              <!-- End Body -->
            </div>
            <!-- End Card -->
          </div>
      <!-- End Row -->

      <div class="ml-auto">
          <button type="submit" class="btn btn-primary">
              Save and continue <i class="fas fa-angle-right ml-1"></i>
          </button>
      </div>

      </div>

    </form>
    <!-- End Step Form -->

  
  </div>
  <!-- End Step Section -->

</template>

<script>
  export default {
      
      
          data(){
              return {
                  jobTitle: '',
                  jobStreetAddress:'',
                  jobCity:'',
                  jobZipCode:'',
                  jobType:[],
                  jobRemoteFriendly:'',
                  jobDescription:''
              }    
          },
          methods:{

              async handleSubmit(e){
                  
                  let job = await fetch(process.env.VUE_APP_BIT_API_PATH + "/employer/create/job",
                      {
                          method: "POST",
                          headers: {
                              "Content-Type": "application/json",
                              Authorization: "Bearer " + process.env.VUE_APP_JWT
                          },
                          credentials: "include",
                          body: JSON.stringify({ 
                              jobtitle:this.jobTitle, 
                              jobstreetaddress:this.jobStreetAddress, 
                              jobcity:this.jobCity,
                              jobzipcode:this.jobZipCode,
                              jobtags:[this.jobRemoteFriendly,this.jobType].join(","),
                              jobDescription:this.jobDescription })
                      }
                  ).then(result =>{

                      if(!result.ok){
                        console.log(result)
                        return result
                      }

                      return result.json()

                  })

                  if(job){
                      this.$router.go()
                  }
                  
              }
          }
      
      // data(){
      //     return {
      //         editor: null    
      //     };
      // },
      // mounted(){
      //     this.editor = new Quill('#quill-editor',{
      //                     modules: {
      //         toolbar: [
      //             [{ header: [1, 2, 3, 4, false] }],
      //             ['bold', 'italic', 'underline']
      //         ]
      //     },
      //     theme: 'snow',
      //     formats: ['bold', 'underline', 'header', 'italic']
      //                 });
      // }
  }
</script>

<style>
  @import url("../../../public/assets/css/theme.css");
  @import url("../../../public/assets/vendor/fontawesome/css/all.min.css");
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap");
</style>
