export function hasNext<T>(pageable: Pageable<T>): boolean {
  return (pageable.number + 1) < pageable.totalPages;
}

export function hasPrevious<T>(pageable: Pageable<T>): boolean {
  return pageable.number > 0;
}

export interface Pageable<T> {
  content: T[];

  number: number;
  totalPages: number;
}
