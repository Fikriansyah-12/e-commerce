<script setup lang="ts">
import Swal from "sweetalert2";
import { useRouter } from "vue-router";

const router = useRouter();

// Dummy data akun
const dummyUsers = [
  { email: "user@example.com", password: "Password123!" },
  { email: "admin@example.com", password: "Admin@123" },
];

// Form data
const email = ref("");
const password = ref("");

async function login() {
  // Validasi wajib isi
  if (!email.value.trim() || !password.value.trim()) {
    await Swal.fire({
      icon: "warning",
      title: "Form belum lengkap",
      text: "Email dan password wajib diisi.",
      confirmButtonColor: "#f39c12",
    });
    return;
  }

  const foundUser = dummyUsers.find((u) => u.email === email.value);

  if (!foundUser) {
    await Swal.fire({
      icon: "error",
      title: "Email tidak terdaftar",
      text: "Silakan registrasi terlebih dahulu.",
      confirmButtonColor: "#d33",
    });
    return;
  }

  if (foundUser.password !== password.value) {
    await Swal.fire({
      icon: "error",
      title: "Password salah",
      text: "Periksa kembali password Anda.",
      confirmButtonColor: "#d33",
    });
    return;
  }

  await Swal.fire({
    icon: "success",
    title: "Login sukses!",
    confirmButtonColor: "#3085d6",
  });

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
        <form class="space-y-4" @submit.prevent="login">
          <div>
            <label class="block mb-1 text-whiteAccent font-medium">Email</label>
            <input
              v-model="email"
              type="email"
              class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label class="block mb-1 text-whiteAccent font-medium">Password</label>
            <input
              v-model="password"
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
