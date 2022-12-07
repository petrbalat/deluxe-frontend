import {assertEquals} from "$deno/testing/asserts.ts";
import {parseDate} from "../../utils/date.ts";


Deno.test("parseDate", async it => {
  const date = new Date(2012, 11, 7, 0, 0, 0);
  assertEquals(parseDate('2022-12-07 00:00:00').getMilliseconds(), date.getMilliseconds());
  assertEquals(parseDate(date).getMilliseconds(), date.getMilliseconds());
});
