<template>
    <li class="step-item">
        <a class="step-content-wrapper" href="" @click.prevent="handleClick">
        <span class="step-icon step-icon-soft-dark">{{stepID}}</span>
        <div class="step-content">
            <span class="step-title">{{title}}</span>
            <span class="step-title-description step-text font-size-1">{{subtitle}}</span>
        </div>
        </a>
    </li>
</template>

<script>
export default {
    emits:['click-step-item'],
    props:{
        title:{
            type:String, 
            required:true
        },
        subtitle:{
            type:String,
            required:false
        },
        stepID:{
            type: String,
            required:true
        }
    },
    methods:{
        handleClick(){
            this.$emit('click-step-item', this.stepID)
        }
    }
}
</script>