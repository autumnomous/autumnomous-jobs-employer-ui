<template>
    <div v-if="dataReady">
        {{jobs}}
    </div>
</template>


<script>
export default {
    
    data(){
        return {
            jobs:[],
            dataReady:false
        }
    },
    methods:{
    
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
                      console.log(this.jobs)
                  }
    }

}
</script>


<style>

</style>