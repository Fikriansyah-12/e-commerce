<template>
  <div class="bg-gray-50 mb-5">
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

        <div class="grid grid-cols-1 mt-3 p-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
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
              class="w-full h-48 object-cover bg-inherit rounded-t"
            />
            <div class="p-4">
              <h3 class="text-lg font-semibold">{{ product.name }}</h3>
              <p class="text-gray-600 mt-3">
                {{
                  isExpanded(product.id)
                    ? product.desc
                    : product.desc.slice(0, 100) +
                      (product.desc.length > 100 ? "..." : "")
                }}
              </p>
              <button
                v-if="product.desc.length > 100"
                class="text-blue-500 mt-1 text-sm"
                @click.stop.prevent="toggleDescription(product.id)"
              >
                {{ isExpanded(product.id) ? "Show less" : "Read more" }}
              </button>
              <div class="flex justify-between">
                <div class="text-black text-xl font-bold mt-3">
                  <span class="text-sm font-medium">Rp.</span>{{ product.price }}
                </div>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>
    <footer />
    <!-- <ProductViev class="mt-5" /> -->
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
    name: "Osbe Silver Visor Google Mask - Black",
    desc:
      "Osbe Silver Visor Google Mask - Black merupakan goggle mask modular berbahan ABS yang didesain trendy & sporty. Dirancang dengan lensa silver, frame lentur anti pecah, serta lapisan busa untuk menyaring debu dan sebagai sirkulasi udara. Dilengkapi protector di mulut dan bagian belakang dilapisi karet anti slip. Cocok digunakan siang hari.",
    price: "200.000",
    image: new URL("~/assets/images/image/visor.webp", import.meta.url).href,
    stock: 13,
    is_available: true,
    count: 0,
  },
  {
    id: 2,
    name: "RSV Classic Series",
    desc:
      "Untuk keamanaan, Classic Series dibekali chinstrap berjenis DD-Ring. Demi kenyamanan konsumen, inner padding atau busa bagian dalam mudah dilepas (Removable padding)",
    price: "170.000",
    image: new URL("~/assets/images/image/helm-face-off.jpg", import.meta.url).href,
    is_available: true,
    stock: 13,

    count: 0,
  },
  {
    id: 3,
    name: "Helm Retro White",
    desc:
      "Helm retro classic berwarna putih dengan desain minimalis elegan. Dilengkapi dengan kaca bening, tali pengaman kuat, dan busa dalam yang nyaman. Cocok untuk pengendara motor klasik dan harian.",
    price: "150.000",
    image: new URL("~/assets/images/image/reto-helm.png", import.meta.url).href,
    stock: 10,
    is_available: true,
    count: 0,
  },
  {
    id: 4,
    name: "Retro Bogo Green",
    desc:
      "Helm retro Bogo warna hijau dengan desain klasik dan kaca bening. Menggunakan bahan ABS berkualitas dan dilapisi busa lembut di bagian dalam untuk kenyamanan dan keamanan berkendara.",
    price: "175.000",
    image: new URL("~/assets/images/image/retro-helm-green.avif", import.meta.url).href,
    stock: 13,
    is_available: true,
    count: 0,
  },
  {
    id: 5,
    name: "Retro Bogo Silver SVV",
    desc:
      "Helm retro Bogo warna silver dengan desain klasik dan kaca bening. Menggunakan bahan ABS berkualitas dan dilapisi busa lembut di bagian dalam untuk kenyamanan dan keamanan berkendara.",
    price: "178.000",
    image: new URL("~/assets/images/image/retro-helm-grey.jpeg", import.meta.url).href,
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
    is_available: false,
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
    is_available: false,
    count: 0,
  },
]);
const expandedDescriptions = ref<number[]>([]);

const isExpanded = (id: number) => {
  return expandedDescriptions.value.includes(id);
};

const toggleDescription = (id: number) => {
  if (isExpanded(id)) {
    expandedDescriptions.value = expandedDescriptions.value.filter(
      (itemId) => itemId !== id
    );
  } else {
    expandedDescriptions.value.push(id);
  }
};
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
