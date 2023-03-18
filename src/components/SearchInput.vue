<template>
  <div class="flex flex-col items-center justify-center gap-7">
    <img class="w-24 h-24" src="../assets/images/edward_1_other.png" alt="Elric Brothers" />
    <form role="form" class="w-full flex justify-center" @submit.prevent>
      <input
        class="w-7/12 max-w-[900px] min-w-[300px] h-12 pl-6 rounded-xl focus:outline-none outline outline-blue-900"
        role="searchbox"
        type="text"
        placeholder="Search for anime..."
        :value="modelValue"
        @input="updateValue"
      />
    </form>
  </div>
</template>

<script setup lang="ts">
defineProps(['modelValue'])
const emit: (event: 'update:modelValue', ...args: any[]) => void = defineEmits([
  'update:modelValue'
])

const updateValue: (e: Event) => void = (e: Event) => {
  emit('update:modelValue', (e.target as HTMLInputElement).value)
}
</script>
