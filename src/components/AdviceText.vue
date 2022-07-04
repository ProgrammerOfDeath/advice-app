<script setup lang="ts">
import { useAdviceStore } from '@/stores/advice'

const adviceStore = useAdviceStore()
</script>
<template>
  <div class="text-quote text-primary-cyna">
    {{ adviceStore.advice }}
  </div>
</template>

<style></style>
