<template>
   <b-navbar toggleable="md" type="light" variant="info" class="bg-dark ">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-nav-item @click="goHome" class="logo-nav-a">
    <img src="../assets/logo.png" alt=""  class="logo-nav">
    </b-nav-item>

  <b-collapse is-nav id="nav_collapse">

    <b-navbar-nav>
      <b-nav-item href="#">HOW IT WORKS</b-nav-item>
      <b-nav-item href="#" @click="goFaqs">FAQ</b-nav-item>
      <b-nav-item href="#">CONTACT</b-nav-item>
      
    </b-navbar-nav>

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">
        <div>
        <p>Email</p>
        <b-form-input v-model="text1"
                  type="text"
                  placeholder="eg.eduardo.landa@outlook.com"></b-form-input>
        </div>

        <div>
        <p>Password</p>
        <b-form-input v-model="text2"
                  type="text"
                  placeholder="●●●●●●●●●"></b-form-input>
        </div>

        <div class="SignAlign">
        <b-button>Sign in</b-button>
        <b-form-checkbox id="checkbox1"
                     v-model="status"
                     value="accepted"
                     unchecked-value="not_accepted">
      Remember me
    </b-form-checkbox>
        </div>
         
      

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
            companyName:'Avenyda',
            text1: '',
            text2: '',
            status: 'not_accepted'
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
.navbar,.nav-link{
    color: white;
}
.navbar-light .navbar-nav .nav-link{
    color: white;
}
.nav-pills {
    color: black;
}
.ml-auto{
display:grid;
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: auto auto;
grid-column-gap: 7px;
}
.ml-auto p{
    margin: 0;
    text-align: start;
}
.SignAlign{
    display: grid;
    grid-template-rows: 1fr 1fr;
    margin-top: 1rem;
}
.bv-example-row{
      text-align: center;
  }
@media (min-width: 768px){
.logo-nav{
    width: 100%;
}
.logo-nav-a{
    width: 25%;
    list-style: none;
}
}
@media (max-width: 768px){
.logo-nav{
    width: 25%;
}
.logo-nav-a{
    list-style: none;
}
.logo-nav-a{
    width: 82vw;
}
}
</style>


