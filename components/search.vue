<template>
  <header class="flex w-full max-w-screen-sm px-10 mt-20 mb-2 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
    <input type="text" name="search" id="search" placeholder="Search for games..." autocomplete="off"
      class="w-full h-10 bg-neutral-700" v-model.trim="searchTerm" @change="search()">
  </header>
</template>

<script setup>
const games = useGames();
const gamesCache = useGamesCache()
const searchTerm = ref('');


async function search() {
  if (searchTerm.value !== '') {
    const sanitized = searchTerm.value.toLowerCase();
    games.value = gamesCache.value.filter(item => item.title.toLowerCase().includes(sanitized));
  } else {
    games.value = gamesCache.value;
  }
}
</script>