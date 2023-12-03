// https://nuxt.com/docs/api/configuration/nuxt-config
import {resolve} from "path";
import {defineNuxtConfig} from "nuxt/config";

export default defineNuxtConfig({
// @ts-ignore
    devtools: {enabled: false},
    meta: {},
    head: {
        title: 'Nuxt 3 Project'
    },
    alias: {
        "@": resolve(__dirname, "/")
    },
    css: [
        "~/assets/main.scss"
    ],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    }
})
