<script setup lang="ts">
import { ref } from 'vue'
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'

const datas = ref([
  {
    chapter: '/tutorial/01',
    title: '1. 선언적 렌더링',
    pre: `Vue의 핵심 기능은`,
    highlight: `선언적 렌더링`,
    post: `이다.`
  },
  {
    chapter: '/tutorial/02',
    title: '2. 속성 바인딩',
    pre: `Vue에서 이중 중괄호는 텍스트 삽입에만 사용된다. 속성을 동적 값에 바인딩 하려면`,
    highlight: `v-bind 디렉티브`,
    post: `를 사용해야 한다.`
  },
  {
    chapter: '/tutorial/03',
    title: '3. 이벤트 리스너',
    pre: ``,
    highlight: `v-on 디렉티브`,
    post: `를 사용하여 DOM 이벤트를 수신할 수 있다.`
  },
  {
    chapter: '/tutorial/04',
    title: '4. 폼(form) 바인딩',
    pre: ``,
    highlight: `v-bind & v-on`,
    post: `을 함께 사용하면, 양방향 바인딩을 만들 수 있다.`
  },
  {
    chapter: '/tutorial/05',
    title: '5. 폼(form) 바인딩 2',
    pre: ``,
    highlight: `v-model`,
    post: `을 사용하면, 양방향 바인딩을 간소화 할 수 있다.`
  },
  {
    chapter: '/tutorial/06',
    title: '6. 조건부 렌더링',
    pre: `엘리먼트를 조건부로 렌더링하기 위해`,
    highlight: `v-if & v-else`,
    post: `디렉티브를 사용할 수 있다.`
  },
  {
    chapter: '/tutorial/07',
    title: '7. 리스트 렌더링',
    pre: ``,
    highlight: `v-for`,
    post: `디렉티브를 사용하여 자료 배열을 엘리먼트 목록으로 렌더링할 수 있다.`
  },
  {
    chapter: '/tutorial/08',
    title: '8. 계산된 속성',
    pre: ``,
    highlight: `computed`,
    post: `옵션을 사용하여 반응적으로 계산되는 속성을 선언할 수 있다.`
  },
  {
    chapter: '/tutorial/09',
    title: '9. 생명주기와 템플릿 참조',
    pre: `DOM을 수동으로 업데이트 해야 할 경우,`,
    highlight: `ref`,
    post: `를 사용하여 템플릿 참조를 요청할 수 있다. `
  }
])
</script>

<template>
  <WelcomeItem v-for="data in datas" :key="data.title">
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>{{ data.title }}</template>

    {{ data.pre }}
    <RouterLink :to="data.chapter">{{ data.highlight }}</RouterLink>
    {{ data.post }}
  </WelcomeItem>
</template>
