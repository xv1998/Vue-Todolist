<template>
  <div id="addTodo">
    <input
      type="text"
      name=""
      class="input"
      value="用enter提交"
      v-model="todo"
      @keyup.enter="addTodo"
    >
  </div>
</template>
<script>
export default {
  name: 'TodoAdd',
  data: () => ({
    todo: ''
  }),
  methods: {
    addTodo () {
      if (this.todo) {
        this.$router.push({
          name: 'Todolist',
          params: {
            'info': this.todo
          }
        })
        this.todo = ''
      } else {
        alert('内容不能为空')
      }
    }
  }
}
</script>
<style scoped>
.input {
  width: 600px;
  padding:8px;
  border-radius:4px;
  border: 1px solid #ccc;
  height:20px;
}
</style>
