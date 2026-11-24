import { fr, type Dictionary } from "./fr";

export type { Dictionary };
export type Locale = "fr";

const NNBSP = " "; // narrow no-break space
const NBSP = " ";

/** French typography: spaces before high punctuation, guillemets, amounts. */
export function frTypo(s: string): string {
  return s
    .replace(/ ([;:!?»%])/g, `${NNBSP}$1`)
    .replace(/« /g, `«${NNBSP}`)
    .replace(/(\d) (\d{3})(?!\d)/g, `$1${NNBSP}$2`)
    .replace(/(\d) (\d{3})(?!\d)/g, `$1${NNBSP}$2`)
    .replace(/(\d) (FCFA|kg)\b/g, `$1${NBSP}$2`);
}

function deepTypo<T>(value: T): T {
  if (typeof value === "string") return frTypo(value) as T;
  if (Array.isArray(value)) return value.map(deepTypo) as T;
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([k, v]) => [k, k === "href" || k === "id" || k === "value" ? v : deepTypo(v)]),
    ) as T;
  }
  return value;
}

const dictionaries: Record<Locale, Dictionary> = {
  fr: deepTypo(fr),
};

export function getDictionary(locale: Locale = "fr"): Dictionary {
  return dictionaries[locale];
}
