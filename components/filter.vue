<template>
  <section class="bg-neutral-700 rounded-md w-full mb-6">
    
    <!-- Dropdown List -->
   
      <slot name="select"></slot>

    <section class="px-6 pb-6">
      <p class="text-2xl my-3 font-bold">{{ title }}</p>
      <hr>
      <div class="max-h-40 overflow-y-scroll">
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