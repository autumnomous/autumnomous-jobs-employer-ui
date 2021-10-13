<template>

    <!-- Pages -->
    <li class="hs-has-sub-menu navbar-nav-item mr-lg-auto" @mouseover="pagesShow = true" @mouseleave="pagesShow = false">
    <a id="jobPagesMegaMenu" class="hs-mega-menu-invoker nav-link nav-link-toggle" aria-haspopup="true" aria-expanded="false" aria-labelledby="jobsSubMenuPages">Pages</a>

    <!-- Pages - Submenu -->
    <div v-if="pagesShow" id="jobsSubMenuPages" class="hs-sub-menu dropdown-menu show" aria-labelledby="jobPagesMegaMenu" style="min-width: 230px;">
        <router-link class="dropdown-item" to="/employer/buy-job-package">Buy Job Package</router-link>
        <router-link class="dropdown-item" to="/employer/dashboard">Dashboard</router-link>
        <router-link class="dropdown-item" to="/employer/account">Account</router-link>
    </div>
    <!-- End Pages - Submenu -->
    </li>
    <!-- End Pages -->

    <!-- Button -->
    <li class="navbar-nav-last-item">

        <router-link class="btn btn-sm btn-primary transition-3d-hover" to="/employer/buy-job-package">Buy Job Package</router-link>
        
    </li>
    <!-- End Button -->
</template>


<script>


export default {

    data(){
        return {
            listingsShow: false,
            pagesShow:false,
        }
    },
    components:{
     
    },

}

</script>

<style>

    #jobsSubMenuListing{
        left:60%;
    }

    #jobsSubMenuPages {
        left:70%;
    }
</style>