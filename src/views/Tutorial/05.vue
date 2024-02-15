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
      }
      `,

      templateBlock: `
      # template block

      <main>
        <input v-model="text" />
        <p>{{ text }}</p>
      </main>
      `
    }
  }
}
</script>

<template>
  <main>
    <input v-model="text" />
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
