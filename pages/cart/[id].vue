<script setup lang="ts">
import { useRouter } from "vue-router";
import haloBar from "@/assets/images/image/reto-helm.png";

const router = useRouter();

function goToPayment() {
  router.push(`/pay/${product.id}`);
}
function goToShoping() {
  router.push(`/dashboard`);
}

const summaryItems = [
  { label: "Subtotal", value: "Rp.10.000" },
  { label: "Tax", value: "0" },
  { label: "Store pickup", value: "0" },
];

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
function addToFavorite(product: any) {
  console.log("Favorit ditambahkan:", product);
}

function removeProduct(product: any) {
  console.log("Produk dihapus:", product);
}
</script>
<template>
  <div class="container">
    <div class="bg-gray-100 text-left my-3 shadow-lg">
      <NuxtLink to="/" class="flex items-center">
        <img src="~/assets/images/image/visor.png" alt="Halos Logo" class="w-20" />
        <p class="h-full">|</p>
        <p class="font-medium text-sky-900 ml-2">Shoping cart</p>
      </NuxtLink>
    </div>
    <div class="checkout-container">
      <div class="summary bg-gray-50 shadow-lg">
        <p class="text-xl font-semibold">Order summary</p>
        <div
          v-for="(item, index) in summaryItems"
          :key="index"
          class="flex space-y-2 justify-between"
        >
          <p>{{ item.label }}</p>
          <p>{{ item.value }}</p>
        </div>
        <div class="border-black border-b-2"></div>
        <div class="mt-2 flex justify-between items-center">
          <p>Total</p>
          <p>Rp.10.000</p>
        </div>
        <!-- <div class="payment mt-2 space-y-2">
          <label class="flex items-center space-x-2">
            <input type="radio" name="payment" value="Credit Card" />
            <span>Credit Card</span>
          </label>
          <label class="flex items-center space-x-2">
            <input type="radio" name="payment" value="Debit Card" />
            <span>Debit Card</span>
          </label>
          <label class="flex items-center space-x-2">
            <input type="radio" name="payment" value="Cash" />
            <span>Cash</span>
          </label>
          <label class="flex items-center space-x-2">
            <input type="radio" name="payment" value="Bank Transfer" />
            <span>Bank Transfer</span>
          </label>
        </div> -->

        <button
          class="bg-blue-800 text-white mt-3 w-full p-2 rounded"
          @click="goToPayment"
        >
          Proceed to checkout
        </button>
        <button
          class="w-full mt-4 flex items-center justify-center gap-2 text-sm"
          @click="goToShoping"
        >
          <span class="text-gray-500">or</span>
          <span class="flex items-center text-blue-600 hover:underline">
            Continue shopping
            <Iconify icon="mingcute:arrow-right-line" class="ml-1 w-4 h-4" />
          </span>
        </button>
      </div>
      <div class="mt-2 border-b-2">
        <div class="flex border-b-gray-200 border-b-0 items-center justify-between">
          <img :src="haloBar" class="w-28" />

          <div class="w-1/3 text-sm">
            <p>
              Osbe Silver Visor Google Mask - Black merupakan goggle mask modular berbahan
              ABS yang didesain trendy &amp; sporty.
            </p>

            <!-- Tombol favorit & remove -->
            <div class="mt-2 flex gap-2">
              <button
                class="text-xs gap-2 flex items-center justify-center font-semibold px-3 py-1 text-gray-500 rounded hover:underline hover:text-gray-400"
                @click="removeProduct(product)"
              >
                <Iconify icon="material-symbols-light:favorite-outline" class="w-4 h-4" />
                Add to favorites
              </button>
              <button
                class="text-xs gap-2 flex items-center justify-center font-semibold px-3 py-1 text-red-600 hover:underline rounded hover:text-red-400"
                @click="addToFavorite(product)"
              >
                <Iconify icon="mdi:remove" class="w-4 h-4" />
                Remove
              </button>
            </div>
          </div>

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

          <span>Rp.</span>
          <p>150.000</p>
        </div>
      </div>
    </div>
  </div>
</template>
