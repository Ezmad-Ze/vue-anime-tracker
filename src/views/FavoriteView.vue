<template>
  <div class="m-5 " :class="showAside ? 'md:ml-10' : 'md:ml-[30%]'">
    <div class="flex flex-col gap-3">
      <RouterLink to="/" data-testid="Back"
        class="flex flex-row justify-center items-center gap-2 hover:dark:bg-white hover:dark:bg-opacity-20 hover:bg-blue-800 hover:bg-opacity-20 ">
        <Icon icon="material-symbols:arrow-back" class="text-3xl dark:text-white text-blue-800" />
        <h4 class="text-blue-800 dark:text-white font-bold text-sm">Home</h4>
      </RouterLink>
      <h3 class="text-blue-800 dark:text-white font-bold text-xl mb-5">Favorites </h3>
    </div>
    <div class="flex flex-col justify-center items-center" v-if="favorites.length > 0">
      <HorizontalCard v-for="fav in favorites" :key="fav?.mal_id" :fav="fav" @favoriteHandler="addAnimeToFavorite"
        data-testid="horizontal-card" />
    </div>
    <div class="flex flex-col justify-center items-center bg-black dark:bg-white dark:bg-opacity-20 bg-opacity-20 rounded"
      v-else>
      <h3 class="text-blue-800 dark:text-white font-bold text-xl">No Favorites Yet</h3>
    </div>
  </div>
</template>

<script setup lang="ts">
import HorizontalCard from '@/components/HorizontalCard.vue'
import type Anime from '@/models'
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import { RouterLink } from 'vue-router'

const favorites = ref(JSON.parse(localStorage.getItem('myFav') || ('[]')))

defineProps({
  showAside: Boolean,
})

//toggle favorite
const addAnimeToFavorite = (anime: Anime): void => {
  anime.favorite = !anime.favorite
  localStorage.setItem(
    'myFav',
    JSON.stringify(favorites.value.filter((t: Anime) => t.favorite === true))
  )
}

</script>
