<script lang="ts">
export default {
  data() {
    return {
      scriptBlock: `
      # script block

      export default {
        data() {
          return {
          }
        },

        mounted() {
          this.$refs.p.textContent = 'This is REF!'
        }
      }
      `,

      templateBlock: `
      # template block

      <main>
        <p>Hello</p>
        <p ref="p">Hello</p>
      </main>
      `
    }
  },

  mounted() {
    this.$refs.p.textContent = 'This is REF!'
  }
}
</script>

<template>
  <main>
    <p>Hello</p>
    <p ref="p">Hello</p>
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
