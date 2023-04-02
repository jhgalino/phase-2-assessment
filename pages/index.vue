<template>
  <Search />
  <main
    class="grid max-w-sm grid-cols-1 gap-6 mx-10 justify-items-center md:grid-cols-12 md:max-w-screen-md lg:max-w-screen-lg lg:mx-12 xl:max-w-screen-xl xl:mx-20">
    <Filters class="flex flex-col justify-start w-full md:col-start-1 md:col-end-5 lg:col-end-4" />
    <GameList class="md:col-start-5 md:col-end-13 lg:col-start-4" />
  </main>
</template>

<script setup>

</script>