<script setup lang="ts">
import AdviceText from './AdviceText.vue'
import AppButton from './ui/AppButton.vue'
import AdviceHeadline from './AdviceHeadline.vue'
</script>
<template>
  <div
    class="w-full lg:w-1/3 bg-neutral-blue-dark-grayish rounded-xl p-10 text-center relative"
  >
    <AdviceHeadline class="mb-6" />
    <AdviceText />
    <img
      class="my-7 mx-auto"
      src="@/assets/img/pattern-divider-desktop.svg"
      alt="Divider"
    />
    <div class="absolute left-[calc(50%-28px)] -bottom-7">
      <AppButton />
    </div>
  </div>
</template>
<style></style>
