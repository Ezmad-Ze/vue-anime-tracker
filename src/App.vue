<script setup lang="ts">
import { RouterView } from 'vue-router'
import Nav from '@/components/AsideNav.vue'
import { type Ref, ref } from 'vue'
import type Anime from './models'

const showAside: Ref<boolean> = ref(JSON.parse(localStorage.getItem('aside') || 'false'))
const searchResults: Ref<Anime[]> = ref([])

//show the aside
const handleShow = (): void => {
  showAside.value = false
}

//hide the aside
const handleHide = (): void => {
  showAside.value = true
}

const updateRes = (result: any): void => {
  searchResults.value = result
}

//toogle favorite
const addAnimeToFavorite = (anime: Anime): void => {
  anime.favorite = !anime.favorite
  localStorage.setItem(
    'myFav',
    JSON.stringify(searchResults.value.filter((t) => t.favorite === true))
  )
}

//toggle tbw
const addToTbr = (anime: Anime): void => {
  anime.tbr = !anime.tbr
  localStorage.setItem('myTBW', JSON.stringify(searchResults.value.filter((t) => t.tbr === true)))
}
</script>

<template>
  <div
    role="body"
    class="font-poppins bg-light-bg dark:bg-dark-bg bg-cover bg-no-repeat h-screen overflow-y-auto"
  >
    <header>
      <Nav :showAside="showAside" @handleHide="handleHide" @handleShow="handleShow" />
    </header>
    <RouterView
      :showAside="showAside"
      :searchResults="searchResults"
      @update-result="updateRes"
      @addAnimeToFavorite="addAnimeToFavorite"
      @addToTbr="addToTbr"
    />
  </div>
</template>
