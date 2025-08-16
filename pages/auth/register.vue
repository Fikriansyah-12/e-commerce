<script setup lang="ts">
import { useForm, useField } from "vee-validate";
import * as yup from "yup";
import { useRouter } from "vue-router";
import Swal from "sweetalert2";
import { ref } from "vue";

const router = useRouter();
const showPassword = ref(false);

// Dummy database email terdaftar
const registeredEmails = ["test@example.com", "john@doe.com"];

definePageMeta({
  layout: "login",
});

const schema = yup.object({
  name: yup.string().required("Nama wajib diisi"),
  email: yup
    .string()
    .required("Email wajib diisi")
    .email("Format email tidak valid")
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Email tidak cocok dengan pola khusus"
    ),
  password: yup
    .string()
    .required("Password wajib diisi")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/,
      "Password harus mengandung huruf besar, huruf kecil, angka, dan karakter spesial"
    )
    .min(6, "Password minimal 6 karakter"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Konfirmasi password tidak cocok")
    .required("Konfirmasi password wajib diisi"),
});

function togglePasswordVisibility() {
  showPassword.value = !showPassword.value;
}

const { handleSubmit, errors, setFieldError } = useForm({
  validationSchema: schema,
});

const { value: name } = useField<string>("name");
const { value: email } = useField<string>("email");
const { value: password } = useField<string>("password");
const { value: confirmPassword } = useField<string>("confirmPassword");

const onSubmit = handleSubmit(async (values) => {
  // Cek apakah email sudah terdaftar (dummy)
  if (registeredEmails.includes(values.email.trim().toLowerCase())) {
    setFieldError("email", "Email sudah terdaftar");
    return;
  }

  await Swal.fire({
    icon: "success",
    title: "Registrasi Berhasil!",
    text: "Silakan login menggunakan akun Anda.",
    confirmButtonColor: "#3085d6",
    confirmButtonText: "OK",
  });

  router.push("/auth/login");
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
        <form class="space-y-4" @submit.prevent="onSubmit">
          <div>
            <label class="block mb-1 text-whiteAccent font-medium">Name</label>
            <input
              v-model="name"
              type="text"
              class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
              placeholder="john doe"
            />
            <p v-if="errors.name" class="text-red-500 text-sm">{{ errors.name }}</p>
          </div>
          <div>
            <label class="block mb-1 text-whiteAccent font-medium">Email</label>
            <input
              v-model="email"
              type="email"
              class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
              placeholder="you@example.com"
            />
            <p v-if="errors.email" class="text-red-500 text-sm">{{ errors.email }}</p>
          </div>
          <div>
            <label class="block mb-1 text-whiteAccent font-medium">Password</label>
            <div
              class="flex bg-white items-center border rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-blue-500"
            >
              <input
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                class="flex-1 px-4 py-2 outline-none"
                placeholder="******"
              />
              <button
                type="button"
                class="px-4 py-2 text-gray-600 hover:text-black"
                @click="togglePasswordVisibility"
              >
                <Iconify
                  :icon="showPassword ? 'mdi:eye-off' : 'mdi:eye'"
                  class="w-5 h-5"
                />
              </button>
            </div>
            <p v-if="errors.password" class="text-red-500 text-sm">
              {{ errors.password }}
            </p>
          </div>
          <div>
            <label class="block mb-1 text-whiteAccent font-medium"
              >Confirmed Password</label
            >
            <div
              class="flex bg-white items-center border rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-blue-500"
            >
              <input
                v-model="confirmPassword"
                :type="showPassword ? 'text' : 'password'"
                class="flex-1 px-4 py-2 outline-none"
                placeholder="********"
              />
              <button
                type="button"
                class="px-4 py-2 text-gray-600 hover:text-black"
                @click="togglePasswordVisibility"
              >
                <Iconify
                  :icon="showPassword ? 'mdi:eye-off' : 'mdi:eye'"
                  class="w-5 h-5"
                />
              </button>
            </div>
            <p v-if="errors.confirmPassword" class="text-red-500 text-sm">
              {{ errors.confirmPassword }}
            </p>
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
