<script setup lang="ts">
import { ref } from 'vue'
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'

const datas = ref([
  {
    chapter: '/basic/01',
    title: '1. Attribute Bindings',
    text: '클래스와 스타일 바인딩'
  }
])
</script>

<template>
  <WelcomeItem v-for="data in datas" :key="data.title">
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading
      ><RouterLink :to="data.chapter">{{ data.title }}</RouterLink></template
    >
    {{ data.text }}
  </WelcomeItem>
</template>
