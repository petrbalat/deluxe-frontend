import {
  debounceTime,
  distinctUntilChanged,
  filter,
  finalize,
  fromEvent,
  map, merge, of,
  Subscription, Observable,
  switchMap,
  tap,
  throwError,
} from 'https://deno.land/x/rxjs@v1.0.2/mod.ts';
import {fromFetch} from 'https://deno.land/x/rxjs@v1.0.2/fetch/index.ts';

/**
 * našeptávač s rjxs
 */
export function autocomplete({
                               target,
                               url,
                               onSearch,
                               onSuccess,
                               onError,
                               onLoading,
                               minLength
                             }: AutocompleteType): Subscription {
  const searchText: Observable<any> = fromEvent(target, 'keyup').pipe(
    map((it: any | Event) => it.target?.value ?? '')
  );

  return merge(searchText, of('')).pipe(
    tap(onSearch),
    filter((it: string) => it.length >= minLength),
    debounceTime(400),
    distinctUntilChanged(),
    tap(() => onLoading?.(true)),
    switchMap((it: string) => fromFetch(`${url}${it}`).pipe(
      finalize(() => onLoading?.(false))
    )),
    switchMap((it: any) => {
      if (it.ok) {
        return it.json();
      } else {
        return throwError(() => ({error: true, status: it.status}));
      }
    }),
  ).subscribe({
    next: onSuccess,
    error: (err: any) => {
      if (onError) onError?.(err)
      else console.error(err);
    },
  });
}

export type AutocompleteType = {
  url: string;
  target: HTMLElement;
  minLength: number

  onSearch: (it: string) => void;
  onSuccess: (it: any) => void;
  onError?: ((it: any) => void);
  onLoading?: (it: boolean) => void;
}
