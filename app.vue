<template>
  <section class="flex flex-col min-h-screen">
    <Navbar />
    <section class="flex flex-col items-center w-full">
      <NuxtPage />
    </section>
    <Foot class="justify-between flex-shrink-0 mt-auto md:flex" />
  </section>
</template>

<script setup>
useHeadSafe({
  bodyAttrs: {
    class: "text-gray-300 bg-neutral-800 leading-6"
  }
});
</script>
