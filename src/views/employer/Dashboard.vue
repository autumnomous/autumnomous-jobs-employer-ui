<template>
      <!-- ========== MAIN CONTENT ========== -->
  <main id="content" role="main">
    <!-- Hero Section -->
    <div class="gradient-x-three-sm-primary">
      <div class="container space-top-2 space-top-lg-4 space-bottom-2">
        <h1>Dashboard</h1>
      </div>
    </div>
    <!-- End Hero Section -->

    <!-- Listing Section -->
    <div class="container space-2 space-bottom-lg-3">
      <div class="row">
        <div class="col-lg-3 order-lg-2 mb-5 mb-lg-0">
          <!-- Navbar -->
          <div class="navbar-expand-lg navbar-expand-lg-collapse-block navbar-light">
            <!-- Responsive Toggle Button -->
            <button type="button" class="navbar-toggler btn btn-block btn-white"
                    aria-label="Toggle navigation"
                    aria-expanded="false"
                    aria-controls="sidebarNav"
                    data-toggle="collapse"
                    data-target="#sidebarNav">
              <span class="d-flex justify-content-between align-items-center">
                <span class="h5 mb-0">View all filters</span>
                <span class="navbar-toggler-default">
                  <svg width="14" height="14" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                    <path fill="currentColor" d="M17.4,6.2H0.6C0.3,6.2,0,5.9,0,5.5V4.1c0-0.4,0.3-0.7,0.6-0.7h16.9c0.3,0,0.6,0.3,0.6,0.7v1.4C18,5.9,17.7,6.2,17.4,6.2z M17.4,14.1H0.6c-0.3,0-0.6-0.3-0.6-0.7V12c0-0.4,0.3-0.7,0.6-0.7h16.9c0.3,0,0.6,0.3,0.6,0.7v1.4C18,13.7,17.7,14.1,17.4,14.1z"/>
                  </svg>
                </span>
                <span class="navbar-toggler-toggled">
                  <svg width="14" height="14" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                    <path fill="currentColor" d="M11.5,9.5l5-5c0.2-0.2,0.2-0.6-0.1-0.9l-1-1c-0.3-0.3-0.7-0.3-0.9-0.1l-5,5l-5-5C4.3,2.3,3.9,2.4,3.6,2.6l-1,1 C2.4,3.9,2.3,4.3,2.5,4.5l5,5l-5,5c-0.2,0.2-0.2,0.6,0.1,0.9l1,1c0.3,0.3,0.7,0.3,0.9,0.1l5-5l5,5c0.2,0.2,0.6,0.2,0.9-0.1l1-1 c0.3-0.3,0.3-0.7,0.1-0.9L11.5,9.5z"/>
                  </svg>
                </span>
              </span>
            </button>
            <!-- End Responsive Toggle Button -->

            <div id="sidebarNav" class="collapse navbar-collapse">
              <div class="pt-4 pt-lg-0">
                <!-- Filter Form -->
                <form>

                  <!-- Filter Group -->
                  <div class="mb-5">
                    <h6 class="small text-cap">Job titles</h6>

                    <!-- Checkbox -->
                    <div v-for="title in jobTitles" :key="title" class="d-flex align-items-center justify-content-between mb-2">
                      <div class="custom-control custom-checkbox">
                        <input v-model="jobTitleFilter" type="checkbox" class="custom-control-input" :id=" 'jobTitles' + title[0]" :value="title[0]">
                        <label class="custom-control-label" :for="'jobTitles' + title[0]">{{title[0]}}</label>
                      </div>
                      <small>{{title[1]}}</small>
                    </div>
                    <!-- End Checkbox -->

                  </div>
                  <!-- End Filter Group -->
                  <button type="button" class="btn btn-sm btn-block btn-white">
                    <i class="fas fa-redo fa-sm mr-1"></i> Reset all
                  </button>
                </form>
                <!-- End Filter Form -->
              </div>
            </div>
          </div>
          <!-- End Navbar -->
        </div>

        <div class="col-lg-9">

          <hr class="my-4">

          <template v-if="!filteredJobs">
              <div>Loading...</div>
          </template>
          <template v-else-if="!filteredJobs.length">
              <div>
                <img src="" alt="">
                <p>You haven't purchased any job postings.</p>
                <router-link class="btn btn-sm btn-primary transition-3d-hover" to="/employer/buy-job-package">Buy Job Package</router-link>
              </div>
          </template>
          <div v-else v-for="job in filteredJobs" :key="job.publicid">
            <router-link  :to="'/employer/job-list/' + job.publicid">
                <JobDisplayCard
                  :avatarSrc="job.avatarsrc" 
                  :companyName="job.companyname" 
                  :companyURL="job.companyurl"
                  :job="job"
                ></JobDisplayCard>
            </router-link>
          </div>
          
          <!-- Pagination -->
          <div class="d-flex justify-content-between align-items-center mt-7">
            <nav aria-label="Page navigation">
              <ul class="pagination mb-0">
                <li class="page-item ml-0">
                  <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                    <span class="sr-only">Previous</span>
                  </a>
                </li>
                <li class="page-item active"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item disabled"><a class="page-link" href="#">...</a></li>
                <li class="page-item"><a class="page-link" href="#">9</a></li>
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                    <span class="sr-only">Next</span>
                  </a>
                </li>
              </ul>
            </nav>

            <small class="d-none d-sm-inline-block text-body">Page 1 out of 9</small>
          </div>
          <!-- End Pagination -->
        </div>
      </div>
      <!-- End Row -->
    </div>
    <!-- End Listing Section -->
  </main>
  <!-- ========== END MAIN CONTENT ========== -->
