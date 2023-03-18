<template>
  <div class="bg-red-500 w-7 h-7">
    {{ searchResult?.title }}
  </div>
</template>

<script setup lang="ts">
import type Anime from '@/models';
import type { PropType } from 'vue';

defineProps({
  searchResult: Object as PropType<Anime>
})
</script>
