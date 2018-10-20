import Vue from 'vue'
import Router from 'vue-router'
import Todolist from '@/components/Todolist'
import TodoAdd from '@/components/TodoAdd'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Todolist',
      component: Todolist
    },
    {
      path: '/TodoAdd',
      name: 'TodoAdd',
      component: TodoAdd
    }
  ]
})
