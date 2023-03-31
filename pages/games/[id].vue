<template>
  <main class="mt-20 mx-5 
        sm:mx-16 md:mx-10">
    <section class="">
      <img :src="gameDetails.thumbnail" alt="Logo of the game" class="w-full md:fixed md:w-60 lg:w-64">
      <section class="grid grid-cols-1 gap-y-6 md:ml-64 lg:ml-72">
        <h1 class="text-2xl">{{ gameDetails.title }}</h1>
        <section>
          <h2 class="text-xl">About {{ gameDetails.title }}</h2>
          <hr>
          <p>{{ gameDetails.description }}</p>
        </section>
        <h2 class="text-xl">Additional Information</h2>
        <section class="grid grid-cols-2 gap-y-6">
          <div>
            <p class="text-neutral-500">Title</p>
            <p>{{ gameDetails.title }}</p>
          </div>
          <div>
            <p class="text-neutral-500">Developer</p>
            <p>{{ gameDetails.developer }}</p>
          </div>
          <div>
            <p class="text-neutral-500">Publisher</p>
            <p>{{ gameDetails.publisher }}</p>
          </div>
          <div>
            <p class="text-neutral-500">Release Date</p>
            <p>{{ gameDetails.release_date }}</p>
          </div>
          <div>
            <p class="text-neutral-500">Genre</p>
            <p>{{ gameDetails.genre }}</p>
          </div>
          <div>
            <p class="text-neutral-500">Platform</p>
            <p>{{ gameDetails.platform }}</p>
          </div>
        </section>
        <h2 class="text-xl">Screenshots</h2>
        <section>
          <section class="grid grid-cols-2 gap-x-6 md:grid-cols-3">
            <img :src="pic.image" alt="" v-for="pic in gameDetails.screenshots">
          </section>
        </section>
        <h2 class="text-xl">Minimum System Requirements</h2>
        <section class="grid grid-cols-1 gap-y-6 mb-2 
              sm:grid-cols-2" v-if="gameSysReq">
          <div>
            <p class="text-neutral-500">OS</p>
            <p>{{ gameSysReq.os }}</p>
          </div>
          <div>
            <p class="text-neutral-500">Memory</p>
            <p>{{ gameSysReq.memory }}</p>
          </div>
          <div>
            <p class="text-neutral-500">Storage</p>
            <p>{{ gameSysReq.storage }}</p>
          </div>
          <div>
            <p class="text-neutral-500">Processor</p>
            <p>{{ gameSysReq.processor }}</p>
          </div>
          <div>
            <p class="text-neutral-500">Graphics</p>
            <p>{{ gameSysReq.graphics }}</p>
          </div>
        </section>
        <section v-else>
          <p>
            Forge of Empires is a browser based game and should run smoothly on practically any PC with a updated
            web-browser.
          </p>
          <br>
          <p>
            If you have old hardware or software, you may still be able to play Forge of Empires, but your game experience
            may suffer. For the best gameplay experience, we recommend the latest versions of Firefox, Chrome, or Internet
            Explorer.
          </p>
        </section>
      </section>
    </section>
  </main>
</template>

<script setup>
const route = useRoute();
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'c40d428cdamshc9610d296a3fda7p107c53jsncebbbe3a4c5c',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
  },
  query: {}
};

options.query.id = route.params.id;

const { data } = await useFetch(() => 'https://free-to-play-games-database.p.rapidapi.com/api/game', options);

const gameDetails = data.value;
const gameSysReq = data.value.minimum_system_requirements;

console.log(gameDetails);

// console.log(route.params.id)

</script>