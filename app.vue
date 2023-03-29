<template>
  <Navbar />
  <NuxtPage />
</template>

<script setup>
let body = useHeadSafe({
  bodyAttrs: {
    class: "text-gray-300 bg-neutral-800 leading-6"
  }
})
</script>
