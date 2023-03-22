<template>
  <div class="m-5" :class="showAside ? 'md:ml-10' : 'md:ml-[30%]'">
    <SearchInput v-model="searchInput" />
    <div class="flex flex-wrap items-start justify-center gap-4 max-w-[1200px]" v-if="searchResults?.length > 0">
      <MovieCard data-testid="movieCard" @tbrHandler="addToTbr" @favoriteHandler="addAnimeToFavorite"
        v-for="searchResult in searchResults" :searchResult="searchResult" :key="searchResult?.mal_id" />
    </div>
  </div>
</template>

<script setup lang="ts">
import MovieCard from '@/components/MovieCard.vue'
import SearchInput from '@/components/SearchInput.vue'
import type Anime from '@/models'
import { onMounted, ref, watchEffect, type PropType } from 'vue'

//props
defineProps({
  showAside: Boolean,
  searchResults: {
    type: Array as PropType<Anime[]>,
    required: true
  }
})

const emit: (event: 'update-result' | 'addAnimeToFavorite' | 'addToTbr' | 'searchAnime', ...args: any[]) => void =
  defineEmits(['update-result', 'addAnimeToFavorite', 'addToTbr', 'searchAnime'])

  //variables
const searchInput = ref('')



//toggle favorite
const addAnimeToFavorite = (anime: Anime): void => {
  emit('addAnimeToFavorite', anime)
}

//toggle tbw
const addToTbr = (anime: Anime): void => {
  emit('addToTbr', anime)
}
//watch
watchEffect(() => {
  emit('searchAnime', searchInput.value)
})

//mount
onMounted(() => {
  emit('searchAnime', searchInput.value)

})
</script>
