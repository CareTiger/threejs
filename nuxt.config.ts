// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    meta: {
        link: [
            {
                href: "https://fonts.googleapis.com/icon?family=Material+Icons+Sharp",
                rel: "stylesheet",
            },
        ],
    },
    modules: [
        "@nuxtjs/color-mode",
        "@nuxtjs/tailwindcss",
        "@tailwindcss/forms",
        "@vueuse/nuxt",
        "@pinia/nuxt",
    ],
});
