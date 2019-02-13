




<template >
  <div class="contactPage">
      <h1>Get in touch</h1>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      
      <b-form-group id="exampleInputGroup2"
                    label="Your Name:"
                    label-for="exampleInput2">
        <b-form-input id="exampleInput2"
                      type="text"
                      v-model="form.name"
                      required
                      placeholder="Enter name">
        </b-form-input>
      </b-form-group>


      <b-form-group id="exampleInputGroup1"
                    label="EMAIL"
                    label-for="exampleInput1"
                    >
        <b-form-input id="exampleInput1"
                      type="email"
                      v-model="form.email"
                      required
                      placeholder="eg. edland@langara.ca">
        </b-form-input>
      </b-form-group>


      <b-form-group id="exampleInputGroup3"
                    label="PHONE"
                    label-for="exampleInput2">
        <b-form-input id="exampleInput2"
                      type="text"
                      v-model="form.phone"
                      required
                      placeholder="eg. +1 778 000 300">
        </b-form-input>
      </b-form-group>


      <b-form-group id="exampleInputGroup4"
                    label="MESSAGE"
                    label-for="exampleInput2">
        <b-form-input id="exampleInput2"
                      type="text"
                      v-model="form.message"
                      required
                      placeholder="Type your message here">
        </b-form-input>
      </b-form-group>





      <b-button type="submit" variant="primary">Submit</b-button>
      <!-- <b-button type="reset" variant="danger">Reset</b-button> -->
    </b-form>
  </div>
</template>

<script>
export default {
    name:'Contact',
  data () {
    return {
      form: {
        email: '',
        name: '',
        phone:'',
        message:''
      },
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    // },
    // onReset (evt) {
    //   evt.preventDefault();
    //   /* Reset our form values */
    //   this.form.email = '';
    //   this.form.name = '';
    //   this.form.phone = '';
    //   this.form.message ='';
    //   /* Trick to reset/clear native browser form validation state */
    //   this.show = false;
    //   this.$nextTick(() => { this.show = true });
    // }
  }
}
}
</script>




<style scoped>
h1{
    text-align: start;
    color: white;
    padding-top: 10vh;
}
.col-form-label{
    color: white !important;
}

.contactPage{
    background-image: url("../assets/alexandra-kirr-322679-unsplash.jpg");
    background-repeat: no-repeat;
    object-fit: cover;
}
form{
    padding-bottom: 10vh;
}
input{
    background: transparent !important;
}
@media (max-width: 768px){
form{
    width: 70vw;
    margin: 0 auto;
}
.contactPage{
    /* background-size: 120vh; */
}
}

@media (min-width: 768px){
form{
    width: 30vw;
    margin-left: 10vw;
}
h1{
    margin-left:10vw;
}
.contactPage{
    background-size: 100vw;
    /* height: max-height; */
}
}
</style>
