<template>
  <section class="flex flex-col min-h-screen">
    <Navbar />
    <section class="flex justify-center w-full">
      <NuxtPage />
    </section>
    <Foot class="flex-shrink-0 mt-auto"/>
  </section>
</template>

<script setup>
useHeadSafe({
  bodyAttrs: {
    class: "text-gray-300 bg-neutral-800 leading-6"
  }
});
</script>
