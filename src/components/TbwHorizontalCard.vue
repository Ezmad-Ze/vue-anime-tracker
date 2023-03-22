<template>
  <!-- Horizontal Card -->
  <div
    role="AnimeCard"
    class="cursor-pointer flex flex-row justify-between w-full mb-5 p-4 max-w-[900px] rounded-3xl dark:text-white text-white box-border dark:bg-white dark:bg-opacity-20 hover:dark:bg-opacity-10 bg-blue-900 bg-opacity-60 hover:bg-opacity-40"
  >
    <!-- Horizontal Card image and text -->
    <div class="flex justify-center items-center gap-3" @click="gotoDetails(tbw.mal_id)">
      <img :src="tbw?.images.jpg.small_image_url" :alt="tbw?.title" />
      <div class="flex flex-col gap-4">
        <h3>{{ tbw?.title }}</h3>
        <span class="text-sm">{{ tbw?.episodes }} {{ tbw?.episodes === 1 ? 'ep' : 'eps' }}</span>
      </div>
    </div>
    <!-- Bookmark Button -->
    <button
      role="bookmarkButton"
      @click="
        () => {
          handleTbw(tbw)
        }
      "
      class="px-1 text-white selection:bg-yellow-700"
    >
      <Icon
        data-testid="tbw"
        class="text-yellow-300 w-5 h-5"
        icon="material-symbols:bookmark"
        v-if="tbw?.tbr"
      />
      <Icon
        data-testid="nottbw"
        class="text-yellow-300 w-5 h-5"
        icon="material-symbols:bookmark-outline-rounded"
        v-else
      />
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
  tbw: {
    type: Object as PropType<Anime>,
    required: true
  }
})

//emits
const emit: (event: 'tbwHandler', ...args: any[]) => void = defineEmits(['tbwHandler'])
const handleTbw = (val: Anime): void => {
  emit('tbwHandler', val)
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
