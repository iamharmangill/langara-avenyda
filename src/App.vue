<template>
  <div id="app">
    <Navbar/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'


export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
  #app {
    font-family: acumin-pro, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #1D3150;
    margin-top: 60px;
  }
</style>
