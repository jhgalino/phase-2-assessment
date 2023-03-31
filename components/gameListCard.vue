<template>
  <section class="bg-neutral-700 flex flex-col items-center w-full">
    <NuxtLink :to="gameLink" class="w-full">
      <img :src="thumbnail" alt="" class="w-full">
    </NuxtLink>
    <section class="w-full p-5">
      <NuxtLink :to="gameLink" class="flex justify-between items-center">
        <p class="text-xl">{{ title }}</p>
        <p>Free</p>
      </NuxtLink>
      <p class="truncate my-5">{{ description }}</p>
      <div class="flex justify-between">
        <img src="~/assets/img/plus-circle.svg" alt="image showing a plus" class="w-3">
        <div class="flex">
          <p>{{ genre }}</p>
          <img :src="platformLogo" alt="" class="w-3 ml-2">
        </div>
      </div>
    </section>
  </section>
</template>

<script setup>
  const props = defineProps({
    thumbnail: String,
    id: Number,
    title: String,
    description: String,
    platform: String,
    genre: String
  })

  const gameLink = `/games/${props.id}`;

  const platformLogo = 
    props.platform === 'PC (Windows)' 
      ? 'public_images/windows.svg'
      : 'public_images/browser.svg';
</script>