<template>
    <div>
       <JobList />
        <CreateJobForm/>
    </div>
</template>

<script>
import CreateJobForm from '../../components/employer/CreateJobForm.vue'
import JobList from '../../components/employer/JobList.vue'

export default {
    name:"Dashboard",
    components:{
        CreateJobForm,
        JobList,    
    }
}
</script>

<style>

</style>