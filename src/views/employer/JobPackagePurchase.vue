<template>

  <main id="content" role="main">
    <div class="container space-top-1 space-top-lg-2 space-bottom-2 space-bottom-lg-3" >
      <div class="row">
          <div class="col-lg-8">
          <the-card :active="true">

            <template v-slot:cardheader>Choose a Package</template>
            <template v-slot:cardbody>
              <job-package-select></job-package-select>
            </template>
            <template v-slot:cardfooter></template>
          
          </the-card>

        </div>
        

        <div class="col-lg-4">
          <the-card :active="true">

            <template v-slot:cardheader>Payment</template>
            <template v-slot:cardbody>
              
            </template>
            <template v-slot:cardfooter></template>
            
          </the-card>
        </div>
      </div>
        
          
    </div>
  </main>


  
</template>

<script>
    // import StickyBlock from '@/components/employer/create-job/StickyBlock.vue';
    import JobPackageSelect from '@/components/employer/JobPackageSelect.vue';
    import TheCard from '../../components/ui/TheCard.vue'
    import LayoutDefault from '../../layouts/LayoutDefault.vue'
    // import CKEditor from '@ckeditor/ckeditor5-vue'
    // import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
    import useVuelidate from '@vuelidate/core'
    import { required } from '@vuelidate/validators'

    export default{
        setup () {
          return { v$: useVuelidate() }
        },
        data(){
            return {
                packageChosen:"",
                formSubmitted:false,
                token:""
            }
        },
        validations(){
          return{
            
            packageChosen:{required}
          }
        },
        components:{
            TheCard,
            JobPackageSelect
        },
         methods:{
          handlePackageChosen(packageChosen){
             this.packageChosen = packageChosen
           },
          async submitForm(e){
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
         computed:{
           requirementsMet(){
              return this.v$.$invalid
           }
         },
         async created() {
          this.$emit('update:layout', LayoutDefault);
          this.token = this.$cookies.get('com.bitjobs');
        },
    }
</script>

<style scoped>


</style>