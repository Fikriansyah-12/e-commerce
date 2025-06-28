<template>
  <section id="navbar">
    <Navbar
      class="bg-[#0f0f0f] text-white py-4 mb-2 flex justify-between items-center container"
    >
      <div class="py-5">
        <img src="~/assets/images/logo/halos.svg" alt="Halos Logo" class="h-8 w-24" />
      </div>
      <ul class="flex gap-6">
        <li class="relative group">
          <a href="#" class="flex items-center text-sm font-light tracking-wide">
            MANAGEMENT <span class="ml-2 transition-transform text-xl">+</span>
          </a>
        </li>
        <li class="relative group">
          <a href="#" class="flex items-center text-sm font-light tracking-wide">
            ENTERTAINMENT
            <span class="ml-2 transition-transform text-xl">+</span>
          </a>
          <!-- <ul
          class="absolute left-0 mt-2 w-40 bg-gray-800 text-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300"
        >
          <li>
            <a href="#" class="block px-4 py-2 hover:bg-gray-700">REGULER</a>
          </li>
          <li>
            <a href="#" class="block px-4 py-2 hover:bg-gray-700">OUR EVENT</a>
          </li>
          <li>
            <a href="#" class="block px-4 py-2 hover:bg-gray-700">PAST EVENT</a>
          </li>
        </ul> -->
        </li>
        <li><a class="text-sm font-light tracking-wide" href="#">ABOUT</a></li>
        <li>
          <a class="text-sm font-light tracking-wide" href="#">CONTACT US</a>
        </li>
        <li>
          <a class="text-sm font-light tracking-wide" href="#">PORTFOLIO</a>
        </li>
        <li><a class="text-sm font-light tracking-wide" href="#">ARTICLE</a></li>
        <li><a class="text-sm font-light tracking-wide" href="#">MERCH</a></li>
      </ul>
      <!-- <ul class="flex gap-6">
      <li class="relative group">
        <a href="#" class="flex items-center">
          MANAGEMENT <span class="ml-2 transition-transform text-xl">+</span>
        </a>
      </li>
      <li class="relative group">
        <a href="#" class="flex items-center">
          ENTERTAINMENT
          <span
            class="ml-2 transition-transform text-xl"
            :class="{ 'rotate-45': isHovered, 'rotate-0': !isHovered }"
            >+</span
          >
        </a>
        <ul
          class="absolute left-0 mt-2 w-40 bg-gray-800 text-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300"
        >
          <li><a href="#" class="block px-4 py-2 hover:bg-gray-700">REGULER</a></li>
          <li><a href="#" class="block px-4 py-2 hover:bg-gray-700">OUR EVENT</a></li>
          <li><a href="#" class="block px-4 py-2 hover:bg-gray-700">PAST EVENT</a></li>
        </ul>
      </li>
      <li><a href="#">ABOUT</a></li>
      <li><a href="#">CONTACT US</a></li>
      <li><a href="#">PORTFOLIO</a></li>
      <li><a href="#">ARTICLE</a></li>
      <li><a href="#">MERCH</a></li>
    </ul> -->
    </Navbar>
  </section>
</template>

<script setup lang="ts">
// import { ref } from "vue";

// const isHovered = ref(false);
</script>
