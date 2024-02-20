<script lang="ts">
import ChildComp from './12-1.vue'

export default {
  data() {
    return {
      greeting: '부모 컴포넌트로부터 💌를 전달받았어요!',

      parent: true,
      name: '자식 컴포넌트 보기',

      parentScriptBlock: `
      # script block

      import ChildComp from './12-1.vue'

      export default {
        data() {
          return {
            greeting: '부모 컴포넌트로부터 💌를 전달받았어요!'
          }
        },

        components: {
          ChildComp
        }
      }
      `,

      parentTemplateBlock: `
      # template block

      <main>
        <ChildComp :msg="greeting" />
      </main>
      `,

      childScriptBlock: `
      # script block

      export default {
        props: {
          msg: ''
        }
      }
      `,

      childTemplateBlock: `
      # template block

      <main>
        <h2>{{ msg }}</h2>
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
    <ChildComp :msg="greeting" />

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
