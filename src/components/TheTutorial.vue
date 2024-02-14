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
</template>
