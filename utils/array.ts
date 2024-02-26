export function filterIsNotNill<T>(array: T[]): Array<NonNullable<T>> {
    return array.filter((it): it is NonNullable<T> => it !== undefined && it !== null);
}
