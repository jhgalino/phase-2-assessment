<template>
  <header class="flex mt-20 px-10 max-w-screen-sm mb-2 w-full 
            md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
    <input type="text" name="search" id="search" placeholder="Search for games..." autocomplete="off"
      class="w-full bg-neutral-700 h-10" v-model.trim="searchTerm" @change="search()">
  </header>
  <main class="grid grid-cols-1 gap-6 mx-10 justify-items-center max-w-sm
            md:grid-cols-12 md:max-w-screen-md
            lg:max-w-screen-lg lg:mx-12
            xl:max-w-screen-xl xl:mx-20">
    <section class="flex flex-col justify-start w-full 
              md:col-start-1 md:col-end-5
              lg:col-end-4">
      <Filter title="Platform">
        <template #select>
          <select class="w-full border-0 text-lg h-10 text-gray-500 bg-neutral-900 empty:hidden" autocomplete="off"
            v-model="sortBy">
            <option value="">Sorted By:</option>
            <option value="relevance">Relevance</option>
            <option value="popularity">Popularity</option>
            <option value="release-date">Release Date</option>
            <option value="alphabetical">Alphabetical</option>
          </select>
        </template>

        <template #choices>
          <FilterChoices :items="platforms" @filterOptionChecked="" />
        </template>
      </Filter>

      <Filter title="Genre">
        <template #select>
          <select class="w-full border-0 text-lg h-10 text-gray-500 bg-neutral-900 empty:hidden">
            <option value="">Filter Type:</option>
            <option value="and">AND (All of the options selected)</option>
            <option value="or">OR (Any of the options selected)</option>
            <option value="not">NOT (Excluding options)</option>
          </select>
        </template>

        <template #choices>
          <FilterChoices :items="categories" />
        </template>
      </Filter>

      <Filter title="Graphics">
        <template #choices>
          <FilterChoices :items="graphics" />
        </template>
      </Filter>

      <Filter title="Combat">
        <template #choices>
          <FilterChoices :items="combat" />
        </template>
      </Filter>

      <Filter title="Gameplay">
        <template #choices>
          <FilterChoices :items="gameplay" />
        </template>
      </Filter>

      <Filter title="Setting">
        <template #choices>
          <FilterChoices :items="setting" />
        </template>
      </Filter>

      <Filter title="Tags">
        <template #choices>
          <FilterChoices :items="tags" />
        </template>
      </Filter>
    </section>
    <GameList class="md:col-start-5 md:col-end-13
                                    lg:col-start-4" />
  </main>
</template>

<script setup>
const sortBy = ref('');

const platforms = ref([
  { label: 'PC', id: 'pc', checked: false },
  { label: 'Browser', id: 'browser', checked: false }
]);

const categories = ref([
  { label: 'MMO', id: 'mmo', checked: false },
  { label: 'MMORPG', id: 'mmorpg', checked: false },
  { label: 'Shooter', id: 'shooter', checked: false },
  { label: 'Strategy', id: 'strategy', checked: false },
  { label: 'Moba', id: 'moba', checked: false },
  { label: 'Battle Royale', id: 'battle-royale', checked: false },
  { label: 'Card', id: 'card', checked: false },
  { label: 'Racing', id: 'racing', checked: false },
  { label: 'Sports', id: 'sports', checked: false },
  { label: 'Social', id: 'social', checked: false },
  { label: 'Fighting', id: 'fighting', checked: false },
]);

const graphics = ref([
  { label: '3D Graphics', id: '3d', checked: false },
  { label: '2D Graphics', id: '2d', checked: false },
]);

const combat = ref([
  { label: 'PVE', id: 'pve', checked: false },
  { label: 'PVP', id: 'pvp', checked: false },
]);

const gameplay = ref([
  { label: 'Turn-Based', id: 'turn-based', checked: false },
  { label: 'Real-Time', id: 'real-time', checked: false },
]);

const setting = ref([
  { label: 'Anime', id: 'anime', checked: false },
  { label: 'Fantasy', id: 'fantasy', checked: false },
  { label: 'Sci-fi', id: 'sci-fi', checked: false },
  { label: 'Military', id: 'military', checked: false },
  { label: 'Horror', id: 'horror', checked: false },
])

const tags = ref([
  { label: "MMOFPS", id: "mmofps", checked: false },
  { label: "Sandbox", id: "sandbox", checked: false },
  { label: "Open World", id: "open-world", checked: false },
  { label: "Survival", id: "survival", checked: false },
  { label: "Action RPG", id: "action-rpg", checked: false },
  { label: "MMORTS", id: "mmorts", checked: false },
  { label: "Zombie", id: "zombie", checked: false },
  { label: "First Person", id: "first-person", checked: false },
  { label: "Top-Down", id: "top-down", checked: false },
  { label: "Tank", id: "tank", checked: false },
  { label: "Space", id: "space", checked: false },
  { label: "Sailing", id: "sailing", checked: false },
  { label: "Side Scroller", id: "side-scroller", checked: false },
  { label: "Superhero", id: "superhero", checked: false },
  { label: "Permadeath", id: "permadeath", checked: false },
  { label: "Action", id: "action", checked: false },
  { label: "Martial Arts", id: "martial-arts", checked: false },
  { label: "Flight", id: "flight", checked: false },
  { label: "Low-Spec", id: "low-spec", checked: false }
])

const selectedPlatforms = computed(() => {
  return platforms.value
    .filter(item => item.checked)
    .map(item => item.id);
});

const selectedCategories = computed(() => {
  return categories.value
    .filter(item => item.checked)
    .map(item => item.id);
});

const selectedTags = computed(() => {
  const graph = graphics.value
    .filter(item => item.checked)
    .map(item => item.id);

  const comb = combat.value
    .filter(item => item.checked)
    .map(item => item.id);

  const gamep = gameplay.value
    .filter(item => item.checked)
    .map(item => item.id);

  const sett = setting.value
    .filter(item => item.checked)
    .map(item => item.id);

  const tag = tags.value
    .filter(item => item.checked)
    .map(item => item.id)
    .concat(graph, comb, gamep, sett);

  return tag;
});

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'c40d428cdamshc9610d296a3fda7p107c53jsncebbbe3a4c5c',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
  },
  query: {}
};

const searchTerm = ref('');
const games = useGames();
const gamesCache = useGamesCache();

async function search() {
  if (searchTerm.value !== '') {
    const sanitized = searchTerm.value.toLowerCase();
    games.value = gamesCache.value.filter(item => item.title.toLowerCase().includes(sanitized));
  } else {
    games.value = gamesCache.value;
  }
}

watch(
  () => [selectedPlatforms.value, selectedCategories.value, selectedTags.value, sortBy.value],
  async () => {
    if (selectedPlatforms.value.length === 2) {
      options.query['platform'] = 'all';
    } else if (selectedPlatforms.value.length === 1) {
      options.query['platform'] = `${selectedPlatforms.value[0]}`;
    }

    if (sortBy.value !== '') {
      options.query['sort-by'] = sortBy.value;
    }


    if (selectedCategories.value.length === 0
      && selectedTags.value.length === 0) {
      try {
        const { data } = await useFetch(
          () => `https://free-to-play-games-database.p.rapidapi.com/api/games`,
          options);
        games.value = data.value;
      } catch (err) {
        return err;
      }
    } else {
      const tags = `${selectedTags.value.concat(selectedCategories.value).join('.')}`;
      options.query.tag = tags;
      try {
        const { data } = await useFetch(
          () => `https://free-to-play-games-database.p.rapidapi.com/api/filter`,
          options);
        games.value = data.value;
      } catch (err) {
        return err
      }
    }
  });
</script>