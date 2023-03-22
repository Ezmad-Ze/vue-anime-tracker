<template>
  <div class="m-5" :class="showAside ? 'md:ml-10' : 'md:ml-[30%]'">
    <div class="flex flex-col gap-3">
      <RouterLink
        to="/"
        class="flex flex-row justify-center items-center gap-2 hover:dark:bg-white hover:dark:bg-opacity-20 hover:bg-blue-800 hover:bg-opacity-20"
      >
        <Icon icon="material-symbols:arrow-back" class="text-3xl dark:text-white text-blue-800" />
        <h4 class="text-blue-800 dark:text-white font-bold text-sm">Home</h4>
      </RouterLink>
      <h3 class="text-blue-800 dark:text-white font-bold text-xl mb-5">To be Watched</h3>
    </div>
    <div class="flex flex-col justify-center items-center" v-if="tbws.length > 0">
      <TbwHorizontalCard
        v-for="tbw in tbws"
        :key="tbw.mal_id"
        :tbw="tbw"
        @tbwHandler="addAnimeToTbw"
        data-testid="horizontal-card"
      />
    </div>
    <div
      class="flex flex-col justify-center items-center bg-black dark:bg-white dark:bg-opacity-20 bg-opacity-20 rounded"
      v-else
    >
      <h3 class="text-blue-800 dark:text-white font-bold text-xl">No TBW Yet</h3>
    </div>
  </div>
</template>

<script setup lang="ts">
import TbwHorizontalCard from '@/components/TbwHorizontalCard.vue'
import type Anime from '@/models'
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import { RouterLink } from 'vue-router'

const tbws = ref(JSON.parse(localStorage.getItem('myTBW') || '[]'))

defineProps({
  showAside: Boolean
})

//toggle tbw
const addAnimeToTbw = (anime: Anime): void => {
  anime.tbr = !anime.tbr
  localStorage.setItem('myTBW', JSON.stringify(tbws.value.filter((t: Anime) => t.tbr === true)))
}
</script>
