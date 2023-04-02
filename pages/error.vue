<template>
  <div class="flex items-center justify-center h-screen">
    <div>
      <h2 class="mb-4 text-lg font-medium">Oops!</h2>
      <p class="text-gray-500">An error occured.</p>
      <button class="px-4 py-2 mt-4 text-white bg-blue-500 rounded" @click="navigateTo('/')">Retry</button>
    </div>
  </div>
</template>