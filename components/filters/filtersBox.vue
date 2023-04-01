<template>
  <section class="w-full mb-6 rounded-md bg-neutral-700">
    
    <!-- Dropdown List -->
   
      <slot name="select"></slot>

    <section class="px-6 pb-6">
      <p class="my-3 text-2xl font-bold">{{ title }}</p>
      <hr>
      <div class="overflow-y-scroll max-h-40">
        <slot name="choices"></slot>
      </div>

    </section>

  </section>
</template>

<script setup>
let props = defineProps({
  title: String
})
</script>