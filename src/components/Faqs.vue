<template>
<b-container class="bv-example-row">
    <b-row>
        <b-col>
    <ul>
        <li v-for="question in questions" :key="question.index">{{ question }}</li>
    </ul>
        </b-col>
        <b-col>
    <ul>
        <li v-for="answer in answers" :key="answer.index">{{ answer }}</li>
    </ul>
        </b-col>
    </b-row>
</b-container>
</template>

<script>



export default {
  name: 'Faqs',
  data () {
    return {
    questions:  ['What`s Avenyda?', 'How can I log in?', 'Can I get a refund?'],
    answers:  ['It`s a company.', 'Ask support.', 'Contact us to solve this problem.'],
  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
