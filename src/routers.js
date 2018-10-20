import addTodo from './components/TodoAdd.vue'
import Todolist from './components/Todolist.vue'

const routers = [
  {
    path: '/Todolist',
    name: 'Todolist',
    component: Todolist
  },
  {
    path: '/TodoAdd',
    name: 'addTodo',
    component: addTodo
  }
]
export default routers
