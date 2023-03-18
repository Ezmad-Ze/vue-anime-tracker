<template>
  <div class="m-5" :class="showAside ? 'md:ml-10' : 'md:ml-[30%]'">
    <HorizontalCard v-for="searchResult in searchResults" :searchResult="searchResult" :key="searchResult.mal_id" />
    {{ searchResults }}
    {{ showAside }}
  </div>
</template>

<script setup lang="ts">
import HorizontalCard from '@/components/HorizontalCard.vue'
import type Anime from '@/models';
import type { PropType } from 'vue';

defineProps({
  showAside: Boolean,
  searchResults: Object as PropType<Anime[]>
})



</script>
