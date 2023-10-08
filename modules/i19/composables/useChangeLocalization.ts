import { useTranslateRoute } from "./useTranslateRoute"

export function useChangeLocalization(locale: string) {
  const route = useRoute()

  const path = useTranslateRoute(
    route.name as string,
    {
      params: route.params as Record<string, any>,
      query: route.query as Record<string, any>,
    },
    locale
  )

  if (!path) {
    return
  }

  navigateTo(path, { replace: true, external: true })
}
