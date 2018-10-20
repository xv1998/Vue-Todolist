<template>
  <div id="todoList">
    <h1>Todo List</h1>
    <div class="addList">
      <router-link v-bind:to="'/TodoAdd'">
        <button>添加计划</button>
      </router-link>
    </div>
    <ul class="todos">
      <li v-for="(todo, index) in todos" :key="todo.num" class="todo" v-if="!todo.isCompleted">
        <input
          type="checkbox"
          name=""
          value=""
          :checked="todo.isCompleted"
          @click="completed(index)"
        >
          <em>{{ index }}.</em>{{ todo.text }}
        <button type="button"
                name="button"
                class="btn"
                @click="removeTodo(index)"
        >
          ×
        </button>
      </li>
    </ul>
    <div>
      <p v-show="todos.length === 0">
        恭喜！所有的事情都已完成！
      </p>
      <p v-show="todos.length !== 0">
        共 <strong>{{ todos.length }}</strong> 个待办事项。{{ completedCounts }} 个已完成，{{ notCompletedCounts }} 个未完成。
      </p>
      <button
        class="btn"
        @click="finished"
      >
        显示已完成任务
      </button>
      <li v-for="(todo, index) in todos" :key="todo.num" class="todo" :class="isHide ? 'hide' : 'show'" v-if="todo.isCompleted">
        <span
          class="completed"
        >
          <em>{{ index }}.</em>{{ todo.text }}
        </span>
      </li>
    </div>
  </div>
</template>
<script>

let nextTodoId = 0
export default {
  name: 'TodoList',
  data: () => ({
    isHide: true,
    add: '',
    todos: [{
      text: '吃饭',
      num: nextTodoId++,
      isCompleted: false
    }, {
      text: '睡觉',
      num: nextTodoId++,
      isCompleted: false
    }]
  }),
  methods: {
    completed (index) {
      this.todos[index].isCompleted = !this.todos[index].isCompleted
    },
    addTodo () {
      this.todos.push({
        text: this.add,
        num: nextTodoId++,
        isCompleted: false
      })
    },
    removeTodo (index) {
      this.todos.splice(index, 1)
    },
    finished () {
      this.isHide = !this.isHide
    }
  },
  created () {
    // eslint-disable-next-line
    var add = this.$route.params.info;
    if (add) {
      this.add = add
      this.todos.push({
        text: this.add,
        num: nextTodoId++,
        isCompleted: false
      })
    }
  },
  computed: {
    completedCounts () {
      return this.todos.filter(item => item.isCompleted).length
    },
    notCompletedCounts () {
      return this.todos.filter(item => !item.isCompleted).length
    }
  }
}
</script>
<style scoped>
#todoList {
  margin: 0 auto;
  max-width: 600px;
}
.todos li {
  display: block;
  list-style: none;
}
.todo {
  text-align: left;
  cursor: pointer;
  margin: 10px 0;
}
.completed {
  text-decoration: line-through;
}
.btn {
  float: right;
  border-radius: 5px;
  background-color:#900000;
  margin:0;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
}
.hide{
  display: none;
}
.show{
  display: block;
}
.addList{
  margin-top: 10px;
  text-align: center;
}
</style>
