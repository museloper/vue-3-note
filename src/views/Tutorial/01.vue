<script lang="ts">
export default {
  data() {
    return {
      message: 'Hello Vue!',

      scriptBlock: `
      # script block

      export default {
        data() {
          return {
            message: 'Hello Vue!',
          }
        },
      }
      `,

      templateBlock: `
      # template block

      <main>
        <h1>{{ message }}</h1>
      </main>
      `
    }
  }
}
</script>

<template>
  <main>
    <h1>{{ message }}</h1>
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
