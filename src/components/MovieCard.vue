<template>
  <!-- Card Component -->
  <div
    class="max-w-[250px] w-full flex flex-col ml-5 items-center sm:items-start justify-center bg-white mt-20"
  >
    <!-- Image div and Route to details -->
    <div
      class="flex flex-row-reverse w-full hover:cursor-pointer"
      @click="gotoDetails(searchResult.mal_id)"
    >
      <img
        class="max-h-[340px] w-full"
        :src="searchResult?.images.jpg?.image_url"
        :alt="searchResult?.title"
      />
    </div>
    <!-- Card Content -->
    <div class="flex flex-col p-5 w-full">
      <div class="flex flex-row gap-4 justify-between">
        <!-- Route to details -->
        <h3
          role="title"
          class="font-bold text-lg break-all hover:cursor-pointer"
          @click="gotoDetails(searchResult.mal_id)"
        >
          {{ searchResult?.title }}
        </h3>
        <button
          role="favButton"
          @click="
            () => {
              handleFavorite(searchResult)
            }
          "
          class="px-1 text-white selection:bg-yellow-700"
          :class="searchResult?.tbr && 'pointer-events-none disabled:opacity-70'"
        >
          <Icon
            data-testid="favorite"
            class="text-yellow-700 w-5 h-5"
            icon="mdi:cards-heart"
            v-if="searchResult?.favorite"
          />
          <Icon
            data-testid="notFavorite"
            class="text-yellow-700 w-5 h-5"
            icon="mdi:cards-heart-outline"
            v-else
          />
        </button>
      </div>
      <div class="flex gap-3 mt-3">
        <h3 class="font-light text-sm">{{ searchResult?.type }}</h3>
        <h3 class="font-light text-sm">
          {{ searchResult?.episodes }} {{ searchResult?.episodes === 1 ? 'ep' : 'eps' }}
        </h3>
      </div>
      <button
        role="tbrFavorite"
        :class="[
          searchResult?.tbr
            ? 'bg-white border border-yellow-700 text-yellow-700 inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]'
            : 'bg-yellow-500 inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] ',
          searchResult?.favorite &&
            'pointer-events-none inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] disabled:opacity-70'
        ]"
        class="mt-5"
        @click="handelTBR(searchResult)"
      >
        {{ searchResult?.tbr ? 'Added to TBR' : 'Add to TBR' }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import type Anime from '@/models'
import type { PropType } from 'vue'
import { useRouter, type Router } from 'vue-router'

const router: Router = useRouter()
//props
defineProps({
  searchResult: {
    type: Object as PropType<Anime>,
    required: true
  }
})

//emits
const emit = defineEmits(['favoriteHandler', 'tbrHandler'])
const handleFavorite: (val: Anime) => void = (val: Anime) => {
  emit('favoriteHandler', val)
}

const handelTBR = (val: Anime) => {
  emit('tbrHandler', val)
}

//method
const gotoDetails = (id: number) => {
  router.push({
    name: 'details',
    params: {
      id: id
    }
  })
}
</script>
