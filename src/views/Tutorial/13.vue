<script lang="ts">
import ChildComp from './13-1.vue'

export default {
  data() {
    return {
      childMsg: '',

      parent: true,
      name: '자식 컴포넌트 보기',

      parentScriptBlock: `
      # script block

      import ChildComp from './13-1.vue'

      export default {
        data() {
          return {
            childMsg: ''
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
        <ChildComp @response="(msg) => childMsg = msg" />
        <p>{{ childMsg }}</p>
      </main>
      `,

      childScriptBlock: `
      # script block

      export default {
        emits: ['response'],

        created() {
          this.$emit('response', '자식 컴포넌트로부터 🌷를 받았어요!')
        }
      }
      `,

      childTemplateBlock: `
      # template block

      <main>
        <h2>자식 컴포넌트</h2>
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
    <ChildComp @response="(msg) => (childMsg = msg)" />
    <p>{{ childMsg }}</p>

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
