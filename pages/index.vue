<template>
  <Search />
  <main
    class="grid max-w-sm grid-cols-1 gap-6 mx-10 justify-items-center md:grid-cols-12 md:max-w-screen-md lg:max-w-screen-lg lg:mx-12 xl:max-w-screen-xl xl:mx-20">
    <Filters class="flex flex-col justify-start w-full md:col-start-1 md:col-end-5 lg:col-end-4" />
    <GameList class="md:col-start-5 md:col-end-13 lg:col-start-4" />
  </main>
</template>

<script setup>
const searchTerm = ref('');
const games = useGames();
const gamesCache = useGamesCache();

// async function search() {
//   if (searchTerm.value !== '') {
//     const sanitized = searchTerm.value.toLowerCase();
//     games.value = gamesCache.value.filter(item => item.title.toLowerCase().includes(sanitized));
//   } else {
//     games.value = gamesCache.value;
//   }
// }

// watch(
//   () => [selectedPlatforms.value, selectedCategories.value, selectedTags.value, sortBy.value],
//   async () => {
//     if (selectedPlatforms.value.length === 2) {
//       options.query['platform'] = 'all';
//     } else if (selectedPlatforms.value.length === 1) {
//       options.query['platform'] = `${selectedPlatforms.value[0]}`;
//     }

//     if (sortBy.value !== '') {
//       options.query['sort-by'] = sortBy.value;
//     }


//     if (selectedCategories.value.length === 0
//       && selectedTags.value.length === 0) {
//       try {
//         const { data } = await useFetch(
//           () => `https://free-to-play-games-database.p.rapidapi.com/api/games`,
//           options);
//         games.value = data.value;
//       } catch (err) {
//         return err;
//       }
//     } else {
//       const tags = `${selectedTags.value.concat(selectedCategories.value).join('.')}`;
//       options.query.tag = tags;
//       try {
//         const { data } = await useFetch(
//           () => `https://free-to-play-games-database.p.rapidapi.com/api/filter`,
//           options);
//         games.value = data.value;
//       } catch (err) {
//         return err
//       }
//     }
//   });
</script>