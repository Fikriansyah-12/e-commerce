<template>
  <section id="navbar">
    <nav class="bg-gray-400">
      <div class="container mx-auto px-4 flex justify-between items-center h-16">
        <!-- Logo -->
        <NuxtLink to="/">
          <img src="~/assets/images/image/visor.png" alt="Halos Logo" class="w-36" />
        </NuxtLink>

        <div class="relative w-72 md:w-1/2">
          <!-- Tambahkan w-72 / w-96 di sini -->
          <input
            id="search"
            type="text"
            name="search"
            placeholder="Search..."
            class="w-full pl-10 pr-4 py-2 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-200 text-gray-800 placeholder-gray-500"
          />
          <svg
            class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.35 4.35a7.5 7.5 0 0012.3 12.3z"
            />
          </svg>
        </div>

        <!-- Desktop Menu -->
        <ul class="hidden md:flex space-x-6 text-blackAccent">
          <li>
            <NuxtLink
              class="text-sm font-semibold tracking-wide hover:text-gray-300"
              to="#"
            >
              ABOUT
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              class="text-sm font-semibold tracking-wide hover:text-gray-300"
              to="#"
            >
              CONTACT US
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              class="text-sm font-semibold tracking-wide hover:text-gray-300"
              to="#"
            >
              PORTFOLIO
            </NuxtLink>
          </li>
        </ul>
        <!-- Cart -->
        <div class="relative">
          <div>
            <Iconify icon="mynaui:cart-solid" class="w-5 h-5" />
          </div>
        </div>
        <!-- Avatar Button -->
        <div ref="menuRef" class="relative">
          <div>
            <button
              id="user-menu-button"
              type="button"
              class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-800"
              aria-haspopup="true"
              :aria-expanded="isUserMenuOpen ? 'true' : 'false'"
              @click="isUserMenuOpen = !isUserMenuOpen"
            >
              <span class="sr-only">Open user menu</span>
              <img
                class="size-8 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </button>
          </div>

          <!-- Dropdown Menu -->
          <div
            v-if="isUserMenuOpen"
            class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="user-menu-button"
          >
            <a
              href="#"
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
              >Your Profile</a
            >
            <a
              href="#"
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
              >Settings</a
            >
            <a
              href="#"
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
              >Sign out</a
            >
          </div>
        </div>
        <!-- Mobile Hamburger -->
        <button class="text-white md:hidden focus:outline-none" @click="isOpen = !isOpen">
          <svg
            v-if="!isOpen"
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div v-show="isOpen" class="md:hidden bg-gray-400 px-4 pb-4 space-y-2 text-white">
        <NuxtLink
          class="block text-sm font-light tracking-wide hover:text-gray-300"
          to="#"
        >
          ABOUT
        </NuxtLink>
        <NuxtLink
          class="block text-sm font-light tracking-wide hover:text-gray-300"
          to="#"
        >
          CONTACT US
        </NuxtLink>
        <NuxtLink
          class="block text-sm font-light tracking-wide hover:text-gray-300"
          to="#"
        >
          PORTFOLIO
        </NuxtLink>
      </div>
    </nav>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";

const menuRef = ref();

onClickOutside(menuRef, () => {
  isUserMenuOpen.value = false;
});

const isUserMenuOpen = ref(false);
const isOpen = ref(false);
</script>
