<template>
<CreateJobView v-if="dataReady"
    :jobTitle="job.title"
    :jobStreetAddress="job.streetaddress"
    :jobState="job.state"
    :jobCity="job.city"
    :jobZipcode="job.zipcode"
    :jobJobType="job.tags"
    :jobJobDescription="job.description"
    :jobPayPeriod="job.payperiod"
    :jobJobDurationStart="formatDate(job.poststartdatetime)"
    :jobJobDurationEnd="formatDate(job.postenddatetime)"
    :jobMinSalary="job.minsalary"
    :jobMaxSalary="job.maxsalary"
    :formSubmitFunction="submitForm"
    :emitEvent="true"
    @submitform="submitForm"
></CreateJobView>
</template>

<script>

import CreateJobView from '../employer/CreateJobView.vue';

export default {
    components:{
        CreateJobView
    },
    data(){
        return {
            job:{},
            dataReady:false
        }
    },
    methods:{
        async getJob(){
            
            this.job = await fetch(process.env.VUE_APP_BIT_API_PATH + "/employer/get/job",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + process.env.VUE_APP_JWT
                },
                credentials: "include",
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
            }
            

        },
        formatDate(dateStr){
            const date = new Date(dateStr);
            return date.toISOString().split('T')[0]
        },
        async submitForm(e){

            e.publicid = this.$route.params.slug;
             let job = await fetch(process.env.VUE_APP_BIT_API_PATH + "/employer/edit/job",
                      {
                          method: "POST",
                          headers: {
                              "Content-Type": "application/json",
                              Authorization: "Bearer " + process.env.VUE_APP_JWT
                          },
                          credentials: "include",
                          body: JSON.stringify(e)
                      }
                  ).then(result =>{

                      if(!result.ok){
                        console.log(result)
                        return result
                      }

                      return result.json()

                  })

                  if(job){
                      console.log(job)
                    //   this.$router.go()
                  }
        }
    
    },
    computed:{

       
    },
    created(){
        this.getJob()
    }
}
</script>

<style>

</style>