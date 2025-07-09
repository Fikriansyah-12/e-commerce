// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  routeRules: {
    "/": { redirect: "/auth/login" },
  },
  runtimeConfig: {
    enviroment: "PRODUCTION",
    public: {
      baseUrl: "",
      appUrl: "",
      version: "0.0.0",
    },
  },

  app: {
    head: {
      meta: [
        { "http-equiv": "X-UA-Compatible", content: "IE=edge"},
        { name: "viewport", content: "width=device-width, initial-scale=1.0, shrink-to-fit=no"},
      ],
      htmlAttrs: {
        lang: "en"
      },
      charset: "utf-8",
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },

  modules: [[
    '@pinia/nuxt',
    {
      autoImports: [
        'defineStore',
        ['defineStore', 'definePiniaStore'],
      ],
    },
  ], [
    '@nuxtjs/eslint-module', 
    {
      failOnError: true,
      formatter: 'unix',
    }
  ], "@nuxt/eslint", "@nuxt/image"],

  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  build : {
    transpile: ['gsap']
  },

  compatibilityDate: "2024-11-01",
})