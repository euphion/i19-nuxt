import {
  defineNuxtModule,
  addPlugin,
  createResolver,
  addImportsDir,
} from "@nuxt/kit"
import defu from "defu"

export default defineNuxtModule({
  meta: {
    name: "i19",
    configKey: "i19",
    compatibility: {
        nuxt: '^3.7.0'
    }
  },
  async setup(
    {
      defaultLocale = "en",
      prefixExceptDefaultLocale = true,
      baseDir = "i19",
      routesFile = "routes.js",
      locales = {},
    },
    nuxt
  ) {
    const routes = await import(
      createResolver(".").resolve(baseDir, routesFile)
    )

    nuxt.options.runtimeConfig.public.i19 = defu(
      nuxt.options.runtimeConfig.public.i19 as any,
      {
        defaultLocale,
        prefixExceptDefaultLocale,
        baseDir,
        locales,
        routes: routes,
      }
    )

    const { resolve } = createResolver(import.meta.url)
    addPlugin(resolve("./plugin"))
    addImportsDir(resolve("./composables"))

    nuxt.hook("pages:extend", async (pages) => {
      for (const page of pages) {
        page.alias = []

        if ((page.name as string) in routes) {
          for (const locale of Object.keys(locales)) {
            const route = <string>routes[page.name as keyof typeof routes][locale]

            const alias = prefixExceptDefaultLocale
              ? locale === defaultLocale
                ? route
                : `/${locale + route}`
              : `/${locale + route}`

            if (
              defaultLocale === locale &&
              !(route === "/" && !prefixExceptDefaultLocale)
            ) {
              page.path = alias
            }

            if (page.path !== alias) {
              page.alias.push(alias)
            }
          }
        }
      }
    })
  },
})
