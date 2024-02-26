import {assertEquals} from "$deno/testing/asserts.ts";
import {limitLength} from "../../utils/strings.ts";
import {filterIsNotNill} from "../../utils/array.ts";

Deno.test(function filterIsNotNillTest() {
    const array: Array<number | null | undefined> = [0,4,5, null, 6, undefined];
    const arrayNotNill: number[] = filterIsNotNill(array);
    assertEquals(arrayNotNill.length, 4);
});
