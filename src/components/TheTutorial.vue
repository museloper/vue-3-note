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
    pre: `컴포넌트가 마운트된 후에`,
    highlight: `mounted`,
    post: `옵션을 통해서 엘리먼트에 접근할 수 있다.`
  },
  {
    chapter: '/tutorial/10',
    title: '10. 감시자',
    pre: `데이터가 변경될 때마다 어떤 함수를 실행시키고 싶다면`,
    highlight: `watch`,
    post: `옵션을 사용해보자.`
  },
  {
    chapter: '/tutorial/11',
    title: '11. 컴포넌트',
    pre: `자식 컴포넌트를 사용하려면 먼저 import 해야 한다. 그 후`,
    highlight: `component`,
    post: `옵션을 사용하여 컴포넌트를 등록하여 사용한다.`
  },
  {
    chapter: '/tutorial/12',
    title: '12. Props',
    pre: `자식 컴포넌트는`,
    highlight: `props`,
    post: `를 통해 부모로부터 데이터를 받을 수 있습니다.`
  },
  {
    chapter: '/tutorial/13',
    title: '13. Emits',
    pre: `자식 컴포넌트는`,
    highlight: `emits`,
    post: `을 통해 부모에게 이벤트를 발송할 수 있다.`
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
