<script setup lang="ts">
import { RouterView } from 'vue-router'
import Nav from '@/components/AsideNav.vue'
import { type Ref, ref, reactive } from 'vue'
import type Anime from './models';
import { intialize } from './models';



const showAside: Ref<boolean> = ref(JSON.parse(localStorage.getItem('aside') || 'false'))
const searchResults: Ref<Anime[]> = ref([])
const foundResult = reactive({ intialize })

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

const searchAnime = (val: string | number): void => {
  let url
  if (typeof val === "string") {
    url = `https://api.jikan.moe/v4/anime?q=${val}`

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
        
        searchResults.value = updatedArr
      })
  }
  else if (typeof val === "number") {
    url = `https://api.jikan.moe/v4/anime/${val}`

    fetch(url)
      .then((res) => res.json())
      .then((res) => {


        const response = {
          ...res.data, favorite: false,
          tbr: false
        }


        let myLocalStorageFav = JSON.parse(localStorage.getItem('myFav') || '[]');
        let myLocalStorageTbw = JSON.parse(localStorage.getItem('myTBW') || '[]');
        let both = [...myLocalStorageFav, ...myLocalStorageTbw]


        let newResponse = compareObjects(both, response)


        foundResult.intialize = newResponse
      })
  }

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

//replace objects from local storage
const compareObjects = (array: Anime[], obj: Anime) => {
  let result = obj;

  array.forEach((item: Anime) => {
    if (item.mal_id === obj.mal_id) {
      result = item;
    }
  });

  return result;
}
</script>

<template>
  <div role="body" class="font-poppins bg-light-bg dark:bg-dark-bg bg-cover bg-no-repeat h-screen overflow-y-auto">
    <header>
      <Nav :showAside="showAside" @handleHide="handleHide" @handleShow="handleShow" />
    </header>
    <RouterView :showAside="showAside" @searchAnime="searchAnime" :searchResults="searchResults"
      :foundResult="foundResult" @update-result="updateRes" @addAnimeToFavorite="addAnimeToFavorite"
      @addToTbr="addToTbr" />
  </div>
</template>
