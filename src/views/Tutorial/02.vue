<script lang="ts">
export default {
  data() {
    return {
      titleClass: 'title',

      scriptBlock: `
      # script block

      export default {
        data() {
          return {
            titleClass: 'title'
          }
        }
      }
      `,

      templateBlock: `
      # template block

      <main>
        <h1 v-bind:class="titleClass">I am "RED"</h1>
      </main>
      `,

      styleBlock: `
      # style block

      .title {
        color: red;
      }
      `
    }
  }
}
</script>

<template>
  <main>
    <h1 v-bind:class="titleClass">I am "RED"</h1>
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
.title {
  color: red;
}
</style>
