<template>
  <!-- TODO: make it responsive (mobile view) -->
  <div id="footer">    
    <b-container class="sticky-bottom bg-dark text-light py-5 px-5" fluid>
      <b-row>
        <b-col class="text-left pr-5 mr-5">
          <div class="mb-3">
            <b-img class="logo" src="../assets/Logo/logo-white.svg" alt="Avenyda logo" />
          </div>
          <small>Address: Lorem ipsum dolor sit amet, consectetur adipisicing elit.</small>
          <div class="social-icons py-4">
            <font-awesome-icon :icon="['fab', 'facebook']" class="fa-2x mr-2" />
            <font-awesome-icon :icon="['fab', 'instagram']" class="fa-2x mr-2" />
            <font-awesome-icon :icon="['far', 'envelope']" class="fa-2x" />
          </div>
        </b-col>
        <b-col class="text-left px-3">
          <h2 class="mb-4">Parking</h2>
          <ul>
            <li>How it works</li>
            <li>List your space</li>
            <li>Find a parking spot</li>
            <li>FAQs</li>
          </ul>
        </b-col>
        <b-col class="text-left px-3">
          <h2 class="mb-4">Avenyda</h2>
          <ul>
            <li>About us</li>
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
            <li>Refound Policy</li>
          </ul>
        </b-col>
        <b-col class="text-left px-3">
          <h2 class="mb-4">Search</h2>
          <small>Enter your email to receive news and updates</small>
          <b-form-input class="mt-3 w-75" size="sm" type="text" placeholder="Ex.: johndoe@gmail.com"/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name:'Footer',
    data(){
      return{
        companyName:'Avenyda'
      }
    }
  }
</script>

<style scoped>
  ul {
    list-style-type: none;
  }

  .logo {
    width: 100%;
    height: auto;
  }
</style>
