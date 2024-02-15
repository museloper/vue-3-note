<script lang="ts">
let id = 0

export default {
  data() {
    return {
      newTodo: '',
      hideCompleted: false,
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
            hideCompleted: false,
            todos: [
              { id: id++, text: 'HTML 배우기' },
              { id: id++, text: 'JavaScript 배우기' },
              { id: id++, text: 'Vue 배우기' }
            ],
          }
        },

        computed: {
          filteredTodos() {
            return this.hideCompleted ? this.todos.filter((t) => !t.done) : this.todos
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
          <li v-for="todo in filteredTodos" :key="todo.id">
            {{ todo.text }}
            <button @click="removeTodo(todo)">X</button>
          </li>
        </ul>
        <button @click="hideCompleted = !hideCompleted">
          {{ hideCompleted ? 'Show all' : 'Hide completed' }}
        </button>
      </main>
      `,

      styleBlock: `
      # style block

      .done {
        text-decoration: line-through;
      }
      `
    }
  },

  computed: {
    filteredTodos() {
      return this.hideCompleted ? this.todos.filter((t) => !t.done) : this.todos
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
      <li v-for="todo in filteredTodos" :key="todo.id">
        <input type="checkbox" v-model="todo.done" />
        <span :class="{ done: todo.done }">{{ todo.text }}</span>
        <button @click="removeTodo(todo)">X</button>
      </li>
    </ul>
    <button @click="hideCompleted = !hideCompleted">
      {{ hideCompleted ? 'Show all' : 'Hide completed' }}
    </button>
    <pre>
      <code>
        {{ scriptBlock }}
      </code>
      <code>
        {{ templateBlock }}
      </code>
      <code>
        {{ styleBlock }}
      </code>
      
    </pre>

    <RouterLink to="/tutorial">목록으로</RouterLink>
  </main>
</template>

<style>
.done {
  text-decoration: line-through;
}
</style>
