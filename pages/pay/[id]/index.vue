<script setup lang="ts">
import haloBar from "@/assets/images/image/halo-bar.jpg";
const summaryItems = [
  { label: "Subtotal", value: "10.000" },
  { label: "Tax", value: "0" },
  { label: "Total", value: "10.000" },
];
</script>
<template>
  <div class="container">
    <div class="bg-gray-200 text-left my-3 shadow-lg">
      <NuxtLink to="/" class="flex items-center">
        <img src="~/assets/images/image/visor.png" alt="Halos Logo" class="w-20" />
        <p class="h-full">|</p>
        <p class="font-medium text-sky-900 ml-2">Checkout</p>
      </NuxtLink>
    </div>
    <div class="checkout-container">
      <div class="address shadow-lg">
        <div class="flex items-center gap-2 mb-5">
          <Iconify icon="arcticons:mapsgo" class="w-5 text-red-900 text-lg" />
          <label>Alamat Pembeli</label>
        </div>
        <div class="gap-2 flex items-center">
          <p class="font-semibold">Thomas Ardiansyah</p>
          <p class="font-semibold">(+62)89677639273</p>
          <p>Jl.terusan suez, kec jauh kel tenggelam, jakarta barat</p>
        </div>
      </div>
      <div class="summary space-y-2 shadow-lg">
        <div
          v-for="(item, index) in summaryItems"
          :key="index"
          class="flex justify-between border-b-2 border-black pb-1"
        >
          <div>{{ item.label }}</div>
          <div>{{ item.value }}</div>
        </div>
        <div class="payment mt-2 space-y-2">
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
        </div>

        <button class="bg-blue-800 text-white mt-3 w-full p-2 rounded">
          Proceed to payment
        </button>
      </div>
      <div class="products">
        <div class="product-item shadow-lg">
          <img :src="haloBar" class="w-full" />
        </div>
        <div class="product-item shadow-lg">
          <div class="font-semibold mb-2">Description</div>
          <p class="mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus beatae
            nam officia eligendi alias placeat maiores repudiandae inventore voluptatum
            exercitationem, ducimus est aliquid dignissimos nisi, minima recusandae
            voluptates ut sequi?
          </p>
          <div class="font-semibold mb-2">Harga</div>
          <div class="flex items-center justify-between">
            <p>Rp.10.000.00</p>
            <p>Qty:<span>5</span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
