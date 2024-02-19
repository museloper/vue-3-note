<script lang="ts">
export default {
  data() {
    return {
      todoId: 1,
      todoData: null,

      scriptBlock: `
      # script block

      export default {
        data() {
          return {
            todoId: 1,
            todoData: null,
          }
        },

        methods: {
          async fetchData() {
            this.todoData = null
            const res = await fetch(\`https://jsonplaceholder.typicode.com/todos/${this.todoId}\`)
            this.todoData = await res.json()
          }
        },

        mounted() {
          this.fetchData()
        },

        watch: {
          todoId() {
            this.fetchData()
          }
        }
      }
      `,

      templateBlock: `
      # template block

      <main>
        <p>할 일 id: {{ todoId }}</p>
        <button @click="todoId++">다음 할 일 가져오기</button>
        <p v-if="!todoData">로딩...</p>
        <pre v-else>{{ todoData }}</pre>
      </main>
      `
    }
  },

  methods: {
    async fetchData() {
      this.todoData = null
      const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${this.todoId}`)
      this.todoData = await res.json()
    }
  },

  mounted() {
    this.fetchData()
  },

  watch: {
    todoId() {
      this.fetchData()
    }
  }
}
</script>

<template>
  <main>
    <p>할 일 id: {{ todoId }}</p>
    <button @click="todoId++">다음 할 일 가져오기</button>
    <p v-if="!todoData">로딩...</p>
    <pre v-else>{{ todoData }}</pre>
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
