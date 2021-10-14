<template>
    <!-- Card -->
    <div class="card card-bordered card-hover-shadow mb-5">
    <div class="card-body">
        <!-- Media -->
        <div class="d-sm-flex">        
        <div class="media-body">
            <div class="row">
            <div class="col col-md-8">
                <h3 class="mb-0">
                <a class="text-dark" href="job-overview.html">{{job.title}}</a>
                </h3>
                <div class="d-none d-sm-inline-block">
                <h6 class="mb-0">
                    <a class="text-dark" href="{{companyURL}}">{{companyName}}</a>
                    
                </h6>
                </div>
            </div>

            <div class="col-auto order-md-3">
                <button class="btn btn-md btn-secondary transition-3d-hover mr-2">Applications</button>
                <button class="btn btn-md btn-secondary transition-3d-hover mr-2">Analytics</button>
                <button class="btn btn-md btn-secondary transition-3d-hover mr-2">Interviews</button>
                <button class="btn btn-md btn-secondary transition-3d-hover">Search for Candidates</button>
            </div>

            <!-- <div class="col-12 col-md mt-3 mt-md-0">
                <span class="d-block font-size-1 text-body mb-1" v-if="jobLive">${{job.minsalary}}-${{job.maxsalary}} per {{job.payperiod}}</span>
            </div> -->
            </div>
            <!-- End Row -->
        </div>
        </div>
        <!-- End Media -->
    </div>

    <div class="card-footer">
        <ul class="list-inline list-separator small text-body">
            <li class="list-inline-item">{{postDates}}</li>
        <li class="list-inline-item" v-if="jobLive">{{timeSincePosted}}</li>
        <!-- <li class="list-inline-item">{{numApplicants || 0 }} applicants</li> -->
        <!-- <li class="list-inline-item">{{job.tags}}</li> -->
        </ul>
    </div>
    </div>
    <!-- End Card -->
</template>

<script>
export default {
    props:["avatarSrc", "companyName", "companyURL","job"],
    methods:{

        prettyDate(dateStr){

            if(dateStr != ""){
                var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeZone:"UTC" };
                const date = new Date(dateStr);
                return date.toLocaleDateString("en-US", options)
            } else { 
                return ""
            }
            
        }
    },

    computed:{
        jobLive(){
            return this.postDates != "Not Live"
        },
        postDates(){

            if(this.job.poststartdatetime != "" && this.job.postenddatetime != ""){
                return this.prettyDate(this.job.poststartdatetime) + " - " + this.prettyDate(this.job.postenddatetime)
            } else { 
                return "Not Live"
            }
        },
        timeSincePosted(){
            const postLiveDate = new Date(this.job.poststartdatetime);
            const postEndDate = new Date(this.job.postenddatetime)
            const now = Date.now()
            const timeSinceLive = Math.round((now-postLiveDate)/ (1000 * 60 * 60 *24))
            const expiresIn = Math.round((postEndDate - now)/ (1000 * 60 * 60 *24))
            if(postEndDate < now){
                return "Expired " + now-postEndDate + " day(s) ago."
            }

            if(postLiveDate < now){
                return "Went live " + timeSinceLive + " day(s) ago. Expires in " +expiresIn + " day(s)."
            }


        }
    }
     
}
</script>

<style>

</style>