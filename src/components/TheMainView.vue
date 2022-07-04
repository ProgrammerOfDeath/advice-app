<script setup lang="ts">
import { useAdviceStore } from '@/stores/advice'
import AdviceContainer from './AdviceContainer.vue'
const adviceStore = useAdviceStore()
adviceStore.fetchAdvice()
</script>

<template>
  <main
    class="flex justify-center items-center bg-neutral-blue-dark absolute inset-0"
  >
    <AdviceContainer />
  </main>
</template>

<style></style>
