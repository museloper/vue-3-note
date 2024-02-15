<script lang="ts">
let id = 0

export default {
  data() {
    return {
      newTodo: '',
      todos: [
        { id: id++, text: 'HTML 배우기' },
        { id: id++, text: 'JavaScript 배우기' },
        { id: id++, text: 'Vue 배우기' }
      ],

      scriptBlock: `
      # script block

      let id = 0

      export default {
        data() {
          return {
            newTodo: '',
            todos: [
              { id: id++, text: 'HTML 배우기' },
              { id: id++, text: 'JavaScript 배우기' },
              { id: id++, text: 'Vue 배우기' }
            ],
          }
        },

        methods: {
          addTodo() {
            this.todos.push({ id: id++, text: this.newTodo })
            this.newTodo = ''
          },
          removeTodo(todo) {
            this.todos = this.todos.filter((t) => t !== todo)
          }
        }
      }
      `,

      templateBlock: `
      # template block

      <main>
        <form @submit.prevent="addTodo">
          <input v-model="newTodo" />
          <button>할 일 추가</button>
        </form>
        <ul>
          <li v-for="todo in todos" :key="todo.id">
            {{ todo.text }}
            <button @click="removeTodo(todo)">X</button>
          </li>
        </ul>
      </main>
      `
    }
  },

  methods: {
    addTodo() {
      this.todos.push({ id: id++, text: this.newTodo })
      this.newTodo = ''
    },
    removeTodo(todo) {
      this.todos = this.todos.filter((t) => t !== todo)
    }
  }
}
</script>

<template>
  <main>
    <form @submit.prevent="addTodo">
      <input v-model="newTodo" />
      <button>할 일 추가</button>
    </form>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        {{ todo.text }}
        <button @click="removeTodo(todo)">X</button>
      </li>
    </ul>
    <pre>
      <code>
        {{ scriptBlock }}
      </code>
      <code>
        {{ templateBlock }}
      </code>
      
    </pre>

    <RouterLink to="/tutorial">목록으로</RouterLink>
  </main>
</template>

<style></style>
