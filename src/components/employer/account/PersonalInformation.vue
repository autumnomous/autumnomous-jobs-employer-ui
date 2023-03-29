<template>

    <the-card :active="true">

        <template v-slot:cardheader>Personal Information</template>
        <template v-slot:cardbody>
            <form>
            <!-- Form Group -->
            <div class="row form-group">
            <label for="firstNameLabel" class="col-sm-3 col-form-label input-label">Full name <i class="far fa-question-circle text-body ml-1" data-toggle="tooltip" data-placement="top" title="Displayed on public forums, such as Front."></i></label>

            <div class="col-sm-9">
                <div class="input-group">
                <input type="text" class="form-control" name="firstName" id="firstNameLabel" aria-label="First Name" v-model="firstname">
                <input type="text" class="form-control" name="lastName" id="lastNameLabel" aria-label="Last Name" v-model="lastname">
                </div>
            </div>
            </div>
            <!-- End Form Group -->

            <!-- Form Group -->
            <div class="row form-group">
                <label for="emailLabel" class="col-sm-3 col-form-label input-label">Email</label>

                <div class="col-sm-9">
                    <input type="email" class="form-control" name="email" id="emailLabel" aria-label="Email" v-model="email">
                </div>
            </div>
            <!-- End Form Group -->

            <!-- Form Group -->
            <div class="row form-group">
                <label for="phoneLabel" class="col-sm-3 col-form-label input-label">Phone <span class="input-label-secondary">(Optional)</span></label>

                <div class="col">
                
                    <div class="phone-container">
                        <div class="input-group align-items-center">
                            <div class="input-group-append">

                                <span class="phone-type" name="phoneSelect">Mobile</span>
                        
                            </div>
                            <input type="text" class="js-masked-input form-control" name="phone" id="phoneLabel" placeholder="+x(xxx)xxx-xx-xx" aria-label="+x(xxx)xxx-xx-xx" v-model="mobilenumber"
                                    data-hs-mask-options='{
                                    "template": "+0(000)000-00-00"
                                    }'>

                            
                            
                        </div>

                    </div>

                    <div class="phone-container">
                        <div class="input-group align-items-center">
                            <div class="input-group-append">

                                <span class="phone-type" name="phoneSelect">Work</span>
                        
                            </div>
                            <input type="text" class="js-masked-input form-control" name="phone" id="phoneLabel" placeholder="+x(xxx)xxx-xx-xx" aria-label="+x(xxx)xxx-xx-xx" v-model="phonenumber"
                                    data-hs-mask-options='{
                                    "template": "+0(000)000-00-00"
                                    }'>

                            
                            
                        </div>

                    </div>

                </div>
                

            </div>
            <!-- End Form Group -->

            <div class="row form-group" >
                <label for="role" class="col-sm-3 col-form-label input-label">Facebook</label>

                <div class="col-sm-9 input-group">
                    <span class="input-group-text" >https://facebook.com/</span>
                    <input v-model.lazy="facebook" type="text" class="form-control" name="role" id="role" aria-label="Facebook">
                </div>
            </div>

            <div class="row form-group" >
                <label for="role" class="col-sm-3 col-form-label input-label">Twitter</label>

                <div class="col-sm-9 input-group">
                    <span class="input-group-text" >https://twitter.com/</span>
                    <input v-model.lazy="twitter" type="text" class="form-control" name="role" id="role" aria-label="Twitter">
                </div>
            </div>

            <div class="row form-group" >
                <label for="role" class="col-sm-3 col-form-label input-label">Instagram</label>

                <div class="col-sm-9 input-group">
                    <span class="input-group-text" >https://instagram.com/</span>
                    <input v-model.lazy="instagram" type="text" class="form-control" name="role" id="role" aria-label="Instagram">
                </div>
            </div>


            <div class="row form-group" >
                    <label for="role" class="col-sm-3 col-form-label input-label">Role</label>

                    <div class="col-sm-9">

                         <!-- Select -->
                        <select v-model="role" class="js-custom-select custom-select dropdown-toggle" size="1" style="opacity: 1;" name="role">
                            <option value="" selected>Select One</option>
                            <option value="administrator">Administrator</option>
                            <option value="assistant-manager">Assistant Manager</option>
                            <option value="ceo">CEO</option>
                            <option value="chief">Chief</option>
                            <option value="coordinator">Coordinator</option>
                            <option value="controller">Controller</option>
                            <option value="director">Director</option>
                            <option value="executive">Executive</option>
                            <option value="foreman">Foreman</option>
                            <option value="founder">Founder</option>
                            <option value="head">Head</option>
                            <option value="lead">Lead</option>
                            <option value="manager">Manager</option>
                            <option value="managing-member">Managing Member</option>
                            <option value="managing-partner">Managing Partner</option>
                            <option value="officer">Officer</option>
                            <option value="organizer">Organizer</option>
                            <option value="owner">Owner</option>
                            <option value="president">President</option>
                            <option value="principal">Principal</option>
                            <option value="proprietor">Proprietor</option>
                            <option value="supervisor">Supervisor</option>
                            <option value="superintendent">Superintendent</option>
                            <option value="team-leader">Team Leader</option>
                        </select>
                        <!-- End Select -->
                    </div>
            </div>
        </form>
        </template>

        <template v-slot:cardfooter>
            <a class="btn btn-white" @click="cancel">Cancel</a>
            <span class="mx-2"></span>
            <a class="btn btn-primary" @click="formSubmit">Save Changes</a>
        </template>
    </the-card>


