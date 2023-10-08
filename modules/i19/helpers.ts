export function pluralForm(locale: string, countable: number): number {
  // https://docs.translatehouse.org/projects/localization-guide/en/latest/l10n/pluralforms.html
  if (locale === "cs") {
    if (countable === 0 || countable > 4) {
      return 0
    }
    if (countable === 1) {
      return 1
    }
    return 2
  }

  // locale = en
  return countable === 1 ? 0 : 1;
}
