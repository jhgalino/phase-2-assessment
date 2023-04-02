<template>
  <section>
    <FiltersBox title="Platform" :items="platforms" :type="platformType" @filter-checked="filter">
      <template #select>
        <select autocomplete="off" v-model="sortBy" @change="filter('sort')"
          class="w-full h-10 text-lg text-gray-500 border-0 bg-neutral-900 empty:hidden">
          <option value="">Sorted By:</option>
          <option value="relevance">Relevance</option>
          <option value="popularity">Popularity</option>
          <option value="release-date">Release Date</option>
          <option value="alphabetical">Alphabetical</option>
        </select>
      </template>
    </FiltersBox>

    <FiltersBox title="Genre" :items="categories" :type="tagsType" @filter-checked="filter">
      <template #select>
        <select autocomplete="off" class="w-full h-10 text-lg text-gray-500 border-0 bg-neutral-900 empty:hidden">
          <option value="">Filters Type:</option>
          <option value="and">AND (All of the options selected)</option>
          <option value="or">OR (Any of the options selected)</option>
          <option value="not">NOT (Excluding options)</option>
        </select>
      </template>
    </FiltersBox>

    <FiltersBox title="Graphics" :items="graphics" :type="tagsType" @filter-checked="filter" />

    <FiltersBox title="Combat" :items="combat" :type="tagsType" @filter-checked="filter" />

    <FiltersBox title="Gameplay" :items="gameplay" :type="tagsType" @filter-checked="filter" />

    <FiltersBox title="Setting" :items="settings" :type="tagsType" @filter-checked="filter" />

    <FiltersBox title="Tags" :items="tags" :type="tagsType" @filter-checked="filter" />
  </section>
</template>

<script setup>
const emit = defineEmits(['filtersReady']);

const sortBy = ref('');

const platformType = 'platforms';
const tagsType = 'tags';

const platformChoices = new Set();
const tagChoices = new Set();

const platforms = ['PC', 'Browser'];
const categories = ['MMO', 'MMORPG', 'Shooter', 'Strategy', 'Moba',
  'Battle Royale', 'Card', 'Racing', 'Sports', 'Social', 'Fighting']
const tags = ['MMOFPS', 'Sandbox', 'Open World', 'Survival', 'Action RPG',
  'MMORTS', 'Zombie', 'First Person', 'Top-Down', 'Tank', 'Space', 'Sailing',
  'Side Scroller', 'Superhero', 'Permadeath', 'Action', 'Martial Arts',
  'Flight', 'Low-Spec']
const graphics = ['3D Graphics', '2D Graphics'];
const combat = ['PVE', 'PVP'];
const gameplay = ['Turn-Based', 'Real-Time'];
const settings = ['Anime', 'Fantasy', 'Sci-fi', 'Military', 'Horror'];

async function filter(id, type) {
  switch (type) {
    case 'platforms':
      if (platformChoices.has(id)) {
        platformChoices.delete(id);
      } else {
        platformChoices.add(id);
      }
      break;
    case 'tags':
      if (tagChoices.has(id)) {
        tagChoices.delete(id);
      } else {
        tagChoices.add(id);
      }
      break;
    case 'sort':
      break;
    default:
    throw ('Invalid type: ' + type);
  }

  const platformParams = Array.from(platformChoices.values());
  const tagParams = Array.from(tagChoices.values());

  emit('filtersReady', platformParams, tagParams, sortBy.value);
}
</script>