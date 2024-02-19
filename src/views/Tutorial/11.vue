<script lang="ts">
import ChildComp from './11-1.vue'

export default {
  data() {
    return {
      parent: true,
      name: '자식 컴포넌트 보기',

      parentScriptBlock: `
      # script block

      import ChildComp from './11-1.vue'

      export default {
        components: {
          ChildComp
        }
      }
      `,

      parentTemplateBlock: `
      # template block

      <main>
        <ChildComp />
      </main>
      `,

      childScriptBlock: `
      # script block

      export default {}
      `,

      childTemplateBlock: `
      # template block

      <main>
        <h2>자식 컴포넌트입니다!</h2>
      </main>
      `
    }
  },

  components: {
    ChildComp
  },

  methods: {
    toggle() {
      this.parent = !this.parent
      if (this.name == '자식 컴포넌트 보기') {
        this.name = '부모 컴포넌트 보기'
      } else {
        this.name = '자식 컴포넌트 보기'
      }
    }
  }
}
</script>

<template>
  <main>
    <ChildComp />
    <pre v-if="parent">
      <code>
        {{ parentScriptBlock }}
      </code>
      <code>
        {{ parentTemplateBlock }}
      </code>
    </pre>

    <pre v-else>
      <code>
        {{ childScriptBlock }}
      </code>
      <code>
        {{ childTemplateBlock }}
      </code>
    </pre>

    <div style="margin: 30px 0">
      <button @click="toggle">{{ name }}</button>
    </div>

    <RouterLink to="/tutorial">목록으로</RouterLink>
  </main>
</template>
