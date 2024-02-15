<script lang="ts">
export default {
  data() {
    return {
      text: '',

      scriptBlock: `
      # script block

      export default {
        data() {
          return {
            text: '',
          }
        },

        methods: {
          onInput(event) {
            this.text = event.target.value
          }
        }
      }
      `,

      templateBlock: `
      # template block

      <main>
        <input :value="text" @input="onInput">
        <p>{{ text }}</p>
      </main>
      `
    }
  },

  methods: {
    onInput(event) {
      this.text = event.target.value
    }
  }
}
</script>

<template>
  <main>
    <input :value="text" @input="onInput" />
    <p>{{ text }}</p>
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
