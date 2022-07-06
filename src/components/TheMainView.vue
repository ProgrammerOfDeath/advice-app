<script setup lang="ts">
import { useAdviceStore } from '@/stores/advice'
import AdviceContainer from './AdviceContainer.vue'
const adviceStore = useAdviceStore()
adviceStore.fetchAdvice()
</script>

<template>
  <div
    class="px-5 lg:px-0 font-main flex justify-center items-center bg-neutral-blue-dark absolute inset-0"
  >
    <AdviceContainer />
  </div>
</template>

<style></style>
