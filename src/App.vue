<template>
  <div id="nav">
    <Header></Header>
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> | 
    <router-link to="/employer/dashboard">Dashboard</router-link> -->
  </div>
  <router-view/>
  <div id="footer">
    <Footer/>
  </div>
</template>


<script>

import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import $ from 'jquery'

export default {

    components:{
      Header,
      Footer,
    }
}

</script>
<style>

</style>
