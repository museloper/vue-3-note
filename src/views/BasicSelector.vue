<template>
  <div>
    <component :is="dynamicComponentRef" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

// 동적으로 가져온 컴포넌트를 담을 ref
const dynamicComponentRef = ref(null)

const route = useRoute()
const chapter = route.params.chapter

// 컴포넌트를 비동기적으로 가져온 후, ref에 할당
const loadComponent = async () => {
  const module = await import(`./Basic/${chapter}.vue`)
  dynamicComponentRef.value = module.default
}

// 컴포넌트 로드를 컴포넌트가 마운트된 후에 수행
onMounted(() => {
  loadComponent()
})
</script>

<style></style>
