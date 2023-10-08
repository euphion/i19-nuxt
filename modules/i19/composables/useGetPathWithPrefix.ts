export function useGetPathWithPrefix(path: string, locale?: string): string {
  const { defaultLocale, prefixExceptDefaultLocale } =
    useRuntimeConfig().public.i19

  if (prefixExceptDefaultLocale) {
    return locale === defaultLocale ? path : `/${locale + path}`
  } else {
    return `/${locale + path}`
  }
}
