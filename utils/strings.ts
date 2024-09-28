/**
 * zkrátí text a doplní ...
 */
export function limitLength(
  str: string | null | undefined,
  limit: number,
  addText: string = "...",
): string | null {
  if (!str) return null;

  if (limit >= str.length) {
    return str;
  }

  return `${str.slice(0, limit)}${addText}`;
}

/**
 * vrátí znaky za poslední výsketem search z @param str @param search
 * @param fromIndex
 */
export function substringAfterLast(
  str: string,
  search: string,
  fromIndex?: number,
):string  {
  const idx: number = str.lastIndexOf(search, fromIndex);
  if (idx === -1) {
    return "";
  }
  return str.substring(idx + search.length);
}
