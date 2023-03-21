<template>
  <!-- Horizontal Card -->
  <div
  role="AnimeCard"
    class=" cursor-pointer flex flex-row justify-between w-full mb-5 p-4 max-w-[900px] rounded-3xl dark:text-white text-white box-border dark:bg-white dark:bg-opacity-20 hover:dark:bg-opacity-10 bg-blue-900 bg-opacity-60 hover:bg-opacity-40"
    >
    <!-- Horizontal Card image and text -->
    <div class="flex justify-center items-center gap-3" @click="gotoDetails(fav.mal_id)">
      <img :src="fav?.images.jpg.small_image_url" :alt="fav?.title">
      <div class="flex flex-col gap-4">
        <h3>{{ fav?.title }}</h3>
        <span class=" text-sm">{{ fav?.episodes }} {{ fav?.episodes === 1 ? 'ep' : 'eps' }}</span>
      </div>
    </div>
    <!-- Favorite Button -->
    <button role="favButton" @click="
      () => {
        handleFavorite(fav)
      }
    " class="px-1 text-white selection:bg-yellow-700">
      <Icon data-testid="favorite" class="text-yellow-300 w-5 h-5" icon="mdi:cards-heart" v-if="fav?.favorite" />
      <Icon data-testid="notFavorite" class="text-yellow-300 w-5 h-5" icon="mdi:cards-heart-outline" v-else />
    </button>
  </div>
</template>

<script setup lang="ts">
import type Anime from '@/models'
import type { PropType } from 'vue'
import { Icon } from '@iconify/vue'
import { useRouter, type Router } from 'vue-router'

//router
const router: Router = useRouter()

//props
defineProps({
  fav: {
    type: Object as PropType<Anime>,
    required: true
  }
})

//emits
const emit: (event: "favoriteHandler", ...args: any[]) => void = defineEmits([
  'favoriteHandler',
])
const handleFavorite = (val: Anime): void => {
  emit('favoriteHandler', val)
}

//method
const gotoDetails = (id: number): void => {
  router.push({
    name: 'details',
    params: {
      id: id
    }
  })
}
</script>
