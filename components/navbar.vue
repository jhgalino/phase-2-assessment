<template>
  <nav class="flex fixed top-0 bg-neutral-500 w-full justify-between items-center align-center px-4">
    <section class="flex items-center">
      <img src="~/assets/img/logo.svg" alt="Logo of Free2Game" class="w-14">
      <p class="text-xl">FREETOGAME</p>
      <ul class="hidden lg:flex ml-4">
        <li class="ml-2">
          <a href="">Free Games</a>
        </li>
        <li class="ml-2">
          <a href="">Browser Games</a>
        </li>
        <li class="ml-2">
          <a href="">Special Offers</a>
        </li>
        <li class="ml-2">
          <a href="">Top 2023</a>
        </li>
      </ul>
    </section>
    <button class="border-white border-2 p-2 rounded-md hidden lg:block">
      <p>Log In</p>
    </button>
    <button class="lg:hidden">
      <img src="~/assets/img/hamburger.svg" alt="" class="w-14">
    </button>
  </nav>
</template>