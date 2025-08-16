<script setup lang="ts">
import { ref } from "vue";

const selectedColor = ref("red");

// Minus harus ada swiper
const productImages = ref([
  new URL("~/assets/images/image/visor.webp", import.meta.url).href,
  new URL("~/assets/images/image/helm-face-off.jpg", import.meta.url).href,
  new URL("~/assets/images/image/retro-helm-green.avif", import.meta.url).href,
]);

const selectedImage = ref(productImages.value[0]);
const products = ref([{ id: 1, name: "Basic Tee 6-Pack", count: 1, stok: 12 }]);

const product = products.value[0];

function increment(product: any) {
  const p = products.value.find((p: { id: any }) => p.id === product.id);
  if (p && p.count < p.stok) {
    p.count++;
  }
}

function decrement(product: any) {
  const p = products.value.find((p: { id: any }) => p.id === product.id);
  if (p && p.count > 0) {
    p.count--;
  }
}

function navigateToCheckout() {
  navigateTo(`/pay/${product.id}`);
}
</script>
<template>
  <div class="bg-white container">
    <div class="pt-6 grid grid-cols-2">
      <div class="mx-auto">
        <img
          :src="selectedImage"
          alt="Main product image"
          class="aspect-video h-auto object-contain bg-gray-200 rounded-lg max-lg:hidden"
        />

        <!-- Gambar thumbnail di bawahnya -->
        <div class="mt-4 flex gap-3 justify-center">
          <img
            v-for="(img, index) in productImages"
            :key="index"
            :src="img"
            class="w-1/2 overflow-x-auto object-cover rounded border cursor-pointer hover:scale-105 transition-transform duration-200"
            :class="{ 'border-blue-500': selectedImage === img }"
            @click="selectedImage = img"
          />
        </div>
      </div>

      <!-- Product info -->
      <div class="mx-auto px-4">
        <div class="lg:col-span-2 lg:pr-8">
          <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Helm Retro Gray SVV
          </h1>
        </div>

        <!-- Options -->
        <div class="mt-4 lg:row-span-3">
          <p class="text-3xl tracking-tight text-gray-900"><span>Rp </span>150.000</p>

          <!-- Reviews -->
          <div class="mt-6">
            <h3 class="sr-only">Reviews</h3>
            <div class="flex items-center">
              <Iconify icon="emojione:star" class="w-5 h-5" />
              <Iconify icon="emojione:star" class="w-5 h-5" />
              <Iconify icon="emojione:star" class="w-5 h-5" />
              <Iconify icon="emojione:star" class="w-5 h-5" />
              <Iconify icon="emojione:star" class="w-5 h-5" />
              <a
                href="#"
                class="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >117 reviews</a
              >
            </div>
            <div class="gap-2">
              <p class="py-2">Color</p>
              <div class="flex gap-1">
                <label v-for="color in ['black', 'gray', 'yellow']" :key="color">
                  <input
                    v-model="selectedColor"
                    type="radio"
                    name="productColor"
                    :value="color"
                    class="peer hidden"
                  />
                  <div
                    class="w-8 h-8 cursor-pointer rounded-full border-2 peer-checked:ring-1 peer-checked:ring-offset-0 peer-checked:ring-indigo-500"
                    :style="{ backgroundColor: color }"
                  ></div>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div class="lg:col-span-2 lg:col-start-1 lg:pt-3 lg:pr-8 lg:pb-16">
          <div>
            <div class="text-gray-900">
              <p>
                Osbe Silver Visor Google Mask - Black merupakan goggle mask modular
                berbahan ABS yang didesain trendy &amp; sporty. Dirancang dengan lensa
                silver, frame lentur anti pecah, serta lapisan busa untuk menyaring debu
                dan sebagai sirkulasi udara. Dilengkapi protector di mulut dan bagian
                belakang dilapisi karet anti slip. Cocok digunakan siang hari.
              </p>
            </div>
          </div>

          <div class="mt-3">
            <h3 class="text-sm font-medium text-gray-900">Highlights</h3>

            <div class="mt-4">
              <ul role="list" class="list-disc space-y-2 pl-4 text-sm">
                <li class="text-gray-400">
                  <span class="text-gray-600"
                    >Dipotong dan dijahit tangan secara lokal</span
                  >
                </li>
                <li class="text-gray-400">
                  <span class="text-gray-600">Diwarnai dengan warna milik kami</span>
                </li>
                <li class="text-gray-400">
                  <span class="text-gray-600">Pra Cuci &amp; Pra Susut</span>
                </li>
                <li class="text-gray-400">
                  <span class="text-gray-600">Ultra-soft 100% cotton</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="mt-3">
            <h2 class="text-sm font-medium text-gray-900">Details</h2>

            <div class="space-y-6">
              <p class="text-sm text-gray-600">
                Osbe Silver Visor Google Mask - Black merupakan goggle mask modular
                berbahan ABS yang didesain trendy & sporty.
              </p>
            </div>
            <div class="flex justify-between items-center mt-3">
              <!-- Stok di kiri -->
              <div>
                <span class="text-lg font-medium">Stok: {{ product.stok }}</span>
              </div>

              <!-- Counter di kanan -->
              <div class="flex items-center">
                <button
                  class="bg-gray-300 text-black px-2 rounded hover:bg-gray-400"
                  @click="decrement(product)"
                >
                  -
                </button>
                <span class="mx-3 text-lg font-medium">{{ product.count }}</span>
                <button
                  class="bg-blue-600 text-white px-2 rounded hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
                  :disabled="product.count >= product.stok"
                  @click="increment(product)"
                >
                  +
                </button>
              </div>
            </div>

            <div class="mt-3 grid cursor-pointer grid-cols-2 gap-2">
              <button
                type="submit"
                class="p-2 w-full text-center bg-gray-600 text-base font-medium text-white hover:bg-gray-500"
              >
                <span class="inline-block align-middle">
                  <Iconify icon="mdi:cart-outline" class="w-5 h-5" />
                </span>
                <span class="inline-block align-middle ml-2">add to cart</span>
              </button>

              <NuxtLink
                type="submit"
                class="p-2 w-full text-center bg-green-600 text-base font-medium text-white hover:bg-green-500"
                @click="navigateToCheckout"
              >
                buy now
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
