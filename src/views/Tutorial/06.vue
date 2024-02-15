<script lang="ts">
export default {
  data() {
    return {
      awesome: true,

      scriptBlock: `
      # script block

      export default {
        data() {
          return {
            awesome: true,
          }
        },

        methods: {
          toggle() {
            if (this.awesome) this.awesome = false
            else this.awesome = true
          }
        }
      }
      `,

      templateBlock: `
      # template block

      <main>
        <button @click="toggle">toggle</button>
        <h1 v-if="awesome">Vue is awesome!</h1>
        <h1 v-else>Oh no 😢</h1>
      </main>
      `
    }
  },

  methods: {
    toggle() {
      if (this.awesome) this.awesome = false
      else this.awesome = true
    }
  }
}
</script>

<template>
  <main>
    <button @click="toggle">toggle</button>
    <h1 v-if="awesome">Vue is awesome!</h1>
    <h1 v-else>Oh no 😢</h1>
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
