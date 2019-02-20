<template>
  <b-container id="get-user" fluid>
    <b-row class="px-5" align-h="center">
      <div class="output-wrapper my-5">
        <button class="mx-4 mb-5 mt-4 pb-2" @click="loadUsers">Get User</button>
        <p>{{ users }}</p>
      </div>
    </b-row>
  </b-container>
</template>

<script>
  export default {
    name: 'GetUser',
    data () {
      return {
        users: []
      }
    },
    methods:{
      loadUsers: function() {
        // this.$http.get('https://wmdd-get-w5-r6ob455nc.now.sh',
        //  {
        //      headers: {
        //        'Access-Control-Allow-Origin': '*',
        //        'Access-Control-Allow-Methods': 'POST, GET, PUT, OPTIONS, DELETE',
        //        'Access-Control-Allow-Headers': 'Access-Control-Allow-Methods, Access-Control-Allow-Origin, Origin, Accept, Content-Type',
        //        'Content-Type': 'application/json',
        //        'Accept': 'application/json'
        //      }
        //    }
        //    ).then(function (response) {
        //
        //      console.log(response);
        //    }, function (response) {
        //      console.error(response);
        //    });
      this.$http.get('https://wmdd-get-w5-mn4s77bzu.now.sh', function(data, status, request){
        if(status == 200)
        {
          console.log(data);
          this.users = data;
        }
      });
    }
    }
  }
</script>

<style scoped>
  #get-user {
    background: linear-gradient(#1D3150, #3C6387, #3F5D7E);
  }

  /* .bform, a, #create-account-button {
    color: #454F63;
  } */

  .output-wrapper {
    width: 500px;
    height: auto;
    min-height: 300px;
    background-color: #fff;
    border-radius: 10px;
  }

  .output-wrapper h2 {
    border-bottom: 1px solid #EBEBEB;
  }

  /* #signin-submit-button {
    width: 100%;
    background-color: #3ACCE1;
    border: none;
  } */

  /* #create-account-button {
    width: 100%;
    background-color: #fff;
    border-color: #3ACCE1;
  } */

  /* p {
    text-align: center;
    border-bottom: 1px solid #EBEBEB;
  } */
</style>
