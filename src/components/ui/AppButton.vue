<script setup lang="ts">
import { useAdviceStore } from '@/stores/advice'
const adviceStore = useAdviceStore()

const newAdvice = () => {
  adviceStore.fetchAdvice()
}
</script>
<template>
  <button @click="newAdvice">New Advice</button>
</template>
<style></style>
