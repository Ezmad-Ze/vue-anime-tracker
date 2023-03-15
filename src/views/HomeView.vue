<template>
  <div class="m-5" :class="showAside ? 'md:ml-10' : 'md:ml-[30%]'">
    <div class="w-10 h-10 bg-red-500">2</div>
    <div class="w-10 h-10 bg-red-500">1</div>
    <div class="w-10 h-10 bg-red-500">4</div>
    <div class="w-10 h-10 bg-red-500">3</div>
  </div>
</template>

<script setup lang="ts">

defineProps({
  showAside: Boolean
})


</script>
