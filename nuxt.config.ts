// https://nuxt.com/docs/api/configuration/nuxt-config
import en from "./i19/translations/en"
import cs from "./i19/translations/cs"

export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  i19: {
    defaultLocale: "en",
    locales: {
      en: {
        code: "en",
        translations: en,
      },
      cs: {
        code: "cs",
        translations: cs,
      },
    },
  },
})
