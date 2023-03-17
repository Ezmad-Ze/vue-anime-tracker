<template>
  <div class="m-5" :class="showAside ? 'md:ml-10' : 'md:ml-[30%]'">
    <SearchInput v-model="searchInput" />
    <div
      class="flex flex-wrap items-start justify-center gap-4 max-w-[1200px]"
      v-if="searchResults.length > 0"
    >
      <MovieCard
        @tbrHandler="addToTbr"
        @favoriteHandler="addAnimeToFavorite"
        v-for="searchResult in searchResults"
        :searchResult="searchResult"
        :key="searchResult.mal_id"
      />
    </div>
  </div>
  <RouterView />
</template>

<script setup lang="ts">
import MovieCard from '@/components/MovieCard.vue'
import SearchInput from '@/components/SearchInput.vue'
import type Anime from '@/models'
import { onMounted, ref, watchEffect, type Ref } from 'vue'

//props
defineProps({
  showAside: Boolean
})

//variables
const searchInput = ref('')
const searchResults: Ref<Anime[]> = ref([])
const myFavoriteAnime: Ref<Anime[]> = ref([])
const myTBRanime: Ref<Anime[]> = ref([])

//methods
const searchAnime = (val: string) => {
  const url = `https://api.jikan.moe/v4/anime?q=${val}`
  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      searchResults.value = res.data
    })
}

const addAnimeToFavorite = (anime: Anime) => {
  anime.favorite = !anime.favorite

  if (anime.favorite && !anime.tbr) {
    myFavoriteAnime.value.push(anime)
  } else {
    const index = myFavoriteAnime.value.findIndex((i) => i.mal_id === anime.mal_id)
    if (index !== -1) {
      myFavoriteAnime.value.splice(index, 1)
    }
  }
}

const addToTbr = (anime: Anime) => {
  anime.tbr = !anime.tbr

  if (anime.tbr) {
    myTBRanime.value.push(anime)
  } else {
    const index = myTBRanime.value.findIndex((i) => i.mal_id === anime.mal_id)
    if (index !== -1) {
      myTBRanime.value.splice(index, 1)
    }
  }
}

//watch
watchEffect(() => {
  searchAnime(searchInput.value)
})

//mount
onMounted(() => {
  searchAnime(searchInput.value)
})
</script>
