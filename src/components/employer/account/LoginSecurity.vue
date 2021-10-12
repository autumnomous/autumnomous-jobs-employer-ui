<template>
     
    <change-password buttonText="Save" headerText="Change Password" :emitNextStep="false"></change-password>


    <the-card :active="true">

        <template v-slot:cardheader>Deactivate your account</template>
        <template v-slot:cardbody>
            <p class="card-text">When you deactivate your account, you lose access to BiT Jobs account services until you come back.</p>
        </template>

        <template v-slot:cardfooter>
            <button type="submit" class="btn btn-danger transition-3d-hover">Deactivate</button>
        </template>

    </the-card>

</template>

<script>
    import ChangePassword from '../registration/ChangePassword.vue'
    import TheCard from '../../ui/TheCard.vue'
    export default {
        components: { 
            ChangePassword,
            TheCard
        }
        
    }
</script>

<style scoped>

    .card{
        margin-bottom:30px;
    }
</style>