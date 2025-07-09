<script setup lang="ts">
import Swal from "sweetalert2";
const router = useRouter();

async function handleSubmit() {
  // Tampilkan pop-up sukses
  await Swal.fire({
    icon: "success",
    title: "Registrasi Berhasil!",
    text: "Silakan login menggunakan akun Anda.",
    confirmButtonColor: "#3085d6",
    confirmButtonText: "OK",
  });

  // Setelah user klik OK, redirect ke halaman login
  router.push("/auth/login");
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
        <h2 class="text-2xl text-whiteAccent font-bold mb-6">Create your account</h2>
        <form class="space-y-4" @submit.prevent="handleSubmit">
          <div>
            <label class="block mb-1 text-whiteAccent font-medium">Name</label>
            <input
              type="text"
              class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
              placeholder="john doe"
            />
          </div>
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
            Register
          </button>
        </form>
        <div class="text-white mt-3 text-center">
          <p>
            don't have an account?
            <NuxtLink class="text-brand cursor-pointer hover:text-brandSecondary"
              >register</NuxtLink
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
