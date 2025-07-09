<script setup lang="ts">
// Jika perlu, tambahkan logika login di sini
const router = useRouter();

function login() {
  router.push("/dashboard");
}
definePageMeta({
  layout: "login",
});
</script>

<template>
  <div class="flex min-h-screen">
    <div class="hidden lg:flex w-1/2 justify-center items-center bg-slate-50">
      <img src="/assets/images/image/obse.png" alt="Cv Obsetinator" class="w-64" />
    </div>

    <div class="flex bg-slate-700 w-full lg:w-1/2 justify-center items-center p-8">
      <div class="w-full max-w-md">
        <h2 class="text-2xl text-whiteAccent font-bold mb-6">Login</h2>
        <form @submit.prevent="login" class="space-y-4">
          <div>
            <label class="block mb-1 text-whiteAccent font-medium">Email</label>
            <input
              type="email"
              class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label class="block mb-1 text-whiteAccent font-medium">Password</label>
            <input
              type="password"
              class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
              placeholder="********"
            />
          </div>
          <button
            type="submit"
            class="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
        <div class="text-white mt-3 text-center">
          <p>
            don't have an account?
            <NuxtLink
              to="/auth/register"
              class="text-brand cursor-pointer hover:text-brandSecondary"
              >register</NuxtLink
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
