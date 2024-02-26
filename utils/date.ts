/**
 *
 * @param datePar
 * @param month
 */
export function formatDate(datePar?: Date | string | null,
                           month:  "numeric" | "2-digit" | "long" | "short" | "narrow" = 'long'): string | null {
  if(!datePar) return null;

  const date = parseDate(datePar);
  const monthShort = new Intl.DateTimeFormat('cs', { month });
  return `${day.format(date)} ${monthShort.format(date)} ${year.format(date)}`;
}

const year = new Intl.DateTimeFormat('cs', { year: 'numeric' });
const day = new Intl.DateTimeFormat('cs', { day: '2-digit' });


export function parseDate(date?: null): null;
export function parseDate(date: Date | string): Date;

export function parseDate(date?: Date | string | null): Date | null {
  if(!date) return null;

  if(date instanceof Date) return date;

  return new Date(date);
}

export function dateWithoutTimezone(date: Date): string {
    const tzoffset = date.getTimezoneOffset() * 60000; //offset in milliseconds
    return new Date(date.valueOf() - tzoffset)
        .toISOString()
        .slice(0, -1);
}
