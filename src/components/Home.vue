<template>
  <div id="home">
    <b-container class="bg-container p-5" fluid>
      <b-row>
        <b-col cols="4" class="text-left head-links">
          <div class="mb-5">
            <h2 class="pb-5 my-5">Lorem Ipsum Dolor Sit Amet Consectetur</h2>
            <b-button href="#" variant="primary" class="mr-2">Find a Parking Spot</b-button>
            <b-button href="#" variant="primary">List Your Parking Spot</b-button>
          </div>
        </b-col>
        <b-col></b-col>
        <b-col cols='4'>
          <CreateAccount />
        </b-col>
      </b-row>
    </b-container>
    <b-container class="p-5" fluid>
      <b-row>
        <b-col cols="4" class="text-left">
          <h2 class="my-5 pt-5">Parking with Avenyda</h2>
          <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Donec elementum ligula eu sapien</p>
        </b-col>
        <b-col>
          <b-img right src="../assets/maps-placeholder.png" fluid alt="maps placeholder" class="pl-5"/>
        </b-col>
      </b-row>
    </b-container>
    <b-container class="p-5 bg-container" fluid>
      <b-row>
        <b-col cols="4" class="text-left">
          <h2 class="my-5 pt-5">Why Avenyda?</h2>
          <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Donec elementum ligula eu sapien</p>
        </b-col>
        <b-col>
          <b-img right src="../assets/more-info-placeholder.png" fluid alt="more info placeholder" class="pl-5"/>
        </b-col>
      </b-row>
    </b-container>
    <b-container class="p-5" fluid>
      <h2 class="my-5 pb-4">List your parking</h2>
      <b-row>
        <b-col>
          <b-img rounded="circle" blank width="250" height="250" blank-color="#ddd" alt="img" class="m-1" />
          <div class="mb-5 px-5">
            <h3 class="pt-4 pb-2">Lorem Impsum</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </b-col>
        <b-col>
          <b-img rounded="circle" blank width="250" height="250" blank-color="#ddd" alt="img" class="m-1" />
          <div class="mb-5 px-5">
            <h3 class="pt-4 pb-2">Lorem Impsum</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </b-col>
        <b-col>
          <b-img rounded="circle" blank width="250" height="250" blank-color="#ddd" alt="img" class="m-1" />
          <div class="mb-5 px-5">
            <h3 class="pt-4 pb-2">Lorem Impsum</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <b-container class="p-5 bg-container" fluid>
      <b-row>
        <b-col cols="4" class="text-left">
          <h2 class="my-5 pt-5">What our custumers have to say</h2>
        </b-col>
        <b-col>
          <Carousel />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  import CreateAccount from '@/components/CreateAccount'
  import Carousel from '@/components/Carousel'

  export default {
    name: 'Home',
    data () {
      return {
        companyName:'Avenyda'
      }
    },
    components: {
      CreateAccount,
      Carousel
    }
  }
</script>

<style scoped>
  #home {
    min-height: 1000px;
  }

  h2 {
    font-size: 3rem;
  }

  h3 {
    font-size: 2rem;
  }

  .bg-container {
    background-color: #ddd;
  }

  .head-links {
    position: relative;
  }

  .head-links div {
    position: absolute;
    bottom: 0px;
  }
</style>
