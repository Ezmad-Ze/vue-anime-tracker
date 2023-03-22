<template>
    <div class="flex flex-col justify-center items-center gap-5">
        <RouterLink to="/"
            class="flex flex-row justify-center items-center gap-2 hover:dark:bg-white hover:dark:bg-opacity-20 hover:bg-blue-800 hover:bg-opacity-20 mb-5">
            <Icon icon="material-symbols:arrow-back" class="text-3xl dark:text-white text-blue-800" />
            <h4 class="text-blue-800 dark:text-white font-bold text-sm">Home</h4>
        </RouterLink>
        <div class="flex flex-col items-center justify-center">
            <h3 class="text-xl font-bold text-blue-800 dark:text-white break-all">{{ foundResult.intialize.title }}</h3>
            <img :src="foundResult.intialize?.images.jpg?.image_url" :alt="foundResult.intialize.title" class="w-3/6">
        </div>
        <div class="flex flex-row gap-5">
            <button role="favButton" @click="
                () => {
                    //handleFavorite(searchResult)
                }
            " class="px-1 text-white selection:bg-yellow-700"
                :class="foundResult.intialize?.tbr && 'pointer-events-none disabled:opacity-70'">
                <Icon data-testid="favorite" class="text-yellow-700 w-8 h-8" icon="mdi:cards-heart"
                    v-if="foundResult.intialize?.favorite" />
                <Icon data-testid="notFavorite" class="text-yellow-700 w-8 h-8" icon="mdi:cards-heart-outline" v-else />
            </button>

            <!-- Bookmark Button -->
            <button role="bookmarkButton" @click="
                () => {
                    // handleTbw(foundResult)
                }
            " class="px-1 text-white selection:bg-yellow-700">
                <Icon data-testid="tbw" class="text-yellow-300 w-8 h-8" icon="material-symbols:bookmark"
                    v-if="foundResult.intialize?.tbr" />
                <Icon data-testid="nottbw" class="text-yellow-300 w-8 h-8" icon="material-symbols:bookmark-outline-rounded"
                    v-else />
            </button>
        </div>

        <div class="flex flex-row justify-center items-center gap-6">
            <h3 class="text-lg font-bold text-blue-800 dark:text-white ">Number of episodes:</h3>
            <p class="text-base font-normal text-blue-100 bg-blue-900 bg-opacity-70 dark:text-white dark:bg-transparent">{{
                foundResult.intialize.episodes }} {{ foundResult.intialize?.episodes === 1 ? 'ep' : 'eps' }}</p>
        </div>
        <div class="flex flex-col items-center justify-center gap-4">
            <h3 class=" text-lg font-bold text-blue-800 dark:text-white">Synopsis</h3>
            <p class="text-base font-normal text-blue-100 bg-blue-900 bg-opacity-70 dark:text-white dark:bg-transparent">{{
                foundResult.intialize.synopsis }} </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { RouterLink } from 'vue-router'


const props = defineProps({
    foundResult: {
        type: Object,
        required: true
    }
})



</script>
