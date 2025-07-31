<template>
  <div class="bg-gray-50">
    <section class="container py-3">
      <div class="">
        <Swiper
          :modules="[Pagination, Autoplay, Navigation]"
          :slides-per-view="1"
          :space-between="20"
          :loop="true"
          :autoplay="{ delay: 3000 }"
          :pagination="{ clickable: true, el: '.custom-pagination' }"
          :navigation="{
            nextEl: '.custom-swiper-next',
            prevEl: '.custom-swiper-prev',
          }"
          class="w-full relative"
        >
          <!-- Slides -->
          <SwiperSlide class="rounded shadow hover:shadow-lg transition">
            <img
              src="/assets/images/image/timthumb.png"
              alt="Product 1"
              class="w-full h-72 object-cover bg-inherit bg-center rounded-t"
            />
          </SwiperSlide>
          <SwiperSlide class="rounded shadow hover:shadow-lg transition">
            <img
              src="/assets/images/image/helmet.avif"
              alt="Product 2"
              class="w-full h-72 object-cover bg-inherit bg-center rounded-t"
            />
          </SwiperSlide>
          <SwiperSlide class="rounded shadow hover:shadow-lg transition">
            <img
              src="/assets/images/image/banner.webp"
              alt="Product 3"
              class="w-full h-72 object-cover bg-inherit bg-center rounded-t"
            />
          </SwiperSlide>

          <!-- Tombol Navigasi Kustom -->
          <div
            class="custom-swiper-prev absolute top-1/2 -translate-y-1/2 left-1 z-10 text-3xl text-gray-500 hover:text-gray-700 cursor-pointer select-none"
          >
            <Iconify icon="lsicon:left-filled" class="w-16 h-16" />
          </div>
          <div
            class="custom-swiper-next absolute top-1/2 -translate-y-1/2 right-1 z-10 text-3xl text-gray-500 hover:text-gray-700 cursor-pointer select-none"
          >
            <Iconify icon="lsicon:right-filled" class="w-16 h-16" />
          </div>
        </Swiper>

        <div class="custom-pagination mt-4 flex justify-center"></div>
      </div>
    </section>
    <section class="mt-5 container">
      <div class="mx-auto">
        <div class="flex py-3 justify-between items-center">
          <!-- Tombol-tombol kiri -->
          <div class="flex gap-5">
            <button
              class="rounded-full p-4 flex justify-center items-center bg-blue-500 border border-blue-500 gap-2 text-white py-1 hover:bg-blue-700 transition"
            >
              full face
            </button>
            <button
              class="rounded-full p-4 flex justify-center items-center bg-blue-100 border border-blue-500 gap-2 text-blackAccent py-1 hover:bg-blue-700 transition"
            >
              half face
            </button>
            <button
              class="rounded-full p-4 flex justify-center items-center bg-blue-100 border border-blue-500 gap-2 text-blackAccent py-1 hover:bg-blue-700 transition"
            >
              modular
            </button>
          </div>

          <!-- Tombol kanan -->
          <div>
            <button
              class="w-full rounded-full p-4 flex justify-center items-center bg-blue-100 border border-blue-500 gap-2 text-blackAccent py-1 hover:bg-blue-700 transition"
            >
              see all
            </button>
          </div>
        </div>

        <div class="grid grid-cols-1 mt-3 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <NuxtLink
            v-for="product in products.filter((p) => p.is_available)"
            :key="product.id"
            :to="`/${product.id}/detail`"
            target="_blank"
            class="bg-white cursor-pointer rounded shadow hover:shadow-lg transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
          >
            <img
              :src="product.image"
              :alt="product.name"
              class="w-full h-48 object-cover rounded-t"
            />
            <div class="p-4">
              <h3 class="text-lg font-semibold">{{ product.name }}</h3>
              <p class="text-gray-600 mt-3">{{ product.desc }}</p>
              <div class="flex justify-between">
                <p class="text-black text-xl font-bold mt-3">
                  {{ product.price }}
                </p>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>
    <footer />
    <ProductViev class="mt-5" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";

const products = ref([
  {
    id: 1,
    name: "Product One",
    desc:
      "Matelasse Caviar Skin Double Flap Double Chain Bag Black Gold Hardware IC Type",
    price: "$29.99",
    image: new URL("~/assets/images/image/halo-bar.jpg", import.meta.url).href,
    stock: 13,
    is_available: true,
    count: 0,
  },
  {
    id: 2,
    name: "Product Two",
    desc:
      "Matelasse Caviar Skin Double Flap Double Chain Bag Black Gold Hardware IC Type",
    price: "$39.99",
    image: new URL("~/assets/images/image/halo-bar.jpg", import.meta.url).href,
    is_available: false,
    stock: 13,

    count: 0,
  },
  {
    id: 3,
    name: "Product Three",
    desc:
      "Matelasse Caviar Skin Double Flap Double Chain Bag Black Gold Hardware IC Type",
    price: "$19.99",
    image: new URL("~/assets/images/image/halos-bg.jpg", import.meta.url).href,
    stock: 10,
    is_available: true,
    count: 0,
  },
  {
    id: 4,
    name: "Product Four",
    desc:
      "Matelasse Caviar Skin Double Flap Double Chain Bag Black Gold Hardware IC Type",
    price: "$49.99",
    image: new URL("~/assets/images/image/halos-bg.jpg", import.meta.url).href,
    stock: 13,
    is_available: true,
    count: 0,
  },
  {
    id: 5,
    name: "Product Five",
    desc:
      "Matelasse Caviar Skin Double Flap Double Chain Bag Black Gold Hardware IC Type",
    price: "$59.99",
    image: new URL("~/assets/images/image/halos-bg.jpg", import.meta.url).href,
    stock: 13,
    is_available: true,
    count: 0,
  },
  {
    id: 6,
    name: "Product Six",
    desc:
      "Matelasse Caviar Skin Double Flap Double Chain Bag Black Gold Hardware IC Type",
    price: "$24.99",
    image: new URL("~/assets/images/image/halo-bar.jpg", import.meta.url).href,
    stock: 13,
    is_available: true,
    count: 0,
  },
  {
    id: 7,
    name: "Banner",
    desc:
      "Matelasse Caviar Skin Double Flap Double Chain Bag Black Gold Hardware IC Type",
    price: "$24.99",
    image: new URL("~/assets/images/image/store-banner2.webp", import.meta.url).href,
    stock: 13,
    is_available: true,
    count: 0,
  },
]);
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
