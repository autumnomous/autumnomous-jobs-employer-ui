<template>
     <the-card :active="true">
      <template v-slot:cardheader>Confirmation</template>
      <template v-slot:cardbody>
        <alert-error v-if="purchaseError" :message="purchaseErrorMessage"></alert-error>
        <div>
          <h3>Selected Package</h3>
          <p>{{packageChosen.title}}</p>
          <p>{{packageChosen.description}}</p>
          <p>We'll use the payment information on file. That information is:</p>
        </div>
      </template>
      <template v-slot:cardfooter>
        <div class="ml-auto">
            <a class="btn btn-white" @click="back">Back</a>
            <span class="mx-2"></span>
            <button class="btn btn-primary" @click="formSubmit">Buy</button>
        </div>
      </template>
    
    </the-card>
</template>

<script>
  import TheCard from '../../ui/TheCard.vue'
  import AlertError from '../../ui/AlertError.vue'
    export default {
        props:{
          packageChosen:{
            type: Object, 
            required:true
          }
        },
        data(){
          return{
            purchaseError:false,
            purchaseErrorMessage:'An error occurred while processing payment. Please contact us at admin@autumnomous.com'
          }
        },
        components:{
          TheCard,
          AlertError
        },
        methods:{
          back(){
            this.$emit('back')
          },
           async formSubmit(e){

            let token = this.$cookies.get('com.bitjobs');
            let result = await fetch(process.env.VUE_APP_BIT_API_PATH + "/employer/buy/job-package",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + token
                    },
                    // credentials: "include",
                    body: JSON.stringify({ 
                        jobpackage:this.packageChosen.typeid})
                }
              ).then(result =>{
                  return result
              })

              if(!result.ok){
                this.purchaseError = true;

              } else {
                this.purchaseError = false;
                this.$router.replace('/employer/dashboard')
              }
            
            

                // if(this.emitEvent == false){
                  // let job = await fetch(process.env.VUE_APP_BIT_API_PATH + "/employer/create/job",
                  //     {
                  //         method: "POST",
                  //         headers: {
                  //             "Content-Type": "application/json",
                  //             Authorization: "Bearer " + process.env.VUE_APP_JWT
                  //         },
                  //         // credentials: "include",
                  //         body: JSON.stringify({ 
                  //             title:this.title,
                  //             jobtype:this.jobType,
                  //             category:this.jobCategory,
                  //             description:this.stripHTML(this.jobDescription),
                  //             minsalary:Number(this.minSalary),
                  //             maxsalary:Number(this.maxSalary),
                  //             payperiod:this.payPeriod,
                  //             poststartdatetime:this.jobDurationStart})
                  //     }
                  // ).then(result =>{

                  //     if(!result.ok){
                  //       console.log(result)
                  //       return result
                  //     }

                  //     return result.json()

                  // })

              
                  
            }
        },
        async mounted(){
          //TODO: get employer payment information 
        }
    }
</script>

<style lang="scss" scoped>

</style>