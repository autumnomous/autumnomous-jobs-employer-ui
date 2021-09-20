<template>

    <div class="form-group" v-for="jobPackage in jobPackages" :key="jobPackage.title">
        <div class="form-control mb-2" >
        <div class="custom-control custom-radio" >
            
            <input type="radio" class="custom-control-input" v-model="chosen"  name="job-package" :value="jobPackage.title" :id="jobPackage.title" >
            <label class="custom-control-label" :for="jobPackage.title">{{jobPackage.title}} <span class="text-muted font-size-1">{{jobPackage.subtitle}}</span></label>
            
        </div>
        </div>
    </div>

</template>

<script>
export default {
    data(){
        return{
           jobPackages:[
                  {title:"Single Job Posting", subtitle:"$150.00 for 1 job listed for 30 days"},
                  {title:"5 Jobs Posting Package", subtitle:"$650.00 for 5 jobs listed for 30 days"},
                  {title:"10 Jobs Posting Package", subtitle:"$1,250.00 for 10 jobs listed for 30 days"},
                  {title:"Single Jobs Post + Social Media Blast", subtitle:"$450.00 for 1 job listed for 30 days"},
                  {title:"5 Jobs Posting + Social Media Blasts Package", subtitle:"$1,950.00 for 5 jobs listed for 30 days"},
                  {title:"10 Jobs Posting + Social Media Blasts Package", subtitle:"$3,800.00 for 10 jobs listed for 30 days"},
                  {title:"Premium Job Ad Placement", subtitle:"$600 per job ad for 30 days"}
                ],
                chosen:"Single Job Posting",
        }
    },
    validations(){

    }
}
</script>

<style>

</style>