<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>1. 선언적 렌더링</template>

    Vue의 핵심 기능은
    <RouterLink to="/tutorial/01">선언적 렌더링</RouterLink>
    이다.
  </WelcomeItem>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>2. 속성 바인딩</template>

    Vue에서 이중 중괄호는 텍스트 삽입에만 사용된다. 속성을 동적 값에 바인딩 하려면
    <RouterLink to="/tutorial/02">v-bind 디렉티브</RouterLink>
    를 사용해야 한다.
  </WelcomeItem>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>3. 이벤트 리스너</template>

    <RouterLink to="/tutorial/03">v-on 디렉티브</RouterLink>
    를 사용하여 DOM 이벤트를 수신할 수 있다.
  </WelcomeItem>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>4. 폼(form) 바인딩</template>

    <RouterLink to="/tutorial/04">v-bind & v-on</RouterLink>
    을 함께 사용하면, 양방향 바인딩을 만들 수 있다.
  </WelcomeItem>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>5. 폼(form) 바인딩 2</template>

    <RouterLink to="/tutorial/05">v-model</RouterLink>
    을 사용하면, 양방향 바인딩을 간소화 할 수 있다.
  </WelcomeItem>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>6. 조건부 렌더링</template>

    엘리먼트를 조건부로 렌더링하기 위해
    <RouterLink to="/tutorial/06">v-if</RouterLink> 및
    <RouterLink to="/tutorial/06">v-else</RouterLink>
    디렉티브를 사용할 수 있다.
  </WelcomeItem>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>7. 리스트 렌더링</template>

    <RouterLink to="/tutorial/07">v-for</RouterLink>
    디렉티브를 사용하여 자료 배열을 엘리먼트 목록으로 렌더링할 수 있다.
  </WelcomeItem>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>8. 계산된 속성</template>

    <RouterLink to="/tutorial/08">computed</RouterLink>
    옵션을 사용하여 반응적으로 계산되는 속성을 선언할 수 있다.
  </WelcomeItem>
</template>
