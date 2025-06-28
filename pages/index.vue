<script setup lang="ts">
import MainNavbar from "~/components/navbar/MainNavbar.vue";

// Video URL dari folder public
const videoUrl = "/vidio/vidio-halos.mp4";
</script>

<template>
  <div class="bg-[#0f0f0f] min-h-screen">
    <MainNavbar />

    <!-- Kontainer Grid -->
    <div class="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
      <!-- Kiri: Teks & Video -->
      <div class="bg-[#151515] p-5 rounded-lg shadow-lg space-y-2">
        <!-- Judul -->
        <h1 class="text-4xl text-white font-light uppercase leading-tight tracking-wide">
          ALL IN ONE <br />ENTERTAINMENT
        </h1>

        <!-- Paragraf -->
        <p class="text-gray-300 leading-relaxed">
          We are a one-stop entertainment service provider, delivering exceptional shows
          in collaboration with HW Group. Our portfolio includes club shows, special
          events, and large-scale festivals—most notably, HOLYFEST at Atlas Beach Fest,
          REVIVE, Loco Fella and Scream or Dance We are a one-stop entertainment service
          provider, delivering exceptional shows in collaboration with HW Group
        </p>

        <div
          class="aspect-video overflow-hidden rounded-lg border-2 border-gray-700 shadow-lg"
        >
          <video
            :src="videoUrl"
            autoplay
            loop
            muted
            playsinline
            class="w-full h-full object-cover"
          ></video>
        </div>
      </div>

      <!-- Kanan: Gambar Atas & Bawah -->
      <div class="grid grid-cols-1 gap-6">
        <!-- Gambar Atas -->
        <div
          class="relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-500"
        >
          <NuxtLink to="/" target="_blank">
            <img
              src="../assets/images/image/halos-bg.jpg"
              alt="Entertainment 1"
              class="w-full h-72 object-cover hover:scale-105 transition-all duration-500"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] to-transparent"
            ></div>
          </NuxtLink>
        </div>

        <!-- Gambar Bawah -->
        <div
          class="relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-500"
        >
          <NuxtLink to="/" target="_blank">
            <img
              src="../assets/images/image/halo-bar.jpg"
              alt="Entertainment 2"
              class="w-full h-72 object-cover hover:scale-105 transition-all duration-500"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] to-transparent"
            ></div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
