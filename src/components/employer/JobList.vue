<template>
    <div v-if="dataReady" >
        <!-- Listing -->
          <div class="row">
            <div v-for="job in jobs" :key="job.publicid" class="col-md-12 mb-5">
              <!-- Card -->
              <div class="card card-bordered card-hover-shadow h-100">
                <div class="card-body">
                    <div class="row mb-3">
                    <div class="col">
                      
                    
                        <button class="btn btn-primary btn-sm mx-5" v-bind:value="job.publicid" @click="handleJobEdit">Edit</button>
                        <button class="btn btn-secondary btn-sm"  v-bind:value="job.publicid" @click="handleJobDelete">Delete</button>
                    
                    </div>

                  </div>
                  <!-- End Row -->

                  <h3 class="mb-3">
                    <a class="text-dark" href="">{{job.title}}</a>
                  </h3>

                  <span class="d-block font-size-1 text-body mb-1">{{}}</span>

                  <span v-for="tag in job.tags.split(',')" :key="tag" class="badge badge-soft-info mr-2">
                    <span class="legend-indicator bg-info"></span>{{tag}}
                  </span>
                </div>

                <div class="card-footer">
                  <ul class="list-inline list-separator small text-body">
                    
                    <li class="list-inline-item">{{job.streetaddress}},{{job.city}}</li>
                    <li class="list-inline-item">Full time</li>
                  </ul>
                </div>
              </div>
              <!-- End Card -->
            </div>
          </div>
          <!-- End Listing -->

    </div>

</template>


<script>

export default {
    components:{
    
    },
    data(){
        return {
            jobs:[],
            dataReady:false
        }
    },
    methods:{
        
       async handleJobDelete(e){
            let jobPublicID = e.target.value;

            let deletedJob = await fetch(process.env.VUE_APP_BIT_API_PATH + "/employer/delete/job",
                      {
                          method: "DELETE",
                          headers: {
                              "Content-Type": "application/json",
                              Authorization: "Bearer " + process.env.VUE_APP_JWT
                          },
                          credentials: "include",
                          body:JSON.stringify({"publicid":jobPublicID})
                      }
                  ).then(result =>{

                      if(!result.ok){
                        console.log(result)
                        return result
                      }

                      return result.json()

                  })
            
            if(deletedJob){
                this.$router.go()
            }

        },

        async handleJobEdit(e){

            let jobPublicID = e.target.value;
            
            this.$emit("editjob", jobPublicID)
            
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
            
            // if(deletedJob){
            //     this.$router.go()
            // }

        }
    },
    async mounted(){
        
        this.jobs = await fetch(process.env.VUE_APP_BIT_API_PATH + "/employer/get/jobs",
                      {
                          method: "GET",
                          headers: {
                              "Content-Type": "application/json",
                              Authorization: "Bearer " + process.env.VUE_APP_JWT
                          },
                          credentials: "include"
                      }
                  ).then(result =>{

                      if(!result.ok){
                        console.log(result)
                        return result
                      }

                      return result.json()

                  })

                  if(this.jobs){
                    this.dataReady = true;
                  }
    }

}
</script>


<style>

</style>