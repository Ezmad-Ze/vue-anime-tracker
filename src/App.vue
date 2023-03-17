<script setup lang="ts">
import { RouterView } from 'vue-router'
import Nav from '@/components/AsideNav.vue'
import { type Ref, ref } from 'vue'

const showAside: Ref<boolean> = ref(JSON.parse(localStorage.getItem('aside') || 'false'))

//show the aside
const handleShow = (): void => {
  showAside.value = false
}

//hide the aside
const handleHide = (): void => {
  showAside.value = true
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
    <RouterView :showAside="showAside" />
  </div>
</template>
