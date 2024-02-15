<script lang="ts">
export default {
  data() {
    return {
      count: 0,

      scriptBlock: `
      # script block

      export default {
        data() {
          return {
            count: 0,
          }
        },

        methods: {
          increment() {
            this.count++
          }
        }
      }
      `,

      templateBlock: `
      # template block

      ✅ 버튼을 클릭해서 숫자 카운트를 올려보세요 ⏩
      <main>
        <button @click="increment">{{ count }}</button>
      </main>
      `
    }
  },

  methods: {
    increment() {
      this.count++
    }
  }
}
</script>

<template>
  <main>
    ✅ 버튼을 클릭해서 숫자 카운트를 올려보세요 ⏩
    <button @click="increment">{{ count }}</button>
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
