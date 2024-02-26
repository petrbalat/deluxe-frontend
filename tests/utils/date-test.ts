import {assertEquals} from "$deno/testing/asserts.ts";
import {dateWithoutTimezone, parseDate} from "../../utils/date.ts";


Deno.test(function parseDateTest() {
  const date = new Date(2012, 11, 7, 0, 0, 0);
  assertEquals(parseDate('2022-12-07 00:00:00').getMilliseconds(), date.getMilliseconds());
  assertEquals(parseDate(date).getMilliseconds(), date.getMilliseconds());
});

Deno.test(function dateWithoutTimezoneTest() {
  const date = new Date(2024, 11, 7, 0, 0, 0);
  assertEquals(dateWithoutTimezone(date), '2024-12-07T00:00:00.000');
});
