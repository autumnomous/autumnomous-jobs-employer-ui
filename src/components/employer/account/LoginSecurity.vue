<template>
     
    <change-password buttonText="Save" headerText="Change Password" :emitNextStep="false"></change-password>


    <the-card>

        <template v-slot:cardheader>Delete your account</template>
        <template v-slot:cardbody>
            <p class="card-text">When you delete your account, you lose access to BiT Jobs account services, and we permanently delete your personal data.</p>
        </template>

        <template v-slot:cardfooter>
            <button type="submit" class="btn btn-danger transition-3d-hover">Delete</button>
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