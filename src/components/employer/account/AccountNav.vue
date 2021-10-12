<template>
    <div class="col-lg-3">
        <!-- Navbar -->
        <div class="navbar-expand-lg navbar-expand-lg-collapse-block navbar-light">
            <div id="sidebarNav" class="collapse navbar-collapse navbar-vertical">
            <!-- Card -->
            <div class="card mb-5">
                <div class="card-body">
                <!-- Avatar -->
                <div class="d-none d-lg-block text-center mb-5">
                    <h4 class="card-title">Natalie Curtis</h4>
                    <p class="card-text font-size-1">natalie@example.com</p>
                </div>
                <!-- End Avatar -->

                <!-- Nav -->
                <h6 class="text-cap small">Account</h6>

                <!-- List -->
                <ul class="nav nav-sub nav-sm nav-tabs nav-list-y-2 mb-4">
                <li class="nav-item">
                    <a class="nav-link" @click='changeActive("personal-information")' :class="{'active': isActive=='personal-information'}">
                    <i class="fas fa-id-card nav-icon"></i> Basic info
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" @click='changeActive("login-security")' :class="{'active': isActive=='login-security'}">
                    <i class="fas fa-shield-alt nav-icon"></i> Login &amp; security
                    </a>
                </li>
            </ul>
        <!-- End List -->

        <h6 class="text-cap small">Company Information</h6>

        <!-- List -->
        <ul class="nav nav-sub nav-sm nav-tabs nav-list-y-2 mb-4">
            <li class="nav-item">
                <a class="nav-link" @click='changeActive("company-details")' :class="{'active': isActive=='company-details'}">
                <i class="fas fa-shopping-basket nav-icon"></i> Your Company
                </a>
            </li>
        </ul>
        <!-- End List -->

        <h6 class="text-cap small">Payment Information</h6>

        <!-- List -->
        <ul class="nav nav-sub nav-sm nav-tabs nav-list-y-2">
        <li class="nav-item">
            <a class="nav-link @@if(link=='account-billing.html'){active}" href="account-billing.html">
            <i class="fas fa-credit-card nav-icon"></i> Payment Method
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link @@if(link=='account-address.html'){active}" href="account-address.html">
            <i class="fas fa-map-marker-alt nav-icon"></i> Payment Details
            </a>
        </li>
        </ul>
        <!-- End List -->

        <div class="d-lg-none">
        <div class="dropdown-divider"></div>

        <!-- List -->
        <ul class="nav nav-sub nav-sm nav-tabs nav-list-y-2">
            <li class="nav-item">
            <a class="nav-link text-primary" href="#">
                <i class="fas fa-sign-out-alt nav-icon"></i> Log out
            </a>
            </li>
        </ul>
        <!-- End List -->
        </div>
                        <!-- End Nav -->
                        </div>
                    </div>
                    <!-- End Card -->
                    </div>
                </div>
                <!-- End Navbar -->
    
    </div>
</template>

<script>
    export default {
        data(){
            return{
                isActive:"personal-info"
            }
        },
        methods:{

            changeActive(newActive){
                this.isActive = newActive;
                this.$emit('change-active', newActive);
            }
        }
    }
</script>

<style scoped>

    .nav-link{
        cursor: pointer;
    }
</style>