import { useGetPathWithPrefix } from "./useGetPathWithPrefix"

type urlParams = { [key: string]: string | number } | null

export function useTranslateRoute(
  name: string,
  { params, query }: { params?: urlParams; query?: urlParams } = {},
  locale?: string
): string {
  const { routes } = useRuntimeConfig().public.i19
  const $currentLocale = useNuxtApp().$currentLocale as string

  const route = (routes as Record<string, any>)?.[name]?.[
    locale || $currentLocale
  ]

  if (!route) {
    return "/"
  }

  let result = route

  if (params && Object.keys(params).length) {
    let dynamicRoute = route

    for (const [key, value] of Object.entries(params)) {
      const regex = new RegExp(`:${key}(?!([a-zA-Z0-9]))`)
      dynamicRoute = dynamicRoute.replace(regex, value.toString())
    }

    result = dynamicRoute
  }

  result = useGetPathWithPrefix(result, locale || $currentLocale)
    .replace(/\/?:(.*)/g, "")
    .replace("?", "")

  if (query && Object.keys(query).length) {
    const searchParams = new URLSearchParams(query as Record<string, string>)
    result = result + `?${searchParams.toString()}`
  }

  return result
}
