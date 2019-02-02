<template>
   <b-navbar toggleable="md" type="light" variant="info">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-navbar-brand href="#">{{companyName}}</b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">

    <b-navbar-nav>
      <b-nav-item href="#">About Us</b-nav-item>
      <b-nav-item href="#" @click="goHome">Home</b-nav-item>
      <b-nav-item href="#" @click="goFaqs">Faqs</b-nav-item>
      <b-nav-item href="#">Contact Us</b-nav-item>
      
    </b-navbar-nav>

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">

      

      <b-nav-item-dropdown text="Lang" right>
        <b-dropdown-item href="#">EN</b-dropdown-item>
        <b-dropdown-item href="#">ES</b-dropdown-item>
        <b-dropdown-item href="#">RU</b-dropdown-item>
        <b-dropdown-item href="#">FA</b-dropdown-item>
      </b-nav-item-dropdown>

      <b-nav-item-dropdown right>
        <!-- Using button-content slot -->
        <template slot="button-content">
          <em>User</em>
        </template>
        <b-dropdown-item href="#">Profile</b-dropdown-item>
        <b-dropdown-item href="#">Signout</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>

  </b-collapse>
</b-navbar>

<!-- navbar-1.vue -->
</template>

<script>
export default {
    name:'Navbar',
    data(){
        return{
            companyName:'Avenyda'
        }
    },
    methods:{
        goHome(){
            this.$router.push({ name: 'Home'})
        },
        goFaqs(){
            this.$router.push({ name: 'Faqs'})
        }
    }
}
</script>

<style>
#app{
    margin-top:0;
    padding-top: 0;
}
</style>


