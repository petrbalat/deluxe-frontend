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
