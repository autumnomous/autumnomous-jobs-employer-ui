<template>

  <main id="content" role="main">
    <div class="container space-top-1 space-top-lg-2 space-bottom-2 space-bottom-lg-3" >
        
          <keep-alive>
            <component :is="activeCard" @next="next" @back="back" :packageChosen="packageChosen"></component>
          </keep-alive>
        
    </div>
  </main>


  
</template>

<script>
    // import StickyBlock from '@/components/employer/create-job/StickyBlock.vue';
    import JobPackageSelectCard from '../../components/employer/job-package-purchase/JobPackageSelectCard.vue'
    import JobPackageConfirmationCard from '../../components/employer/job-package-purchase/JobPackageConfirmationCard.vue'
    import LayoutDefault from '../../layouts/LayoutDefault.vue'
    import Cookies from 'js-cookie'

    export default{
        data(){
            return {
              packageChosen:{},
              activeCard:"job-package-select-card",

              formSubmitted:false,
              token:"",
              showConfirmation:false,
              showPackageSelect:true,

            }
        },
        components:{
            JobPackageSelectCard,
            JobPackageConfirmationCard
        },
         methods:{
          
          goToConfirmation(){

            if(this.packageChosen){
              this.showConfirmation = true;
              this.showPackageSelect = false;
            } 
            else { 
              this.formError = true;
            }
             
          },
          next(packageChosen){
            this.activeCard = 'job-package-confirmation-card'
            this.packageChosen = JSON.parse(packageChosen)
          },
          back(){
              this.activeCard = 'job-package-select-card'
          },
         
         },
         computed:{
           requirementsMet(){
              return this.v$.$invalid
           }
         },
         async created() {
          this.$emit('update:layout', LayoutDefault);
          this.token = Cookies.get('com.ajobs.employer');
        },

        
    }
</script>

<style scoped>


</style>