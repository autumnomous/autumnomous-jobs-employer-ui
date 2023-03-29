<template>

    <div class="form-group" v-for="jobPackage in jobPackages" :key="jobPackage.id">
        <div class="form-control mb-2" >
            <div class="custom-control custom-radio">
                
                <input type="radio" class="custom-control-input" @click="handleClick"  name="job-package" :value="jobPackage.typeid" :id="jobPackage.title" >
                <label class="custom-control-label" :for="jobPackage.title">
                    <div>
                        {{jobPackage.title}}
                    </div>
                    <div>
                        <span class="text-muted font-size-1">{{jobPackage.description}}</span>
                    </div>
                </label>
                
            </div>
        </div>
    </div>

</template>

<script>

import Cookies from 'js-cookie'

export default {
    emits:["package-chosen"],
    data(){
        return{
           jobPackages:[]
        }
    },
    async created(){
        const token = Cookies.get('com.ajobs.employer');
        this.jobPackages = await fetch(process.env.VUE_APP_BIT_API_PATH + "/employer/get/jobpackages/active",
                      {
                          method: "GET",
                          headers: {
                              "Content-Type": "application/json",
                              Authorization: "Bearer " + token
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
            this.$emit('package-chosen',JSON.stringify(this.jobPackages.filter(el => el.typeid == e.target.value)))
        }
    }
}
</script>

<style scoped>

    .form-control{
        height:auto;
    }
</style>