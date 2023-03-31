
<template>
  <section class="grid grid-cols-1 auto-rows-min gap-6 justify-items-center
    lg:grid-cols-2 xl:grid-cols-3">
    <!-- <GameListCard v-for="item in data"></GameListCard> -->
    <GameListCard v-for="game in gameList" :thumbnail="game.thumbnail" :title="game.title"
      :description="game.short_description" :platform="game.platform" :genre="game.genre" :id="game.id"
      :key="game.id" />
  </section>
</template>

<script setup>
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'c40d428cdamshc9610d296a3fda7p107c53jsncebbbe3a4c5c',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
  }
};

const { data } = await useFetch(() => 'https://free-to-play-games-database.p.rapidapi.com/api/games', options);
const games = useGames();

games.value = data.value.slice(0, 100);
const gameList = ref(games);
</script>