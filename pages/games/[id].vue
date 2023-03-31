<template>
  <main class="mt-20">
    <section>
      <img src="" alt="">
      <section>
        <h1>Title</h1>
        <section>
          <h2></h2>
          <hr>
          <p></p>
        </section>
        <h2>Additional Information</h2>
        <section>

        </section>
        <section>
          <h2>Screenshots</h2>
          <section>

          </section>
        </section>
        <section>
          <h2>Minimum System Requirements</h2>
          <section>

          </section>
        </section>
      </section>
    </section>
  </main>
</template>

<script>
const route = useRoute();
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'c40d428cdamshc9610d296a3fda7p107c53jsncebbbe3a4c5c',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
  },
};

const { data } = await useFetch(() => `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${route.params.id}`, options);

console.log(data.value);

</script>