<template>
  <section class="bg-gray-100 container mt-10 py-3">
    <div class="mx-auto px-4">
      <h2 class="text-2xl font-bold mb-6 text-center">Featured Products</h2>

      <!-- Swiper Carousel -->
      <Swiper
        :modules="[Pagination, Autoplay]"
        :slides-per-view="1"
        :space-between="20"
        :loop="true"
        :autoplay="{ delay: 3000 }"
        :pagination="{ clickable: true, el: '.custom-pagination' }"
        :breakpoints="{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 1 },
        }"
        class="w-full"
      >
        <SwiperSlide
          v-for="product in products"
          :key="product.id"
          class="bg-white rounded shadow hover:shadow-lg transition"
        >
          <img
            :src="product.image"
            :alt="product.name"
            class="w-full h-48 object-cover bg-cover bg-inherit bg-no-repeat rounded-t"
          />
        </SwiperSlide>
      </Swiper>
      <div class="custom-pagination mt-4 flex justify-center"></div>
    </div>
  </section>
  <section class="bg-gray-100 mt-10 container py-8">
    <div class="mx-auto px-4">
      <!-- <h2 class="text-2xl font-bold mb-6 text-center">Featured Products</h2> -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div
          v-for="product in products"
          :key="product.id"
          class="bg-white rounded shadow hover:shadow-lg transition"
        >
          <img
            :src="product.image"
            :alt="product.name"
            class="w-full h-48 object-cover rounded-t"
          />
          <div class="p-4">
            <h3 class="text-lg font-semibold">{{ product.name }}</h3>
            <p class="text-gray-600">{{ product.price }}</p>
            <button
              class="mt-2 w-full bg-blue-600 text-white py-1 rounded hover:bg-blue-700 transition"
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <footer />
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const products = [
  {
    id: 1,
    name: "Product One",
    price: "$29.99",
    image: new URL("~/assets/images/image/halo-bar.jpg", import.meta.url).href,
  },
  {
    id: 2,
    name: "Product Two",
    price: "$39.99",
    image: new URL("~/assets/images/image/halo-bar.jpg", import.meta.url).href,
  },
  {
    id: 3,
    name: "Product Three",
    price: "$19.99",
    image: new URL("~/assets/images/image/halos-bg.jpg", import.meta.url).href,
  },
  {
    id: 4,
    name: "Product Four",
    price: "$49.99",
    image: new URL("~/assets/images/image/halos-bg.jpg", import.meta.url).href,
  },
  {
    id: 5,
    name: "Product Five",
    price: "$59.99",
    image: new URL("~/assets/images/image/halos-bg.jpg", import.meta.url).href,
  },
  {
    id: 6,
    name: "Product Six",
    price: "$24.99",
    image: new URL("~/assets/images/image/halo-bar.jpg", import.meta.url).href,
  },
];
</script>

<style scoped>
.custom-pagination .swiper-pagination-bullet {
  width: 10px;
  height: 10px;
  background-color: #999;
  opacity: 1;
  margin: 0 4px;
  border-radius: 50%;
  transition: all 0.3s ease;
}
.custom-pagination .swiper-pagination-bullet-active {
  background-color: #2563eb;
  transform: scale(1.2);
}
</style>
