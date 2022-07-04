<script setup lang="ts">
import AdviceText from './AdviceText.vue'
import AppButton from './ui/AppButton.vue'
import AdviceHeadline from './AdviceHeadline.vue'
</script>
<template>
  <div
    class="w-1/3 bg-neutral-blue-dark-grayish rounded-xl p-10 text-center relative"
  >
    <AdviceHeadline />
    <AdviceText />
    <img
      class="mt-5 mb-5"
      src="@/assets/img/pattern-divider-desktop.svg"
      alt="Divider"
    />
    <div class="absolute left-[calc(50%-28px)] -bottom-7">
      <AppButton />
    </div>
  </div>
</template>
<style></style>
