<template>
  <header class="flex w-full max-w-screen-sm px-10 mt-20 mb-2 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
    <input type="text" name="search" id="search" placeholder="Search for games..." autocomplete="off"
      class="w-full h-10 bg-neutral-700" v-model.trim="searchTerm" @change="emit('hasSearchTerm', searchTerm)">
  </header>
</template>

<script setup>
const searchTerm = ref('');

const emit = defineEmits(['hasSearchTerm']);
</script>