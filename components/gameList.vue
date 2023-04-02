<template>
  <section class="grid grid-cols-1 gap-6 auto-rows-min justify-items-center lg:grid-cols-12 xl:grid-cols-3">
    <GameListCard v-for="game in gameList" :thumbnail="game.thumbnail" :title="game.title"
      :description="game.short_description" :platform="game.platform" :genre="game.genre" :id="game.id"
      :key="game.id" />
  </section>
</template>

<script setup>
const props = defineProps({
  gameList: Array
})
</script>