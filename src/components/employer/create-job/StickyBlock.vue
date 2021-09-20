<template>
    <div id="stickyBlockStartPoint sticky-top" class="col-lg-4">
            <!-- Sticky Block -->
            <div class="js-sticky-block">
              <!-- Step -->
              <ul id="postJobStepFormProgress" class="js-step-progress step step-icon-xs step-border-last-0 mt-5">


                <step-item v-for="step in steps" :key="step.id"
                    :title="step.title"
                    :subtitle="step.subtitle"
                    :stepID="step.id"
                    @click-step-item="handleStepItemClick"
                ></step-item>
            
              </ul>
              <!-- End Step -->
            </div>
            <!-- End Sticky Block -->
    </div>
    <!-- Sticky Block End Point -->
</template>


<script>
import StepItem from './sticky-block/StepItem.vue';
export default {

    emits:["click-step-item"],
    components: { StepItem },
    
    data(){
        return {
            steps:[
                {id:"1", title:"Choose a Package", subtitle:"Choosing a job package"},
                {id:"2", title:"Job details", subtitle:"Job type details and more"},
                {id:"3", title:"Payment", subtitle:"Pay and receive options"},
                {id:"4",title:"Additional job details", subtitle:"Describe the responsibilities of this job"},
                {id:"5",title:"Job Preview", subtitle:""}
            ]
        };  
    },
    props:{
        StepItem
    },
    methods:{
        handleStepItemClick(stepID){
            this.$emit('click-step-item', stepID)
        }
    }
}
</script>

<style scoped>

div#stickyBlockStartPoint{
    max-width:50%;
}
</style>