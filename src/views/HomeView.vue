<template>
  <div class="m-5" :class="showAside ? 'md:ml-10' : 'md:ml-[30%]'">
    <SearchInput v-model='searchInput' />
  </div>
  <RouterView />
</template>

<script setup lang="ts">
import SearchInput from '@/components/SearchInput.vue';
import { ref, watchEffect } from 'vue';

const searchInput = ref("")

defineProps({
  showAside: Boolean
})

watchEffect(() => {
  console.log(searchInput.value);
})

</script>
