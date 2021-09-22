<template>

    <div class="form-group" v-for="jobPackage in jobPackages" :key="jobPackage.id">
        <div class="form-control mb-2" >
        <div class="custom-control custom-radio">
            
            <input type="radio" class="custom-control-input" @click="handleClick"  name="job-package" :value="jobPackage.typeid" :id="jobPackage.title" >
            <label class="custom-control-label" :for="jobPackage.title">{{jobPackage.title}} <span class="text-muted font-size-1">{{jobPackage.description}}</span></label>
            
        </div>
        </div>
    </div>

</template>

<script>
export default {
    emits:["package-chosen"],
    data(){
        return{
           jobPackages:[]
        }
    },
    async created(){

        this.jobPackages = await fetch(process.env.VUE_APP_BIT_API_PATH + "/employer/get/jobpackages/active",
                      {
                          method: "GET",
                          headers: {
                              "Content-Type": "application/json",
                              Authorization: "Bearer " + process.env.VUE_APP_JWT
                          },
                        //   credentials: "include"
                      }
                  ).then(result =>{

                      if(!result.ok){
                        console.log(result)
                        return result
                      }

                      return result.json()

                  })

        this.jobPackages = this.jobPackages.sort((a,b) => a.id - b.id)

    },
    methods:{
        handleClick(e){
            this.$emit('package-chosen',e.target.value)
        }
    }
}
</script>

<style>

</style>