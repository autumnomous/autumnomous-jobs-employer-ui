<template>
       <step-form-card :active="activeStep === '4'" id="step-4">

                    <template v-slot:cardheader> Select Payment Method</template>
                    <template v-slot:cardbody>
                         <!-- Form Group -->
                      <div class="form-group">
                        <label for="paymentmethod" class="input-label">Payment Method</label>
                        
                        <!-- Select -->
                        <select v-model="v$.paymentMethod.method" id="paymentmethod" class="js-custom-select custom-select dropdown-toggle" size="1" style="opacity: 1;" name="paymentmethod" :class="{ 'is-invalid': v$.paymentMethod.method.$error}">
                          <option value="ach">ACH</option>
                          <option value="credit">Credit Card</option>
                          <option value="paypal">Paypal</option>
                        </select>
                        <!-- End Select -->

                         <div class="input-errors" v-for="error of v$.paymentMethod.$errors" :key="error.$uid">
                                    <div class="error-msg">{{ error.$message }}</div>
                                    </div>
                      </div>
                      <!-- End Form Group -->
                    </template>

                    <template v-slot:cardfooter>
                            <div class="ml-auto">
                                <button type="button" class="btn btn-primary" id="select-payment-method-button" @click="nextStep">
                                Save and continue <i class="fas fa-angle-right ml-1"> </i>
                                </button>
                            </div>
                    </template>

                </step-form-card>
</template>

<script>


    import AlertError from '../../ui/AlertError.vue'
    import StepFormCard from '../../ui/step-form/StepFormCard.vue'
    import useVuelidate from '@vuelidate/core'
    import { helpers, required, minLength, sameAs, url } from '@vuelidate/validators'
    export default {
        setup(){
            return {
                 v$: useVuelidate()
            }
        },
        components:{
            StepFormCard,
            AlertError
        },
        data(){
            return { 
                paymentMethod:""
            }
        },
        validations(){
            return { 
                paymentMethod:{}
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>