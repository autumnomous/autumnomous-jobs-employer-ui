<template>
    <main id="content" role="main" class="bg-light">
        <!-- Breadcrumb Section -->
        <div class="bg-dark" style="background-image: url(../../../public/assets/svg/components/abstract-shapes-20.svg);">
            <div class="container space-1 space-top-lg-2 space-bottom-lg-3">
                <div class="row align-items-center">
                <div class="col">
                    <div class="d-none d-lg-block">
                    <h1 class="h2 text-white">Personal info</h1>
                    </div>

                    <!-- Breadcrumb -->
                    <ol class="breadcrumb breadcrumb-light breadcrumb-no-gutter mb-0">
                    <li class="breadcrumb-item">Account</li>
                    <li class="breadcrumb-item active" aria-current="page">Personal info</li>
                    </ol>
                    <!-- End Breadcrumb -->
                </div>

                <div class="col-auto">
                    <div class="d-none d-lg-block">
                    <a class="btn btn-sm btn-soft-light" href="#">Log out</a>
                    </div>

                    <!-- Responsive Toggle Button -->
                    <button type="button" class="navbar-toggler btn btn-icon btn-sm rounde-circle d-lg-none"
                            aria-label="Toggle navigation"
                            aria-expanded="false"
                            aria-controls="sidebarNav"
                            data-toggle="collapse"
                            data-target="#sidebarNav">
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
                </div>
                </div>
            </div>
        </div>
        <!-- End Breadcrumb Section -->

        <!-- Content Section -->
        <div class="container space-1 space-top-lg-0 space-bottom-lg-2 mt-lg-n10">
        <div class="row">
            <account-nav @change-active="changeActive"></account-nav>

            <div class="col-lg-9">
                
                <keep-alive>
                    <component :is="activeCard" ></component>
                </keep-alive>
                
               
            </div>
        </div>
        <!-- End Row -->
        </div>
        <!-- End Content Section -->
    </main>
</template>

<script>
    import AccountNav from '../../components/employer/account/AccountNav.vue'
    import LayoutDefault from '../../layouts/LayoutDefault.vue'
    import PersonalInfo from '../../components/employer/account/PersonalInfo.vue'
    import LoginSecurity from '../../components/employer/account/LoginSecurity.vue'
    
    export default{

        async created(){
            this.$emit('update:layout', LayoutDefault);
            // this.token = this.$cookies.get('com.bitjobs');
          

        },
        data(){
            return { 
                activeCard: "the-basic-info",
                token:"",
                employer:{}
            }
        },
        components: { 
            AccountNav,
            PersonalInfo,
            LoginSecurity
        },
        methods:{
            changeActive(newActive){
                this.activeCard = newActive;

            }
        }
        
       
    }
    
</script>

<style scoped>

    div.bg-dark{
        background-image: url(../../../public/assets/svg/components/abstract-shapes-20.svg);
    }
</style>