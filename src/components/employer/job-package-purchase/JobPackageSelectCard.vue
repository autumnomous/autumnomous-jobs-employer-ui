<template>
    <the-card :active="true">

        <template v-slot:cardheader>Choose a Package</template>
        <template v-slot:cardbody>
        <alert-error v-if="formError" :message="formErrorMessage"></alert-error>

        
            <job-package-select @package-chosen="handlePackageChosen"></job-package-select>
        
        
        </template>
        <template v-slot:cardfooter>

        <div class="ml-auto">
            
            <button class="btn btn-primary" @click="submit">Continue</button>
        </div>
        </template>
    
    </the-card>
</template>

<script>
import TheCard from '../../ui/TheCard.vue'
import JobPackageSelect from '../../employer/JobPackageSelect.vue'
import AlertError from '../../ui/AlertError.vue'
    export default {
        data(){
            return {
                packageChosen:{},
                formError:false,
                formErrorMessage:"Please select a package.",
            }
        },
        components:{
            TheCard,
            JobPackageSelect,
            AlertError
        },
        methods:{
            handlePackageChosen(packageChosen){
                this.packageChosen =JSON.parse(packageChosen)[0];
            },
            submit(){
                if(!this.packageChosen.title == ""){
                    this.formError = false;
                    this.$emit('next', JSON.stringify(this.packageChosen))
                }
                else {
                    this.formError = true;
                }
                
            }
        }

    }
</script>

<style lang="scss" scoped>

</style>