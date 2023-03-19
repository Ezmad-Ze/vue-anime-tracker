<template>
  <div class="m-5" :class="showAside ? 'md:ml-10' : 'md:ml-[30%]'">
    <SearchInput v-model="searchInput" />
    <div
      class="flex flex-wrap items-start justify-center gap-4 max-w-[1200px]"
      v-if="searchResults?.length > 0"
    >
      <MovieCard
        data-testid="movieCard"
        @tbrHandler="addToTbr"
        @favoriteHandler="addAnimeToFavorite"
        v-for="searchResult in searchResults"
        :searchResult="searchResult"
        :key="searchResult?.mal_id"
      />
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

const emit: (event: 'update-result' | 'addAnimeToFavorite' | 'addToTbr', ...args: any[]) => void =
  defineEmits(['update-result', 'addAnimeToFavorite', 'addToTbr'])
//variables
const searchInput = ref('')

//methods
const searchAnime = (val: string): void => {
  const url = `https://api.jikan.moe/v4/anime?q=${val}`
  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      const responseArray = res.data.map((r: any) => ({
        ...r,
        favorite: false,
        tbr: false
      }))

      //replace the response with localstorage values
      const fav = updateArrayFromLocalStorage(responseArray, 'myFav').filter(
        (t: Anime) => t.favorite === true
      )
      const tbw = updateArrayFromLocalStorage(responseArray, 'myTBW').filter(
        (t: Anime) => t.tbr === true
      )
      const both = [...fav, ...tbw]

      const updatedArr = responseArray.map((obj: any) => {
        const match = both.find((o) => o.mal_id === obj.mal_id)
        return match ? match : obj
      })

      emit('update-result', updatedArr)
    })
}

//replace arrays from localstorage values
const updateArrayFromLocalStorage = (array: Anime[], localStorageKey: string): Anime[] => {
  return array.map((obj: Anime) => {
    const localStorageItem = window.localStorage.getItem(localStorageKey)
    if (localStorageItem) {
      const parsedLocalStorageItem = JSON.parse(localStorageItem)
      const matchingObject = parsedLocalStorageItem.find(
        (item: Anime) => item.mal_id === obj.mal_id
      )
      if (matchingObject) {
        return matchingObject
      }
    }
    return obj
  })
}

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
  searchAnime(searchInput.value)
})

//mount
onMounted(() => {
  searchAnime(searchInput.value)
})
</script>
