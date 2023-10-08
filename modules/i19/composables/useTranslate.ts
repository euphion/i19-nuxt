import { pluralForm } from "../helpers"

export function useTranslate(
  translationKey: string,
  variables: { [key: string]: string | number } | null = null,
  countable = 1
): string {
  const { $currentLocale, $locales } = useNuxtApp()
  const translation = ($locales as Record<string, any>)?.[
    $currentLocale as string
  ]?.translations[translationKey]

  if (!translation) {
    return translationKey
  }

  let result: string = translation

  if (typeof translation !== "string") {
    const pluralFormIndex = pluralForm($currentLocale as string, countable)
    result = translation[pluralFormIndex]
  }

  if (Object.entries(variables || {}).length) {
    for (const key in variables) {
      const keyWithBrackets = "{" + key + "}"
      result = result.replace(
        new RegExp(keyWithBrackets),
        <string>variables[key]
      )
    }
  }

  return result
}
