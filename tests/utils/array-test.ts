import {filterIsNotNill} from "../../utils/array.ts";
import {assertEquals} from "@std/assert";

Deno.test(function filterIsNotNillTest() {
  const array: Array<number | null | undefined> = [0, 4, 5, null, 6, undefined];
  const arrayNotNill: number[] = filterIsNotNill(array);
  assertEquals(arrayNotNill.length, 4);
});
