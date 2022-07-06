<script setup lang="ts">
import { useAdviceStore } from '@/stores/advice'

const adviceStore = useAdviceStore()
</script>

<template>
  <div class="text-sm uppercase tracking-headline text-primary-green">
    ADVICE #{{ adviceStore.advice.id }}
  </div>
</template>

<style></style>
