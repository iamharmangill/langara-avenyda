<template>
<b-container class="bv-example-row">
    <b-container class="bg-container p-4" fluid>
      <b-row>
        <b-col  class="text-left">
          <div class="mb-5">
            <h2 class="pb-5 my-5">Frequently asked questions</h2>
          </div>
        </b-col>
        <b-col>
            <img src="../assets/automobile-faqs.jpg" alt="" class="faqs-img">
        </b-col>
      </b-row>
    </b-container>

<b-container class="bg-container p-4" fluid>
<b-row class="questions">
<b-col>
 <b-card>
  <b-tabs pills card vertical>
    <b-tab  v-for="question in questions" :key="question.index" v-bind:title="question" active>
      <li v-for="answer in answers" :key="answer.index" >{{ answer }}</li>
    </b-tab>
  </b-tabs>
</b-card>
</b-col>
<b-col>
<b-card>
    <h2>Coudn't find an answer in this FAQ?</h2>
    <p>Sen us an email to question@avenyda.ca and we'll be happy to answer you!</p>
</b-card>
</b-col>

</b-row>
</b-container>


</b-container>
</template>

<script>



export default {
  name: 'Faqs',
  data () {
    return {
    questions:  ['What`s Avenyda?', 'How can I log in?', 'Can I get a refund?'],
    answers:  ['It`s a company. It`s a company. It`s a company. It`s a company.s', 'Ask support.', 'Contact us to solve this problem.'],
  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.faqs-img{
    width: 45vw;
}
.questions{
    margin-bottom: 100px;
}

</style>
