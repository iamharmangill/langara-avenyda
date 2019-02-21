<template>
<b-container fluid>
<div class="top">
<div class="top-text">
  <h1>Parking's new best friend</h1>
  <p>Find convenient and affordable parking listed by locals</p>
  <button class="find-parking">
    FIND PARKING
  </button>
  <button class="list-parking">
    LIST YOUR PARKING
  </button>
</div>
</div>

<div role="tablist" class="questionsTable">
  <h1>Frequently asked questions</h1>
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-btn block href="#" v-b-toggle.accordion1 variant="info">What is Avenyda?</b-btn>
      </b-card-header>
      <b-collapse id="accordion1" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <p class="card-text">
            {{I start opened because <code>visible</code> is <code>true</code>}}
          </p>
          <p class="card-text">
            {{ text }}
          </p>
        </b-card-body>
      </b-collapse>
    </b-card>
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-btn block href="#" v-b-toggle.accordion2 variant="info">What is Avenyda?</b-btn>
      </b-card-header>
      <b-collapse id="accordion2" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <p class="card-text">
            {{text}}
          </p>
        </b-card-body>
      </b-collapse>
    </b-card>
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-btn block href="#" v-b-toggle.accordion3 variant="info">What is Avenyda?</b-btn>
      </b-card-header>
      <b-collapse id="accordion3" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <p class="card-text">
            {{ text }}
          </p>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
  </b-container>
</template>

<script>



export default {
  name: 'Faqs',
  data () {
    return {
      text: `
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
        richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
        brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
        tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
        assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
        wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
        vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
        synth nesciunt you probably haven't heard of them accusamus labore VHS.
      `
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .faqs-img{
    width: 45vw;
}
.questions{
    margin-bottom: 100px;
}
.bg-container {
    background-color: #ddd;
  } */


.top{
background-image: url("../assets/tyler-rutherford-1130939-unsplash.jpg");
background-size: 100vw;
background-repeat: no-repeat;
width: 100%;
padding-left: 137px;
}
.top-text{
  width: 35vw;
  padding-bottom: 7vh;
}
h1{
  color: white;
  font-weight: bold;
  font-size: 50px;
  padding-top: 150px;
  text-align: left;
}
p{
  color: white;
  padding: 0;
  margin-left: 0;
  text-align: left;
}
.find-parking{
background: #3ACCE1;
color: white;
border: 2px solid white;
display: block;
margin-bottom: 10px;
margin-top: 30px;
font-size: 14px;
}
.list-parking{
background: transparent;
color: white;
border: 2px solid #3ACCE1;
display: block;
font-size: 14px;
}
.container-fluid{
  padding: 0;
}
.card-text{
  color: #454F63;
}
.questionsTable{
  width: 70vw;
  margin-left: 139px;

}
.questionsTable h1{
  color: #454F63;
  margin-bottom: 5vh;
}
.btn-info{
  background: transparent;
  color: #454F63;
  border: none;
  text-align: start;
  font-weight: bold;
}
.card-header{
  border-bottom: 3px solid black;
  background: transparent;
}
.mb-1{
  border: none;
}

</style>
