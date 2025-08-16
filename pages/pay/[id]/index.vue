<script setup>
import { ref } from "vue";

const product = ref({
  id: 1,
  name: "Helm Retro White",
  image: new URL("~/assets/images/image/reto-helm.png", import.meta.url).href,

  price: 150000,
  qty: 1,
});

const customer = ref({
  name: "",
  email: "",
  address: "",
});
</script>

<template>
  <div class="max-w-5xl mx-auto px-4 py-10">
    <h1 class="text-3xl font-bold mb-6">Checkout</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Product Summary -->
      <div class="bg-white p-6 rounded-lg shadow">
        <h2 class="text-xl font-semibold mb-4">Order Summary</h2>

        <div class="flex gap-4">
          <img
            :src="product.image"
            class="w-28 h-28 object-contain rounded bg-gray-100"
          />
          <div>
            <h3 class="font-medium text-lg">{{ product.name }}</h3>
            <p class="text-gray-600">Qty: {{ product.qty }}</p>
            <p class="text-blue-600 font-semibold text-lg mt-2">
              Rp.{{ product.price * product.qty }}
            </p>
          </div>
        </div>

        <hr class="my-4" />

        <div class="flex justify-between font-medium">
          <span>Total</span>
          <span>Rp{{ product.price * product.qty }}</span>
        </div>
      </div>

      <!-- Customer Info -->
      <div class="bg-white p-6 rounded-lg shadow">
        <h2 class="text-xl font-semibold mb-4">Shipping Details</h2>

        <form @submit.prevent="console.log('Paying...')">
          <div class="mb-4">
            <label class="block text-sm font-medium mb-1">Full Name</label>
            <input
              v-model="customer.name"
              type="text"
              class="w-full border rounded px-3 py-2"
              required
            />
          </div>

          <div class="mb-4">
            <label class="block text-sm font-medium mb-1">Email Address</label>
            <input
              v-model="customer.email"
              type="email"
              class="w-full border rounded px-3 py-2"
              required
            />
          </div>

          <div class="mb-6">
            <label class="block text-sm font-medium mb-1">Shipping Address</label>
            <textarea
              v-model="customer.address"
              rows="3"
              class="w-full border rounded px-3 py-2"
              required
            />
          </div>

          <button
            type="submit"
            class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full font-medium transition"
          >
            Pay
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
body {
  background-color: #f9fafb;
}
</style>
