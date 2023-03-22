<template>
  <div class="m-5 " :class="showAside ? 'md:ml-10' : 'md:ml-[30%]'">
    <DetailsComp :key="foundResult?.mal_id" :foundResult="foundResult" />
  </div>
</template>

<script setup lang="ts">
import DetailsComp from "@/components/DetailsComponent.vue";
import type Anime from "@/models";
import { onMounted, ref, watchEffect, type PropType } from "vue";
import { useRoute } from 'vue-router';


const route = useRoute();
const id = Number(route.params.id);



const props = defineProps({
  showAside: Boolean,
  foundResult: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['searchAnime'])

watchEffect(() => {
  emit('searchAnime', id)
})

onMounted(() => {
  emit('searchAnime', id)
})
</script>
