<template>
  <footer class="bg-gray-100 dark:bg-darkAccent2 text-gray-700 dark:text-gray-300 mt-10">
    <div class="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-8">
      <!-- Column 1: Logo & Description -->
      <div class="text-black">
        <NuxtLink to="/" class="flex items-center space-x-2 mb-4">
          <img src="/assets/images/image/visor.png" alt="Logo" class="h-16" />
          <span class="font-semibold text-lg">OSBEVISOR Shop</span>
        </NuxtLink>
        <p class="text-sm">The best place to find your favorite products and deals.</p>
      </div>

      <!-- Column 2: Navigation -->
      <div>
        <h3 class="font-semibold text-black mb-3">Company</h3>
        <ul class="space-y-2 text-black text-sm">
          <li><NuxtLink to="/about" class="hover:text-blue-600">About Us</NuxtLink></li>
          <li><NuxtLink to="/contact" class="hover:text-blue-600">Contact</NuxtLink></li>
          <li><NuxtLink to="/careers" class="hover:text-blue-600">Careers</NuxtLink></li>
          <li><NuxtLink to="/blog" class="hover:text-blue-600">Blog</NuxtLink></li>
        </ul>
      </div>

      <!-- Column 3: Customer Service -->
      <div class="text-black">
        <h3 class="font-semibold mb-3">Customer Service</h3>
        <ul class="space-y-2 text-sm">
          <li><NuxtLink to="/help" class="hover:text-blue-600">Help Center</NuxtLink></li>
          <li><NuxtLink to="/returns" class="hover:text-blue-600">Returns</NuxtLink></li>
          <li>
            <NuxtLink to="/shipping" class="hover:text-blue-600">Shipping</NuxtLink>
          </li>
          <li><NuxtLink to="/faq" class="hover:text-blue-600">FAQ</NuxtLink></li>
        </ul>
      </div>

      <!-- Column 4: Social Media -->
      <div class="text-xl">
        <h3 class="font-semibold text-black mb-3">Follow Us</h3>
        <div class="flex space-x-4">
          <a href="#" aria-label="Facebook" class="hover:text-blue-600 text-blue-700">
            <Iconify icon="mdi:facebook" class="w-5 h-5" />
          </a>
          <a href="#" aria-label="Twitter" class="hover:text-blue-600 text-blue-500">
            <Iconify icon="mdi:twitter" class="w-5 h-5" />
          </a>
          <a href="#" aria-label="Instagram" class="hover:text-blue-600 text-pink-400">
            <Iconify icon="mdi:instagram" class="w-5 h-5" />
          </a>
          <a href="#" aria-label="LinkedIn" class="hover:text-blue-600 text-blue-600">
            <Iconify icon="mdi:linkedin" class="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>

    <!-- Bottom -->
    <div
      class="border-t border-gray-300 text-black font-semibold dark:border-gray-700 mt-8"
    >
      <div
        class="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center text-sm"
      >
        <p>&copy; 2024 CV OSBEVISOR Indonesia. All rights reserved.</p>
        <div class="flex space-x-4 mt-2 md:mt-0">
          <NuxtLink to="/privacy" class="hover:text-blue-600">Privacy Policy</NuxtLink>
          <NuxtLink to="/terms" class="hover:text-blue-600">Terms of Service</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// import { Iconify } from "@iconify/vue";
</script>
