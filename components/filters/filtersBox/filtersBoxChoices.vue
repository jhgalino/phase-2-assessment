<template>
  <div v-for="item in items">
          <input type="checkbox" autocomplete="off" 
          :name="item.id" 
          :id="item.id" 
          v-model="item.checked"
          @click="emit('filterOptionChecked')">
          <label class="text-lg" :for="item.id">{{ item.label }}</label>
        </div>
</template>

<script setup>
defineProps({
  items: Array,
})

const emit = defineEmits(['filterOptionChecked']);

</script>