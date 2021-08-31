<template>
<header id="header" class="header">
    <div class="js-mega-menu header-section">

        <div id="logoAndNav" class="container">
            <!-- Nav -->
            <nav class="navbar navbar-expand-lg">
                <!-- Logo -->
                <a class="navbar-brand" href="index.html" aria-label="Front">
                    <img src="../../public/assets/svg/logos/logo.svg" alt="Logo">
                </a>
                <!-- End Logo -->

                <!-- Responsive Toggle Button -->
                <button type="button" class="navbar-toggler btn btn-icon btn-sm btn-soft-secondary rounded-circle">
                    <span class="navbar-toggler-default">
                        <svg width="14" height="14" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                        <path fill="currentColor" d="M17.4,6.2H0.6C0.3,6.2,0,5.9,0,5.5V4.1c0-0.4,0.3-0.7,0.6-0.7h16.9c0.3,0,0.6,0.3,0.6,0.7v1.4C18,5.9,17.7,6.2,17.4,6.2z M17.4,14.1H0.6c-0.3,0-0.6-0.3-0.6-0.7V12c0-0.4,0.3-0.7,0.6-0.7h16.9c0.3,0,0.6,0.3,0.6,0.7v1.4C18,13.7,17.7,14.1,17.4,14.1z"/>
                        </svg>
                    </span>
                    <span class="navbar-toggler-toggled">
                        <svg width="14" height="14" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                            <path fill="currentColor" d="M11.5,9.5l5-5c0.2-0.2,0.2-0.6-0.1-0.9l-1-1c-0.3-0.3-0.7-0.3-0.9-0.1l-5,5l-5-5C4.3,2.3,3.9,2.4,3.6,2.6l-1,1 C2.4,3.9,2.3,4.3,2.5,4.5l5,5l-5,5c-0.2,0.2-0.2,0.6,0.1,0.9l1,1c0.3,0.3,0.7,0.3,0.9,0.1l5-5l5,5c0.2,0.2,0.6,0.2,0.9-0.1l1-1 c0.3-0.3,0.3-0.7,0.1-0.9L11.5,9.5z"/>
                        </svg>
                    </span>
                </button>
                <!-- End Responsive Toggle Button -->

                <!-- Navigation -->
                <div id="navBar" class="collapse navbar-collapse">
                    <ul class="navbar-nav">
                        <li class="navbar-nav-item">
                            <router-link class="nav-link" to="/">Home</router-link>
                        </li>

                        <!-- Listings -->
                        <li class="hs-has-sub-menu navbar-nav-item mr-lg-auto" @mouseover="listingsShow = true" @mouseleave="listingsShow = false">
                            <a id="jobListingsMegaMenu" class="nav-link nav-link-toggle" aria-labelledby="jobsSubMenuListing" >Listings</a>


                            <transition name="fade">
                                  <!-- Listings - Submenu -->
                                    <div v-if="listingsShow" id="jobsSubMenuListing" class="hs-sub-menu dropdown-menu show" aria-labelledby="jobListingsMegaMenu" style="min-width: 230px;">
                                        <router-link class="dropdown-item" to="/employer/create-job">Post A Job</router-link>
                                        <a class="dropdown-item" href="">Listing</a>
                                        <a class="dropdown-item" href="">Listing (Grid)</a>
                                    </div>
                                    <!-- End Listings - Submenu -->

                            </transition>
                          
                        </li>
                        <!-- End Listings -->

                        <!-- Pages -->
                        <li class="hs-has-sub-menu navbar-nav-item mr-lg-auto" @mouseover="pagesShow = true" @mouseleave="pagesShow = false">
                        <a id="jobPagesMegaMenu" class="hs-mega-menu-invoker nav-link nav-link-toggle" aria-haspopup="true" aria-expanded="false" aria-labelledby="jobsSubMenuPages">Pages</a>

                        <!-- Pages - Submenu -->
                        <div v-if="pagesShow" id="jobsSubMenuPages" class="hs-sub-menu dropdown-menu show" aria-labelledby="jobPagesMegaMenu" style="min-width: 230px;">
                            <a class="dropdown-item" href="">Job Overview</a>
                            <a class="dropdown-item" href="">Apply for Job</a>
                            <a class="dropdown-item" href="">Employee (Applicant)</a>
                            <a class="dropdown-item" href="">Employer (Company)</a>
                        </div>
                        <!-- End Pages - Submenu -->
                        </li>
                        <!-- End Pages -->

                        <li class="navbar-nav-item">
                        <a class="nav-link" href="">Upload resume</a>
                        </li>

                        <!-- Button -->
                        <li class="navbar-nav-last-item">

                           <router-link class="btn btn-sm btn-primary transition-3d-hover" to="/employer/create-job">Post a job</router-link>
                            
                        </li>
                        <!-- End Button -->
                    </ul>
                </div>
                <!-- End Navigation -->
            </nav>
            <!-- End Nav -->
        </div>
    </div>
</header>
</template>


<script>

import $ from 'jquery'

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