<template>
  <div class="m-5" :class="showAside ? 'md:ml-10' : 'md:ml-[30%]'">
    <DetailsComp
      :key="foundResult?.mal_id"
      :foundResult="foundResult"
      @addAnimeToTbw="addAnimeToTbw"
      @addAnimeToFavorite="addAnimeToFavorite"
    />
  </div>
</template>

<script setup lang="ts">
import DetailsComp from '@/components/DetailsComponent.vue'
import type Anime from '@/models'
import { onMounted, ref, watchEffect, type PropType } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const id = Number(route.params.id)

const tbws = ref(JSON.parse(localStorage.getItem('myTBW') || '[]'))
const favorites = ref(JSON.parse(localStorage.getItem('myFav') || '[]'))

defineProps({
  showAside: Boolean,
  foundResult: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['searchAnime'])

const addAnimeToTbw = (anime: Anime): void => {
  anime.tbr = !anime.tbr

  const existingItemIndex = tbws.value.findIndex((item: Anime) => item.mal_id === anime.mal_id)

  if (existingItemIndex > -1) {
    if (!anime.tbr) {
      tbws.value.splice(existingItemIndex, 1)
    }
  } else {
    tbws.value.push(anime)
  }

  localStorage.setItem('myTBW', JSON.stringify(tbws.value))
}

const addAnimeToFavorite = (anime: Anime): void => {
  anime.favorite = !anime.favorite

  const existingItemIndex = favorites.value.findIndex((item: Anime) => item.mal_id === anime.mal_id)

  if (existingItemIndex > -1) {
    if (!anime.favorite) {
      favorites.value.splice(existingItemIndex, 1)
    }
  } else {
    favorites.value.push(anime)
  }

  localStorage.setItem('myFav', JSON.stringify(favorites.value))
}

watchEffect(() => {
  emit('searchAnime', id)
})

onMounted(() => {
  emit('searchAnime', id)
})
</script>
