<template>
  <div class="flex flex-col justify-center items-center gap-5 md:items-start">
    <!-- Back Button -->
    <RouterLink
      to="/"
      class="flex flex-row justify-center items-center gap-2 hover:dark:bg-white hover:dark:bg-opacity-20 hover:bg-blue-800 hover:bg-opacity-20 mb-5"
    >
      <Icon icon="material-symbols:arrow-back" class="text-3xl dark:text-white text-blue-800" />
      <h4 class="text-blue-800 dark:text-white font-bold text-sm">Home</h4>
    </RouterLink>
    <!-- Title -->
    <div class="flex flex-col justify-center items-center gap-5 md:flex-row">
      <div class="flex flex-col items-center justify-center gap-5">
        <h3 class="text-xl font-bold text-blue-800 dark:text-white break-all">
          {{ foundResult?.intialize?.title }}
        </h3>
        <img
          :src="foundResult?.intialize?.images.jpg?.image_url"
          :alt="foundResult?.intialize?.title"
          class="w-3/6 md:w-full"
        />
      </div>
      <div
        class="flex flex-col gap-10 justify-center items-center md:justify-start md:items-start md:ml-4"
      >
        <!-- Buttons -->
        <div class="flex flex-row gap-5">
          <!-- Heart Button -->
          <button
            role="favButton"
            @click="
              () => {
                handleFavorite(foundResult)
              }
            "
            class="px-1 text-white selection:bg-yellow-700"
            :class="foundResult?.intialize?.tbr && 'pointer-events-none disabled:opacity-70'"
          >
            <Icon
              data-testid="favorite"
              class="text-yellow-700 w-8 h-8"
              icon="mdi:cards-heart"
              v-if="foundResult?.intialize?.favorite"
            />
            <Icon
              data-testid="notFavorite"
              class="text-yellow-700 w-8 h-8"
              icon="mdi:cards-heart-outline"
              v-else
            />
          </button>

          <!-- Bookmark Button -->
          <button
            role="bookmarkButton"
            @click="
              () => {
                handleTbw(foundResult)
              }
            "
            class="px-1 text-white selection:bg-yellow-700"
            :class="foundResult?.intialize?.favorite && 'pointer-events-none disabled:opacity-70'"
          >
            <Icon
              data-testid="tbw"
              class="text-yellow-300 w-8 h-8"
              icon="material-symbols:bookmark"
              v-if="foundResult?.intialize?.tbr"
            />
            <Icon
              data-testid="nottbw"
              class="text-yellow-300 w-8 h-8"
              icon="material-symbols:bookmark-outline-rounded"
              v-else
            />
          </button>
        </div>
        <!-- Episodes -->
        <div role="synopsis" class="flex flex-row justify-center items-center gap-6">
          <h3 class="text-lg font-bold text-blue-800 dark:text-white">Number of episodes:</h3>
          <p
            class="text-base font-normal text-blue-100 bg-blue-900 bg-opacity-70 dark:text-white dark:bg-transparent"
          >
            {{ foundResult?.intialize?.episodes }}
            {{ foundResult?.intialize?.episodes === 1 ? 'ep' : 'eps' }}
          </p>
        </div>
      </div>
    </div>
    <!-- Synopsis -->
    <div class="flex flex-col items-center justify-center gap-4 max-w-[900px]">
      <h3 class="text-lg font-bold text-blue-800 dark:text-white">Synopsis</h3>
      <p
        class="text-base font-normal text-blue-100 bg-blue-900 bg-opacity-70 dark:text-white dark:bg-transparent"
      >
        {{ foundResult?.intialize?.synopsis }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { RouterLink } from 'vue-router'

defineProps({
  foundResult: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['addAnimeToTbw', 'addAnimeToFavorite'])

const handleTbw = (val: any) => {
  emit('addAnimeToTbw', val.intialize)
}

const handleFavorite = (val: any) => {
  emit('addAnimeToFavorite', val.intialize)
}
</script>
