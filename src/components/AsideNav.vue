<template>
  <nav class="flex flex-row-reverse justify-between rounded-3xl bg-opacity-50 backdrop-blur-lg dark:backdrop-blur-sm">
    <!-- Dark theme toggle icon -->
    <div class="pt-10 pr-10 pb-5">
      <Icon id="icon-sun" class="text-yellow-300 h-8 w-8 cursor-pointer hover:text-white" icon="ph:sun-fill"
        @click="toggleTheme()" v-if="isDark" />
      <Icon id="icon-moon" class="text-blue-900 h-8 w-8 cursor-pointer hover:text-white" icon="ph:moon-fill"
        @click="toggleTheme()" v-else />
    </div>
    <!-- Aside Toogle icon -->
    <div class="w-1/5 md:w-2/5">
      <Transition name="slide">
        <Icon icon="ci:hamburger-lg" id="icon-ham" @click="handleShow" v-if="showAside"
          :class="showAside ? 'block' : 'hidden'"
          class="w-8 h-8 mt-10 ml-10 mb-5 text-blue-900 hover:text-white dark:text-white dark:hover:text-slate-500 cursor-pointer" />
        <!-- Aside navbar -->
        <div id="aside-div" v-else
          class="fixed inset-0 sm:right-2/4 md:right-3/4 rounded drop-shadow-xl dark:bg-opacity-25 dark:backdrop-blur-sm dark:text-white bg-opacity-5 backdrop-blur-2xl text-blue-900 min-w-[150px] max-w-[1000px] h-screen flex flex-col justify-evenly sm:justify-start pt-8 gap-9 items-center font-medium">
          <Icon icon="material-symbols:close" id="close-icon" @click="handleHide" class="w-6 h-6 hover:text-red-700" />
          <RouterLink to="/" class="hover:underline">Home</RouterLink>
          <RouterLink to="/anime/favorite" class="hover:underline">Favorite</RouterLink>
          <RouterLink to="/anime/tbw" class="hover:underline">TBW</RouterLink>
        </div>
      </Transition>
    </div>
  </nav>
  <!-- <RouterView /> -->
</template>

<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import { RouterLink } from 'vue-router'
import { Icon } from '@iconify/vue'
import { onMounted, watchEffect, type ExtractPropTypes, type WritableComputedRef } from 'vue'

//props
const props: Readonly<
  ExtractPropTypes<{
    showAside: BooleanConstructor
  }>
> = defineProps({
  showAside: Boolean
})
const isDark: WritableComputedRef<boolean> = useDark()

//emits
const emit: (event: 'handleShow' | 'handleHide', ...args: any[]) => void = defineEmits([
  'handleShow',
  'handleHide'
])

//methods
const handleShow = (): void => {
  emit('handleShow')
}

const handleHide = (): void => {
  emit('handleHide')
}

const toggleTheme: (value?: boolean) => boolean = useToggle(isDark)

//watcher
watchEffect(() => {
  localStorage.setItem('aside', JSON.stringify(props.showAside))
})

</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.2s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(-100%);
  transition: all 150ms ease-in 0s;
}
</style>
