<template>
  <section class="w-full mb-6 rounded-md bg-neutral-700">
    <slot name="select"></slot>

    <section class="px-6 pb-6">
      <p class="my-3 text-2xl font-bold">{{ title }}</p>
      <hr>
      <div class="overflow-y-scroll max-h-40">
        <div v-for="item in items">
          <input type="checkbox" autocomplete="off" :name="item" :id="toApiFormat(item)" 
            @click="emit('filterChecked', toApiFormat(item), type)">
          <label class="text-lg" :for="toApiFormat(item)">{{ item }}</label>
        </div>
      </div>
    </section>
  </section>
</template>

<script setup>
const props = defineProps({
  title: String,
  type: String,
  items: Array,
})

const emit = defineEmits(['filterChecked']);

function toApiFormat (string) {
  const sanitized = string.toLowerCase().trim();
  switch (true) {
    case sanitized.includes('2d'):
      return '2d';
    case sanitized.includes('3d'):
      return '3d'
    case sanitized.includes(' '):
      return sanitized.split(' ').join('-');
    default:
      return sanitized;
  }
}
</script>