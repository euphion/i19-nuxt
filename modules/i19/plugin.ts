export default defineNuxtPlugin(async (nuxtApp) => {
  const { locales, defaultLocale } = useRuntimeConfig().public.i19
  const { fullPath } = useRoute()
  let currentLocale = ""

  for (const locale of Object.keys(locales)) {
    if (fullPath.startsWith(`/${locale}/`) || fullPath === `/${locale}`) {
      currentLocale = locale
    }
  }

  const currentLocaleCode =
    (locales as Record<string, any>)?.[currentLocale || defaultLocale]?.code ||
    ""

  nuxtApp.provide("currentLocale", currentLocale || defaultLocale)
  nuxtApp.provide("currentLocaleCode", currentLocaleCode)
  nuxtApp.provide("locales", locales)
})