</template>

<script>
    import TheCard from '../../ui/TheCard.vue'
    export default {
       
       components:{
           TheCard
       },
       async created(){
            this.token = this.$cookies.get('com.ajobs.employer');
          
            this.employer = await fetch(process.env.VUE_APP_BIT_API_PATH + "/employer/get",
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + this.token
                    }
                }
                ).then(result =>{

                    if(!result.ok){
                        console.log(result)
                        return result
                    }
                    return result.json()

                })

            if(this.employer){ 
                this.firstname = this.employer.firstname;
                this.lastname = this.employer.lastname;
                this.email = this.employer.email;
                this.mobilenumber = this.employer.mobilenumber;
                this.phonenumber = this.employer.phonenumber;
                this.role = this.employer.role;
                this.facebook = this.employer.facebook;
                this.twitter = this.employer.twitter;
                this.instagram = this.employer.instagram;
            }

       },

        data(){
            return  {
                employer:{},
                token:"",
                firstname:"",
                lastname:"",
                email:"",
                mobilenumber:"",
                phonenumber:"",
                role:"",
                facebook:"",
                twitter:"",
                instagram:""
            }
        },

        methods:{
            cancel(){
                this.firstname = this.employer.firstname;
                this.lastname = this.employer.lastname;
                this.email = this.employer.email;
                this.mobile = this.employer.mobilenumber;
                this.phonenumber = this.employer.phonenumber;
                this.role = this.employer.role;
                this.facebook = this.employer.facebook;
                this.twitter = this.employer.twitter;
                this.instagram = this.employer.instagram;
            },
            async formSubmit(){
                
                this.employer = await fetch(process.env.VUE_APP_BIT_API_PATH + "/employer/update-account",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: "Bearer " + this.token
                        }, 
                        body: JSON.stringify({
                            firstname: this.firstname, 
                            lastname: this.lastname,
                            email: this.email, 
                            mobilenumber: this.mobilenumber,
                            phonenumber: this.phonenumber,
                            role: this.role, 
                            facebook: this.facebook, 
                            twitter: this.twitter, 
                            instagram: this.instagram
                        })
                    }
                    ).then(result =>{

                        if(!result.ok){
                            console.log(result)
                            return result
                        }
                        return result.json()

                    })

            }
        }
    }
</script>

<style scoped>

    .phone-type{ 
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        border-top-left-radius: 0.3125rem;
        border-bottom-left-radius: 0.3125rem;
        border: 0.0625rem solid #e7eaf3;
        background-color: 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
        background: #fff no-repeat right 0.5rem center/1rem 1rem;
        display: inline-block;
        width:110px;
        height: calc(1.6em + 1.625rem);
        padding: 0.75rem 2rem 0.75rem 1rem;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.6;
        color: #1e2022;
        vertical-align: middle;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        box-sizing: border-box;
    }

    .phone-container{ 
        margin-top:5px;
    }
</style>