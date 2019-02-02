import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Faqs from '@/components/Faqs'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/faqs',
      name: 'Faqs',
      component: Faqs
    }
    
  ]
})



Faqs