</template>

<script>
  import JobDisplayCard from '../../components/employer/JobDisplayCard.vue'
  import LayoutDefault from '../../layouts/LayoutDefault.vue'
  export default {
    name:"Job List",
    components:{
       JobDisplayCard
    },
    data(){
        return {
          jobs:[],
          jobTitleFilter:[],
        }
    },
    computed:{
        jobTitles(){
          var titles = {}
          var titlesSorted = []
          this.jobs.forEach(element => {
              titles[element.title] = this.jobs.filter(x=> x.title === element.title).length
          });

          for (var title in titles){
            titlesSorted.push([title, titles[title]])
          }

          titlesSorted.sort(function(a, b) {
              return a[1] - b[1];
          });
          return titlesSorted;
        },
        filteredJobs(){

          var filtered = this.jobs.filter(x => this.jobTitleFilter.includes(x.title));
          return filtered.length > 0 ? filtered: this.jobs
        }
    },
    methods:{


        getEditJob(e){
            //  let deletedJob = await fetch(process.env.VUE_APP_BIT_API_PATH + "/employer/edit/job",
            //           {
            //               method: "POST",
            //               headers: {
            //                   "Content-Type": "application/json",
            //                   Authorization: "Bearer " + process.env.VUE_APP_JWT
            //               },
            //               credentials: "include",
            //               body:JSON.stringify({"publicid":jobPublicID})
            //           }
            //       ).then(result =>{

            //           if(!result.ok){
            //             console.log(result)
            //             return result
            //           }

            //           return result.json()

            //       })
        }
    },
    async mounted(){
      // get jobs created by employer
      let token = this.$cookies.get('com.bitjobs');
      this.jobs = await fetch(process.env.VUE_APP_BIT_API_PATH + "/employer/get/jobs",
          {
              method: "GET",
              headers: {
                  "Content-Type": "application/json",
                  Authorization: "Bearer " + token
              },
              // credentials: "include"
          }
      ).then(result =>{

          if(!result.ok){
            console.log(result)
            return result
          }

          return result.json()

      })

      // if(this.jobs){
      //   console.log(this.jobs)
      // }
    },
    created() {
    this.$emit('update:layout', LayoutDefault);
  },
}
</script>

<style>

</style>