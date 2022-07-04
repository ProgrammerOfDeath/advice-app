<script setup lang="ts">
import { useAdviceStore } from '@/stores/advice'
const adviceStore = useAdviceStore()

const newAdvice = () => {
  adviceStore.fetchAdvice()
}
</script>
<template>
  <button
    class="p-4 flex items-center justify-center bg-primary-green rounded-full hover:shadow-dice-button transition-shadow ease-in duration-50"
    @click="newAdvice"
  >
    <img src="@/assets/img/icon-dice.svg" alt="Dice" />
  </button>
</template>
<style></style>
