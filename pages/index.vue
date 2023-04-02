<template>
  <Search @has-search-term="search" />
  <main
    class="grid max-w-sm grid-cols-1 gap-6 mx-10 justify-items-center md:grid-cols-12 md:max-w-screen-md lg:max-w-screen-lg lg:mx-12 xl:max-w-screen-xl xl:mx-20">
    <Filters class="flex flex-col justify-start w-full md:col-start-1 md:col-end-5 lg:col-end-4"
      @filters-ready="fetchGames" />
    <Loading class="md:col-start-5 md:col-end-13 lg:col-start-4" v-if="showLoading" />
    <GameList class="md:col-start-5 md:col-end-13 lg:col-start-4" :game-list="games" v-else />
  </main>
</template>

<script setup>
const gamesCache = ref([]);
const games = ref([]);
const showLoading = ref(false);

async function fetchGames(platform, tags, sortBy) {
  showLoading.value = true;

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'c40d428cdamshc9610d296a3fda7p107c53jsncebbbe3a4c5c',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
    },
    query: {},
  };

  if (platform.length === 2) {
    options.query.platform = 'all';
  } else if (platform.length === 1) {
    options.query.platform = platform[0];
  }

  if (sortBy !== '') {
    options.query['sort-by'] = sortBy;
  }

  if (tags.length === 0) {
    try {
      const { data } = await useFetch(
        () => 'https://free-to-play-games-database.p.rapidapi.com/api/games',
        options)

      gamesCache.value = data.value;
      games.value = gamesCache.value;
      showLoading.value = false;
    } catch {
      navigateTo('/error');
    }
  } else {
    try {
      options.query.tag = tags.join('.');
    const { data } = await useFetch(
      () => 'https://free-to-play-games-database.p.rapidapi.com/api/filter',
      options)

    gamesCache.value = data.value;
    games.value = gamesCache.value;
    showLoading.value = false;
    } catch {
      navigateTo('/error');
    }
  }
}

function search(searchTerm) {
  if (searchTerm !== '') {
    const sanitized = searchTerm.toLowerCase();
    games.value = gamesCache.value
      .filter(item => item.title.toLowerCase().includes(sanitized));
  } else {
    games.value = gamesCache.value;
  }
}

fetchGames([], [], '');
</script>