import Vue from 'vue'
import Router from 'vue-router'
import Questionslist from '@/components/Questionslist'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Questions',
      component: Questionslist
    }
  ]
})
