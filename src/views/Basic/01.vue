<script lang="ts">
export default {
  data() {
    return {
      isRed: true,
      color: 'green',

      scriptBlock: `
      # script block

      export default {
        data() {
          return {
            isRed: true,
            color: 'green',
          }
        },

        methods: {
          toggleRed() {
            this.isRed = !this.isRed
          },

          toggleColor() {
            this.color = this.color === 'green' ? 'blue' : 'green'
          }
        }
      }
      `,

      templateBlock: `
      # template block

      <main>
        <p :class="{ red: isRed }" @click="toggleRed">
          This should be red... but click me to toggle it.
        </p>

        <p :style="{ color }" @click="toggleColor">
          This should be green, and should toggle between green and blue on click.
        </p>
      </main>
      `,

      styleBlock: `
      # style block
      
      .red {
        color: red;
      }
      `
    }
  },

  methods: {
    toggleRed() {
      this.isRed = !this.isRed
    },

    toggleColor() {
      this.color = this.color === 'green' ? 'blue' : 'green'
    }
  }
}
</script>

<template>
  <main>
    <p :class="{ red: isRed }" @click="toggleRed">
      This should be red... but click me to toggle it.
    </p>

    <p :style="{ color }" @click="toggleColor">
      This should be green, and should toggle between green and blue on click.
    </p>
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
.red {
  color: red;
}
</style>
